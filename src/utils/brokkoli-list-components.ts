import { html, HTMLTemplateResult } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
import { HomeAssistantEntity } from '../types/brokkoli-list-card-types';
import { FilterState, FilterUtils } from './filter-utils';
import { SensorUtils } from './sensor-utils';
import { TranslationUtils } from './translation-utils';


export class BrokkoliListComponents {
    static renderHeader(title: string | undefined, hass?: HomeAssistant): HTMLTemplateResult {
        if (title === '') return html``;
        
        const defaultTitle = hass ? TranslationUtils.translateListCard(hass, 'title') : 'Pflanzenübersicht';
        return html`
            <div class="card-header">
                <div class="name">${title || defaultTitle}</div>
            </div>
        `;
    }

    static renderToolbar(
        config: { multiselect?: { enabled?: boolean }; search?: { enabled?: boolean; placeholder?: string }; filter?: { enabled?: boolean } },
        searchQuery: string,
        filterMode: boolean,
        multiSelectMode: boolean,
        onFilterToggle: () => void,
        onMultiSelectToggle: () => void,
        onSearch: (e: Event) => void,
        onSearchReset: () => void,
        hass?: HomeAssistant
    ): HTMLTemplateResult {
        if (!config?.multiselect?.enabled && !config?.search?.enabled && !config?.filter?.enabled) {
            return html``;
        }

        const filterCloseText = hass ? TranslationUtils.translateListCard(hass, 'filter_close') : 'Filter schließen';
        const filterText = hass ? TranslationUtils.translateListCard(hass, 'filter') : 'Filter';
        const multiSelectEndText = hass ? TranslationUtils.translateListCard(hass, 'multiselect_end') : 'Mehrfachauswahl beenden';
        const multiSelectText = hass ? TranslationUtils.translateListCard(hass, 'multiselect') : 'Mehrfachauswahl';
        const searchResetText = hass ? TranslationUtils.translateListCard(hass, 'search_reset') : 'Suche zurücksetzen';
        const searchDefaultText = hass ? TranslationUtils.translateListCard(hass, 'search_default') : 'Suche...';

        return html`
            <div class="toolbar">
                ${config?.filter?.enabled ? html`
                    <ha-icon-button
                        .label=${filterMode ? filterCloseText : filterText}
                        @click=${onFilterToggle}
                    >
                        <ha-icon icon="mdi:${filterMode ? "filter-off" : "filter"}"></ha-icon>
                    </ha-icon-button>
                ` : ""}
                ${config?.multiselect?.enabled ? html`
                    <ha-icon-button
                        .label=${multiSelectMode ? multiSelectEndText : multiSelectText}
                        @click=${onMultiSelectToggle}
                    >
                        <ha-icon icon="mdi:${multiSelectMode ? "close" : "checkbox-multiple-outline"}"></ha-icon>
                    </ha-icon-button>
                ` : ""}
                ${config?.search?.enabled ? html`
                    <div class="search-container">
                        <ha-icon icon="mdi:magnify"></ha-icon>
                        <input
                            type="text"
                            .value=${searchQuery}
                            placeholder="${config?.search?.placeholder || searchDefaultText}"
                            @input=${onSearch}
                        >
                        ${searchQuery ? html`
                            <ha-icon-button
                                .label=${searchResetText}
                                @click=${onSearchReset}
                            >
                                <ha-icon icon="mdi:close"></ha-icon>
                            </ha-icon-button>
                        ` : ""}
                    </div>
                ` : ""}
            </div>
        `;
    }

    static renderTableHeader(
        columns: Array<{id: string, name: string}>,
        multiSelectMode: boolean,
        sortColumn: string,
        sortDirection: 'asc' | 'desc',
        onSort: (columnId: string) => void,
        showActions = false
    ): HTMLTemplateResult {
        return html`
            <thead>
                <tr>
                    ${multiSelectMode ? html`
                        <th class="checkbox-column"></th>
                    ` : ''}
                    ${columns.map(column => html`
                        <th @click=${() => onSort(column.id)} data-column="${column.id}">
                            ${column.name}
                            ${sortColumn === column.id ? 
                                html`<ha-icon icon="mdi:${sortDirection === 'asc' ? 'arrow-up' : 'arrow-down'}"></ha-icon>` : ''}
                        </th>
                    `)}
                    ${showActions ? html`<th class="actions-column"></th>` : ''}
                </tr>
            </thead>
        `;
    }

    static renderTableRow(
        plant: HomeAssistantEntity,
        columns: Array<{id: string, name: string}>,
        multiSelectMode: boolean,
        selectedPlants: Set<string>,
        onPlantSelect: (entityId: string, event: Event) => void,
        onCellClick: (event: Event, plant: HomeAssistantEntity, columnId: string) => void,
        onRowClick: (event: Event, plant: HomeAssistantEntity) => void,
        getCursorStyle: (columnId: string) => string,
        getCellValue: (plant: HomeAssistantEntity, columnId: string) => string | HTMLTemplateResult,
        actions?: HTMLTemplateResult
    ): HTMLTemplateResult {
        return html`
            <tr>
                ${multiSelectMode ? html`
                    <td>
                        <input 
                            type="checkbox"
                            .checked=${selectedPlants.has(plant.entity_id)}
                            @change=${(e: Event) => onPlantSelect(plant.entity_id, e)}
                            class="row-select"
                        >
                    </td>
                ` : ''}
                ${columns.map(column => html`
                    <td data-column="${column.id}" 
                        @click=${(e: Event) => {
                            if (multiSelectMode && selectedPlants.size > 0) {
                                onCellClick(e, plant, column.id);
                            } else if (!multiSelectMode) {
                                onRowClick(e, plant);
                            }
                        }}
                        style="cursor: ${getCursorStyle(column.id)}"
                    >
                        ${getCellValue(plant, column.id)}
                    </td>
                `)}
                ${actions ? html`<td class="actions-cell">${actions}</td>` : ''}
            </tr>
        `;
    }

    static renderFilterSidebar(
        columns: Array<{id: string, name: string}>,
        filterState: FilterState,
        onEntityTypeToggle: (type: string) => void,
        onFilterToggle: (column: string, value: string | { min: number; max: number }) => void,
        hass: HomeAssistant,
        plantEntities: HomeAssistantEntity[]
    ): HTMLTemplateResult {
        const entityTypeText = TranslationUtils.translateListCard(hass, 'entity_type');
        const plantsText = TranslationUtils.translateListCard(hass, 'plants');
        const cyclesText = TranslationUtils.translateListCard(hass, 'cycles');
        
        return html`
            <div class="filter-sidebar">
                ${columns.map(column => html`
                    ${column.id === columns[0].id ? html`
                        <div class="filter-group entity-type-filter">
                            <div class="filter-header">${entityTypeText}</div>
                            <label class="filter-item">
                                <input type="checkbox"
                                    .checked=${filterState.entityTypes.has('plant')}
                                    @change=${() => onEntityTypeToggle('plant')}
                                >
                                ${plantsText}
                            </label>
                            <label class="filter-item">
                                <input type="checkbox"
                                    .checked=${filterState.entityTypes.has('cycle')}
                                    @change=${() => onEntityTypeToggle('cycle')}
                                >
                                ${cyclesText}
                            </label>
                        </div>
                    ` : ''}
                    ${this.renderColumnFilter(column, filterState, onFilterToggle, hass, plantEntities)}
                `)}
            </div>
        `;
    }

    private static renderColumnFilter(
        column: {id: string, name: string},
        filterState: FilterState,
        onFilterToggle: (column: string, value: string | { min: number; max: number }) => void,
        hass: HomeAssistant,
        plantEntities: HomeAssistantEntity[]
    ): HTMLTemplateResult {
        if (SensorUtils.isSensorColumn(column.id)) {
            const range = SensorUtils.getSensorRange(hass, plantEntities, column.id);
            const currentFilter = filterState.activeFilters[column.id] as { min: number; max: number } || range;
            return html`
                <div class="filter-range">
                    <div class="filter-header">${column.name}</div>
                    <div class="filter-range-inputs">
                        <input
                            class="filter-input"
                            type="number"
                            .value=${currentFilter.min}
                            @change=${(e: Event) => {
                                const input = e.target as HTMLInputElement;
                                const value = Number(input.value);
                                onFilterToggle(column.id, {
                                    min: value,
                                    max: (filterState.activeFilters[column.id] as { min: number; max: number })?.max || range.max
                                });
                            }}
                            step="0.1"
                        >
                        <span>${TranslationUtils.translateListCard(hass, 'filter_range_to')}</span>
                        <input
                            class="filter-input"
                            type="number"
                            .value=${currentFilter.max}
                            @change=${(e: Event) => {
                                const input = e.target as HTMLInputElement;
                                const value = Number(input.value);
                                onFilterToggle(column.id, {
                                    min: (filterState.activeFilters[column.id] as { min: number; max: number })?.min || range.min,
                                    max: value
                                });
                            }}
                            step="0.1"
                        >
                        <span>${range.unit}</span>
                    </div>
                </div>
            `;
        }

        return html`
            <div class="filter-group">
                <div class="filter-header">${column.name}</div>
                ${FilterUtils.getUniqueValues(hass, plantEntities, column.id).map(value => html`
                    <label class="filter-item">
                        <input type="checkbox"
                            .checked=${(filterState.activeFilters[column.id] as Set<string>)?.has(value) || false}
                            @change=${() => onFilterToggle(column.id, value)}
                        >
                        ${value}
                    </label>
                `)}
            </div>
        `;
    }

    static renderAddPlantButton(onButtonClick: () => void, hass?: HomeAssistant): HTMLTemplateResult {
        const addPlantText = hass ? TranslationUtils.translateListCard(hass, 'add_plant') : 'Neue Pflanze hinzufügen';
        return html`
            <tr class="add-plant-row">
                <td colspan="100%">
                    <div class="add-plant-text" @click=${onButtonClick}>
                        <ha-icon icon="mdi:plus"></ha-icon>
                        <span>${addPlantText}</span>
                    </div>
                </td>
            </tr>
        `;
    }
} 