import { LitElement, html, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import { TranslationUtils } from '../utils/translation-utils';
import { dialogStyles } from '../styles/dialog-styles';

interface PlantEntity {
    entity_id: string;
    attributes?: { friendly_name?: string };
}

/** Rückfrage vor dem Löschen einer Pflanze, gemeinsam für alle Karten. */
const isElementDefined = customElements.get('plant-delete-dialog');

class PlantDeleteDialogClass extends LitElement {
    @property({ attribute: false }) hass?: HomeAssistant;
    @property({ attribute: false }) plant?: PlantEntity;
    // Mehrfachauswahl der List-Card: dieselbe Rueckfrage, mehrere Pflanzen.
    @property({ attribute: false }) plants?: PlantEntity[];

    @state() private _busy = false;

    private _close() {
        this.dispatchEvent(new CustomEvent('dialog-closed', { bubbles: true, composed: true }));
    }

    private get _betroffen(): PlantEntity[] {
        return this.plants?.length ? this.plants : (this.plant ? [this.plant] : []);
    }

    private async _delete() {
        if (!this.hass || this._busy || this._betroffen.length === 0) return;
        this._busy = true;
        try {
            for (const pflanze of this._betroffen) {
                await this.hass.callService('plant', 'remove_plant', {
                    plant_entity: pflanze.entity_id
                });
            }
            this.dispatchEvent(new CustomEvent('plant-deleted', {
                bubbles: true,
                composed: true,
                detail: { entity_ids: this._betroffen.map(p => p.entity_id) }
            }));
            this._close();
        } catch (error) {
            console.error('Error removing plant:', error);
        } finally {
            this._busy = false;
        }
    }

    render(): TemplateResult {
        if (!this.hass || this._betroffen.length === 0) return html``;
        const namen = this._betroffen.map(p => p.attributes?.friendly_name || p.entity_id);

        return html`
            <div class="backdrop" @click=${(e: Event) => e.stopPropagation()}>
                <div class="dialog" @click=${(e: Event) => e.stopPropagation()}>
                    <div class="header">
                        <h2>${TranslationUtils.translateUI(this.hass, 'delete_plant')}</h2>
                        <button class="close" @click=${this._close}>×</button>
                    </div>
                    <div class="body">
                        <p><strong>${namen.join(', ')}</strong></p>
                        <p>${TranslationUtils.translateUI(this.hass, 'delete_plant_confirmation')}</p>
                        <div class="actions">
                            <button class="secondary" @click=${this._close}>
                                ${TranslationUtils.translateUI(this.hass, 'cancel')}
                            </button>
                            <button class="danger" ?disabled=${this._busy} @click=${this._delete}>
                                ${TranslationUtils.translateUI(this.hass, 'confirm_delete')}
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
    customElements.define('plant-delete-dialog', PlantDeleteDialogClass);
}

export const PlantDeleteDialog = isElementDefined
    ? customElements.get('plant-delete-dialog')
    : PlantDeleteDialogClass;
