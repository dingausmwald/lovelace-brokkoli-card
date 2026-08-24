import { LitElement, html, css, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import { TranslationUtils } from '../utils/translation-utils';
import { SENSOR_SOURCE_TYPES, getSourceSensors } from '../utils/sensor-source-utils';

interface PlantEntity {
    entity_id: string;
    attributes: { friendly_name?: string };
}

/**
 * Der Klon-Dialog beider Karten.
 *
 * Vorher hatte jede Karte ihren eigenen: die Area-Karte einen mit Dropdowns und
 * einem Namensvorschlag, die Brokkoli-Karte einen mit Freitextfeldern, in die
 * man Entity-IDs tippen musste. Beide lagen ohnehin im selben Bundle, ein
 * gemeinsames Element kostet also nichts und kann gar nicht auseinanderlaufen.
 */
const isElementDefined = customElements.get('plant-clone-dialog');

class PlantCloneDialogClass extends LitElement {
    @property({ attribute: false }) hass?: HomeAssistant;
    @property({ attribute: false }) plant?: PlantEntity;

    @state() private _data: Record<string, string> = {};
    @state() private _busy = false;

    connectedCallback(): void {
        super.connectedCallback();
        this._data = { name: this._nextCloneName() };
    }

    /** Erster freier Name der Form "<Quelle> <n>". */
    private _nextCloneName(): string {
        const basis = String(this.plant?.attributes?.friendly_name || this.plant?.entity_id || '');
        const vergeben = new Set(
            Object.entries(this.hass?.states ?? {})
                .filter(([id]) => id.startsWith('plant.'))
                .map(([, s]) => String((s as { attributes?: { friendly_name?: string } }).attributes?.friendly_name ?? ''))
        );
        let n = 1;
        while (vergeben.has(`${basis} ${n}`)) n++;
        return `${basis} ${n}`;
    }

    private _close() {
        this.dispatchEvent(new CustomEvent('dialog-closed', { bubbles: true, composed: true }));
    }

    private async _submit(e: Event) {
        e.preventDefault();
        if (!this.hass || !this.plant || this._busy) return;
        this._busy = true;

        try {
            // Leere Felder weglassen: ein leerer String ist keine gueltige
            // Entity-ID, das Service-Schema lehnt sonst den ganzen Aufruf ab.
            const angaben = Object.fromEntries(
                Object.entries(this._data).filter(([, v]) => v !== '' && v != null)
            );

            // Antwort anfordern -- sie traegt entity_id und device_id des Klons,
            // ohne die ihn niemand positionieren oder einem Raum zuordnen kann.
            const antwort = await this.hass.callWS({
                type: 'call_service',
                domain: 'plant',
                service: 'clone_plant',
                service_data: { source_entity_id: this.plant.entity_id, ...angaben },
                return_response: true
            }) as { response?: { entity_id?: string; device_id?: string } };

            this.dispatchEvent(new CustomEvent('plant-cloned', {
                bubbles: true,
                composed: true,
                detail: {
                    source_entity_id: this.plant.entity_id,
                    entity_id: antwort?.response?.entity_id,
                    device_id: antwort?.response?.device_id
                }
            }));
            this._close();
        } catch (error) {
            console.error('Error cloning plant:', error);
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
                        <h2>${TranslationUtils.translateUI(this.hass, 'clone_plant')}</h2>
                        <button class="close" @click=${this._close}>×</button>
                    </div>

                    <form @submit=${this._submit}>
                        <div class="field">
                            <label for="clone-name">${TranslationUtils.translateField(this.hass, 'friendly_name')}</label>
                            <input type="text" id="clone-name" required
                                .value=${this._data.name ?? ''}
                                @input=${(e: Event) => { this._data = { ...this._data, name: (e.target as HTMLInputElement).value }; }}>
                        </div>

                        ${SENSOR_SOURCE_TYPES.map(typ => html`
                            <div class="field">
                                <label for="clone-${typ.key}">
                                    <ha-icon icon="${typ.icon}"></ha-icon>
                                    ${TranslationUtils.translateSensor(this.hass!, typ.label)}
                                </label>
                                <select id="clone-${typ.key}"
                                    .value=${this._data[typ.field] ?? ''}
                                    @change=${(e: Event) => { this._data = { ...this._data, [typ.field]: (e.target as HTMLSelectElement).value }; }}>
                                    <option value="">${TranslationUtils.translateUI(this.hass!, 'no_sensor')}</option>
                                    ${getSourceSensors(this.hass!, typ.key).map(sensor => html`
                                        <option value="${sensor.entity_id}">${sensor.name}</option>
                                    `)}
                                </select>
                            </div>
                        `)}

                        <div class="actions">
                            <button type="button" class="secondary" @click=${this._close}>
                                ${TranslationUtils.translateUI(this.hass, 'cancel')}
                            </button>
                            <button type="submit" class="primary" ?disabled=${this._busy}>
                                ${TranslationUtils.translateUI(this.hass, 'clone')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `;
    }

    static get styles() {
        return css`
            .backdrop {
                position: fixed;
                inset: 0;
                background: rgba(0, 0, 0, 0.6);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
            }

            .dialog {
                background: var(--card-background-color, #fff);
                color: var(--primary-text-color);
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
                width: 90%;
                max-width: 420px;
                max-height: 85vh;
                overflow-y: auto;
            }

            .header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 12px 16px;
                border-bottom: 1px solid var(--divider-color, #e0e0e0);
            }

            .header h2 {
                margin: 0;
                font-size: 1.1rem;
            }

            .close {
                background: none;
                border: none;
                color: inherit;
                font-size: 1.4rem;
                line-height: 1;
                cursor: pointer;
            }

            form {
                padding: 16px;
            }

            .field {
                margin-bottom: 12px;
            }

            label {
                display: flex;
                align-items: center;
                gap: 6px;
                margin-bottom: 4px;
                font-size: 0.9rem;
            }

            label ha-icon {
                --mdc-icon-size: 18px;
                opacity: 0.7;
            }

            input, select {
                width: 100%;
                box-sizing: border-box;
                padding: 8px;
                border: 1px solid var(--divider-color, #e0e0e0);
                border-radius: 4px;
                background: var(--card-background-color, #fff);
                color: var(--primary-text-color);
                font-size: 1rem;
            }

            .actions {
                display: flex;
                justify-content: flex-end;
                gap: 8px;
                margin-top: 16px;
            }

            .actions button {
                padding: 8px 16px;
                border: none;
                border-radius: 4px;
                font-size: 1rem;
                cursor: pointer;
            }

            .primary {
                background: var(--primary-color);
                color: var(--text-primary-color, #fff);
            }

            .secondary {
                background: var(--secondary-background-color, #e0e0e0);
                color: var(--primary-text-color);
            }
        `;
    }
}

if (!isElementDefined) {
    customElements.define('plant-clone-dialog', PlantCloneDialogClass);
}

export const PlantCloneDialog = isElementDefined
    ? customElements.get('plant-clone-dialog')
    : PlantCloneDialogClass;
