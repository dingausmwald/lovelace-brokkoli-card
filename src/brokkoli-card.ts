import { CSSResult, HTMLTemplateResult, LitElement, html, TemplateResult } from 'lit';
import {customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, LovelaceCardEditor } from 'custom-card-helpers';
import { style } from './styles';
import { DisplayType, BrokkoliCardConfig, HomeAssistantEntity, PlantInfo } from './types/brokkoli-card-types';
import * as packageJson from '../package.json';
import { renderAttributes, renderBattery } from './utils/attributes';
import { CARD_EDITOR_NAME, CARD_NAME, default_show_bars, default_show_elements, default_option_elements, initial_expanded_options, missingImage, getGrowthPhaseIcon } from './utils/constants';
import { moreInfo } from './utils/utils';
import { TranslationUtils } from './utils/translation-utils';
import { getSourceSensors } from './utils/sensor-source-utils';
import './components/plant-clone-dialog';
import './components/gallery';
import './components/timeline';
import './components/graph';
import './components/consumption';
import './components/history';

console.info(
    `%c BROKKOLI-CARD %c ${packageJson.version}`,
    'color: cyan; background: black; font-weight: bold;',
    'color: darkblue; background: white; font-weight: bold;'
);

/* eslint-disable @typescript-eslint/no-explicit-any */
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
    type: CARD_NAME,
    name: 'Brokkoli card',
    preview: true,
    description: 'Custom brokkoli card for https://github.com/Olen/homeassistant-plant',
});
/* eslint-disable @typescript-eslint/no-explicit-any */

@customElement(CARD_NAME)
export default class BrokkoliCard extends LitElement {
    @property() _hass?: any;
    @property() config?: BrokkoliCardConfig;
    @state() private _expanded: { [key: string]: boolean } = {
        attributes: false,
        timeline: false,
        consumption: false,
        history: false,
        details: false,
    };
    @state() private _expandedOrder: string[] = [];
    @state() private _showGallery = false;
    @state() private _currentImageIndex = 0;
    @state() private _nextImageIndex = 1;
    @state() private _isFading = false;
    @state() private _activePopup: string | null = null;
    @state() private _showFlyoutMenu = false;
    @state() private _detailsEditing = false;
    private _detailsDraft: Record<string, string> = {};
    @state() private _popupData: any = {};
    @state() private _showPlantDropdown = false;
    @state() public selectedPlantEntity: string | null = null;
    @state() private _listenToSelector: string | null = null;
    @state() private _selectedEntities: string[] = [];
    private _imageRotationInterval?: NodeJS.Timeout;

    private stateObj: HomeAssistantEntity | undefined;
    private previousFetchDate: number;
    private _imageUrls: string[] = [];

    plantinfo: PlantInfo;

    private getGrowthPhaseIcon(phase: string): string {
        return getGrowthPhaseIcon(phase, this._hass, this.stateObj);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        if (this._imageRotationInterval) {
            clearInterval(this._imageRotationInterval);
        }
        
        // Event-Listener für Cycle-Member-Wechsel entfernen
        window.removeEventListener('brokkoli-card-cycle-member-selected', this._handleCycleMemberSelected);
        
        // Event-Listener für Card-Selection entfernen
        window.removeEventListener('brokkoli-card-entity-selected', this._handleCardEntitySelected);
    }

    connectedCallback() {
        super.connectedCallback();
        // Bildrotation wird jetzt in get_data() gestartet, wenn die Bilder geladen sind
        
        // Event-Listener für Cycle-Member-Wechsel hinzufügen
        window.addEventListener('brokkoli-card-cycle-member-selected', this._handleCycleMemberSelected);
        
        // Event-Listener für Card-Selection hinzufügen
        window.addEventListener('brokkoli-card-entity-selected', this._handleCardEntitySelected);
    }

    set hass(hass: HomeAssistant) {
        this._hass = hass;
        
        // Initialize translations before first render
        TranslationUtils.initializeTranslations(hass).then(() => {
            this.requestUpdate();
        });
        
        // Wenn eine Plant ausgewählt wurde, verwende diese statt der Entity aus der Konfiguration
        if (this.selectedPlantEntity) {
            this.stateObj = hass.states[this.selectedPlantEntity];
        } else if (this.config?.entity) {
            this.stateObj = hass.states[this.config.entity];
        } else {
            // Wenn weder eine ausgewählte Plant noch eine konfigurierte Entity vorhanden ist
            this.stateObj = undefined;
        }

        if (!this.previousFetchDate) {
            this.previousFetchDate = 0;
        }
        
        // Nur get_data aufrufen wenn eine Entity verfügbar ist
        // Bei listen_to ohne ausgewählte Entity soll kein WebSocket-Aufruf gemacht werden
        const hasValidEntity = this.selectedPlantEntity || this.config?.entity;
        
        if (hasValidEntity && Date.now() > this.previousFetchDate + 1000) {
            this.previousFetchDate = Date.now();
            this.get_data(hass).then(() => {
                this.requestUpdate();
            });
        }
    }

    public static async getConfigElement(): Promise<LovelaceCardEditor> {
        await import("./editor");
        return document.createElement(CARD_EDITOR_NAME) as LovelaceCardEditor;
    }

    static getStubConfig(ha: HomeAssistant) {
        const isPlant = (entity: HomeAssistantEntity | unknown): entity is HomeAssistantEntity => {
            if (typeof entity == 'object' && 'entity_id' in entity && typeof entity.entity_id == 'string' && 
                (entity.entity_id.indexOf('plant.') === 0 || entity.entity_id.indexOf('cycle.') === 0)) {
                return !!entity;
            }
        }
        let supportedEntities: Array<any> = [];
        try {
            supportedEntities = Object.values(ha.states).filter(isPlant);
        }
        catch(e) {
            console.info(`Unable to get ha-data: ${e}`);
        }
        const entity = supportedEntities.length > 0 ? supportedEntities[0].entity_id : 'plant.my_plant';

        return {
            entity: entity,
            battery_sensor: "sensor.myflower_battery",
            show_bars: [...default_show_bars],
            show_elements: [...default_show_elements],
            option_elements: [...default_option_elements],
            default_expanded_options: [...initial_expanded_options]
        }
    }

    setConfig(config: BrokkoliCardConfig): void {
        if (!config.entity && !config.listen_to) {
            throw new Error(this._hass ? TranslationUtils.translateUI(this._hass, 'config_error_entity_required') : "Du musst entweder eine Entity oder listen_to definieren");
        }

        // Erstelle ein neues Konfigurationsobjekt mit Standardwerten
        this.config = {
            ...config,
            // Setze Standardwerte nur, wenn die entsprechenden Eigenschaften nicht definiert sind
            show_elements: config.show_elements || [...default_show_elements],
            option_elements: config.option_elements || [...default_option_elements],
            default_expanded_options: config.default_expanded_options || [...initial_expanded_options]
        };
        
        // Setze den Card-Selektor, falls vorhanden
        if (config.listen_to) {
            this._listenToSelector = config.listen_to;
        }
        
        // Setze _expandedOrder zurück, wenn die Konfiguration geändert wird
        this._expandedOrder = [];
        
        // Setze die standardmäßig geöffneten Optionsbereiche, wenn konfiguriert
        if (this.config.default_expanded_options?.length) {
            // Filtere nur gültige Optionen
            const validOptions = this.config.default_expanded_options.filter(
                option => this.config.option_elements.includes(option)
            );
            
            // Setze den Expanded-Status für jede gültige Option
            this._expanded = {
                ...this._expanded,
                ...Object.fromEntries(validOptions.map(option => [option, true]))
            };
            
            // Setze die Reihenfolge der geöffneten Optionen
            this._expandedOrder = [...validOptions];
        }
    }

    // Hilfsfunktion zum Rendern eines Elements basierend auf der Konfiguration
    private _renderElement(element: string): TemplateResult {
        switch(element) {
            case 'header':
                return this._renderHeader();
            case 'attributes':
                return this._renderAttributes();
            case 'options':
                return this._renderOptions();
            case 'timeline':
                return this._renderTimeline();
            case 'consumption':
                return this._renderConsumption();
            case 'history':
                return this._renderHistory();
            case 'details':
                return this._renderDetails();
            default:
                return html``;
        }
    }

    private _renderHeader(): TemplateResult {
        const headerCssClass = this.config.display_type === DisplayType.Compact ? "header-compact" : "header";
        const plantName = this.stateObj.entity_id.split('.')[1];
        
        // Prüfe, ob es sich um einen Cycle handelt
        const isCycle = this.stateObj.entity_id.startsWith('cycle.');
        const isSelectedPlant = this.selectedPlantEntity !== null;
        
        // Informationen für Plants oder Cycles unterschiedlich darstellen
        let infoLine = '';
        let memberPlants: string[] = [];
        
        // Hole die member_plants aus dem ursprünglichen Cycle, wenn eine Plant ausgewählt ist
        if (isSelectedPlant && this._popupData.originalEntity) {
            const originalCycleName = this._popupData.originalEntity.split('.')[1];
            const growthPhaseEntity = this._hass.states[`select.${originalCycleName}_growth_phase`];
            
            if (growthPhaseEntity && growthPhaseEntity.attributes.member_plants) {
                memberPlants = growthPhaseEntity.attributes.member_plants;
            }
        } else if (isCycle) {
            // Bei einem Cycle die member_plants direkt aus dem Cycle holen.
            // entity_id der growth_phase aus plant/get_info (sprachneutral).
            const cycleGrowthPhaseId = (this.plantinfo as { result?: { helpers?: { growth_phase?: { entity_id?: string } } } })?.result?.helpers?.growth_phase?.entity_id;
            const growthPhaseEntity = cycleGrowthPhaseId ? this._hass.states[cycleGrowthPhaseId] : undefined;

            if (growthPhaseEntity && growthPhaseEntity.attributes.member_plants) {
                memberPlants = growthPhaseEntity.attributes.member_plants;
            }
        }
        
        // Setze die Info-Zeile basierend auf dem Typ (Cycle oder Plant)
        if (isCycle) {
            // Bei einem Cycle zeigen wir die Anzahl der Plants an
            const memberCount = this.stateObj.attributes.member_count || 0;
            const plantsText = TranslationUtils.translateUI(this._hass, 'plants_count');
            infoLine = `${memberCount} ${plantsText}`;
        } else if (this._listenToSelector && this._selectedEntities.length > 1) {
            // Bei Mehrfachauswahl zeigen wir die Anzahl der ausgewählten Pflanzen an
            const selectedText = TranslationUtils.translateUI(this._hass, 'plants_selected');
            infoLine = `${this._selectedEntities.length} ${selectedText}`;
        } else {
            // Bei einer Plant zeigen wir Strain und Breeder an
            infoLine = this.stateObj.attributes.strain + " - " + this.stateObj.attributes.breeder;
        }
        
        // Helper-entity_ids aus plant/get_info-Response (sprachneutral, locale-unabhängig).
        const helpers = (this.plantinfo as { result?: { helpers?: Record<string, { entity_id?: string }> } })?.result?.helpers;
        const growthPhaseEntityId = helpers?.growth_phase?.entity_id;
        const potSizeEntityId = helpers?.pot_size?.entity_id;
        const growthPhaseEntity = growthPhaseEntityId ? this._hass.states[growthPhaseEntityId] : undefined;
        const potSizeEntity = potSizeEntityId ? this._hass.states[potSizeEntityId] : undefined;

        const unavailableText = TranslationUtils.translateUI(this._hass, 'unavailable');
        const growthPhase = growthPhaseEntity ? TranslationUtils.translateGrowthPhase(this._hass, growthPhaseEntity.state) : unavailableText;
        const potSize = potSizeEntity ? potSizeEntity.state + 'L' : unavailableText;

        // Prüfe, ob der Header das einzige Element ist
        const showDivider = this.config.show_elements.length > 1;

        return html`
            <div class="${headerCssClass}">
                <div class="menu-button" @click="${this._toggleFlyoutMenu}">
                    <ha-icon icon="mdi:dots-vertical"></ha-icon>
                </div>
                ${this._showFlyoutMenu ? this._renderFlyoutMenu() : ''}
                <div class="image-container">
                    <img class="back-image" 
                         src="${this._imageUrls[this._nextImageIndex] || this._imageUrls[this._currentImageIndex] || missingImage}">
                    <img class="front-image ${this._isFading ? 'fade' : ''}" 
                         src="${this._imageUrls[this._currentImageIndex] || missingImage}" 
                         @click="${() => this._showGallery = true}">
                </div>
                <span id="name" @click="${() => moreInfo(this, this.stateObj.entity_id)}"> ${this.stateObj.attributes.friendly_name
                } <ha-icon .icon="mdi:${this.stateObj.state.toLowerCase() == "problem"
                    ? "alert-circle-outline"
                    : ""
                }"></ha-icon>
                </span>
                <span id="battery">${renderBattery(this)}</span>
                ${isCycle || isSelectedPlant || (this._listenToSelector !== null && this._selectedEntities.length > 0) ? 
                    html`
                    <div id="species" class="plant-dropdown-container">
                        <div @click="${this._togglePlantDropdown}" class="clickable-plants">
                            ${infoLine}
                            <ha-icon icon="mdi:chevron-down"></ha-icon>
                        </div>
                        ${this._showPlantDropdown ? this._renderPlantDropdown(memberPlants) : ''}
                    </div>
                    ` : 
                    html`<span id="species">${infoLine}</span>`
                }
                ${this.config.display_type !== DisplayType.Compact ? html`
                <div id="status-container">
                    <span @click="${() => potSizeEntityId && moreInfo(this, potSizeEntityId)}">
                        <ha-icon icon="mdi:cup"></ha-icon>${potSize}
                    </span>
                    <span @click="${() => growthPhaseEntityId && moreInfo(this, growthPhaseEntityId)}">
                        <ha-icon icon="${this.getGrowthPhaseIcon(growthPhaseEntity?.state ?? growthPhase)}"></ha-icon>${growthPhase}
                    </span>
                    </div>
                ` : ''}
                </div>
                ${showDivider ? html`<div class="divider"></div>` : ''}
            ${this._renderPopups()}
        `;
    }

    private _togglePlantDropdown(e: Event) {
        e.stopPropagation();
        this._showPlantDropdown = !this._showPlantDropdown;
        this.requestUpdate();
        
        // Wenn das Dropdown geöffnet wird, fügen wir einen Event-Listener hinzu, um es zu schließen, wenn außerhalb geklickt wird
        if (this._showPlantDropdown) {
            document.addEventListener('click', this._handleOutsideDropdownClick, { once: true });
        }
    }

    private _handleOutsideDropdownClick = () => {
        this._showPlantDropdown = false;
        this.requestUpdate();
    }

    private _renderPlantDropdown(plants: string[]): TemplateResult {
        // Wenn keine Plants übergeben wurden, aber wir haben ausgewählte Entities, verwende diese
        if (!plants.length && this._selectedEntities.length > 0) {
            plants = [...this._selectedEntities];
        }

        if (!plants.length) {
            const noPlantsText = TranslationUtils.translateUI(this._hass, 'no_plants_found');
            return html`
                <div class="plant-dropdown">
                    <div class="plant-dropdown-item">${noPlantsText}</div>
                </div>
            `;
        }
        
        // Füge den Cycle selbst als erste Option hinzu, wenn eine Plant ausgewählt ist
        const isSelectedPlant = this.selectedPlantEntity !== null;
        const cycleOption = isSelectedPlant && this._popupData.originalEntity ? [this._popupData.originalEntity] : [];
        const allOptions = [...cycleOption, ...plants];
        
        return html`
            <div class="plant-dropdown">
                ${allOptions.map(plant => {
                    const plantEntity = this._hass.states[plant];
                    
                    if (!plantEntity) {
                        const entityNotFoundText = TranslationUtils.translateUI(this._hass, 'entity_not_found');
                        return html`
                            <div class="plant-dropdown-item">
                                <div class="plant-dropdown-name">${plant}</div>
                                <div class="plant-dropdown-info">${entityNotFoundText}</div>
                            </div>
                        `;
                    }
                    
                    // Prüfe, ob es sich um den Cycle handelt
                    const isCycle = plant.startsWith('cycle.');
                    const plantName = plantEntity.attributes.friendly_name || plant.split('.')[1];
                    
                    if (isCycle) {
                        const returnToCycleText = TranslationUtils.translateUI(this._hass, 'return_to_cycle');
                        return html`
                            <div class="plant-dropdown-item" @click="${() => this._returnToCycle()}">
                                <div class="plant-dropdown-name">${plantName}</div>
                                <div class="plant-dropdown-info">${returnToCycleText}</div>
                            </div>
                        `;
                    }
                    
                    const strain = plantEntity.attributes.strain || '';
                    const breeder = plantEntity.attributes.breeder || '';
                    
                    return html`
                        <div class="plant-dropdown-item" @click="${() => this._selectPlant(plant)}">
                            <div class="plant-dropdown-name">${plantName}</div>
                            <div class="plant-dropdown-info">${strain} - ${breeder}</div>
                        </div>
                    `;
                })}
            </div>
        `;
    }

    private _selectPlant(entityId: string) {
        // Speichere die ausgewählte Plant
        this.selectedPlantEntity = entityId;
        
        // Schließe das Dropdown
        this._showPlantDropdown = false;
        
        // Speichere die ursprüngliche Entity-ID, um zurückkehren zu können
        if (!this._popupData.originalEntity && this.stateObj) {
            this._popupData.originalEntity = this.stateObj.entity_id;
        }
        
        // Lade die Daten der ausgewählten Plant
        if (this._hass) {
            // Temporär die stateObj auf die ausgewählte Plant setzen
            this.stateObj = this._hass.states[entityId];
            
            // Daten laden und UI aktualisieren
            this.get_data(this._hass).then(() => {
                // Aktualisiere die Graph-Komponenten
                const graphElements = this.shadowRoot?.querySelectorAll('flower-graph') as NodeListOf<any>;
                if (graphElements) {
                    graphElements.forEach(graph => {
                        if (graph) {
                            graph.entityId = entityId;
                            // Zuerst den Datumsbereich aktualisieren, dann die Daten
                            if (typeof graph.updateDateRange === 'function') {
                                graph.updateDateRange().then(() => {
                                    if (typeof graph.updateGraphData === 'function') {
                                        graph.updateGraphData(true);
                                    }
                                });
                            } else if (typeof graph.updateGraphData === 'function') {
                                // Fallback, falls updateDateRange nicht verfügbar ist
                                graph.updateGraphData(true);
                            }
                        }
                    });
                }
                
                // Aktualisiere die Consumption-Komponenten
                const consumptionElements = this.shadowRoot?.querySelectorAll('flower-consumption') as NodeListOf<any>;
                if (consumptionElements) {
                    consumptionElements.forEach(consumption => {
                        if (consumption) {
                            consumption.entityId = entityId;
                        }
                    });
                }
                
                // Event auslösen, um andere Flower-Cards zu informieren
                const cycleMemberSelectedEvent = new CustomEvent('brokkoli-card-cycle-member-selected', {
                    bubbles: true,
                    composed: true,
                    detail: {
                        originalEntityId: this._popupData.originalEntity || this.config?.entity,
                        selectedEntityId: entityId,
                        sourceCardId: this
                    }
                });
                window.dispatchEvent(cycleMemberSelectedEvent);
                
                this.requestUpdate();
            });
        }
    }

    private _toggleFlyoutMenu(e: Event) {
        e.stopPropagation();
        this._showFlyoutMenu = !this._showFlyoutMenu;
        
        if (this._showFlyoutMenu) {
            // Füge Event-Listener hinzu, um Klicks außerhalb des Menüs zu erkennen
            document.addEventListener('click', this._handleOutsideClick);
        } else {
            // Entferne Event-Listener, wenn das Menü geschlossen wird
            document.removeEventListener('click', this._handleOutsideClick);
        }
    }

    private _handleOutsideClick = (e: MouseEvent) => {
        const path = e.composedPath();
        if (!path.some(el => el instanceof HTMLElement && el.classList.contains('flyout-menu'))) {
            this._showFlyoutMenu = false;
            document.removeEventListener('click', this._handleOutsideClick);
        }
    }

    private _renderFlyoutMenu(): TemplateResult {
        // Zeige unterschiedliche Menüoptionen für Plants und Cycles
        const isSelectedPlant = this.selectedPlantEntity !== null;
        
        return html`
            <div class="flyout-menu">
                ${isSelectedPlant ? html`
                    <div class="flyout-menu-item" @click="${this._returnToCycle}">
                        <ha-icon icon="mdi:arrow-left"></ha-icon>
                        <span>${TranslationUtils.translateUI(this._hass, 'return_to_cycle')}</span>
                    </div>
                    <div class="flyout-menu-divider"></div>
                ` : ''}
                <div class="flyout-menu-item" @click="${() => { this._activePopup = 'clone'; this._showFlyoutMenu = false; }}">
                    <ha-icon icon="mdi:content-duplicate"></ha-icon>
                    <span>${TranslationUtils.translateUI(this._hass, 'clone_plant')}</span>
                </div>
                <div class="flyout-menu-item" @click="${() => { this._activePopup = 'move'; this._showFlyoutMenu = false; }}">
                    <ha-icon icon="mdi:arrow-decision"></ha-icon>
                    <span>${TranslationUtils.translateUI(this._hass, 'move_to_cycle')}</span>
                </div>
                <div class="flyout-menu-item" @click="${() => { this._activePopup = 'replace'; this._showFlyoutMenu = false; }}">
                    <ha-icon icon="mdi:swap-horizontal"></ha-icon>
                    <span>${TranslationUtils.translateUI(this._hass, 'replace_sensors')}</span>
                </div>
                <div class="flyout-menu-item" @click="${() => { this._activePopup = 'remove'; this._showFlyoutMenu = false; }}">
                    <ha-icon icon="mdi:delete-outline"></ha-icon>
                    <span>${TranslationUtils.translateUI(this._hass, 'delete_plant')}</span>
                </div>
            </div>
        `;
    }

    private _returnToCycle() {
        if (this._popupData.originalEntity && this._hass) {
            // Zurück zum ursprünglichen Cycle
            this.selectedPlantEntity = null;
            this.stateObj = this._hass.states[this._popupData.originalEntity];
            
            // Daten laden und UI aktualisieren
            this.get_data(this._hass).then(() => {
                // Aktualisiere die Graph-Komponenten
                const graphElements = this.shadowRoot?.querySelectorAll('flower-graph') as NodeListOf<any>;
                if (graphElements) {
                    graphElements.forEach(graph => {
                        if (graph) {
                            graph.entityId = this._popupData.originalEntity;
                            // Zuerst den Datumsbereich aktualisieren, dann die Daten
                            if (typeof graph.updateDateRange === 'function') {
                                graph.updateDateRange().then(() => {
                                    if (typeof graph.updateGraphData === 'function') {
                                        graph.updateGraphData(true);
                                    }
                                });
                            } else if (typeof graph.updateGraphData === 'function') {
                                // Fallback, falls updateDateRange nicht verfügbar ist
                                graph.updateGraphData(true);
                            }
                        }
                    });
                }
                
                // Aktualisiere die Consumption-Komponenten
                const consumptionElements = this.shadowRoot?.querySelectorAll('flower-consumption') as NodeListOf<any>;
                if (consumptionElements) {
                    consumptionElements.forEach(consumption => {
                        if (consumption) {
                            consumption.entityId = this._popupData.originalEntity;
                        }
                    });
                }
                
                // Event auslösen, um andere Flower-Cards zu informieren
                const cycleMemberSelectedEvent = new CustomEvent('brokkoli-card-cycle-member-selected', {
                    bubbles: true,
                    composed: true,
                    detail: {
                        originalEntityId: this._popupData.originalEntity,
                        selectedEntityId: this._popupData.originalEntity,
                        sourceCardId: this
                    }
                });
                window.dispatchEvent(cycleMemberSelectedEvent);
                
                // Zurücksetzen der originalEntity
                this._popupData.originalEntity = null;
                
                this.requestUpdate();
            });
        }
        
        // Schließe das Dropdown
        this._showPlantDropdown = false;
    }

    private async _handleMoveToCycle() {
        await this._hass.callService('plant', 'move_to_cycle', {
            plant_entity: this.stateObj.entity_id,
            cycle_entity: this._popupData.cycle_entity
        });
        this._closePopup();
    }

    private async _handleRemovePlant() {
        await this._hass.callService('plant', 'remove_plant', {
            plant_entity: this.stateObj.entity_id
        });
        this._closePopup();
    }

    private async _handleReplaceSensors() {
        const sensorTypes = ['temperature', 'moisture', 'illuminance', 'humidity', 'conductivity', 'power_consumption'];
        // Source-Sensor-entity_ids aus plant/get_info (sprachneutral) statt sensor.X_TYPE Konstruktion.
        const plantInfoResult = (this.plantinfo as { result?: Record<string, { sensor?: string } | undefined> & { diagnostic_sensors?: Record<string, { entity_id?: string }> } })?.result;
        const plantData = (plantInfoResult ?? {}) as Record<string, { sensor?: string }>;
        const diagSensors = plantInfoResult?.diagnostic_sensors ?? {};

        for (const type of sensorTypes) {
            const newSensor = this._popupData[`new_${type}_sensor`];
            // power_consumption: replace_external_sensor sitzt auf der TOTAL-Entity.
            const currentSensor = type === 'power_consumption'
                ? diagSensors.total_power_consumption?.entity_id
                : plantData[type]?.sensor;

            if (newSensor && currentSensor) {
                await this._hass.callService('plant', 'replace_sensor', {
                    meter_entity: currentSensor,
                    new_sensor: newSensor
                });
            }
        }
        this._closePopup();
    }

    private _closePopup() {
        this._activePopup = null;
        this._popupData = {};
        this.requestUpdate();
    }

    private _renderPopups(): TemplateResult {
        if (!this._activePopup) return html``;

        switch (this._activePopup) {
            case 'clone':
                // Gemeinsamer Dialog beider Karten -- hier lagen vorher
                // Freitextfelder, in die man Entity-IDs tippen musste.
                return html`
                    <plant-clone-dialog
                        .hass="${this._hass}"
                        .plant="${this.stateObj}"
                        @dialog-closed="${this._closePopup}"
                        @plant-cloned="${this._closePopup}"
                    ></plant-clone-dialog>
                `;
            case 'move':
                return this._renderMovePopup();
            case 'remove':
                return this._renderRemovePopup();
            case 'replace':
                return this._renderReplacePopup();
            default:
                return html``;
        }
    }

    private _renderMovePopup(): TemplateResult {
        const cycles = Object.entries(this._hass.states)
            .filter(([entity_id]) => entity_id.startsWith('cycle.'))
            .map(([entity_id, state]: [string, any]) => ({
                entity_id,
                name: state.attributes?.friendly_name || entity_id.split('.')[1]
            }));

        return html`
            <div class="popup-dialog" @click="${this._closePopup}">
                <div class="popup-content" @click="${(e: Event) => e.stopPropagation()}">
                    <div class="popup-title">${TranslationUtils.translateUI(this._hass, 'move_to_cycle')}</div>
                    <div class="form-field">
                        <label>${TranslationUtils.translateUI(this._hass, 'select_cycle')}</label>
                        <select @change="${(e: Event) => this._popupData.cycle_entity = (e.target as HTMLSelectElement).value}">
                            <option value="">${TranslationUtils.translateUI(this._hass, 'please_select')}</option>
                            ${cycles.map(cycle => html`
                                <option value="${cycle.entity_id}">${cycle.name}</option>
                            `)}
                        </select>
                    </div>
                    <div class="popup-buttons">
                        <button @click="${this._closePopup}">${TranslationUtils.translateUI(this._hass, 'cancel')}</button>
                        <button @click="${this._handleMoveToCycle}" ?disabled="${!this._popupData.cycle_entity}">
                            ${TranslationUtils.translateUI(this._hass, 'move')}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    private _renderRemovePopup(): TemplateResult {
        return html`
            <div class="popup-dialog" @click="${this._closePopup}">
                <div class="popup-content" @click="${(e: Event) => e.stopPropagation()}">
                    <div class="popup-title">${TranslationUtils.translateUI(this._hass, 'delete_plant')}</div>
                    <p>${TranslationUtils.translateUI(this._hass, 'delete_plant_confirmation')}</p>
                    <div class="popup-buttons">
                        <button @click="${this._closePopup}">${TranslationUtils.translateUI(this._hass, 'cancel')}</button>
                        <button @click="${this._handleRemovePlant}" class="danger">
                            ${TranslationUtils.translateUI(this._hass, 'confirm_delete')}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    private _renderReplacePopup(): TemplateResult {
        const sensorTypes = [
            { key: 'temperature', label: TranslationUtils.translateSensor(this._hass, 'temperature'), icon: 'mdi:thermometer' },
            { key: 'moisture', label: TranslationUtils.translateSensor(this._hass, 'soil_moisture'), icon: 'mdi:water-percent' },
            { key: 'illuminance', label: TranslationUtils.translateSensor(this._hass, 'illuminance'), icon: 'mdi:brightness-5' },
            { key: 'humidity', label: TranslationUtils.translateSensor(this._hass, 'air_humidity'), icon: 'mdi:water' },
            { key: 'conductivity', label: TranslationUtils.translateSensor(this._hass, 'conductivity'), icon: 'mdi:flash' },
            // Stromverbrauch verkabelt die TOTAL-kWh-Entity (nicht die berechnete Watt-Live).
            // Label entsprechend "Gesamt Stromverbrauch" um die Differenzierung sichtbar zu machen.
            { key: 'power_consumption', label: TranslationUtils.translateSensor(this._hass, 'total_power_consumption'), icon: 'mdi:power-plug' }
        ];

        // Aktuell konfigurierte external_sensor je Typ — aus plantInfo (sprachneutral).
        const plantInfoResult = (this.plantinfo as { result?: Record<string, { sensor?: string } | undefined> & { diagnostic_sensors?: Record<string, { entity_id?: string }> } })?.result;
        const plantData = (plantInfoResult ?? {}) as Record<string, { sensor?: string }>;
        const diagSensors = plantInfoResult?.diagnostic_sensors ?? {};
        const currentSourcePerType: Record<string, string | undefined> = {};
        for (const t of sensorTypes) {
            // power_consumption: external_sensor sitzt auf der TOTAL-Entity (kWh-Akkumulator),
            // nicht auf der CURRENT-Watt-Entity (die ist rein berechnet aus TOTAL).
            const lookupEntityId = t.key === 'power_consumption'
                ? diagSensors.total_power_consumption?.entity_id
                : plantData[t.key]?.sensor;
            currentSourcePerType[t.key] = lookupEntityId
                ? this._hass.states[lookupEntityId]?.attributes?.external_sensor as string | undefined
                : undefined;
        }

        // Welche Entities als Quelle taugen, entscheidet fuer beide Dialoge
        // dieselbe Funktion -- die Filterliste stand vorher zweimal im Code.
        const getSensorsByType = (type: string) => getSourceSensors(this._hass, type);

        return html`
            <div class="popup-dialog" @click="${this._closePopup}">
                <div class="popup-content" @click="${(e: Event) => e.stopPropagation()}">
                    <div class="popup-title">${TranslationUtils.translateUI(this._hass, 'replace_sensors')}</div>
                    ${sensorTypes.map(type => {
                        const availableSensors = getSensorsByType(type.key);
                        const current = currentSourcePerType[type.key];
                        // Aktuelle Auswahl ins _popupData kippen, damit beim Submit auch ohne
                        // Klick im Dropdown der jetzt-Wert übernommen wird (statt leerem String).
                        if (current && !this._popupData[`new_${type.key}_sensor`]) {
                            this._popupData[`new_${type.key}_sensor`] = current;
                        }

                        return html`
                            <div class="form-field">
                                <label>
                                    <ha-icon icon="${type.icon}"></ha-icon>
                                    ${type.label}
                                </label>
                                <select @change="${(e: Event) => this._popupData[`new_${type.key}_sensor`] = (e.target as HTMLSelectElement).value}">
                                    <option value="">${TranslationUtils.translateUI(this._hass, 'please_select')}</option>
                                    ${availableSensors.length > 0 ?
                                        availableSensors.map(sensor => html`
                                            <option value="${sensor.entity_id}" ?selected="${sensor.entity_id === current}">${sensor.name}</option>
                                        `) :
                                        html`<option value="" disabled>${TranslationUtils.translateUI(this._hass, 'no_matching_sensors')}</option>`
                                    }
                                </select>
                            </div>
                        `;
                    })}
                    <div class="popup-buttons">
                        <button @click="${this._closePopup}">${TranslationUtils.translateUI(this._hass, 'cancel')}</button>
                        <button @click="${this._handleReplaceSensors}">${TranslationUtils.translateUI(this._hass, 'replace_sensors')}</button>
                    </div>
                </div>
            </div>
        `;
    }

    private _renderOptions(): TemplateResult {
        // Verwende die Werte aus this.config, da wir sie bereits in setConfig gesetzt haben
        const optionElements = this.config.option_elements;
        
        // Überprüfe, ob es Optionen gibt
        if (optionElements.length === 0) {
            return html``;
        }
        
        // Definiere ein Mapping von Element-Namen zu Icons und Render-Funktionen
        const elementConfig: Record<string, { icon: string; expanded: boolean | undefined }> = {
            'attributes': {
                icon: 'mdi:tune',
                expanded: this._expanded?.attributes
            },
            'timeline': {
                icon: 'mdi:chart-timeline-variant',
                expanded: this._expanded?.timeline
            },
            'consumption': {
                icon: 'mdi:chart-box-outline',
                expanded: this._expanded?.consumption
            },
            'history': {
                icon: 'mdi:history',
                expanded: this._expanded?.history
            },
            'details': {
                icon: 'mdi:information-outline',
                expanded: this._expanded?.details
            }
        };
        
        return html`
            <div class="options-container">
                ${optionElements.map((element: string) => {
                    if (element in elementConfig) {
                        const config = elementConfig[element];
                        return html`
                            <div class="options-section ${config.expanded ? 'expanded' : ''}" 
                                 @click="${(e: Event) => this._toggleExpand(e, element)}">
                                <ha-icon icon="${config.icon}"></ha-icon>
                            </div>
                        `;
                    }
                    return '';
                })}
            </div>
        `;
    }

    private _renderTimeline(): TemplateResult {
        // Verwende die ausgewählte Plant, wenn vorhanden, sonst die konfigurierte Entity
        const entityId = this.selectedPlantEntity || this.config.entity;
        
        if (this.config.show_elements.includes('timeline')) {
            // Wenn timeline direkt angezeigt wird, in einen Container einbetten
            return html`
                <div class="timeline-container">
                    <flower-graph
                        .hass=${this._hass}
                        .entityId=${entityId}
                    ></flower-graph>
                    <flower-timeline
                        .hass=${this._hass}
                        .entityId=${entityId}
                    ></flower-timeline>
                </div>
            `;
        } else if (this._expanded?.timeline) {
            // Wenn timeline über das Optionsmenü angezeigt wird
            return html`
                <div class="expanded-content show" data-section="timeline">
                    <flower-graph
                        .hass=${this._hass}
                        .entityId=${entityId}
                    ></flower-graph>
                    <flower-timeline
                        .hass=${this._hass}
                        .entityId=${entityId}
                    ></flower-timeline>
                </div>
            `;
        }
        // Leeres div zurückgeben, wenn nicht angezeigt werden soll
        return html`<div class="expanded-content" data-section="timeline"></div>`;
    }

    private _renderConsumption(): TemplateResult {
        // Verwende die ausgewählte Plant, wenn vorhanden, sonst die konfigurierte Entity
        const entityId = this.selectedPlantEntity || this.config.entity;
        
        if (this.config.show_elements.includes('consumption')) {
            // Wenn consumption direkt angezeigt wird
            return html`
                <div class="component-container">
                    <flower-consumption
                        .hass=${this._hass}
                        .entityId=${entityId}
                    ></flower-consumption>
                </div>
            `;
        } else if (this._expanded?.consumption) {
            // Wenn consumption über das Optionsmenü angezeigt wird
            return html`
                <div class="expanded-content show" data-section="consumption">
                    <flower-consumption
                        .hass=${this._hass}
                        .entityId=${entityId}
                    ></flower-consumption>
                </div>
            `;
        }
        // Leeres div zurückgeben, wenn nicht angezeigt werden soll
        return html`<div class="expanded-content" data-section="consumption"></div>`;
    }

    private _renderHistory(): TemplateResult {
        // Verwende die ausgewählte Plant, wenn vorhanden, sonst die konfigurierte Entity
        const entityId = this.selectedPlantEntity || this.config.entity;
        
        if (this.config.show_elements.includes('history')) {
            // Wenn history direkt angezeigt wird
            return html`
                <div class="component-container">
                    <flower-history
                        .hass=${this._hass}
                        .entityId=${entityId}
                        .historyGroups=${this.config.history_groups}
                        .linePosition=${this.config.history_line_position}
                    ></flower-history>
                </div>
            `;
        } else if (this._expanded?.history) {
            // Wenn history über das Optionsmenü angezeigt wird
            return html`
                <div class="expanded-content show" data-section="history">
                    <flower-history
                        .hass=${this._hass}
                        .entityId=${entityId}
                        .historyGroups=${this.config.history_groups}
                        .linePosition=${this.config.history_line_position}
                    ></flower-history>
                </div>
            `;
        }
        // Leeres div zurückgeben, wenn nicht angezeigt werden soll
        return html`<div class="expanded-content" data-section="history"></div>`;
    }

    // Ein Eintrag je Zeile des Info-Bereichs. attr weicht nur dort vom Key ab, wo
    // das State-Attribut anders heisst als das Service-Feld.
    private static readonly DETAIL_FIELDS: Array<{
        key: string; attr?: string; wide?: boolean; multiline?: boolean; readonly?: boolean; link?: boolean;
    }> = [
        { key: 'strain', attr: 'variety', readonly: true },
        { key: 'feminized', readonly: true },
        { key: 'effects' },
        { key: 'smell' },
        { key: 'taste' },
        { key: 'phenotype' },
        { key: 'hunger' },
        { key: 'growth_stretch' },
        { key: 'flower_stretch' },
        { key: 'mold_resistance' },
        { key: 'difficulty' },
        { key: 'yield' },
        { key: 'website', link: true },
        { key: 'notes' },
        { key: 'infotext1', wide: true, multiline: true },
        { key: 'infotext2', wide: true, multiline: true },
        { key: 'lineage', wide: true },
    ];

    private _startDetailsEdit() {
        const draft: Record<string, string> = {};
        for (const field of BrokkoliCard.DETAIL_FIELDS) {
            if (field.readonly) continue;
            draft[field.key] = String(this.stateObj.attributes[field.attr ?? field.key] ?? '');
        }
        this._detailsDraft = draft;
        this._detailsEditing = true;
    }

    private async _saveDetailsEdit() {
        const geaendert: Record<string, string> = {};
        for (const [key, value] of Object.entries(this._detailsDraft)) {
            if (value !== String(this.stateObj.attributes[key] ?? '')) geaendert[key] = value;
        }
        if (Object.keys(geaendert).length > 0) {
            await this._hass.callService('plant', 'update_plant_attributes', {
                entity_id: this.stateObj.entity_id,
                ...geaendert
            });
        }
        this._detailsEditing = false;
    }

    private _renderDetailFields(): TemplateResult {
        const bearbeiten = this._detailsEditing;
        return html`
            <div class="plant-details">
                <div class="details-actions">
                    ${bearbeiten ? html`
                        <ha-icon icon="mdi:close" title="${TranslationUtils.translateUI(this._hass, 'cancel')}"
                                 @click="${() => { this._detailsEditing = false; }}"></ha-icon>
                        <ha-icon icon="mdi:check" title="${TranslationUtils.translateUI(this._hass, 'save')}"
                                 @click="${this._saveDetailsEdit}"></ha-icon>
                    ` : html`
                        <ha-icon icon="mdi:pencil" title="${TranslationUtils.translateUI(this._hass, 'edit')}"
                                 @click="${this._startDetailsEdit}"></ha-icon>
                    `}
                </div>
                ${BrokkoliCard.DETAIL_FIELDS.map(field => {
                    const wert = String(this.stateObj.attributes[field.attr ?? field.key] ?? '');
                    return html`
                        <div class="detail-item ${field.wide ? 'full-width' : ''}">
                            <span class="label">${TranslationUtils.translateField(this._hass, field.key)}</span>
                            ${bearbeiten && !field.readonly
                                ? (field.multiline
                                    ? html`<textarea class="detail-edit" rows="3"
                                            .value="${this._detailsDraft[field.key] ?? ''}"
                                            @input="${(e: InputEvent) => { this._detailsDraft[field.key] = (e.target as HTMLTextAreaElement).value; }}"></textarea>`
                                    : html`<input type="text" class="detail-edit"
                                            .value="${this._detailsDraft[field.key] ?? ''}"
                                            @input="${(e: InputEvent) => { this._detailsDraft[field.key] = (e.target as HTMLInputElement).value; }}">`)
                                : (field.link && wert
                                    ? html`<a href="${wert}" target="_blank" class="value link">${wert}</a>`
                                    : html`<span class="value">${wert || '-'}</span>`)}
                        </div>
                    `;
                })}
            </div>
        `;
    }

    private _renderDetails(): TemplateResult {
        if (this.config.show_elements.includes('details')) {
            return this._renderDetailFields();
        } else if (this._expanded?.details) {
            return html`
                <div class="expanded-content show" data-section="details">
                    ${this._renderDetailFields()}
                </div>
            `;
        }
        // Leeres div zurückgeben, wenn nicht angezeigt werden soll
        return html`<div class="expanded-content" data-section="details"></div>`;
    }

    private _renderAttributes(): TemplateResult {
        if (this.config.show_elements.includes('attributes')) {
            // Wenn attributes direkt angezeigt werden
            return html`${renderAttributes(this)}`;
        } else if (this._expanded?.attributes) {
            // Wenn attributes über das Optionsmenü angezeigt werden
            return html`
                <div class="expanded-content show" data-section="attributes">
                    ${renderAttributes(this)}
                </div>
            `;
        }
        // Leeres div zurückgeben, wenn nicht angezeigt werden soll
        return html`<div class="expanded-content" data-section="attributes"></div>`;
    }

    render(): HTMLTemplateResult {
        if (!this.config || !this._hass) return html``;

        if (!this.stateObj && !this._listenToSelector) {
            const entityUnavailableText = TranslationUtils.translateUI(this._hass, 'entity_unavailable');
            const noEntityConfigText = TranslationUtils.translateUI(this._hass, 'no_entity_configured');
            return html`
                <hui-warning>
                ${entityUnavailableText}: ${this.config.entity || noEntityConfigText}
                </hui-warning>
              `;
        }

        if (!this.stateObj && this._listenToSelector) {
            // Karte komplett ausblenden, wenn auf Auswahl gewartet wird
            return html``;
        }

        const showElements = this.config.show_elements;
        // Setze die CSS-Klasse nur, wenn das erste Element der Header ist
        const haCardCssClass = (showElements[0] === 'header' && this.config.display_type !== DisplayType.Compact) 
            ? "card-margin-top" 
            : "";

        // Alle Elemente, die in show_elements enthalten sind
        const visibleElements = showElements.map((element: string) => this._renderElement(element));
        
        // Rendere die erweiterbaren Elemente in der Reihenfolge, in der sie geöffnet wurden
        const expandableElements = this._expandedOrder
            .filter((element: string) => !showElements.includes(element) && this._expanded[element])
            .map((element: string) => {
                switch(element) {
                    case 'attributes':
                        return this._renderAttributes();
                    case 'timeline':
                        return this._renderTimeline();
                    case 'consumption':
                        return this._renderConsumption();
                    case 'history':
                        return this._renderHistory();
                    case 'details':
                        return this._renderDetails();
                    default:
                        return html``;
                }
            });
        
        // Stelle sicher, dass alle erweiterbaren Elemente im DOM vorhanden sind (auch wenn nicht sichtbar)
        const hiddenElements = this.config.option_elements
            .filter((element: string) => 
                !showElements.includes(element) && 
                !this._expandedOrder.includes(element))
            .map((element: string) => {
                switch(element) {
                    case 'attributes':
                        return this._renderAttributes();
                    case 'timeline':
                        return this._renderTimeline();
                    case 'consumption':
                        return this._renderConsumption();
                    case 'history':
                        return this._renderHistory();
                    case 'details':
                        return this._renderDetails();
                    default:
                        return html``;
                }
            });

        return html`
            <ha-card class="${haCardCssClass}">
                ${visibleElements}
                ${expandableElements}
                ${hiddenElements}
            </ha-card>
            ${this._showGallery ? html`
                <flower-gallery
                    .hass=${this._hass}
                    .entityId=${this.stateObj.entity_id}
                    .images=${this._imageUrls}
                    .onClose=${() => this._showGallery = false}
                ></flower-gallery>
            ` : ''}
        `;
    }

    private _toggleExpand(e: Event, section: string) {
        e.stopPropagation();
        
        // Erstelle eine neue Kopie des _expanded-Objekts
        const newExpanded = { ...this._expanded };
        
        // Ändere den Wert für die angegebene Sektion
        const isExpanding = !newExpanded[section];
        newExpanded[section] = isExpanding;
        
        // Aktualisiere die Reihenfolge der geöffneten Elemente
        let newExpandedOrder = [...this._expandedOrder];
        
        if (isExpanding) {
            // Wenn das Element geöffnet wird, füge es am Ende der Liste hinzu
            if (!newExpandedOrder.includes(section)) {
                newExpandedOrder.push(section);
            }
        } else {
            // Wenn das Element geschlossen wird, entferne es aus der Liste
            newExpandedOrder = newExpandedOrder.filter(item => item !== section);
        }
        
        // Setze die neuen Objekte
        this._expanded = newExpanded;
        this._expandedOrder = newExpandedOrder;
        
        // Erzwinge ein Update der Komponente
        this.requestUpdate();
    }

    private async get_data(hass: HomeAssistant): Promise<void> {
        try {
            // Wenn eine Plant ausgewählt ist, verwende deren Entity-ID, sonst die konfigurierte Entity
            const entityId = this.selectedPlantEntity || this.config?.entity;
            
            this.plantinfo = await hass.callWS({
                type: "plant/get_info",
                entity_id: entityId,
            });

            if (this.stateObj?.attributes.images) {
                const downloadPath = this.stateObj.attributes.download_path || '/local/images/plants/';
                const allImages = [...this.stateObj.attributes.images];
                
                const sortedImages = allImages.sort((a, b) => {
                    const dateA = a.match(/_(\d{8}_\d{6})/)?.[1] || '';
                    const dateB = b.match(/_(\d{8}_\d{6})/)?.[1] || '';
                    return dateA.localeCompare(dateB);
                });

                // Filtere Bilder vor der ersten Growth Phase heraus
                const filteredImages = await this._filterImagesAfterFirstPhase(sortedImages);
                
                this._imageUrls = filteredImages.map(img => `${downloadPath}${img}`);
                
                if (this.stateObj.attributes.entity_picture) {
                    this._imageUrls.unshift(this.stateObj.attributes.entity_picture);
                }
                
                // Setze den Bildindex zurück, wenn eine neue Pflanze geladen wird
                this._currentImageIndex = 0;
                this._nextImageIndex = this._imageUrls.length > 1 ? 1 : 0;
                this._isFading = false;
                
                // Starte Bildrotation nur wenn mehr als ein Bild vorhanden ist
                this._startImageRotation();
            } else {
                // Wenn keine Bilder vorhanden sind, leere die URL-Liste
                this._imageUrls = [];
                this._currentImageIndex = 0;
                this._nextImageIndex = 0;
                
                // Stoppe Bildrotation wenn keine Bilder vorhanden sind
                if (this._imageRotationInterval) {
                    clearInterval(this._imageRotationInterval);
                    this._imageRotationInterval = undefined;
                }
            }
        } catch {
            this.plantinfo = { result: {} };
            this._imageUrls = [];
            this._currentImageIndex = 0;
            this._nextImageIndex = 0;
        }
    }

    getCardSize(): number {
        return 5;
    }

    static get styles(): CSSResult {
        return style;
    }

    private async _changeImage() {
        if (this._imageUrls.length <= 1) return;

        this._nextImageIndex = (this._currentImageIndex + 1) % this._imageUrls.length;
        
        const img = new Image();
        img.src = this._imageUrls[this._nextImageIndex];
        
        await new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
        });

        this._isFading = true;
        this.requestUpdate();

        await new Promise(resolve => setTimeout(resolve, 500));

        this._currentImageIndex = this._nextImageIndex;
        
        this._isFading = false;
        this.requestUpdate();
    }

    private _startImageRotation() {
        if (this._imageRotationInterval) {
            clearInterval(this._imageRotationInterval);
        }
        
        // Starte Rotation nur wenn mehr als ein Bild vorhanden ist
        if (this._imageUrls.length > 1) {
            this._imageRotationInterval = setInterval(() => {
                this._changeImage();
            }, 10000);
        }
    }

    private async _filterImagesAfterFirstPhase(images: string[]): Promise<string[]> {
        if (!this.plantinfo?.result?.helpers?.growth_phase?.entity_id) {
            return images;
        }

        const phaseEntityId = this.plantinfo.result.helpers.growth_phase.entity_id;
        const phaseEntity = this._hass?.states[phaseEntityId];
        
        if (!phaseEntity) return images;

        const phases = ['seeds', 'germination', 'rooting', 'growing', 'flowering', 'harvested', 'removed'];
        
        // Finde die erste Phase
        let firstPhaseDate: Date | null = null;
        for (const phase of phases) {
            const startDate = phaseEntity.attributes[`${phase === 'removed' || phase === 'harvested' ? phase : phase + '_start'}`];
            if (startDate) {
                firstPhaseDate = new Date(startDate);
                break;
            }
        }

        if (!firstPhaseDate) return images;

        // Filtere Bilder, die vor der ersten Phase liegen
        return images.filter((img: string) => {
            const match = img.match(/_(\d{8}_\d{6})/);
            if (!match) return true; // Bilder ohne Datum-Pattern werden beibehalten
            
            const datePart = match[1];
            const year = datePart.slice(0, 4);
            const month = datePart.slice(4, 6);
            const day = datePart.slice(6, 8);
            const hour = datePart.slice(9, 11);
            const minute = datePart.slice(11, 13);
            const imageDate = new Date(`${year}-${month}-${day}T${hour}:${minute}:00`);
            
            return imageDate >= firstPhaseDate;
        });
    }

    // Handler für den Cycle-Member-Wechsel-Event
    private _handleCycleMemberSelected = (event: CustomEvent) => {
        // Prüfen, ob die Karte einen Cycle verwendet und ob die Entity-ID im Event mit der Entity-ID der Karte übereinstimmt
        if (this.config?.entity && this.stateObj && event.detail) {
            const { originalEntityId, selectedEntityId, sourceCardId } = event.detail;
            
            // Wenn der Event von dieser Karte selbst ausgelöst wurde, ignorieren wir ihn
            if (sourceCardId === this) {
                return;
            }
            
            // Prüfen, ob die ursprüngliche Entity-ID mit der Entity-ID der Karte übereinstimmt
            // oder ob die Karte bereits einen ausgewählten Plant hat, der von der gleichen ursprünglichen Entity stammt
            const isFromSameCycle = 
                originalEntityId === this.config.entity || 
                (this._popupData.originalEntity && this._popupData.originalEntity === originalEntityId);
            
            if (isFromSameCycle) {
                // Speichere die ausgewählte Plant
                this.selectedPlantEntity = selectedEntityId;
                
                // Speichere die ursprüngliche Entity-ID, um zurückkehren zu können
                if (!this._popupData.originalEntity && this.stateObj) {
                    this._popupData.originalEntity = this.stateObj.entity_id;
                }
                
                // Lade die Daten der ausgewählten Plant
                if (this._hass) {
                    // Temporär die stateObj auf die ausgewählte Plant setzen
                    this.stateObj = this._hass.states[selectedEntityId];
                    
                    // Daten laden und UI aktualisieren
                    this.get_data(this._hass).then(() => {
                        // Aktualisiere die Graph-Komponenten
                        const graphElements = this.shadowRoot?.querySelectorAll('flower-graph') as NodeListOf<any>;
                        if (graphElements) {
                            graphElements.forEach(graph => {
                                if (graph) {
                                    graph.entityId = selectedEntityId;
                                    // Zuerst den Datumsbereich aktualisieren, dann die Daten
                                    if (typeof graph.updateDateRange === 'function') {
                                        graph.updateDateRange().then(() => {
                                            if (typeof graph.updateGraphData === 'function') {
                                                graph.updateGraphData(true);
                                            }
                                        });
                                    } else if (typeof graph.updateGraphData === 'function') {
                                        // Fallback, falls updateDateRange nicht verfügbar ist
                                        graph.updateGraphData(true);
                                    }
                                }
                            });
                        }
                        
                        // Aktualisiere die Consumption-Komponenten
                        const consumptionElements = this.shadowRoot?.querySelectorAll('flower-consumption') as NodeListOf<any>;
                        if (consumptionElements) {
                            consumptionElements.forEach(consumption => {
                                if (consumption) {
                                    consumption.entityId = selectedEntityId;
                                }
                            });
                        }
                        
                        this.requestUpdate();
                    });
                }
            }
        }
    };

    // Handler für den Event, wenn eine Entity in einer anderen Karte ausgewählt wurde
    private _handleCardEntitySelected = (event: CustomEvent) => {
        // Prüfen, ob die Karte auf diesen Selektor hört
        if (this._listenToSelector && event.detail) {
            const { sourceIdentifier, selectedEntityId, selectedEntities } = event.detail;
            
            // Wenn der Event von einer Karte kommt, auf die wir hören sollen
            if (sourceIdentifier === this._listenToSelector) {
                // Speichere die ausgewählten Entities, falls vorhanden
                if (selectedEntities && Array.isArray(selectedEntities)) {
                    this._selectedEntities = [...selectedEntities];
                } else {
                    // Alte Version ohne Array von ausgewählten Elementen wird weiterhin unterstützt
                    this._selectedEntities = selectedEntityId ? [selectedEntityId] : [];
                }
                
                // Speichere die ausgewählte Entity
                this.selectedPlantEntity = selectedEntityId;
                
                // Wenn selectedEntityId null oder undefined ist, Karte ausblenden
                if (!selectedEntityId) {
                    this.stateObj = undefined;
                    this.requestUpdate();
                    return;
                }
                
                // Lade die Daten der ausgewählten Entity
                if (this._hass && selectedEntityId && this._hass.states[selectedEntityId]) {
                    // Setze die stateObj auf die ausgewählte Entity
                    this.stateObj = this._hass.states[selectedEntityId];
                    
                    // Daten laden und UI aktualisieren
                    this.get_data(this._hass).then(() => {
                        // Aktualisiere die Graph-Komponenten
                        const graphElements = this.shadowRoot?.querySelectorAll('flower-graph') as NodeListOf<any>;
                        if (graphElements) {
                            graphElements.forEach(graph => {
                                if (graph) {
                                    graph.entityId = selectedEntityId;
                                    if (typeof graph.updateDateRange === 'function') {
                                        graph.updateDateRange().then(() => {
                                            if (typeof graph.updateGraphData === 'function') {
                                                graph.updateGraphData(true);
                                            }
                                        });
                                    } else if (typeof graph.updateGraphData === 'function') {
                                        graph.updateGraphData(true);
                                    }
                                }
                            });
                        }
                        
                        // Aktualisiere die Consumption-Komponenten
                        const consumptionElements = this.shadowRoot?.querySelectorAll('flower-consumption') as NodeListOf<any>;
                        if (consumptionElements) {
                            consumptionElements.forEach(consumption => {
                                if (consumption) {
                                    consumption.entityId = selectedEntityId;
                                }
                            });
                        }
                        
                        this.requestUpdate();
                    });
                }
            }
        }
    };
}