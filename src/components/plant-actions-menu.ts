import { LitElement, html, css, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import { TranslationUtils } from '../utils/translation-utils';
import './plant-clone-dialog';
import './plant-replace-sensors-dialog';
import './plant-delete-dialog';

interface PlantEntity {
    entity_id: string;
    attributes?: { friendly_name?: string };
}

/**
 * Drei-Punkte-Menü mit den Aktionen einer einzelnen Pflanze: klonen, Sensoren
 * ersetzen, löschen. Die Dialoge dahinter sind dieselben, die auch die
 * Brokkoli- und die Area-Card benutzen.
 *
 * Das Menü selbst liegt `position: fixed` an der Schaltfläche -- in einer
 * Tabelle mit eigenem Scrollbereich würde ein absolut positioniertes Menü an
 * der Zellgrenze abgeschnitten.
 */
const isElementDefined = customElements.get('plant-actions-menu');

class PlantActionsMenuClass extends LitElement {
    @property({ attribute: false }) hass?: HomeAssistant;
    @property({ attribute: false }) plant?: PlantEntity;

    @state() private _open = false;
    @state() private _dialog: 'clone' | 'replace' | 'delete' | null = null;
    @state() private _position = { x: 0, y: 0 };

    private _closeOnOutside = () => { this._open = false; };

    connectedCallback(): void {
        super.connectedCallback();
        window.addEventListener('click', this._closeOnOutside);
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        window.removeEventListener('click', this._closeOnOutside);
    }

    private _toggle(e: Event) {
        e.stopPropagation();
        const knopf = (e.currentTarget as HTMLElement).getBoundingClientRect();
        this._position = { x: knopf.right, y: knopf.bottom };
        this._open = !this._open;
    }

    private _pick(e: Event, dialog: 'clone' | 'replace' | 'delete') {
        e.stopPropagation();
        this._open = false;
        this._dialog = dialog;
    }

    private _closeDialog = () => { this._dialog = null; };

    render(): TemplateResult {
        if (!this.hass || !this.plant) return html``;

        return html`
            <button class="trigger" @click=${this._toggle} title="${TranslationUtils.translateUI(this.hass, 'edit')}">
                <ha-icon icon="mdi:dots-vertical"></ha-icon>
            </button>

            ${this._open ? html`
                <div class="menu" style="left: ${this._position.x}px; top: ${this._position.y}px">
                    <div class="item" @click=${(e: Event) => this._pick(e, 'clone')}>
                        <ha-icon icon="mdi:content-copy"></ha-icon>
                        <span>${TranslationUtils.translateUI(this.hass, 'clone_plant')}</span>
                    </div>
                    <div class="item" @click=${(e: Event) => this._pick(e, 'replace')}>
                        <ha-icon icon="mdi:swap-horizontal"></ha-icon>
                        <span>${TranslationUtils.translateUI(this.hass, 'replace_sensors')}</span>
                    </div>
                    <div class="item danger" @click=${(e: Event) => this._pick(e, 'delete')}>
                        <ha-icon icon="mdi:delete"></ha-icon>
                        <span>${TranslationUtils.translateUI(this.hass, 'delete_plant')}</span>
                    </div>
                </div>
            ` : ''}

            ${this._dialog === 'clone' ? html`
                <plant-clone-dialog .hass=${this.hass} .plant=${this.plant}
                    @dialog-closed=${this._closeDialog}></plant-clone-dialog>` : ''}
            ${this._dialog === 'replace' ? html`
                <plant-replace-sensors-dialog .hass=${this.hass} .plant=${this.plant}
                    @dialog-closed=${this._closeDialog}></plant-replace-sensors-dialog>` : ''}
            ${this._dialog === 'delete' ? html`
                <plant-delete-dialog .hass=${this.hass} .plant=${this.plant}
                    @dialog-closed=${this._closeDialog}></plant-delete-dialog>` : ''}
        `;
    }

    static get styles() {
        return css`
            :host {
                display: inline-block;
            }

            .trigger {
                background: none;
                border: none;
                padding: 0;
                cursor: pointer;
                color: var(--primary-text-color);
                opacity: 0.7;
            }

            .trigger:hover {
                opacity: 1;
            }

            .menu {
                position: fixed;
                transform: translateX(-100%);
                background: var(--card-background-color, #fff);
                color: var(--primary-text-color);
                border-radius: 4px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
                min-width: 190px;
                padding: 4px 0;
                z-index: 9999;
            }

            .item {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 10px 16px;
                cursor: pointer;
                white-space: nowrap;
            }

            .item:hover {
                background: var(--secondary-background-color, #f0f0f0);
            }

            .item ha-icon {
                --mdc-icon-size: 20px;
            }

            .item.danger {
                color: var(--error-color, #db4437);
            }
        `;
    }
}

if (!isElementDefined) {
    customElements.define('plant-actions-menu', PlantActionsMenuClass);
}

export const PlantActionsMenu = isElementDefined
    ? customElements.get('plant-actions-menu')
    : PlantActionsMenuClass;
