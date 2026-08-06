import { HomeAssistant } from 'custom-card-helpers';
import { HomeAssistantEntity } from '../types/brokkoli-list-card-types';

export class PlantEntityUtils {
    // Global cache for plant information
    private static _plantInfoCache: Record<string, unknown> = {};
    
    // Timeouts for scheduled updates
    private static _plantRetryTimeouts: Record<string, number> = {};
    
    // Timestamp of last update per plant
    private static _plantLastLoaded: Record<string, number> = {};

    static async getPlantInfo(hass: HomeAssistant, plantEntityId: string): Promise<unknown> {
        // If data is in cache, use it
        if (this._plantInfoCache[plantEntityId]) {
            return this._plantInfoCache[plantEntityId];
        }
        
        // Otherwise start an API call and schedule regular updates
        return this._loadPlantInfoWithRetry(hass, plantEntityId);
    }
    
    // Loads plant data and schedules regular refresh
    private static async _loadPlantInfoWithRetry(hass: HomeAssistant, plantEntityId: string): Promise<unknown> {
        try {
            // Update the timestamp
            this._plantLastLoaded[plantEntityId] = Date.now();
            
            const response = await hass.callWS({
                type: "plant/get_info",
                entity_id: plantEntityId,
            });
            
            // The actual data is in the "result" object
            const result = typeof response === 'object' && response !== null && 'result' in response 
                ? (response as { result: Record<string, unknown> }).result 
                : null;
            
            // Store result in cache
            if (result) {
                this._plantInfoCache[plantEntityId] = result;
            }
            
            // Schedule next update for this plant in 5 seconds
            this._scheduleNextUpdate(hass, plantEntityId);
            
            return result;
        } catch (err) {
            console.error(`[PLANT-ENTITY] Error in API call for ${plantEntityId}:`, err);
            
            // On error: try again in 10 seconds
            this._scheduleNextUpdate(hass, plantEntityId, true);
            
            return null;
        }
    }
    
    // Schedules the next update for a specific plant
    private static _scheduleNextUpdate(hass: HomeAssistant, plantEntityId: string, isError: boolean = false): void {
        // If a timeout already exists, clear it
        if (this._plantRetryTimeouts[plantEntityId]) {
            window.clearTimeout(this._plantRetryTimeouts[plantEntityId]);
            delete this._plantRetryTimeouts[plantEntityId];
        }
        
        // Set timeout for next update
        this._plantRetryTimeouts[plantEntityId] = window.setTimeout(() => {
            delete this._plantRetryTimeouts[plantEntityId];
            // Execute another API call
            this._loadPlantInfoWithRetry(hass, plantEntityId);
        }, isError ? 10000 : 5000); // 10 seconds on error, otherwise 5 seconds
    }
    
    // Starts the initial loading of all plant data with a slight delay
    static initPlantDataLoading(hass: HomeAssistant, plantEntities: string[]): void {
        if (!hass || plantEntities.length === 0) return;
        
        // Clear all existing timeouts
        this.clearAllTimeouts();
        
        // Start loading for each plant with slightly different initial delay
        plantEntities.forEach((entityId) => {
            // If data already exists in cache, plan only the next fetch
            if (this._plantInfoCache[entityId]) {
                if (!this._plantRetryTimeouts[entityId]) {
                    this._scheduleNextUpdate(hass, entityId);
                }
                return;
            }
            
            // Initial delay to avoid API overload
            const initialDelay = 500 + Math.random() * 2000; // 0.5-2.5 seconds initial delay
            
            // Set a timeout for the initial fetch
            this._plantRetryTimeouts[entityId] = window.setTimeout(() => {
                delete this._plantRetryTimeouts[entityId];
                this._loadPlantInfoWithRetry(hass, entityId);
            }, initialDelay);
        });
    }
    
    // Deletes all timeouts (e.g., when the component is removed)
    static clearAllTimeouts(): void {
        Object.values(this._plantRetryTimeouts).forEach(timeoutId => {
            window.clearTimeout(timeoutId);
        });
        this._plantRetryTimeouts = {};
    }

    static getPlantEntities(hass: HomeAssistant, filter: 'plant' | 'cycle' | 'all' = 'all'): HomeAssistantEntity[] {
        return Object.values(hass.states)
            .filter((entity): entity is HomeAssistantEntity => {
                if (
                    typeof entity !== 'object' || 
                    entity === null || 
                    !('entity_id' in entity) || 
                    !('attributes' in entity) ||
                    typeof entity.entity_id !== 'string'
                ) {
                    return false;
                }
                
                const isPlant = entity.entity_id.startsWith('plant.');
                const isCycle = entity.entity_id.startsWith('cycle.') && 'member_count' in (entity.attributes as Record<string, unknown>);
                
                if (filter === 'plant') return isPlant;
                if (filter === 'cycle') return isCycle;
                return isPlant || isCycle;
            });
    }

    static async updatePlantInfo(
        hass: HomeAssistant,
        plantEntities: HomeAssistantEntity[],
        plantInfo: Map<string, unknown>
    ): Promise<Map<string, unknown>> {
        const updatedPlantInfo = new Map(plantInfo);
        
        // Determine plant entity IDs
        const entityIds = plantEntities.map(plant => plant.entity_id);
        
        // Start initial loading of plant information
        this.initPlantDataLoading(hass, entityIds);
        
        // Check cache for each plant and update if necessary
        for (const plant of plantEntities) {
            const cachedInfo = this._plantInfoCache[plant.entity_id] as Record<string, unknown> | null;
            if (cachedInfo) {
                updatedPlantInfo.set(plant.entity_id, cachedInfo);
            } else if (!updatedPlantInfo.has(plant.entity_id)) {
                // If no data in cache and not in plantInfo, set to null
                // Data will be loaded asynchronously by initPlantDataLoading
                updatedPlantInfo.set(plant.entity_id, null);
            }
        }
        
        return updatedPlantInfo;
    }

    static togglePlantSelection(
        entityId: string,
        selectedPlants: Set<string>,
        event?: Event
    ): Set<string> {
        event?.stopPropagation();
        const updatedSelection = new Set(selectedPlants);
        
        if (updatedSelection.has(entityId)) {
            updatedSelection.delete(entityId);
        } else {
            updatedSelection.add(entityId);
        }
        
        return updatedSelection;
    }

    static clearPlantSelection(): Set<string> {
        return new Set();
    }
}