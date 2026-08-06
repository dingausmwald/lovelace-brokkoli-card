import { CSSResultGroup, HTMLTemplateResult, LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import { sensorAssignmentStyles } from '../styles/sensor-assignment-styles';
import {
    SENSOR_TYPES,
    SensorAssignmentUtils,
    SensorDeviceGroup,
    PlantDeviceInfo,
} from '../utils/sensor-assignment-utils';

const MAIN_RADIUS = 40;
const DOCKED_RADIUS = 22;

interface SatelliteSpec {
    typeKey: string;
    icon: string;
    active: boolean;
    onClick?: () => void;
}

@customElement('sensor-assignment')
export class SensorAssignment extends LitElement {
    @property({ attribute: false }) hass?: HomeAssistant;

    @state() private _sensorDevices: SensorDeviceGroup[] = [];
    @state() private _plantDevices: PlantDeviceInfo[] = [];
    // Pro Pflanze: Typ -> { source, meterEntityId }
    @state() private _sensorInfo: Map<string, Record<string, { source?: string; meterEntityId?: string }>> = new Map();
    @state() private _dragGroupId?: string;
    @state() private _dragOverPlantId?: string;

    private _entityToGroupId: Map<string, string> = new Map();
    private _lastHassStatesKey = '';
    private _dragGhost?: HTMLElement;
    private _dragGroup?: SensorDeviceGroup;

    protected willUpdate(): void {
        if (!this.hass) return;

        // Grobe, billige Änderungserkennung — vermeidet, bei jedem hass-Tick
        // (z.B. Temperatur-Update irgendeines Sensors im Haus) die komplette
        // Device-/Entity-Registry neu zu gruppieren.
        const statesKey = Object.keys(this.hass.states).length + ':' + Object.keys(this.hass.entities ?? {}).length;
        if (statesKey === this._lastHassStatesKey) return;
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

        this._loadSensorInfo();
    }

    private async _loadSensorInfo(): Promise<void> {
        if (!this.hass) return;
        const hass = this.hass;
        const results = await Promise.all(
            this._plantDevices.map(async plant => {
                const info = await SensorAssignmentUtils.getPlantSensorInfo(hass, plant.entityId);
                return [plant.entityId, info] as const;
            })
        );
        this._sensorInfo = new Map(results);
    }

    // --- Drag & Drop -------------------------------------------------

    private _onSensorPointerDown(e: PointerEvent, group: SensorDeviceGroup): void {
        if (e.button !== undefined && e.button !== 0) return;
        e.preventDefault();
        this._dragGroup = group;
        this._dragGroupId = group.id;
        this._createGhost(group, e.clientX, e.clientY);
        window.addEventListener('pointermove', this._onPointerMove);
        window.addEventListener('pointerup', this._onPointerUp);
    }

    private _createGhost(group: SensorDeviceGroup, x: number, y: number): void {
        const ghost = document.createElement('div');
        ghost.style.cssText = `
            position: fixed; left: 0; top: 0; width: 64px; height: 64px;
            border-radius: 50%; pointer-events: none; z-index: 9999;
            border: 2px solid var(--primary-color, #03a9f4);
            background-color: var(--card-background-color, #fff);
            background-size: cover; background-position: center;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            opacity: 0.85;
        `;
        if (group.picture) {
            ghost.style.backgroundImage = `url(${group.picture})`;
        } else {
            ghost.innerHTML = '<ha-icon icon="mdi:chip" style="--mdc-icon-size: 28px; display:flex; align-items:center; justify-content:center; height:100%; color: var(--secondary-text-color);"></ha-icon>';
        }
        ghost.style.transform = `translate(${x - 32}px, ${y - 32}px)`;
        document.body.appendChild(ghost);
        this._dragGhost = ghost;
    }

    // document.elementFromPoint() stoppt am äußersten Custom-Element-Host
    // (z.B. <home-assistant>) und pierct NICHT automatisch durch verschachtelte
    // offene Shadow-Roots hindurch — HA verschachtelt hier mehrfach
    // (home-assistant > hui-view > ... > diese Card > sensor-assignment).
    // Deshalb manuell rekursiv über shadowRoot.elementFromPoint() hindurchgehen.
    private _deepElementFromPoint(x: number, y: number): HTMLElement | null {
        let el = document.elementFromPoint(x, y) as HTMLElement | null;
        while (el?.shadowRoot) {
            const inner = el.shadowRoot.elementFromPoint(x, y) as HTMLElement | null;
            if (!inner || inner === el) break;
            el = inner;
        }
        return el;
    }

    private _onPointerMove = (e: PointerEvent): void => {
        if (this._dragGhost) {
            this._dragGhost.style.transform = `translate(${e.clientX - 32}px, ${e.clientY - 32}px)`;
        }

        const el = this._deepElementFromPoint(e.clientX, e.clientY);
        const tile = el?.closest?.('[data-plant-entity]') as HTMLElement | null;
        const plantId = tile?.dataset.plantEntity;
        if (plantId !== this._dragOverPlantId) {
            this._dragOverPlantId = plantId;
        }
    };

    private _onPointerUp = (): void => {
        window.removeEventListener('pointermove', this._onPointerMove);
        window.removeEventListener('pointerup', this._onPointerUp);
        this._dragGhost?.remove();
        this._dragGhost = undefined;

        const group = this._dragGroup;
        const plantId = this._dragOverPlantId;
        this._dragGroup = undefined;
        this._dragGroupId = undefined;
        this._dragOverPlantId = undefined;

        if (group && plantId) {
            this._assignDeviceToPlant(group, plantId);
        }
    };

    private async _assignDeviceToPlant(group: SensorDeviceGroup, plantEntityId: string): Promise<void> {
        if (!this.hass) return;
        const info = this._sensorInfo.get(plantEntityId) ?? {};

        for (const [typeKey, sourceEntityId] of Object.entries(group.types)) {
            const meterEntityId = info[typeKey]?.meterEntityId;
            if (!meterEntityId) continue;
            await this.hass.callService('plant', 'replace_sensor', {
                meter_entity: meterEntityId,
                new_sensor: sourceEntityId,
            });
        }
        await this._loadSensorInfo();
    }

    private async _unassignType(plantEntityId: string, typeKey: string): Promise<void> {
        if (!this.hass) return;
        const meterEntityId = this._sensorInfo.get(plantEntityId)?.[typeKey]?.meterEntityId;
        if (!meterEntityId) return;
        await this.hass.callService('plant', 'replace_sensor', {
            meter_entity: meterEntityId,
        });
        await this._loadSensorInfo();
    }

    // --- Rendering -----------------------------------------------------

    private _renderOrbitTile(opts: {
        picture?: string;
        fallbackIcon: string;
        satellites: SatelliteSpec[];
        mainSize: number;
        radius: number;
        dragging?: boolean;
        onMainPointerDown?: (e: PointerEvent) => void;
        // true (Standard): jeder Typ hat einen festen, globalen Winkel-Slot
        // (SENSOR_TYPES-Index), damit z.B. "pH" bei der Pflanze und bei der
        // angedockten Geräte-Kopie an derselben Position sitzt — das ist der
        // visuelle "Verbindungs"-Effekt. false: die tatsächlich vorhandenen
        // Satelliten werden lokal gleichmäßig verteilt (für einzelne
        // Sensor-Geräte/Entitäten links, die mit nichts anderem optisch
        // ausgerichtet werden müssen — bei fester globaler Position sähen
        // Geräte mit wenigen Typen sonst "versetzt"/unausgewogen aus).
        useGlobalPositions?: boolean;
    }): HTMLTemplateResult {
        const style = `width: ${opts.radius * 2 + opts.mainSize / 2}px; height: ${opts.radius * 2 + opts.mainSize / 2}px;`;
        // Nur Größe hier setzen — die CSS-Klasse zentriert bereits per
        // top:50%/left:50%/transform:translate(-50%,-50%) (prozentual zur
        // eigenen Boxgröße, funktioniert für jede Größe). Ein zusätzlicher
        // inline margin-Hack hier hätte sich MIT diesem transform addiert
        // und das Foto doppelt Richtung oben-links verschoben, statt es zu
        // zentrieren — die Satelliten saßen die ganze Zeit korrekt, nur das
        // Hauptfoto war verschoben, was wie "Icons rechts unten versetzt" aussah.
        const mainStyle = `width: ${opts.mainSize}px; height: ${opts.mainSize}px;`;
        const useGlobal = opts.useGlobalPositions !== false;
        return html`
            <div class="sa-tile-orbit" style="${style}">
                <div
                    class="sa-tile-main ${opts.dragging ? 'sa-dragging' : ''}"
                    style="${mainStyle} ${opts.picture ? `background-image: url(${opts.picture})` : ''}"
                    @pointerdown="${opts.onMainPointerDown}"
                >
                    ${!opts.picture ? html`<ha-icon icon="${opts.fallbackIcon}"></ha-icon>` : ''}
                </div>
                ${opts.satellites.map((sat, localIdx) => {
                    const idx = useGlobal ? SENSOR_TYPES.findIndex(t => t.key === sat.typeKey) : localIdx;
                    const total = useGlobal ? SENSOR_TYPES.length : opts.satellites.length;
                    const pos = SensorAssignmentUtils.getSatellitePosition(idx, total, opts.radius);
                    return html`
                        <div
                            class="sa-satellite ${sat.active ? 'sa-active' : ''} ${sat.onClick ? 'sa-clickable' : ''}"
                            style="transform: translate(${pos.x}px, ${pos.y}px); --sa-type-color: var(--sa-color-${sat.typeKey})"
                            title="${sat.typeKey}"
                            @click="${sat.onClick}"
                        >
                            <ha-icon icon="${sat.icon}"></ha-icon>
                        </div>
                    `;
                })}
            </div>
        `;
    }

    private _renderSensorDeviceTile(group: SensorDeviceGroup): HTMLTemplateResult {
        const satellites: SatelliteSpec[] = Object.keys(group.types).map(typeKey => ({
            typeKey,
            icon: SENSOR_TYPES.find(t => t.key === typeKey)!.icon,
            active: true,
        }));

        return html`
            <div class="sa-tile">
                ${this._renderOrbitTile({
                    picture: group.picture,
                    fallbackIcon: group.isDevice ? 'mdi:chip' : (group.entityIcon || 'mdi:help-circle-outline'),
                    satellites,
                    mainSize: 64,
                    radius: MAIN_RADIUS,
                    dragging: this._dragGroupId === group.id,
                    onMainPointerDown: (e) => this._onSensorPointerDown(e, group),
                    useGlobalPositions: false,
                })}
                <div class="sa-tile-name" title="${group.name}">${group.name}</div>
            </div>
        `;
    }

    private _renderDockedCopy(group: SensorDeviceGroup, plantEntityId: string, info: Record<string, { source?: string }>): HTMLTemplateResult {
        const satellites: SatelliteSpec[] = Object.keys(group.types).map(typeKey => ({
            typeKey,
            icon: SENSOR_TYPES.find(t => t.key === typeKey)!.icon,
            // Nur aktiv, wenn DIESE Pflanze den Typ aktuell tatsächlich von
            // diesem Gerät bezieht — erlaubt partielle Verbindungen (z.B.
            // Licht wurde manuell auf ein anderes Gerät umgehängt, Temp/
            // Feuchte/Leitfähigkeit kommen weiterhin von hier).
            active: info[typeKey]?.source === group.types[typeKey],
        }));

        return html`
            <div class="sa-docked-tile">
                ${this._renderOrbitTile({
                    picture: group.picture,
                    fallbackIcon: group.isDevice ? 'mdi:chip' : (group.entityIcon || 'mdi:help-circle-outline'),
                    satellites,
                    mainSize: 40,
                    radius: DOCKED_RADIUS,
                })}
                <div class="sa-docked-name" title="${group.name}">${group.name}</div>
            </div>
        `;
    }

    private _renderPlantTile(plant: PlantDeviceInfo): HTMLTemplateResult {
        const info = this._sensorInfo.get(plant.entityId) ?? {};

        const dockedGroupIds = new Set<string>();
        for (const t of SENSOR_TYPES) {
            const source = info[t.key]?.source;
            if (!source) continue;
            const groupId = this._entityToGroupId.get(source);
            if (groupId) dockedGroupIds.add(groupId);
        }
        const dockedGroups = this._sensorDevices.filter(g => dockedGroupIds.has(g.id));

        const satellites: SatelliteSpec[] = SENSOR_TYPES.map(type => {
            const isActive = !!info[type.key]?.source;
            return {
                typeKey: type.key,
                icon: type.icon,
                active: isActive,
                onClick: isActive ? () => this._unassignType(plant.entityId, type.key) : undefined,
            };
        });

        return html`
            <div class="sa-tile" data-plant-entity="${plant.entityId}">
                <div class="sa-plant-row ${this._dragOverPlantId === plant.entityId ? 'sa-drop-target' : ''}">
                    ${this._renderOrbitTile({
                        picture: plant.picture,
                        fallbackIcon: 'mdi:sprout',
                        satellites,
                        mainSize: 64,
                        radius: MAIN_RADIUS,
                    })}
                    <div class="sa-docked-row">
                        ${dockedGroups.map(g => this._renderDockedCopy(g, plant.entityId, info))}
                    </div>
                </div>
                <div class="sa-tile-name" title="${plant.name}">${plant.name}</div>
            </div>
        `;
    }

    protected render(): HTMLTemplateResult {
        if (!this.hass) return html``;

        const deviceGroups = this._sensorDevices.filter(g => g.isDevice);
        const looseGroups = this._sensorDevices.filter(g => !g.isDevice);

        return html`
            <div class="sa-container">
                <div class="sa-column">
                    <div class="sa-column-title">Geräte</div>
                    <div class="sa-scroll-section">
                        <div class="sa-tiles">
                            ${deviceGroups.length > 0
                                ? deviceGroups.map(g => this._renderSensorDeviceTile(g))
                                : html`<div class="sa-empty-hint">Keine passenden Geräte gefunden</div>`}
                        </div>
                    </div>
                    <div class="sa-section-divider"></div>
                    <div class="sa-column-title">Entitäten</div>
                    <div class="sa-scroll-section">
                        <div class="sa-tiles">
                            ${looseGroups.length > 0
                                ? looseGroups.map(g => this._renderSensorDeviceTile(g))
                                : html`<div class="sa-empty-hint">Keine losen Entitäten gefunden</div>`}
                        </div>
                    </div>
                </div>
                <div class="sa-column">
                    <div class="sa-column-title">Pflanzen</div>
                    <div class="sa-scroll-section sa-scroll-section-tall">
                        <div class="sa-tiles sa-tiles-vertical">
                            ${this._plantDevices.length > 0
                                ? this._plantDevices.map(p => this._renderPlantTile(p))
                                : html`<div class="sa-empty-hint">Keine Pflanzen gefunden</div>`}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    static get styles(): CSSResultGroup {
        return sensorAssignmentStyles;
    }
}
