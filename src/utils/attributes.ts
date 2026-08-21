// import { HomeAssistant } from "custom-card-helpers";
import { DisplayType, DisplayedAttribute, DisplayedAttributes, Icons, Limits, UOM, UOMT } from "../types/brokkoli-card-types";
import { TemplateResult, html } from "lit";
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import BrokkoliCard from "../brokkoli-card";
import { default_show_bars } from "./constants";
import { moreInfo } from "./utils";
import { TranslationUtils } from "./translation-utils";

// export const renderBattery = (config: FlowerCardConfig, hass: HomeAssistant) => {
export const renderBattery = (card: BrokkoliCard) => {
    if(!card.config.battery_sensor) return html``;

    const battery_sensor = card._hass.states[card.config.battery_sensor];
    if(!battery_sensor) return html``;

    const state = parseInt(battery_sensor.state);

    const levels = [
        { threshold: 90, icon: "mdi:battery", color: "green" },
        { threshold: 80, icon: "mdi:battery-90", color: "green" },
        { threshold: 70, icon: "mdi:battery-80", color: "green" },
        { threshold: 60, icon: "mdi:battery-70", color: "green" },
        { threshold: 50, icon: "mdi:battery-60", color: "green" },
        { threshold: 40, icon: "mdi:battery-50", color: "green" },
        { threshold: 30, icon: "mdi:battery-40", color: "orange" },
        { threshold: 20, icon: "mdi:battery-30", color: "orange" },
        { threshold: 10, icon: "mdi:battery-20", color: "red" },
        { threshold: 0, icon: "mdi:battery-10", color: "red" },
        { threshold: -Infinity, icon: "mdi:battery-alert-variant-outline", color: "red" },
    ];

    const { icon, color } = levels.find(({ threshold }) => state > threshold) ||  { icon: "mdi:battery-alert-variant-outline", color: "red" };

    return html`
        <div class="battery tooltip" @click="${(e: Event) => { e.stopPropagation(); moreInfo(card, card.config.battery_sensor)}}">
            <div class="tip">${state}%</div>
            <ha-icon .icon="${icon}" style="color: ${color}"></ha-icon>
        </div>
    `;
}
// Abgeleitete Balken haben keinen eigenen externen Sensor -- sie werden aus
// einer anderen Messgroesse berechnet und stehen und fallen mit deren Zuweisung.
const BALKEN_QUELLE: Record<string, string> = {
    dli: 'illuminance',
    ppfd: 'illuminance',
    water_consumption: 'moisture',
    fertilizer_consumption: 'conductivity',
};

// Ein Balken ohne zugewiesenen Sensor hat nichts anzuzeigen: die Plant-Entity
// legt fuer jeden Typ eine Sensor-Entity an, ob zugewiesen oder nicht. Die
// Zuweisung steht als Attribut external_sensor an genau dieser Entity.
const hatZuweisung = (card: BrokkoliCard, elem: string): boolean => {
    const result = (card.plantinfo as {
        result?: Record<string, { sensor?: string } | undefined> & {
            diagnostic_sensors?: Record<string, { entity_id?: string }>;
        };
    })?.result;
    if (!result) return false;

    // Gesundheit ist ein Helfer, den der Nutzer selbst setzt.
    if (elem === 'health') return true;

    // Beim Stromverbrauch sitzt die Zuweisung auf der Gesamt-Entity.
    const sensor = elem === 'power_consumption'
        ? result.diagnostic_sensors?.total_power_consumption?.entity_id
        : (result[BALKEN_QUELLE[elem] ?? elem] as { sensor?: string } | undefined)?.sensor;

    return Boolean(sensor && card._hass.states[sensor]?.attributes?.external_sensor);
};

export const renderAttributes = (card: BrokkoliCard): TemplateResult[] => {
    const icons: Icons = {};
    const uom: UOM = {};
    const uomt: UOMT = {};
    const limits: Record<string, Limits> = {};
    const curr: Record<string, number> = {};
    const sensors: Record<string, string> = {};
    const displayed: DisplayedAttributes = {};
    const monitored = card.config.show_bars || default_show_bars;

    // Check if we are working with a valid configuration
    const entityId = card.selectedPlantEntity || card.config?.entity;
    if (!entityId || !card._hass.states[entityId]) {
        return [];
    }



    if (card.plantinfo && card.plantinfo.result) {
        const result = card.plantinfo.result;
        for (const elem of monitored) {
            if (!hatZuweisung(card, elem)) continue;
            if (result[elem] || (elem === 'health' && result.helpers?.health)) {  // Check if health exists in helpers
                let max, min, current, icon, sensor, unit_of_measurement;
                
                if (elem === 'health') {
                    // Use health sensor from helper structure instead of manual generation
                    if (!result.helpers?.health?.entity_id) continue;
                    
                    const healthSensor = card._hass.states[result.helpers.health.entity_id];
                    if (!healthSensor) continue;
                    
                    max = 5;
                    min = 0;
                    current = Number(healthSensor.state);
                    icon = "mdi:heart-pulse";
                    sensor = healthSensor.entity_id;
                    unit_of_measurement = "";
                } else {
                    // Normal handling for other sensors
                    ({ max, min, current, icon, sensor, unit_of_measurement } = result[elem]);
                }

                max = Number(max);
                min = Number(min);
                icon = String(icon);
                sensor = String(sensor);
                current = Number(current);
                unit_of_measurement = String(unit_of_measurement);
                const display_state = elem === 'health' ? current.toString() : card._hass.formatEntityState(card._hass.states[sensor]).replace(/[^\d,.]/g, "");
                limits[`max_${elem}`] = { max, min };
                curr[elem] = current;
                icons[elem] = icon;
                sensors[elem] = sensor;
                uomt[elem] = unit_of_measurement;
                uom[elem] = unit_of_measurement;
                if (elem === "dli") {
                    uomt["dli"] = "mol/d⋅m²";
                    uom["dli"] = '<math style="display: inline-grid;" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mrow><mn>mol</mn></mrow><mrow><mn>d</mn><mn>⋅</mn><msup><mn>m</mn><mn>2</mn></msup></mrow></mfrac></mrow></math>';
                }
                displayed[elem] = { name: elem, current, limits: limits[`max_${elem}`], icon, sensor, unit_of_measurement, display_state };
            }
        }
    }

    // Pass monitored array to renderAttributeChunks for correct ordering
    return renderAttributeChunks(card, displayed, monitored);
}

export const renderAttribute = (card: BrokkoliCard, attr: DisplayedAttribute) => {
    const { max, min } = attr.limits;
    const unitTooltip = attr.unit_of_measurement && attr.unit_of_measurement !== "null" ? attr.unit_of_measurement : "";
    const icon = attr.icon || "mdi:help-circle-outline";
    const val = attr.current || 0;
    const aval = !isNaN(val);
    const display_val = attr.display_state;

    // Check if this attribute should be displayed in full width
    const isFullWidth = card.config.full_width_bars?.includes(attr.name) || false;
    const isCompactMode = card.config.display_type === DisplayType.Compact;

    // Special handling for Health-Bar
    if (attr.name === 'health') {
        // Calculate the current color based on the value (0-5 in 0.5 steps)
        const step = Math.floor(val * 2); // 0-10 steps
        let activeColor;
        if (step <= 5) { // 0.5-2.5: Red to Yellow
            const mix = (step - 1) / 4; // -1/4 to 1
            activeColor = `rgba(240,163,163,1)`;
            if (mix >= 0) {
                activeColor = `rgb(${240 + (15 * mix)}, ${163 + (51 * mix)}, ${163 - (163 * mix)})`;
            }
        } else { // 2.5-5: Yellow to Green
            const mix = (step - 5) / 5;
            activeColor = `rgb(${255 - (212 * mix)}, ${214 - (20 * mix)}, ${0 + (83 * mix)})`;
        }

        // Create 10 segments for values from 0 to 5 in 0.5 steps
        const segments = Array.from({length: 10}, (_, i) => {
            const segmentValue = i * 0.5;
            const isActive = aval && val > segmentValue;
            const color = isActive ? activeColor : 'var(--primary-background-color)';
            return html`
                <span class="health-segment ${isActive ? 'active' : ''}" 
                      style="grid-column: ${i + 1}; background-color: ${color};">
                </span>
            `;
        });

        const decreaseValue = () => {
            const newValue = Math.max(0, val - 0.5);
            card._hass.callService('number', 'set_value', {
                entity_id: attr.sensor,
                value: newValue
            });
        };

        const increaseValue = () => {
            const newValue = Math.min(5, val + 0.5);
            card._hass.callService('number', 'set_value', {
                entity_id: attr.sensor,
                value: newValue
            });
        };

        return html`
            <div class="attribute ${isCompactMode || isFullWidth ? 'width-100' : ''} ${isFullWidth ? 'full-width' : ''}" data-attribute="health">
                <ha-icon .icon="${icon}" 
                         @click="${(e: Event) => {
                             e.stopPropagation();
                             decreaseValue();
                         }}">
                </ha-icon>
                <div class="meter green">
                    ${segments}
                    <input type="range" 
                           min="0" 
                           max="5" 
                           step="0.5"
                           .value="${val}"
                           @input="${(e: Event) => {
                               e.stopPropagation();
                               const target = e.target as HTMLInputElement;
                               const newValue = parseFloat(target.value);
                               card._hass.callService('number', 'set_value', {
                                   entity_id: attr.sensor,
                                   value: newValue
                               });
                           }}"
                    >
                </div>
                ${isCompactMode && !isFullWidth ? '' : html`
                    <div class="header" @click="${(e: Event) => {
                        e.stopPropagation();
                        increaseValue();
                    }}">
                        <span class="value">${display_val}</span>
                    </div>
                `}
            </div>
        `;
    }

    // Normal handling for other attributes
    const pct = 100 * Math.max(0, Math.min(1, (val - min) / (max - min)));
    
    // Adjusted tooltip text for sensors with and without unit
    const toolTipText = aval 
        ? TranslationUtils.createSensorTooltip(card._hass, attr.name, val, min, max, unitTooltip)
        : TranslationUtils.translateUI(card._hass, 'unavailable');
    
    // Handle special cases for the label (unit)
    let label = '';
    if (attr.name === 'dli') {
        label = '<math style="display: inline-grid;" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mrow><mn>mol</mn></mrow><mrow><mn>d</mn><mn>⋅</mn><msup><mn>m</mn><mn>2</mn></msup></mrow></mfrac></mrow></math>';
    } else if (unitTooltip) {
        label = unitTooltip;
    }
    
    return html`
        <div class="attribute tooltip ${isCompactMode || isFullWidth ? 'width-100' : ''} ${isFullWidth ? 'full-width' : ''}" data-attribute="${attr.name}" @click="${() => moreInfo(card, attr.sensor)}">
            <div class="tip">${unsafeHTML(toolTipText)}</div>
            <ha-icon .icon="${icon}"></ha-icon>
            <div class="meter red">
                <span class="${
                    aval ? (val < min || val > max ? "bad" : "good") : "unavailable"
                }" style="width: 100%;"></span>
            </div>
            <div class="meter green">
                <span class="${
                    aval ? (val > max ? "bad" : "good") : "unavailable"
                }" style="width:${aval ? pct : "0"}%;"></span>
            </div>
            <div class="meter red">
                <span class="bad" style="width:${
                    aval ? (val > max ? 100 : 0) : "0"
                }%;"></span>
            </div>
            ${isCompactMode && !isFullWidth ? '' : html`<div class="header"><span class="value">${display_val}</span>&nbsp;${label ? html`<span class='unit'>${unsafeHTML(label)}</span>` : ''}</div>`}
        </div>
    `;
};

export const getChunkedDisplayed = (displayed: DisplayedAttributes, attributesPerRow: number, fullWidthBars: string[] = [], monitored: string[] = []) => {
    // Create array of all attributes in the correct order from monitored
    const orderedResult: DisplayedAttribute[][] = [];
    
    // Process all attributes in the order of monitored
    for (const name of monitored) {
        const attr = displayed[name];
        if (!attr) continue;
        
        // If it's a full width bar, create a chunk with just this item
        if (fullWidthBars.includes(name)) {
            orderedResult.push([attr]);
        } else {
            // Find or create a non-full-width chunk that has space
            const lastNormalChunk = orderedResult.length > 0 ? 
                orderedResult[orderedResult.length - 1] : null;
                
            // Check if the last chunk is a normal chunk (not a full-width one) and has space
            if (lastNormalChunk && lastNormalChunk.length < attributesPerRow && 
                !fullWidthBars.includes(lastNormalChunk[0].name)) {
                lastNormalChunk.push(attr);
            } else {
                // Create a new chunk with this attribute
                orderedResult.push([attr]);
            }
        }
    }
    
    // Add any remaining attributes that might not be in the monitored array
    const displayedCopy = { ...displayed };
    // Remove processed attributes
    for (const name of monitored) {
        delete displayedCopy[name];
    }
    
    const remainingAttrs = Object.values(displayedCopy);
    
    for (let i = 0; i < remainingAttrs.length; i++) {
        const attr = remainingAttrs[i];
        
        // If it's a full width bar, create a chunk with just this item
        if (fullWidthBars.includes(attr.name)) {
            orderedResult.push([attr]);
        } else {
            // Find the last non-full-width chunk that has space
            let lastNormalChunk = null;
            for (let j = orderedResult.length - 1; j >= 0; j--) {
                const chunk = orderedResult[j];
                if (chunk.length < attributesPerRow && !fullWidthBars.includes(chunk[0].name)) {
                    lastNormalChunk = chunk;
                    break;
                }
            }
            
            if (lastNormalChunk && lastNormalChunk.length < attributesPerRow) {
                lastNormalChunk.push(attr);
            } else {
                // Create a new chunk with this attribute
                orderedResult.push([attr]);
            }
        }
    }
    
    return orderedResult;
}

export const renderAttributeChunks = (card: BrokkoliCard, displayed: DisplayedAttributes, monitored: string[] = []): TemplateResult[] => {
    const attributesPerRow = card.config.display_type === DisplayType.Compact ? 1 : 2;
    const fullWidthBars = card.config.full_width_bars || [];
    
    // Use the extended getChunkedDisplayed function with the full_width_bars option
    const chunkedDisplayed = getChunkedDisplayed(displayed, attributesPerRow, fullWidthBars, monitored);
    const attributeCssClass = `attributes ${card.config.display_type === DisplayType.Compact ? 'width-100' : ''}`;

    return chunkedDisplayed.map((chunk) => {
        // Check if this chunk contains a single full-width item
        const hasFullWidthItem = chunk.length === 1 && fullWidthBars.includes(chunk[0].name);
        
        // Set the CSS class accordingly
        const chunkClass = `${attributeCssClass}${hasFullWidthItem ? ' has-full-width-item' : ''}`;
        
        return html`<div class="${chunkClass}">${chunk.map((item: DisplayedAttribute) => {
            return item ? html`${renderAttribute(card, item)}` : '';
        })}</div>`;
    }).flat();
}

