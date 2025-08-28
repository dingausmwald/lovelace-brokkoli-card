import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import { TranslationUtils } from '../utils/translation-utils';

interface HassEntity {
  attributes: {
    device_class?: string;
    friendly_name?: string;
  };
  // weitere Eigenschaften können hier hinzugefügt werden
}



// Prüfen, ob das Element bereits definiert ist
const isElementDefined = customElements.get('plant-create-dialog');

// Klasse definieren
class PlantCreateDialogClass extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @property() position = { x: 0, y: 0 };
  @property() areaId?: string;

  // Schließt den Dialog
  closeDialog() {
    this.dispatchEvent(new CustomEvent('dialog-closed'));
  }

  // Erstellt eine neue Pflanze
  async createPlant(e: Event) {
    e.preventDefault();
    if (!this.hass) return;

    const formData = new FormData(e.target as HTMLFormElement);
    const data: Record<string, string> = {};

    // Formularfelder in Daten konvertieren
    formData.forEach((value, key) => {
      if (value !== '' && typeof value === 'string') {
        data[key] = value;
      }
    });

    try {
      // Direkter Aufruf des Services mit Unterstützung für Antworten
      const response = await this.hass.callWS({
        type: 'call_service',
        domain: 'plant',
        service: 'create_plant',
        service_data: data,
        return_response: true  // Wichtig: Explizit nach einer Antwort fragen
      }) as { response?: { entity_id?: string; device_id?: string } };

      // Die Antwort sollte direkt die entity_id und device_id enthalten
      if (response && response.response) {
        const { entity_id, device_id } = response.response;

        if (entity_id && device_id) {
          // Setze die Position und den Bereich direkt hier
          // Das Event plant-created wird jetzt in _setPositionAndArea gesendet
          await this._setPositionAndArea(entity_id, device_id, this.position, this.areaId);
        }
      }

      this.closeDialog();
    } catch {
      // Fehler ignorieren
    }
  }

  // Hilfsmethode zum Setzen der Position und des Bereichs
  private async _setPositionAndArea(entityId: string, deviceId: string, position: {x: number, y: number}, areaId?: string) {
    if (!this.hass) return;

    try {
      // Die Position wird jetzt von der Flower-Area-Komponente normalisiert
      // Wir senden ein Event mit den ursprünglichen Koordinaten
      this.dispatchEvent(new CustomEvent('plant-created', {
        bubbles: true,
        composed: true,
        detail: {
          entity_id: entityId,
          device_id: deviceId,
          position: position, // Originale Position, kann auch negativ sein
          area_id: areaId
        }
      }));

      // Nur den Bereich setzen, wenn area_id verfügbar
      if (areaId) {
        // Einfach zu lowercase konvertieren und Umlaute ersetzen
        const formattedAreaId = areaId.toLowerCase()
          .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
          .replace(/ß/g, 'ss');

        await this.hass.callService('plant', 'move_to_area', {
          device_id: [deviceId],
          area_id: formattedAreaId
        });
      }
    } catch {
      // Fehler ignorieren
    }
  }

  render() {
    if (!this.hass) return html``;

    return html`
      <div class="dialog-container">
        <div class="dialog-content">
          <div class="dialog-header">
            <h2>Neue Pflanze erstellen</h2>
            <button class="close-button" @click=${this.closeDialog}>×</button>
          </div>
          <form @submit=${this.createPlant}>
            <div class="form-field">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="form-field">
              <label for="strain">Strain</label>
              <input type="text" id="strain" name="strain" required>
            </div>
            <div class="form-field">
              <label for="breeder">Breeder</label>
              <input type="text" id="breeder" name="breeder" required>
            </div>
            <div class="form-field">
              <label for="plant_emoji">Icon</label>
              <input type="text" id="plant_emoji" name="plant_emoji" value="🥦">
            </div>
            <div class="form-field">
              <label for="growth_phase">Wachstumsphase</label>
              <select id="growth_phase" name="growth_phase" required>
                <option value="seeds">${TranslationUtils.translateGrowthPhase(this.hass, 'seeds')}</option>
                <option value="germination">${TranslationUtils.translateGrowthPhase(this.hass, 'germination')}</option>
                <option value="rooting" selected>${TranslationUtils.translateGrowthPhase(this.hass, 'rooting')}</option>
                <option value="growth">${TranslationUtils.translateGrowthPhase(this.hass, 'growth')}</option>
                <option value="flowering">${TranslationUtils.translateGrowthPhase(this.hass, 'flowering')}</option>
                <option value="removed">${TranslationUtils.translateGrowthPhase(this.hass, 'removed')}</option>
                <option value="harvested">${TranslationUtils.translateGrowthPhase(this.hass, 'harvested')}</option>
              </select>
            </div>

            <div class="form-field">
              <label for="temperature_sensor">Temperatursensor</label>
              <select id="temperature_sensor" name="temperature_sensor">
                <option value="">Keiner</option>
                ${Object.entries(this.hass.states)
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

            <div class="form-field">
              <label for="moisture_sensor">Feuchtigkeitssensor</label>
              <select id="moisture_sensor" name="moisture_sensor">
                <option value="">Keiner</option>
                ${Object.entries(this.hass.states)
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

            <div class="form-field">
              <label for="conductivity_sensor">Leitfähigkeitssensor</label>
              <select id="conductivity_sensor" name="conductivity_sensor">
                <option value="">Keiner</option>
                ${Object.entries(this.hass.states)
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

            <div class="form-field">
              <label for="ph_sensor">pH-Sensor</label>
              <select id="ph_sensor" name="ph_sensor">
                <option value="">Keiner</option>
                ${Object.entries(this.hass.states)
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

            <div class="form-field">
              <label for="illuminance_sensor">Helligkeitssensor</label>
              <select id="illuminance_sensor" name="illuminance_sensor">
                <option value="">Keiner</option>
                ${Object.entries(this.hass.states)
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

            <div class="form-field">
              <label for="humidity_sensor">Luftfeuchtigkeitssensor</label>
              <select id="humidity_sensor" name="humidity_sensor">
                <option value="">Keiner</option>
                ${Object.entries(this.hass.states)
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

            <div class="form-field">
              <label for="power_consumption_sensor">Energieverbrauchssensor</label>
              <select id="power_consumption_sensor" name="power_consumption_sensor">
                <option value="">Keiner</option>
                ${Object.entries(this.hass.states)
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

            <div class="form-actions">
              <button type="button" @click=${this.closeDialog}>Abbrechen</button>
              <button type="submit">Erstellen</button>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  static get styles() {
    return css`
      .dialog-container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }

      .dialog-content {
        background-color: var(--card-background-color, #fff);
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        width: 90%;
        max-width: 500px;
        max-height: 90vh;
        overflow-y: auto;
        padding: 1.5rem;
      }

      .dialog-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }

      .dialog-header h2 {
        margin: 0;
        font-size: 1.5rem;
      }

      .close-button {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.3rem;
        border-radius: 50%;
        line-height: 1;
        width: 2rem;
        height: 2rem;
      }

      .form-field {
        margin-bottom: 1rem;
      }

      label {
        display: block;
        margin-bottom: 0.3rem;
        font-weight: 500;
      }

      input, select {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 4px;
        font-size: 1rem;
      }

      .form-actions {
        display: flex;
        justify-content: flex-end;
        gap: 0.5rem;
        margin-top: 1.5rem;
      }

      button {
        cursor: pointer;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        font-size: 1rem;
        border: none;
      }

      button[type="submit"] {
        background-color: var(--primary-color);
        color: white;
      }
    `;
  }
}

// Nur definieren, wenn es noch nicht existiert
if (!isElementDefined) {
  customElements.define('plant-create-dialog', PlantCreateDialogClass);
}

// Exportiere die Klasse (entweder neu definiert oder bereits existierend)
export const PlantCreateDialog = isElementDefined
  ? customElements.get('plant-create-dialog') as CustomElementConstructor
  : PlantCreateDialogClass;