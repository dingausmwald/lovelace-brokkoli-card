import { BrokkoliListCardConfig } from '../types/brokkoli-list-card-types';
import { FIELD_DEFINITIONS } from './field-definitions';
import { HomeAssistant } from 'custom-card-helpers';
import { TranslationUtils } from './translation-utils';

export class ConfigUtils {
    static readonly EDITABLE_PLANT_ATTRIBUTES = FIELD_DEFINITIONS
        .filter(field => field.clickAction === 'edit')
        .map(field => field.id);

    private static getDefaultShowColumns(): Record<string, boolean> {
        // Sammle alle einzigartigen Gruppen
        const groups = new Set(FIELD_DEFINITIONS.map(field => field.group));
        
        // Erstelle ein Objekt mit allen Gruppen und Sensor-IDs
        const showColumns: Record<string, boolean> = {};
        
        // Setze Standardwerte für Gruppen (entsprechend der alten Konfiguration)
        groups.forEach(group => {
            showColumns[group] = group !== 'min_max' && group !== 'diagnostics' && group !== 'notes';
        });

        // Setze Standardwerte für Sensor-Spalten (entsprechend der alten Konfiguration)
        FIELD_DEFINITIONS
            .filter(field => field.type === 'sensor')
            .forEach(field => {
                // Nur bestimmte Sensoren standardmäßig aktivieren
                const defaultActiveSensors = [
                    'soil_moisture', 'temperature', 'conductivity', 'illuminance', 
                    'air_humidity', 'dli', 'ph', 'health', 'power_consumption'
                ];
                showColumns[field.id] = defaultActiveSensors.includes(field.id);
            });

        return showColumns;
    }

    static getDefaultConfig(hass?: HomeAssistant): BrokkoliListCardConfig {
        return {
            type: 'custom:brokkoli-list-card',
            title: hass ? TranslationUtils.translateListCard(hass, 'title') : 'Pflanzenübersicht',
            search: {
                enabled: true,
                placeholder: hass ? TranslationUtils.translateListCard(hass, 'search_placeholder') : 'Suche...'
            },
            multiselect: {
                enabled: false,
                showbydefault: false
            },
            filter: {
                enabled: true,
                showbydefault: false
            },
            add_plant: {
                enabled: true,
                position: 'bottom'
            },
            show_columns: this.getDefaultShowColumns()
        };
    }

    static getVisibleColumns(config: BrokkoliListCardConfig | undefined, hass?: HomeAssistant): Array<{id: string, name: string, group: string}> {
        const showColumns = config?.show_columns || this.getDefaultConfig(hass).show_columns;
        
        // Erstelle eine Map aller verfügbaren Spalten für schnellen Zugriff
        const columnMap = new Map<string, {id: string, name: string, group: string}>(
            FIELD_DEFINITIONS.map(field => [field.id, { 
                id: field.id, 
                name: typeof field.name === 'function' ? (hass ? field.name(hass) : field.id) : field.name, 
                group: field.group 
            }])
        );
        
        // Erstelle eine Map aller Spaltengruppen für schnellen Zugriff
        const groupMap = new Map<string, Array<{id: string, name: string, group: string}>>();
        FIELD_DEFINITIONS.forEach(field => {
            if (!groupMap.has(field.group)) {
                groupMap.set(field.group, []);
            }
            groupMap.get(field.group)!.push({ 
                id: field.id, 
                name: typeof field.name === 'function' ? (hass ? field.name(hass) : field.id) : field.name, 
                group: field.group 
            });
        });

        const visibleColumns: Array<{id: string, name: string, group: string}> = [];
        
        // Die Standardkonfiguration schaltet die Gruppe "sensors" UND jeden
        // einzelnen Sensor darin ein -- ohne diese Sperre landete damit jede
        // Sensorspalte zweimal in der Tabelle.
        const gesehen = new Set<string>();
        const aufnehmen = (spalte: {id: string, name: string, group: string}) => {
            if (gesehen.has(spalte.id)) return;
            gesehen.add(spalte.id);
            visibleColumns.push(spalte);
        };

        // Iteriere durch die Konfiguration in der Reihenfolge
        for (const [key, value] of Object.entries(showColumns)) {
            if (value) {
                // Wenn es eine Gruppe ist
                if (groupMap.has(key)) {
                    groupMap.get(key)!.forEach(aufnehmen);
                }
                // Wenn es eine Spalten-ID ist
                else if (columnMap.has(key)) {
                    aufnehmen(columnMap.get(key)!);
                }
            }
        }

        return visibleColumns;
    }

    static getAllAvailableColumns(): string[] {
        return FIELD_DEFINITIONS.map(field => field.id);
    }
} 