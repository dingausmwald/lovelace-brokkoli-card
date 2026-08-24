import { HomeAssistant } from 'custom-card-helpers';

export interface SensorSource {
    entity_id: string;
    name: string;
}

interface SourceState {
    attributes?: {
        device_class?: string;
        unit_of_measurement?: string;
        friendly_name?: string;
        external_sensor?: string;
    };
}

/**
 * Die Sensortypen einer Pflanze in der Reihenfolge, in der Dialoge sie zeigen.
 *
 * `field` ist der Name im clone_plant-Service, `label` der Übersetzungsschlüssel
 * unter `frontend.sensors`. Beim Stromverbrauch hängt die Zuweisung an der
 * Gesamt-Entity (kWh), nicht an der berechneten Watt-Entity — deshalb dort das
 * Label "Gesamter Stromverbrauch".
 */
export const SENSOR_SOURCE_TYPES: Array<{
    key: string;
    field: string;
    label: string;
    icon: string;
}> = [
    { key: 'temperature', field: 'temperature_sensor', label: 'temperature', icon: 'mdi:thermometer' },
    { key: 'moisture', field: 'moisture_sensor', label: 'soil_moisture', icon: 'mdi:water-percent' },
    { key: 'conductivity', field: 'conductivity_sensor', label: 'conductivity', icon: 'mdi:flash' },
    { key: 'illuminance', field: 'illuminance_sensor', label: 'illuminance', icon: 'mdi:brightness-5' },
    { key: 'humidity', field: 'humidity_sensor', label: 'air_humidity', icon: 'mdi:water' },
    { key: 'ph', field: 'ph_sensor', label: 'ph', icon: 'mdi:ph' },
    { key: 'power_consumption', field: 'power_consumption_sensor', label: 'total_power_consumption', icon: 'mdi:power-plug' },
];

/**
 * Alle Entities, die als Quelle für einen Sensortyp in Frage kommen.
 *
 * Sensoren der Plant-Integration selbst fliegen raus — erkennbar am Attribut
 * `external_sensor`, das nur sie tragen, und damit sprachneutral. Erkannt wird
 * über device_class ODER Einheit: eine falsch deklarierte Entity soll sich
 * zuweisen lassen, hier ist zu viel anbieten harmlos.
 */
export const getSourceSensors = (hass: HomeAssistant, type: string): SensorSource[] => {
    return Object.entries(hass?.states ?? {})
        .filter(([entity_id, state]) => {
            if (!entity_id.startsWith('sensor.')) return false;
            const attrs = (state as SourceState).attributes;
            if (attrs && 'external_sensor' in attrs) return false;

            const deviceClass = attrs?.device_class;
            const unit = attrs?.unit_of_measurement;
            switch (type) {
                case 'temperature':
                    return deviceClass === 'temperature' || unit === '°C' || unit === '°F';
                case 'moisture':
                    return deviceClass === 'moisture' || (deviceClass === 'humidity' && unit === '%');
                case 'illuminance':
                    return deviceClass === 'illuminance' || unit === 'lx' || unit === 'lm';
                case 'humidity':
                    return deviceClass === 'humidity' || unit === '%';
                case 'conductivity':
                    return deviceClass === 'conductivity' || unit === 'µS/cm' || unit === 'μS/cm' || unit === 'mS/cm';
                case 'ph':
                    return deviceClass === 'ph' || unit === 'pH';
                case 'power_consumption':
                    return deviceClass === 'power' || deviceClass === 'energy' ||
                        unit === 'W' || unit === 'kW' || unit === 'kWh' || unit === 'Wh';
                default:
                    return false;
            }
        })
        .map(([entity_id, state]) => ({
            entity_id,
            name: (state as SourceState).attributes?.friendly_name || entity_id
        }));
};
