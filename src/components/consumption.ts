import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, fireEvent } from 'custom-card-helpers';
import { style } from '../styles/consumption-styles';
import { TranslationUtils } from '../utils/translation-utils';
import { PlantEntityUtils } from '../utils/plant-entity-utils';
import { apexChartsLaden, ApexKonstruktor } from '../utils/apexcharts-laden';

interface ApexChart {
    render(): Promise<void>;
    updateOptions(options: ApexChartsOptions): void;
    destroy(): void;
}

interface ApexChartsOptions {
    chart?: {
        type?: string;
        height?: number;
        width?: number;
        background?: string;
        redrawOnParentResize?: boolean;
        animations?: {
            enabled?: boolean;
            speed?: number;
            animateGradually?: {
                enabled?: boolean;
                delay?: number;
            };
            dynamicAnimation?: {
                enabled?: boolean;
                speed?: number;
            };
        };
        events?: {
            dataPointSelection?: (event: unknown, chartContext: unknown, config: unknown) => void;
        };
    };
    series?: number[];
    labels?: string[];
    colors?: string[];
    legend?: {
        show?: boolean;
        position?: string;
        fontSize?: string;
        fontFamily?: string;
        fontWeight?: string;
        formatter?: (seriesName: string, opts: unknown) => string;
    };
    plotOptions?: {
        pie?: {
            donut?: {
                size?: string;
            };
        };
    };
    dataLabels?: {
        enabled?: boolean;
        style?: {
            fontSize?: string;
            fontFamily?: string;
        };
        textAnchor?: string;
        distributed?: boolean;
        color?: string;
        formatter?: (val: number, opts: unknown) => string | string[];
    };
    stroke?: {
        show?: boolean;
    };
    tooltip?: {
        enabled?: boolean;
        y?: {
            formatter?: (value: number) => string;
        };
    };
    responsive?: Array<{
        breakpoint?: number;
        options?: {
            chart?: {
                width?: number;
                height?: number;
            };
            legend?: {
                position?: string;
            };
        };
    }>;
}



interface PhaseDurations {
    'Seed': number;
    'Germination': number;
    'Rooting': number;
    'Growth': number;
    'Flowering Past': number;
    'Flowering To Go': number;
    'Harvested': number;
}

interface PhaseInfo {
    start: Date;
    end: Date | null;
    duration: number;
}

interface ConsumptionData {
    ppfd: number;
    fertilizer: number;
    water: number;
    power: number;
    cost: number;
}

// Farbkonfiguration aus der timeline.ts übernommen
const COLOR_CONFIG = {
    growth: { hue: 120, saturation: 60 },
    end: { hue: 0, saturation: 0 },
    pot: { hue: 207, saturation: 90 },
    area: { hue: 280, saturation: 70 },
    treatment: { hue: 45, saturation: 100 },
    image: { hue: 175, saturation: 70 }
} as const;

type PlantInfoHelpers = {
    helpers?: {
        growth_phase?: { entity_id?: string };
        flowering_duration?: { entity_id?: string };
    };
    diagnostic_sensors?: {
        total_integral?: { entity_id?: string };
        total_water_consumption?: { entity_id?: string };
        total_fertilizer_consumption?: { entity_id?: string };
        total_power_consumption?: { entity_id?: string };
        energy_cost?: { entity_id?: string };
    };
};

@customElement('flower-consumption')
export class FlowerConsumption extends LitElement {
    @property() hass?: HomeAssistant;
    @property() entityId?: string;
    @state() private _charts: Map<string, ApexChart> = new Map();
    @state() private _selectedPhase: string | null = null;
    @state() private _phaseData: Map<string, PhaseInfo> = new Map();
    @state() private _consumptionData: ConsumptionData | null = null;
    @state() private _plantInfo: PlantInfoHelpers | null = null;
    private _lastOptions: Map<string, ApexChartsOptions> = new Map();
    private _lastPhaseData: Map<string, string> = new Map();
    private _apex?: ApexKonstruktor;

    private async _loadPlantInfo(plantEntityId: string): Promise<void> {
        if (!this.hass) return;
        const info = PlantEntityUtils.buildPlantView(this.hass, plantEntityId);
        this._plantInfo = info as PlantInfoHelpers | null;
    }

    static styles = style;

    async firstUpdated() {
        await this._loadApexChartsScript();
        // Die Initialisierung des Charts wird jetzt vollständig von updated übernommen
        // Wir laden hier nur die ApexCharts-Bibliothek
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        // Aufräumen aller Charts und Daten
        this._charts.forEach(chart => {
            if (chart) {
                chart.destroy();
            }
        });
        this._charts.clear();
        this._lastPhaseData.clear();
    }

    private _showMoreInfo(entityId: string): void {
        fireEvent(this, 'hass-more-info', { entityId });
    }

    private async _updateConsumptionForPhase(plantName: string, phase: string | null) {
        if (!this.hass) return;

        // Wenn keine Phase ausgewählt ist, zeige Gesamtwerte
        if (!phase) {
            this._selectedPhase = null;
            this._consumptionData = null;
            // Trigger Animation für alle Werte
            this._triggerValueAnimation();
            this.requestUpdate();
            return;
        }

        const phaseInfo = this._phaseData.get(phase);
        if (!phaseInfo) return;

        const startTime = phaseInfo.start.toISOString();
        const endTime = (phaseInfo.end || new Date()).toISOString();

        // Lade Verbrauchsdaten für den Zeitraum — entity_ids aus plant/get_info
        // (sprachneutral, statt hartkodierter sensor.X_total_Y Patterns).
        try {
            const diag = this._plantInfo?.diagnostic_sensors;
            const sensors = [
                diag?.total_integral?.entity_id,
                diag?.total_fertilizer_consumption?.entity_id,
                diag?.total_water_consumption?.entity_id,
                diag?.total_power_consumption?.entity_id,
                diag?.energy_cost?.entity_id,
            ];
            if (sensors.some(s => !s)) {
                return; // plantInfo noch nicht geladen oder Plant ohne Diagnostics
            }

            const promises = sensors.map(sensor =>
                this.hass!.callApi('GET', `history/period/${startTime}?filter_entity_id=${sensor}&end_time=${endTime}`)
            );

            const results = await Promise.all(promises);
            
            const calculateDiff = (history: Array<Array<{state: string; last_changed: string}>>) => {
                if (!history || !history[0] || history[0].length < 2) return 0;
                const values = history[0]
                    .filter(state => state.state !== 'unavailable' && state.state !== 'unknown')
                    .map(state => parseFloat(state.state));
                return values.length >= 2 ? values[values.length - 1] - values[0] : values[0] || 0;
            };

            this._consumptionData = {
                ppfd: calculateDiff(results[0] as Array<Array<{state: string; last_changed: string}>>),
                fertilizer: calculateDiff(results[1] as Array<Array<{state: string; last_changed: string}>>),
                water: calculateDiff(results[2] as Array<Array<{state: string; last_changed: string}>>),
                power: calculateDiff(results[3] as Array<Array<{state: string; last_changed: string}>>),
                cost: calculateDiff(results[4] as Array<Array<{state: string; last_changed: string}>>)
            };

            // Trigger Animation für alle Werte
            this._triggerValueAnimation();
            this.requestUpdate();
        } catch (err) {
            console.warn('Fehler beim Laden der Verbrauchsdaten:', err);
        }
    }

    private _triggerValueAnimation() {
        // Finde alle Kacheln
        const items = this.shadowRoot?.querySelectorAll('.consumption-item') as NodeListOf<HTMLElement>;
        if (!items) return;
        
        // Entferne und füge die Animations-Klasse neu hinzu
        items.forEach(element => {
            element.classList.remove('animate');
            // Force Reflow
            void element.offsetWidth;
            element.classList.add('animate');
        });
    }

    render(): TemplateResult {
        if (!this.hass || !this.entityId) return html``;

        const plantName = this.entityId.split('.')[1];

        // Entity-IDs aus plant/get_info (sprachneutral) — keine hartkodierten sensor.X_total_Y Patterns.
        const diag = this._plantInfo?.diagnostic_sensors;
        const ppfdId = diag?.total_integral?.entity_id ?? '';
        const fertId = diag?.total_fertilizer_consumption?.entity_id ?? '';
        const waterId = diag?.total_water_consumption?.entity_id ?? '';
        const powerId = diag?.total_power_consumption?.entity_id ?? '';
        const costId = diag?.energy_cost?.entity_id ?? '';

        // Formatierungsfunktion für die Werte
        const formatValue = (value: number | string, decimals: number = 1): string => {
            if (typeof value === 'string') value = parseFloat(value);
            return isNaN(value) ? 'N/A' : value.toFixed(decimals);
        };

        return html`
            <div class="consumption-data">
                <div class="consumption-item" @click="${() => ppfdId && this._showMoreInfo(ppfdId)}">
                    <ha-icon icon="mdi:counter"></ha-icon>
                    <div class="consumption-details">
                        <span class="label">${TranslationUtils.translateSensor(this.hass, 'total_ppfd')}</span>
                        <span class="value consumption-value">${
                            formatValue(this._consumptionData ?
                                this._consumptionData.ppfd :
                                (ppfdId ? this.hass.states[ppfdId]?.state : null) || 'N/A')
                        } mol/s⋅m²</span>
                    </div>
                </div>
                <div class="consumption-item" @click="${() => fertId && this._showMoreInfo(fertId)}">
                    <ha-icon icon="mdi:chart-line-variant"></ha-icon>
                    <div class="consumption-details">
                        <span class="label">${TranslationUtils.translateSensor(this.hass, 'total_fertilizer_consumption')}</span>
                        <span class="value consumption-value">${
                            formatValue(this._consumptionData ?
                                this._consumptionData.fertilizer :
                                (fertId ? this.hass.states[fertId]?.state : null) || 'N/A')
                        } ${(fertId ? this.hass.states[fertId]?.attributes?.unit_of_measurement : null) ?? 'mS/cm'}</span>
                    </div>
                </div>
                <div class="consumption-item" @click="${() => waterId && this._showMoreInfo(waterId)}">
                    <ha-icon icon="mdi:water-pump"></ha-icon>
                    <div class="consumption-details">
                        <span class="label">${TranslationUtils.translateSensor(this.hass, 'total_water_consumption')}</span>
                        <span class="value consumption-value">${
                            formatValue(this._consumptionData ?
                                this._consumptionData.water :
                                (waterId ? this.hass.states[waterId]?.state : null) || 'N/A')
                        } L</span>
                    </div>
                </div>
                <div class="consumption-item" @click="${() => powerId && this._showMoreInfo(powerId)}">
                    <ha-icon icon="mdi:lightning-bolt"></ha-icon>
                    <div class="consumption-details">
                        <span class="label">${TranslationUtils.translateSensor(this.hass, 'total_power_consumption')}</span>
                        <span class="value consumption-value">${
                            formatValue(this._consumptionData ?
                                this._consumptionData.power :
                                (powerId ? this.hass.states[powerId]?.state : null) || 'N/A')
                        } kWh</span>
                    </div>
                </div>
                <div class="consumption-item large" @click="${() => costId && this._showMoreInfo(costId)}">
                    <ha-icon icon="mdi:cash-multiple"></ha-icon>
                    <div class="consumption-details large">
                        <span class="label">${TranslationUtils.translateSensor(this.hass, 'energy_cost')}</span>
                        <span class="value consumption-value">${
                            formatValue(this._consumptionData ? 
                                this._consumptionData.cost : 
                                (costId ? this.hass.states[costId]?.state : null) || 'N/A', 2)
                        } €</span>
                    </div>
                </div>
            </div>
            
            <div class="consumption-charts-container">
                <div class="pie-chart-container">
                    ${this._renderPieChart(plantName)}
                </div>
            </div>
        `;
    }

    private _renderPieChart(plantName: string): TemplateResult {
        const growthPhaseEntityId = this._plantInfo?.helpers?.growth_phase?.entity_id;
        const growthPhaseEntity = growthPhaseEntityId ? this.hass.states[growthPhaseEntityId] : undefined;
        
        if (!growthPhaseEntity) {
            return html`
                <div style="text-align: center; padding: 20px;">
                    Keine Daten für das Pie Chart verfügbar
                </div>
            `;
        }

        const phaseDurations: PhaseDurations = {
            'Seed': this._calculatePhaseDuration(
                growthPhaseEntity.attributes.seeds_start,
                growthPhaseEntity.attributes.seeds_duration
            ),
            'Germination': this._calculatePhaseDuration(
                growthPhaseEntity.attributes.germination_start,
                growthPhaseEntity.attributes.germination_duration
            ),
            'Rooting': this._calculatePhaseDuration(
                growthPhaseEntity.attributes.rooting_start,
                growthPhaseEntity.attributes.rooting_duration
            ),
            'Growth': this._calculatePhaseDuration(
                growthPhaseEntity.attributes.growing_start,
                growthPhaseEntity.attributes.growing_duration
            ),
            'Flowering Past': 0,
            'Flowering To Go': 0,
            'Harvested': this._calculatePhaseDuration(
                growthPhaseEntity.attributes.harvested_date,
                growthPhaseEntity.attributes.harvested_duration
            )
        };

        // Setze die Blütephase-Dauer direkt aus flowering_duration
        const floweringDurationEntityId = this._plantInfo?.helpers?.flowering_duration?.entity_id;
        const floweringDurationEntity = floweringDurationEntityId ? this.hass.states[floweringDurationEntityId] : undefined;
        const floweringStartDateAttr = growthPhaseEntity.attributes.flowering_start;
        
        // Prüfe ob floweringStartDateAttr einen gültigen Wert hat
        const isValidFloweringStart = floweringStartDateAttr && floweringStartDateAttr !== 'null' && floweringStartDateAttr !== '';
        
        if (floweringDurationEntity?.state) {
            const totalFloweringDuration = parseInt(floweringDurationEntity.state);
            
            if (isValidFloweringStart) {
                const floweringStartDate = new Date(floweringStartDateAttr);
                const now = new Date();
                const daysInFlowering = Math.floor((now.getTime() - floweringStartDate.getTime()) / (1000 * 60 * 60 * 24));
                
                if (daysInFlowering >= 0) {  // Nur wenn wir bereits in der Blütephase sind
                    phaseDurations['Flowering Past'] = Math.min(daysInFlowering, totalFloweringDuration);
                    phaseDurations['Flowering To Go'] = Math.max(0, totalFloweringDuration - daysInFlowering);
                } else {
                    phaseDurations['Flowering To Go'] = totalFloweringDuration;
                }
            } else {
                // Wenn keine Blütephase begonnen hat, zeige die gesamte Zeit als "To Go"
                phaseDurations['Flowering To Go'] = totalFloweringDuration;
            }
        }

        const totalDays = Object.values(phaseDurations).reduce((sum, days) => sum + days, 0);

        if (totalDays === 0) {
            return html`
                <div style="text-align: center; padding: 20px;">
${TranslationUtils.translateUI(this.hass, 'no_completed_phases')}
                </div>
            `;
        }

        return html`
            <div class="pie-chart">
                <div id="pie-chart-${plantName}"></div>
            </div>
        `;
    }

    private _calculatePhaseDuration(startDate: string | null, duration: number | null): number {
        if (!startDate || startDate === 'null' || startDate === '') return 0;

        if (duration) return duration;

        // Wenn keine Dauer gesetzt ist, aber ein Startdatum existiert,
        // berechne die Dauer als Differenz von heute zum Startdatum.
        // Mindestens 1 zurückgeben damit eine aktive Phase < 1 Tag im
        // Pie-Chart sichtbar bleibt (sonst filtert .filter(v>0) sie raus).
        const start = new Date(startDate);
        const now = new Date();
        const days = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
        return Math.max(1, days);
    }

    private _getPhaseDataString(growthPhaseEntity: { attributes: Record<string, unknown> }): string {
        if (!growthPhaseEntity) return '';
        
        return JSON.stringify({
            samen: growthPhaseEntity.attributes.seeds_duration || 0,
            keimen: growthPhaseEntity.attributes.germination_duration || 0,
            wurzeln: growthPhaseEntity.attributes.rooting_duration || 0,
            wachstum: growthPhaseEntity.attributes.growing_duration || 0,
            bluete: growthPhaseEntity.attributes.flower_duration || 0,
            geerntet: growthPhaseEntity.attributes.harvested_duration || 0
        });
    }

    private async _initPieChart(plantName: string) {
        // Prüfe ob ApexCharts verfügbar ist
        await this._loadApexChartsScript();

        // Prüfe, ob bereits ein Chart existiert
        const chartExists = this._charts.has('pie');
        
        const chartElement = this.shadowRoot?.querySelector(`#pie-chart-${plantName}`);
        if (!chartElement) return;

        const growthPhaseEntityId = this._plantInfo?.helpers?.growth_phase?.entity_id;
        const growthPhaseEntity = growthPhaseEntityId ? this.hass?.states[growthPhaseEntityId] : undefined;
        if (!growthPhaseEntity) return;

        // Prüfe ob sich die Daten geändert haben
        const currentDataString = this._getPhaseDataString(growthPhaseEntity);
        const lastDataString = this._lastPhaseData.get(plantName);
        
        if (currentDataString === lastDataString && chartExists) {
            return; // Keine Änderung und Chart existiert bereits, keine Aktualisierung nötig
        }
        
        this._lastPhaseData.set(plantName, currentDataString);

        const phaseDurations: PhaseDurations = {
            'Seed': this._calculatePhaseDuration(
                growthPhaseEntity.attributes.seeds_start,
                growthPhaseEntity.attributes.seeds_duration
            ),
            'Germination': this._calculatePhaseDuration(
                growthPhaseEntity.attributes.germination_start,
                growthPhaseEntity.attributes.germination_duration
            ),
            'Rooting': this._calculatePhaseDuration(
                growthPhaseEntity.attributes.rooting_start,
                growthPhaseEntity.attributes.rooting_duration
            ),
            'Growth': this._calculatePhaseDuration(
                growthPhaseEntity.attributes.growing_start,
                growthPhaseEntity.attributes.growing_duration
            ),
            'Flowering Past': 0,
            'Flowering To Go': 0,
            'Harvested': this._calculatePhaseDuration(
                growthPhaseEntity.attributes.harvested_date,
                growthPhaseEntity.attributes.harvested_duration
            )
        };

        // Setze die Blütephase-Dauer direkt aus flowering_duration
        const floweringDurationEntityId = this._plantInfo?.helpers?.flowering_duration?.entity_id;
        const floweringDurationEntity = floweringDurationEntityId ? this.hass.states[floweringDurationEntityId] : undefined;
        const blueteStartDate = growthPhaseEntity.attributes.flowering_start;
        
        // Prüfe ob blueteStartDate einen gültigen Wert hat
        const isValidBlueteStart = blueteStartDate && blueteStartDate !== 'null' && blueteStartDate !== '';
        
        if (floweringDurationEntity?.state) {
            const totalFloweringDuration = parseInt(floweringDurationEntity.state);
            
            if (isValidBlueteStart) {
                const floweringStartDate = new Date(blueteStartDate);
                const now = new Date();
                const daysInFlowering = Math.floor((now.getTime() - floweringStartDate.getTime()) / (1000 * 60 * 60 * 24));
                
                if (daysInFlowering >= 0) {  // Nur wenn wir bereits in der Blütephase sind
                    phaseDurations['Flowering Past'] = Math.min(daysInFlowering, totalFloweringDuration);
                    phaseDurations['Flowering To Go'] = Math.max(0, totalFloweringDuration - daysInFlowering);
                }
                // flowering_start in der Zukunft oder noch nicht gesetzt → keine
                // planned-Segmente im Pie, damit nicht verwechselt wird mit
                // tatsächlich gelaufener Phase (Klick liefert sonst 0 Verbrauch).
            }
        }

        // Mapping englischer Internal-Keys auf lokalisierte Anzeige-Labels.
        // Wachstumsphasen kommen aus den growth_phases-Translations;
        // 'Flowering Past'/'To Go' sind eigene UI-Strings.
        const t = TranslationUtils;
        const labelMap: Record<string, string> = {
            'Seed':           t.translateGrowthPhase(this.hass, 'seeds'),
            'Germination':    t.translateGrowthPhase(this.hass, 'germination'),
            'Rooting':        t.translateGrowthPhase(this.hass, 'rooting'),
            'Growth':         t.translateGrowthPhase(this.hass, 'growing'),
            'Flowering Past': t.translateUI(this.hass, 'flowering_past'),
            'Flowering To Go': t.translateUI(this.hass, 'flowering_to_go'),
            'Harvested':      t.translateGrowthPhase(this.hass, 'harvested'),
        };
        const daysWord = t.translateUI(this.hass, 'days');
        const floweringLabel = t.translateGrowthPhase(this.hass, 'flowering');

        const series = Object.values(phaseDurations).filter(value => value > 0);
        const labels = Object.entries(phaseDurations)
            .filter(([, value]) => value > 0)
            .map(([key]) => labelMap[key] ?? key);

        const existingChart = this._charts.get('pie');
        if (existingChart) {
            // Aktualisiere nur die Daten
            existingChart.updateOptions({
                labels: labels,
                series: series
            });
            return;
        }

        // Erstelle neues Chart nur wenn es noch nicht existiert
        const options = {
            chart: {
                type: 'pie',
                background: 'transparent',
                redrawOnParentResize: true,
                animations: {
                    enabled: true,
                    speed: 800,
                    animateGradually: {
                        enabled: true,
                        delay: 150
                    },
                    dynamicAnimation: {
                        enabled: true,
                        speed: 350
                    }
                },
                events: {
                    dataPointSelection: (event: unknown, chartContext: unknown, config: { selectedDataPoints: number[][]; dataPointIndex: number }) => {
                        // labels[] sind übersetzte Strings (Samen/Wurzeln/...). _phaseData
                        // ist mit kanonischen phaseDurations-Keys (Seed/Rooting/...) gespeichert.
                        // Reverse-Lookup via labelMap damit Click die richtige Phase trifft.
                        const clickedLabel = labels[config.dataPointIndex];
                        const canonicalKey = Object.entries(labelMap).find(([, v]) => v === clickedLabel)?.[0] ?? clickedLabel;
                        if (config.selectedDataPoints[0].length === 0 ||
                            (this._selectedPhase === canonicalKey && config.selectedDataPoints[0].length === 1)) {
                            this._updateConsumptionForPhase(plantName, null);
                            config.selectedDataPoints[0] = [];
                            (chartContext as { w: { globals: { selectedDataPoints: number[][] } } }).w.globals.selectedDataPoints[0] = [];
                        } else {
                            this._selectedPhase = canonicalKey;
                            this._updateConsumptionForPhase(plantName, canonicalKey);
                        }
                    }
                }
            },
            series: series,
            labels: labels,
            colors: [
                // Wachstumsphasen mit unterschiedlichen Helligkeiten
                `hsl(${COLOR_CONFIG.growth.hue}, ${COLOR_CONFIG.growth.saturation}%, 55%)`, // Samen
                `hsl(${COLOR_CONFIG.growth.hue}, ${COLOR_CONFIG.growth.saturation}%, 50%)`, // Keimen
                `hsl(${COLOR_CONFIG.growth.hue}, ${COLOR_CONFIG.growth.saturation}%, 45%)`, // Wurzeln
                `hsl(${COLOR_CONFIG.growth.hue}, ${COLOR_CONFIG.growth.saturation}%, 40%)`, // Wachstum
                `hsl(${COLOR_CONFIG.growth.hue}, ${COLOR_CONFIG.growth.saturation}%, 35%)`, // Blüte Past
                `hsl(${COLOR_CONFIG.growth.hue}, ${COLOR_CONFIG.growth.saturation}%, 30%)`, // Blüte To Go
                `hsl(${COLOR_CONFIG.growth.hue}, ${COLOR_CONFIG.growth.saturation}%, 45%)`, // Geerntet
            ],
            legend: {
                show: false
            },
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: 'clamp(10px, 1.2vw, 14px)',
                    fontFamily: 'var(--paper-font-body1_-_font-family)'
                },
                textAnchor: 'start',
                distributed: true,
                color: 'var(--primary-text-color)',
                formatter: function(val: number, opts: { w: { globals: { series: number[]; labels: string[]; }; }; seriesIndex: number }) {
                    const days = opts.w.globals.series[opts.seriesIndex];
                    const label = opts.w.globals.labels[opts.seriesIndex];
                    const pastLabel = labelMap['Flowering Past'];
                    const togoLabel = labelMap['Flowering To Go'];

                    // Kombiniertes Blüte-Label, falls beide Past/ToGo existieren
                    if (label === togoLabel) {
                        const pastIdx = labels.indexOf(pastLabel);
                        const pastDays = pastIdx >= 0 ? (series[pastIdx] || 0) : 0;
                        if (pastDays > 0) {
                            const totalDays = pastDays + days;
                            return [floweringLabel, `${pastDays}/${days}/${totalDays} ${daysWord}`];
                        }
                        return [floweringLabel, `${days} ${daysWord}`];
                    }
                    // Kein Standalone-Label für "Past" — wird im "To Go" mit angezeigt
                    if (label === pastLabel) {
                        return [''];
                    }
                    return [`${label}`, `${days} ${daysWord}`];
                }
            },
            tooltip: {
                enabled: true,
                theme: 'light',
                style: {
                    fontSize: 'clamp(10px, 1.2vw, 14px)'
                },
                y: {
                    formatter: function(value: number) {
                        return `${value} ${daysWord}`;
                    }
                }
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        minAngleToShowLabel: 0,
                        offset: -25
                    },
                    donut: {
                        size: '0%'
                    },
                    expandOnClick: true,
                    offsetX: 0,
                    offsetY: 0
                }
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['var(--card-background-color)']
            },
            theme: {
                mode: 'light',
                palette: 'palette1'
            }
        };

        // Speichere die Phaseninformationen mit Keys die zu phaseDurations passen,
        // damit der Click-Handler über _phaseData.get(canonicalKey) trifft.
        if (growthPhaseEntity) {
            const phases = ['seeds', 'germination', 'rooting', 'growing', 'flowering', 'harvested'];
            // Mapping zu phaseDurations-Keys (Singular bzw. abweichende Schreibung)
            const canonicalPhaseKey: Record<string, string> = {
                'seeds': 'Seed',
                'germination': 'Germination',
                'rooting': 'Rooting',
                'growing': 'Growth',
                'flowering': 'Flowering',
                'harvested': 'Harvested',
            };

            phases.forEach((phase, index) => {
                const startDate = growthPhaseEntity.attributes[`${phase}_start`];
                if (startDate) {
                    const start = new Date(startDate);
                    let end: Date | null = null;

                    if (index < phases.length - 1) {
                        const nextPhase = phases[index + 1];
                        const nextStart = growthPhaseEntity.attributes[`${nextPhase}_start`];
                        if (nextStart) {
                            end = new Date(nextStart);
                        }
                    }
                    if (!end && growthPhaseEntity.state === phase) {
                        end = new Date();
                    }

                    this._phaseData.set(canonicalPhaseKey[phase], {
                        start,
                        end,
                        duration: end ? Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) : 0
                    });
                }
            });

            // Blüte-Past / To-Go als kanonische Keys (passend zu phaseDurations)
            const now = new Date();
            const floweringDurationEntityId = this._plantInfo?.helpers?.flowering_duration?.entity_id;
            const floweringDurationEntity = floweringDurationEntityId ? this.hass?.states[floweringDurationEntityId] : undefined;
            const totalDuration = floweringDurationEntity?.state ? parseInt(floweringDurationEntity.state) : 0;

            if (growthPhaseEntity.attributes.flowering_start) {
                const blueteStart = new Date(growthPhaseEntity.attributes.flowering_start);
                this._phaseData.set('Flowering Past', {
                    start: blueteStart,
                    end: now,
                    duration: Math.floor((now.getTime() - blueteStart.getTime()) / (1000 * 60 * 60 * 24))
                });

                if (totalDuration > 0) {
                    const endDate = new Date(blueteStart);
                    endDate.setDate(endDate.getDate() + totalDuration);
                    this._phaseData.set('Flowering To Go', {
                        start: now,
                        end: endDate,
                        duration: Math.floor((endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
                    });
                }
            } else if (totalDuration > 0) {
                // Blüte noch nicht begonnen — geplante Blüte als To-Go-Segment ab jetzt.
                // Sonst läuft der Klick auf "Restliche Blüte" ins Leere weil
                // _phaseData den Key nicht hat.
                const endDate = new Date(now);
                endDate.setDate(endDate.getDate() + totalDuration);
                this._phaseData.set('Flowering To Go', {
                    start: now,
                    end: endDate,
                    duration: totalDuration
                });
            }
        }

        if (!this._apex) return;
        const chart = new this._apex(chartElement, options) as unknown as ApexChart;
        await chart.render();
        this._charts.set('pie', chart);
    }

    // Eigene, gepinnte Instanz statt window.ApexCharts -- siehe
    // utils/apexcharts-laden.ts.
    private async _loadApexChartsScript() {
        this._apex = await apexChartsLaden();
    }

    updated(changedProps: Map<string, unknown>) {
        super.updated(changedProps);

        if (this.entityId && this.hass) {
            const plantName = this.entityId.split('.')[1];

            if (changedProps.has('entityId') && this.entityId) {
                // Zerstöre alle vorhandenen Charts, wenn sich die entityId ändert
                this._charts.forEach((chart) => {
                    chart.destroy();
                });
                this._charts.clear();

                // Zurücksetzen der Daten
                this._lastPhaseData.clear();

                // Plant-Info nachladen wenn entityId wechselt — entity_ids der Helper kommen
                // sprachneutral aus plant/get_info (statt hartkodierter Patterns). _initPieChart
                // erst NACH dem Laden aufrufen (statt im selben Zyklus, unabgewartet) — sonst ist
                // _plantInfo noch leer, der Chart-Init bricht früh ab und wartet bis zum nächsten
                // zufälligen hass-Update irgendeiner anderen Entity, um erneut zu versuchen.
                this._loadPlantInfo(this.entityId).then(() => this._initPieChart(plantName));
                return;
            }

            // Chart aktualisieren, wenn sich hass ändert (Daten sind bereits geladen)
            if (changedProps.has('hass')) {
                this._initPieChart(plantName);
            }
        }
    }
} 