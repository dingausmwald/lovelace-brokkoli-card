import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, fireEvent } from 'custom-card-helpers';
import { style } from '../styles/consumption-styles';
import { TranslationUtils } from '../utils/translation-utils';

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
    'seeds': number;
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

@customElement('flower-consumption')
export class FlowerConsumption extends LitElement {
    @property() hass?: HomeAssistant;
    @property() entityId?: string;
    @state() private _charts: Map<string, ApexChart> = new Map();
    @state() private _selectedPhase: string | null = null;
    @state() private _phaseData: Map<string, PhaseInfo> = new Map();
    @state() private _consumptionData: ConsumptionData | null = null;
    private _lastOptions: Map<string, ApexChartsOptions> = new Map();
    private _lastPhaseData: Map<string, string> = new Map();

    static styles = style;

    async firstUpdated() {
        if (!window.ApexCharts) {
            await this._loadApexChartsScript();
        }
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

        // Lade Verbrauchsdaten für den Zeitraum
        try {
            const sensors = [
                `sensor.${plantName}_total_ppfd_mol_integral`,
                `sensor.${plantName}_total_fertilizer_consumption`,
                `sensor.${plantName}_total_water_consumption`,
                `sensor.${plantName}_total_power_consumption`,
                `sensor.${plantName}_energy_cost`
            ];

            const promises = sensors.map(sensor =>
                this.hass!.callApi('GET', `history/period/${startTime}?filter_entity_id=${sensor}&end_time=${endTime}`)
            );

            const results = await Promise.all(promises);

            // Berechne die Differenzen
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

        // Formatierungsfunktion für die Werte
        const formatValue = (value: number | string, decimals: number = 1): string => {
            if (typeof value === 'string') value = parseFloat(value);
            return isNaN(value) ? 'N/A' : value.toFixed(decimals);
        };

        return html`
            <div class="consumption-data">
                <div class="consumption-item" @click="${() => this._showMoreInfo(`sensor.${plantName}_total_ppfd_mol_integral`)}">
                    <ha-icon icon="mdi:counter"></ha-icon>
                    <div class="consumption-details">
                        <span class="label">${TranslationUtils.translateSensor(this.hass, 'total_ppfd')}</span>
                        <span class="value consumption-value">${
                            formatValue(this._consumptionData ?
                                this._consumptionData.ppfd :
                                this.hass.states[`sensor.${plantName}_total_ppfd_mol_integral`]?.state || 'N/A')
                        } mol/s⋅m²</span>
                    </div>
                </div>
                <div class="consumption-item" @click="${() => this._showMoreInfo(`sensor.${plantName}_total_fertilizer_consumption`)}">
                    <ha-icon icon="mdi:chart-line-variant"></ha-icon>
                    <div class="consumption-details">
                        <span class="label">${TranslationUtils.translateSensor(this.hass, 'fertilizer_consumption')}</span>
                        <span class="value consumption-value">${
                            formatValue(this._consumptionData ?
                                this._consumptionData.fertilizer :
                                this.hass.states[`sensor.${plantName}_total_fertilizer_consumption`]?.state || 'N/A')
                        } μS/cm</span>
                    </div>
                </div>
                <div class="consumption-item" @click="${() => this._showMoreInfo(`sensor.${plantName}_total_water_consumption`)}">
                    <ha-icon icon="mdi:water-pump"></ha-icon>
                    <div class="consumption-details">
                        <span class="label">${TranslationUtils.translateSensor(this.hass, 'water_consumption')}</span>
                        <span class="value consumption-value">${
                            formatValue(this._consumptionData ?
                                this._consumptionData.water :
                                this.hass.states[`sensor.${plantName}_total_water_consumption`]?.state || 'N/A')
                        } L</span>
                    </div>
                </div>
                <div class="consumption-item" @click="${() => this._showMoreInfo(`sensor.${plantName}_total_power_consumption`)}">
                    <ha-icon icon="mdi:lightning-bolt"></ha-icon>
                    <div class="consumption-details">
                        <span class="label">${TranslationUtils.translateSensor(this.hass, 'power_consumption')}</span>
                        <span class="value consumption-value">${
                            formatValue(this._consumptionData ?
                                this._consumptionData.power :
                                this.hass.states[`sensor.${plantName}_total_power_consumption`]?.state || 'N/A')
                        } kWh</span>
                    </div>
                </div>
                <div class="consumption-item large" @click="${() => this._showMoreInfo(`sensor.${plantName}_energy_cost`)}">
                    <ha-icon icon="mdi:cash-multiple"></ha-icon>
                    <div class="consumption-details large">
                        <span class="label">${TranslationUtils.translateSensor(this.hass, 'energy_cost')}</span>
                        <span class="value consumption-value">${
                            formatValue(this._consumptionData ?
                                this._consumptionData.cost :
                                this.hass.states[`sensor.${plantName}_energy_cost`]?.state || 'N/A', 2)
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
        const growthPhaseEntity = this.hass.states[`select.${plantName}_growth_phase`];

        if (!growthPhaseEntity) {
            return html`
                <div style="text-align: center; padding: 20px;">
                    Keine Daten für das Pie Chart verfügbar
                </div>
            `;
        }

        const phaseDurations: PhaseDurations = {
            'seeds': this._calculatePhaseDuration(
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
                growthPhaseEntity.attributes.growth_start,
                growthPhaseEntity.attributes.growth_duration
            ),
            'Flowering Past': 0,
            'Flowering To Go': 0,
            'Harvested': this._calculatePhaseDuration(
                growthPhaseEntity.attributes.harvested,
                growthPhaseEntity.attributes.harvested_duration
            )
        };

        // Setze die Blütephase-Dauer direkt aus flowering_duration
        const floweringDurationEntity = this.hass.states[`number.${plantName}_flowering_duration`];
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
        // berechne die Dauer als Differenz von heute zum Startdatum
        const start = new Date(startDate);
        const now = new Date();
        return Math.max(0, Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)));
    }

    private _getPhaseDataString(growthPhaseEntity: { attributes: Record<string, unknown> }): string {
        if (!growthPhaseEntity) return '';

        return JSON.stringify({
            samen: growthPhaseEntity.attributes.samen_dauer || 0,
            keimen: growthPhaseEntity.attributes.keimen_dauer || 0,
            wurzeln: growthPhaseEntity.attributes.wurzeln_dauer || 0,
            wachstum: growthPhaseEntity.attributes.wachstum_dauer || 0,
            bluete: growthPhaseEntity.attributes.blüte_dauer || 0,
            geerntet: growthPhaseEntity.attributes.geerntet_dauer || 0
        });
    }

    private async _initPieChart(plantName: string) {
        // Prüfe ob ApexCharts verfügbar ist
        if (!window.ApexCharts) {
            try {
                await this._loadApexChartsScript();
            } catch (e) {
                console.error('Fehler beim Laden von ApexCharts:', e);
                return;
            }
        }

        // Prüfe, ob bereits ein Chart existiert
        const chartExists = this._charts.has('pie');

        const chartElement = this.shadowRoot?.querySelector(`#pie-chart-${plantName}`);
        if (!chartElement) return;

        const growthPhaseEntity = this.hass?.states[`select.${plantName}_growth_phase`];
        if (!growthPhaseEntity) return;

        // Prüfe ob sich die Daten geändert haben
        const currentDataString = this._getPhaseDataString(growthPhaseEntity);
        const lastDataString = this._lastPhaseData.get(plantName);

        if (currentDataString === lastDataString && chartExists) {
            return; // Keine Änderung und Chart existiert bereits, keine Aktualisierung nötig
        }

        this._lastPhaseData.set(plantName, currentDataString);

        const phaseDurations: PhaseDurations = {
            'seeds': this._calculatePhaseDuration(
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
                growthPhaseEntity.attributes.growth_start,
                growthPhaseEntity.attributes.growth_duration
            ),
            'Flowering Past': 0,
            'Flowering To Go': 0,
            'Harvested': this._calculatePhaseDuration(
                growthPhaseEntity.attributes.harvested,
                growthPhaseEntity.attributes.harvested_duration
            )
        };

        // Setze die Blütephase-Dauer direkt aus flowering_duration
        const floweringDurationEntity = this.hass.states[`number.${plantName}_flowering_duration`];
        const blueteStartDate = growthPhaseEntity.attributes.blüte_beginn;

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
                } else {
                    phaseDurations['Flowering To Go'] = totalFloweringDuration;
                }
            } else {
                // Wenn keine Blütephase begonnen hat, zeige die gesamte Zeit als "To Go"
                phaseDurations['Flowering To Go'] = totalFloweringDuration;
            }
        }

        const series = Object.values(phaseDurations).filter(value => value > 0);
        const labels = Object.entries(phaseDurations)
            .filter(([, value]) => value > 0)
            .map(([key]) => key);

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
                        // Wenn das gleiche Segment nochmal geklickt wird oder außerhalb geklickt wird
                        if (config.selectedDataPoints[0].length === 0 ||
                            (this._selectedPhase === labels[config.dataPointIndex] && config.selectedDataPoints[0].length === 1)) {
                            // Zurücksetzen auf Gesamtansicht ohne Chart neu zu laden
                            this._updateConsumptionForPhase(plantName, null);
                            // Nur die Selektion zurücksetzen, nicht das ganze Chart
                            config.selectedDataPoints[0] = [];
                            (chartContext as { w: { globals: { selectedDataPoints: number[][] } } }).w.globals.selectedDataPoints[0] = [];
                        } else {
                            // Neue Phase wurde ausgewählt
                            const selectedPhase = labels[config.dataPointIndex];
                            this._selectedPhase = selectedPhase;
                            this._updateConsumptionForPhase(plantName, selectedPhase);
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

                    // Spezielles Label für "Blüte To Go"
                    if (label === 'Blüte To Go') {
                        const pastDays = series[labels.indexOf('Blüte Past')] || 0;
                        // Nur wenn wir tatsächlich vergangene Blütetage haben, zeige das kombinierte Label
                        if (pastDays > 0) {
                            const totalDays = pastDays + days;
                            return [
                                'Blüte',
                                `${pastDays}/${days}/${totalDays} Tage`
                            ];
                        }
                        // Sonst zeige nur die geplante Blütezeit
                        return [
                            'Blüte',
                            `${days} Tage`
                        ];
                    }
                    // Kein Label für "Blüte Past"
                    else if (label === 'Blüte Past') {
                        return [''];
                    }
                    // Standard Label für andere Phasen
                    return [
                        `${label}`,
                        `${days} Tage`
                    ];
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
                        return `${value} Tage`;
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

        // Speichere die Phaseninformationen
        if (growthPhaseEntity) {
            const phases = ['samen', 'keimen', 'wurzeln', 'wachstum', 'blüte', 'geerntet'];

            phases.forEach((phase, index) => {
                const startDate = growthPhaseEntity.attributes[`${phase}_beginn`];
                if (startDate) {
                    const start = new Date(startDate);
                    let end: Date | null = null;

                    // Finde das Ende der Phase
                    if (index < phases.length - 1) {
                        const nextPhase = phases[index + 1];
                        const nextStart = growthPhaseEntity.attributes[`${nextPhase}_beginn`];
                        if (nextStart) {
                            end = new Date(nextStart);
                        }
                    }

                    // Wenn es kein Ende gibt und es die aktuelle Phase ist, setze das Ende auf jetzt
                    if (!end && growthPhaseEntity.state === phase) {
                        end = new Date();
                    }

                    this._phaseData.set(phase.charAt(0).toUpperCase() + phase.slice(1), {
                        start,
                        end,
                        duration: end ? Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) : 0
                    });
                }
            });

            // Speichere auch die Blütephaseninformationen
            if (growthPhaseEntity.attributes.blüte_beginn) {
                const blueteStart = new Date(growthPhaseEntity.attributes.blüte_beginn);
                const now = new Date();
                this._phaseData.set('Blüte Past', {
                    start: blueteStart,
                    end: now,
                    duration: Math.floor((now.getTime() - blueteStart.getTime()) / (1000 * 60 * 60 * 24))
                });

                const floweringDurationEntity = this.hass?.states[`number.${plantName}_flowering_duration`];
                if (floweringDurationEntity?.state) {
                    const totalDuration = parseInt(floweringDurationEntity.state);
                    const endDate = new Date(blueteStart);
                    endDate.setDate(endDate.getDate() + totalDuration);

                    this._phaseData.set('Blüte To Go', {
                        start: now,
                        end: endDate,
                        duration: Math.floor((endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
                    });
                }
            }
        }

        const chart = new window.ApexCharts(chartElement, options);
        await chart.render();
        this._charts.set('pie', chart);
    }

    private async _loadApexChartsScript() {
        const styleLink = document.createElement('link');
        styleLink.rel = 'stylesheet';
        styleLink.href = 'https://cdn.jsdelivr.net/npm/apexcharts@4.4.0/dist/apexcharts.css';
        document.head.appendChild(styleLink);

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/apexcharts@4.4.0/dist/apexcharts.min.js';

        const loadPromise = new Promise((resolve) => {
            script.onload = () => {
                // Warte einen kurzen Moment, bis ApexCharts wirklich verfügbar ist
                setTimeout(resolve, 100);
            };
        });

        document.head.appendChild(script);
        await loadPromise;
    }

    updated(changedProps: Map<string, unknown>) {
        super.updated(changedProps);

        if (this.entityId && this.hass) {
            const plantName = this.entityId.split('.')[1];

            // Initialisiere den Chart, wenn sich die entityId ändert oder wenn die Komponente zum ersten Mal geladen wird
            if (changedProps.has('entityId') || changedProps.has('hass')) {
                // Zerstöre alle vorhandenen Charts, wenn sich die entityId ändert
                if (changedProps.has('entityId')) {
                    this._charts.forEach((chart) => {
                        chart.destroy();
                    });
                    this._charts.clear();

                    // Zurücksetzen der Daten
                    this._lastPhaseData.clear();
                }

                // Chart initialisieren oder aktualisieren
                this._initPieChart(plantName);
            }
        }
    }
}