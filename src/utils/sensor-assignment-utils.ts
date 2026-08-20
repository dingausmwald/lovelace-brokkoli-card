import { HomeAssistant } from 'custom-card-helpers';
import { HomeAssistantEntity } from '../types/brokkoli-list-card-types';
import { PlantEntityUtils } from './plant-entity-utils';

interface EntityRegistryFields {
    device_id?: string;
    entity_category?: string | null;
    hidden_by?: string | null;
    disabled_by?: string | null;
}

export interface SensorTypeDef {
    key: string;
    icon: string;
    matches: (deviceClass: string | undefined, unit: string | undefined) => boolean;
}

// Zuordnung Entity -> Pflanzen-Sensortyp.
//
// Wichtig ist die Reihenfolge der Prüfung: liegt eine device_class vor, ist SIE
// allein maßgeblich; die Einheit wird nur als Notnagel für Entitäten ganz ohne
// device_class herangezogen. Vorher galt "device_class ODER Einheit", was jeden
// Prozentwert zur Luftfeuchte machte — ein Batteriestand (device_class battery,
// Einheit %) wurde damit als Feuchtesensor angeboten und ließ sich einer
// Pflanze zuweisen. Ebenso wird humidity nicht mehr zusätzlich auf moisture
// gemappt: sonst hätte ein Luftfeuchte-Sensor beim Ablegen stillschweigend auch
// die Bodenfeuchte überschrieben.
// Erkennung: device_class ODER Einheit, bewusst nicht "device_class schlaegt
// Einheit". Viele Bodenfeuchte-Sensoren melden device_class "humidity" statt
// "moisture" -- mit einem Vorrang der device_class waren sie als Bodenfeuchte
// nicht mehr zuweisbar. In einer Zuweisungs-Card ist zu viel anbieten harmlos,
// zu wenig anbieten blockiert. Prozentwerte matchen deshalb beide Typen.
export const SENSOR_TYPES: SensorTypeDef[] = [
    {
        key: 'temperature',
        icon: 'mdi:thermometer',
        matches: (dc, u) => dc === 'temperature' || u === '°C' || u === '°F',
    },
    {
        key: 'moisture',
        icon: 'mdi:water-percent',
        matches: (dc, u) => dc === 'moisture' || u === '%',
    },
    {
        key: 'illuminance',
        icon: 'mdi:brightness-5',
        matches: (dc, u) => dc === 'illuminance' || u === 'lx' || u === 'lm',
    },
    {
        key: 'humidity',
        icon: 'mdi:water',
        matches: (dc, u) => dc === 'humidity' || u === '%',
    },
    {
        key: 'conductivity',
        icon: 'mdi:flash',
        // HA normalisiert das Mikro-Zeichen nicht — sowohl U+00B5 (Mikro) als
        // auch U+03BC (griechisches My) kommen in echten Konfigurationen vor.
        matches: (dc, u) => dc === 'conductivity' || u === 'µS/cm' || u === 'μS/cm' || u === 'mS/cm',
    },
    {
        key: 'power_consumption',
        icon: 'mdi:power-plug',
        matches: (dc, u) => dc === 'power' || dc === 'energy' || u === 'W' || u === 'kW' || u === 'kWh' || u === 'Wh',
    },
    {
        key: 'ph',
        icon: 'mdi:ph',
        matches: (dc, u) => dc === 'ph' || u === 'pH',
    },
];

// Farben pro Sensortyp. Bewusst als TS-Konstante und nicht nur als CSS-Variable:
// die Stiele/Icons der "Blüten"-Darstellung werden während des Ziehens in einem
// Overlay an <body> gezeichnet, das die CSS-Variablen des Shadow-Roots nicht
// sieht — dort wird die Farbe direkt inline gesetzt.
export const SENSOR_TYPE_COLORS: Record<string, string> = {
    temperature: '#e74c3c',
    moisture: '#16a085',
    illuminance: '#f1c40f',
    humidity: '#3498db',
    conductivity: '#9b59b6',
    power_consumption: '#e67e22',
    ph: '#2ecc71',
};

// Wachstumsphasen der Plant-Integration (const.py GROWTH_PHASES), in derselben
// Reihenfolge. "removed" steht bewusst am Ende — es ist die einzige Phase, die
// standardmäßig ausgeblendet wird. Geerntete Pflanzen bleiben sichtbar: auch
// Trocknung und Fermentation brauchen noch Sensoren.
export const GROWTH_PHASES = [
    'seeds',
    'germination',
    'rooting',
    'growing',
    'flowering',
    'harvested',
    'removed',
] as const;

export const DEFAULT_PLANT_PHASES = GROWTH_PHASES.filter(p => p !== 'removed');

export interface SensorDeviceGroup {
    // device_id, oder bei Entities ohne Device die entity_id selbst als Fallback-Key
    id: string;
    name: string;
    picture?: string;
    // Pro Typ die konkrete Quell-Entity (falls mehrere Entities eines Geräts
    // auf denselben Typ passen, gewinnt die erste gefundene)
    types: Record<string, string>;
    // true = echtes HA-Device (mind. eine Entity mit device_id), false = lose
    // Entity/Helper ohne Device-Zuordnung. Steuert die getrennte Darstellung
    // (Geräte oben, lose Entitäten unten) und ob ein Geräte-Icon angezeigt wird.
    isDevice: boolean;
    // Nur bei isDevice=false gesetzt: Icon der Entity selbst bzw. des ersten
    // passenden Typs, statt eines generischen Geräte-Icons.
    entityIcon?: string;
}

export interface PlantDeviceInfo {
    entityId: string;
    deviceId?: string;
    name: string;
    picture?: string;
    strain?: string;
    breeder?: string;
}

export class SensorAssignmentUtils {
    // Gruppiert alle infrage kommenden sensor.*-Entities nach HA-Device.
    // Schließt Entities aus, die selbst von der Plant-Integration stammen.
    // Das external_sensor-Attribut allein reicht nicht als Ausschlusskriterium
    // (Vorbild: bestehendes Popup) — PlantCurrentPowerConsumption z.B. ist ein
    // rein intern berechneter Watt-Sensor (device_class "power") OHNE
    // external_sensor-Attribut, da er nicht selbst extern gespeist wird,
    // sondern aus PlantTotalPowerConsumption abgeleitet ist. Ohne zusätzlichen
    // Check würde daher jedes Plant/Cycle-Device fälschlich auch als
    // "Sensoren"-Kachel auftauchen. Deshalb zusätzlich alle Entities
    // ausschließen, deren device_id zu einem bekannten Plant/Cycle-Device gehört.
    static getSensorDevices(hass: HomeAssistant, excludeDeviceIds: Set<string>): SensorDeviceGroup[] {
        const groups = new Map<string, SensorDeviceGroup>();

        for (const [entityId, stateRaw] of Object.entries(hass.states)) {
            if (!entityId.startsWith('sensor.')) continue;
            const state = stateRaw as HomeAssistantEntity;
            if (state.attributes && 'external_sensor' in state.attributes) continue;

            // custom-card-helpers typisiert hass.entities nur mit einem
            // Minimal-Ausschnitt der Registry; entity_category/hidden_by/
            // disabled_by liefert HA trotzdem mit.
            const entry = hass.entities?.[entityId] as EntityRegistryFields | undefined;
            const ownerDeviceId = entry?.device_id;
            if (ownerDeviceId && excludeDeviceIds.has(ownerDeviceId)) continue;

            // Diagnose- und Konfigurations-Entitäten sind nie Messwerte einer
            // Pflanze, sondern Zustandsdaten des Geräts selbst (Batterie,
            // Signalstärke, CPU-Last der Add-ons). HA markiert sie über die
            // entity_category — das hält die Auswahlliste frei von System-Rauschen,
            // unabhängig davon, ob die device_class zufällig passt.
            if (entry?.entity_category) continue;
            if (entry?.hidden_by || entry?.disabled_by) continue;

            const deviceClass = state.attributes?.device_class as string | undefined;
            const unit = state.attributes?.unit_of_measurement as string | undefined;
            const matchedTypes = SENSOR_TYPES.filter(t => t.matches(deviceClass, unit));
            if (matchedTypes.length === 0) continue;

            const deviceId = ownerDeviceId;
            const groupKey = deviceId || entityId;

            let group = groups.get(groupKey);
            if (!group) {
                const device = deviceId ? hass.devices?.[deviceId] : undefined;
                const name = device?.name_by_user || device?.name || state.attributes?.friendly_name || entityId;
                group = {
                    id: groupKey,
                    name,
                    picture: state.attributes?.entity_picture,
                    types: {},
                    isDevice: !!deviceId,
                    entityIcon: deviceId ? undefined : ((state.attributes?.icon as string | undefined) || matchedTypes[0].icon),
                };
                groups.set(groupKey, group);
            }
            if (!group.picture && state.attributes?.entity_picture) {
                group.picture = state.attributes.entity_picture;
            }
            for (const t of matchedTypes) {
                if (!group.types[t.key]) {
                    group.types[t.key] = entityId;
                }
            }
        }

        return Array.from(groups.values()).sort((a, b) => a.name.localeCompare(b.name));
    }

    // Device-IDs aller Plant- UND Cycle-Entities (für den Sensoren-Ausschluss-
    // Filter — Cycles haben dieselben intern berechneten Sensoren wie Plants
    // und müssen daher ebenso aus der Sensoren-Spalte ausgeschlossen werden,
    // auch wenn sie selbst nicht als Zuweisungsziel angezeigt werden).
    static getPlantAndCycleDeviceIds(hass: HomeAssistant): Set<string> {
        const entities = PlantEntityUtils.getPlantEntities(hass, 'all');
        const ids = new Set<string>();
        for (const entity of entities) {
            const deviceId = hass.entities?.[entity.entity_id]?.device_id;
            if (deviceId) ids.add(deviceId);
        }
        return ids;
    }

    // Alle Plant-Devices (bewusst ohne Cycles — Cycles haben keine eigene
    // sinnvolle Sensor-Zuweisung, siehe Nutzer-Entscheidung).
    static getPlantDevices(hass: HomeAssistant): PlantDeviceInfo[] {
        const plants = PlantEntityUtils.getPlantEntities(hass, 'plant');
        return plants
            .map(entity => {
                const registryEntry = hass.entities?.[entity.entity_id];
                return {
                    entityId: entity.entity_id,
                    deviceId: registryEntry?.device_id,
                    name: entity.attributes?.friendly_name || entity.entity_id,
                    picture: entity.attributes?.entity_picture,
                    strain: entity.attributes?.strain as string | undefined,
                    breeder: entity.attributes?.breeder as string | undefined,
                };
            })
            .sort((a, b) => a.name.localeCompare(b.name));
    }

    // Die internen Meter-Entities einer Pflanze je Typ. Nur DIESER Teil braucht
    // den (gecachten) plant/get_info-Websocket-Call — er ändert sich praktisch
    // nie, solange die Pflanze existiert.
    // power_consumption ist ein Sonderfall: die Quelle sitzt auf der TOTAL-kWh-
    // Entity, nicht auf der daraus berechneten CURRENT-Watt-Entity.
    static async getPlantMeterEntities(hass: HomeAssistant, plantEntityId: string): Promise<{
        meters: Record<string, string | undefined>;
        growthPhaseEntity?: string;
    }> {
        const info = await PlantEntityUtils.getPlantInfo(hass, plantEntityId) as
            (Record<string, { sensor?: string }> & {
                diagnostic_sensors?: Record<string, { entity_id?: string }>;
                helpers?: { growth_phase?: { entity_id?: string } };
            }) | null;

        const meters: Record<string, string | undefined> = {};
        if (!info) return { meters };

        for (const t of SENSOR_TYPES) {
            meters[t.key] = t.key === 'power_consumption'
                ? info.diagnostic_sensors?.total_power_consumption?.entity_id
                : info[t.key]?.sensor;
        }
        // Die Wachstumsphase steckt in einer eigenen select-Entity; ihre ID
        // kommt sprachneutral aus plant/get_info, der Zustand dann live aus
        // hass.states.
        return { meters, growthPhaseEntity: info.helpers?.growth_phase?.entity_id };
    }

    // Welche Quelle hängt aktuell an welchem Meter? Bewusst rein synchron aus
    // hass.states abgeleitet und nicht mit den Meter-IDs zusammen gecacht: die
    // Zuweisung ändert sich bei jedem replace_sensor, und die Karte muss das
    // sofort zeigen — vorher wurde sie nur bei einer geänderten Entitäten-Anzahl
    // neu berechnet, sodass eine frisch abgelegte Quelle unsichtbar blieb.
    static resolveSources(
        hass: HomeAssistant,
        meterEntities: Map<string, Record<string, string | undefined>>
    ): Map<string, Record<string, { source?: string; meterEntityId?: string }>> {
        const result = new Map<string, Record<string, { source?: string; meterEntityId?: string }>>();
        for (const [plantEntityId, meters] of meterEntities) {
            const info: Record<string, { source?: string; meterEntityId?: string }> = {};
            for (const t of SENSOR_TYPES) {
                const meterEntityId = meters[t.key];
                info[t.key] = {
                    meterEntityId,
                    source: meterEntityId
                        ? (hass.states[meterEntityId]?.attributes?.external_sensor as string | undefined) || undefined
                        : undefined,
                };
            }
            result.set(plantEntityId, info);
        }
        return result;
    }

    // --- Geometrie der "Blüten"-Darstellung ---------------------------------
    //
    // Aufbau einer Blüte: die Pflanze ist der Kern, jede zugewiesene Quelle
    // (Gerät oder lose Entität) ist ein Blatt auf einem äußeren Kreis, und die
    // farbigen Typ-Icons sitzen auf einem inneren Ring GENAU AUF dem Stiel, der
    // Kern und Blatt verbindet — das Icon ist damit sichtbar das Bindeglied und
    // nicht nur Dekoration am Rand.

    // Winkel der Typ-Icons eines Blattes: symmetrisch um den Blattwinkel
    // aufgefächert. `sector` begrenzt die Auffächerung, damit sich die Bündel
    // benachbarter Blätter bei vielen Blättern nicht überlappen.
    static fanAngles(leafAngle: number, count: number, sector: number): number[] {
        if (count <= 1) return [leafAngle];
        // 0.45 rad entspricht auf dem Icon-Ring rund 26px Bogenlänge — gerade
        // genug, dass sich zwei 24px-Icons nicht mehr überlappen.
        const step = Math.min(0.45, (sector * 0.75) / (count - 1));
        const start = leafAngle - (step * (count - 1)) / 2;
        return Array.from({ length: count }, (_, i) => start + step * i);
    }

    // Ein Stiel vom Pflanzenrand über das Typ-Icon bis kurz vor das Blatt.
    // Der Kontrollpunkt der quadratischen Bézier wird so gewählt, dass die
    // Kurve bei t=0.5 exakt durch den Icon-Mittelpunkt läuft:
    //   B(0.5) = (P0 + 2C + P2) / 4  =>  C = (4*Icon - P0 - P2) / 2
    static buildStem(
        cx: number,
        cy: number,
        leafX: number,
        leafY: number,
        iconAngle: number,
        plantRadius: number,
        iconRadius: number,
        leafRadius: number
    ): { path: string; iconX: number; iconY: number } {
        const iconX = cx + Math.cos(iconAngle) * iconRadius;
        const iconY = cy + Math.sin(iconAngle) * iconRadius;
        const p0x = cx + Math.cos(iconAngle) * plantRadius;
        const p0y = cy + Math.sin(iconAngle) * plantRadius;

        const dx = leafX - cx;
        const dy = leafY - cy;
        const len = Math.hypot(dx, dy) || 1;
        const p2x = leafX - (dx / len) * leafRadius;
        const p2y = leafY - (dy / len) * leafRadius;

        const cX = (4 * iconX - p0x - p2x) / 2;
        const cY = (4 * iconY - p0y - p2y) / 2;

        return {
            path: `M ${p0x.toFixed(1)} ${p0y.toFixed(1)} Q ${cX.toFixed(1)} ${cY.toFixed(1)} ${p2x.toFixed(1)} ${p2y.toFixed(1)}`,
            iconX,
            iconY,
        };
    }
}
