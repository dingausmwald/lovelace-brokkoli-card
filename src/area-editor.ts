import { LitElement, html, css, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, fireEvent, LovelaceCardEditor } from 'custom-card-helpers';
// Type-only-Import vermeidet die zirkuläre Side-Effect-Schleife —
// brokkoli-area-card importiert dieses Modul oben.
import type { BrokkoliAreaCardConfig } from './brokkoli-area-card';
import { plantAttributes } from './utils/constants';

// Sensoren, die als Ring oder Label im Area-Grid sinnvoll darstellbar sind.
const ringOptions = [
  { value: 'health', label: 'Health' },
  ...plantAttributes,
];

@customElement('brokkoli-area-card-editor')
export class BrokkoliAreaCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config?: BrokkoliAreaCardConfig;

  public setConfig(config: BrokkoliAreaCardConfig): void {
    this._config = config;
  }

  private get _schema() {
    return [
      { name: 'title', selector: { text: {} } },
      { name: 'area', selector: { area: {} } },
      {
        name: 'entities',
        selector: {
          entity: {
            multiple: true,
            filter: [{ domain: 'plant' }, { domain: 'cycle' }],
          },
        },
      },
      {
        name: 'show_rings',
        selector: {
          select: {
            multiple: true,
            mode: 'list',
            options: ringOptions,
          },
        },
      },
      {
        name: 'show_labels',
        selector: {
          select: {
            multiple: true,
            mode: 'list',
            options: ringOptions,
          },
        },
      },
      {
        name: 'heatmap',
        selector: {
          select: {
            mode: 'dropdown',
            options: [{ value: '', label: 'Aus' }, ...ringOptions],
          },
        },
      },
      { name: 'heatmap_color', selector: { color_rgb: {} } },
      { name: 'heatmap_secondary_color', selector: { color_rgb: {} } },
      {
        name: 'heatmap_opacity',
        selector: { number: { min: 0, max: 1, step: 0.05, mode: 'slider' } },
      },
      { name: 'legend', selector: { boolean: {} } },
      { name: 'identifier', selector: { text: {} } },
    ];
  }

  protected render() {
    if (!this.hass || !this._config) return html``;
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._schema}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  private _computeLabel = (schema: { name: string }): string => {
    const labels: Record<string, string> = {
      title: 'Titel',
      area: 'Area',
      entities: 'Pflanzen / Cycles (manuell)',
      show_rings: 'Sensor-Ringe',
      show_labels: 'Sensor-Labels (Mitte)',
      heatmap: 'Heatmap-Sensor',
      heatmap_color: 'Heatmap-Farbe',
      heatmap_secondary_color: 'Heatmap-Sekundärfarbe',
      heatmap_opacity: 'Heatmap-Opacity',
      legend: 'Legende anzeigen',
      identifier: 'Identifier (für List-/Plant-Card-Verkn.)',
    };
    return labels[schema.name] ?? schema.name;
  };

  private _valueChanged(ev: CustomEvent): void {
    fireEvent(this, 'config-changed', { config: ev.detail.value });
  }

  static get styles(): CSSResultGroup {
    return css`ha-form { display: block; }`;
  }
}
