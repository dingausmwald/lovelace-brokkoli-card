import { CSSResult, HTMLTemplateResult, LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant, LovelaceCardEditor } from 'custom-card-helpers';
import './components/sensor-assignment';
import './sensor-assignment-editor';
import { TranslationUtils } from './utils/translation-utils';

export const SENSOR_ASSIGNMENT_CARD_NAME = 'brokkoli-sensor-assignment-card';
export const SENSOR_ASSIGNMENT_CARD_EDITOR_NAME = 'brokkoli-sensor-assignment-card-editor';

export interface BrokkoliSensorAssignmentCardConfig {
  type: string;
  title?: string;
}

interface CustomCard {
  type: string;
  name: string;
  preview: boolean;
  description: string;
}

interface CustomCardsWindow extends Window {
  customCards?: CustomCard[];
}

declare const window: CustomCardsWindow;

window.customCards = window.customCards || [];
window.customCards.push({
  type: SENSOR_ASSIGNMENT_CARD_NAME,
  name: 'Brokkoli Sensor-Zuweisung',
  preview: true,
  description: 'Sensoren per Drag & Drop Pflanzen zuweisen',
});

@customElement(SENSOR_ASSIGNMENT_CARD_NAME)
export default class BrokkoliSensorAssignmentCard extends LitElement {
  @property({ attribute: false }) _hass?: HomeAssistant;
  @property() config?: BrokkoliSensorAssignmentCardConfig;

  setConfig(config: BrokkoliSensorAssignmentCardConfig): void {
    this.config = { ...config };
  }

  set hass(hass: HomeAssistant) {
    this._hass = hass;
    TranslationUtils.initializeTranslations(hass).then(() => {
      this.requestUpdate();
    });
  }

  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement(SENSOR_ASSIGNMENT_CARD_EDITOR_NAME) as LovelaceCardEditor;
  }

  static getStubConfig() {
    return {
      type: `custom:${SENSOR_ASSIGNMENT_CARD_NAME}`,
      title: 'Sensor-Zuweisung',
    };
  }

  render(): HTMLTemplateResult {
    if (!this.config || !this._hass) {
      return html``;
    }

    return html`
      <ha-card>
        ${this.config.title ? html`<h1 class="card-header">${this.config.title}</h1>` : ''}
        <div class="card-content no-padding">
          <sensor-assignment .hass=${this._hass}></sensor-assignment>
        </div>
      </ha-card>
    `;
  }

  getCardSize(): number {
    return 4;
  }

  static get styles(): CSSResult {
    return css`
      .no-padding {
        padding: 0 !important;
      }
    `;
  }
}
