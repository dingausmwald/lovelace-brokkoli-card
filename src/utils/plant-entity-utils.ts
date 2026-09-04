import { HomeAssistant } from 'custom-card-helpers';
import { HomeAssistantEntity } from '../types/brokkoli-list-card-types';

// Fallback, wenn die Pflanze keinen Download-Pfad im Attribut mitbringt.
const DEFAULT_IMAGE_PATH = '/local/images/plants/';

export class PlantEntityUtils {
    // Uebersetzt die translation_keys der Integration auf die Feld-IDs der Karten.
    private static readonly TK_ALIAS: Record<string, string> = {
        current_moisture: 'soil_moisture',
        current_temperature: 'temperature',
        current_conductivity: 'conductivity',
        current_illuminance: 'illuminance',
        current_humidity: 'air_humidity',
        current_ph: 'ph',
        current_ppfd: 'ppfd_mol',
        current_power_consumption: 'power_consumption',
        moisture_consumption: 'water_consumption',
        total_integral: 'total_ppfd_mol_integral',
    };

    // Bei den Grenzwerten zaehlt nur der Typ hinter min_/max_.
    private static readonly TYPE_ALIAS: Record<string, string> = {
        moisture: 'soil_moisture',
        humidity: 'air_humidity',
    };

    // Die Messgroessen, die plant/get_info als eigene Bloecke lieferte: Feldname
    // in der Antwort -> translation_key der Messwert-Entity, dazu der Typ, unter
    // dem die beiden Grenzwert-Entities (min_/max_) haengen.
    private static readonly VIEW_SENSORS: Record<string, { messwert: string; grenze?: string }> = {
        temperature: { messwert: 'current_temperature', grenze: 'temperature' },
        illuminance: { messwert: 'current_illuminance', grenze: 'illuminance' },
        moisture: { messwert: 'current_moisture', grenze: 'moisture' },
        conductivity: { messwert: 'current_conductivity', grenze: 'conductivity' },
        humidity: { messwert: 'current_humidity', grenze: 'humidity' },
        dli: { messwert: 'dli', grenze: 'dli' },
        water_consumption: { messwert: 'moisture_consumption', grenze: 'water_consumption' },
        fertilizer_consumption: { messwert: 'fertilizer_consumption', grenze: 'fertilizer_consumption' },
        power_consumption: { messwert: 'current_power_consumption', grenze: 'power_consumption' },
        ph: { messwert: 'current_ph', grenze: 'ph' },
    };

    // Die Diagnose-Sensoren; ihr Feldname ist zugleich ihr translation_key.
    private static readonly VIEW_DIAGNOSTICS: string[] = [
        'energy_cost',
        'total_power_consumption',
        'total_integral',
        'total_water_consumption',
        'total_fertilizer_consumption',
    ];

    // Die Helfer, die der Nutzer selbst setzt -- Feldname = translation_key.
    private static readonly VIEW_HELPERS: Record<string, 'select' | 'number' | 'text'> = {
        growth_phase: 'select',
        flowering_duration: 'number',
        pot_size: 'number',
        water_capacity: 'number',
        lux_to_ppfd: 'number',
        treatment: 'select',
        health: 'number',
        journal: 'text',
        location: 'text',
        cycle: 'select',
    };

    /**
     * Ordnet einer Pflanze ihre Entities zu -- Messwerte, Grenzwerte, Helfer.
     *
     * Die Zuordnung steht bereits in der Entity-Registry: jede Entity haengt an
     * der device_id der Pflanze und traegt einen translation_key, der von der
     * Sprache der Installation unabhaengig ist. Aus Entity-IDs etwas
     * zusammenzubauen ("number.<pflanze>_max_bodenfeuchte") funktioniert nur auf
     * deutschen Systemen.
     *
     * Abgelegt wird unter beiden Namen: unter dem translation_key selbst und
     * unter der Feld-ID der Karten, damit beide Seiten nachschlagen koennen.
     */
    static buildSensorMap(hass: HomeAssistant, plantEntityId: string): Record<string, string> {
        const registry = (hass as unknown as {
            entities?: Record<string, { entity_id: string; device_id?: string; translation_key?: string }>;
        })?.entities;
        const deviceId = registry?.[plantEntityId]?.device_id;
        if (!registry || !deviceId) return {};

        const map: Record<string, string> = {};
        for (const eintrag of Object.values(registry)) {
            if (eintrag.device_id !== deviceId || !eintrag.translation_key) continue;

            const grenze = eintrag.translation_key.match(/^(min|max)_(.+)$/);
            const feldId = grenze
                ? `${grenze[1]}_${this.TYPE_ALIAS[grenze[2]] ?? grenze[2]}`
                : (this.TK_ALIAS[eintrag.translation_key] ?? eintrag.translation_key);

            map[eintrag.translation_key] = eintrag.entity_id;
            map[feldId] = eintrag.entity_id;
        }
        return map;
    }

    /**
     * Baut die Struktur, die frueher der Websocket-Befehl plant/get_info
     * geliefert hat -- rein synchron aus Entity-Registry und hass.states.
     *
     * Der Befehl war ein Rueckschritt: jede Antwort wurde serverseitig neu
     * berechnet und neu serialisiert (rund 160 Felder), waehrend HA States als
     * gecachte Diffs verschickt, die sich alle Clients teilen. Zwei Poller
     * riefen ihn im Sekundentakt, bis HA mit "Client unable to keep up with
     * pending messages" die Verbindung schloss. Alles, was er lieferte, steht in
     * der Registry (welche Entity zu welcher Pflanze gehoert) und in den States
     * (Werte, Icons, Einheiten, Grenzen, Optionen) -- also hier.
     *
     * Die Form bleibt absichtlich identisch zur alten Antwort, damit die
     * Verbraucher unveraendert weiterlesen koennen.
     */
    static buildPlantView(hass: HomeAssistant, plantEntityId: string): Record<string, unknown> | null {
        const pflanze = hass?.states?.[plantEntityId];
        if (!pflanze) return null;

        const map = this.buildSensorMap(hass, plantEntityId);
        const zustand = (entityId?: string) => (entityId ? hass.states[entityId] : undefined);

        // get_info lieferte Messwerte als Zahlen (Python-Entities geben
        // native_value zurueck), hass.states liefert Strings. "unavailable" und
        // "unknown" bleiben stehen, so wie sie es auch dort taten.
        const zahl = (wert?: string) => {
            if (wert === undefined) return undefined;
            const n = Number(wert);
            return wert !== '' && Number.isFinite(n) ? n : wert;
        };

        const view: Record<string, unknown> = {
            path: (pflanze.attributes.download_path as string) || DEFAULT_IMAGE_PATH,
            device_type: plantEntityId.startsWith('cycle.') ? 'cycle' : 'plant',
            entity_id: plantEntityId,
            name: pflanze.attributes.friendly_name ?? plantEntityId,
            icon: pflanze.attributes.icon,
            state: pflanze.state,
        };

        // Die Grenzwerte kamen aus Number-Entities: get_info schickte eine Zahl
        // oder null, nie einen Platzhalter. Die Verbraucher rechnen mit Number()
        // weiter -- aus null wird 0, aus "unknown" wuerde NaN und damit ein
        // kaputter Balken, solange die Entities nach einem Neustart noch nicht
        // wiederhergestellt sind.
        const grenzwert = (entityId?: string) => {
            const roh = zustand(entityId)?.state;
            if (roh === undefined || roh === 'unknown' || roh === 'unavailable') return null;
            return zahl(roh);
        };

        for (const [feld, quelle] of Object.entries(this.VIEW_SENSORS)) {
            const messwert = zustand(map[quelle.messwert]);
            if (!messwert) continue;
            view[feld] = {
                max: quelle.grenze ? grenzwert(map[`max_${quelle.grenze}`]) : undefined,
                min: quelle.grenze ? grenzwert(map[`min_${quelle.grenze}`]) : undefined,
                current: zahl(messwert.state),
                icon: messwert.attributes.icon,
                unit_of_measurement: messwert.attributes.unit_of_measurement,
                sensor: messwert.entity_id,
            };
        }

        const diagnose: Record<string, unknown> = {};
        for (const tk of this.VIEW_DIAGNOSTICS) {
            const entity = zustand(map[tk]);
            if (!entity) continue;
            diagnose[tk] = {
                entity_id: entity.entity_id,
                current: zahl(entity.state),
                icon: entity.attributes.icon,
                unit_of_measurement: entity.attributes.unit_of_measurement,
            };
        }
        view.diagnostic_sensors = diagnose;

        const helfer: Record<string, unknown> = {};
        for (const [tk, typ] of Object.entries(this.VIEW_HELPERS)) {
            const entity = zustand(map[tk]);
            if (!entity) continue;
            // "unknown"/"unavailable" sind Platzhalter der Zustandsmaschine, keine
            // Werte. In Python gab `Entity.state` hier None zurueck, get_info
            // schickte also null -- und die Verbraucher pruefen auf Wahrheit.
            // Der Cycle-Select etwa steht auf "unknown", solange die Pflanze in
            // keinem Cycle ist; als String gelesen entstand daraus eine
            // Cycle-Gruppe namens "unknown".
            const roh = entity.state;
            const leer = roh === 'unknown' || roh === 'unavailable';

            const eintrag: Record<string, unknown> = {
                entity_id: entity.entity_id,
                current: leer ? null : roh,
                icon: entity.attributes.icon,
                type: typ,
            };
            if (typ === 'select') {
                eintrag.options = entity.attributes.options ?? [];
            } else if (typ === 'number') {
                eintrag.current = leer ? null : zahl(roh);
                eintrag.unit_of_measurement = entity.attributes.unit_of_measurement;
                eintrag.min = entity.attributes.min;
                eintrag.max = entity.attributes.max;
                eintrag.step = entity.attributes.step;
            }
            helfer[tk] = eintrag;
        }
        view.helpers = helfer;

        return view;
    }

    static getPlantEntities(hass: HomeAssistant, filter: 'plant' | 'cycle' | 'all' = 'all'): HomeAssistantEntity[] {
        return Object.values(hass.states)
            .filter((entity): entity is HomeAssistantEntity => {
                if (
                    typeof entity !== 'object' ||
                    entity === null ||
                    !('entity_id' in entity) ||
                    !('attributes' in entity) ||
                    typeof entity.entity_id !== 'string'
                ) {
                    return false;
                }

                const isPlant = entity.entity_id.startsWith('plant.');
                const isCycle = entity.entity_id.startsWith('cycle.') && 'member_count' in (entity.attributes as Record<string, unknown>);

                if (filter === 'plant') return isPlant;
                if (filter === 'cycle') return isCycle;
                return isPlant || isCycle;
            });
    }

    static togglePlantSelection(
        entityId: string,
        selectedPlants: Set<string>,
        event?: Event
    ): Set<string> {
        event?.stopPropagation();
        const updatedSelection = new Set(selectedPlants);

        if (updatedSelection.has(entityId)) {
            updatedSelection.delete(entityId);
        } else {
            updatedSelection.add(entityId);
        }

        return updatedSelection;
    }

    static clearPlantSelection(): Set<string> {
        return new Set();
    }
}
