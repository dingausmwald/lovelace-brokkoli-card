import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import { PlantEntityUtils } from '../utils/plant-entity-utils';
import { FilterUtils } from '../utils/filter-utils';
import { HomeAssistantEntity } from '../types/brokkoli-list-card-types';
import { plantFlyoutMenuStyles } from '../styles/plant-flyout-menu-styles';

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
  @state() private _cloneData: Record<string, string> = {};

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
    this._cloneData = {
      name: `Clone of ${plant.attributes.friendly_name || plant.entity_id}`,
      temperature_sensor: '',
      moisture_sensor: '',
      conductivity_sensor: '',
      illuminance_sensor: '',
      humidity_sensor: '',
      power_consumption_sensor: '',
      ph_sensor: ''
    };
    this._showCloneDialog = true;
  }

  private async _executeClone() {
    if (!this.hass || !this._selectedPlantForClone) return;

    try {
      // Nicht gesetzte Sensorfelder sind leere Strings und damit keine
      // gueltigen Entity-IDs -- das Service-Schema lehnt den ganzen Aufruf ab
      // ("Entity ID is an invalid entity ID for dictionary value").
      const angaben = Object.fromEntries(
        Object.entries(this._cloneData).filter(([, v]) => v !== '' && v != null)
      );

      await this.hass.callService('plant', 'clone_plant', {
        source_entity_id: this._selectedPlantForClone.entity_id,
        ...angaben
      });

      this.dispatchEvent(new CustomEvent('plant-cloned', {
        bubbles: true,
        composed: true,
        detail: {
          source_entity_id: this._selectedPlantForClone.entity_id,
          position: this.position,
          areaId: this.areaId
        }
      }));

      this._closeCloneDialog();
      this._closeMenu();
    } catch (error) {
      console.error('Error cloning plant:', error);
    }
  }

  private _closeCloneDialog() {
    this._showCloneDialog = false;
    this._selectedPlantForClone = undefined;
    this._cloneData = {};
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

      ${this._showCloneDialog ? this._renderCloneDialog() : ''}
    `;
  }

  private _renderCloneDialog() {
    return html`
      <div class="plant-clone-dialog-backdrop" @click=${(e: Event) => e.stopPropagation()}>
        <div class="plant-clone-dialog" @click=${(e: Event) => e.stopPropagation()}>
          <div class="plant-clone-dialog-header">
            <h2 class="plant-clone-dialog-title">Pflanze klonen</h2>
            <button class="plant-clone-dialog-close" @click=${this._closeCloneDialog}>×</button>
          </div>
          
          <div class="plant-clone-dialog-content">
            <form class="plant-clone-dialog-form" @submit=${(e: Event) => { e.preventDefault(); this._executeClone(); }}>
              <div class="plant-clone-dialog-field">
                <label class="plant-clone-dialog-label" for="clone-name">Name</label>
                <input 
                  type="text" 
                  id="clone-name" 
                  class="plant-clone-dialog-input"
                  .value=${this._cloneData.name || ''}
                  @input=${(e: Event) => this._cloneData.name = (e.target as HTMLInputElement).value}
                  required
                >
              </div>

              <div class="plant-clone-dialog-field">
                <label class="plant-clone-dialog-label" for="clone-temp">Temperatursensor</label>
                <select 
                  id="clone-temp" 
                  class="plant-clone-dialog-input"
                  .value=${this._cloneData.temperature_sensor || ''}
                  @change=${(e: Event) => this._cloneData.temperature_sensor = (e.target as HTMLSelectElement).value}
                >
                  <option value="">Keiner</option>
                  ${Object.entries(this.hass?.states || {})
                    .filter(([id, entity]) => {
                      const hassEntity = entity as HassEntity;
                      return id.startsWith('sensor.') && 
                        hassEntity.attributes && 
                        hassEntity.attributes.device_class === 'temperature';
                    })
                    .map(([id, entity]) => {
                      const hassEntity = entity as HassEntity;
                      return html`<option value="${id}">${hassEntity.attributes.friendly_name || id}</option>`;
                    })
                  }
                </select>
              </div>

              <div class="plant-clone-dialog-field">
                <label class="plant-clone-dialog-label" for="clone-moisture">Feuchtigkeitssensor</label>
                <select 
                  id="clone-moisture" 
                  class="plant-clone-dialog-input"
                  .value=${this._cloneData.moisture_sensor || ''}
                  @change=${(e: Event) => this._cloneData.moisture_sensor = (e.target as HTMLSelectElement).value}
                >
                  <option value="">Keiner</option>
                  ${Object.entries(this.hass?.states || {})
                    .filter(([id, entity]) => {
                      const hassEntity = entity as HassEntity;
                      return id.startsWith('sensor.') && 
                        hassEntity.attributes && 
                        hassEntity.attributes.device_class === 'moisture';
                    })
                    .map(([id, entity]) => {
                      const hassEntity = entity as HassEntity;
                      return html`<option value="${id}">${hassEntity.attributes.friendly_name || id}</option>`;
                    })
                  }
                </select>
              </div>

              <div class="plant-clone-dialog-field">
                <label class="plant-clone-dialog-label" for="clone-conductivity">Leitfähigkeitssensor</label>
                <select 
                  id="clone-conductivity" 
                  class="plant-clone-dialog-input"
                  .value=${this._cloneData.conductivity_sensor || ''}
                  @change=${(e: Event) => this._cloneData.conductivity_sensor = (e.target as HTMLSelectElement).value}
                >
                  <option value="">Keiner</option>
                  ${Object.entries(this.hass?.states || {})
                    .filter(([id, entity]) => {
                      const hassEntity = entity as HassEntity;
                      return id.startsWith('sensor.') && 
                        hassEntity.attributes && 
                        hassEntity.attributes.device_class === 'conductivity';
                    })
                    .map(([id, entity]) => {
                      const hassEntity = entity as HassEntity;
                      return html`<option value="${id}">${hassEntity.attributes.friendly_name || id}</option>`;
                    })
                  }
                </select>
              </div>

              <div class="plant-clone-dialog-field">
                <label class="plant-clone-dialog-label" for="clone-illuminance">Helligkeitssensor</label>
                <select 
                  id="clone-illuminance" 
                  class="plant-clone-dialog-input"
                  .value=${this._cloneData.illuminance_sensor || ''}
                  @change=${(e: Event) => this._cloneData.illuminance_sensor = (e.target as HTMLSelectElement).value}
                >
                  <option value="">Keiner</option>
                  ${Object.entries(this.hass?.states || {})
                    .filter(([id, entity]) => {
                      const hassEntity = entity as HassEntity;
                      return id.startsWith('sensor.') && 
                        hassEntity.attributes && 
                        hassEntity.attributes.device_class === 'illuminance';
                    })
                    .map(([id, entity]) => {
                      const hassEntity = entity as HassEntity;
                      return html`<option value="${id}">${hassEntity.attributes.friendly_name || id}</option>`;
                    })
                  }
                </select>
              </div>

              <div class="plant-clone-dialog-field">
                <label class="plant-clone-dialog-label" for="clone-humidity">Luftfeuchtigkeitssensor</label>
                <select 
                  id="clone-humidity" 
                  class="plant-clone-dialog-input"
                  .value=${this._cloneData.humidity_sensor || ''}
                  @change=${(e: Event) => this._cloneData.humidity_sensor = (e.target as HTMLSelectElement).value}
                >
                  <option value="">Keiner</option>
                  ${Object.entries(this.hass?.states || {})
                    .filter(([id, entity]) => {
                      const hassEntity = entity as HassEntity;
                      return id.startsWith('sensor.') && 
                        hassEntity.attributes && 
                        hassEntity.attributes.device_class === 'humidity';
                    })
                    .map(([id, entity]) => {
                      const hassEntity = entity as HassEntity;
                      return html`<option value="${id}">${hassEntity.attributes.friendly_name || id}</option>`;
                    })
                  }
                </select>
              </div>

              <div class="plant-clone-dialog-field">
                <label class="plant-clone-dialog-label" for="clone-power">Energieverbrauchssensor</label>
                <select 
                  id="clone-power" 
                  class="plant-clone-dialog-input"
                  .value=${this._cloneData.power_consumption_sensor || ''}
                  @change=${(e: Event) => this._cloneData.power_consumption_sensor = (e.target as HTMLSelectElement).value}
                >
                  <option value="">Keiner</option>
                  ${Object.entries(this.hass?.states || {})
                    .filter(([id, entity]) => {
                      const hassEntity = entity as HassEntity;
                      return id.startsWith('sensor.') && 
                        hassEntity.attributes && 
                        hassEntity.attributes.device_class === 'energy';
                    })
                    .map(([id, entity]) => {
                      const hassEntity = entity as HassEntity;
                      return html`<option value="${id}">${hassEntity.attributes.friendly_name || id}</option>`;
                    })
                  }
                </select>
              </div>

              <div class="plant-clone-dialog-field">
                <label class="plant-clone-dialog-label" for="clone-ph">pH-Sensor</label>
                <select 
                  id="clone-ph" 
                  class="plant-clone-dialog-input"
                  .value=${this._cloneData.ph_sensor || ''}
                  @change=${(e: Event) => this._cloneData.ph_sensor = (e.target as HTMLSelectElement).value}
                >
                  <option value="">Keiner</option>
                  ${Object.entries(this.hass?.states || {})
                    .filter(([id, entity]) => {
                      const hassEntity = entity as HassEntity;
                      return id.startsWith('sensor.') && 
                        hassEntity.attributes && 
                        hassEntity.attributes.device_class === 'ph';
                    })
                    .map(([id, entity]) => {
                      const hassEntity = entity as HassEntity;
                      return html`<option value="${id}">${hassEntity.attributes.friendly_name || id}</option>`;
                    })
                  }
                </select>
              </div>

              <div class="plant-clone-dialog-actions">
                <button type="button" class="plant-clone-dialog-button secondary" @click=${this._closeCloneDialog}>Abbrechen</button>
                <button type="submit" class="plant-clone-dialog-button primary">Klonen</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
    }

  static styles = plantFlyoutMenuStyles;
}  