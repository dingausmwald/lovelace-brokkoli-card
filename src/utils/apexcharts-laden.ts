// Laedt ApexCharts fuer diese Karte -- und nur fuer diese Karte.
//
// Frueher stand in den Komponenten: liegt schon ein window.ApexCharts vor, nimm
// das. Auf einer Installation mit apexcharts-card und cropsteering-card liegt
// dort aber deren Build, und das ApexCharts der einen Karte trifft auf das
// SVG.js der anderen -- "TypeError: t.put is not a function", geworfen aus
// fremdem Code, jedes Mal wenn diese Karte einen Chart bauen wollte.
//
// Die Loesung ist nicht, die Bibliothek mitzuliefern (das verdoppelt das
// Bundle), sondern die Abkuerzung ueber das Global zu lassen: eigene, gepinnte
// Version laden, die Referenz privat behalten und window.ApexCharts genau so
// hinterlassen, wie es vorgefunden wurde.

const APEX_VERSION = '4.4.0';
const APEX_JS = `https://cdn.jsdelivr.net/npm/apexcharts@${APEX_VERSION}/dist/apexcharts.min.js`;
const APEX_CSS = `https://cdn.jsdelivr.net/npm/apexcharts@${APEX_VERSION}/dist/apexcharts.css`;

export type ApexKonstruktor = new (element: Element, options: unknown) => {
    render(): Promise<void>;
    updateOptions(options: unknown): void;
    updateSeries(series: unknown[], redraw?: boolean): void;
    destroy(): void;
    toggleSeries(seriesName: string): void;
};

type FensterMitApex = Window & { ApexCharts?: ApexKonstruktor };

// Ein Ladevorgang fuer die ganze Seite, den sich alle Komponenten teilen.
let laufenderLadevorgang: Promise<ApexKonstruktor> | undefined;

export function apexChartsLaden(): Promise<ApexKonstruktor> {
    if (!laufenderLadevorgang) {
        laufenderLadevorgang = laden().catch(fehler => {
            // Beim naechsten Anlauf neu versuchen statt den Fehler festzuhalten.
            laufenderLadevorgang = undefined;
            throw fehler;
        });
    }
    return laufenderLadevorgang;
}

/** Nur das Stylesheet -- faellt es aus, sieht der Chart schlichter aus. */
export function apexStylesheetLaden(): void {
    if (document.querySelector(`link[href="${APEX_CSS}"]`)) return;
    const styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    styleLink.href = APEX_CSS;
    document.head.appendChild(styleLink);
}

async function laden(): Promise<ApexKonstruktor> {
    apexStylesheetLaden();

    const fenster = window as unknown as FensterMitApex;
    const vorgefunden = fenster.ApexCharts;
    const warVorhanden = 'ApexCharts' in fenster;

    const script = document.createElement('script');
    script.src = APEX_JS;
    await new Promise<void>((resolve, reject) => {
        script.onload = () => resolve();
        // Ohne onerror-Behandlung loest das Promise bei einem fehlgeschlagenen
        // Request nie auf und haengt den Chart-Aufbau dauerhaft auf.
        script.onerror = () => reject(new Error(`ApexCharts nicht ladbar: ${APEX_JS}`));
        document.head.appendChild(script);
    });

    const unsere = fenster.ApexCharts;

    // Das Global genau so hinterlassen, wie es vorgefunden wurde.
    if (warVorhanden) fenster.ApexCharts = vorgefunden;
    else delete fenster.ApexCharts;

    if (!unsere) throw new Error('ApexCharts geladen, aber kein Konstruktor hinterlegt');
    return unsere;
}
