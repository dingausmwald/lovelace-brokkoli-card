import { HomeAssistant } from 'custom-card-helpers';
import { HomeAssistantEntity, BrokkoliListCardConfig } from '../types/brokkoli-list-card-types';
import { FilterUtils, FilterState } from './filter-utils';
import { EventUtils } from './event-utils';
import { CellTypeUtils } from './cell-type-utils';
import { isSensorField, getSensorMapEntityId } from './field-definitions';

export interface FlowerListState {
    sortColumn: string;
    sortDirection: 'asc' | 'desc';
    editingCell: {entityId: string, column: string} | null;
    searchQuery: string;
    multiSelectMode: boolean;
    selectedPlants: Set<string>;
    filterMode: boolean;
    filterState: FilterState;
    showGallery: boolean;
    galleryEntityId: string | null;
    galleryImages: string[];
}

export class StateManager {
    private state: FlowerListState;
    private hass: HomeAssistant;
    private config?: BrokkoliListCardConfig;
    private requestUpdate: () => void;

    constructor(
        hass: HomeAssistant,
        config: BrokkoliListCardConfig | undefined,
        requestUpdate: () => void
    ) {
        this.hass = hass;
        this.config = config;
        this.requestUpdate = requestUpdate;
        this.state = this.getInitialState();
    }

    /**
     * Seed the active filters from `filter.filters` in the card config.
     *
     * The YAML shape differs from the runtime one: value lists are plain
     * arrays there and Sets here, while sensor ranges are the same object
     * either way. Columns with an empty list are dropped, because an empty
     * Set would match nothing and hide every row.
     */
    private getConfiguredFilters(): FilterState['activeFilters'] {
        const configured = this.config?.filter?.filters;
        if (!configured) return {};

        const active: FilterState['activeFilters'] = {};
        for (const [column, value] of Object.entries(configured)) {
            if (Array.isArray(value)) {
                if (value.length > 0) active[column] = new Set(value);
            } else if (value && typeof value === 'object') {
                active[column] = value;
            }
        }
        return active;
    }

    private getInitialState(): FlowerListState {
        return {
            sortColumn: 'friendly_name',
            sortDirection: 'asc',
            editingCell: null,
            searchQuery: '',
            multiSelectMode: false,
            selectedPlants: new Set(),
            filterMode: false,
            filterState: {
                activeFilters: this.getConfiguredFilters(),
                entityTypes: new Set(['plant', 'cycle'])
            },
            showGallery: false,
            galleryEntityId: null,
            galleryImages: []
        };
    }

    // Getter methods
    getState(): FlowerListState {
        return this.state;
    }

    updateConfig(config: BrokkoliListCardConfig): void {
        this.config = config;
    }

    updateHass(hass: HomeAssistant): void {
        this.hass = hass;
    }

    // Sort-Handler
    handleSort(column: string): void {
        if (this.state.sortColumn === column) {
            this.state.sortDirection = this.state.sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            this.state.sortColumn = column;
            this.state.sortDirection = 'asc';
        }
        this.requestUpdate();
    }

    // Cell-Handler
    handleCellClick(
        e: Event, 
        plant: HomeAssistantEntity, 
        columnId: string, 
        dispatchEvent: (event: CustomEvent) => void
    ): void {
        e.stopPropagation();

        if (this.state.multiSelectMode && this.state.selectedPlants.size === 0) {
            this.state.selectedPlants.add(plant.entity_id);
        }

        const clickAction = CellTypeUtils.getClickAction(columnId);
        
        switch(clickAction) {
            case 'edit':
                this.state.editingCell = {
                    entityId: plant.entity_id,
                    column: columnId
                };
                break;
            case 'more-info': {
                let entityId = plant.entity_id;
                
                // Only use entity ID from sensor map, no fallbacks
                if (isSensorField(columnId)) {
                    const sensorEntityId = getSensorMapEntityId(plant, columnId);
                    if (sensorEntityId) {
                        entityId = sensorEntityId;
                    }
                }
                    
                const event = new CustomEvent('hass-more-info', {
                    detail: { entityId },
                    bubbles: true,
                    composed: true
                });
                dispatchEvent(event);
                break;
            }
            case 'none':
            default:
                // No action
                break;
        }
        
        this.requestUpdate();
    }

    // Row handler
    handleRowClick(e: Event, plant: HomeAssistantEntity, columnId: string, dispatchEvent: (event: CustomEvent) => void): void {
        e.stopPropagation();
        
        // Forward the click to handleCellClick
        this.handleCellClick(e, plant, columnId, dispatchEvent);
    }

    // Search handler
    handleSearch(e: Event): void {
        EventUtils.handleSearch(e, (query: string) => {
            this.state.searchQuery = query;
            this.requestUpdate();
        });
    }

    // Input handler
    async handleInputUpdate(
        event: Event | KeyboardEvent,
        plant: HomeAssistantEntity,
        columnId: string,
        type: 'number' | 'select' | 'text' | 'date'
    ): Promise<void> {
        await EventUtils.handleInputUpdate(event, {
            hass: this.hass,
            plant,
            columnId,
            multiSelectMode: this.state.multiSelectMode,
            selectedPlants: this.state.selectedPlants,
            editingCell: this.state.editingCell,
            onUpdate: () => {
                this.state.editingCell = null;
                this.requestUpdate();
            }
        }, type);
    }

    // Area handler
    async handleAreaUpdate(event: Event, plant: HomeAssistantEntity): Promise<void> {
        await EventUtils.handleAreaUpdate(event, {
            hass: this.hass,
            plant,
            columnId: 'area',
            multiSelectMode: this.state.multiSelectMode,
            selectedPlants: this.state.selectedPlants,
            editingCell: this.state.editingCell,
            onUpdate: () => {
                this.state.editingCell = null;
                this.requestUpdate();
            }
        });
    }

    // Toggle handler
    toggleMultiSelect(): void {
        this.state.multiSelectMode = !this.state.multiSelectMode;
        
        // If we exit multi-select mode, clear the selection
        if (!this.state.multiSelectMode) {
            this.state.selectedPlants.clear();
        }
        
        this.requestUpdate();
    }

    togglePlantSelection(entityId: string, event: Event): void {
        event.preventDefault();
        event.stopPropagation();
        
        const wasSelected = this.state.selectedPlants.has(entityId);
        
        // Toggle selection
        if (wasSelected) {
            this.state.selectedPlants.delete(entityId);
        } else {
            this.state.selectedPlants.add(entityId);
        }
        
        // Trigger an event, even if no plants are selected anymore
        this.sendEntitySelectedEvent();
        
        this.requestUpdate();
    }
    
    // Sends an event with the currently selected plant
    private sendEntitySelectedEvent(): void {
        if (!this.config?.identifier) {
            return;
        }
        
        if (this.state.selectedPlants.size === 0) {
            // If no plants are selected, send null as selectedEntityId
            const entitySelectedEvent = new CustomEvent('brokkoli-card-entity-selected', {
                bubbles: true,
                composed: true,
                detail: {
                    sourceIdentifier: this.config.identifier,
                    selectedEntityId: null,
                    selectedEntities: []
                }
            });
            
            window.dispatchEvent(entitySelectedEvent);
            return;
        }
        
        // Convert the set to an array for the selected plants
        const selectedPlantsArray = Array.from(this.state.selectedPlants);
        
        // Use the last selected plant as the main selection
        const selectedEntityId = selectedPlantsArray[selectedPlantsArray.length - 1];
        
        // Check if the entity actually exists
        if (!selectedEntityId || !this.hass.states[selectedEntityId]) {
            // No warning output - silently ignore
            return;
        }
        
        const entitySelectedEvent = new CustomEvent('brokkoli-card-entity-selected', {
            bubbles: true,
            composed: true,
            detail: {
                sourceIdentifier: this.config.identifier,
                selectedEntityId,
                selectedEntities: selectedPlantsArray
            }
        });
        
        window.dispatchEvent(entitySelectedEvent);
    }

    toggleFilterMode(): void {
        this.state.filterMode = !this.state.filterMode;
        this.requestUpdate();
    }

    toggleFilter(column: string, value: string | { min: number; max: number }): void {
        FilterUtils.toggleFilter(column, value, this.state.filterState);
        this.requestUpdate();
    }

    toggleEntityType(type: string): void {
        FilterUtils.toggleEntityType(type, this.state.filterState);
        this.requestUpdate();
    }

    // Helper methods
    getCursorStyle(columnId: string): string {
        return CellTypeUtils.getCursorStyle(columnId);
    }

    clearSearch(): void {
        this.state.searchQuery = "";
        this.requestUpdate();
    }

    // Gallery handler
    async handleGalleryOpen(entityId: string): Promise<void> {
        if (!this.hass) return;
        
        const plantEntity = this.hass.states[entityId];
        if (!plantEntity) return;
        
        // Collect images for the gallery
        const images: string[] = [];
        
        // Add main image if available
        if (plantEntity.attributes.entity_picture) {
            images.push(plantEntity.attributes.entity_picture);
        }
        
        // Get additional images from the API
        if (plantEntity.attributes.images && Array.isArray(plantEntity.attributes.images)) {
            const downloadPath = plantEntity.attributes.download_path || '/local/images/plants/';
            plantEntity.attributes.images.forEach((img: string) => {
                images.push(`${downloadPath}${img}`);
            });
        }
        
        // Update gallery state
        this.state.showGallery = true;
        this.state.galleryEntityId = entityId;
        this.state.galleryImages = images;
        
        this.requestUpdate();
    }

    closeGallery(): void {
        this.state.showGallery = false;
        this.state.galleryEntityId = null;
        this.requestUpdate();
    }
} 