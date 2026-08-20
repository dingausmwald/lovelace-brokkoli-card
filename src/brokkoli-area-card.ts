import { CSSResult, HTMLTemplateResult, LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, LovelaceCardEditor } from 'custom-card-helpers';
import { positionStyles } from './styles/area-styles';
import './components/brokkoli-area';
import './area-editor';
import { PlantEntityUtils } from './utils/plant-entity-utils';
import { FilterUtils } from './utils/filter-utils';
import { TranslationUtils } from './utils/translation-utils';
import './components/plant-create-dialog';

// Konstanten für die Karte
export const AREA_CARD_NAME = "brokkoli-area-card";
export const AREA_CARD_EDITOR_NAME = "brokkoli-area-card-editor";

// Standardsensoren für die Ringe
export const default_show_rings: string[] = ['health', 'moisture', 'temperature'];

// Standardsensoren für Labels
export const default_show_labels: string[] = [];

// Konfigurationstyp für die Karte
export interface BrokkoliAreaCardConfig {
  type: string;
  title?: string;
  area?: string;
  entity?: string;
  entities?: string[];
  identifier?: string; // Eindeutiger Identifier für diese Karte
  show_rings?: string[]; // Welche Sensoren als Ringe angezeigt werden sollen
  show_labels?: string[]; // Welche Sensoren als Labels in der Mitte angezeigt werden sollen
  heatmap?: string; // Welcher Sensor für die Heatmap verwendet werden soll
  heatmap_color?: string; // Optionale benutzerdefinierte Farbe für die Heatmap
  heatmap_secondary_color?: string; // Optionale benutzerdefinierte sekundäre Farbe (Standard: weiß)
  heatmap_opacity?: number; // Optionale benutzerdefinierte Opacity für die Heatmap (Standard: 0.8)
  legend?: boolean; // Ob die Legende angezeigt werden soll (Standard: true)
  // Explizite Maße. grid_options greift nur im Sections-Layout; im
  // Masonry-Layout bleibt die Karte sonst auf Spaltenbreite und wirkt schmal.
  // Zahl = Pixel, String = beliebige CSS-Länge (z.B. "60vh", "800px").
  height?: number | string;
  width?: number | string;
}

// Registriere die Karte
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
  type: AREA_CARD_NAME,
  name: 'Brokkoli Area Card',
  preview: true,
  description: 'Zeigt die Positionen von Pflanzen in einem Bereich an',
});

@customElement(AREA_CARD_NAME)
export default class BrokkoliAreaCard extends LitElement {
  @property({ attribute: false }) _hass?: HomeAssistant;
  @property() config?: BrokkoliAreaCardConfig;

  // Zustandsvariablen
  @state() private _error?: string;
  @state() private _selectedEntityId?: string;

  // Wird aufgerufen, wenn die Konfiguration gesetzt wird
  setConfig(config: BrokkoliAreaCardConfig): void {
    if (!config.area && !config.entity && !config.entities?.length) {
      throw new Error(this._hass ? TranslationUtils.translateUI(this._hass, 'area_config_error') : "Du musst mindestens eine Area, eine Entität oder eine Liste von Entitäten definieren");
    }

    this.config = {
      ...config,
      show_rings: config.show_rings || [...default_show_rings],
      show_labels: config.show_labels || [],
      legend: config.legend === undefined ? true : config.legend
    };
  }

  // Wird aufgerufen, wenn Home Assistant aktualisiert wird
  set hass(hass: HomeAssistant) {
    this._hass = hass;
    
    // Initialize translations before first render
    TranslationUtils.initializeTranslations(hass).then(() => {
      this.requestUpdate();
    });
  }

  // Statische Methode, um das Konfigurationselement zu erhalten
  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    // Hier könnte später ein Editor implementiert werden
    return document.createElement(AREA_CARD_EDITOR_NAME) as LovelaceCardEditor;
  }

  // Statische Methode, um eine Standardkonfiguration zu erhalten
  static getStubConfig() {
    // Verwende die erste verfügbare Area oder "wohnzimmer" als Fallback
    return {
      type: "custom:brokkoli-area-card",
      title: 'Pflanzen-Bereich',
      area: "wohnzimmer"
    };
  }

  // Holt alle Pflanzen-Entitäten
  private _getAllPlantEntities(): string[] {
    if (!this._hass) return [];
    
    // Verwende PlantEntityUtils, um alle Pflanzen-Entitäten zu erhalten
    const plantEntities = PlantEntityUtils.getPlantEntities(this._hass, 'plant');
    return plantEntities.map(entity => entity.entity_id);
  }

  // Filtert Pflanzen-Entitäten nach Bereich
  private _getPlantEntitiesInArea(areaId: string): string[] {
    if (!this._hass) return [];
    
    // Hole alle Pflanzen-Entitäten
    const allPlantEntities = PlantEntityUtils.getPlantEntities(this._hass, 'plant');
    
    // Filtere nach dem angegebenen Bereich
    const entitiesInArea = allPlantEntities.filter(entity => {
      const entityAreaId = FilterUtils.getAreaForEntity(this._hass!, entity.entity_id);
      
      // Vergleiche Bereichs-IDs (Groß-/Kleinschreibung ignorieren)
      return entityAreaId && entityAreaId.toLowerCase() === areaId.toLowerCase();
    });
    
    return entitiesInArea.map(entity => entity.entity_id);
  }

  // Rendert die Karte
  render(): HTMLTemplateResult {
    if (!this.config || !this._hass) {
      return html``;
    }

    // Sammle alle Entitäten
    let entities: string[] = [];
    
    // Wenn eine Area angegeben ist, hole alle Pflanzen in dieser Area
    if (this.config.area) {
      entities = this._getPlantEntitiesInArea(this.config.area);
    } else {
      // Wenn keine Area angegeben ist, verwende alle Pflanzen-Entitäten
      entities = this._getAllPlantEntities();
    }
    
    // Füge manuell konfigurierte Entitäten hinzu
    if (this.config.entity) {
      entities.push(this.config.entity);
    }
    if (this.config.entities) {
      entities = [...entities, ...this.config.entities];
    }

    // Filtere ungültige Entitäten
    const validEntities = entities.filter(entityId => this._hass!.states[entityId]);

    const asLength = (v: number | string | undefined): string | null =>
      v === undefined || v === null ? null : (typeof v === 'number' ? `${v}px` : v);
    const cardStyle = [
      asLength(this.config.height) ? `height:${asLength(this.config.height)}` : '',
      asLength(this.config.width) ? `width:${asLength(this.config.width)}` : '',
    ].filter(Boolean).join(';');

    return html`
      <ha-card style=${cardStyle || nothing}>
        ${this.config.title ? html`<h1 class="card-header">${this.config.title}</h1>` : ''}
        <div class="card-content no-padding">
          <brokkoli-area
            .hass=${this._hass}
            .entities=${validEntities}
            .areaId=${this.config.area || ''}
            .showRings=${this.config.show_rings}
            .showLabels=${this.config.show_labels}
            .heatmap=${this.config.heatmap}
            .heatmapColor=${this.config.heatmap_color}
            .heatmapSecondaryColor=${this.config.heatmap_secondary_color}
            .heatmapOpacity=${this.config.heatmap_opacity}
            .showLegend=${this.config.legend}
          ></brokkoli-area>
        </div>
      </ha-card>
    `;
  }

  // Gibt die Größe der Karte zurück
  getCardSize(): number {
    // Masonry rechnet in Einheiten von rund 50px. Ohne explizite Höhe bleibt
    // es beim bisherigen Standard.
    const h = this.config?.height;
    if (typeof h === 'number') return Math.max(1, Math.round(h / 50));
    if (typeof h === 'string') {
      const px = /^(\d+(?:\.\d+)?)px$/.exec(h.trim());
      if (px) return Math.max(1, Math.round(parseFloat(px[1]) / 50));
    }
    return 3;
  }

  // Definiert die Styles für die Karte
  static get styles(): CSSResult {
    return css`
      ${positionStyles}
      
      .no-padding {
        padding: 0 !important;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    
    // Auf das Event hören, um die area_id bereitzustellen
    this.addEventListener('request-area-id', (e: CustomEvent) => {
      if (e.detail && typeof e.detail.callback === 'function') {
        // Die area_id aus der Konfiguration bereitstellen
        e.detail.callback(this.config.area || '');
      }
    });

    // Event-Listener für Pflanzenauswahl hinzufügen
    this.addEventListener('brokkoli-area-entity-selected', this._handleEntitySelected);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    
    // Event-Listener für Pflanzenauswahl entfernen
    this.removeEventListener('brokkoli-area-entity-selected', this._handleEntitySelected);
  }

  private _handleEntitySelected = (e: CustomEvent) => {
    // Speichere die ausgewählte Plant-ID
    this._selectedEntityId = e.detail.entityId;
    
    // Extrahiere auch die gesamten ausgewählten Entities, falls vorhanden
    const selectedEntities = e.detail.selectedEntities || [];
    
    // Wenn ein Identifier konfiguriert ist, sende ein Event für die Flower Card
    if (this.config?.identifier) {
      // Event erstellen und senden, ohne zu loggen
      const entitySelectedEvent = new CustomEvent('brokkoli-card-entity-selected', {
        bubbles: true,
        composed: true,
        detail: {
          sourceIdentifier: this.config.identifier,
          selectedEntityId: e.detail.entityId,
          selectedEntities: selectedEntities.length ? selectedEntities : (e.detail.entityId ? [e.detail.entityId] : [])
        }
      });
      window.dispatchEvent(entitySelectedEvent);
    }
  }
}
