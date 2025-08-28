import { DropdownOption } from "@marcokreeft/ha-editor-formbuilder/dist/interfaces";
import { HomeAssistant } from "custom-card-helpers";

export const CARD_NAME = "brokkoli-card";
export const CARD_EDITOR_NAME = "brokkoli-card-editor";

// Central phase constants - should match field-definitions.ts
// export const PHASES = ['seed', 'germination', 'rooting', 'growth', 'flowering', 'removed', 'harvested'] as const;
export const PHASES = ['seeds', 'germination', 'rooting', 'growth', 'flowering', 'removed', 'harvested'] as const;

export const default_show_bars = [
    "moisture",
    "conductivity",
    "temperature",
    "illuminance",
    "humidity",
    "dli",
    "water_consumption",
    "fertilizer_consumption",
    "ppfd",
    "power_consumption",
    "ph",
    "health"
];

export const default_show_elements = [
    "header",
    "attributes",
    "options"
];

export const default_option_elements = [
    "attributes",
    "timeline",
    "consumption",
    "history",
    "details"
];

export const elementOptions = [
    { label: 'Header', value: 'header' },
    { label: 'Attribute Bars', value: 'attributes' },
    { label: 'Options Menu', value: 'options' },
    { label: 'Timeline', value: 'timeline' },
    { label: 'Consumption', value: 'consumption' },
    { label: 'History', value: 'history' },
    { label: 'Details', value: 'details' }
];

export const missingImage = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIGZvY3VzYWJsZT0iZmFsc2UiIHJvbGU9ImltZyIgYXJpYS1oaWRkZW49InRydWUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICAgIDxnPgogICAgICA8IS0tP2xpdCQ0MTM0MjMxNjkkLS0+PHBhdGggZD0iTTMsMTNBOSw5IDAgMCwwIDEyLDIyQzEyLDE3IDcuOTcsMTMgMywxM00xMiw1LjVBMi41LDIuNSAwIDAsMSAxNC41LDhBMi41LDIuNSAwIDAsMSAxMiwxMC41QTIuNSwyLjUgMCAwLDEgOS41LDhBMi41LDIuNSAwIDAsMSAxMiw1LjVNNS42LDEwLjI1QTIuNSwyLjUgMCAwLDAgOC4xLDEyLjc1QzguNjMsMTIuNzUgOS4xMiwxMi41OCA5LjUsMTIuMzFDOS41LDEyLjM3IDkuNSwxMi40MyA5LjUsMTIuNUEyLjUsMi41IDAgMCwwIDEyLDE1QTIuNSwyLjUgMCAwLDAgMTQuNSwxMi41QzE0LjUsMTIuNDMgMTQuNSwxMi4zNyAxNC41LDEyLjMxQzE0Ljg4LDEyLjU4IDE1LjM3LDEyLjc1IDE1LjksMTIuNzVDMTcuMjgsMTIuNzUgMTguNCwxMS42MyAxOC40LDEwLjI1QzE4LjQsOS4yNSAxNy44MSw4LjQgMTYuOTcsOEMxNy44MSw3LjYgMTguNCw2Ljc0IDE4LjQsNS43NUMxOC40LDQuMzcgMTcuMjgsMy4yNSAxNS45LDMuMjVDMTUuMzcsMy4yNSAxNC44OCwzLjQxIDE0LjUsMy42OUMxNC41LDMuNjMgMTQuNSwzLjU2IDE0LjUsMy41QTIuNSwyLjUgMCAwLDAgMTIsMUEyLjUsMi41IDAgMCwwIDkuNSwzLjVDOS41LDMuNTYgOS41LDMuNjMgOS41LDMuNjlDOS4xMiwzLjQxIDguNjMsMy4yNSA4LjEsMy4yNUEyLjUsMi41IDAgMCwwIDUuNiw1Ljc1QzUuNiw2Ljc0IDYuMTksNy42IDcuMDMsOEM2LjE5LDguNCA1LjYsOS4yNSA1LjYsMTAuMjVNMTIsMjJBOSw5IDAgMCwwIDIxLDEzQzE2LDEzIDEyLDE3IDEyLDIyWiI+PC9wYXRoPgogICAgICA8L2c+Cjwvc3ZnPgo=";

export const plantAttributes : DropdownOption[] = [
  { label: 'Moisture', value: 'moisture' },
  { label: 'Conductivity', value: 'conductivity' },
  { label: 'Temperature', value: 'temperature' },
  { label: 'Illuminance', value: 'illuminance' },
  { label: 'Humidity', value: 'humidity' },
  { label: 'Daily Light Integral', value: 'dli' },
  { label: 'Water Consumption', value: 'water_consumption' },
  { label: 'Fertilizer Consumption', value: 'fertilizer_consumption' },
  { label: 'PPFD', value: 'ppfd' },
  { label: 'Power Consumption', value: 'power_consumption' },
  { label: 'pH', value: 'ph' },
  { label: 'Health', value: 'health' }
];

// Growth phase icons by index (language-independent)
const GROWTH_PHASE_ICONS = [
    'mdi:seed',           // Index 0: Seed/Samen
    'mdi:seed-outline',   // Index 1: Germination/Keimen
    'mdi:sprout',         // Index 2: Rooting/Wurzeln
    'mdi:leaf',           // Index 3: Growth/Wachstum
    'mdi:flower',         // Index 4: Flowering/Blüte
    'mdi:delete',         // Index 5: Removed/Entfernt
    'mdi:content-cut'     // Index 6: Harvested/Geerntet
];

// Treatment icons by index (language-independent)
const TREATMENT_ICONS = [
    'mdi:help-circle',    // Index 0: None/Keine
    'mdi:content-cut',    // Index 1: Cut/Schneiden
    'mdi:arrow-down-bold-circle', // Index 2: Super Cropping
    'mdi:arrow-up-bold-circle',   // Index 3: Topping
    'mdi:candy',          // Index 4: Lollipop
    'mdi:scissors-cutting', // Index 5: FIM
    'mdi:leaf',           // Index 6: Rib
    'mdi:spray',          // Index 7: Spray Pest
    'mdi:water'           // Index 8: Spray Water
];

// Index-based growth phase icon function
export const getGrowthPhaseIconByIndex = (index: number): string => {
    if (index >= 0 && index < GROWTH_PHASE_ICONS.length) {
        return GROWTH_PHASE_ICONS[index];
    }
    return 'mdi:help-circle';
};

// Index-based treatment icon function
export const getTreatmentIconByIndex = (index: number): string => {
    if (index >= 0 && index < TREATMENT_ICONS.length) {
        return TREATMENT_ICONS[index];
    }
    return 'mdi:help-circle';
};

// Enhanced treatment icon function that works with both index and entity options
export const getTreatmentIcon = (treatment: string, hass?: HomeAssistant, plantEntity?: { attributes?: Record<string, unknown> }): string => {
    // If we have Home Assistant and plant entity, try to get the index from the treatment entity
    if (hass && plantEntity?.attributes?._sensorMap && typeof plantEntity.attributes._sensorMap === 'object') {
        const sensorMap = plantEntity.attributes._sensorMap as Record<string, unknown>;
        const treatmentEntityId = sensorMap.treatment as string;

        if (treatmentEntityId) {
            const treatmentEntity = hass.states[treatmentEntityId];

            if (treatmentEntity?.attributes?.options && Array.isArray(treatmentEntity.attributes.options)) {
                const options = treatmentEntity.attributes.options;
                const currentIndex = options.findIndex((option: string) => option === treatment);

                if (currentIndex !== -1) {
                    return getTreatmentIconByIndex(currentIndex);
                }
            }
        }
    }

    // Fallback to string-based matching for backwards compatibility
    switch(treatment.toLowerCase()) {
        case '':
        case 'none':
        case 'keine':
            return 'mdi:help-circle';
        case 'cut':
        case 'schneiden':
            return 'mdi:content-cut';
        case 'super cropping':
            return 'mdi:arrow-down-bold-circle';
        case 'topping':
            return 'mdi:arrow-up-bold-circle';
        case 'lollipop':
            return 'mdi:candy';
        case 'fim':
            return 'mdi:scissors-cutting';
        case 'rib':
            return 'mdi:leaf';
        case 'spray pest':
        case 'spray water':
            return treatment.includes('pest') ? 'mdi:spray' : 'mdi:water';
        default:
            return 'mdi:help-circle';
    }
};

// Enhanced growth phase icon function that works with both index and entity options
export const getGrowthPhaseIcon = (phase: string, hass?: HomeAssistant, plantEntity?: { attributes?: Record<string, unknown> }): string => {
    // If we have Home Assistant and plant entity, try to get the index from the growth_phase entity
    if (hass && plantEntity?.attributes?._sensorMap && typeof plantEntity.attributes._sensorMap === 'object') {
        const sensorMap = plantEntity.attributes._sensorMap as Record<string, unknown>;
        const growthPhaseEntityId = sensorMap.growth_phase as string;

        if (growthPhaseEntityId) {
            const growthPhaseEntity = hass.states[growthPhaseEntityId];

            if (growthPhaseEntity?.attributes?.options && Array.isArray(growthPhaseEntity.attributes.options)) {
                const options = growthPhaseEntity.attributes.options;
                const currentIndex = options.findIndex((option: string) => option === phase);

                if (currentIndex !== -1) {
                    return getGrowthPhaseIconByIndex(currentIndex);
                }
            }
        }
    }

    // Fallback to string-based matching for backwards compatibility
    switch(phase.toLowerCase()) {
        case 'seeds':
        case 'samen':
            return 'mdi:seed';
        case 'germination':
        case 'keimen':
            return 'mdi:seed-outline';
        case 'rooting':
        case 'wurzeln':
            return 'mdi:sprout';
        case 'growth':
        case 'wachstum':
            return 'mdi:leaf';
        case 'flower':
        case 'blüte':
            return 'mdi:flower';
        case 'harvested':
        case 'geerntet':
            return 'mdi:content-cut';
        case 'removed':
        case 'entfernt':
            return 'mdi:delete';
        default:
            return 'mdi:help-circle';
    }
};
