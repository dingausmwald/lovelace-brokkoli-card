import { HomeAssistant } from 'custom-card-helpers';
import { HomeAssistantEntity } from '../types/brokkoli-list-card-types';
import { html, HTMLTemplateResult } from 'lit';
import { SensorUtils } from './sensor-utils';
import { getFieldDefinition } from './field-definitions';
import { TranslationUtils } from './translation-utils';

export interface TemplateOptions {
    hass: HomeAssistant;
    plant: HomeAssistantEntity;
    columnId: string;
    onInput: (event: Event | KeyboardEvent, type: 'number' | 'select' | 'text' | 'date') => void;
    onClick: (event: Event) => void;
    onRowClick: (event: Event) => void;
}

export class TemplateUtils {
    static renderDateInput(value: string | undefined, options: TemplateOptions): HTMLTemplateResult {
        // Die Integration speichert Phasendaten als "%Y-%m-%d %H:%M:%S", also mit
        // Leerzeichen statt ISO-T. Nur auf 'T' zu trennen liess den Zeitanteil
        // stehen, und ein input[type=date] akzeptiert ausschliesslich
        // yyyy-MM-dd -- das Feld blieb leer, Loeschen und Enter bewirkten
        // nichts, weil sich der Wert nie aenderte. Auf beide Trenner splitten.
        return html`
            <input
                type="date"
                .value="${value?.split(/[T ]/)[0] || ''}"
                @change=${(e: Event) => options.onInput(e, 'date')}
                @click=${(e: Event) => e.stopPropagation()}
                class="date-input"
            >
        `;
    }

    static renderNumberInput(
        value: string | number | undefined,
        unit: string,
        options: TemplateOptions,
        step: number = 0.1
    ): HTMLTemplateResult {
        const field = getFieldDefinition(options.columnId);
        return html`
            <input
                type="number"
                step="${field?.validation?.step || step}"
                min="${field?.validation?.min || 0}"
                .value="${value || ''}"
                @keydown=${(e: KeyboardEvent) => options.onInput(e, 'number')}
                @click=${(e: Event) => e.stopPropagation()}
                class="numeric-input"
            > ${field?.unit || unit}
        `;
    }

    static renderSelectInput(
        value: string | undefined,
        selectOptions: string[],
        options: TemplateOptions,
        className: string
    ): HTMLTemplateResult {
        const field = getFieldDefinition(options.columnId);
        const availableOptions = field?.options ? field.options(options.hass, options.plant) : selectOptions;
        
        return html`
            <select
                @change=${(e: Event) => options.onInput(e, 'select')}
                @click=${(e: Event) => e.stopPropagation()}
                class="${className}"
            >
                ${availableOptions.map(option => html`
                    <option value="${option}" ?selected=${option === value}>
                        ${option}
                    </option>
                `)}
            </select>
        `;
    }

    static renderTextInput(
        value: string | undefined,
        options: TemplateOptions,
        isTextarea: boolean = false
    ): HTMLTemplateResult {
        if (isTextarea) {
            return html`
                <textarea
                    .value="${value || ''}"
                    @keydown=${(e: KeyboardEvent) => options.onInput(e, 'text')}
                    @click=${(e: Event) => e.stopPropagation()}
                    class="notes-textarea"
                ></textarea>
            `;
        }
        return html`
            <input
                type="text"
                .value="${value || ''}"
                @keydown=${(e: KeyboardEvent) => options.onInput(e, 'text')}
                @click=${(e: Event) => e.stopPropagation()}
                class="text-input"
            >
        `;
    }

    static renderSensorCell(options: TemplateOptions): HTMLTemplateResult {
        const { hass, plant, columnId } = options;
        const sensorInfo = SensorUtils.getSensorInfo(hass, plant, columnId);
        const thresholds = SensorUtils.getSensorThresholds(hass, plant, columnId);
        const pct = 100 * Math.max(0, Math.min(1, (sensorInfo.value - thresholds.min) / (thresholds.max - thresholds.min)));
        const status = SensorUtils.calculateSensorStatus(sensorInfo.value, thresholds.min, thresholds.max);
        
        return html`
            <div class="sensor-cell" @click=${options.onClick}>
                <div class="meter-container">
                    <div class="meter red">
                        <span class="${status}" style="width: 100%;"></span>
                    </div>
                    <div class="meter green">
                        <span class="${status}" style="width:${status !== 'unavailable' ? pct : "0"}%;"></span>
                    </div>
                    <div class="meter red">
                        <span class="bad" style="width:${status !== 'unavailable' && sensorInfo.value > thresholds.max ? 100 : 0}%;"></span>
                    </div>
                </div>
                <div class="sensor-value">
                    ${sensorInfo.value} ${sensorInfo.unit}
                </div>
            </div>
        `;
    }

    static renderBadge(
        value: string | undefined,
        options: TemplateOptions,
        type: 'status' | 'phase' | 'cycle' | 'area'
    ): HTMLTemplateResult {
        const classes = {
            status: `status-badge ${value?.toLowerCase() || ''}`,
            phase: 'phase-badge',
            cycle: 'cycle-badge',
            area: 'area-badge'
        };

        return html`
            <div class="${classes[type]}" @click=${options.onClick}>
                ${value || '-'}
            </div>
        `;
    }

    static renderWebsiteCell(
        value: string | undefined,
        options: TemplateOptions,
        isEditing: boolean
    ): HTMLTemplateResult {
        if (isEditing) {
            return this.renderTextInput(value, options);
        }

        return html`
            <div class="website-container">
                <span class="website-text text-ellipsis" @click=${options.onClick}>
                    ${value || '-'}
                </span>
                ${value ? html`
                    <ha-icon-button
                        .label=${TranslationUtils.translateUI(options.hass, 'open')}
                        @click=${(e: Event) => {
                            e.stopPropagation();
                            window.open(value, '_blank');
                        }}
                        class="website-icon-button"
                    >
                        <ha-icon icon="mdi:open-in-new" class="website-icon"></ha-icon>
                    </ha-icon-button>
                ` : ''}
            </div>
        `;
    }

    static renderPlantName(
        name: string,
        picture: string | undefined,
        options: TemplateOptions
    ): HTMLTemplateResult {
        return html`
            <div class="plant-name">
                ${picture ? html`
                    <img src="${picture}" alt="${name}" @click="${(e: Event) => {
                        e.stopPropagation();
                        const customEvent = new CustomEvent('flower-image-click', {
                            detail: { entityId: options.plant.entity_id },
                            bubbles: true,
                            composed: true
                        });
                        e.target.dispatchEvent(customEvent);
                        options.onClick(e);
                    }}">
                ` : html`
                    <div class="plant-icon">
                        <ha-icon icon="mdi:flower"></ha-icon>
                    </div>
                `}
                ${name}
            </div>
        `;
    }
} 