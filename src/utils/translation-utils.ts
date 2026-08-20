import { HomeAssistant } from 'custom-card-helpers';

// Statische Imports — webpack bundelt die JSON-Dateien direkt ins JS.
// Damit entfällt der /translations/-Ordner im /local/, der HACS-Copy-Bug
// (HACS kopiert standardmäßig nur die im hacs.json gelisteten Files) und
// der HA-31-Tage-404-Cache. Eine einzige .js — fertig.
import de from '../../translations/de.json';
import en from '../../translations/en.json';
import es from '../../translations/es.json';
import fr from '../../translations/fr.json';
import hu from '../../translations/hu.json';
import it from '../../translations/it.json';
import nl from '../../translations/nl.json';
import pl from '../../translations/pl.json';
import pt from '../../translations/pt.json';
import ru from '../../translations/ru.json';
import zh from '../../translations/zh.json';

interface TranslationObject {
    [key: string]: string | TranslationObject;
}

const TRANSLATIONS: Record<string, TranslationObject> = {
    de, en, es, fr, hu, it, nl, pl, pt, ru, zh,
};

export class TranslationUtils {
    private static getLanguage(hass: HomeAssistant): string {
        return hass.language || 'en';
    }

    private static getBundle(language: string): TranslationObject {
        return TRANSLATIONS[language] ?? TRANSLATIONS['en'] ?? {};
    }

    private static getTranslation(hass: HomeAssistant, key: string): string {
        const language = this.getLanguage(hass);
        const translated = this.getTranslationFromObject(this.getBundle(language), key);
        if (translated !== key) return translated;

        // getBundle only falls back when a whole language file is absent. Most
        // of them are partial -- es/fr/it/... carry no `frontend.fields` at all
        // -- which used to surface the raw key in the UI. Fall back per key so
        // an untranslated label reads English instead of "frontend.fields.x".
        if (language === 'en') return translated;
        return this.getTranslationFromObject(this.getBundle('en'), key);
    }

    private static getTranslationFromObject(translations: TranslationObject, key: string): string {
        const keys = key.split('.');
        let current: string | TranslationObject = translations;
        for (const k of keys) {
            if (current && typeof current === 'object' && k in current) {
                current = current[k];
            } else {
                return key;
            }
        }
        return typeof current === 'string' ? current : key;
    }

    /**
     * No-op — Translations sind bereits beim Modul-Load verfügbar (statischer
     * Import). Bleibt async für Backwards-Compat mit Callern, die .then() machen.
     */
    static async initializeTranslations(_hass: HomeAssistant): Promise<void> {
        // intentionally empty
    }

    static translateField(hass: HomeAssistant, key: string): string {
        return this.getTranslation(hass, `frontend.fields.${key}`);
    }

    static translateSensor(hass: HomeAssistant, key: string): string {
        return this.getTranslation(hass, `frontend.sensors.${key}`);
    }

    static translateGrowthPhase(hass: HomeAssistant, key: string): string {
        return this.getTranslation(hass, `frontend.growth_phases.${key}`);
    }

    static translateTreatment(hass: HomeAssistant, key: string): string {
        return this.getTranslation(hass, `frontend.treatments.${key}`);
    }

    static translateDiagnostics(hass: HomeAssistant, key: string): string {
        // Diagnostics + Sensors teilen sich `frontend.sensors` — keine Redundanz.
        return this.getTranslation(hass, `frontend.sensors.${key}`);
    }

    static translateUI(hass: HomeAssistant, key: string): string {
        return this.getTranslation(hass, `frontend.ui.${key}`);
    }

    static translateListCard(hass: HomeAssistant, key: string): string {
        return this.getTranslation(hass, `frontend.list_card.${key}`);
    }

    static translateHistory(hass: HomeAssistant, key: string): string {
        return this.getTranslation(hass, `frontend.history.${key}`);
    }

    static translate(hass: HomeAssistant, key: string): string {
        return this.getTranslation(hass, key);
    }

    static translateHelper(hass: HomeAssistant, key: string): string {
        return this.getTranslation(hass, `frontend.helpers.${key}`);
    }

    static createSensorTooltip(hass: HomeAssistant, sensorName: string, value: number, min: number, max: number, unit?: string): string {
        const translatedSensorName = this.translateSensor(hass, sensorName);
        const minMaxText = this.translateUI(hass, 'tooltip_min_max');
        if (unit) {
            return `${translatedSensorName}: ${value} ${unit}<br>(${minMaxText}: ${min} ~ ${max} ${unit})`;
        }
        return `${translatedSensorName}: ${value}<br>(${minMaxText}: ${min} ~ ${max})`;
    }
}
