import { HomeAssistant } from 'custom-card-helpers';
import { HomeAssistantEntity } from '../types/brokkoli-list-card-types';
import { isSensorField, getFieldDefinition, getSensorMapEntity, getSensorMapEntityId } from './field-definitions';

export interface SensorInfo {
    value: number;
    unit: string;
    state: string;
    min?: number | null;
    max?: number | null;
}

interface ApiSensorData {
    current?: string | number;
    min?: string | number;
    max?: string | number;
    unit_of_measurement?: string;
}

interface ApiInfo {
    [key: string]: ApiSensorData;
    diagnostic_sensors?: {
        [key: string]: ApiSensorData;
    };
}

export class SensorUtils {
    static getSensorInfo(hass: HomeAssistant, plant: HomeAssistantEntity, sensorId: string): SensorInfo {
        const field = getFieldDefinition(sensorId);
        
        // Only use entity ID from sensor map
        const entity = getSensorMapEntity(hass, plant, sensorId);
        if (entity) {
            return {
                value: Number(entity.state) || 0,
                state: entity.state,
                unit: field?.unit || entity.attributes.unit_of_measurement || '',
                min: entity.attributes.min_value,
                max: entity.attributes.max_value
            };
        }
        
        // Check if we have API info
        if (plant.attributes._apiInfo) {
            const apiInfo = plant.attributes._apiInfo as ApiInfo;
            
            // Mapping from card attributes to API attributes
            const apiSensorMap: Record<string, string> = {
                "soil_moisture": "moisture",
                "air_humidity": "humidity",
                "total_ppfd_mol_integral": "total_integral",
                "total_water_consumption": "total_water",
                "total_fertilizer_consumption": "total_fertilizer"
            };
            
            const apiSensorId = apiSensorMap[sensorId] || sensorId;
            
            // For main sensors (directly in root object)
            if (apiInfo[apiSensorId] && apiInfo[apiSensorId].current) {
                return {
                    value: Number(apiInfo[apiSensorId].current) || 0,
                    state: String(apiInfo[apiSensorId].current),
                    unit: field?.unit || apiInfo[apiSensorId].unit_of_measurement || '',
                    min: apiInfo[apiSensorId].min ? Number(apiInfo[apiSensorId].min) : null,
                    max: apiInfo[apiSensorId].max ? Number(apiInfo[apiSensorId].max) : null
                };
            }
            
            // For diagnostic sensors
            if (apiInfo.diagnostic_sensors && 
                apiInfo.diagnostic_sensors[apiSensorId] && 
                apiInfo.diagnostic_sensors[apiSensorId].current) {
                return {
                    value: Number(apiInfo.diagnostic_sensors[apiSensorId].current) || 0,
                    state: String(apiInfo.diagnostic_sensors[apiSensorId].current),
                    unit: field?.unit || apiInfo.diagnostic_sensors[apiSensorId].unit_of_measurement || '',
                    min: null,
                    max: null
                };
            }
        }
        
        // If no entity ID in sensor map or API info, return empty status
        return {
            value: 0,
            state: 'N/A',
            unit: field?.unit || '',
            min: null,
            max: null
        };
    }

    static getSensorRange(hass: HomeAssistant, plants: HomeAssistantEntity[], columnId: string): { min: number | null; max: number | null; unit: string } {
        const field = getFieldDefinition(columnId);
        
        return {
            min: null,
            max: null,
            unit: field?.unit || ''
        };
    }

    static getSensorThresholds(hass: HomeAssistant, plant: HomeAssistantEntity, columnId: string): { min: number; max: number } {
        // Grenzwerte sind eigene number-Entities. Sind sie auffindbar, zaehlen
        // sie -- der API-Schnappschuss traegt nur ihre Zahlen und ist so alt wie
        // der letzte Abruf.
        const minEntityId = getSensorMapEntityId(plant, `min_${columnId}`);
        const maxEntityId = getSensorMapEntityId(plant, `max_${columnId}`);

        if (minEntityId && maxEntityId &&
            hass.states[minEntityId]?.state !== undefined &&
            hass.states[minEntityId]?.state !== 'unavailable' &&
            hass.states[maxEntityId]?.state !== 'unavailable') {
            return {
                min: Number(hass.states[minEntityId].state) || 0,
                max: Number(hass.states[maxEntityId].state) || 100
            };
        }

        // Check if we have API info
        if (plant.attributes._apiInfo) {
            const apiInfo = plant.attributes._apiInfo as ApiInfo;
            
            // Mapping from card attributes to API attributes
            const apiColumnMap: Record<string, string> = {
                "soil_moisture": "moisture",
                "air_humidity": "humidity",
                "total_ppfd_mol_integral": "total_integral",
                "total_water_consumption": "total_water",
                "total_fertilizer_consumption": "total_fertilizer"
            };
            
            const apiColumnId = apiColumnMap[columnId] || columnId;
            
            // For main sensors
            if (apiInfo[apiColumnId] && apiInfo[apiColumnId].min !== undefined && apiInfo[apiColumnId].max !== undefined) {
                return {
                    min: Number(apiInfo[apiColumnId].min) || 0,
                    max: Number(apiInfo[apiColumnId].max) || 100
                };
            }
        }
        
        
        // Default values if nothing was found
        return { min: 0, max: 100 };
    }

    static isSensorColumn(columnId: string): boolean {
        return isSensorField(columnId);
    }

    static calculateSensorStatus(value: number, min: number, max: number): 'good' | 'bad' | 'unavailable' {
        if (isNaN(value)) return 'unavailable';
        return value >= min && value <= max ? 'good' : 'bad';
    }
} 