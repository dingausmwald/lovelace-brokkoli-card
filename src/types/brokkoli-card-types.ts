import { LovelaceCardConfig } from "custom-card-helpers";
import { HassEntity } from "home-assistant-js-websocket";

export interface BrokkoliCardConfig extends LovelaceCardConfig {
    entity?: string;
    battery_sensor?: string;
    display_type?: DisplayType;
    show_elements?: string[];
    option_elements?: string[];
    show_bars?: string[];
    full_width_bars?: string[];
    history_groups?: string[];
    history_line_position?: 'left' | 'right';
    default_expanded_options?: string[];
    listen_to?: string;
}

export enum DisplayType {
    Full = "full",
    Compact = "compact"
}

// HassEntity hat entity_id und state bereits als string. Kein eigener
// Interface-Wrapper nötig — Type-Alias reicht.
export type HomeAssistantEntity = HassEntity;

export interface PlantInfo {
    result: {
        [key: string]: PlantAttribute;
    } & {
        helpers?: {
            health?: {
                entity_id: string;
                [key: string]: unknown;
            };
            [helperType: string]: {
                entity_id: string;
                [key: string]: unknown;
            };
        };
    };
}

export interface PlantAttribute {
    max: number;
    min: number;
    current: number;
    icon: string;
    sensor: string;
    unit_of_measurement: string;
}

export interface Limits {
    max: number;
    min: number;
}

export interface Attribute {
    icon: string;
    sensor: string;
    unit_of_measurement: string;
    display_state: string;
}

export interface DisplayedAttribute extends Attribute {
    current: number;
    limits: Limits;
    name: string;
}

export interface DisplayedAttributes {
    [key: string]: DisplayedAttribute;
}

export interface Icons {
    [key: string]: string;
}

export interface UOM {
    [key: string]: string;
}

export interface UOMT {
    [key: string]: string;
}
