import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, fireEvent } from 'custom-card-helpers';
import { historyStyles } from '../styles/history-styles';
import { TimelineEvent } from '../types/timeline-types';
import { FlowerGallery } from './gallery';
import { getGrowthPhaseIcon, getTreatmentIcon } from '../utils/constants';
import { PlantEntityUtils } from '../utils/plant-entity-utils';
import { TranslationUtils } from '../utils/translation-utils';

interface PlantInfo {
  helpers?: {
    growth_phase?: {
      entity_id?: string;
    };
    pot_size?: {
      entity_id?: string;
    };
    treatment?: {
      entity_id?: string;
    };
    journal?: {
      entity_id?: string;
    };
  };
}

// Farbkonfiguration aus der timeline.ts übernommen
const COLOR_CONFIG = {
    growth: { hue: 120, saturation: 60 },
    end: { hue: 0, saturation: 0 },
    pot: { hue: 207, saturation: 90 },
    area: { hue: 280, saturation: 70 },
    treatment: { hue: 45, saturation: 100 },
    image: { hue: 175, saturation: 70 },
    journal: { hue: 330, saturation: 80 },
    add: { hue: 207, saturation: 90 } // Neue Farbe für den Hinzufügen-Button
} as const;

// Event-Typen
export const EVENT_TYPES = {
    PHASE: 'phase',
    AREA: 'area',
    POT: 'pot-size',
    TREATMENT: 'treatment',
    IMAGE: 'image',
    JOURNAL: 'journal'
} as const;

// Verfügbare Aktionen für das Hinzufügen neuer Einträge
const ADD_ACTIONS = {
    PHASE: 'phase',
    AREA: 'area',
    POT: 'pot-size',
    TREATMENT: 'treatment',
    JOURNAL: 'journal'
} as const;

@customElement('flower-history')
export class FlowerHistory extends LitElement {
    @property() hass?: HomeAssistant;
    @property() entityId?: string;
    @property({ type: Array }) historyGroups?: string[];
    @property({ type: String }) linePosition?: 'left' | 'right'; // Neue Property für die Position der Linie
    @state() private events: TimelineEvent[] = [];
    @state() private _imageUrls: string[] = [];
    @state() private _showGallery = false;
    @state() private _selectedImageIndex: number | null = null;
    @state() private _expandedJournalIds: Set<string> = new Set();
    @state() private _plantingDate: Date | null = null;

    // Neue Zustandsvariablen für das Hinzufügen neuer Einträge
    @state() private _addMenuOpen = false;
    @state() private _selectedAddAction: string | null = null;
    @state() private _newEntryValue = '';
    @state() private _newEntryDate = new Date().toISOString().split('T')[0];
    @state() private _addingEntry = false;
    @state() private _newEntryAdded = false;

    static styles = historyStyles;

    private _showMoreInfo(entityId: string): void {
        fireEvent(this, 'hass-more-info', { entityId });
    }

    connectedCallback(): void {
        super.connectedCallback();
        this._updateEvents();
    }

    updated(changedProps: Map<string, unknown>): void {
        if (changedProps.has('entityId') || changedProps.has('hass')) {
            this._updateEvents();
        }
    }

    private async _updateEvents(): Promise<void> {
        if (!this.entityId || !this.hass) return;

        const plantName = this.entityId.split('.')[1];

        // Ermittle das Pflanzungsdatum (frühestes Datum einer Wachstumsphase)
        this._plantingDate = await this._getPlantingDate();

        this.events = await this._collectEvents(plantName);
    }

    private async _getPlantingDate(): Promise<Date | null> {
        if (!this.entityId || !this.hass) return null;

        // Verwende PlantEntityUtils, um die Pflanzen-Info zu holen
        let plantInfo: PlantInfo;
        try {
            plantInfo = await PlantEntityUtils.getPlantInfo(this.hass, this.entityId);
        } catch {
            return null;
        }

        // Entity IDs aus der API-Antwort extrahieren
        const helpers = plantInfo?.helpers || {};
        const phaseEntityId = helpers.growth_phase?.entity_id;

        // Wenn keine EntityId gefunden wurde, ist keine Phasenentität konfiguriert
        if (!phaseEntityId) return null;

        const phaseEntity = this.hass.states[phaseEntityId];

        if (!phaseEntity?.attributes) return null;

        // Sammle alle Phasen-Daten
        const phases = ['samen', 'keimen', 'wurzeln', 'wachstum', 'blüte', 'entfernt', 'geerntet'] as const;
        const dates: Date[] = [];

        // Sammle alle vorhandenen Phasendaten
        for (const phase of phases) {
            const startDate = phaseEntity.attributes[`${phase === 'entfernt' || phase === 'geerntet' ? phase : phase + '_beginn'}`];
            if (startDate) {
                const date = new Date(startDate);
                if (!isNaN(date.getTime())) {
                    dates.push(date);
                }
            }
        }

        // Wenn Daten vorhanden sind, nimm das früheste Datum
        if (dates.length > 0) {
            return new Date(Math.min(...dates.map(d => d.getTime())));
        }

        return null;
    }

    private async _collectEvents(plantName: string): Promise<Array<TimelineEvent>> {
        if (!this.hass) return [];

        const events: Array<TimelineEvent> = [];
        const plantEntity = this.hass.states[`plant.${plantName}`];

        // Keine Events ohne Entität
        if (!plantEntity) return [];

        // Verwende PlantEntityUtils, um die Pflanzen-Info zu holen
        let plantInfo: PlantInfo;
        try {
            plantInfo = await PlantEntityUtils.getPlantInfo(this.hass, `plant.${plantName}`);
        } catch {
            console.warn('Fehler beim Laden der Pflanzen-Info:');
            return [];
        }

        const helpers = plantInfo?.helpers || {};
        const showGroups = this.historyGroups || Object.values(EVENT_TYPES);

        // Sammle Wachstumsphasen
        if (showGroups.includes(EVENT_TYPES.PHASE) && helpers.growth_phase?.entity_id) {
            const phaseEntityId = helpers.growth_phase.entity_id;
            const phaseEntity = this.hass.states[phaseEntityId];

            if (phaseEntity) {
                const phases = ['samen', 'keimen', 'wurzeln', 'wachstum', 'blüte', 'entfernt', 'geerntet'] as const;
                // Verwende TranslationUtils für die Phasen-Labels

                // Sammle alle Phasen-Events
                const phaseEvents: TimelineEvent[] = [];

                for (const phase of phases) {
                    const startDate = phaseEntity?.attributes[`${phase === 'entfernt' || phase === 'geerntet' ? phase : phase + '_beginn'}`];
                    if (startDate) {
                        const event: TimelineEvent = {
                            date: new Date(startDate),
                            type: `phase-${phase}`,
                            label: TranslationUtils.translateGrowthPhase(this.hass, phase),
                            description: `${TranslationUtils.translateGrowthPhase(this.hass, phase)} ${TranslationUtils.translateHistory(this.hass, 'phase_started')} ${new Date(startDate).toLocaleDateString()}`
                        };

                        // Setze Farben für die Events
                        if (phase === 'entfernt') {
                            event.style = 'display: none;'; // Unsichtbar
                        } else if (phase === 'geerntet') {
                            event.style = `background-color: hsl(${COLOR_CONFIG.growth.hue}, 70%, 45%);`;
                        } else {
                            // Berechne die Position der Phase im Wachstumszyklus (ohne entfernt/geerntet)
                            const growthPhases = phases.filter(p => p !== 'entfernt' && p !== 'geerntet');
                            const phaseIndex = growthPhases.indexOf(phase);
                            const lightness = growthPhases.length === 1 ? 55 :
                                55 - ((phaseIndex / Math.max(1, growthPhases.length - 1)) * 25); // Hell nach dunkel (55% bis 30%)
                            event.style = `background-color: hsl(${COLOR_CONFIG.growth.hue}, ${COLOR_CONFIG.growth.saturation}%, ${lightness}%)`;
                        }

                        phaseEvents.push(event);
                    }
                }

                events.push(...phaseEvents);
            }
        }

        // Sammle Bild-Events
        if (showGroups.includes(EVENT_TYPES.IMAGE)) {
            // Lade die Bilder asynchron
            const images = await FlowerGallery.getImagesWithDates(this.hass, `plant.${plantName}`, plantInfo);
            this._imageUrls = images.map(img => img.url);
            const imageEvents: TimelineEvent[] = images.map((img, index) => ({
                date: img.date,
                type: 'image',
                label: TranslationUtils.translateHistory(this.hass, 'photo'),
                description: `${TranslationUtils.translateHistory(this.hass, 'image_taken')} ${img.date.toLocaleDateString()}`,
                style: `background-color: hsl(${COLOR_CONFIG.image.hue}, ${COLOR_CONFIG.image.saturation}%, 45%);`,
                data: { imageIndex: index, url: img.url }
            }));

            events.push(...imageEvents);
        }

        // Lade Topfgrößen-Historie
        if (showGroups.includes(EVENT_TYPES.POT) && helpers.pot_size?.entity_id) {
            try {
                const startTime = events[0]?.date.toISOString() || new Date().toISOString();
                const endTime = new Date().toISOString();
                const response = await this.hass.callApi('GET',
                    `history/period/${startTime}?filter_entity_id=${helpers.pot_size.entity_id}&end_time=${endTime}`
                );

                if (response && Array.isArray(response) && response.length > 0) {
                    let lastSize: string | null = null;
                    const potSizeEvents: TimelineEvent[] = [];

                    // Verarbeite die Historie für Events (in chronologischer Reihenfolge)
                    const history = response[0];
                    for (let i = 0; i < history.length; i++) {
                        const state = history[i];
                        // Überspringe ungültige Werte
                        if (!state.state || isNaN(parseFloat(state.state)) ||
                            state.state === 'unavailable' || state.state === 'unknown') {
                            continue;
                        }

                        // Für den ersten gültigen Wert oder wenn sich die Größe ändert
                        if (lastSize === null || state.state !== lastSize) {
                            potSizeEvents.push({
                                date: new Date(state.last_changed),
                                type: 'pot-size',
                                label: `${state.state}L`,
                                description: `${TranslationUtils.translateHistory(this.hass, 'pot_size_changed')} ${state.state}L ${new Date(state.last_changed).toLocaleDateString()}`
                            } as TimelineEvent);
                            lastSize = state.state;
                        }
                    }

                    // Setze Farben für Topfgrößen-Events (hell nach dunkel)
                    potSizeEvents.forEach((event, index) => {
                        const lightness = 65 - (index * 10); // Start bei 65%, jeder weitere 10% dunkler
                        event.style = `background-color: hsl(${COLOR_CONFIG.pot.hue}, ${COLOR_CONFIG.pot.saturation}%, ${lightness}%)`;
                    });

                    events.push(...potSizeEvents);
                }
            } catch {
                // Fehler werden ignoriert
            }
        }

        // Lade Area-Changes
        if (showGroups.includes(EVENT_TYPES.AREA) && plantEntity) {
            const areaHistory = (plantEntity?.attributes?.area_history || []) as Array<{date: string, area: string}>;
            const areaEvents: TimelineEvent[] = areaHistory.map(entry => ({
                date: new Date(entry.date),
                type: 'area-moved',
                label: entry.area,
                description: `${TranslationUtils.translateHistory(this.hass, 'moved_to')} ${entry.area} ${new Date(entry.date).toLocaleDateString()}`
            } as TimelineEvent));

            // Setze Farben für Area-Events
            areaEvents.forEach((event, index) => {
                const lightness = 65 - (index * 10); // Start bei 65%, jeder weitere 10% dunkler
                event.style = `background-color: hsl(${COLOR_CONFIG.area.hue}, ${COLOR_CONFIG.area.saturation}%, ${lightness}%)`;
            });

            events.push(...areaEvents);
        }

        // Lade Treatment-Historie
        if (showGroups.includes(EVENT_TYPES.TREATMENT) && helpers.treatment?.entity_id) {
            try {
                const startTime = events[0]?.date.toISOString() || new Date().toISOString();
                const endTime = new Date().toISOString();
                const response = await this.hass.callApi('GET',
                    `history/period/${startTime}?filter_entity_id=${helpers.treatment.entity_id}&end_time=${endTime}`
                );

                if (response && Array.isArray(response) && response.length > 0) {
                    const treatmentEvents: TimelineEvent[] = [];
                    const history = response[0];

                    for (let i = 0; i < history.length; i++) {
                        const state = history[i];
                        if (state.state && state.state !== 'unavailable' && state.state !== 'unknown' && state.state !== 'none') {
                            treatmentEvents.push({
                                date: new Date(state.last_changed),
                                type: 'treatment',
                                label: TranslationUtils.translateTreatment(this.hass, state.state),
                                description: `${TranslationUtils.translateHistory(this.hass, 'treatment')}: ${TranslationUtils.translateTreatment(this.hass, state.state)} ${new Date(state.last_changed).toLocaleDateString()}`,
                                data: { originalValue: state.state }
                            });
                        }
                    }

                    // Setze Farben für Treatment-Events (hell nach dunkel)
                    treatmentEvents.forEach((event, index) => {
                        // Berechne die Helligkeit, startend bei 80%, reduziert um 8% pro Event, minimal 0%
                        const lightness = Math.max(80 - (index * 8), 0);
                        event.style = `background-color: hsl(${COLOR_CONFIG.treatment.hue}, ${COLOR_CONFIG.treatment.saturation}%, ${lightness}%);`;
                    });

                    events.push(...treatmentEvents);
                }
            } catch {
                // Fehler werden ignoriert
            }
        }

        // Lade Journal-Einträge
        if (showGroups.includes(EVENT_TYPES.JOURNAL)) {
            const journalEntityId = helpers.journal?.entity_id;

            if (journalEntityId) {
                try {
                    const startTime = new Date(new Date().setMonth(new Date().getMonth() - 6)).toISOString();
                    const endTime = new Date().toISOString();
                    const response = await this.hass.callApi('GET',
                        `history/period/${startTime}?filter_entity_id=${journalEntityId}&end_time=${endTime}`
                    );

                    if (response && Array.isArray(response) && response.length > 0) {
                        const journalHistory = response[0];
                        let lastJournalText = '';

                        for (let i = 0; i < journalHistory.length; i++) {
                            const state = journalHistory[i];
                            if (state.state && state.state !== 'unavailable' && state.state !== 'unknown' && state.state !== lastJournalText) {
                                events.push({
                                    date: new Date(state.last_changed),
                                    type: 'journal',
                                    label: TranslationUtils.translateHistory(this.hass, 'journal'),
                                    description: state.state,
                                    style: `background-color: hsl(${COLOR_CONFIG.journal.hue}, ${COLOR_CONFIG.journal.saturation}%, 45%);`
                                });
                                lastJournalText = state.state;
                            }
                        }
                    }
                } catch {
                    // Fehler werden ignoriert
                }
            }
        }

        // Sortiere Events nach Datum
        return events.sort((a, b) => b.date.getTime() - a.date.getTime());
    }

    private _handleImageClick(index: number): void {
        this._selectedImageIndex = index;
        this._showGallery = true;
    }

    // Einheitliche Funktion für Animationen
    private _animateElement(element: HTMLElement | null, open: boolean, onComplete?: () => void): void {
        if (!element) return;

        if (open) {
            // Öffnen: Von 0 auf scrollHeight
            element.classList.remove('closing', 'expanded');
            element.style.height = '0';

            // Force reflow
            void element.offsetHeight;

            // Setze die Höhe und füge die expanded-Klasse hinzu
            const height = element.scrollHeight;
            element.style.height = `${height}px`;
            element.classList.add('expanded');

            // Optional: Callback nach Animation
            if (onComplete) {
                setTimeout(onComplete, 300);
            }
        } else {
            // Schließen: Von aktueller Höhe auf 0
            element.style.height = `${element.scrollHeight}px`;
            void element.offsetHeight; // Force reflow

            element.classList.remove('expanded');
            element.classList.add('closing');

            // Nach der Animation die Klassen entfernen
            setTimeout(() => {
                element.classList.remove('closing');
                element.style.height = '0';

                // Optional: Callback nach Animation
                if (onComplete) {
                    onComplete();
                }
            }, 300);
        }
    }

    private _toggleJournalExpand(eventId: string): void {
        const newSet = new Set(this._expandedJournalIds);
        const journalElement = this.shadowRoot?.querySelector(`#journal-${eventId}`) as HTMLElement;

        if (newSet.has(eventId)) {
            // Schließen
            this._animateElement(journalElement, false, () => {
                newSet.delete(eventId);
                this._expandedJournalIds = newSet;
            });
        } else {
            // Öffnen
            newSet.add(eventId);
            this._expandedJournalIds = newSet;

            // Kurze Verzögerung, damit das DOM aktualisiert wird
            setTimeout(() => {
                const el = this.shadowRoot?.querySelector(`#journal-${eventId}`) as HTMLElement;
                this._animateElement(el, true);
            }, 10);
        }
    }

    // Neue Methoden zum Hinzufügen von Einträgen
    private _toggleAddMenu(): void {
        if (this._selectedAddAction !== null) {
            // Wenn bereits eine Aktion ausgewählt ist, setzen wir sie zurück
            const formElement = this.shadowRoot?.querySelector('.form-content') as HTMLElement;
            const headerElement = this.shadowRoot?.querySelector('.add-header') as HTMLElement;

            if (formElement) {
                formElement.classList.remove('visible');
            }

            if (headerElement) {
                headerElement.classList.remove('visible');
            }

            // Warte auf das Ende der Ausblend-Animation
            setTimeout(() => {
                this._selectedAddAction = null;
                this._newEntryValue = '';
                this._addMenuOpen = false;
                this.requestUpdate();
            }, 300);
        } else {
            // Öffnen/Schließen des Menüs
            this._addMenuOpen = !this._addMenuOpen;
            this._newEntryValue = '';

            if (this._addMenuOpen) {
                // Menü öffnen
                this.requestUpdate();

                // Warte auf DOM-Update
                setTimeout(() => {
                    const menuContainer = this.shadowRoot?.querySelector('.add-menu-container') as HTMLElement;
                    const menuOptions = this.shadowRoot?.querySelector('.add-menu-options') as HTMLElement;

                    if (menuContainer && menuOptions) {
                        // Setze die Höhe des Containers
                        const height = menuOptions.scrollHeight;
                        menuContainer.style.height = `${height}px`;

                        // Zeige die Optionen an
                        setTimeout(() => {
                            menuOptions.classList.add('visible');
                        }, 50);
                    }
                }, 10);
            } else {
                // Menü schließen
                const menuContainer = this.shadowRoot?.querySelector('.add-menu-container') as HTMLElement;
                const menuOptions = this.shadowRoot?.querySelector('.add-menu-options') as HTMLElement;

                if (menuOptions) {
                    menuOptions.classList.remove('visible');
                }

                if (menuContainer) {
                    menuContainer.style.height = '0';
                }
            }
        }
    }

    private _selectAddAction(action: string): void {
        // Setze den ausgewählten Aktionstyp
        this._selectedAddAction = action;
        this._newEntryValue = '';

        // Finde alle Optionen und markiere die ausgewählte
        const options = this.shadowRoot?.querySelectorAll('.add-option') as NodeListOf<HTMLElement>;
        const selectedOption = this.shadowRoot?.querySelector(`.add-option[data-action="${action}"]`) as HTMLElement;

        if (options && selectedOption) {
            // Fade-out Animation für nicht ausgewählte Optionen
            options.forEach(option => {
                if (option !== selectedOption) {
                    option.classList.add('fade-out');
                } else {
                    option.classList.add('selected');
                }
            });

            // Warte auf das Ende der Ausblend-Animation
            setTimeout(() => {
                // Bewege die ausgewählte Option nach oben
                selectedOption.classList.add('move-to-header');

                // Warte auf das Ende der Bewegungsanimation
                setTimeout(() => {
                    // Aktualisiere den Zustand, um das Formular anzuzeigen
                    this.requestUpdate();

                    // Warte auf DOM-Update
                    setTimeout(() => {
                        // Zeige Header und Formular an
                        const headerElement = this.shadowRoot?.querySelector('.add-header') as HTMLElement;
                        const formElement = this.shadowRoot?.querySelector('.form-content') as HTMLElement;

                        if (headerElement) {
                            headerElement.classList.add('visible');
                        }

                        if (formElement) {
                            formElement.classList.add('visible');

                            // Fokussiere das erste Eingabefeld
                            const firstInput = formElement.querySelector('input, select, textarea') as HTMLElement;
                            if (firstInput) {
                                firstInput.focus();
                            }
                        }
                    }, 50);
                }, 300);
            }, 300);
        }
    }

    private async _addNewEntry(): Promise<void> {
        if (!this.hass || !this.entityId || !this._selectedAddAction) {
            return;
        }

        if (!this._newEntryValue) {
            return;
        }

        this._addingEntry = true;

        try {
            // PlantEntityUtils verwenden, um die Entity-IDs zu erhalten
            const plantInfo = await PlantEntityUtils.getPlantInfo(this.hass, this.entityId);

            if (!plantInfo) {
                this._addingEntry = false;
                return;
            }

            const helpers = (plantInfo as PlantInfo).helpers || {};

            // Entity-IDs extrahieren ohne Fallbacks
            const phaseEntityId = helpers.growth_phase?.entity_id;
            const potSizeEntityId = helpers.pot_size?.entity_id;
            const treatmentEntityId = helpers.treatment?.entity_id;
            const journalEntityId = helpers.journal?.entity_id;

            // Je nach Aktion den entsprechenden Service aufrufen
            switch (this._selectedAddAction) {
                case ADD_ACTIONS.PHASE: {
                    if (!phaseEntityId) {
                        break;
                    }

                    // Wachstumsphase ändern
                    await this.hass.callService('select', 'select_option', {
                        entity_id: phaseEntityId,
                        option: this._newEntryValue
                    });

                    // Datum der Phase setzen (aktuelles Datum)
                    const phaseAttribute = this._newEntryValue === 'entfernt' || this._newEntryValue === 'geerntet'
                        ? this._newEntryValue
                        : `${this._newEntryValue}_beginn`;

                    await this.hass.callService('homeassistant', 'update_entity_attribute', {
                        entity_id: phaseEntityId,
                        attribute: phaseAttribute,
                        value: new Date().toISOString().split('T')[0]
                    });
                    break;
                }

                case ADD_ACTIONS.AREA: {
                    // Bereich ändern
                    const areaName = this._newEntryValue;
                    const areaId = areaName === '-' ? '' : Object.entries(this.hass.areas || {})
                        .find(([, area]) => area.name === areaName)?.[0];
                    const entity = this.hass.entities[this.entityId];

                    if (entity?.device_id) {
                        await this.hass.callService('plant', 'move_to_area', {
                            device_id: entity.device_id,
                            area_id: areaId || ''
                        });
                    }
                    break;
                }

                case ADD_ACTIONS.POT:
                    if (!potSizeEntityId) {
                        break;
                    }

                    // Topfgröße ändern
                    await this.hass.callService('number', 'set_value', {
                        entity_id: potSizeEntityId,
                        value: parseFloat(this._newEntryValue)
                    });
                    break;

                case ADD_ACTIONS.TREATMENT:
                    if (!treatmentEntityId) {
                        break;
                    }

                    // Behandlung setzen
                    await this.hass.callService('select', 'select_option', {
                        entity_id: treatmentEntityId,
                        option: this._newEntryValue
                    });
                    break;

                case ADD_ACTIONS.JOURNAL:
                    if (!journalEntityId) {
                        break;
                    }

                    // Journal-Eintrag hinzufügen
                    await this.hass.callService('text', 'set_value', {
                        entity_id: journalEntityId,
                        value: this._newEntryValue
                    });
                    break;
            }

            // Erfolgsanimation anzeigen
            this._newEntryAdded = true;

            // Warte kurz, damit der Benutzer die Erfolgsanimation sehen kann
            setTimeout(() => {
                // Zurücksetzen und Events aktualisieren
                this._newEntryAdded = false;
                this._addingEntry = false;

                // Vollständiges Zurücksetzen des Zustands
                const formElement = this.shadowRoot?.querySelector('.form-content') as HTMLElement;
                const headerElement = this.shadowRoot?.querySelector('.add-header') as HTMLElement;

                if (formElement) {
                    formElement.classList.remove('visible');
                }

                if (headerElement) {
                    headerElement.classList.remove('visible');
                }

                // Warte auf das Ende der Ausblend-Animation
                setTimeout(() => {
                    this._selectedAddAction = null;
                    this._newEntryValue = '';
                    this._addMenuOpen = false;

                    // Events aktualisieren
                    this._updateEvents();
                }, 300);
            }, 1000);

        } catch {
            this._addingEntry = false;
        }
    }

    private _handleKeyDown(e: KeyboardEvent): void {
        e.stopPropagation();
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            this._addNewEntry();
        }
    }

    // Hilfsmethoden für das Hinzufügen neuer Einträge
    private _getIconForAction(action: string | null): string {
        if (!action) return '';

        switch (action) {
            case ADD_ACTIONS.PHASE:
                return 'mdi:sprout';
            case ADD_ACTIONS.AREA:
                return 'mdi:map-marker';
            case ADD_ACTIONS.POT:
                return 'mdi:cup';
            case ADD_ACTIONS.TREATMENT:
                return 'mdi:medical-bag';
            case ADD_ACTIONS.JOURNAL:
                return 'mdi:notebook';
            default:
                return '';
        }
    }

    private _getColorForAction(action: string | null): string {
        if (!action) return '';

        switch (action) {
            case ADD_ACTIONS.PHASE:
                return `${COLOR_CONFIG.growth.hue}, ${COLOR_CONFIG.growth.saturation}%, 45%`;
            case ADD_ACTIONS.AREA:
                return `${COLOR_CONFIG.area.hue}, ${COLOR_CONFIG.area.saturation}%, 45%`;
            case ADD_ACTIONS.POT:
                return `${COLOR_CONFIG.pot.hue}, ${COLOR_CONFIG.pot.saturation}%, 45%`;
            case ADD_ACTIONS.TREATMENT:
                return `${COLOR_CONFIG.treatment.hue}, ${COLOR_CONFIG.treatment.saturation}%, 45%`;
            case ADD_ACTIONS.JOURNAL:
                return `${COLOR_CONFIG.journal.hue}, ${COLOR_CONFIG.journal.saturation}%, 45%`;
            default:
                return '';
        }
    }

    private _getLabelForAction(action: string | null): string {
        if (!action || !this.hass) return '';

        switch (action) {
            case ADD_ACTIONS.PHASE:
                return TranslationUtils.translateHistory(this.hass, 'growth_phase');
            case ADD_ACTIONS.AREA:
                return TranslationUtils.translateHistory(this.hass, 'area');
            case ADD_ACTIONS.POT:
                return TranslationUtils.translateHistory(this.hass, 'pot_size');
            case ADD_ACTIONS.TREATMENT:
                return TranslationUtils.translateHistory(this.hass, 'treatment');
            case ADD_ACTIONS.JOURNAL:
                return TranslationUtils.translateHistory(this.hass, 'journal');
            default:
                return '';
        }
    }

    private _renderFormForAction(action: string | null): TemplateResult {
        if (!action) return html``;

        // Gemeinsame Event-Handler für alle Formulartypen
        const handleClick = (e: Event) => e.stopPropagation();

        // Handler für Dropdown-Änderungen
        const handleSelectChange = (e: Event) => {
            e.stopPropagation();
            const value = (e.target as HTMLSelectElement).value;
            this._newEntryValue = value;
            if (value) {
                this._addNewEntry();
            }
        };

        // Handler für Texteingaben
        const handleInput = (e: Event) => {
            e.stopPropagation();
            this._newEntryValue = (e.target as HTMLInputElement | HTMLTextAreaElement).value;
        };

        // Handler für Tastatureingaben (Enter)
        const handleKeyDown = (e: KeyboardEvent) => {
            e.stopPropagation();
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                if (this._newEntryValue) {
                    this._addNewEntry();
                }
            }
        };

        // Handler für Verlassen des Feldes
        const handleBlur = (e: Event) => {
            e.stopPropagation();
            if (this._newEntryValue) {
                this._addNewEntry();
            }
        };

        // Rendere das entsprechende Eingabefeld basierend auf dem Aktionstyp
        switch (action) {
            case ADD_ACTIONS.PHASE:
                return html`
                    <div class="form-field">
                        <select id="phase-select"
                            @click=${handleClick}
                            @change=${handleSelectChange}
                        >
                            <option value="" disabled selected>${TranslationUtils.translateHistory(this.hass!, 'please_select')}</option>
                            <option value="seeds">${TranslationUtils.translateGrowthPhase(this.hass!, 'seeds')}</option>
                            <option value="germination">${TranslationUtils.translateGrowthPhase(this.hass!, 'germination')}</option>
                            <option value="rooting">${TranslationUtils.translateGrowthPhase(this.hass!, 'rooting')}</option>
                            <option value="growth">${TranslationUtils.translateGrowthPhase(this.hass!, 'growth')}</option>
                            <option value="flowering">${TranslationUtils.translateGrowthPhase(this.hass!, 'flowering')}</option>
                            <option value="removed">${TranslationUtils.translateGrowthPhase(this.hass!, 'removed')}</option>
                            <option value="harvested">${TranslationUtils.translateGrowthPhase(this.hass!, 'harvested')}</option>
                        </select>
                    </div>
                `;

            case ADD_ACTIONS.AREA: {
                // Hole alle verfügbaren Räume aus dem hass-Objekt
                const areas = Object.values(this.hass?.areas || {})
                    .map(area => area.name)
                    .sort((a, b) => a.localeCompare(b, 'de'));

                return html`
                    <div class="form-field">
                        <select id="area-select"
                            @click=${handleClick}
                            @change=${handleSelectChange}
                        >
                            <option value="" disabled selected>${TranslationUtils.translateHistory(this.hass!, 'please_select')}</option>
                            <option value="-">-</option>
                            ${areas.map(area => html`<option value="${area}">${area}</option>`)}
                        </select>
                    </div>
                `;
            }

            case ADD_ACTIONS.POT:
                return html`
                    <div class="form-field">
                        <input type="number"
                            id="pot-input"
                            min="0.1"
                            step="0.1"
                            placeholder="${TranslationUtils.translateHistory(this.hass!, 'pot_size_placeholder')}"
                            @click=${handleClick}
                            @input=${handleInput}
                            @keydown=${handleKeyDown}
                            @blur=${handleBlur}
                        >
                    </div>
                `;

            case ADD_ACTIONS.TREATMENT:
                return html`
                    <div class="form-field">
                        <select id="treatment-select"
                            @click=${handleClick}
                            @change=${handleSelectChange}
                        >
                            <option value="" disabled selected>${TranslationUtils.translateHistory(this.hass!, 'please_select')}</option>
                            <option value="cut">${TranslationUtils.translateTreatment(this.hass!, 'cut')}</option>
                            <option value="super cropping">${TranslationUtils.translateTreatment(this.hass!, 'super cropping')}</option>
                            <option value="topping">${TranslationUtils.translateTreatment(this.hass!, 'topping')}</option>
                            <option value="lollipop">${TranslationUtils.translateTreatment(this.hass!, 'lollipop')}</option>
                            <option value="fim">${TranslationUtils.translateTreatment(this.hass!, 'fim')}</option>
                            <option value="rib">${TranslationUtils.translateTreatment(this.hass!, 'rib')}</option>
                            <option value="spray pest">${TranslationUtils.translateTreatment(this.hass!, 'spray pest')}</option>
                            <option value="spray water">${TranslationUtils.translateTreatment(this.hass!, 'spray water')}</option>
                        </select>
                    </div>
                `;

            case ADD_ACTIONS.JOURNAL:
                return html`
                    <div class="form-field">
                        <textarea id="journal-input"
                            placeholder="${TranslationUtils.translateHistory(this.hass!, 'journal_placeholder')}"
                            @click=${handleClick}
                            @input=${handleInput}
                        ></textarea>
                    </div>
                    <div class="journal-submit">
                        <ha-icon-button
                            icon="mdi:send"
                            @click=${(e: Event) => {
                                e.stopPropagation();
                                this._addNewEntry();
                            }}
                            ?disabled=${!this._newEntryValue}
                            title="${TranslationUtils.translateUI(this.hass!, 'confirm')}"
                        ></ha-icon-button>
                    </div>
                `;

            default:
                return html``;
        }
    }

    render(): TemplateResult {
        if (!this.hass || !this.entityId) return html``;

        // Standardmäßig alle Gruppen anzeigen, wenn keine Konfiguration vorhanden ist
        const showGroups = this.historyGroups || Object.values(EVENT_TYPES);

        // CSS-Klasse für die Position der Linie
        const timelinePositionClass = this.linePosition === 'right' ? 'timeline-right' : '';

        return html`
            <div class="history-container">
                <div class="vertical-timeline ${timelinePositionClass}">
                    <div class="timeline-line" style="background-color: hsl(${COLOR_CONFIG.growth.hue}, ${COLOR_CONFIG.growth.saturation}%, 45%);"></div>

                    <!-- Hinzufügen-Button am Anfang der Timeline -->
                    <div class="phase-item add-item" @click=${this._toggleAddMenu}>
                        <div class="phase-dot add-dot" style="background-color: hsl(${COLOR_CONFIG.add.hue}, ${COLOR_CONFIG.add.saturation}%, 45%);">
                            <ha-icon icon="mdi:plus" class="dot-icon"></ha-icon>
                        </div>
                        <div class="phase-content add-content">
                            ${this._selectedAddAction !== null ? html`
                                <!-- Header mit ausgewählter Aktion -->
                                <div class="add-header">
                                    <div class="add-header-title">
                                        <ha-icon icon="${this._getIconForAction(this._selectedAddAction)}"
                                                style="color: hsl(${this._getColorForAction(this._selectedAddAction)});">
                                        </ha-icon>
                                        <span>${this._getLabelForAction(this._selectedAddAction)}</span>
                                    </div>
                                    <ha-icon-button
                                        icon="mdi:close"
                                        @click=${(e: Event) => {
                                            e.stopPropagation();
                                            this._toggleAddMenu();
                                        }}
                                    ></ha-icon-button>
                                </div>

                                <!-- Formular zum Hinzufügen des ausgewählten Eintrags -->
                                <div class="form-content" @click=${(e: Event) => e.stopPropagation()}>
                                    ${this._renderFormForAction(this._selectedAddAction)}

                                    ${this._selectedAddAction !== ADD_ACTIONS.JOURNAL &&
                                      this._selectedAddAction !== ADD_ACTIONS.PHASE &&
                                      this._selectedAddAction !== ADD_ACTIONS.TREATMENT &&
                                      this._selectedAddAction !== ADD_ACTIONS.AREA &&
                                      this._selectedAddAction !== ADD_ACTIONS.POT ? html`
                                        <div class="form-actions">
                                            <ha-icon-button
                                                icon="mdi:check"
                                                @click=${(e: Event) => {
                                                    e.stopPropagation();
                                                    this._addNewEntry();
                                                }}
                                                ?disabled=${this._addingEntry || !this._newEntryValue}
                                                class="${this._newEntryAdded ? 'success' : ''}"
                                                title="${TranslationUtils.translateUI(this.hass!, 'confirm')}"
                                            ></ha-icon-button>
                                        </div>
                                    ` : ''}
                                </div>
                            ` : html`
                                <!-- Überschrift für den Hinzufügen-Button -->
                                <div class="phase-header">
                                    <div class="phase-name">${TranslationUtils.translateHistory(this.hass!, 'add_entry')}</div>
                                </div>

                                <!-- Menü zum Hinzufügen neuer Einträge -->
                                <div class="add-menu-container ${this._addMenuOpen ? 'expanded' : ''}">
                                    <div class="add-menu-options">
                                        ${showGroups.includes(EVENT_TYPES.PHASE) ? html`
                                            <div class="add-option" data-action="${ADD_ACTIONS.PHASE}" @click=${(e: Event) => { e.stopPropagation(); this._selectAddAction(ADD_ACTIONS.PHASE); }}>
                                                <ha-icon icon="mdi:sprout" class="option-icon" style="color: hsl(${COLOR_CONFIG.growth.hue}, ${COLOR_CONFIG.growth.saturation}%, 45%);"></ha-icon>
                                                <span>${TranslationUtils.translateHistory(this.hass!, 'growth_phase')}</span>
                                            </div>
                                        ` : ''}
                                        ${showGroups.includes(EVENT_TYPES.AREA) ? html`
                                            <div class="add-option" data-action="${ADD_ACTIONS.AREA}" @click=${(e: Event) => { e.stopPropagation(); this._selectAddAction(ADD_ACTIONS.AREA); }}>
                                                <ha-icon icon="mdi:map-marker" class="option-icon" style="color: hsl(${COLOR_CONFIG.area.hue}, ${COLOR_CONFIG.area.saturation}%, 45%);"></ha-icon>
                                                <span>${TranslationUtils.translateHistory(this.hass!, 'area')}</span>
                                            </div>
                                        ` : ''}
                                        ${showGroups.includes(EVENT_TYPES.POT) ? html`
                                            <div class="add-option" data-action="${ADD_ACTIONS.POT}" @click=${(e: Event) => { e.stopPropagation(); this._selectAddAction(ADD_ACTIONS.POT); }}>
                                                <ha-icon icon="mdi:cup" class="option-icon" style="color: hsl(${COLOR_CONFIG.pot.hue}, ${COLOR_CONFIG.pot.saturation}%, 45%);"></ha-icon>
                                                <span>${TranslationUtils.translateHistory(this.hass!, 'pot_size')}</span>
                                            </div>
                                        ` : ''}
                                        ${showGroups.includes(EVENT_TYPES.TREATMENT) ? html`
                                            <div class="add-option" data-action="${ADD_ACTIONS.TREATMENT}" @click=${(e: Event) => { e.stopPropagation(); this._selectAddAction(ADD_ACTIONS.TREATMENT); }}>
                                                <ha-icon icon="mdi:medical-bag" class="option-icon" style="color: hsl(${COLOR_CONFIG.treatment.hue}, ${COLOR_CONFIG.treatment.saturation}%, 45%);"></ha-icon>
                                                <span>${TranslationUtils.translateHistory(this.hass!, 'treatment')}</span>
                                            </div>
                                        ` : ''}
                                        ${showGroups.includes(EVENT_TYPES.JOURNAL) ? html`
                                            <div class="add-option" data-action="${ADD_ACTIONS.JOURNAL}" @click=${(e: Event) => { e.stopPropagation(); this._selectAddAction(ADD_ACTIONS.JOURNAL); }}>
                                                <ha-icon icon="mdi:notebook" class="option-icon" style="color: hsl(${COLOR_CONFIG.journal.hue}, ${COLOR_CONFIG.journal.saturation}%, 45%);"></ha-icon>
                                                <span>${TranslationUtils.translateHistory(this.hass!, 'journal')}</span>
                                            </div>
                                        ` : ''}
                                    </div>
                                </div>
                            `}
                        </div>
                    </div>

                    ${this._renderEvents()}
                </div>
            </div>
            ${this._showGallery ? html`
                <flower-gallery
                    .hass=${this.hass}
                    .entityId=${this.entityId}
                    .images=${this._imageUrls}
                    .initialImageIndex=${this._selectedImageIndex}
                    .onClose=${() => {
                        this._showGallery = false;
                        this._selectedImageIndex = null;
                    }}
                ></flower-gallery>
            ` : ''}
        `;
    }

    private _renderEvents(): TemplateResult {
        if (this.events.length === 0) {
            return html`
                <div class="phase-item">
                    <div class="phase-dot" style="background-color: hsl(${COLOR_CONFIG.growth.hue}, ${COLOR_CONFIG.growth.saturation}%, 45%);"></div>
                    <div class="phase-content">
                        <div class="phase-name">Keine Ereignisse verfügbar</div>
                    </div>
                </div>
            `;
        }

        return html`
            ${this.events.map((event, index) => {
                // Bestimme Farbe und Icon basierend auf Event-Typ
                let dotColor = '';
                let icon = '';

                // Prüfe, ob es sich um eine Growth Phase handelt
                const isGrowthPhase = event.type.startsWith('phase-');
                const isJournal = event.type === 'journal';

                // Generiere eine eindeutige ID für das Event
                const eventId = `event-${index}-${event.type}-${event.date.getTime()}`;
                const isExpanded = this._expandedJournalIds.has(eventId);

                // Variable für den Hintergrundverlauf
                let bgColor = '';

                if (isGrowthPhase) {
                    dotColor = event.style || `background-color: hsl(${COLOR_CONFIG.growth.hue}, ${COLOR_CONFIG.growth.saturation}%, 45%);`;
                    // Extrahiere die Farbe für den Hintergrundverlauf und mache sie transparenter
                    const colorMatch = dotColor.match(/background-color:\s*hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
                    if (colorMatch) {
                        const [, hue, saturation, lightness] = colorMatch;
                        // Verwende die gleiche Farbe, aber mit 15% Transparenz für einen subtileren Effekt
                        bgColor = `--milestone-color: hsla(${hue}, ${saturation}%, ${lightness}%, 0.15)`;
                    } else {
                        // Fallback für den Fall, dass der reguläre Ausdruck nicht passt
                        // Verwende eine Standard-Farbe mit niedriger Transparenz
                        bgColor = `--milestone-color: hsla(${COLOR_CONFIG.growth.hue}, ${COLOR_CONFIG.growth.saturation}%, 45%, 0.15)`;
                    }

                    // Extrahiere die Phase aus dem Event-Typ (z.B. 'phase-samen' -> 'samen')
                    const phase = event.type.split('-')[1];

                    // Verwende die zentrale Icon-Definition mit index-basierter Logik
                    const plantName = this.entityId?.split('.')[1];
                    const plantEntity = plantName ? this.hass.states[`plant.${plantName}`] : undefined;
                    icon = getGrowthPhaseIcon(phase, this.hass, plantEntity);
                } else if (event.type === 'pot-size') {
                    dotColor = event.style || `background-color: hsl(${COLOR_CONFIG.pot.hue}, ${COLOR_CONFIG.pot.saturation}%, 45%);`;
                    icon = 'mdi:cup';
                } else if (event.type === 'area-moved') {
                    dotColor = event.style || `background-color: hsl(${COLOR_CONFIG.area.hue}, ${COLOR_CONFIG.area.saturation}%, 45%);`;
                    icon = 'mdi:map-marker';
                } else if (event.type === 'treatment') {
                    dotColor = event.style || `background-color: hsl(${COLOR_CONFIG.treatment.hue}, ${COLOR_CONFIG.treatment.saturation}%, 45%);`;
                    const plantName = this.entityId?.split('.')[1];
                    const plantEntity = plantName ? this.hass.states[`plant.${plantName}`] : undefined;
                    const originalTreatment = event.data?.originalValue || event.label;
                    icon = getTreatmentIcon(originalTreatment, this.hass, plantEntity);
                } else if (event.type === 'image') {
                    dotColor = event.style || `background-color: hsl(${COLOR_CONFIG.image.hue}, ${COLOR_CONFIG.image.saturation}%, 45%);`;
                    icon = 'mdi:camera';
                } else if (isJournal) {
                    dotColor = event.style || `background-color: hsl(${COLOR_CONFIG.journal.hue}, ${COLOR_CONFIG.journal.saturation}%, 45%);`;
                    icon = 'mdi:notebook';
                }

                const handleClick = () => {
                    if (event.type === 'image' && event.data?.imageIndex !== undefined) {
                        this._handleImageClick(event.data.imageIndex);
                    } else if (isJournal) {
                        this._toggleJournalExpand(eventId);
                    }
                };

                // Berechne Tage seit Pflanzung und formatiere wie im Graph: "[Tag] | [Datum]"
                let dateDisplay = new Date(event.date).toLocaleDateString();
                if (this._plantingDate && event.date) {
                    // Setze die Startzeit auf Mitternacht des Starttages
                    const startDate = new Date(this._plantingDate);
                    startDate.setHours(0, 0, 0, 0);

                    // Berechne die Differenz in Tagen
                    const diffTime = Math.abs(new Date(event.date).getTime() - startDate.getTime());
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                    // Formatiere als "[Tag] | [Datum]"
                    dateDisplay = `${diffDays} | ${dateDisplay}`;
                }

                return html`
                    <div class="phase-item ${isGrowthPhase ? 'milestone' : ''}" @click=${handleClick}>
                        <div class="phase-dot ${isGrowthPhase ? 'milestone' : ''}" style="${dotColor}">
                            ${icon ? html`<ha-icon icon="${icon}" class="dot-icon"></ha-icon>` : ''}
                        </div>
                        <div class="phase-content ${isGrowthPhase ? 'milestone' : ''}" style="${isGrowthPhase ? bgColor : ''}">
                            <div class="phase-header">
                                <div class="phase-name">${event.label}</div>
                                <div class="phase-date">${dateDisplay}</div>
                            </div>
                            <div class="journal-container ${isJournal && isExpanded ? 'expanded' : ''}" id="journal-${eventId}" style="height: 0;">
                                <div class="phase-description">${event.description}</div>
                            </div>
                        </div>
                    </div>
                `;
            })}
        `;
    }
}