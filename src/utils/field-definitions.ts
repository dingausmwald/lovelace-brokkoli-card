import { HomeAssistant } from 'custom-card-helpers';
import { HomeAssistantEntity } from '../types/brokkoli-list-card-types';
import { TranslationUtils } from './translation-utils';
import { PHASES } from './constants';

export type FieldType = 'text' | 'number' | 'date' | 'select' | 'textarea' | 'sensor' | 'badge' | 'website' | 'plant-name';

export type ClickAction = 'none' | 'more-info' | 'edit';

export interface FieldService {
    domain: string;
    action: string;
    entityPrefix?: string;
    valueKey?: string;
}

export interface FieldDefinition {
    id: string;
    name: string | ((hass: HomeAssistant) => string);
    group: string;
    type: FieldType;
    clickAction: ClickAction;
    service?: FieldService;
    options?: (hass: HomeAssistant, plant: HomeAssistantEntity) => string[];
    unit?: string;
    validation?: {
        min?: number;
        max?: number;
        step?: number;
        numberType?: 'float' | 'integer';
    };
    getValue?: (hass: HomeAssistant, plant: HomeAssistantEntity) => string | number;
    isSensor?: boolean;
    hasExternalLink?: boolean;
    showStatusBar?: boolean;
    getServiceData?: (hass: HomeAssistant, plant: HomeAssistantEntity, value: string) => { device_id: string; area_id: string };
}

// Standard services
const PLANT_ATTRIBUTE_SERVICE: FieldService = {
    domain: 'plant',
    action: 'update_plant_attributes'
};

const SELECT_SERVICE: FieldService = {
    domain: 'select',
    action: 'select_option',
    entityPrefix: 'select.',
    valueKey: 'option'
};

const NUMBER_SERVICE: FieldService = {
    domain: 'number',
    action: 'set_value',
    entityPrefix: 'number.',
    valueKey: 'value'
};

// Constants
const SENSOR_FIELDS = ['air_humidity', 'soil_moisture', 'temperature', 'conductivity', 'illuminance', 'dli', 'water_consumption', 'fertilizer_consumption', 'ph'] as const;

// Helper functions
export const getSensorMapEntityId = (plant: HomeAssistantEntity, attribute: string): string | null => {
    if (plant.attributes._sensorMap && plant.attributes._sensorMap[attribute]) {
        return plant.attributes._sensorMap[attribute];
    }
    return null;
};

export const getSensorMapEntity = (hass: HomeAssistant, plant: HomeAssistantEntity, attribute: string) => {
    const entityId = getSensorMapEntityId(plant, attribute);
    return entityId ? hass?.states[entityId] : null;
};

const getEntityState = (hass: HomeAssistant, plant: HomeAssistantEntity, entityType: string, attribute: string): string => {
    // Only use _sensorMap - no fallbacks
    const entity = getSensorMapEntity(hass, plant, attribute);
    return entity?.state || '';
};

const getEntityOptions = (hass: HomeAssistant, plant: HomeAssistantEntity, entityType: string, attribute: string): string[] => {
    // Only use _sensorMap - no fallbacks
    const entity = getSensorMapEntity(hass, plant, attribute);
    return entity?.attributes?.options || [];
};



export const FIELD_DEFINITIONS: FieldDefinition[] = [
    // Name group
    {
        id: 'friendly_name',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'friendly_name'),
        group: 'name',
        type: 'plant-name',
        clickAction: 'none' as ClickAction,
        getValue: (_, plant) => plant.attributes.friendly_name || ''
    },

    // Basic group
    {
        id: 'state',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'state'),
        group: 'basic',
        type: 'badge',
        clickAction: 'more-info' as ClickAction,
        getValue: (_, plant) => plant.state
    },

    // Growing group
    {
        id: 'area',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'area'),
        group: 'growing',
        type: 'select',
        clickAction: 'edit' as ClickAction,
        service: {
            domain: 'plant',
            action: 'move_to_area'
        },
        options: (hass) => ['-', ...Object.values(hass.areas || {}).map(area => area.name).sort()],
        getValue: (hass, plant) => {
            // Gets the Location-Entity-ID and processes the state, which is an object/array
            if (plant.attributes._sensorMap && plant.attributes._sensorMap['location']) {
                const locationEntityId = plant.attributes._sensorMap['location'];
                const locationState = hass?.states[locationEntityId]?.state;

                if (locationState) {
                    try {
                        // Try to parse the state as JSON
                        const locationObject = JSON.parse(locationState);
                        return locationObject.area || '';
                    } catch {
                        // If not JSON, return the state directly
                        return locationState;
                    }
                }
            }
            return '';
        }
    },
    {
        id: 'growth_phase',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'growth_phase'),
        group: 'growing',
        type: 'select',
        clickAction: 'edit' as ClickAction,
        service: SELECT_SERVICE,
        options: (hass, plant) => getEntityOptions(hass, plant, 'select', 'growth_phase'),
        getValue: (hass, plant) => getEntityState(hass, plant, 'select', 'growth_phase')
    },
    {
        id: 'cycle',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'cycle'),
        group: 'growing',
        type: 'select',
        clickAction: 'edit' as ClickAction,
        service: SELECT_SERVICE,
        options: (hass, plant) => getEntityOptions(hass, plant, 'select', 'cycle'),
        getValue: (hass, plant) => getEntityState(hass, plant, 'select', 'cycle')
    },
    {
        id: 'pot_size',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'pot_size'),
        group: 'growing',
        type: 'number',
        clickAction: 'edit' as ClickAction,
        service: NUMBER_SERVICE,
        unit: 'L',
        validation: {
            min: 0,
            step: 0.1,
            numberType: 'float'
        },
        getValue: (hass, plant) => getEntityState(hass, plant, 'number', 'pot_size')
    },
    {
        id: 'flowering_duration',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'flowering_duration'),
        group: 'growing',
        type: 'number',
        clickAction: 'edit' as ClickAction,
        service: NUMBER_SERVICE,
        unit: 'days',
        validation: {
            min: 0,
            step: 1,
            numberType: 'integer'
        },
        getValue: (hass, plant) => getEntityState(hass, plant, 'number', 'flowering_duration')
    },

    // Genetics group
    {
        id: 'strain',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'strain'),
        group: 'genetics',
        type: 'text',
        clickAction: 'edit' as ClickAction,
        service: PLANT_ATTRIBUTE_SERVICE
    },
    {
        id: 'breeder',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'breeder'),
        group: 'genetics',
        type: 'text',
        clickAction: 'edit' as ClickAction,
        service: PLANT_ATTRIBUTE_SERVICE
    },
    {
        id: 'feminized',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'feminized'),
        group: 'genetics',
        type: 'select',
        clickAction: 'edit' as ClickAction,
        service: PLANT_ATTRIBUTE_SERVICE,
        options: (hass) => [
            TranslationUtils.translateUI(hass, 'yes'),
            TranslationUtils.translateUI(hass, 'no')
        ]
    },
    {
        id: 'original_flowering_duration',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'original_flowering_duration'),
        group: 'genetics',
        type: 'number',
        clickAction: 'edit' as ClickAction,
        service: PLANT_ATTRIBUTE_SERVICE,
        unit: 'days',
        validation: {
            min: 0,
            step: 1,
            numberType: 'integer'
        }
    },

    // Phase Begin group
    ...PHASES.map(phase => ({
        id: `${phase}_start`,
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, `${phase}_start`),
        group: 'phasebegin',
        type: 'date' as FieldType,
        clickAction: 'edit' as ClickAction,
        service: PLANT_ATTRIBUTE_SERVICE
    })),

    // Phase Duration group
    {
        id: 'seeds_duration',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'seeds_duration'),
        group: 'phaseduration',
        type: 'number' as FieldType,
        clickAction: 'edit' as ClickAction,
        service: PLANT_ATTRIBUTE_SERVICE,
        unit: 'days',
        validation: {
            min: 0,
            step: 1
        }
    },
    {
        id: 'germination_duration',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'germination_duration'),
        group: 'phaseduration',
        type: 'number' as FieldType,
        clickAction: 'edit' as ClickAction,
        service: PLANT_ATTRIBUTE_SERVICE,
        unit: 'days',
        validation: {
            min: 0,
            step: 1
        }
    },
    {
        id: 'rooting_duration',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'rooting_duration'),
        group: 'phaseduration',
        type: 'number' as FieldType,
        clickAction: 'edit' as ClickAction,
        service: PLANT_ATTRIBUTE_SERVICE,
        unit: 'days',
        validation: {
            min: 0,
            step: 1
        }
    },
    {
        id: 'growing_duration',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'growing_duration'),
        group: 'phaseduration',
        type: 'number' as FieldType,
        clickAction: 'edit' as ClickAction,
        service: PLANT_ATTRIBUTE_SERVICE,
        unit: 'days',
        validation: {
            min: 0,
            step: 1
        }
    },
    {
        id: 'flower_duration',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'flower_duration'),
        group: 'phaseduration',
        type: 'number' as FieldType,
        clickAction: 'edit' as ClickAction,
        service: PLANT_ATTRIBUTE_SERVICE,
        unit: 'days',
        validation: {
            min: 0,
            step: 1
        }
    },
    {
        id: 'removed_duration',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'removed_duration'),
        group: 'phaseduration',
        type: 'number' as FieldType,
        clickAction: 'edit' as ClickAction,
        service: PLANT_ATTRIBUTE_SERVICE,
        unit: 'days',
        validation: {
            min: 0,
            step: 1
        }
    },
    {
        id: 'harvested_duration',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'harvested_duration'),
        group: 'phaseduration',
        type: 'number' as FieldType,
        clickAction: 'edit' as ClickAction,
        service: PLANT_ATTRIBUTE_SERVICE,
        unit: 'days',
        validation: {
            min: 0,
            step: 1
        }
    },

    // Sensors group
    {
        id: 'soil_moisture',
        name: (hass: HomeAssistant) => TranslationUtils.translateSensor(hass, 'soil_moisture'),
        group: 'sensors',
        type: 'sensor',
        clickAction: 'more-info' as ClickAction,
        unit: '%',
        isSensor: true,
        showStatusBar: true,
        getValue: (hass, plant) => getEntityState(hass, plant, 'sensor', 'soil_moisture')
    },
    {
        id: 'temperature',
        name: (hass: HomeAssistant) => TranslationUtils.translateSensor(hass, 'temperature'),
        group: 'sensors',
        type: 'sensor',
        clickAction: 'more-info' as ClickAction,
        unit: '°C',
        isSensor: true,
        showStatusBar: true,
        getValue: (hass, plant) => getEntityState(hass, plant, 'sensor', 'temperature')
    },
    {
        id: 'conductivity',
        name: (hass: HomeAssistant) => TranslationUtils.translateSensor(hass, 'conductivity'),
        group: 'sensors',
        type: 'sensor',
        clickAction: 'more-info' as ClickAction,
        unit: 'µS/cm',
        isSensor: true,
        showStatusBar: true,
        getValue: (hass, plant) => getEntityState(hass, plant, 'sensor', 'conductivity')
    },
    {
        id: 'ph',
        name: (hass: HomeAssistant) => TranslationUtils.translateSensor(hass, 'ph'),
        group: 'sensors',
        type: 'sensor',
        clickAction: 'more-info' as ClickAction,
        unit: 'pH',
        isSensor: true,
        showStatusBar: true,
        getValue: (hass, plant) => getEntityState(hass, plant, 'sensor', 'ph')
    },
    {
        id: 'illuminance',
        name: (hass: HomeAssistant) => TranslationUtils.translateSensor(hass, 'illuminance'),
        group: 'sensors',
        type: 'sensor',
        clickAction: 'more-info' as ClickAction,
        unit: 'lx',
        isSensor: true,
        showStatusBar: true,
        getValue: (hass, plant) => getEntityState(hass, plant, 'sensor', 'illuminance')
    },
    {
        id: 'air_humidity',
        name: (hass: HomeAssistant) => TranslationUtils.translateSensor(hass, 'air_humidity'),
        group: 'sensors',
        type: 'sensor',
        clickAction: 'more-info' as ClickAction,
        unit: '%',
        isSensor: true,
        showStatusBar: true,
        getValue: (hass, plant) => getEntityState(hass, plant, 'sensor', 'air_humidity')
    },
    {
        id: 'dli',
        name: (hass: HomeAssistant) => TranslationUtils.translateSensor(hass, 'dli'),
        group: 'sensors',
        type: 'sensor',
        clickAction: 'more-info' as ClickAction,
        unit: 'mol/d⋅m²',
        isSensor: true,
        showStatusBar: true,
        getValue: (hass, plant) => getEntityState(hass, plant, 'sensor', 'dli')
    },
    {
        id: 'water_consumption',
        name: (hass: HomeAssistant) => TranslationUtils.translateSensor(hass, 'water_consumption'),
        group: 'sensors',
        type: 'sensor',
        clickAction: 'more-info' as ClickAction,
        unit: 'ml',
        isSensor: true,
        showStatusBar: true,
        getValue: (hass, plant) => getEntityState(hass, plant, 'sensor', 'water_consumption')
    },
    {
        id: 'fertilizer_consumption',
        name: (hass: HomeAssistant) => TranslationUtils.translateSensor(hass, 'fertilizer_consumption'),
        group: 'sensors',
        type: 'sensor',
        clickAction: 'more-info' as ClickAction,
        unit: 'ml',
        isSensor: true,
        showStatusBar: true,
        getValue: (hass, plant) => getEntityState(hass, plant, 'sensor', 'fertilizer_consumption')
    },
    {
        id: 'health',
        name: (hass: HomeAssistant) => TranslationUtils.translateSensor(hass, 'health'),
        group: 'sensors',
        type: 'sensor',
        clickAction: 'more-info' as ClickAction,
        unit: '',
        isSensor: true,
        showStatusBar: true,
        getValue: (hass, plant) => getEntityState(hass, plant, 'sensor', 'health')
    },
    {
        id: 'power_consumption',
        name: (hass: HomeAssistant) => TranslationUtils.translateSensor(hass, 'power_consumption'),
        group: 'sensors',
        type: 'sensor',
        clickAction: 'more-info' as ClickAction,
        unit: 'W',
        isSensor: true,
        showStatusBar: true,
        getValue: (hass, plant) => getEntityState(hass, plant, 'sensor', 'power_consumption')
    },

    // Diagnostics group
    {
        id: 'ppfd_mol',
        name: (hass: HomeAssistant) => TranslationUtils.translateDiagnostics(hass, 'ppfd_mol'),
        group: 'diagnostics',
        type: 'sensor',
        clickAction: 'more-info' as ClickAction,
        unit: 'µmol/m²/s',
        isSensor: true,
        showStatusBar: false,
        getValue: (hass, plant) => {
            const value = getEntityState(hass, plant, 'sensor', 'ppfd_mol');
            return value ? Number(value).toFixed(6) : value;
        }
    },
    {
        id: 'total_ppfd_mol_integral',
        name: (hass: HomeAssistant) => TranslationUtils.translateDiagnostics(hass, 'total_ppfd_mol_integral'),
        group: 'diagnostics',
        type: 'sensor',
        clickAction: 'more-info' as ClickAction,
        unit: 'mol/m²',
        isSensor: true,
        showStatusBar: false,
        getValue: (hass, plant) => getEntityState(hass, plant, 'sensor', 'total_ppfd_mol_integral')
    },
    {
        id: 'total_water_consumption',
        name: (hass: HomeAssistant) => TranslationUtils.translateDiagnostics(hass, 'total_water_consumption'),
        group: 'diagnostics',
        type: 'sensor',
        clickAction: 'more-info' as ClickAction,
        unit: 'L',
        isSensor: true,
        showStatusBar: false,
        getValue: (hass, plant) => getEntityState(hass, plant, 'sensor', 'total_water_consumption')
    },
    {
        id: 'total_fertilizer_consumption',
        name: (hass: HomeAssistant) => TranslationUtils.translateDiagnostics(hass, 'total_fertilizer_consumption'),
        group: 'diagnostics',
        type: 'sensor',
        clickAction: 'more-info' as ClickAction,
        unit: 'ml',
        isSensor: true,
        showStatusBar: false,
        getValue: (hass, plant) => getEntityState(hass, plant, 'sensor', 'total_fertilizer_consumption')
    },
    {
        id: 'total_power_consumption',
        name: (hass: HomeAssistant) => TranslationUtils.translateDiagnostics(hass, 'total_power_consumption'),
        group: 'diagnostics',
        type: 'sensor',
        clickAction: 'more-info' as ClickAction,
        unit: 'kWh',
        isSensor: true,
        showStatusBar: false,
        getValue: (hass, plant) => getEntityState(hass, plant, 'sensor', 'total_power_consumption')
    },
    {
        id: 'energy_cost',
        name: (hass: HomeAssistant) => TranslationUtils.translateDiagnostics(hass, 'energy_cost'),
        group: 'diagnostics',
        type: 'sensor',
        clickAction: 'more-info' as ClickAction,
        unit: '€',
        isSensor: true,
        showStatusBar: false,
        getValue: (hass, plant) => getEntityState(hass, plant, 'sensor', 'energy_cost')
    },

    // Min/Max group
    ...SENSOR_FIELDS.flatMap(sensor => [
        {
            id: `min_${sensor}`,
            name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, `min_${sensor}`),
            group: 'min_max',
            type: 'number' as FieldType,
            clickAction: 'edit' as ClickAction,
            service: NUMBER_SERVICE,
            getValue: (hass: HomeAssistant, plant: HomeAssistantEntity) => getEntityState(hass, plant, 'number', `min_${sensor}`)
        },
        {
            id: `max_${sensor}`,
            name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, `max_${sensor}`),
            group: 'min_max',
            type: 'number' as FieldType,
            clickAction: 'edit' as ClickAction,
            service: NUMBER_SERVICE,
            getValue: (hass: HomeAssistant, plant: HomeAssistantEntity) => getEntityState(hass, plant, 'number', `max_${sensor}`)
        }
    ]),

    // Details group
    {
        id: 'timestamp',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'timestamp'),
        group: 'details',
        type: 'text' as FieldType,
        clickAction: 'none' as ClickAction,
        getValue: (_: HomeAssistant, plant: HomeAssistantEntity) => plant.attributes.timestamp || ''
    },
    {
        id: 'difficulty',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'difficulty'),
        group: 'details',
        type: 'text' as FieldType,
        clickAction: 'edit' as ClickAction,
        service: PLANT_ATTRIBUTE_SERVICE,
        getValue: (_: HomeAssistant, plant: HomeAssistantEntity) => plant.attributes.difficulty || ''
    },
    {
        id: 'yield',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'yield'),
        group: 'details',
        type: 'text' as FieldType,
        clickAction: 'edit' as ClickAction,
        service: PLANT_ATTRIBUTE_SERVICE,
        getValue: (_: HomeAssistant, plant: HomeAssistantEntity) => plant.attributes.yield || ''
    },
    {
        id: 'mold_resistance',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'mold_resistance'),
        group: 'details',
        type: 'text' as FieldType,
        clickAction: 'edit' as ClickAction,
        service: PLANT_ATTRIBUTE_SERVICE,
        getValue: (_: HomeAssistant, plant: HomeAssistantEntity) => plant.attributes.mold_resistance || ''
    },
    {
        id: 'hunger',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'hunger'),
        group: 'details',
        type: 'text' as FieldType,
        clickAction: 'edit' as ClickAction,
        service: PLANT_ATTRIBUTE_SERVICE,
        getValue: (_: HomeAssistant, plant: HomeAssistantEntity) => plant.attributes.hunger || ''
    },
    {
        id: 'effects',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'effects'),
        group: 'details',
        type: 'text' as FieldType,
        clickAction: 'edit' as ClickAction,
        service: PLANT_ATTRIBUTE_SERVICE,
        getValue: (_: HomeAssistant, plant: HomeAssistantEntity) => plant.attributes.effects || ''
    },
    {
        id: 'smell',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'smell'),
        group: 'details',
        type: 'text' as FieldType,
        clickAction: 'edit' as ClickAction,
        service: PLANT_ATTRIBUTE_SERVICE,
        getValue: (_: HomeAssistant, plant: HomeAssistantEntity) => plant.attributes.smell || ''
    },
    {
        id: 'taste',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'taste'),
        group: 'details',
        type: 'text' as FieldType,
        clickAction: 'edit' as ClickAction,
        service: PLANT_ATTRIBUTE_SERVICE,
        getValue: (_: HomeAssistant, plant: HomeAssistantEntity) => plant.attributes.taste || ''
    },
    {
        id: 'phenotype',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'phenotype'),
        group: 'details',
        type: 'text' as FieldType,
        clickAction: 'edit' as ClickAction,
        service: PLANT_ATTRIBUTE_SERVICE,
        getValue: (_: HomeAssistant, plant: HomeAssistantEntity) => plant.attributes.phenotype || ''
    },
    {
        id: 'growth_stretch',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'growth_stretch'),
        group: 'details',
        type: 'text' as FieldType,
        clickAction: 'edit' as ClickAction,
        service: PLANT_ATTRIBUTE_SERVICE,
        getValue: (_: HomeAssistant, plant: HomeAssistantEntity) => plant.attributes.growth_stretch || ''
    },
    {
        id: 'flower_stretch',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'flower_stretch'),
        group: 'details',
        type: 'text' as FieldType,
        clickAction: 'edit' as ClickAction,
        service: PLANT_ATTRIBUTE_SERVICE,
        getValue: (_: HomeAssistant, plant: HomeAssistantEntity) => plant.attributes.flower_stretch || ''
    },

    // Notes group
    {
        id: 'notes',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'notes'),
        group: 'notes',
        type: 'textarea' as FieldType,
        clickAction: 'edit' as ClickAction,
        service: PLANT_ATTRIBUTE_SERVICE,
        getValue: (_: HomeAssistant, plant: HomeAssistantEntity) => plant.attributes.notes || ''
    },
    {
        id: 'website',
        name: (hass: HomeAssistant) => TranslationUtils.translateField(hass, 'website'),
        group: 'notes',
        type: 'text' as FieldType,
        clickAction: 'edit' as ClickAction,
        service: PLANT_ATTRIBUTE_SERVICE,
        getValue: (_: HomeAssistant, plant: HomeAssistantEntity) => plant.attributes.website || '',
        hasExternalLink: true
    }
];

export const getFieldDefinition = (id: string): FieldDefinition | undefined => {
    return FIELD_DEFINITIONS.find(field => field.id === id);
};

export const getFieldsByGroup = (group: string): FieldDefinition[] => {
    return FIELD_DEFINITIONS.filter(field => field.group === group);
};

export const isFieldEditable = (id: string): boolean => {
    return getFieldDefinition(id)?.clickAction === 'edit';
};

export const getFieldType = (id: string): string => {
    return getFieldDefinition(id)?.type || 'text';
};

export const getFieldService = (id: string): FieldService | undefined => {
    return getFieldDefinition(id)?.service;
};

export const isSensorField = (id: string): boolean => {
    return getFieldDefinition(id)?.isSensor || false;
};

export const getFieldValue = (id: string, hass: HomeAssistant, plant: HomeAssistantEntity): string | number => {
    const field = getFieldDefinition(id);
    if (!field) return '';

    if (field.getValue) {
        return field.getValue(hass, plant);
    }

    return plant.attributes[id]?.toString() || '';
};

export const getFieldOptions = (id: string, hass: HomeAssistant, plant: HomeAssistantEntity): string[] => {
    const field = getFieldDefinition(id);
    if (!field?.options) return [];

    return field.options(hass, plant);
};

export const getFieldName = (id: string, hass: HomeAssistant): string => {
    const field = getFieldDefinition(id);
    if (!field) return id;

    if (typeof field.name === 'function') {
        return field.name(hass);
    }

    return field.name;
};