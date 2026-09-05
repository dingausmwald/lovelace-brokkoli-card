import { CSSResult, HTMLTemplateResult, LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import { graphStyles } from '../styles/graph-styles';
import { apexChartsLaden, apexStylesheetLaden, ApexKonstruktor } from '../utils/apexcharts-laden';
import { PlantEntityUtils } from '../utils/plant-entity-utils';
import { TranslationUtils } from '../utils/translation-utils';

interface ApexChart {
    render(): Promise<void>;
    updateOptions(options: unknown): void;
    updateSeries(series: unknown[], redraw?: boolean): void;
    destroy(): void;
    toggleSeries(seriesName: string): void;
    hideSeries(seriesName: string): void;
    showSeries(seriesName: string): void;
    w?: {
        globals?: {
            initialSeries?: { name: string }[];
        };
    };
}

interface FlatpickrInstance {
    destroy(): void;
    setDate(dates: Date[], triggerChange?: boolean): void;
}

interface PlantInfo {
    result?: {
        [key: string]: {
            icon?: string;
            max?: number;
            min?: number;
            current?: number;
            sensor?: string;
            unit_of_measurement?: string;
        };
    } & {
        helpers?: {
            health?: {
                entity_id?: string;
                icon?: string;
                unit_of_measurement?: string;
            };
        };
    };
    [key: string]: unknown;
}

declare global {
    interface Window {
        flatpickr: (element: Element, options: unknown) => FlatpickrInstance;
    }
}



interface StatisticValue {
    start: string;
    end: string;
    mean: number;
    min: number;
    max: number;
    sum: number;
}

interface Statistics {
    [key: string]: StatisticValue[];
}

interface ChartDataPoint {
    x: number;
    y: number[] | number;
    mean?: number;
}

interface RangeDataPoint {
    x: number;
    y: number[];
}

interface LineDataPoint {
    x: number;
    y: number;
}





interface FlowerSensor {
    id: string;
    name: string;
    scale: number;
    yaxis: number;
    entityId: string | null;
    icon?: string;
    unit?: string;
    color?: string;
}

interface TooltipSensor {
    name: string;
    unit: string;
    color: string;
    index: number;
}

// Das Pflanz-Startdatum, an dem die "Tag N"-Achse und der Tooltip haengen, lag
// frueher in window.startTimestamp -- einem einzigen Feld fuer ALLE Graphen der
// Seite. Bei mehreren Pflanzen auf einem Dashboard ueberschrieb jede Instanz den
// Wert der anderen, die zuletzt initialisierte gewann, und alle uebrigen zaehlten
// ihre Tage ab einem fremden Datum. Es reist jetzt in der Chart-Konfiguration
// mit, die ApexCharts den Formattern als `w.config` durchreicht.
interface MitStartdatum {
    brokkoliStart?: number;
}

// Findet den letzten Index in einem chronologisch sortierten x-Array, dessen
// Zeitstempel <= target ist. Sensoren wie "health" (sparse, aus der History-API)
// haben ein anderes/kürzeres x-Array als die auf 50 Buckets normierten Statistik-
// Serien — ein blind über alle Serien geteilter dataPointIndex würde bei ihnen
// auf falsche oder nicht-existente Punkte zeigen. "At or before" statt "nearest",
// damit nie ein zukünftiger Wert vorgezogen angezeigt wird. Gibt -1 zurück wenn
// target vor dem ersten bekannten Punkt liegt (→ Tooltip zeigt "-").
function findValueIndexAtOrBefore(xs: number[] | undefined, target: number): number {
    if (!xs || xs.length === 0 || isNaN(target)) return -1;
    let idx = -1;
    for (let i = 0; i < xs.length; i++) {
        if (xs[i] <= target) {
            idx = i;
        } else {
            break;
        }
    }
    return idx;
}

// Nach so vielen vergeblichen Anlaeufen gibt der Graph auf.
const MAX_AUFBAU_VERSUCHE = 3;

// Laedt ein Skript und wartet darauf. Ohne onerror-Behandlung loest das Promise
// bei einem fehlgeschlagenen Request NIE auf -- ein blockierter oder nicht
// erreichbarer CDN haengte damit den gesamten Chart-Aufbau dauerhaft auf, ohne
// eine einzige Meldung zu hinterlassen.
function skriptLaden(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Skript nicht ladbar: ${src}`));
        document.head.appendChild(script);
    });
}

function stylesheetLaden(href: string): void {
    const styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    styleLink.href = href;
    document.head.appendChild(styleLink);
}

export const chartOptions = {
    chart: {
        type: 'rangeArea',
        height: 250,
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
        background: 'transparent',
        zoom: {
            enabled: true,
            autoScaleYaxis: false,
            allowMouseWheelZoom: true,
            type: 'x'
        },
        toolbar: {
            show: true,
            tools: {
                download: false,
                selection: true,
                zoom: true,
                zoomin: true,
                zoomout: true,
                pan: true,
                reset: true
            },
            autoSelected: 'zoom'
        }
    },
    series: [] as unknown[],
    legend: {
        show: true,
        showForSingleSeries: true,
        position: 'right',
        horizontalAlign: 'left',
        offsetY: 5,
        offsetX: 0,
        fontSize: '0px',
        markers: {
            size: 0,
        }
    },
    xaxis: {
        type: 'datetime',
        labels: {
            rotateAlways: false,
            datetimeUTC: false,
            hideOverlappingLabels: true,
            formatter: function(value: number, timestamp?: unknown, opts?: { w?: { config?: MitStartdatum; globals?: { minX?: number; maxX?: number } } }) {
                const date = new Date(value);
                const startDate = new Date(opts?.w?.config?.brokkoliStart || date);
                // Setze die Startzeit auf Mitternacht des Starttages
                startDate.setHours(0, 0, 0, 0);
                // Addiere 1 zur Tagesberechnung, damit der erste Tag Tag 1 ist
                const daysSincePlanting = Math.floor((date.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
                
                // Bestimme die Zeitspanne basierend auf den Chart-Grenzen
                const min = opts?.w?.globals?.minX || 0;
                const max = opts?.w?.globals?.maxX || 0;
                const timespan = max - min;
                
                if (timespan < 1000 * 60 * 60 * 24 * 3) { // Weniger als 3 Tage -> Uhrzeit oder Datum an Tagesgrenze
                    // Prüfe ob wir an einer Tagesgrenze sind
                    const prevHour = new Date(date.getTime() - 60 * 60 * 1000);
                    
                    // Zeige den Tag nur wenn der vorherige Zeitpunkt einen anderen Tag hatte
                    if (prevHour.getDate() !== date.getDate()) {
                        const dateStr = new Intl.DateTimeFormat(undefined, { 
                            day: 'numeric',
                            month: 'numeric'
                        }).format(date);
                        return `(${daysSincePlanting}) ${dateStr}`;
                    } else {
                        return new Intl.DateTimeFormat(undefined, { 
                            hour: '2-digit', 
                            minute: '2-digit'
                        }).format(date);
                    }
                } else if (timespan < 1000 * 60 * 60 * 24 * 31) { // Weniger als 1 Monat
                    const dateStr = new Intl.DateTimeFormat(undefined, { 
                        day: 'numeric',
                        month: 'numeric'
                    }).format(date);
                    return `${daysSincePlanting} | ${dateStr}`;
                } else { // Mehr als 1 Monat
                    // Prüfe ob wir an einer Monatsgrenze sind
                    const nextDay = new Date(date.getTime() + 24 * 60 * 60 * 1000);
                    if (date.getMonth() !== nextDay.getMonth()) {
                        // An Monatsgrenze zeigen wir Monat/Jahr mit Tag
                        const dateStr = new Intl.DateTimeFormat(undefined, { 
                            day: 'numeric',
                            month: 'numeric',
                            year: '2-digit'
                        }).format(date);
                        return `${daysSincePlanting} | ${dateStr}`;
                    } else {
                        // Innerhalb des Monats zeigen wir Tag mit Tagnummer
                        const dateStr = new Intl.DateTimeFormat(undefined, { 
                            day: 'numeric',
                            month: 'numeric'
                        }).format(date);
                        return `${daysSincePlanting} | ${dateStr}`;
                    }
                }
            },
            style: {
                fontSize: '12px',
                fontFamily: 'var(--paper-font-body1_-_font-family)'
            }
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        crosshairs: {
            show: true,
            width: 1,
            position: 'back',
            opacity: 0.9,
            stroke: {
                color: '#b6b6b6',
                width: 1,
                dashArray: 3
            }
        },
        tooltip: {
            enabled: false
        }
    },
    yaxis: [
        {
            // Linke Y-Achse
            labels: {
                formatter: (value: number) => {
                    return `${value.toFixed(0)}`;
                },
                style: {
                    fontSize: '11px',
                    fontFamily: 'var(--paper-font-body1_-_font-family)'
                },
                offsetX: -5,
            },
            min: 0,
            max: 35,
            tickAmount: 10,
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        {
            // Rechte Y-Achse
            opposite: true,
            labels: {
                formatter: (value: number) => {
                    return `${value.toFixed(0)}`;
                },
                style: {
                    fontSize: '11px',
                    fontFamily: 'var(--paper-font-body1_-_font-family)'
                },
                offsetX: 5,
            },
            min: 0,
            max: 100,
            floating: true,
            tickAmount: 10,
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        }
    ],
    stroke: {
        // straight statt smooth: smooth interpoliert über null-Lücken hinweg,
        // straight zeichnet eine harte Unterbrechung an null-Punkten.
        curve: 'straight',
        width: Array(20).fill(2),
        dashArray: Array(20).fill(0)
    },
    colors: [] as string[],
    tooltip: {
        enabled: true,
        shared: true,
        intersect: false,
        followCursor: false,
        custom: function({ series, dataPointIndex, w }: { series: unknown[][]; seriesIndex: number; dataPointIndex: number; w: { config: MitStartdatum & { series: { name: string; unit?: string }[]; colors: string[] }; globals: { seriesX: number[][]; seriesRangeStart?: number[][]; seriesRangeEnd?: number[][] } } }) {
            try {
                const timestamp = w.globals.seriesX[0]?.[dataPointIndex];
                const date = new Date(timestamp ?? NaN);
                const dateValid = !isNaN(date.getTime());

                let daysSincePlanting = 0;
                const start = w.config.brokkoliStart;
                if (dateValid && start) {
                    const startMs = start < 1e12 ? start * 1000 : start;
                    const startDate = new Date(startMs);

                    if (!isNaN(startDate.getTime())) {
                        const startDateMidnight = new Date(startDate);
                        startDateMidnight.setHours(0, 0, 0, 0);
                        daysSincePlanting = Math.floor((date.getTime() - startDateMidnight.getTime()) / (1000 * 60 * 60 * 24)) + 1;
                    }
                }

                // dateStr nur formatieren wenn Date gültig — sonst wirft Intl.DateTimeFormat.format RangeError
                const dateStr = dateValid
                    ? new Intl.DateTimeFormat(undefined, {
                        day: '2-digit',
                        month: 'short',
                        hour: '2-digit',
                        minute: '2-digit',
                    }).format(date)
                    : '';

                const dateHeader = daysSincePlanting > 0 ? `<strong>Tag ${daysSincePlanting}</strong> - ${dateStr}` : dateStr;

                // Sensoren und Werte aus dem Chart holen
                const sensors = w.config.series ? w.config.series.filter((_: unknown, index: number) => index % 2 === 1)
                    .map((serie: { name: string }, index: number) => {
                        const i = index * 2;
                        return {
                            name: serie.name,
                            unit: (w.config.series[i] as { unit?: string }).unit || '',
                            color: w.config.colors[i],
                            index: i
                        };
                    }) : [];

                // Erzeuge HTML für jeden Sensor
                const sensorRows = sensors.map((sensor: TooltipSensor) => {
                    // Eigener Index pro Sensor statt geteiltem dataPointIndex — Serien mit
                    // abweichendem x-Array (z.B. "health", sparse aus der History-API)
                    // würden sonst auf falsche/fehlende Punkte zeigen (siehe findValueIndexAtOrBefore).
                    const sensorXs = w.globals.seriesX[sensor.index + 1];
                    const idx = findValueIndexAtOrBefore(sensorXs, timestamp);

                    const rawMin = idx === -1 ? undefined : w.globals.seriesRangeStart?.[sensor.index]?.[idx];
                    const rawMax = idx === -1 ? undefined : w.globals.seriesRangeEnd?.[sensor.index]?.[idx];
                    // null/undefined uniform behandeln (sonst Number(null).toFixed(0)="0" → "0 - 0" in Daten-Lücken)
                    const range = (rawMin == null || rawMax == null) ? undefined : { min: rawMin, max: rawMax };
                    const mean = idx === -1 ? undefined : (series[sensor.index + 1]?.[idx] as number);

                    // Formatiere die Werte
                    const formatRange = () => {
                        if (!range) return '-';
                        return `${Number(range.min).toFixed(0)} - ${Number(range.max).toFixed(0)}`;
                    };

                    const formatMean = () => {
                        if (mean == null) return '-';
                        return `${Number(mean).toFixed(1)}${sensor.unit}`;
                    };

                    return `<div class="tooltip-sensor-name" style="color: ${sensor.color}">${sensor.name}:</div><div class="tooltip-range">${formatRange()}</div><div class="tooltip-mean">${formatMean()}</div>`;
                }).join('');

                return `
                    <div class="tooltip-container">
                        <div class="tooltip-header">${dateHeader}</div>
                        <div class="tooltip-content">${sensorRows}</div>
                    </div>
                `;
            } catch (error) {
                console.error('Fehler beim Erstellen des Tooltips:', error);
                return '<div class="tooltip-error">Fehler beim Laden der Daten</div>';
            }
        },
        fillSeriesColor: false,
        theme: false,
        onDatasetHover: {
            highlightDataSeries: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    markers: {
        size: [0, 0],
        strokeWidth: 2,
        hover: {
            size: 3,
            sizeOffset: 3
        }
    },
    fill: {
        type: ['solid', 'solid'],
        opacity: [0.24, 1]
    },
    grid: {
        show: false,
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    },
    theme: {
        mode: 'light'
    }
};

@customElement('flower-graph')
export class FlowerGraph extends LitElement {
    // Als einzige Komponente hatte der Graph diese beiden nie als reaktive
    // Property deklariert -- alle Geschwister (timeline, gallery, consumption,
    // history, sensor-assignment) tun es. Ein Setzen von aussen loeste damit
    // kein Update aus: updated() lief nach dem ersten Durchgang praktisch nie
    // mehr, und changedProps.has('hass') bzw. has('entityId') -- worauf die
    // Methode ihre gesamte Aktualisierungslogik stuetzt -- konnten nie wahr
    // werden. Stand der Chart nach firstUpdated() nicht, stand er nie.
    @property({ attribute: false }) public hass?: HomeAssistant;
    @property({ attribute: false }) public entityId?: string;
    private _chart?: ApexChart;
    private _data: ChartDataPoint[] = [];
    public _dateRange: [Date, Date] = [new Date(), new Date()];
    private _lastUpdate = 0;
    private _scriptLoaded = false;
    private _picker?: FlatpickrInstance;
    private _prevRangeData: unknown = null;
    private _prevMeanData: unknown = null;
    private _prevMoistureRangeData: unknown = null;
    private _prevMoistureMeanData: unknown = null;
    private _isConnected = false;
    private _initialized = false;
    private _plantInfo: PlantInfo | null = null;
    private _sensorTypes = [
        { id: 'temperature', scale: 1, yaxis: 0, color: '#2E93fA' },
        { id: 'conductivity', scale: 0.01, yaxis: 0, color: '#00D2FF' },
        { id: 'dli', scale: 1, yaxis: 0, color: '#FFB900' },
        { id: 'health', scale: 6, yaxis: 0, color: '#FF4560', apiPath: 'helpers.health' },
        { id: 'water_consumption', scale: 1, yaxis: 0, color: '#775DD0' },
        { id: 'fertilizer_consumption', scale: 0.01, yaxis: 0, color: '#00D2FF' },
        { id: 'power_consumption', scale: 0.01, yaxis: 0, color: '#FEB019' },
        { id: 'soil_moisture', scale: 1, yaxis: 1, color: '#00E396', apiPath: 'moisture' },
        { id: 'illuminance', scale: 0.01, yaxis: 1, color: '#CED4DC' },
        { id: 'humidity', scale: 1, yaxis: 1, color: '#008FFB' }
    ];
    private _sensors: FlowerSensor[] = [];
    // Verhindert, dass sich zwei Aufbauversuche ueberholen.
    private _chartBautGerade = false;
    // Pflanz-Startdatum DIESER Pflanze -- Bezugspunkt der "Tag N"-Achse.
    private _startTimestamp?: number;
    private _aufbauFehlversuche = 0;
    private _apex?: ApexKonstruktor;
    // Welche Sensoren der Nutzer ueber die Legende ausgeblendet hat -- gehalten
    // ueber die sprachneutrale sensor.id, nicht ueber den Serien-Namen, damit
    // die Auswahl einen Sprachwechsel und jedes Neuladen der Daten uebersteht.
    @state() private _versteckteSensoren: ReadonlySet<string> = new Set();

    async connectedCallback() {
        super.connectedCallback();
        this._isConnected = true;
        // Neuer Anlauf nach einem echten Reconnect.
        this._aufbauFehlversuche = 0;
        // Chart und Picker werden in disconnectedCallback() zerstoert. HA-Dashboard-
        // Sub-Tabs entfernen die Karte beim Wegwechseln nicht, sie disconnecten
        // dieselbe Element-Instanz und connecten sie zurueck -- firstUpdated()
        // laeuft dann nicht erneut. Der Aufbau ist wiederholbar und steigt von
        // selbst aus, wenn schon ein Chart steht.
        await this._chartAufbauen();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this._isConnected = false;
        if (this._chart) {
            this._chart.destroy();
            this._chart = undefined;
        }
        if (this._picker) {
            this._picker.destroy();
            this._picker = undefined;
        }
    }

    async firstUpdated() {
        await this._chartAufbauen();
    }

    /**
     * Baut Datepicker und Chart auf, sofern alles dafuer bereitsteht.
     *
     * Frueher stand das komplett in firstUpdated() -- und firstUpdated() feuert
     * in Lit genau einmal je Element. Fehlten die Pflanzendaten in diesem einen
     * Moment, stieg die Methode mit einer Warnung aus, _initialized blieb false,
     * und es gab keinen Weg zurueck: updated() ruft nur updateGraphData(), das
     * einen bestehenden Chart braucht, und die Reparatur in connectedCallback()
     * greift erst ab _initialized. Der Graph blieb dauerhaft ohne Linien --
     * waehrend Datepicker und Timeline normal dastanden, weil sie weder
     * ApexCharts noch die Pflanzendaten brauchen. Auf einer Installation mit
     * vielen Pflanzen war das der Normalfall, weil plant/get_info unter Last
     * scheiterte.
     *
     * Deshalb ist der Aufbau jetzt wiederholbar und wird aus updated() erneut
     * versucht, solange kein Chart steht.
     */
    private async _chartAufbauen(): Promise<void> {
        if (this._chartBautGerade || this._chart) return;
        if (!this.entityId || !this.hass) return;
        // Ein Aufbau, der wirklich scheitert, scheitert bei jedem Versuch gleich.
        // Ohne Obergrenze wiederholt updated() ihn endlos und fuellt die Konsole
        // mit Hunderten identischer Meldungen.
        if (this._aufbauFehlversuche >= MAX_AUFBAU_VERSUCHE) return;

        this._chartBautGerade = true;
        try {
            await this._loadScripts();
            await this._loadFlatpickr();

            if (!this._picker) this._initDatePicker();

            this._plantInfo = this._getPlantInfo();
            // Kein Fehlversuch: die Pflanze kann gleich auftauchen.
            if (!this._plantInfo) return;

            this._updateSensorsFromPlantInfo();
            await this.updateDateRange();

            await this._initChart();
            this.requestUpdate();

            // _initChart faengt seine Fehler selbst ab, also hier nachsehen,
            // ob wirklich ein Chart steht.
            if (this._chart) {
                this._aufbauFehlversuche = 0;
                this._initialized = true;
            } else {
                this._aufbauNotieren();
            }
        } catch (fehler) {
            console.warn('Graph konnte nicht aufgebaut werden:', fehler);
            this._aufbauNotieren();
        } finally {
            this._chartBautGerade = false;
        }
    }

    private _aufbauNotieren(): void {
        this._aufbauFehlversuche++;
        if (this._aufbauFehlversuche >= MAX_AUFBAU_VERSUCHE) {
            console.error(
                `Graph fuer ${this.entityId} nach ${MAX_AUFBAU_VERSUCHE} Versuchen aufgegeben. `
                + 'Neu versucht wird erst nach einem Neuaufbau der Karte.'
            );
        }
    }

    private _updateSensorsFromPlantInfo() {
        if (!this._plantInfo) return;
        
        this._sensors = this._sensorTypes.map(sensorType => {
            // Bestimme den API-Pfad (Standard: gleich wie id, außer wenn explizit angegeben)
            const apiPath = sensorType.apiPath || sensorType.id;
            
            // Verarbeite verschachtelte Pfade (z.B. 'helpers.health')
            const keyParts = apiPath.split('.');
            let sensorData = this._plantInfo;
            
            for (const part of keyParts) {
                if (sensorData && typeof sensorData === 'object' && sensorData[part]) {
                    sensorData = sensorData[part] as PlantInfo;
                } else {
                    sensorData = null;
                    break;
                }
            }
            
            // Spezialfall für Helper-Entitäten
            if (keyParts[0] === 'helpers' && sensorData && sensorData.entity_id) {
                return {
                    id: sensorType.id,
                    name: this.hass ? TranslationUtils.translateSensor(this.hass, sensorType.id) : sensorType.id,
                    scale: sensorType.scale,
                    yaxis: sensorType.yaxis,
                    color: sensorType.color,
                    entityId: sensorData.entity_id,
                    icon: sensorData.icon,
                    unit: sensorData.unit_of_measurement
                };
            }
            
            // Standardfall für Sensor-Entitäten
            return {
                id: sensorType.id,
                name: this.hass ? TranslationUtils.translateSensor(this.hass, sensorType.id) : sensorType.id,
                scale: sensorType.scale,
                yaxis: sensorType.yaxis,
                color: sensorType.color,
                entityId: sensorData?.sensor || null,
                icon: sensorData?.icon,
                unit: sensorData?.unit_of_measurement
            };
        }).filter(sensor => sensor.entityId !== null) as FlowerSensor[];
    }

    public async updateDateRange() {
        if (!this.entityId || !this.hass) return;
        
        // Hole die Phasen-Events wie in der Timeline
        const plantName = this.entityId.split('.')[1];
        const phaseEntityId = (this._plantInfo as { helpers?: { growth_phase?: { entity_id?: string } } } | null)?.helpers?.growth_phase?.entity_id;
        const phaseEntity = phaseEntityId ? this.hass.states[phaseEntityId] : undefined;
        
        if (phaseEntity?.attributes) {
            // Die Integration speichert Date-Attribute mit englischen Phase-Keys
            // (siehe select.py date_mapping): seeds_start, germination_start,
            // rooting_start, growing_start, flowering_start, removed_date,
            // harvested_date. Der Graph muss die exakt so suchen.
            const phaseAttrs = [
                'seeds_start',
                'germination_start',
                'rooting_start',
                'growing_start',
                'flowering_start',
                'removed_date',
                'harvested_date',
            ];
            const dates: Date[] = [];

            for (const attr of phaseAttrs) {
                const startDate = phaseEntity.attributes[attr];
                if (startDate) {
                    const date = new Date(startDate);
                    if (!isNaN(date.getTime())) {
                        dates.push(date);
                    }
                }
            }
            
            if (dates.length > 0) {
                // Sortiere Daten und nimm das früheste
                const startDate = new Date(Math.min(...dates.map(d => d.getTime())));
                this._dateRange = [startDate, new Date()];
                
                // Aktualisiere den DatePicker, falls er bereits existiert
                if (this._picker) {
                    this._picker.setDate(this._dateRange, false);
                }
            }
        }
        
        return this._dateRange;
    }

    // Unsere eigene, gepinnte ApexCharts-Instanz -- nicht das, was andere Karten
    // am window hinterlassen haben. Siehe utils/apexcharts-laden.ts.
    private async _loadScripts() {
        if (this._scriptLoaded && this._apex) return;
        apexStylesheetLaden();
        this._apex = await apexChartsLaden();
        this._scriptLoaded = true;
    }

    private async _loadFlatpickr() {
        if (window.flatpickr) return;

        stylesheetLaden('https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/flatpickr.min.css');
        await skriptLaden('https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/flatpickr.min.js');

        // Die Lokalisierung ist Beiwerk: faellt sie aus, zeigt der Datepicker
        // englische Monatsnamen -- kein Grund, den Chart nicht aufzubauen.
        try {
            await skriptLaden('https://cdn.jsdelivr.net/npm/flatpickr@4.6.13/dist/l10n/de.js');
        } catch (fehler) {
            console.warn('Flatpickr-Lokalisierung nicht ladbar, nutze Standard:', fehler);
        }
    }

    async updated(changedProps: Map<string, unknown>) {
        super.updated(changedProps);

        // Andere Pflanze: der neue Aufbau bekommt seine Versuche zurueck.
        if (changedProps.has('entityId')) this._aufbauFehlversuche = 0;

        // Steht noch kein Chart, ist der Aufbau frueher nicht durchgekommen --
        // etwa weil die Pflanze zu diesem Zeitpunkt noch nicht in hass.states
        // stand. Mit jedem Update erneut versuchen.
        if (!this._chart) {
            await this._chartAufbauen();
            return;
        }
        
        // Nur updaten wenn sich die entityId ändert oder
        // wenn sich der State des Sensors in hass geändert hat
        if (changedProps.has('entityId')) {
            this.updateGraphData();  // Sofortiges Update bei entityId Änderung
        } else if (changedProps.has('hass') && this.hass && this.entityId) {
            const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
            if (!oldHass) return;

            // Sensor-entity_id aus plant/get_info statt hartkodiertem Pattern.
            const sensorId = (this._plantInfo as { temperature?: { sensor?: string } } | null)?.temperature?.sensor;
            if (!sensorId) return;

            const oldState = oldHass.states[sensorId];
            const newState = this.hass.states[sensorId];

            if (oldState?.state !== newState?.state) {
                this.updateGraphData();
            }
        }
    }

    private _initDatePicker() {
        const datePickerElement = this.shadowRoot?.querySelector('#date-picker') as HTMLElement;
        if (datePickerElement && window.flatpickr) {
            this._picker = window.flatpickr(datePickerElement, {
                mode: 'range',
                enableTime: true,
                time_24hr: true,
                locale: 'de',
                defaultDate: this._dateRange,
                formatDate: (date: Date) => {
                    const timeSpan = this._dateRange[1].getTime() - this._dateRange[0].getTime();
                    const days = timeSpan / (1000 * 60 * 60 * 24);

                    if (days > 30) {
                        return date.toLocaleDateString(undefined, { day: '2-digit', month: '2-digit', year: '2-digit' });
                    } else if (days > 2) {
                        return date.toLocaleDateString(undefined, { day: '2-digit', month: '2-digit' });
                    } else {
                        return date.toLocaleString(undefined, { 
                            day: '2-digit', 
                            month: '2-digit', 
                            hour: '2-digit', 
                            minute: '2-digit'
                        });
                    }
                },
                onChange: (selectedDates: Date[]) => {
                    if (selectedDates.length === 2) {
                        this._dateRange = [selectedDates[0], selectedDates[1]];
                        this.updateGraphData();  // Sofortiges Update bei Datumswahl
                    }
                }
            });
        }
    }

    private _getPlantInfo(): PlantInfo | null {
        if (!this.entityId || !this.hass) return null;

        // Struktur und Werte kommen synchron aus Registry und hass.states.
        return PlantEntityUtils.buildPlantView(this.hass, this.entityId) as PlantInfo | null;
    }

    public async updateGraphData(redraw: boolean = true) {
        if (!this.entityId || !this.hass) return;

        // Hole Pflanzendaten aus der API
        this._plantInfo = this._getPlantInfo();
        
        // Aktualisiere die Sensoren basierend auf den Pflanzendaten
        this._updateSensorsFromPlantInfo();

        const startTime = this._dateRange[0].toISOString();
        const endTime = this._dateRange[1].toISOString();
        
        // Berechne die Zeitspanne in Tagen
        const timeSpan = this._dateRange[1].getTime() - this._dateRange[0].getTime();
        const daysDiff = timeSpan / (1000 * 60 * 60 * 24);

        // Bereite Objekt für alle Sensordaten vor
        const sensorData: Record<string, StatisticValue[]> = {};
        
        // Teile Sensoren in zwei Gruppen: reguläre Sensoren und Helper-Entitäten
        const regularSensors = this._sensors.filter(s => !s.entityId.startsWith('number.') && !s.entityId.startsWith('input_number.'));
        const helperSensors = this._sensors.filter(s => s.entityId.startsWith('number.') || s.entityId.startsWith('input_number.'));
        
        // 5-Min-Stats sind in HA nur ~10 Tage retainiert, Hour-Stats für immer.
        // Bei Range > 2 Tage hourly, sonst fehlen die ältesten Tage komplett.
        let periodType = 'hour';
        if (daysDiff <= 2) {
            periodType = '5minute';
        }
        
        // Lade History-Daten für alle Helper-Entitäten
        for (const helper of helperSensors) {
            // Helper-Werte über History-API laden
            const helperResponse = await this.hass.callApi('GET', 
                `history/period/${startTime}?filter_entity_id=${helper.entityId}&end_time=${endTime}`
            );
            
            if (helperResponse && Array.isArray(helperResponse) && helperResponse.length > 0) {
                const historyItems = helperResponse[0];
                
                // Konvertiere History-Format in Statistics-Format
                let helperStats: StatisticValue[] = historyItems
                    .filter((item: {state: string, last_changed: string}) => 
                        item.state && !isNaN(parseFloat(item.state)) && 
                        item.state !== 'unavailable' && item.state !== 'unknown')
                    .map((item: {state: string, last_changed: string}) => {
                        const value = parseFloat(item.state);
                        const timestamp = new Date(item.last_changed).getTime();
                        return {
                            start: new Date(timestamp).toISOString(),
                            end: new Date(timestamp + 60000).toISOString(), // 1 Minute später als Ende
                            mean: value,
                            min: value,
                            max: value,
                            sum: value
                        };
                    });
                    
                // Gruppiere History-Daten nach Periode für konsistente Datenstruktur
                helperStats = this._groupHistoryData(helperStats, periodType);
                    
                // Speichere Helper-Stats im sensorData-Objekt
                if (helperStats.length > 0) {
                    sensorData[helper.entityId] = helperStats;
                }
            }
        }
        
        // Lade Statistik-Daten für alle regulären Sensoren
        if (regularSensors.length > 0) {
            const sensorEntityIds = regularSensors.map(s => s.entityId);
            let statsResponse: Statistics | null = null;
            
            if (daysDiff <= 2) {
                statsResponse = await this.hass.callWS<Statistics>({
                    type: 'recorder/statistics_during_period',
                    start_time: startTime,
                    end_time: endTime,
                    statistic_ids: sensorEntityIds,
                    period: '5minute'
                });

                // Prüfe ob wir tatsächlich Daten bekommen haben
                if (!statsResponse || Object.keys(statsResponse).length === 0 || 
                    !Object.values(statsResponse).some(stats => stats && stats.length > 0)) {
                    statsResponse = null;
                }
            }

            // Wenn keine short-term statistics verfügbar sind oder der Zeitraum > 2 Tage ist,
            // verwende long-term statistics mit stündlicher Auflösung
            if (!statsResponse) {
                statsResponse = await this.hass.callWS<Statistics>({
                    type: 'recorder/statistics_during_period',
                    start_time: startTime,
                    end_time: endTime,
                    statistic_ids: sensorEntityIds,
                    period: 'hour'
                });
            }
            
            // Kombiniere Statistik-Daten
            if (statsResponse) {
                // Kopiere alle regulären Sensordaten
                Object.assign(sensorData, statsResponse);
            }
        }

        // Verarbeite die Daten für jeden Sensor
        const allSeriesData: { rangeData: RangeDataPoint[], meanData: LineDataPoint[] }[] = [];

        this._sensors.forEach((sensor) => {
            const entityId = sensor.entityId;
            let rangeData: { x: number, y: [number, number] }[] = [];
            let meanData: { x: number, y: number }[] = [];

            if (sensorData[entityId] && sensorData[entityId].length > 0) {
                // Nulls werden NICHT gestrippt — sonst connectet ApexCharts über
                // Daten-Lücken (z.B. VM-off-Phase) hinweg. Stattdessen auf y=null
                // mappen → ApexCharts zeichnet sauber eine Lücke.
                const stats = sensorData[entityId];
                const scale = this._getScale(sensor.id);
                const nullish = (v: unknown) => v === null || v === undefined;

                if (stats.length > 50) {
                    const grouped = this._groupGraphData(stats, scale);
                    rangeData = grouped.rangeData;
                    meanData = grouped.meanData;
                } else {
                    const sorted = stats.slice().sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
                    rangeData = sorted.map(item => ({
                        x: new Date(item.start).getTime(),
                        y: (nullish(item.min) || nullish(item.max))
                            ? [null, null] as unknown as [number, number]
                            : [item.min * scale, item.max * scale]
                    }));
                    meanData = sorted.map(item => ({
                        x: new Date(item.start).getTime(),
                        y: nullish(item.mean) ? (null as unknown as number) : item.mean * scale
                    }));
                }

                if (sensor.id === 'health') {
                    // Health ist ein manuell gesetzter Wert (number-Helper), der über
                    // die History-API kommt und nur bei tatsächlicher Änderung einen
                    // Datenpunkt liefert — lange Lücken zwischen Bewertungen sind normal,
                    // kein Sensor-Ausfall. Gap-Detection würde die Linie hier fälschlich
                    // fragmentieren, daher stattdessen den letzten Wert fortschreiben.
                    rangeData = this._forwardFill(rangeData);
                    meanData = this._forwardFill(meanData);
                } else {
                    // Gap-Detection greift auf beiden Pfaden: wo zwei
                    // aufeinanderfolgende Punkte > 1.4x den Median-Abstand
                    // auseinanderliegen, Null-Marker einfügen → ApexCharts
                    // zeichnet sichtbare Lücke statt durchgehender Linie.
                    rangeData = this._insertGapMarkers(rangeData, true);
                    meanData = this._insertGapMarkers(meanData, false);
                }
            }

            allSeriesData.push({ rangeData, meanData });
        });

        // Aktualisiere das Chart
        if (this._chart) {
            const series = this._sensors.map((sensor, index) => [
                {
                    name: `${sensor.name}bereich`,
                    type: 'rangeArea',
                    data: allSeriesData[index].rangeData,
                    yAxisIndex: sensor.yaxis,
                    unit: sensor.unit
                },
                {
                    name: sensor.name,
                    type: 'line',
                    data: allSeriesData[index].meanData,
                    yAxisIndex: sensor.yaxis,
                    unit: sensor.unit
                }
            ]).flat();

            this._chart.updateSeries(series, redraw);
            // updateSeries setzt die Sichtbarkeit zurueck -- Auswahl neu setzen.
            this._sichtbarkeitAnwenden();
        }

        this._lastUpdate = Date.now();
    }

    private _getSeriesName(sensorId: string, isRange: boolean): string {
        // Verwende die Übersetzung für den Sensor-Namen
        const name = this.hass ? TranslationUtils.translateSensor(this.hass, sensorId) : sensorId;
        const rangeText = this.hass ? TranslationUtils.translateUI(this.hass, 'tooltip_range') : 'Bereich';

        return isRange ? `${name}${rangeText}` : name;
    }

    private _groupGraphData(stats: StatisticValue[], scale: number = 1): { rangeData: { x: number, y: [number, number] }[], meanData: { x: number, y: number }[] } {
        if (stats.length === 0) {
            return { rangeData: [], meanData: [] };
        }

        // Sortiere die Statistik-Daten anhand des Start-Zeitpunkts
        const sorted = stats.slice().sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
        const sortedTimes = sorted.map(s => new Date(s.start).getTime());

        // Erkenne Lücken in den ROH-Daten (vor Bucketing). Buckets die innerhalb
        // einer Lücke liegen werden später als null emittiert, auch wenn benachbarte
        // Buckets noch Daten haben — sonst verschluckt das 50-Bucket-Compaction
        // kurze VM-off-Phasen.
        const rawGaps: { from: number; to: number }[] = [];
        if (sortedTimes.length >= 3) {
            const intervals: number[] = [];
            for (let i = 1; i < sortedTimes.length; i++) intervals.push(sortedTimes[i] - sortedTimes[i-1]);
            intervals.sort((a, b) => a - b);
            const median = intervals[Math.floor(intervals.length / 2)];
            // Lücke = > 3x Median UND > 10 Minuten (sonst flackert's bei normalem Jitter)
            const gapThreshold = Math.max(median * 3, 10 * 60 * 1000);
            for (let i = 1; i < sortedTimes.length; i++) {
                if (sortedTimes[i] - sortedTimes[i-1] > gapThreshold) {
                    rawGaps.push({ from: sortedTimes[i-1], to: sortedTimes[i] });
                }
            }
        }

        const firstTime = sortedTimes[0];
        const lastTime = sortedTimes[sortedTimes.length - 1];
        const range = lastTime - firstTime;
        const desiredBuckets = 50;
        const bucketDuration = range / desiredBuckets;
        
        // Erzeuge ein Array für Buckets
        const buckets: { xValues: number[], min: number, max: number, sum: number, count: number }[] = [];
        for (let i = 0; i < desiredBuckets; i++) {
            buckets.push({ xValues: [], min: Infinity, max: -Infinity, sum: 0, count: 0 });
        }

        // Ordne jeden Datenpunkt einem Bucket zu (nulls ausklammern, NICHT die Bucket-Position)
        sorted.forEach(stat => {
            const time = new Date(stat.start).getTime();
            let index = Math.floor((time - firstTime) / bucketDuration);
            if (index >= desiredBuckets) {
                index = desiredBuckets - 1;
            }
            const bucket = buckets[index];
            bucket.xValues.push(time);
            if (stat.min !== null && stat.min !== undefined) bucket.min = Math.min(bucket.min, stat.min * scale);
            if (stat.max !== null && stat.max !== undefined) bucket.max = Math.max(bucket.max, stat.max * scale);
            if (stat.mean !== null && stat.mean !== undefined) { bucket.sum += stat.mean * scale; bucket.count++; }
        });

        // Aggregierte Serien: leere Buckets → null-Y, damit Gaps sichtbar bleiben.
        // Zusätzlich Buckets die innerhalb einer ROH-Lücke liegen explizit als null
        // markieren — auch wenn sie zufällig noch Daten am Rand haben.
        const rangeData: { x: number, y: [number, number] }[] = [];
        const meanData: { x: number, y: number }[] = [];
        buckets.forEach((bucket, i) => {
            const bucketStart = firstTime + i * bucketDuration;
            const bucketEnd = firstTime + (i + 1) * bucketDuration;
            const avgTime = bucket.xValues.length > 0
                ? bucket.xValues.reduce((a, b) => a + b, 0) / bucket.xValues.length
                : firstTime + (i + 0.5) * bucketDuration;
            // Liegt der Bucket-Mittelpunkt innerhalb einer Roh-Lücke?
            const inRawGap = rawGaps.some(g => avgTime > g.from && avgTime < g.to);
            const hasRange = !inRawGap && bucket.min !== Infinity && bucket.max !== -Infinity;
            const hasMean = !inRawGap && bucket.count > 0;
            rangeData.push({ x: avgTime, y: hasRange ? [bucket.min, bucket.max] : [null, null] as unknown as [number, number] });
            meanData.push({ x: avgTime, y: hasMean ? bucket.sum / bucket.count : (null as unknown as number) });
        });

        return { rangeData, meanData };
    }

    // Fügt Null-Punkte zwischen Datenpunkten ein deren X-Abstand
    // > 1.4x Median-Abstand ist. Wird auf beiden Pfaden (bucketed + direkt)
    // angewendet, damit auch dichte Reihen (Temperatur) Lücken zeigen wenn
    // zwei Bucket-AvgTimes auseinanderdriften.
    private _insertGapMarkers<T extends { x: number; y: number | number[] | null }>(data: T[], isRange: boolean): T[] {
        if (data.length < 3) return data;
        const intervals: number[] = [];
        for (let i = 1; i < data.length; i++) intervals.push(data[i].x - data[i-1].x);
        const sortedIntervals = intervals.slice().sort((a, b) => a - b);
        const median = sortedIntervals[Math.floor(sortedIntervals.length / 2)];
        const threshold = median * 1.4;
        const nullY = isRange ? ([null, null] as unknown as number[]) : (null as unknown as number);
        const result: T[] = [];
        for (let i = 0; i < data.length; i++) {
            result.push(data[i]);
            if (i < data.length - 1) {
                const gap = data[i+1].x - data[i].x;
                if (gap > threshold) {
                    const midX = data[i].x + gap / 2;
                    result.push({ x: midX, y: nullY } as T);
                }
            }
        }
        return result;
    }

    // Schreibt den letzten bekannten (nicht-null) Wert über Null-Punkte hinweg fort,
    // statt dort eine Lücke zu lassen. Für Werte, die sich nur bei tatsächlicher
    // Änderung aktualisieren (z.B. health), damit die Linie durchgehend bleibt statt
    // in Fragmente zu zerfallen. Führende Nulls (vor dem ersten echten Wert) bleiben
    // unangetastet — dort gab es noch keine Bewertung.
    private _forwardFill<T extends { x: number; y: number | number[] | null }>(data: T[]): T[] {
        let last: T['y'] | null = null;
        return data.map(point => {
            const isNullish = point.y === null
                || point.y === undefined
                || (Array.isArray(point.y) && (point.y[0] === null || point.y[0] === undefined));
            if (isNullish) {
                return last === null ? point : { ...point, y: last };
            }
            last = point.y;
            return point;
        });
    }

    private _getScale(sensorId: string): number {
        // Skalierungsfaktoren für verschiedene Sensoren
        const scales: Record<string, number> = {
            temperature: 1,      // 0-50°C
            conductivity: 0.01,     // 0-3000
            dli: 1,             // 0-30
            health: 1,          // 0-5
            water_consumption: 1,// ml
            fertilizer_consumption: 0.01, // 0-3000
            power_consumption: 0.01,// W (0-3500 range on the shared 0-35 left axis)
            soil_moisture: 1,   // 0-100%
            illuminance: 0.01,     // 0-10000
            humidity: 1         // 0-100%
        };

        return scales[sensorId] || 1;
    }

    private async _initChart() {
        // Warte auf das nächste Render
        await new Promise(resolve => requestAnimationFrame(resolve));

        const chartElement = this.shadowRoot?.querySelector('#chart') as HTMLElement;
        if (!chartElement) {
            console.warn('Chart Container nicht gefunden');
            return;
        }

        // Warte bis der Container eine gültige Größe hat
        if (chartElement.clientWidth === 0) {
            setTimeout(() => this._initChart(), 100);
            return;
        }

        // Zerstöre vorhandenes Chart wenn es existiert
        if (this._chart) {
            try {
                this._chart.destroy();
            } catch (e) {
                console.warn('Fehler beim Zerstören des alten Charts:', e);
            }
            this._chart = undefined;
        }

        // Hole das Startdatum aus der ersten Phase
        const plantName = this.entityId?.split('.')[1];
        if (plantName && this.hass) {
            const phaseEntityId = (this._plantInfo as { helpers?: { growth_phase?: { entity_id?: string } } } | null)?.helpers?.growth_phase?.entity_id;
        const phaseEntity = phaseEntityId ? this.hass.states[phaseEntityId] : undefined;
            if (phaseEntity?.attributes) {
                const phases = ['seeds', 'germination', 'rooting', 'growing', 'flowering', 'removed', 'harvested'];
                const dates: Date[] = [];
                
                for (const phase of phases) {
                    const startDateStr = phaseEntity.attributes[`${phase === 'removed' || phase === 'harvested' ? phase : phase + '_start'}`];
                    if (startDateStr) {
                        const date = new Date(startDateStr);
                        if (!isNaN(date.getTime())) {
                            dates.push(date);
                        }
                    }
                }
                
                if (dates.length > 0) {
                    const startDate = new Date(Math.min(...dates.map(d => d.getTime())));
                    this._startTimestamp = startDate.getTime();
                }
            }
        }

        // Generiere Serien dynamisch basierend auf den verfügbaren Sensoren
        const series = [];
        const colors = [];

        for (const sensor of this._sensors as FlowerSensor[]) {
            // Bereiche-Serie (Range)
            series.push({
                name: `${sensor.name}bereich`,
                type: 'rangeArea',
                data: [] as RangeDataPoint[],
                yAxisIndex: sensor.yaxis,
                unit: sensor.unit
            });

            // Linien-Serie (Durchschnitt)
            series.push({
                name: sensor.name,
                type: 'line',
                data: [] as LineDataPoint[],
                yAxisIndex: sensor.yaxis,
                unit: sensor.unit
            });

            // Füge die Farbe für beide Serien hinzu
            const color = sensor.color || '#777777';
            colors.push(color, color);
        }

        const options = {
            ...chartOptions,
            series,
            colors,
            brokkoliStart: this._startTimestamp,
            chart: {
                ...chartOptions.chart,
                events: {
                    zoomed: (chartContext: unknown, { xaxis }: { xaxis: unknown }) => {
                        // Dieser Event wird nur noch für Debugging-Zwecke beibehalten
                        if (!xaxis) return;
                        console.debug('Zoomed event triggered with xaxis:', xaxis);
                    },
                    beforeZoom: (chartContext: unknown, { xaxis }: { xaxis: { min: number; max: number } }) => {
                        if (!xaxis || !this._startTimestamp) return;

                        // Kopiere die Werte, um sie zu modifizieren
                        let minX = xaxis.min;
                        let maxX = xaxis.max;

                        // Verhindere Zoomen vor Tag 1
                        if (minX < this._startTimestamp) {
                            minX = this._startTimestamp;
                        }

                        // Verhindere Zoomen nach heute
                        const now = new Date().getTime();
                        if (maxX > now) {
                            maxX = now;
                        }

                        // Aktualisiere den Datepicker ohne onChange Event auszulösen
                        const newStartDate = new Date(minX);
                        const newEndDate = new Date(maxX);
                        
                        // Prüfe ob die Daten gültig sind
                        if (isNaN(newStartDate.getTime()) || isNaN(newEndDate.getTime())) {
                            console.warn('Ungültige Datumswerte beim Zoom:', xaxis);
                            return {
                                xaxis: {
                                    min: minX,
                                    max: maxX
                                }
                            };
                        }
                        
                        this._dateRange = [newStartDate, newEndDate];
                        if (this._picker) {
                            this._picker.setDate(this._dateRange, false);
                        }
                        
                        // Lade die Daten mit der richtigen Auflösung neu, ohne Rerendering
                        this.updateGraphData(false);

                        return {
                            xaxis: {
                                min: minX,
                                max: maxX
                            }
                        };
                    },
                    beforeResetZoom: () => {
                        if (!this.entityId || !this.hass) return;

                        try {
                            const plantName = this.entityId.split('.')[1];
                            const phaseEntityId = (this._plantInfo as { helpers?: { growth_phase?: { entity_id?: string } } } | null)?.helpers?.growth_phase?.entity_id;
                            const phaseEntity = phaseEntityId ? this.hass?.states[phaseEntityId] : undefined;
                            if (!phaseEntity?.attributes) return;

                            const phases = ['seeds', 'germination', 'rooting', 'growing', 'flowering', 'removed', 'harvested'];
                            const dates: Date[] = [];
                            
                            for (const phase of phases) {
                                const startDate = phaseEntity.attributes[`${phase === 'removed' || phase === 'harvested' ? phase : phase + '_start'}`];
                                if (startDate) {
                                    const date = new Date(startDate);
                                    if (!isNaN(date.getTime())) {
                                        dates.push(date);
                                    }
                                }
                            }
                            
                            if (dates.length > 0) {
                                const startDate = new Date(Math.min(...dates.map(d => d.getTime())));
                                const endDate = new Date();
                                
                                // Aktualisiere den Datepicker ohne onChange Event auszulösen
                                this._dateRange = [startDate, endDate];
                                if (this._picker) {
                                    this._picker.setDate(this._dateRange, false);
                                }
                                
                                // Lade die Daten mit der richtigen Auflösung neu, ohne Rerendering
                                this.updateGraphData(false);
                                
                                return {
                                    xaxis: {
                                        min: startDate.getTime(),
                                        max: endDate.getTime()
                                    }
                                };
                            }
                        } catch (e) {
                            console.warn('Fehler beim Reset-Zoom:', e);
                        }
                        return undefined;
                    }
                }
            }
        };

        try {
            if (!this._apex) throw new Error('ApexCharts steht nicht bereit');
            this._chart = new this._apex(chartElement, options) as unknown as ApexChart;
            await this._chart.render();
            this.updateGraphData();  // Initial update
        } catch (error) {
            console.error('Fehler bei der Chart-Initialisierung:', error);
            this._chart = undefined;
        }
    }

    render(): HTMLTemplateResult {
        if (!this.entityId || !this.hass) return html``;

        return html`
            <div class="graph-container">
                <div class="date-picker-container">
                    <input type="text" id="date-picker" readonly>
                </div>
                <div id="chart"></div>
                
                ${this._plantInfo && this._sensors.length > 0 ? html`
                <div class="custom-legend">
                    ${this._sensors.map(sensor => html`
                        <div
                            class="legend-item ${this._versteckteSensoren.has(sensor.id) ? 'inactive' : ''}"
                            @click=${() => this._toggleSeries(sensor.id)}
                        >
                            <ha-icon icon="${sensor.icon || ''}" class="legend-marker"></ha-icon>
                            <span class="legend-text">${this._getSeriesName(sensor.id, false)}</span>
                        </div>
                    `)}
                </div>
                ` : html``}
            </div>
        `;
    }

    /**
     * Blendet einen Sensor aus oder wieder ein.
     *
     * Der Zustand lag frueher ausschliesslich in einer CSS-Klasse am
     * Legenden-Element und in den Interna von ApexCharts. Beides ueberlebt kein
     * updateSeries(): die Linien kamen beim naechsten Datenabgleich zurueck,
     * waehrend die Legende sie weiter als abgewaehlt zeigte. Jetzt haelt die
     * Komponente die Auswahl selbst und stellt sie nach jedem Datenabgleich
     * wieder her.
     */
    private _toggleSeries(sensorId: string) {
        const versteckt = new Set(this._versteckteSensoren);
        if (versteckt.has(sensorId)) versteckt.delete(sensorId);
        else versteckt.add(sensorId);
        this._versteckteSensoren = versteckt;

        const sensor = this._sensors.find(s => s.id === sensorId);
        if (sensor) this._sensorAnwenden(sensor, versteckt.has(sensorId));
    }

    /**
     * Stellt die Auswahl nach einem Datenabgleich wieder her.
     *
     * updateSeries() zeigt grundsaetzlich wieder alles an, es ist also nur zu
     * verstecken -- nichts einzublenden. Jeder Aufruf laesst ApexCharts neu
     * zeichnen, deshalb wird hier nur angefasst, was wirklich versteckt gehoert.
     */
    private _sichtbarkeitAnwenden() {
        if (!this._chart || this._versteckteSensoren.size === 0) return;
        for (const sensor of this._sensors) {
            if (this._versteckteSensoren.has(sensor.id)) this._sensorAnwenden(sensor, true);
        }
    }

    /** Beide Serien eines Sensors -- Bereich und Mittellinie -- umschalten. */
    private _sensorAnwenden(sensor: FlowerSensor, verstecken: boolean) {
        if (!this._chart) return;
        for (const name of [`${sensor.name}bereich`, sensor.name]) {
            try {
                if (verstecken) this._chart.hideSeries(name);
                else this._chart.showSeries(name);
            } catch (error) {
                console.warn(`Serie ${name} liess sich nicht umschalten:`, error);
            }
        }
    }

    static get styles(): CSSResult {
        return graphStyles;
    }

    // Hilfsmethode zum Gruppieren von History-Daten nach Zeitraum
    private _groupHistoryData(stats: StatisticValue[], periodType: string): StatisticValue[] {
        if (stats.length === 0) return [];
        
        const periodMap: { [key: string]: StatisticValue[] } = {};
        const periodDuration = periodType === '5minute' ? 5 * 60 * 1000 : 60 * 60 * 1000;
        
        // Gruppiere Daten nach Zeitraum
        stats.forEach(stat => {
            const timestamp = new Date(stat.start).getTime();
            const periodStart = Math.floor(timestamp / periodDuration) * periodDuration;
            const key = periodStart.toString();
            
            if (!periodMap[key]) {
                periodMap[key] = [];
            }
            
            periodMap[key].push(stat);
        });
        
        // Aggregiere die gruppierten Daten
        return Object.entries(periodMap).map(([periodStart, values]) => {
            const minValue = Math.min(...values.map(v => v.min));
            const maxValue = Math.max(...values.map(v => v.max));
            const sumValue = values.reduce((sum, v) => sum + v.mean, 0);
            const avgValue = sumValue / values.length;
            
            return {
                start: new Date(parseInt(periodStart)).toISOString(),
                end: new Date(parseInt(periodStart) + periodDuration).toISOString(),
                mean: avgValue,
                min: minValue,
                max: maxValue,
                sum: sumValue
            };
        }).sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
    }
} 