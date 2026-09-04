import { HomeAssistant } from 'custom-card-helpers';

// custom-card-helpers kennt die Registry-Sammlungen nicht, Home Assistant
// liefert sie trotzdem mit.
type HassMitRegistry = HomeAssistant & {
    entities?: unknown;
    devices?: unknown;
    areas?: unknown;
};

/**
 * Entscheidet, ob ein hass-Update eine Karte ueberhaupt etwas angeht.
 *
 * Home Assistant schiebt bei JEDER Zustandsaenderung im Haus ein neues
 * hass-Objekt in jede Karte -- der Frontend-Code debounct das nicht, er ersetzt
 * hass pro verarbeitetem Update und reicht es durch. Wer hass als reaktive
 * Property haelt, rendert deshalb auch dann neu, wenn im Nachbarzimmer eine
 * Lampe schaltet.
 *
 * Der Vergleich hier kostet ein paar hundert Referenzvergleiche -- hass.states
 * wird bei jedem Update neu aufgebaut, die Zustandsobjekte darin aber nur fuer
 * die tatsaechlich geaenderten Entities. Ein ungleiches Objekt heisst also:
 * diese Entity hat sich bewegt.
 */
export class HassBeobachter {
    private _ids: string[] = [];
    private _neuAufbauen = true;
    private _vorher?: HomeAssistant;

    /** Beim naechsten Update die Liste der beobachteten Entities neu bilden. */
    markiereVeraltet(): void {
        this._neuAufbauen = true;
    }

    /**
     * @param aufbauen liefert die Entity-IDs, auf die die Karte reagieren muss.
     *                 Wird nur gerufen, wenn die Liste neu gebildet werden muss --
     *                 der Aufbau geht ueber die gesamte Registry und ist zu teuer
     *                 fuer jedes Update.
     * @returns true, wenn die Karte neu rendern soll.
     */
    betrifftUns(hass: HomeAssistant, aufbauen: (hass: HomeAssistant) => string[]): boolean {
        const vorher = this._vorher as HassMitRegistry | undefined;
        const jetzt = hass as HassMitRegistry;
        this._vorher = hass;

        if (!vorher) {
            this._neuAufbauen = true;
            return true;
        }

        // Die Registry hat sich bewegt: welche Entities es gibt, zu welchem
        // Geraet sie gehoeren und in welchem Bereich das steht, kann sich alles
        // geaendert haben. Liste verwerfen und neu zeichnen.
        if (vorher.entities !== jetzt.entities
            || vorher.devices !== jetzt.devices
            || vorher.areas !== jetzt.areas) {
            this._neuAufbauen = true;
            return true;
        }

        // Sprache, Zahlenformat und Theme schlagen auf jede Beschriftung durch.
        if (vorher.language !== jetzt.language
            || vorher.locale !== jetzt.locale
            || vorher.themes !== jetzt.themes) {
            return true;
        }

        if (vorher.states === jetzt.states) return false;

        if (this._neuAufbauen) {
            this._ids = aufbauen(hass);
            this._neuAufbauen = false;
        }

        return this._ids.some(id => vorher.states[id] !== jetzt.states[id]);
    }
}
