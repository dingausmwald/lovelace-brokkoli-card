import { LitElement, html, css, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, fireEvent, LovelaceCardEditor } from 'custom-card-helpers';
// Type-only-Import vermeidet die zirkuläre Side-Effect-Schleife —
// brokkoli-sensor-assignment-card importiert dieses Modul oben.
import type { BrokkoliSensorAssignmentCardConfig } from './brokkoli-sensor-assignment-card';

@customElement('brokkoli-sensor-assignment-card-editor')
export class BrokkoliSensorAssignmentCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config?: BrokkoliSensorAssignmentCardConfig;

  public setConfig(config: BrokkoliSensorAssignmentCardConfig): void {
    this._config = config;
  }

  private get _schema() {
    return [
      { name: 'title', selector: { text: {} } },
      { name: 'height', selector: { text: {} } },
      {
        name: 'view',
        selector: {
          select: {
            mode: 'dropdown',
            options: [
              { value: 'flower', label: 'Blüte' },
              { value: 'list', label: 'Liste' },
            ],
          },
        },
      },
      {
        name: 'plant_phases',
        selector: {
          select: {
            multiple: true,
            mode: 'list',
            options: [
              { value: 'seeds', label: 'Samen' },
              { value: 'germination', label: 'Keimen' },
              { value: 'rooting', label: 'Wurzeln' },
              { value: 'growing', label: 'Wachstum' },
              { value: 'flowering', label: 'Blüte' },
              { value: 'harvested', label: 'Geerntet' },
              { value: 'removed', label: 'Entfernt' },
            ],
          },
        },
      },
      { name: 'plant_areas', selector: { area: { multiple: true } } },
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
      height: 'Höhe (z.B. 600px oder 70vh — leer = automatisch)',
      view: 'Startansicht der Pflanzen',
      plant_phases: 'Sichtbare Wachstumsphasen (leer = alle außer Entfernt)',
      plant_areas: 'Sichtbare Räume (leer = alle)',
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
