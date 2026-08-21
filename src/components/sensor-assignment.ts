import { CSSResultGroup, HTMLTemplateResult, LitElement, html, svg } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import { sensorAssignmentStyles } from '../styles/sensor-assignment-styles';
import {
    SENSOR_TYPES,
    SENSOR_TYPE_COLORS,
    SensorAssignmentUtils,
    SensorDeviceGroup,
    PlantDeviceInfo,
    GROWTH_PHASES,
    DEFAULT_PLANT_PHASES,
} from '../utils/sensor-assignment-utils';
import { Spring2D, createSpring, isSettled, settleSpring, stepSpring } from '../utils/spring-utils';
import { TranslationUtils } from '../utils/translation-utils';
// Wiederverwendet aus der List-Card: löst den Raum einer Entity auf und fällt
// dabei auf den Raum ihres Geräts zurück — genau der Fall bei Pflanzen, deren
// plant.*-Entity selbst keinen Raum trägt.
import { FilterUtils } from '../utils/filter-utils';

// Geometrie einer "Blüte". CENTER + LEAF_R + LEAF_HALF muss <= CELL bleiben,
// sonst ragt das unterste Blatt samt Beschriftung aus seiner Zelle.
const CELL = 290;
const CENTER = CELL / 2;
const PLANT_R = 34;
const ICON_R = 58;
// Zwei Umlaufbahnen, weil ein Entitäts-Punkt und ein Geräte-Typ-Icon dasselbe
// Element sind: beide sitzen auf ICON_R. Nur Geräte haben zusätzlich noch ihre
// Kachel weiter außen. Läge der Entitäts-Punkt ebenfalls auf LEAF_R_DEVICE,
// stünde er sichtbar weiter von der Pflanze weg als das Icon eines Geräts —
// gleiche Symbole auf zwei verschiedenen Ringen.
const LEAF_R_DEVICE = 94;
const LEAF_R_ENTITY = ICON_R;

// Wie weit der Stiel vor dem Blatt endet.
const LEAF_HALF_DEVICE = 22;
const LEAF_HALF_ENTITY = 12;

// Ab dieser Entfernung (Zeiger <-> Blütenmitte, in px) rastet eine gezogene
// Quelle magnetisch an der Pflanze ein.
const SNAP_DISTANCE = 175;

// Listenansicht: eine Zeile je Sensortyp. Typen derselben Quelle rücken auf
// 2px zusammen, zwischen zwei Quellen liegt deutlich mehr Luft — dieselbe
// Sprache wie in der Blüte, wo die Zusammengehörigkeit ebenfalls allein über
// den Abstand entsteht und nicht über gezeichnete Verbindungen.
const LIST_STEP = 26;

export type SensorAssignmentView = 'flower' | 'list';

// Sammelschlüssel für Pflanzen ohne Raumzuordnung.
const NO_AREA = '__ohne__';

const TYPE_ICONS: Record<string, string> = Object.fromEntries(
    SENSOR_TYPES.map(t => [t.key, t.icon])
);

// Dieselben Bauform-Zeichnungen wie _renderDeviceGlyph(), nur als reines
// Markup — die Ghost-Kachel beim Ziehen hängt an <body> und wird ohne Lit
// zusammengebaut.
const GLYPH_ATTRS =
    'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="26" height="26"';

const DEVICE_GLYPH_MARKUP: Record<string, string> = {
    soil: `<svg ${GLYPH_ATTRS}>
        <rect x="8" y="2.2" width="8" height="9.6" rx="3" fill="currentColor" stroke="none"/>
        <path d="M10.4 11.8 9.7 20.4M13.6 11.8 14.3 20.4" stroke-width="1.7"/>
        <path d="M2.6 15.6h18.8" stroke-width="1.5" stroke-dasharray="3 2.4" opacity="0.6"/>
    </svg>`,
    climate: `<svg ${GLYPH_ATTRS}>
        <rect x="4.2" y="3.2" width="15.6" height="17.6" rx="3.2" stroke-width="1.7"/>
        <rect x="7" y="6.4" width="10" height="6.6" rx="1.5" fill="currentColor" stroke="none" opacity="0.85"/>
        <path d="M7.6 16.8h4.2M14.6 16.8h1.8" stroke-width="1.6"/>
    </svg>`,
    generic: `<svg ${GLYPH_ATTRS}>
        <rect x="3.6" y="9" width="16.8" height="11.4" rx="2.6" stroke-width="1.7"/>
        <circle cx="12" cy="14.7" r="2.1" fill="currentColor" stroke="none"/>
        <path d="M12 9V5.4" stroke-width="1.6"/>
        <circle cx="12" cy="4" r="1.5" fill="currentColor" stroke="none"/>
    </svg>`,
};

// Was gerade gezogen wird. Mehrere Einträge, weil sich Typ-Symbole über
// verschiedene Quellen hinweg auswählen und gemeinsam ziehen lassen.
// `fromPlantId` unterscheidet die beiden Richtungen: nicht gesetzt = freie
// Quellen aus der linken Spalte, gesetzt = ein hängendes Blatt, das umgehängt
// oder abgeworfen wird.
interface DragEntry {
    group: SensorDeviceGroup;
    typeKeys: string[];
}

interface DragPayload {
    entries: DragEntry[];
    fromPlantId?: string;
}

// Ein einzelner geplanter Zuweisungsschritt. `blocked` heißt: dieser Typ ist an
// der Zielpflanze schon belegt und wird übersprungen — es wird nichts
// überschrieben, der alte Sensor muss erst gelöst werden.
interface PlanItem {
    group: SensorDeviceGroup;
    typeKey: string;
    blocked: boolean;
}

interface LeafModel {
    key: string;
    group: SensorDeviceGroup;
    typeKeys: string[];
    angle: number;
    sector: number;
}

// Ein noch nicht belegter Sensortyp — sitzt als Umriss auf demselben Ring wie
// die belegten Typ-Icons und bewegt sich nicht, braucht deshalb keine Feder.
interface OpenSlot {
    typeKey: string;
    angle: number;
}

// Stiele und Typ-Icons sind entkoppelt: einen Stiel gibt es pro Typ immer,
// ein Icon darauf nur bei Geräten (bei Entitäten ist das Blatt selbst das
// Symbol). `iconEls` ist deshalb entweder leer oder genauso lang wie `pathEls`.
interface LeafNode {
    el: HTMLElement;
    angle: number;
    sector: number;
    half: number;
    radius: number;
    isEntity: boolean;
    nameEl: HTMLElement | null;
    nameHalfW: number;
    nameHalfH: number;
    spring: Spring2D;
    pathEls: SVGPathElement[];
    iconEls: HTMLElement[];
}

interface FlowerNode {
    plantId: string;
    // Äußeres Element (Blüte bzw. Listenzeile) — für den Treffertest der Zeile.
    el: HTMLElement;
    // Anker für Magnetismus und Vorschau: Blüten-Canvas bzw. Pflanzensymbol.
    canvas: HTMLElement;
    leaves: LeafNode[];
}

@customElement('sensor-assignment')
export class SensorAssignment extends LitElement {
    @property({ attribute: false }) hass?: HomeAssistant;
    // Aus der Karten-Konfiguration; der Knopf in der Werkzeugleiste überschreibt
    // sie nur für die laufende Sitzung.
    @property({ attribute: false }) defaultView: SensorAssignmentView = 'flower';
    @state() private _viewOverride?: SensorAssignmentView;
    // Sichtbare Wachstumsphasen. Standard ist alles außer "removed" — geerntete
    // Pflanzen bleiben drin, weil Trocknung und Fermentation weiterhin Sensoren
    // brauchen.
    @property({ attribute: false }) defaultPhases?: string[];
    @state() private _phaseOverride?: Set<string>;
    // Sichtbare Räume. Ohne eigene Auswahl gelten alle Räume, in denen
    // tatsächlich Pflanzen stehen — so tauchen später angelegte Räume von
    // selbst auf, statt ihre Pflanzen unsichtbar zu machen.
    @property({ attribute: false }) defaultAreas?: string[];
    @state() private _areaOverride?: Set<string>;

    @state() private _sensorDevices: SensorDeviceGroup[] = [];
    @state() private _plantDevices: PlantDeviceInfo[] = [];
    // Pro Pflanze: Typ -> { source, meterEntityId }
    @state() private _sensorInfo: Map<string, Record<string, { source?: string; meterEntityId?: string }>> = new Map();

    // Filter/Suche
    @state() private _sourceQuery = '';
    @state() private _plantQuery = '';
    @state() private _typeFilter: Set<string> = new Set();

    // Ausgewählte Typ-Symbole, Schlüssel `${groupId}::${typeKey}`.
    @state() private _selection: Set<string> = new Set();

    // Aus: belegte Sensortypen werden beim Ablegen übersprungen (Standard).
    // An: sie werden ersetzt. Bewusst ein Modus statt einer Rückfrage pro
    // Ablegevorgang — beim Umbauen mehrerer Pflanzen wäre das sonst zäh.
    @state() private _allowOverwrite = false;

    @state() private _dragGroupIds: Set<string> = new Set();
    @state() private _dragLeafKey?: string;
    @state() private _snapPlantId?: string;
    @state() private _dropOnSources = false;

    // Pro Pflanze: Typ -> interne Meter-Entity. Kommt aus plant/get_info und
    // ändert sich nur, wenn Pflanzen dazukommen oder verschwinden.
    private _meterEntities: Map<string, Record<string, string | undefined>> = new Map();
    private _phaseEntities: Map<string, string | undefined> = new Map();
    private _sensorInfoSignature = '';
    private _entityToGroupId: Map<string, string> = new Map();
    private _lastHassStatesKey = '';

    // --- Animation ---------------------------------------------------------
    private _flowerNodes: FlowerNode[] = [];
    private _springs: Map<string, Spring2D> = new Map();
    private _seedPositions: Map<string, { x: number; y: number }> = new Map();
    private _rafId?: number;
    private _lastTs = 0;
    private _visible = true;
    private _observer?: IntersectionObserver;
    private _reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    // --- Drag --------------------------------------------------------------
    private _pendingDrag?: { payload: DragPayload; x: number; y: number };
    private _drag?: DragPayload;
    private _ghost?: HTMLElement;
    private _ghostHalf = 28;
    private _dragLeafRadius = LEAF_R_DEVICE;
    private _ghostSpring?: Spring2D;
    private _pointer = { x: 0, y: 0 };
    private _snapCenter?: { x: number; y: number };
    private _overlay?: HTMLElement;
    private _overlayStems: { typeKey: string; isDevice: boolean; pathEl: SVGPathElement; iconEl: HTMLElement }[] = [];
    // Nach einem echten Zug feuert der Browser auf dem Startelement noch ein
    // click — ohne diese Sperre würde das die Typ-Auswahl mit umschalten.
    private _dragEndedAt = 0;

    // Stammdaten unter dem Namen. Wie in der Area-Card: beide an ergibt
    // "Strain - Breeder" in einer Zeile, nur eines davon ohne Trennstrich.
    @state() private _showStrain = false;
    @state() private _showBreeder = false;

    private _strainLine(plant: PlantDeviceInfo): string {
        const parts: string[] = [];
        if (this._showStrain && plant.strain) parts.push(plant.strain);
        if (this._showBreeder && plant.breeder) parts.push(plant.breeder);
        return parts.join(' - ');
    }

    private get _view(): SensorAssignmentView {
        return this._viewOverride ?? this.defaultView;
    }

    private get _phases(): Set<string> {
        if (this._phaseOverride) return this._phaseOverride;
        const konfiguriert = this.defaultPhases?.length ? this.defaultPhases : DEFAULT_PLANT_PHASES;
        return new Set(konfiguriert);
    }

    private _togglePhase(phase: string): void {
        const next = new Set(this._phases);
        if (next.has(phase)) next.delete(phase);
        else next.add(phase);
        this._phaseOverride = next;
    }

    // Räume, in denen überhaupt Pflanzen stehen — plus einen Sammelplatz für
    // Pflanzen ohne Raumzuordnung. Ein Filter über leere Räume wäre nutzlos.
    private _areaOptions(): { id: string; name: string }[] {
        const gefunden = new Map<string, string>();
        const areas = (this.hass as unknown as { areas?: Record<string, { name?: string }> })?.areas ?? {};
        for (const plant of this._plantDevices) {
            const id = this._areaOf(plant.entityId);
            if (gefunden.has(id)) continue;
            gefunden.set(id, id === NO_AREA ? 'Ohne Raum' : (areas[id]?.name ?? id));
        }
        return Array.from(gefunden, ([id, name]) => ({ id, name }))
            .sort((a, b) => (a.id === NO_AREA ? 1 : b.id === NO_AREA ? -1 : a.name.localeCompare(b.name)));
    }

    private _areaOf(plantEntityId: string): string {
        if (!this.hass) return NO_AREA;
        return FilterUtils.getAreaForEntity(this.hass, plantEntityId) ?? NO_AREA;
    }

    private get _areas(): Set<string> {
        if (this._areaOverride) return this._areaOverride;
        if (this.defaultAreas?.length) return new Set(this.defaultAreas);
        return new Set(this._areaOptions().map(a => a.id));
    }

    private _toggleArea(areaId: string): void {
        const next = new Set(this._areas);
        if (next.has(areaId)) next.delete(areaId);
        else next.add(areaId);
        this._areaOverride = next;
    }

    // -----------------------------------------------------------------------

    connectedCallback(): void {
        super.connectedCallback();
        this._observer = new IntersectionObserver(entries => {
            this._visible = entries.some(e => e.isIntersecting);
            if (this._visible) this._startAnimation();
        });
        this._observer.observe(this);
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        this._observer?.disconnect();
        this._observer = undefined;
        this._stopAnimation();
        this._endDrag();
    }

    // Die Schleife läuft nur, solange sich tatsächlich etwas bewegt, und hält
    // danach von selbst an (siehe _tick). Deshalb genügt es, sie bei jedem
    // Render und bei jedem Ziehen anzustoßen.
    private _startAnimation(): void {
        if (this._rafId !== undefined || !this._visible) return;
        this._lastTs = 0;
        this._rafId = requestAnimationFrame(this._tick);
    }

    private _stopAnimation(): void {
        if (this._rafId === undefined) return;
        cancelAnimationFrame(this._rafId);
        this._rafId = undefined;
    }

    protected willUpdate(): void {
        if (!this.hass) return;

        // Teurer Teil (Registry neu gruppieren) nur bei struktureller Änderung.
        const statesKey = Object.keys(this.hass.states).length + ':' + Object.keys(this.hass.entities ?? {}).length;
        if (statesKey !== this._lastHassStatesKey) {
            this._lastHassStatesKey = statesKey;

            const excludeDeviceIds = SensorAssignmentUtils.getPlantAndCycleDeviceIds(this.hass);
            this._sensorDevices = SensorAssignmentUtils.getSensorDevices(this.hass, excludeDeviceIds);
            this._plantDevices = SensorAssignmentUtils.getPlantDevices(this.hass);

            this._entityToGroupId = new Map();
            for (const group of this._sensorDevices) {
                for (const entityId of Object.values(group.types)) {
                    this._entityToGroupId.set(entityId, group.id);
                }
            }

            this._loadMeterEntities();
        }

        // Billiger Teil: die tatsächlichen Zuweisungen bei JEDEM Update neu aus
        // hass.states ableiten. Eine Zuweisung ändert weder die Zahl der
        // Entitäten noch die der Geräte — hinge das an der Änderungserkennung
        // oben, bliebe eine frisch abgelegte Quelle bis zum nächsten
        // Strukturwechsel unsichtbar.
        this._refreshSensorInfo();
    }

    protected updated(): void {
        this._rebuildFlowerNodes();
        this._startAnimation();
    }

    private _refreshSensorInfo(): void {
        if (!this.hass) return;
        const next = SensorAssignmentUtils.resolveSources(this.hass, this._meterEntities);
        const signature = JSON.stringify(Array.from(next, ([plant, info]) => [
            plant,
            SENSOR_TYPES.map(t => info[t.key]?.source ?? ''),
        ]));
        if (signature === this._sensorInfoSignature) return;
        this._sensorInfoSignature = signature;
        this._sensorInfo = next;
    }

    private async _loadMeterEntities(): Promise<void> {
        if (!this.hass) return;
        const hass = this.hass;
        const results = await Promise.all(
            this._plantDevices.map(async plant => {
                const info = await SensorAssignmentUtils.getPlantMeterEntities(hass, plant.entityId);
                return [plant.entityId, info] as const;
            })
        );
        this._meterEntities = new Map(results.map(([id, info]) => [id, info.meters]));
        this._phaseEntities = new Map(results.map(([id, info]) => [id, info.growthPhaseEntity]));
        this._refreshSensorInfo();
        this.requestUpdate();
    }

    // --- Modell ------------------------------------------------------------

    // Belegte Quellen UND offene Sensortypen teilen sich denselben Ring: jede
    // Quelle bekommt einen Sektor, jeder noch freie Typ einen eigenen Platz
    // dahinter. Dadurch steht eine Pflanze ohne jede Zuweisung nicht nackt da,
    // sondern zeigt alle sieben Typen als Umriss — und die Sektoren der Blätter
    // werden automatisch enger, je weniger frei ist.
    private _flowerLayout(plant: PlantDeviceInfo): { leaves: LeafModel[]; open: OpenSlot[] } {
        const info = this._sensorInfo.get(plant.entityId) ?? {};
        const byGroup = new Map<string, string[]>();

        for (const type of SENSOR_TYPES) {
            const source = info[type.key]?.source;
            if (!source) continue;
            const groupId = this._entityToGroupId.get(source);
            if (!groupId) continue;
            const list = byGroup.get(groupId);
            if (list) list.push(type.key);
            else byGroup.set(groupId, [type.key]);
        }

        const entries = Array.from(byGroup.entries()).filter(
            ([groupId]) => !!this._sensorDevices.find(g => g.id === groupId)
        );
        const openTypes = SENSOR_TYPES.filter(t => !info[t.key]?.source);

        const slots = entries.length + openTypes.length;
        const sector = slots > 0 ? (Math.PI * 2) / slots : Math.PI * 2;

        return {
            leaves: entries.map(([groupId, typeKeys], index) => ({
                key: groupId,
                group: this._sensorDevices.find(g => g.id === groupId)!,
                typeKeys,
                angle: -Math.PI / 2 + index * sector,
                sector,
            })),
            open: openTypes.map((type, index) => ({
                typeKey: type.key,
                angle: -Math.PI / 2 + (entries.length + index) * sector,
            })),
        };
    }

    private _leavesFor(plant: PlantDeviceInfo): LeafModel[] {
        return this._flowerLayout(plant).leaves;
    }

    private _assignedGroupIds(): Set<string> {
        const ids = new Set<string>();
        for (const plant of this._plantDevices) {
            for (const leaf of this._leavesFor(plant)) ids.add(leaf.key);
        }
        return ids;
    }

    private _typeLabel(typeKey: string): string {
        return this.hass ? TranslationUtils.translateSensor(this.hass, typeKey) : typeKey;
    }


    // --- Suche / Filter -----------------------------------------------------

    private _filteredSources(): SensorDeviceGroup[] {
        const query = this._sourceQuery.trim().toLowerCase();
        return this._sensorDevices.filter(group => {
            const typeKeys = Object.keys(group.types);
            if (this._typeFilter.size > 0 && !typeKeys.some(t => this._typeFilter.has(t))) return false;
            if (!query) return true;
            // Nur der Name. Die entity_ids mitzudurchsuchen machte die Suche
            // unbrauchbar: "sensor" steht in jeder von ihnen, "temperatur" in
            // jedem Gerät, das zufaellig einen Temperaturfuehler mitbringt.
            return group.name.toLowerCase().includes(query);
        });
    }

    private _phaseOf(plantEntityId: string): string | undefined {
        const phaseEntity = this._phaseEntities.get(plantEntityId);
        return phaseEntity ? this.hass?.states[phaseEntity]?.state : undefined;
    }

    private _filteredPlants(): PlantDeviceInfo[] {
        const query = this._plantQuery.trim().toLowerCase();
        const phasen = this._phases;
        const raeume = this._areas;
        return this._plantDevices.filter(p => {
            const phase = this._phaseOf(p.entityId);
            // Pflanzen ohne erkennbare Phase bleiben sichtbar — lieber einen
            // Eintrag zu viel als eine Pflanze, die unauffindbar ist.
            if (phase && !phasen.has(phase)) return false;
            if (!raeume.has(this._areaOf(p.entityId))) return false;
            if (!query) return true;
            return p.name.toLowerCase().includes(query);
        });
    }

    private _toggleTypeFilter(typeKey: string): void {
        const next = new Set(this._typeFilter);
        if (next.has(typeKey)) next.delete(typeKey);
        else next.add(typeKey);
        this._typeFilter = next;
    }

    // --- Auswahl ------------------------------------------------------------

    private _selectionKey(groupId: string, typeKey: string): string {
        return `${groupId}::${typeKey}`;
    }

    private _toggleSelection(groupId: string, typeKey: string): void {
        // Nach einem echten Zug kommt noch ein click hinterher — der darf die
        // Auswahl nicht umschalten.
        if (Date.now() - this._dragEndedAt < 300) return;

        const group = this._sensorDevices.find(g => g.id === groupId);
        const typeKeys = group ? Object.keys(group.types) : [typeKey];
        const next = new Set(this._selection);
        const hatEigene = typeKeys.some(t => next.has(this._selectionKey(groupId, t)));

        // Steht die Auswahl dieser Quelle bisher nur implizit über den
        // Typ-Filter fest, wird sie beim ersten Klick festgeschrieben. Sonst
        // würde das Ergänzen eines weiteren Typs die gefilterten verdrängen.
        if (!hatEigene && this._typeFilter.size > 0) {
            for (const t of typeKeys) {
                if (this._typeFilter.has(t)) next.add(this._selectionKey(groupId, t));
            }
        }

        const key = this._selectionKey(groupId, typeKey);
        if (next.has(key)) next.delete(key);
        else next.add(key);
        this._selection = next;
    }

    // Welche Typen einer Quelle beim Ziehen tatsächlich mitgehen — und damit
    // auch, welche Chips gefüllt statt nur umrissen dargestellt werden.
    // Reihenfolge: eigene Klick-Auswahl schlägt Typ-Filter schlägt "alles".
    private _activeTypes(group: SensorDeviceGroup): string[] {
        const typeKeys = Object.keys(group.types);
        const eigene = typeKeys.filter(t => this._selection.has(this._selectionKey(group.id, t)));
        if (eigene.length > 0) return eigene;
        if (this._typeFilter.size > 0) {
            const gefiltert = typeKeys.filter(t => this._typeFilter.has(t));
            if (gefiltert.length > 0) return gefiltert;
        }
        return typeKeys;
    }

    // Ist die Auswahl dieser Quelle überhaupt eingeschränkt? Nur dann werden
    // die aktiven Chips zusätzlich hervorgehoben — ohne Filter und ohne Klick
    // wären sonst schlicht alle Chips vergrößert.
    private _isNarrowed(group: SensorDeviceGroup): boolean {
        if (this._typeFilter.size > 0) return true;
        return Object.keys(group.types).some(t => this._selection.has(this._selectionKey(group.id, t)));
    }

    // Die Auswahl als Zieh-Einträge, in der Reihenfolge der Quellenliste.
    private _selectionEntries(): DragEntry[] {
        const entries: DragEntry[] = [];
        for (const group of this._sensorDevices) {
            const typeKeys = Object.keys(group.types).filter(t =>
                this._selection.has(this._selectionKey(group.id, t))
            );
            if (typeKeys.length > 0) entries.push({ group, typeKeys });
        }
        return entries;
    }

    // --- Animationsschleife -------------------------------------------------

    private _rebuildFlowerNodes(): void {
        const root = this.shadowRoot;
        if (!root) return;

        const nodes: FlowerNode[] = [];
        const alive = new Set<string>();

        // In der Listenansicht gibt es keine Blätter zu animieren, aber dieselbe
        // Registrierung wird fürs Einrasten gebraucht: Ziel ist die Zeile, der
        // Anker für Vorschau und Magnetismus das Pflanzensymbol darin.
        for (const flowerEl of Array.from(root.querySelectorAll<HTMLElement>('.sa-flower, .sa-row'))) {
            const plantId = flowerEl.dataset.plant!;
            const canvas = flowerEl.querySelector<HTMLElement>('.sa-flower-canvas, .sa-core');
            if (!canvas) continue;

            const leaves: LeafNode[] = [];
            for (const leafEl of Array.from(canvas.querySelectorAll<HTMLElement>('.sa-leaf'))) {
                const key = leafEl.dataset.leaf!;
                const springKey = `${plantId}|${key}`;
                alive.add(springKey);

                let spring = this._springs.get(springKey);
                if (!spring) {
                    const seed = this._seedPositions.get(springKey);
                    spring = createSpring(seed?.x ?? 0, seed?.y ?? 0);
                    this._springs.set(springKey, spring);
                    this._seedPositions.delete(springKey);
                }

                const owner = CSS.escape(key);
                const nameEl = leafEl.querySelector<HTMLElement>('.sa-leaf-name');
                leaves.push({
                    el: leafEl,
                    angle: Number(leafEl.dataset.angle),
                    sector: Number(leafEl.dataset.sector),
                    half: Number(leafEl.dataset.half),
                    radius: Number(leafEl.dataset.radius),
                    isEntity: leafEl.classList.contains('sa-leaf-entity'),
                    nameEl: nameEl,
                    // Einmal pro Render messen — offsetWidth in der rAF-Schleife
                    // würde jeden Frame ein Layout erzwingen.
                    nameHalfW: nameEl ? nameEl.offsetWidth / 2 : 0,
                    nameHalfH: nameEl ? nameEl.offsetHeight / 2 : 0,
                    spring,
                    pathEls: Array.from(canvas.querySelectorAll<SVGPathElement>(`path[data-owner="${owner}"]`)),
                    iconEls: Array.from(canvas.querySelectorAll<HTMLElement>(`.sa-type[data-owner="${owner}"]`)),
                });
            }

            nodes.push({ plantId, el: flowerEl, canvas, leaves });
        }

        for (const key of Array.from(this._springs.keys())) {
            if (!alive.has(key)) this._springs.delete(key);
        }

        this._flowerNodes = nodes;
    }

    // Die Beschriftung eines Entitaets-Blattes wird radial nach aussen
    // geschoben: der Punkt selbst sitzt auf dem inneren Ring, dort wuerde der
    // Text sonst quer ueber Pflanzenbild und Namenspille laufen. Beide Sorten
    // werden zusaetzlich in der Zelle gehalten, damit ein waagerechtes Blatt
    // seinen Text nicht in die Nachbarbluete schiebt.
    private _placeLeafName(leaf: LeafNode, lx: number, ly: number): void {
        const nameEl = leaf.nameEl;
        if (!nameEl) return;

        const klemmen = (wert: number, grenze: number) => Math.max(-grenze, Math.min(grenze, wert));
        const grenzeX = CENTER - leaf.nameHalfW - 2;
        const grenzeY = CENTER - leaf.nameHalfH - 2;

        if (!leaf.isEntity) {
            // Geräte-Kacheln behalten ihre Beschriftung darüber bzw. darunter,
            // sie wird nur waagerecht in der Zelle gehalten.
            const dx = klemmen(lx, grenzeX) - lx;
            nameEl.style.transform = `translate(${dx.toFixed(1)}px, 0)`;
            return;
        }

        // Der Abstand hängt von der Richtung ab: seitlich muss die halbe
        // Textbreite frei bleiben, oben/unten nur die halbe Texthöhe. Ein fester
        // Wert ließe die Beschriftung waagerecht ins eigene Icon ragen.
        const laenge = Math.hypot(lx, ly) || 1;
        const ux = lx / laenge;
        const uy = ly / laenge;
        const abstand =
            LEAF_HALF_ENTITY + Math.abs(ux) * leaf.nameHalfW + Math.abs(uy) * leaf.nameHalfH + 5;

        const dx = klemmen(lx + ux * abstand, grenzeX) - lx;
        const dy = klemmen(ly + uy * abstand, grenzeY) - ly;
        // translateY(-50%) zentriert den Text unabhängig von der Zeilenzahl auf
        // seiner Zielhöhe — ein fester margin-top stimmt immer nur für eine davon.
        nameEl.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px) translateY(-50%)`;
    }

    private _tick = (now: number): void => {
        const dt = this._lastTs ? (now - this._lastTs) / 1000 : 1 / 60;
        this._lastTs = now;

        let moving = false;

        for (const flower of this._flowerNodes) {
            for (const leaf of flower.leaves) {
                const targetX = Math.cos(leaf.angle) * leaf.radius;
                const targetY = Math.sin(leaf.angle) * leaf.radius;

                if (this._reducedMotion) settleSpring(leaf.spring, targetX, targetY);
                else if (!isSettled(leaf.spring, targetX, targetY)) {
                    stepSpring(leaf.spring, targetX, targetY, dt);
                    moving = true;
                } else {
                    settleSpring(leaf.spring, targetX, targetY);
                }

                const lx = leaf.spring.x;
                const ly = leaf.spring.y;
                leaf.el.style.transform = `translate(${lx.toFixed(1)}px, ${ly.toFixed(1)}px)`;
                if (ly < -12) leaf.el.classList.add('sa-leaf-above');
                else if (ly > 12) leaf.el.classList.remove('sa-leaf-above');

                this._placeLeafName(leaf, lx, ly);

                const angles = SensorAssignmentUtils.fanAngles(
                    Math.atan2(ly, lx),
                    leaf.pathEls.length,
                    leaf.sector
                );
                leaf.pathEls.forEach((pathEl, index) => {
                    const stem = SensorAssignmentUtils.buildStem(
                        CENTER, CENTER, CENTER + lx, CENTER + ly,
                        angles[index], PLANT_R, ICON_R, leaf.half
                    );
                    pathEl.setAttribute('d', stem.path);
                    const iconEl = leaf.iconEls[index];
                    if (iconEl) {
                        iconEl.style.transform =
                            `translate(${(stem.iconX - CENTER).toFixed(1)}px, ${(stem.iconY - CENTER).toFixed(1)}px)`;
                    }
                });
            }
        }

        if (this._ghostSpring) {
            this._tickDrag(dt);
            moving = true;
        }

        this._rafId = moving ? requestAnimationFrame(this._tick) : undefined;
    };

    // --- Zuweisungsplan -----------------------------------------------------

    // Belegte Typen werden NICHT überschrieben, sondern übersprungen. Innerhalb
    // eines Zuges gilt dasselbe untereinander: bringen zwei ausgewählte Quellen
    // denselben Typ mit, gewinnt die erste, die zweite ist blockiert.
    private _planAssignment(payload: DragPayload, plantEntityId: string): PlanItem[] {
        const info = this._sensorInfo.get(plantEntityId) ?? {};
        const taken = new Set<string>();
        const plan: PlanItem[] = [];

        for (const entry of payload.entries) {
            for (const typeKey of entry.typeKeys) {
                const belegt = !this._allowOverwrite && !!info[typeKey]?.source;
                const blocked = belegt || taken.has(typeKey);
                if (!blocked) taken.add(typeKey);
                plan.push({ group: entry.group, typeKey, blocked });
            }
        }
        return plan;
    }

    private _flatTypes(payload: DragPayload): { group: SensorDeviceGroup; typeKey: string }[] {
        return payload.entries.flatMap(e => e.typeKeys.map(typeKey => ({ group: e.group, typeKey })));
    }

    // --- Drag & Drop --------------------------------------------------------

    private _onDragStart(e: PointerEvent, payload: DragPayload): void {
        if (e.button !== undefined && e.button !== 0) return;
        this._pendingDrag = { payload, x: e.clientX, y: e.clientY };
        window.addEventListener('pointermove', this._onPendingMove);
        window.addEventListener('pointerup', this._onPendingCancel);
        window.addEventListener('pointercancel', this._onPendingCancel);
    }

    // Zieht man an einer Quelle, deren Typ-Symbole (mit) ausgewählt sind, kommt
    // die GANZE Auswahl mit — auch über andere Quellen hinweg. Ohne Auswahl
    // wandert wie bisher die komplette Quelle.
    private _payloadForSource(group: SensorDeviceGroup): DragPayload {
        const typeKeys = Object.keys(group.types);
        const hasSelection = typeKeys.some(t => this._selection.has(this._selectionKey(group.id, t)));
        if (hasSelection) {
            const entries = this._selectionEntries();
            if (entries.length > 0) return { entries };
        }
        // Ohne eigene Klick-Auswahl bestimmt der Typ-Filter, was mitgeht: wer
        // nach Temperatur filtert, will beim Ziehen eines Geräts auch nur
        // dessen Temperatur zugewiesen bekommen, nicht gleich alle Messwerte.
        return { entries: [{ group, typeKeys: this._activeTypes(group) }] };
    }

    private _onPendingMove = (e: PointerEvent): void => {
        const pending = this._pendingDrag;
        if (!pending) return;
        if (Math.hypot(e.clientX - pending.x, e.clientY - pending.y) < 6) return;
        this._clearPendingDrag();
        this._beginDrag(pending.payload, e);
    };

    private _onPendingCancel = (): void => {
        this._clearPendingDrag();
    };

    private _clearPendingDrag(): void {
        this._pendingDrag = undefined;
        window.removeEventListener('pointermove', this._onPendingMove);
        window.removeEventListener('pointerup', this._onPendingCancel);
        window.removeEventListener('pointercancel', this._onPendingCancel);
    }

    private _beginDrag(payload: DragPayload, e: PointerEvent): void {
        this._drag = payload;
        this._dragLeafRadius = payload.entries[0].group.isDevice ? LEAF_R_DEVICE : LEAF_R_ENTITY;
        this._dragGroupIds = payload.fromPlantId
            ? new Set()
            : new Set(payload.entries.map(en => en.group.id));
        this._dragLeafKey = payload.fromPlantId
            ? `${payload.fromPlantId}|${payload.entries[0].group.id}`
            : undefined;
        this._pointer = { x: e.clientX, y: e.clientY };
        this._ghostSpring = createSpring(e.clientX, e.clientY);
        this._createGhost(payload);
        this._createOverlay(payload);
        this._updateSnapTarget();
        this._startAnimation();

        window.addEventListener('pointermove', this._onPointerMove);
        window.addEventListener('pointerup', this._onPointerUp);
        window.addEventListener('pointercancel', this._onPointerCancel);
    }

    private _createGhost(payload: DragPayload): void {
        const group = payload.entries[0].group;
        const total = this._flatTypes(payload).length;
        const ghost = document.createElement('div');
        const isDevice = group.isDevice;
        const firstType = payload.entries[0].typeKeys[0];
        // Die Ghost-Kachel bildet nach, was am Ziel entsteht: großes Kästchen
        // für ein Gerät, kleiner Punkt für eine einzelne Entität.
        this._ghostHalf = isDevice ? 28 : 17;
        const size = this._ghostHalf * 2;
        ghost.style.cssText = `
            position: fixed; left: 0; top: 0; width: ${size}px; height: ${size}px;
            border-radius: ${isDevice ? '14px' : '50%'};
            pointer-events: none; z-index: 10000;
            border: 2px solid ${isDevice ? 'var(--primary-color, #03a9f4)' : (SENSOR_TYPE_COLORS[firstType] ?? '#03a9f4')};
            background-color: var(--card-background-color, #fff);
            background-size: cover; background-position: center;
            box-shadow: 0 4px 14px rgba(0,0,0,0.35);
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            font-size: 13px; font-weight: 500; color: var(--primary-text-color, #212121);
        `;
        if (isDevice) {
            if (group.picture) {
                ghost.style.backgroundImage = `url(${group.picture})`;
            } else {
                // Im Overlay an <body> steht kein Lit-Rendering zur Verfügung —
                // dieselbe Bauform-Zeichnung deshalb als Markup.
                ghost.innerHTML = DEVICE_GLYPH_MARKUP[this._deviceGlyph(group)];
                ghost.style.color = 'var(--secondary-text-color, #727272)';
            }
        } else {
            const color = SENSOR_TYPE_COLORS[firstType] ?? 'var(--primary-color)';
            ghost.style.background = color;
            const icon = document.createElement('ha-icon');
            icon.setAttribute('icon', TYPE_ICONS[firstType]);
            icon.style.cssText = '--mdc-icon-size: 18px; color: #fff;';
            ghost.appendChild(icon);
        }

        // Bei einer Mehrfachauswahl zeigt ein Zähler, wie viele Sensoren
        // tatsächlich mitfliegen — die Ghost-Kachel selbst kann nur eine sein.
        if (total > 1) {
            const badge = document.createElement('div');
            badge.textContent = String(total);
            badge.style.cssText = `
                position: absolute; top: -6px; right: -6px;
                min-width: 20px; height: 20px; padding: 0 5px;
                border-radius: 10px; box-sizing: border-box;
                background: var(--primary-color, #03a9f4); color: #fff;
                font-size: 11px; font-weight: 600; line-height: 20px; text-align: center;
                box-shadow: 0 1px 4px rgba(0,0,0,0.35);
            `;
            ghost.style.position = 'fixed';
            ghost.appendChild(badge);
        }

        ghost.style.transform = `translate(${this._pointer.x - this._ghostHalf}px, ${this._pointer.y - this._ghostHalf}px)`;
        document.body.appendChild(ghost);
        this._ghost = ghost;
    }

    // Vorschau der Verbindung während des Ziehens. Liegt bewusst an <body> und
    // nicht im Shadow-Root: der Zeiger wandert über Container-Grenzen mit
    // eigenem overflow hinweg.
    private _createOverlay(payload: DragPayload): void {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed; inset: 0; pointer-events: none; z-index: 9999;
            opacity: 0; transition: opacity 0.12s ease;
        `;

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.style.cssText = 'position:absolute; inset:0; overflow:visible;';
        overlay.appendChild(svg);

        this._overlayStems = this._flatTypes(payload).map(({ group: entryGroup, typeKey }) => {
            const color = SENSOR_TYPE_COLORS[typeKey] ?? 'var(--primary-color)';
            const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            pathEl.setAttribute('fill', 'none');
            pathEl.setAttribute('stroke', color);
            pathEl.setAttribute('stroke-width', '2.5');
            pathEl.setAttribute('stroke-linecap', 'round');
            pathEl.setAttribute('opacity', '0.85');
            svg.appendChild(pathEl);

            const iconEl = document.createElement('div');
            iconEl.style.cssText = `
                position: absolute; left: 0; top: 0; width: 24px; height: 24px;
                margin: -12px 0 0 -12px; border-radius: 50%;
                background: ${color}; border: 2px solid ${color};
                display: flex; align-items: center; justify-content: center;
                box-shadow: 0 2px 6px rgba(0,0,0,0.3);
            `;
            const icon = document.createElement('ha-icon');
            icon.setAttribute('icon', TYPE_ICONS[typeKey]);
            icon.style.cssText = '--mdc-icon-size: 13px; color: #fff;';
            iconEl.appendChild(icon);
            overlay.appendChild(iconEl);

            return { typeKey, isDevice: entryGroup.isDevice, pathEl, iconEl };
        });

        document.body.appendChild(overlay);
        this._overlay = overlay;
    }

    // Blockierte Typen sofort sichtbar machen, statt sie beim Ablegen
    // stillschweigend zu verschlucken: grauer, gestrichelter Stiel und ein
    // durchgestrichenes Schloss-Icon.
    private _applyOverlayBlocking(plantEntityId?: string): void {
        if (!this._drag || this._overlayStems.length === 0) return;
        // Ohne Ziel bleibt die zuletzt gezeigte Darstellung stehen. Würde hier
        // auf "nicht blockiert" zurückgesetzt, sähe man beim Verlassen des
        // Einrastbereichs die Schlösser noch kurz in die vollen Icons
        // zurückspringen — das Overlay blendet über 0,12s aus und zeigt den
        // Wechsel dabei mit an.
        if (!plantEntityId) return;
        const plan = this._planAssignment(this._drag, plantEntityId);

        this._overlayStems.forEach((stem, index) => {
            const blocked = plan[index]?.blocked ?? false;
            const color = SENSOR_TYPE_COLORS[stem.typeKey] ?? 'var(--primary-color)';
            stem.pathEl.setAttribute('stroke', blocked ? 'var(--disabled-text-color, #9e9e9e)' : color);
            stem.pathEl.setAttribute('stroke-dasharray', blocked ? '4 4' : '');
            stem.pathEl.setAttribute('opacity', blocked ? '0.45' : '0.85');
            stem.iconEl.style.background = blocked ? 'var(--disabled-text-color, #9e9e9e)' : color;
            stem.iconEl.style.borderColor = blocked ? 'var(--disabled-text-color, #9e9e9e)' : color;
            stem.iconEl.style.opacity = blocked ? '0.55' : '1';
            const icon = stem.iconEl.querySelector('ha-icon');
            icon?.setAttribute('icon', blocked ? 'mdi:lock' : TYPE_ICONS[stem.typeKey]);
            // Bei einer Entität ist die gezogene Kachel selbst schon das
            // farbige Symbol — ein zweites auf dem Stiel waere dasselbe Icon
            // doppelt. Nur das Schloss wird auch dort gezeigt.
            stem.iconEl.style.display = stem.isDevice || blocked ? 'flex' : 'none';
        });
    }

    private _onPointerMove = (e: PointerEvent): void => {
        this._pointer = { x: e.clientX, y: e.clientY };
        this._updateSnapTarget();
        this._startAnimation();
    };

    private _updateSnapTarget(): void {
        // Der Zeiger über der Quellenspalte unterdrückt das Einrasten immer,
        // nicht nur beim Ziehen eines Blattes. Auf schmalen Bildschirmen liegt
        // die Spalte OBEN und der Garten darunter — eine Pflanze direkt
        // unterhalb der Kante wäre sonst nah genug, um einzurasten, während
        // der Finger noch mitten in der Liste steht.
        const overSources = this._isOverSourcesColumn();
        const dropOnSources = overSources && !!this._drag?.fromPlantId;
        if (dropOnSources !== this._dropOnSources) this._dropOnSources = dropOnSources;

        if (overSources) {
            this._snapCenter = undefined;
            if (this._snapPlantId !== undefined) this._snapPlantId = undefined;
            if (this._overlay) this._overlay.style.opacity = '0';
            return;
        }

        // Nur sichtbare Blüten sind Ziele. getBoundingClientRect() liefert auch
        // für längst weggescrollte Blüten eine Position — ohne diese Prüfung
        // rastet eine Pflanze ein, die gar nicht mehr im Sichtfenster des
        // Gartens steht, sondern hinter der Quellenspalte liegt.
        const sicht = this.shadowRoot
            ?.querySelector<HTMLElement>('.sa-column-garden .sa-scroll')
            ?.getBoundingClientRect();

        const alsListe = this._view === 'list';
        let best: { id: string; x: number; y: number; d: number } | undefined;
        for (const flower of this._flowerNodes) {
            // Die Herkunftspflanze ist kein gültiges Ziel für ihr eigenes Blatt.
            if (flower.plantId === this._drag?.fromPlantId) continue;
            const rect = flower.canvas.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            if (sicht && (cy < sicht.top || cy > sicht.bottom || cx < sicht.left || cx > sicht.right)) {
                continue;
            }
            const d = Math.hypot(this._pointer.x - cx, this._pointer.y - cy);

            if (alsListe) {
                // Zeilen liegen dicht untereinander — ein Radius würde in die
                // Nachbarzeile greifen. Hier zählt, über welcher Zeile der
                // Zeiger steht.
                const zeile = flower.el.getBoundingClientRect();
                const drin =
                    this._pointer.x >= zeile.left && this._pointer.x <= zeile.right &&
                    this._pointer.y >= zeile.top && this._pointer.y <= zeile.bottom;
                if (drin) best = { id: flower.plantId, x: cx, y: cy, d };
            } else if (d <= SNAP_DISTANCE && (!best || d < best.d)) {
                best = { id: flower.plantId, x: cx, y: cy, d };
            }
        }

        this._snapCenter = best ? { x: best.x, y: best.y } : undefined;
        if (best?.id !== this._snapPlantId) this._snapPlantId = best?.id;
        if (this._overlay) this._overlay.style.opacity = best ? '1' : '0';
        this._applyOverlayBlocking(best?.id);
    }

    private _isOverSourcesColumn(): boolean {
        const column = this.shadowRoot?.querySelector<HTMLElement>('.sa-column-sources');
        if (!column) return false;
        const r = column.getBoundingClientRect();
        return (
            this._pointer.x >= r.left && this._pointer.x <= r.right &&
            this._pointer.y >= r.top && this._pointer.y <= r.bottom
        );
    }

    private _tickDrag(dt: number): void {
        if (!this._ghostSpring || !this._ghost) return;

        let targetX = this._pointer.x;
        let targetY = this._pointer.y;

        const snap = this._snapCenter;
        if (snap) {
            // Magnetismus: das Ziel wird Richtung Blatt-Umlaufbahn gezogen. Der
            // Zeiger führt weiterhin, aber die Kachel "will" auf den Kreis.
            const dx = this._pointer.x - snap.x;
            const dy = this._pointer.y - snap.y;
            const d = Math.hypot(dx, dy) || 1;
            const pulled = d + (this._dragLeafRadius - d) * 0.6;
            targetX = snap.x + (dx / d) * pulled;
            targetY = snap.y + (dy / d) * pulled;
        }

        stepSpring(this._ghostSpring, targetX, targetY, dt, 260, 24);
        const gx = this._ghostSpring.x;
        const gy = this._ghostSpring.y;
        this._ghost.style.transform = `translate(${(gx - this._ghostHalf).toFixed(1)}px, ${(gy - this._ghostHalf).toFixed(1)}px)`;

        if (!snap || this._overlayStems.length === 0) return;

        const angles = SensorAssignmentUtils.fanAngles(
            Math.atan2(gy - snap.y, gx - snap.x),
            this._overlayStems.length,
            1.4
        );
        this._overlayStems.forEach((stemSpec, index) => {
            const stem = SensorAssignmentUtils.buildStem(
                snap.x, snap.y, gx, gy, angles[index], PLANT_R, ICON_R, this._ghostHalf
            );
            stemSpec.pathEl.setAttribute('d', stem.path);
            stemSpec.iconEl.style.transform = `translate(${stem.iconX.toFixed(1)}px, ${stem.iconY.toFixed(1)}px)`;
        });
    }

    private _onPointerUp = (): void => {
        const drag = this._drag;
        const targetPlantId = this._snapPlantId;
        const snap = this._snapCenter;
        const dropOnSources = this._dropOnSources;
        const ghostPos = this._ghostSpring ? { x: this._ghostSpring.x, y: this._ghostSpring.y } : undefined;

        this._endDrag();
        if (!drag) return;

        if (targetPlantId) {
            if (snap && ghostPos) {
                for (const entry of drag.entries) {
                    this._seedPositions.set(`${targetPlantId}|${entry.group.id}`, {
                        x: ghostPos.x - snap.x,
                        y: ghostPos.y - snap.y,
                    });
                }
            }
            this._assign(drag, targetPlantId);
        } else if (dropOnSources && drag.fromPlantId) {
            this._unassignTypes(drag.fromPlantId, this._flatTypes(drag).map(t => t.typeKey));
        }
    };

    private _onPointerCancel = (): void => {
        this._endDrag();
    };

    private _endDrag(): void {
        this._clearPendingDrag();
        window.removeEventListener('pointermove', this._onPointerMove);
        window.removeEventListener('pointerup', this._onPointerUp);
        window.removeEventListener('pointercancel', this._onPointerCancel);

        if (this._drag) this._dragEndedAt = Date.now();

        this._ghost?.remove();
        this._ghost = undefined;
        this._overlay?.remove();
        this._overlay = undefined;
        this._overlayStems = [];
        this._ghostSpring = undefined;
        this._drag = undefined;
        this._dragGroupIds = new Set();
        this._dragLeafKey = undefined;
        this._snapPlantId = undefined;
        this._snapCenter = undefined;
        this._dropOnSources = false;
    }

    // --- Zuweisen / Entfernen ----------------------------------------------

    private async _assign(drag: DragPayload, plantEntityId: string): Promise<void> {
        if (!this.hass) return;
        const meters = this._meterEntities.get(plantEntityId) ?? {};
        const plan = this._planAssignment(drag, plantEntityId);
        const done: string[] = [];

        for (const item of plan) {
            if (item.blocked) continue;
            const meterEntityId = meters[item.typeKey];
            const sourceEntityId = item.group.types[item.typeKey];
            if (!meterEntityId || !sourceEntityId) continue;
            await this.hass.callService('plant', 'replace_sensor', {
                meter_entity: meterEntityId,
                new_sensor: sourceEntityId,
            });
            done.push(item.typeKey);
        }

        // Umhängen statt Kopieren — aber nur das, was auch wirklich angekommen
        // ist. Wurde ein Typ am Ziel blockiert, bleibt er an der Herkunft.
        if (drag.fromPlantId && drag.fromPlantId !== plantEntityId && done.length > 0) {
            await this._unassignTypes(drag.fromPlantId, done);
        }

        // Auswahl nur aufheben, wenn auch wirklich etwas angekommen ist. War
        // alles blockiert, bleibt sie stehen — sonst müsste man sie nach einem
        // folgenlosen Ablegen neu zusammenklicken.
        if (!drag.fromPlantId && done.length > 0 && this._selection.size > 0) {
            this._selection = new Set();
        }
        this._refreshSensorInfo();
    }

    private async _unassignTypes(plantEntityId: string, typeKeys: string[]): Promise<void> {
        if (!this.hass) return;
        const meters = this._meterEntities.get(plantEntityId) ?? {};
        for (const typeKey of typeKeys) {
            const meterEntityId = meters[typeKey];
            if (!meterEntityId) continue;
            await this.hass.callService('plant', 'replace_sensor', { meter_entity: meterEntityId });
        }
        this._refreshSensorInfo();
    }

    // --- Rendering: Werkzeugleisten ----------------------------------------

    private _renderSearch(
        value: string,
        placeholder: string,
        onInput: (v: string) => void
    ): HTMLTemplateResult {
        return html`
            <div class="sa-search">
                <ha-icon icon="mdi:magnify"></ha-icon>
                <input
                    type="search"
                    .value="${value}"
                    placeholder="${placeholder}"
                    @input="${(e: Event) => onInput((e.target as HTMLInputElement).value)}"
                />
                ${value
                    ? html`
                        <button class="sa-icon-button" title="Suche leeren" @click="${() => onInput('')}">
                            <ha-icon icon="mdi:close"></ha-icon>
                        </button>
                    `
                    : ''}
            </div>
        `;
    }

    private _renderTypeFilter(): HTMLTemplateResult {
        return html`
            <div class="sa-type-filter">
                ${SENSOR_TYPES.map(type => {
                    const active = this._typeFilter.has(type.key);
                    return html`
                        <button
                            class="sa-filter-chip ${active ? 'sa-filter-on' : ''}"
                            style="--sa-filter-color: ${SENSOR_TYPE_COLORS[type.key]}"
                            title="${this._typeLabel(type.key)}"
                            @click="${() => this._toggleTypeFilter(type.key)}"
                        >
                            <ha-icon icon="${type.icon}"></ha-icon>
                        </button>
                    `;
                })}
                <button
                    class="sa-icon-button sa-filter-reset"
                    title="Typ-Filter zurücksetzen"
                    ?disabled="${this._typeFilter.size === 0}"
                    @click="${() => { this._typeFilter = new Set(); }}"
                >
                    <ha-icon icon="mdi:filter-remove-outline"></ha-icon>
                </button>
                <button
                    class="sa-icon-button sa-overwrite ${this._allowOverwrite ? 'sa-overwrite-on' : ''}"
                    title="${this._allowOverwrite
                        ? 'Überschreiben ist AN — belegte Sensoren werden beim Ablegen ersetzt'
                        : 'Überschreiben ist aus — belegte Sensoren bleiben unangetastet'}"
                    @click="${() => { this._allowOverwrite = !this._allowOverwrite; }}"
                >
                    <ha-icon icon="${this._allowOverwrite ? 'mdi:lock-open-variant' : 'mdi:lock'}"></ha-icon>
                </button>
            </div>
        `;
    }

    // --- Rendering: Quellen (linke Spalte) ----------------------------------

    private _renderSourceRow(group: SensorDeviceGroup, assigned: Set<string>): HTMLTemplateResult {
        const typeKeys = Object.keys(group.types);
        const selectedHere = typeKeys.filter(t => this._selection.has(this._selectionKey(group.id, t)));
        // Bei einer Entität ist das Avatar bereits das farbige Typ-Symbol und
        // damit selbst der Auswahlknopf — für diesen Typ kommt kein zweiter
        // Chip daneben. Nur wenn eine Entität ausnahmsweise auf mehrere Typen
        // passt (Prozentwert ohne device_class), erscheinen die übrigen als Chip.
        const chipTypes = group.isDevice ? typeKeys : typeKeys.slice(1);
        const primaryType = typeKeys[0];
        const primarySelected = this._selection.has(this._selectionKey(group.id, primaryType));
        // Gefüllt = geht beim Ziehen mit, Umriss = bleibt außen vor (ein Klick
        // nimmt ihn dazu). Hervorgehoben wird nur, wenn die Auswahl tatsächlich
        // eingeschränkt ist — sonst wären ohne Filter schlicht alle Chips groß.
        const aktiveTypen = new Set(this._activeTypes(group));
        const eingeschraenkt = this._isNarrowed(group);

        return html`
            <div
                class="sa-source ${this._dragGroupIds.has(group.id) ? 'sa-source-dragging' : ''} ${assigned.has(group.id) ? 'sa-source-used' : ''} ${selectedHere.length > 0 ? 'sa-source-selected' : ''}"
                @pointerdown="${(e: PointerEvent) => this._onDragStart(e, this._payloadForSource(group))}"
                title="${group.name}"
            >
                <div class="sa-source-avatar-slot">
                    ${group.isDevice
                        ? this._renderDeviceAvatar(group, 'sa-avatar')
                        : html`
                            <div
                                class="sa-avatar-button ${primarySelected ? 'sa-avatar-selected' : ''}"
                                style="color: ${SENSOR_TYPE_COLORS[primaryType]}"
                                title="${this._typeLabel(primaryType)} — ${group.types[primaryType]} (klicken zum Aus-/Abwählen)"
                                @click="${(e: Event) => { e.stopPropagation(); this._toggleSelection(group.id, primaryType); }}"
                            >
                                ${this._renderEntityAvatar(group, primaryType, 'sa-avatar')}
                            </div>
                        `}
                </div>
                <div class="sa-source-body">
                    <div class="sa-source-name">${group.name}</div>
                    ${chipTypes.length > 0
                        ? html`
                            <div class="sa-source-types">
                                ${chipTypes.map(typeKey => {
                                    const aktiv = aktiveTypen.has(typeKey);
                                    const farbe = SENSOR_TYPE_COLORS[typeKey];
                                    return html`
                                        <button
                                            class="sa-chip ${aktiv ? '' : 'sa-chip-off'} ${aktiv && eingeschraenkt ? 'sa-chip-selected' : ''}"
                                            style="background: ${aktiv ? farbe : 'transparent'}; border-color: ${farbe}; color: ${farbe}"
                                            title="${this._typeLabel(typeKey)} — ${group.types[typeKey]} (${aktiv ? 'klicken zum Abwählen' : 'klicken zum Dazunehmen'})"
                                            @click="${(e: Event) => { e.stopPropagation(); this._toggleSelection(group.id, typeKey); }}"
                                        >
                                            <ha-icon icon="${TYPE_ICONS[typeKey]}"></ha-icon>
                                        </button>
                                    `;
                                })}
                            </div>
                        `
                        : ''}
                </div>
            </div>
        `;
    }

    // Bauform des Geräts aus dem raten, was es misst. Ein generisches Chip-
    // Symbol sagt nichts; ein Bodensensor und ein Thermo-/Hygrometer sind auf
    // einen Blick unterscheidbar, und genau die zwei Bauformen deckt der
    // Großteil der üblichen Pflanzensensorik ab.
    private _deviceGlyph(group: SensorDeviceGroup): 'soil' | 'climate' | 'generic' {
        const types = new Set(Object.keys(group.types));
        if (types.has('moisture')) return 'soil';
        if (types.has('temperature') && types.has('humidity')) return 'climate';
        return 'generic';
    }

    // Eigene Zeichnungen statt MDI: für "Erdspieß mit zwei Zinken" und
    // "Display-Würfel" gibt es dort nichts Passendes. currentColor, damit sie
    // die Farbe des umgebenden Avatars erben.
    private _renderDeviceGlyph(kind: 'soil' | 'climate' | 'generic'): HTMLTemplateResult {
        if (kind === 'soil') {
            return html`
                <svg class="sa-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-linecap="round" stroke-linejoin="round">
                    ${svg`<rect x="8" y="2.2" width="8" height="9.6" rx="3" fill="currentColor" stroke="none"></rect>`}
                    ${svg`<path d="M10.4 11.8 9.7 20.4M13.6 11.8 14.3 20.4" stroke-width="1.7"></path>`}
                    ${svg`<path d="M2.6 15.6h18.8" stroke-width="1.5" stroke-dasharray="3 2.4" opacity="0.6"></path>`}
                </svg>
            `;
        }
        if (kind === 'climate') {
            return html`
                <svg class="sa-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-linecap="round" stroke-linejoin="round">
                    ${svg`<rect x="4.2" y="3.2" width="15.6" height="17.6" rx="3.2" stroke-width="1.7"></rect>`}
                    ${svg`<rect x="7" y="6.4" width="10" height="6.6" rx="1.5" fill="currentColor" stroke="none" opacity="0.85"></rect>`}
                    ${svg`<path d="M7.6 16.8h4.2M14.6 16.8h1.8" stroke-width="1.6"></path>`}
                </svg>
            `;
        }
        return html`
            <svg class="sa-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-linecap="round" stroke-linejoin="round">
                ${svg`<rect x="3.6" y="9" width="16.8" height="11.4" rx="2.6" stroke-width="1.7"></rect>`}
                ${svg`<circle cx="12" cy="14.7" r="2.1" fill="currentColor" stroke="none"></circle>`}
                ${svg`<path d="M12 9V5.4" stroke-width="1.6"></path>`}
                ${svg`<circle cx="12" cy="4" r="1.5" fill="currentColor" stroke="none"></circle>`}
            </svg>
        `;
    }

    // Geräte sind abgerundete Quadrate mit Gerätebild bzw. der zu ihrer
    // Sensorik passenden Bauform-Zeichnung: sie bündeln mehrere Messwerte,
    // tragen also selbst keine Typ-Farbe.
    private _renderDeviceAvatar(group: SensorDeviceGroup, cls: string): HTMLTemplateResult {
        return html`
            <div
                class="${cls} sa-avatar-device"
                style="${group.picture ? `background-image: url(${group.picture})` : ''}"
            >
                ${!group.picture ? this._renderDeviceGlyph(this._deviceGlyph(group)) : ''}
            </div>
        `;
    }

    // Eine lose Entität IST ein einzelner Messwert — ihr Avatar ist deshalb
    // direkt das farbige Typ-Symbol. Kein zweites Symbol daneben und am Stiel:
    // in der Blüte ersetzt dieses Blatt das Icon, das bei Geräten auf dem Stiel
    // sitzt.
    private _renderEntityAvatar(group: SensorDeviceGroup, typeKey: string, cls: string): HTMLTemplateResult {
        const color = SENSOR_TYPE_COLORS[typeKey] ?? 'var(--primary-color)';
        return html`
            <div class="${cls} sa-avatar-entity" style="background: ${color}; color: ${color}">
                <ha-icon icon="${TYPE_ICONS[typeKey]}"></ha-icon>
            </div>
        `;
    }

    // --- Rendering: Blüte ---------------------------------------------------

    private _renderFlower(plant: PlantDeviceInfo): HTMLTemplateResult {
        const { leaves, open } = this._flowerLayout(plant);

        return html`
            <div
                class="sa-flower ${this._snapPlantId === plant.entityId ? 'sa-flower-snap' : ''}"
                data-plant="${plant.entityId}"
            >
                <div class="sa-flower-canvas">
                    <svg class="sa-stems" viewBox="0 0 ${CELL} ${CELL}" width="${CELL}" height="${CELL}">
                        ${leaves.map(leaf => leaf.typeKeys.map(typeKey => html`
                            <path
                                data-owner="${leaf.key}"
                                fill="none"
                                stroke="${SENSOR_TYPE_COLORS[typeKey]}"
                                stroke-width="2.5"
                                stroke-linecap="round"
                                opacity="0.75"
                            ></path>
                        `))}
                    </svg>

                    <div
                        class="sa-core"
                        style="${plant.picture ? `background-image: url(${plant.picture})` : ''}"
                        title="${plant.name}"
                    >
                        ${!plant.picture ? html`<ha-icon icon="mdi:sprout"></ha-icon>` : ''}
                    </div>

                    <div class="sa-flower-name" title="${plant.name}">${plant.name}</div>
                    ${this._strainLine(plant)
                        ? html`<div class="sa-flower-strain" title="${this._strainLine(plant)}">${this._strainLine(plant)}</div>`
                        : ''}

                    ${open.map(slot => html`
                        <div
                            class="sa-type sa-type-open"
                            style="border-color: ${SENSOR_TYPE_COLORS[slot.typeKey]}; color: ${SENSOR_TYPE_COLORS[slot.typeKey]}; transform: translate(${(Math.cos(slot.angle) * ICON_R).toFixed(1)}px, ${(Math.sin(slot.angle) * ICON_R).toFixed(1)}px)"
                            title="${this._typeLabel(slot.typeKey)} — noch nicht zugewiesen"
                        >
                            <ha-icon icon="${TYPE_ICONS[slot.typeKey]}"></ha-icon>
                        </div>
                    `)}

                    ${leaves.map(leaf => {
                        const payload: DragPayload = {
                            entries: [{ group: leaf.group, typeKeys: leaf.typeKeys }],
                            fromPlantId: plant.entityId,
                        };
                        const dragging = this._dragLeafKey === `${plant.entityId}|${leaf.key}`;
                        return html`
                            <div
                                class="sa-leaf ${leaf.group.isDevice ? 'sa-leaf-device' : 'sa-leaf-entity'} ${dragging ? 'sa-leaf-dragging' : ''}"
                                data-leaf="${leaf.key}"
                                data-angle="${leaf.angle}"
                                data-sector="${leaf.sector}"
                                data-half="${leaf.group.isDevice ? LEAF_HALF_DEVICE : LEAF_HALF_ENTITY}"
                                data-radius="${leaf.group.isDevice ? LEAF_R_DEVICE : LEAF_R_ENTITY}"
                                title="${leaf.group.name} — ziehen: zu einer anderen Pflanze hängen oder links in die Liste zum Lösen"
                                @pointerdown="${(e: PointerEvent) => this._onDragStart(e, payload)}"
                            >
                                ${leaf.group.isDevice
                                    ? this._renderDeviceAvatar(leaf.group, 'sa-leaf-avatar')
                                    : this._renderEntityAvatar(leaf.group, leaf.typeKeys[0], 'sa-leaf-avatar')}
                                <div class="sa-leaf-name">${leaf.group.name}</div>
                            </div>
                        `;
                    })}

                    ${leaves
                        // Nur Geräte bekommen Typ-Icons auf den Stiel. Bei einer
                        // Entität ist das Blatt selbst schon das farbige Symbol —
                        // ein zweites auf halber Strecke wäre dasselbe Icon doppelt.
                        .filter(leaf => leaf.group.isDevice)
                        .map(leaf => leaf.typeKeys.map(typeKey => html`
                            <div
                                class="sa-type"
                                data-owner="${leaf.key}"
                                data-type="${typeKey}"
                                style="background: ${SENSOR_TYPE_COLORS[typeKey]}; border-color: ${SENSOR_TYPE_COLORS[typeKey]}"
                                title="${this._typeLabel(typeKey)} — klicken zum Lösen"
                                @click="${() => this._unassignTypes(plant.entityId, [typeKey])}"
                            >
                                <ha-icon icon="${TYPE_ICONS[typeKey]}"></ha-icon>
                            </div>
                        `))}
                </div>
            </div>
        `;
    }

    // --- Rendering: Listenansicht -------------------------------------------

    private _renderPlantRow(plant: PlantDeviceInfo): HTMLTemplateResult {
        const { leaves, open } = this._flowerLayout(plant);

        return html`
            <div
                class="sa-row ${this._snapPlantId === plant.entityId ? 'sa-row-snap' : ''}"
                data-plant="${plant.entityId}"
            >
                <div class="sa-row-plant">
                    <div
                        class="sa-core"
                        style="${plant.picture ? `background-image: url(${plant.picture})` : ''}"
                        title="${plant.name}"
                    >
                        ${!plant.picture ? html`<ha-icon icon="mdi:sprout"></ha-icon>` : ''}
                    </div>
                    <div class="sa-row-name" title="${plant.name}">${plant.name}</div>
                    ${this._strainLine(plant)
                        ? html`<div class="sa-row-strain" title="${this._strainLine(plant)}">${this._strainLine(plant)}</div>`
                        : ''}
                </div>

                <div class="sa-row-groups">
                    ${leaves.map(leaf => this._renderListGroup(plant, leaf))}
                    ${open.length > 0 ? this._renderListOpenGroup(open) : ''}
                </div>
            </div>
        `;
    }

    private _renderListGroup(plant: PlantDeviceInfo, leaf: LeafModel): HTMLTemplateResult {
        const anzahl = leaf.typeKeys.length;
        const hoehe = anzahl * LIST_STEP - (LIST_STEP - 24);
        const payload: DragPayload = {
            entries: [{ group: leaf.group, typeKeys: leaf.typeKeys }],
            fromPlantId: plant.entityId,
        };
        const dragging = this._dragLeafKey === `${plant.entityId}|${leaf.key}`;

        return html`
            <div class="sa-group" style="height: ${hoehe}px">
                <div class="sa-group-types">
                    ${leaf.typeKeys.map((typeKey, index) => html`
                        <div
                            class="sa-type sa-type-list"
                            style="top: ${index * LIST_STEP}px; background: ${SENSOR_TYPE_COLORS[typeKey]}; border-color: ${SENSOR_TYPE_COLORS[typeKey]}"
                            title="${this._typeLabel(typeKey)} — klicken zum Lösen"
                            @click="${() => this._unassignTypes(plant.entityId, [typeKey])}"
                        >
                            <ha-icon icon="${TYPE_ICONS[typeKey]}"></ha-icon>
                        </div>
                    `)}
                </div>

                <div
                    class="sa-group-source ${dragging ? 'sa-leaf-dragging' : ''}"
                    title="${leaf.group.name} — ziehen: zu einer anderen Pflanze hängen oder links in die Liste zum Lösen"
                    @pointerdown="${(e: PointerEvent) => this._onDragStart(e, payload)}"
                >
                    <div class="sa-source-avatar-slot">
                        ${leaf.group.isDevice
                            ? this._renderDeviceAvatar(leaf.group, 'sa-avatar')
                            : this._renderEntityAvatar(leaf.group, leaf.typeKeys[0], 'sa-avatar')}
                    </div>
                    <span class="sa-group-source-name">${leaf.group.name}</span>
                </div>
            </div>
        `;
    }

    // Alle noch freien Typen in einem Block: sie zeigen auf nichts, ein
    // Verbinder je Zeile wäre nur Rauschen.
    private _renderListOpenGroup(open: OpenSlot[]): HTMLTemplateResult {
        return html`
            <div class="sa-group sa-group-open" style="height: ${open.length * LIST_STEP - (LIST_STEP - 24)}px">
                <div class="sa-group-types">
                    ${open.map((slot, index) => html`
                        <div
                            class="sa-type sa-type-list sa-type-open"
                            style="top: ${index * LIST_STEP}px; border-color: ${SENSOR_TYPE_COLORS[slot.typeKey]}; color: ${SENSOR_TYPE_COLORS[slot.typeKey]}"
                            title="${this._typeLabel(slot.typeKey)} — noch nicht zugewiesen"
                        >
                            <ha-icon icon="${TYPE_ICONS[slot.typeKey]}"></ha-icon>
                        </div>
                    `)}
                </div>
                <div class="sa-group-source sa-group-source-empty">nicht zugewiesen</div>
            </div>
        `;
    }

    protected render(): HTMLTemplateResult {
        if (!this.hass) return html``;

        const sources = this._filteredSources();
        const deviceGroups = sources.filter(g => g.isDevice);
        const looseGroups = sources.filter(g => !g.isDevice);
        const plants = this._filteredPlants();
        // Nur anbieten, wenn es überhaupt etwas zu unterscheiden gibt.
        const areaOptions = this._areaOptions();
        const assigned = this._assignedGroupIds();
        const filtered = this._sourceQuery.trim() !== '' || this._typeFilter.size > 0;
        const selectionCount = this._selection.size;

        return html`
            <div class="sa-container">
                <div class="sa-column sa-column-sources ${this._dropOnSources ? 'sa-drop-active' : ''}">
                    <div class="sa-toolbar">
                        ${this._renderSearch(
                            this._sourceQuery,
                            'Geräte und Entitäten suchen',
                            v => { this._sourceQuery = v; }
                        )}
                        ${this._renderTypeFilter()}
                        ${selectionCount > 0
                            ? html`
                                <div class="sa-selection-bar">
                                    <span>${selectionCount} ausgewählt — ziehen zum Zuweisen</span>
                                    <button
                                        class="sa-icon-button"
                                        title="Auswahl aufheben"
                                        @click="${() => { this._selection = new Set(); }}"
                                    >
                                        <ha-icon icon="mdi:close"></ha-icon>
                                    </button>
                                </div>
                            `
                            : ''}
                    </div>

                    <div class="sa-scroll">
                        <div class="sa-section-title">Geräte</div>
                        ${deviceGroups.length > 0
                            ? deviceGroups.map(g => this._renderSourceRow(g, assigned))
                            : html`<div class="sa-empty-hint">${filtered ? 'Keine Treffer' : 'Keine passenden Geräte gefunden'}</div>`}

                        <div class="sa-section-title">Entitäten</div>
                        ${looseGroups.length > 0
                            ? looseGroups.map(g => this._renderSourceRow(g, assigned))
                            : html`<div class="sa-empty-hint">${filtered ? 'Keine Treffer' : 'Keine losen Entitäten gefunden'}</div>`}
                    </div>

                    <div class="sa-drop-hint">Hier ablegen zum Lösen</div>
                </div>

                <div class="sa-column sa-column-garden">
                    <div class="sa-toolbar sa-toolbar-garden">
                        ${this._renderSearch(
                            this._plantQuery,
                            'Pflanze suchen',
                            v => { this._plantQuery = v; }
                        )}
                        <div class="sa-view-switch">
                            <button
                                class="${this._view === 'flower' ? 'sa-view-on' : ''}"
                                title="Blütenansicht"
                                @click="${() => { this._viewOverride = 'flower'; }}"
                            >
                                <ha-icon icon="mdi:flower-outline"></ha-icon>
                            </button>
                            <button
                                class="${this._view === 'list' ? 'sa-view-on' : ''}"
                                title="Listenansicht"
                                @click="${() => { this._viewOverride = 'list'; }}"
                            >
                                <ha-icon icon="mdi:format-list-bulleted"></ha-icon>
                            </button>
                        </div>
                        <div class="sa-view-switch">
                            <button
                                class="${this._showStrain ? 'sa-view-on' : ''}"
                                title="Strain anzeigen"
                                @click="${() => { this._showStrain = !this._showStrain; }}"
                            >
                                <ha-icon icon="mdi:dna"></ha-icon>
                            </button>
                            <button
                                class="${this._showBreeder ? 'sa-view-on' : ''}"
                                title="Breeder anzeigen"
                                @click="${() => { this._showBreeder = !this._showBreeder; }}"
                            >
                                <ha-icon icon="mdi:account-tie"></ha-icon>
                            </button>
                        </div>
                    </div>

                    <div class="sa-phase-filter">
                        <span class="sa-filter-label">Phase</span>
                        ${GROWTH_PHASES.map(phase => html`
                            <button
                                class="sa-phase-chip ${this._phases.has(phase) ? 'sa-phase-on' : ''}"
                                title="Wachstumsphase ${TranslationUtils.translateGrowthPhase(this.hass!, phase)}"
                                @click="${() => this._togglePhase(phase)}"
                            >
                                ${TranslationUtils.translateGrowthPhase(this.hass!, phase)}
                            </button>
                        `)}
                    </div>

                    ${areaOptions.length > 1
                        ? html`
                            <div class="sa-phase-filter">
                                <span class="sa-filter-label">Raum</span>
                                ${areaOptions.map(area => html`
                                    <button
                                        class="sa-phase-chip ${this._areas.has(area.id) ? 'sa-phase-on' : ''}"
                                        title="Raum ${area.name}"
                                        @click="${() => this._toggleArea(area.id)}"
                                    >
                                        ${area.name}
                                    </button>
                                `)}
                            </div>
                        `
                        : ''}

                    <div class="sa-scroll">
                        ${plants.length === 0
                            ? html`<div class="sa-empty-hint">${this._plantQuery ? 'Keine Treffer' : 'Keine Pflanzen gefunden'}</div>`
                            : this._view === 'list'
                                ? html`<div class="sa-list">${plants.map(p => this._renderPlantRow(p))}</div>`
                                : html`<div class="sa-garden">${plants.map(p => this._renderFlower(p))}</div>`}
                    </div>
                </div>
            </div>
        `;
    }

    static get styles(): CSSResultGroup {
        return sensorAssignmentStyles;
    }
}
