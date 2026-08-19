import { CSSResult, HTMLTemplateResult, LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant, LovelaceCardEditor } from 'custom-card-helpers';
import './components/sensor-assignment';
import type { SensorAssignmentView } from './components/sensor-assignment';
import './sensor-assignment-editor';
import { TranslationUtils } from './utils/translation-utils';

export const SENSOR_ASSIGNMENT_CARD_NAME = 'brokkoli-sensor-assignment-card';
export const SENSOR_ASSIGNMENT_CARD_EDITOR_NAME = 'brokkoli-sensor-assignment-card-editor';

export interface BrokkoliSensorAssignmentCardConfig {
  type: string;
  title?: string;
  // Beliebige CSS-Länge ("600px", "70vh") oder eine nackte Zahl = Pixel.
  // Nur nötig, wenn die View der Karte keine Höhe vorgibt (Masonry).
  // In Sections-Views zählt die eingestellte Zeilenzahl, in Panel-Views
  // füllt die Karte von sich aus den Bildschirm.
  height?: string | number;
  // Startansicht der Pflanzenspalte. Der Umschalter in der Karte überschreibt
  // sie nur für die laufende Sitzung, gespeichert wird hier.
  view?: SensorAssignmentView;
  // Sichtbare Wachstumsphasen. Leer/fehlend = alles außer "removed".
  plant_phases?: string[];
  // Sichtbare Räume (area_id). Leer/fehlend = alle Räume mit Pflanzen.
  plant_areas?: string[];
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

  connectedCallback(): void {
    super.connectedCallback();
    this.toggleAttribute('in-panel-view', this._isInPanelView());
  }

  // In einer Panel-View bekommt die Karte von HA keine Höhe: <hui-card> steht
  // dort auf `display: inline; height: auto`, ein height:100% am :host läuft
  // also ins Leere und die Karte wächst auf ihre Inhaltshöhe. Deshalb hier
  // erkennen und stattdessen gegen den Viewport rechnen. Die Kette geht über
  // mehrere Shadow-Roots, parentElement allein reicht nicht.
  private _isInPanelView(): boolean {
    let node: Node | null = this;
    while (node) {
      if (node instanceof HTMLElement && node.localName === 'hui-panel-view') return true;
      const parent: Node | null = (node as HTMLElement).parentElement;
      node = parent ?? ((node.getRootNode() as ShadowRoot).host ?? null);
    }
    return false;
  }

  private get _heightStyle(): string {
    const height = this.config?.height;
    if (height === undefined || height === '') return '';
    return typeof height === 'number' ? `height: ${height}px;` : `height: ${height};`;
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
      <ha-card style="${this._heightStyle}">
        ${this.config.title ? html`<h1 class="card-header">${this.config.title}</h1>` : ''}
        <div class="sa-card-body">
          <sensor-assignment
            .hass=${this._hass}
            .defaultView=${this.config.view ?? 'flower'}
            .defaultPhases=${this.config.plant_phases}
            .defaultAreas=${this.config.plant_areas}
          ></sensor-assignment>
        </div>
      </ha-card>
    `;
  }

  getCardSize(): number {
    return 6;
  }

  // Sections-View: ohne diese Angaben bekommt die Karte die Standardhöhe von
  // "auto" und ignoriert eine per Layout eingestellte Zeilenzahl.
  getGridOptions() {
    return {
      rows: 8,
      columns: 12,
      min_rows: 4,
      min_columns: 6,
    };
  }

  static get styles(): CSSResult {
    return css`
      /* Die Höhe muss von :host bis zur innersten Scroll-Box durchgereicht
         werden. Bricht die Kette an einer Stelle (fehlendes height:100% oder
         min-height:0), fällt der Inhalt auf seine natürliche Höhe zurück und
         die eingestellte Kartenhöhe bleibt teils leer bzw. wird überlaufen. */
      :host {
        display: block;
        height: 100%;
      }

      /* Panel-View: HA gibt hier keine Höhe vor, also selbst gegen den Viewport
         rechnen. --header-height ist die Variable, mit der HA seine Kopfleiste
         bemisst; die 8px sind der Außenabstand, den die Panel-View setzt. */
      :host([in-panel-view]) {
        height: calc(100vh - var(--header-height, 56px) - 8px);
      }

      ha-card {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
      }

      .card-header {
        flex: 0 0 auto;
        margin: 0;
        padding: 12px 16px 4px;
        font-size: 1.3em;
        font-weight: 400;
        line-height: 1.3;
      }

      .sa-card-body {
        flex: 1 1 auto;
        min-height: 0;
        display: flex;
      }

      sensor-assignment {
        flex: 1 1 auto;
        min-height: 0;
      }
    `;
  }
}
