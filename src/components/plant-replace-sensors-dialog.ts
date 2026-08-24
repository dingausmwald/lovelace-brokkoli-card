import { LitElement, html, css, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import { TranslationUtils } from '../utils/translation-utils';
import { SENSOR_SOURCE_TYPES, getSourceSensors } from '../utils/sensor-source-utils';
import { dialogStyles } from '../styles/dialog-styles';

interface PlantEntity {
    entity_id: string;
}

interface PlantInfoResult {
    [key: string]: unknown;
    diagnostic_sensors?: Record<string, { entity_id?: string }>;
}

/**
 * Sensoren einer Pflanze austauschen -- gemeinsam für Brokkoli- und List-Card.
 *
 * Welche Entity gerade als Quelle hängt, steht im Attribut `external_sensor`
 * der jeweiligen Plant-Sensor-Entity; deren ID kommt aus plant/get_info und ist
 * damit sprachneutral. Beim Stromverbrauch sitzt die Zuweisung auf der
 * Gesamt-Entity (kWh), nicht auf der berechneten Watt-Entity.
 */
const isElementDefined = customElements.get('plant-replace-sensors-dialog');

class PlantReplaceSensorsDialogClass extends LitElement {
    @property({ attribute: false }) hass?: HomeAssistant;
    @property({ attribute: false }) plant?: PlantEntity;

    @state() private _result?: PlantInfoResult;
    @state() private _selection: Record<string, string> = {};
    @state() private _busy = false;

    connectedCallback(): void {
        super.connectedCallback();
        this._load();
    }

    private async _load() {
        if (!this.hass || !this.plant) return;
        try {
            const antwort = await this.hass.callWS({
                type: 'plant/get_info',
                entity_id: this.plant.entity_id
            }) as { result?: PlantInfoResult };
            this._result = antwort?.result;
        } catch (error) {
            console.error('Error loading plant info:', error);
        }
    }

    /** Die Entity, an der die Zuweisung dieses Typs haengt. */
    private _meterEntity(type: string): string | undefined {
        if (!this._result) return undefined;
        if (type === 'power_consumption') {
            return this._result.diagnostic_sensors?.total_power_consumption?.entity_id;
        }
        return (this._result[type] as { sensor?: string } | undefined)?.sensor;
    }

    private _currentSource(type: string): string | undefined {
        const meter = this._meterEntity(type);
        return meter
            ? this.hass?.states[meter]?.attributes?.external_sensor as string | undefined
            : undefined;
    }

    private _close() {
        this.dispatchEvent(new CustomEvent('dialog-closed', { bubbles: true, composed: true }));
    }

    private async _submit() {
        if (!this.hass || this._busy) return;
        this._busy = true;
        try {
            for (const typ of SENSOR_SOURCE_TYPES) {
                const neu = this._selection[typ.key];
                const meter = this._meterEntity(typ.key);
                if (!neu || !meter || neu === this._currentSource(typ.key)) continue;
                await this.hass.callService('plant', 'replace_sensor', {
                    meter_entity: meter,
                    new_sensor: neu
                });
            }
            this._close();
        } catch (error) {
            console.error('Error replacing sensors:', error);
        } finally {
            this._busy = false;
        }
    }

    render(): TemplateResult {
        if (!this.hass || !this.plant) return html``;

        return html`
            <div class="backdrop" @click=${(e: Event) => e.stopPropagation()}>
                <div class="dialog" @click=${(e: Event) => e.stopPropagation()}>
                    <div class="header">
                        <h2>${TranslationUtils.translateUI(this.hass, 'replace_sensors')}</h2>
                        <button class="close" @click=${this._close}>×</button>
                    </div>

                    <div class="body">
                        ${SENSOR_SOURCE_TYPES.map(typ => {
                            const verfuegbar = getSourceSensors(this.hass!, typ.key);
                            const aktuell = this._currentSource(typ.key);
                            return html`
                                <div class="field">
                                    <label>
                                        <ha-icon icon="${typ.icon}"></ha-icon>
                                        ${TranslationUtils.translateSensor(this.hass!, typ.label)}
                                    </label>
                                    <select @change=${(e: Event) => {
                                        this._selection = { ...this._selection, [typ.key]: (e.target as HTMLSelectElement).value };
                                    }}>
                                        <option value="">${TranslationUtils.translateUI(this.hass!, 'no_sensor')}</option>
                                        ${verfuegbar.length > 0
                                            ? verfuegbar.map(sensor => html`
                                                <option value="${sensor.entity_id}" ?selected=${sensor.entity_id === aktuell}>
                                                    ${sensor.name}
                                                </option>`)
                                            : html`<option value="" disabled>
                                                ${TranslationUtils.translateUI(this.hass!, 'no_matching_sensors')}
                                            </option>`}
                                    </select>
                                </div>
                            `;
                        })}

                        <div class="actions">
                            <button class="secondary" @click=${this._close}>
                                ${TranslationUtils.translateUI(this.hass, 'cancel')}
                            </button>
                            <button class="primary" ?disabled=${this._busy} @click=${this._submit}>
                                ${TranslationUtils.translateUI(this.hass, 'replace_sensors')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    static get styles() {
        return dialogStyles;
    }
}

if (!isElementDefined) {
    customElements.define('plant-replace-sensors-dialog', PlantReplaceSensorsDialogClass);
}

export const PlantReplaceSensorsDialog = isElementDefined
    ? customElements.get('plant-replace-sensors-dialog')
    : PlantReplaceSensorsDialogClass;
