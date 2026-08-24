import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import { PlantEntityUtils } from '../utils/plant-entity-utils';
import { FilterUtils } from '../utils/filter-utils';
import { HomeAssistantEntity } from '../types/brokkoli-list-card-types';
import { plantFlyoutMenuStyles } from '../styles/plant-flyout-menu-styles';
import './plant-clone-dialog';

interface HassEntity {
  attributes: {
    device_class?: string;
    friendly_name?: string;
  };
}

@customElement('plant-flyout-menu')
export class PlantFlyoutMenu extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @property() position = { x: 0, y: 0 };
  @property() targetPosition = { x: 0, y: 0 };
  @property() areaId?: string;
  @property() isMobile = false;

  @state() private _searchQuery = '';
  @state() private _plants: HomeAssistantEntity[] = [];
  @state() private _filteredPlants: HomeAssistantEntity[] = [];
  @state() private _showCloneDialog = false;
  @state() private _selectedPlantForClone?: HomeAssistantEntity;

  connectedCallback() {
    super.connectedCallback();
    this._loadPlants();
  }

  private async _loadPlants() {
    if (!this.hass) return;
    
    const plants = PlantEntityUtils.getPlantEntities(this.hass, 'plant');
    this._plants = plants;
    this._filteredPlants = plants;
  }

  private _handleSearch(e: Event) {
    const target = e.target as HTMLInputElement;
    this._searchQuery = target.value.toLowerCase();
    
    if (this._searchQuery) {
      this._filteredPlants = this._plants.filter(plant => 
        plant.attributes.friendly_name?.toLowerCase().includes(this._searchQuery) ||
        plant.entity_id.toLowerCase().includes(this._searchQuery)
      );
    } else {
      this._filteredPlants = this._plants;
    }
  }

  private _handleNewPlant() {
    this.dispatchEvent(new CustomEvent('new-plant-requested', {
      bubbles: true,
      composed: true,
      detail: { position: this.targetPosition, areaId: this.areaId }
    }));
  }

  private _handleMovePlant(plant: HomeAssistantEntity) {
    this.dispatchEvent(new CustomEvent('move-plant-requested', {
      bubbles: true,
      composed: true,
      detail: { 
        plant,
        position: this.targetPosition
      }
    }));
  }

  private _handleClonePlant(plant: HomeAssistantEntity) {
    this._selectedPlantForClone = plant;
    this._showCloneDialog = true;
  }

  // Der Dialog meldet den fertigen Klon; Position und Raum kennt nur die Karte,
  // deshalb wird das Ereignis hier angereichert weitergereicht.
  private _handlePlantCloned(e: CustomEvent) {
    e.stopPropagation();
    this.dispatchEvent(new CustomEvent('plant-cloned', {
      bubbles: true,
      composed: true,
      detail: {
        ...e.detail,
        position: this.targetPosition,
        areaId: this.areaId
      }
    }));
    this._closeCloneDialog();
    this._closeMenu();
  }

  private _closeCloneDialog() {
    this._showCloneDialog = false;
    this._selectedPlantForClone = undefined;
  }


  private _closeMenu() {
    this.dispatchEvent(new CustomEvent('menu-closed', {
      bubbles: true,
      composed: true
    }));
  }

  private _handleOverlayClick(e: Event) {
    if (e.target === e.currentTarget) {
      this._closeMenu();
    }
  }

  private _getPlantArea(plant: HomeAssistantEntity): string {
    if (!this.hass) return '';
    
    const areaId = FilterUtils.getAreaForEntity(this.hass, plant.entity_id);
    if (!areaId) return 'Kein Raum';
    
    const area = this.hass.areas?.[areaId];
    return area?.name || areaId;
  }

  render() {
    if (!this.hass) return html``;

    const menuStyle = this.isMobile ? '' : `
      position: fixed;
      left: ${this.position.x}px;
      top: ${this.position.y}px;
      transform: translate(-50%, -10px);
    `;

    return html`
      <div class="flyout-overlay ${this.isMobile ? 'mobile' : ''}" @click=${this._handleOverlayClick}>
        <div class="flyout-menu ${this.isMobile ? 'mobile' : ''}" style="${menuStyle}">
          <div class="flyout-header">
            <div class="search-container">
              <input
                type="text"
                placeholder="Pflanze suchen..."
                .value=${this._searchQuery}
                @input=${this._handleSearch}
                class="search-input"
              >
              <ha-icon icon="mdi:magnify" class="search-icon"></ha-icon>
            </div>
            ${this.isMobile ? html`
              <button class="close-button" @click=${this._closeMenu}>
                <ha-icon icon="mdi:close"></ha-icon>
              </button>
            ` : ''}
          </div>

          <div class="new-plant-button" @click=${this._handleNewPlant}>
            <ha-icon icon="mdi:plus"></ha-icon>
            <span>Neue Pflanze</span>
          </div>

          <div class="plants-list">
            ${this._filteredPlants.map(plant => html`
              <div class="plant-item">
                <div class="plant-info">
                  <div class="plant-image">
                    ${plant.attributes.entity_picture ? html`
                      <img src="${plant.attributes.entity_picture}" alt="${plant.attributes.friendly_name}">
                    ` : html`
                      <ha-icon icon="mdi:sprout"></ha-icon>
                    `}
                  </div>
                  <div class="plant-details">
                    <div class="plant-name">${plant.attributes.friendly_name || plant.entity_id}</div>
                    <div class="plant-area">${this._getPlantArea(plant)}</div>
                  </div>
                </div>
                <div class="plant-actions">
                  <button 
                    class="action-button move" 
                    @click=${() => this._handleMovePlant(plant)}
                    title="Verschieben"
                  >
                    <ha-icon icon="mdi:arrow-all"></ha-icon>
                  </button>
                  <button 
                    class="action-button clone" 
                    @click=${() => this._handleClonePlant(plant)}
                    title="Klonen"
                  >
                    <ha-icon icon="mdi:content-duplicate"></ha-icon>
                  </button>
                </div>
              </div>
            `)}
          </div>
        </div>
      </div>

      ${this._showCloneDialog && this._selectedPlantForClone ? html`
        <plant-clone-dialog
          .hass=${this.hass}
          .plant=${this._selectedPlantForClone}
          @dialog-closed=${this._closeCloneDialog}
          @plant-cloned=${this._handlePlantCloned}
        ></plant-clone-dialog>
      ` : ''}
    `;
  }

  static styles = plantFlyoutMenuStyles;
}  