import { LitElement, html, css, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, fireEvent, LovelaceCardEditor } from 'custom-card-helpers';
import { BrokkoliListCardConfig } from './types/brokkoli-list-card-types';
import { FIELD_DEFINITIONS } from './utils/field-definitions';

// Internes Datenformat des Editors. show_columns ist im Config-Schema ein
// Dict {col_id: bool}; das ha-form arbeitet einfacher mit einem Array.
interface EditorData {
  title?: string;
  area?: string;
  identifier?: string;
  enabled_columns: string[];
  search_enabled: boolean;
  search_placeholder?: string;
  multiselect_enabled: boolean;
  filter_enabled: boolean;
  add_plant_enabled: boolean;
  add_plant_position: 'top' | 'bottom';
}

const columnOptions = FIELD_DEFINITIONS.map(f => ({
  value: f.id,
  label: typeof f.name === 'string' ? f.name : f.id,
}));

@customElement('brokkoli-list-card-editor')
export class BrokkoliListCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config?: BrokkoliListCardConfig;

  public setConfig(config: BrokkoliListCardConfig): void {
    this._config = config;
  }

  private _toEditorData(): EditorData {
    const cfg = this._config ?? ({} as BrokkoliListCardConfig);
    const enabled_columns = cfg.show_columns
      ? Object.entries(cfg.show_columns).filter(([, v]) => v).map(([k]) => k)
      : [];
    return {
      title: cfg.title,
      area: cfg.area,
      identifier: cfg.identifier,
      enabled_columns,
      search_enabled: cfg.search?.enabled ?? true,
      search_placeholder: cfg.search?.placeholder,
      multiselect_enabled: cfg.multiselect?.enabled ?? false,
      filter_enabled: cfg.filter?.enabled ?? true,
      add_plant_enabled: cfg.add_plant?.enabled ?? true,
      add_plant_position: cfg.add_plant?.position ?? 'bottom',
    };
  }

  private _fromEditorData(data: EditorData): BrokkoliListCardConfig {
    const show_columns: Record<string, boolean> = {};
    for (const id of data.enabled_columns) show_columns[id] = true;
    return {
      ...this._config!,
      type: this._config?.type ?? 'custom:brokkoli-list-card',
      title: data.title,
      area: data.area,
      identifier: data.identifier,
      show_columns,
      search: { enabled: data.search_enabled, placeholder: data.search_placeholder ?? 'Suche...' },
      multiselect: { ...(this._config?.multiselect ?? { showbydefault: false }), enabled: data.multiselect_enabled },
      filter: { ...(this._config?.filter ?? { showbydefault: false }), enabled: data.filter_enabled },
      add_plant: { enabled: data.add_plant_enabled, position: data.add_plant_position },
    };
  }

  private _schema = [
    { name: 'title', selector: { text: {} } },
    { name: 'area', selector: { area: {} } },
    { name: 'identifier', selector: { text: {} } },
    {
      name: 'enabled_columns',
      selector: { select: { multiple: true, mode: 'list', options: columnOptions } },
    },
    { name: 'search_enabled', selector: { boolean: {} } },
    { name: 'search_placeholder', selector: { text: {} } },
    { name: 'multiselect_enabled', selector: { boolean: {} } },
    { name: 'filter_enabled', selector: { boolean: {} } },
    { name: 'add_plant_enabled', selector: { boolean: {} } },
    {
      name: 'add_plant_position',
      selector: {
        select: {
          mode: 'dropdown',
          options: [
            { value: 'top', label: 'Oben' },
            { value: 'bottom', label: 'Unten' },
          ],
        },
      },
    },
  ];

  protected render() {
    if (!this.hass || !this._config) return html``;
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._toEditorData()}
        .schema=${this._schema}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  private _computeLabel = (schema: { name: string }): string => {
    const labels: Record<string, string> = {
      title: 'Titel',
      area: 'Area-Filter',
      identifier: 'Identifier (für Plant-/Area-Card-Verkn.)',
      enabled_columns: 'Sichtbare Spalten',
      search_enabled: 'Suche aktiviert',
      search_placeholder: 'Suche-Placeholder',
      multiselect_enabled: 'Multi-Select aktiviert',
      filter_enabled: 'Filter aktiviert',
      add_plant_enabled: '"Pflanze hinzufügen" Button',
      add_plant_position: 'Button-Position',
    };
    return labels[schema.name] ?? schema.name;
  };

  private _valueChanged(ev: CustomEvent): void {
    fireEvent(this, 'config-changed', { config: this._fromEditorData(ev.detail.value) });
  }

  static get styles(): CSSResultGroup {
    return css`ha-form { display: block; }`;
  }
}
