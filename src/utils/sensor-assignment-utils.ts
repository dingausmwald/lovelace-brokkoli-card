import { HomeAssistant } from 'custom-card-helpers';
import { HomeAssistantEntity } from '../types/brokkoli-list-card-types';
import { PlantEntityUtils } from './plant-entity-utils';

export interface SensorTypeDef {
    key: string;
    icon: string;
    matches: (deviceClass: string | undefined, unit: string | undefined) => boolean;
}

// Gleiche Zuordnungslogik wie im bestehenden "Replace Sensors"-Popup
// (brokkoli-card.ts getSensorsByType), plus ph als siebter Typ ergänzt.
export const SENSOR_TYPES: SensorTypeDef[] = [
    { key: 'temperature', icon: 'mdi:thermometer', matches: (dc, u) => dc === 'temperature' || u === '°C' || u === '°F' },
    { key: 'moisture', icon: 'mdi:water-percent', matches: (dc, u) => dc === 'moisture' || (dc === 'humidity' && u === '%') },
    { key: 'illuminance', icon: 'mdi:brightness-5', matches: (dc, u) => dc === 'illuminance' || u === 'lx' || u === 'lm' },
    { key: 'humidity', icon: 'mdi:water', matches: (dc, u) => dc === 'humidity' || u === '%' },
    { key: 'conductivity', icon: 'mdi:flash', matches: (dc, u) => dc === 'conductivity' || u === 'µS/cm' || u === 'mS/cm' },
    { key: 'power_consumption', icon: 'mdi:power-plug', matches: (dc, u) => dc === 'power' || dc === 'energy' || u === 'W' || u === 'kW' || u === 'kWh' || u === 'Wh' },
    { key: 'ph', icon: 'mdi:ph', matches: (dc, u) => dc === 'ph' || u === 'pH' },
];

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

            const ownerDeviceId = hass.entities?.[entityId]?.device_id;
            if (ownerDeviceId && excludeDeviceIds.has(ownerDeviceId)) continue;

            const deviceClass = state.attributes?.device_class as string | undefined;
            const unit = state.attributes?.unit_of_measurement as string | undefined;
            const matchedTypes = SENSOR_TYPES.filter(t => t.matches(deviceClass, unit));
            if (matchedTypes.length === 0) continue;

            const registryEntry = hass.entities?.[entityId];
            const deviceId = registryEntry?.device_id;
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
                };
            })
            .sort((a, b) => a.name.localeCompare(b.name));
    }

    // Aktuell zugewiesene Quell-Sensoren einer Pflanze je Typ, PLUS die
    // interne Meter-Entity (wird für den replace_sensor-Service-Call als
    // meter_entity gebraucht). Gleiche Auflösungslogik wie im bestehenden
    // Replace-Sensors-Popup: plant/get_info liefert die interne Meter-Entity,
    // deren external_sensor-Attribut die tatsächliche Quelle ist.
    // power_consumption ist ein Sonderfall (Quelle sitzt auf der
    // TOTAL-kWh-Entity, nicht der berechneten CURRENT-Watt-Entity).
    static async getPlantSensorInfo(hass: HomeAssistant, plantEntityId: string): Promise<Record<string, { source?: string; meterEntityId?: string }>> {
        const info = await PlantEntityUtils.getPlantInfo(hass, plantEntityId) as
            (Record<string, { sensor?: string }> & { diagnostic_sensors?: Record<string, { entity_id?: string }> }) | null;

        const result: Record<string, { source?: string; meterEntityId?: string }> = {};
        if (!info) return result;

        for (const t of SENSOR_TYPES) {
            const meterEntityId = t.key === 'power_consumption'
                ? info.diagnostic_sensors?.total_power_consumption?.entity_id
                : info[t.key]?.sensor;
            const source = meterEntityId
                ? (hass.states[meterEntityId]?.attributes?.external_sensor as string | undefined)
                : undefined;
            result[t.key] = { source, meterEntityId };
        }
        return result;
    }

    // Position eines Satelliten-Icons auf einem Kreis um den Mittelpunkt.
    // index/total bestimmen den Winkel, radius den Abstand vom Zentrum.
    static getSatellitePosition(index: number, total: number, radius: number): { x: number; y: number } {
        const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
        return {
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius,
        };
    }
}
