import { HomeAssistant } from 'custom-card-helpers';
import { HomeAssistantEntity } from '../types/brokkoli-list-card-types';
import { getFieldDefinition, getSensorMapEntityId } from './field-definitions';

export interface EditingCell {
    entityId: string;
    column: string;
}

export interface EventHandlerOptions {
    hass: HomeAssistant;
    plant: HomeAssistantEntity;
    columnId: string;
    multiSelectMode: boolean;
    selectedPlants: Set<string>;
    editingCell: EditingCell | null;
    onUpdate: () => void;
}

export class EventUtils {
    static async handleInputUpdate(
        event: Event | KeyboardEvent,
        options: EventHandlerOptions,
        type: 'number' | 'select' | 'text' | 'date'
    ): Promise<void> {
        if (event instanceof KeyboardEvent && event.key === 'Escape') {
            options.onUpdate();
            return;
        }

        if (event instanceof KeyboardEvent && event.key !== 'Enter' && type !== 'select') {
            return;
        }

        const input = event.target as HTMLInputElement | HTMLSelectElement;
        let value: string | number = input.value;

        if (type === 'number') {
            const field = getFieldDefinition(options.columnId);
            const numberType = field?.validation?.numberType || 'integer';
            value = numberType === 'integer' ? parseInt(value) : parseFloat(value);
            if (isNaN(value)) return;
        }

        try {
            if (options.multiSelectMode && options.selectedPlants.size > 0) {
                await this.applyBulkUpdate(value, options.columnId, options);
            } else {
                await this.applySingleUpdate(value, options);
            }
            options.onUpdate();
        } catch (error) {
            console.error(`Error updating ${options.columnId}:`, error);
        }
    }

    private static async applyBulkUpdate(
        value: string | number,
        columnId: string,
        options: EventHandlerOptions
    ): Promise<void> {
        const { hass, selectedPlants } = options;
        
        for (const entityId of selectedPlants) {
            await this.applySingleUpdate(value, {
                ...options,
                plant: hass.states[entityId] as HomeAssistantEntity
            });
        }
    }

    private static async applySingleUpdate(
        value: string | number,
        options: EventHandlerOptions
    ): Promise<void> {
        const { hass, plant, columnId } = options;
        const field = getFieldDefinition(columnId);
        const service = field?.service;

        if (!service) return;

        if (service.action === 'move_to_area') {
            // Create an artificial event for handleAreaUpdate
            const event = new Event('change');
            Object.defineProperty(event, 'target', {
                value: { value: value.toString() }
            });
            await EventUtils.handleAreaUpdate(event, options);
            return;
        }

        // Use entity ID from sensor map exclusively
        const entityId = getSensorMapEntityId(hass, plant, columnId);
        if (service.entityPrefix && entityId) {
            const serviceParams: Record<string, unknown> = {
                entity_id: entityId
            };

            if (service.valueKey) {
                serviceParams[service.valueKey] = value;
            } else {
                serviceParams[columnId] = value;
            }

            await hass.callService(service.domain, service.action, serviceParams);
        } else if (service.entityPrefix) {
            // Der Dienst gehoert zu einer Helfer-Entity (select./number.). Ist die
            // nicht auffindbar, hat der Aufruf kein Ziel -- ihn stattdessen an die
            // plant-Entity zu schicken, aendert nichts und fuellt nur das Protokoll
            // mit "Referenced entities plant.x are missing or not currently available".
            console.warn(`[BROKKOLI] Keine Helfer-Entity fuer ${columnId} an ${plant.entity_id}`);
            return;
        } else {
            // Attribute liegen direkt auf der Pflanze.
            const serviceParams: Record<string, unknown> = {
                entity_id: plant.entity_id
            };

            if (service.valueKey) {
                serviceParams[service.valueKey] = value;
            } else {
                serviceParams[columnId] = value;
            }

            await hass.callService(service.domain, service.action, serviceParams);
        }
    }

    static async handleAreaUpdate(
        event: Event,
        options: EventHandlerOptions
    ): Promise<void> {
        const { hass, plant, multiSelectMode, selectedPlants } = options;
        const select = event.target as HTMLSelectElement;
        const areaName = select.value;
        const areaId = areaName === '-' ? '' : Object.entries(hass.areas || {}).find(([, area]) => area.name === areaName)?.[0];

        if (multiSelectMode && selectedPlants.size > 0) {
            for (const entityId of selectedPlants) {
                const entity = hass.entities[entityId];
                if (entity?.device_id) {
                    await hass.callService('plant', 'move_to_area', {
                        device_id: entity.device_id,
                        area_id: areaId || ''
                    });
                }
            }
        } else {
            const entity = hass.entities[plant.entity_id];
            if (entity?.device_id) {
                await hass.callService('plant', 'move_to_area', {
                    device_id: entity.device_id,
                    area_id: areaId || ''
                });
            }
        }

        options.onUpdate();
    }

    static handleSearch(event: Event, onSearch: (query: string) => void): void {
        const input = event.target as HTMLInputElement;
        onSearch(input.value.toLowerCase());
    }

    static handleRowClick(
        event: Event,
        plant: HomeAssistantEntity,
        columnId: string,
        showMoreInfo: (entityId: string) => void,
        hass?: HomeAssistant
    ): void {
        event.stopPropagation();
        const field = getFieldDefinition(columnId);

        if (!field) {
            showMoreInfo(plant.entity_id);
            return;
        }

        // Only use entity ID from sensor map, no fallbacks
        const entityId = getSensorMapEntityId(hass, plant, columnId);
        if (entityId) {
            showMoreInfo(entityId);
            return;
        }

        // If no entity ID is available in the sensor map, show the plant directly
        showMoreInfo(plant.entity_id);
    }

    static handleInputEvent(
        event: Event | KeyboardEvent,
        type: 'number' | 'select' | 'text' | 'date',
        columnId: string
    ): string | number | undefined {
        const input = event.target as HTMLInputElement;
        let value: string | number = input.value;

        if (type === 'number') {
            const field = getFieldDefinition(columnId);
            const numberType = field?.validation?.numberType || 'integer';
            value = numberType === 'integer' ? parseInt(value) : parseFloat(value);
            if (isNaN(value)) return;
        }

        return value;
    }
} 