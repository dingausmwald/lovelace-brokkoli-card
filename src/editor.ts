import { LitElement, html, css, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, fireEvent, LovelaceCardEditor } from 'custom-card-helpers';
import { BrokkoliCardConfig, DisplayType } from './types/brokkoli-card-types';
import { default_show_bars, default_show_elements, default_option_elements, initial_expanded_options, plantAttributes, elementOptions } from './utils/constants';
import { EVENT_TYPES } from './components/history';

// Optionen ohne header/options (die werden ohnehin nicht aufklappbar im
// Options-Menü angezeigt) — gilt sowohl für "Option Elements" als auch für
// "Default Expanded Options".
const contentElementOptions = elementOptions.filter(
  opt => opt.value !== 'header' && opt.value !== 'options',
);

const historyGroupOptions = [
  { label: 'Wachstumsphasen', value: EVENT_TYPES.PHASE },
  { label: 'Topfgrößen', value: EVENT_TYPES.POT },
  { label: 'Standorte', value: EVENT_TYPES.AREA },
  { label: 'Behandlungen', value: EVENT_TYPES.TREATMENT },
  { label: 'Bilder', value: EVENT_TYPES.IMAGE },
  { label: 'Journal', value: EVENT_TYPES.JOURNAL },
];

@customElement('brokkoli-card-editor')
export class BrokkoliCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config?: BrokkoliCardConfig;

  public setConfig(config: BrokkoliCardConfig): void {
    this._config = config;
  }

  private get _schema() {
    return [
      {
        name: 'entity',
        required: true,
        selector: { entity: { filter: [{ domain: 'plant' }, { domain: 'cycle' }] } },
      },
      {
        name: 'display_type',
        selector: {
          select: {
            mode: 'dropdown',
            options: [
              { value: DisplayType.Full, label: 'Full' },
              { value: DisplayType.Compact, label: 'Compact' },
            ],
          },
        },
      },
      {
        name: 'battery_sensor',
        selector: { entity: { filter: { domain: 'sensor', device_class: 'battery' } } },
      },
      {
        name: 'show_bars',
        selector: {
          select: {
            multiple: true,
            mode: 'list',
            options: plantAttributes.map(a => ({ value: a.value, label: a.label })),
          },
        },
      },
      {
        name: 'full_width_bars',
        selector: {
          select: {
            multiple: true,
            mode: 'list',
            options: plantAttributes.map(a => ({ value: a.value, label: a.label })),
          },
        },
      },
      {
        name: 'show_elements',
        selector: {
          select: {
            multiple: true,
            mode: 'list',
            options: elementOptions.map(o => ({ value: o.value, label: o.label })),
          },
        },
      },
      {
        name: 'option_elements',
        selector: {
          select: {
            multiple: true,
            mode: 'list',
            options: contentElementOptions.map(o => ({ value: o.value, label: o.label })),
          },
        },
      },
      {
        name: 'default_expanded_options',
        selector: {
          select: {
            multiple: true,
            mode: 'list',
            options: contentElementOptions.map(o => ({ value: o.value, label: o.label })),
          },
        },
      },
      {
        name: 'history_groups',
        selector: {
          select: {
            multiple: true,
            mode: 'list',
            options: historyGroupOptions.map(o => ({ value: o.value, label: o.label })),
          },
        },
      },
      {
        name: 'history_line_position',
        selector: {
          select: {
            mode: 'dropdown',
            options: [
              { value: 'left', label: 'Links' },
              { value: 'right', label: 'Rechts' },
            ],
          },
        },
      },
      { name: 'listen_to', selector: { text: {} } },
    ];
  }

  private _data(): BrokkoliCardConfig {
    return {
      show_bars: [...default_show_bars],
      show_elements: [...default_show_elements],
      option_elements: [...default_option_elements],
      default_expanded_options: [...initial_expanded_options],
      full_width_bars: [],
      ...this._config,
    } as BrokkoliCardConfig;
  }

  protected render() {
    if (!this.hass || !this._config) return html``;
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._data()}
        .schema=${this._schema}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  private _computeLabel = (schema: { name: string }): string => {
    // ha-form-Standard greift auf hass.localize(...) zu — dort gibt's
    // keine Übersetzung. Stattdessen mappen wir die wenigen Card-Felder
    // hier hart.
    const labels: Record<string, string> = {
      entity: 'Entity',
      display_type: 'Display Type',
      battery_sensor: 'Battery Sensor',
      show_bars: 'Show Bars',
      full_width_bars: 'Full Width Bars',
      show_elements: 'Show Elements',
      option_elements: 'Option Elements',
      default_expanded_options: 'Default Expanded Options',
      history_groups: 'History Groups',
      history_line_position: 'History Line Position',
      listen_to: 'Listen-to (List-Card Identifier)',
    };
    return labels[schema.name] ?? schema.name;
  };

  private _valueChanged(ev: CustomEvent): void {
    fireEvent(this, 'config-changed', { config: ev.detail.value });
  }

  static get styles(): CSSResultGroup {
    return css`
      ha-form { display: block; }
    `;
  }
}
