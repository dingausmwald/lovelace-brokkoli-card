import { CSSResult, HTMLTemplateResult, LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import { timelineStyles } from '../styles/timeline-styles';
import { TimelineEvent } from '../types/timeline-types';
import { FlowerGallery } from './gallery';
import { PlantEntityUtils } from '../utils/plant-entity-utils';
import { TranslationUtils } from '../utils/translation-utils';

// Konstanten für Event-Typen
const EVENT_TYPES = {
    PHASE: 'phase',
    AREA: 'area',
    POT: 'pot-size',
    TREATMENT: 'treatment',
    IMAGE: 'image'
} as const;

// Konstanten für Farben
const COLOR_CONFIG = {
    growth: { hue: 120, saturation: 60 },
    end: { hue: 0, saturation: 0 },
    pot: { hue: 207, saturation: 90 },
    area: { hue: 280, saturation: 70 },
    treatment: { hue: 45, saturation: 100 },
    image: { hue: 175, saturation: 70 }
} as const;

@customElement('flower-timeline')
export class FlowerTimeline extends LitElement {
    @property() public hass?: HomeAssistant;
    @property() public entityId?: string;
    @property({ type: Array }) public events: TimelineEvent[] = [];
    @property() public stateHistory: Array<{ state: string; last_changed: string; attributes?: Record<string, unknown> }> = [];
    @state() private _timelineWidth = 500;
    @state() private labelOffsets: Record<number, number> = {};
    @state() private markerOffsets: Record<number, number> = {};
    @state() private _showGallery = false;
    @state() private _hoveredImageIndex: number | null = null;
    @state() private _hoveredEventIndex: number | null = null;
    private _lastUpdate = 0;
    private _resizeObserver?: ResizeObserver;
    private _imageUrls: string[] = [];
    private _imageDialog?: HTMLElement;
    private _plantInfo: { helpers?: { growth_phase?: { entity_id?: string }; pot_size?: { entity_id?: string }; location?: { entity_id?: string }; treatment?: { entity_id?: string }; flowering_duration?: { entity_id?: string } } };
    private _isLoading = false;

    firstUpdated() {
        const timelineElement = this.shadowRoot?.querySelector('.timeline-events');
        if (timelineElement) {
            this._timelineWidth = timelineElement.getBoundingClientRect().width;
            
            // Beobachte Größenänderungen
            this._resizeObserver = new ResizeObserver(entries => {
                for (const entry of entries) {
                    this._timelineWidth = entry.contentRect.width;
                    this.requestUpdate();
                }
            });
            this._resizeObserver.observe(timelineElement);
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        if (this._resizeObserver) {
            this._resizeObserver.disconnect();
        }
    }

    async connectedCallback() {
        super.connectedCallback();
        await this._updateTimelineData();
        // Lade auch die Pflanzen-Info
        await this._loadPlantInfo();
    }

    async updated(changedProps: Map<string, unknown>) {
        super.updated(changedProps);
        
        // Aktualisiere die Daten maximal alle 2 Sekunden
        if (Date.now() - this._lastUpdate > 2000) {
            await this._updateTimelineData();
            // Lade auch die Pflanzen-Info
            await this._loadPlantInfo();
        }
    }

    private async _updateTimelineData() {
        if (this.entityId && this.hass) {
            const plantName = this.entityId.split('.')[1];
            this.events = await this.collectTimelineEvents(plantName);

            // Lade Status-Historie
            try {
                const startTime = this.events[0]?.date.toISOString() || new Date().toISOString();
                const endTime = new Date().toISOString();
                const response = await this.hass.callApi('GET', 
                    `history/period/${startTime}?filter_entity_id=${this.entityId}&end_time=${endTime}`
                );
                if (response && Array.isArray(response) && response.length > 0) {
                    this.stateHistory = response[0];
                }
            } catch {
                console.warn('Fehler beim Laden der Status-Historie:');
                this.stateHistory = [];
            }

            this._lastUpdate = Date.now();
        }
    }

    private async _loadPlantInfo() {
        if (!this.entityId || !this.hass || this._isLoading) return;

        this._isLoading = true;
        try {
            // Verwende PlantEntityUtils, um die Pflanzen-Info zu holen
            // Dies optimiert API-Calls und nutzt den zentralen Cache
            this._plantInfo = await PlantEntityUtils.getPlantInfo(this.hass, this.entityId);
        } catch (err) {
            console.warn('Fehler beim Laden der Pflanzen-Info:', err);
            this._plantInfo = null;
        } finally {
            this._isLoading = false;
        }
    }

    private async collectTimelineEvents(plantName: string): Promise<Array<TimelineEvent>> {
        if (!this.hass) return [];
        
        const events: Array<TimelineEvent> = [];
        
        // Verwende PlantEntityUtils, um die Pflanzen-Info zu holen
        let plantInfo: unknown;
        try {
            plantInfo = await PlantEntityUtils.getPlantInfo(this.hass, `plant.${plantName}`);
        } catch (err) {
            console.warn('Fehler beim Laden der Pflanzen-Info:', err);
            return [];
        }

        // Entity IDs aus der API-Antwort extrahieren
        const helpers = (plantInfo as { helpers?: { growth_phase?: { entity_id?: string }; pot_size?: { entity_id?: string }; treatment?: { entity_id?: string }; location?: { entity_id?: string } } })?.helpers || {};
        const phaseEntityId = helpers.growth_phase?.entity_id;
        const potSizeEntityId = helpers.pot_size?.entity_id;

        const treatmentEntityId = helpers.treatment?.entity_id;
        const locationEntityId = helpers.location?.entity_id;
        
        // Sammle Bilder-Events mit der neuen Methode
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
        
        // Sammle Wachstumsphasen
        const phases = ['seeds', 'germination', 'rooting', 'growing', 'flowering', 'removed', 'harvested'] as const;
        
        // Sammle alle Phasen-Events
        const phaseEvents: TimelineEvent[] = [];
        
        if (phaseEntityId) {
            const phaseEntity = this.hass.states[phaseEntityId];
            if (phaseEntity) {
                for (const phase of phases) {
                    const startDate = phaseEntity?.attributes[`${phase === 'removed' || phase === 'harvested' ? phase : phase + '_start'}`];
                    if (startDate) {
                        const event: TimelineEvent = {
                            date: new Date(startDate),
                            type: `phase-${phase}`,
                            label: TranslationUtils.translateGrowthPhase(this.hass, phase),
                            description: `${TranslationUtils.translateGrowthPhase(this.hass, phase)} ${TranslationUtils.translateHistory(this.hass, 'phase_started')} ${new Date(startDate).toLocaleDateString()}`
                        };
                        
                        // Setze Farben für die Events
                        if (phase === 'removed') {
                            event.style = 'display: none;'; // Unsichtbar
                        } else if (phase === 'harvested') {
                            // Schraffur mit kleinen Häkchen
                            event.style = `
                                background-color: hsl(120, 70%, 45%);
                                background-image: repeating-linear-gradient(45deg, 
                                    transparent,
                                    transparent 2px,
                                    rgba(255,255,255,0.4) 2px,
                                    rgba(255,255,255,0.4) 4px
                                );
                            `;
                        } else {
                            // Berechne die Position der Phase im Wachstumszyklus (ohne entfernt/geerntet)
                            const growthPhases = phases.filter(p => p !== 'removed' && p !== 'harvested');
                            const phaseIndex = growthPhases.indexOf(phase);
                            const lightness = growthPhases.length === 1 ? 55 : 
                                55 - ((phaseIndex / Math.max(1, growthPhases.length - 1)) * 25); // Hell nach dunkel (55% bis 30%)
                            event.style = `background-color: hsl(${COLOR_CONFIG.growth.hue}, ${COLOR_CONFIG.growth.saturation}%, ${lightness}%)`;
                        }
                        
                        phaseEvents.push(event);
                    }
                }
            }
        }
        
        events.push(...phaseEvents);

        // Lade Topfgrößen-Historie
        try {
            if (potSizeEntityId) {
                const startTime = events[0]?.date.toISOString() || new Date().toISOString();
                const endTime = new Date().toISOString();
                
                const response = await this.hass.callApi('GET', 
                    `history/period/${startTime}?filter_entity_id=${potSizeEntityId}&end_time=${endTime}`
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
            }
        } catch (err) {
            console.warn('Fehler beim Laden der Topfgrößen-Historie:', err);
        }

        // Lade Area-Changes aus dem Location-Helper
        try {
            if (locationEntityId) {
                const startTime = events[0]?.date.toISOString() || new Date().toISOString();
                const endTime = new Date().toISOString();
                
                const response = await this.hass.callApi('GET', 
                    `history/period/${startTime}?filter_entity_id=${locationEntityId}&end_time=${endTime}`
                );
                
                if (response && Array.isArray(response) && response.length > 0) {
                    const areaEvents: TimelineEvent[] = [];
                    const history = response[0];
                    let lastArea: string | null = null;

                    for (let i = 0; i < history.length; i++) {
                        const state = history[i];
                        if (state.state && state.state !== 'unavailable' && state.state !== 'unknown') {
                            try {
                                // Versuche den State als JSON zu parsen
                                const locationData = JSON.parse(state.state);
                                if (locationData && locationData.area) {
                                    // Nur wenn sich der Bereich ändert oder es der erste gültige Wert ist
                                    if (lastArea === null || locationData.area !== lastArea) {
                                        areaEvents.push({
                                            date: new Date(state.last_changed),
                                            type: 'area-moved',
                                            label: locationData.area,
                                            description: `${TranslationUtils.translateHistory(this.hass, 'moved_to')} ${locationData.area} ${new Date(state.last_changed).toLocaleDateString()}`
                                        } as TimelineEvent);
                                        lastArea = locationData.area;
                                    }
                                }
                            } catch {
                                // Überspringe nicht-JSON Zustandswerte
                                continue;
                            }
                        }
                    }
                    
                    // Setze Farben für Area-Events
                    areaEvents.forEach((event, index) => {
                        const lightness = 65 - (index * 10); // Start bei 65%, jeder weitere 10% dunkler
                        event.style = `background-color: hsl(${COLOR_CONFIG.area.hue}, ${COLOR_CONFIG.area.saturation}%, ${lightness}%)`;
                    });
                    
                    events.push(...areaEvents);
                }
            }
        } catch (err) {
            console.warn('Fehler beim Laden der Area-Historie:', err);
        }

        // Lade Treatment-Historie
        try {
            if (treatmentEntityId) {
                const startTime = events[0]?.date.toISOString() || new Date().toISOString();
                const endTime = new Date().toISOString();
                
                const response = await this.hass.callApi('GET', 
                    `history/period/${startTime}?filter_entity_id=${treatmentEntityId}&end_time=${endTime}`
                );
                
                if (response && Array.isArray(response) && response.length > 0) {
                    const treatmentEvents: TimelineEvent[] = [];
                    const history = response[0];
                    let lastTreatment: string | null = null;

                    for (let i = 0; i < history.length; i++) {
                        const state = history[i];
                        if (state.state && state.state !== 'unavailable' && state.state !== 'unknown' && state.state !== 'none') {
                            // Nur wenn sich die Behandlung ändert oder es der erste gültige Wert ist
                            if (lastTreatment === null || state.state !== lastTreatment) {
                                treatmentEvents.push({
                                    date: new Date(state.last_changed),
                                    type: 'treatment',
                                    label: TranslationUtils.translateTreatment(this.hass, state.state),
                                    description: `${TranslationUtils.translateHistory(this.hass, 'treatment')}: ${TranslationUtils.translateTreatment(this.hass, state.state)} ${new Date(state.last_changed).toLocaleDateString()}`
                                });
                                lastTreatment = state.state;
                            }
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
            }
        } catch (err) {
            console.warn('Fehler beim Laden der Treatment-Historie:', err);
        }

        // Sortiere Events nach Datum
        return events.sort((a, b) => a.date.getTime() - b.date.getTime());
    }

    static get styles(): CSSResult {
        return timelineStyles;
    }

    private calculateEventPosition(event: TimelineEvent, startDate: Date, visualEndDate: Date): number {
        const totalTime = visualEndDate.getTime() - startDate.getTime();
        const eventTime = event.date.getTime() - startDate.getTime();
        return Math.min((eventTime / totalTime) * 100, 100);
    }

    private checkCollisions(events: TimelineEvent[], startDate: Date, visualEndDate: Date) {
        const positions = new Map<TimelineEvent, number>();
        const offsets = new Map<TimelineEvent, number>();
        const minDistance = 4; // Minimaler Abstand in Pixeln
        
        // Basispositionen in Pixeln berechnen
        events.forEach(event => {
            const positionPercent = this.calculateEventPosition(event, startDate, visualEndDate);
            positions.set(event, (positionPercent * this._timelineWidth) / 100);
        });
        
        // Nach Zeitpunkt sortieren
        events.sort((a, b) => positions.get(a)! - positions.get(b)!);
        
        // Einfache Links-nach-Rechts-Verdrängung
        for (let i = 1; i < events.length; i++) {
            const currentEvent = events[i];
            const prevEvent = events[i - 1];
            
            const currentPos = positions.get(currentEvent)!;
            const prevPos = positions.get(prevEvent)!;
            const prevOffset = offsets.get(prevEvent) || 0;
            
            // Wenn das aktuelle Event zu nah am vorherigen (inkl. Offset) ist
            const minRequiredPos = prevPos + prevOffset + minDistance;
            if (currentPos < minRequiredPos) {
                offsets.set(currentEvent, minRequiredPos - currentPos);
            }
        }
        
        return offsets;
    }

    private calculateEventWidth(event: TimelineEvent, index: number, groupEvents: TimelineEvent[], startDate: Date, visualEndDate: Date) {
        const position = this.calculateEventPosition(event, startDate, visualEndDate);

        // Für Treatment-Events geben wir nur die Position zurück, die Breite ist fest auf 2px
        if (event.type === 'treatment') {
            return { 
                position: `${position}%`,
                width: '2px'
            };
        }

        // Wenn es das letzte Event ist, fülle bis zum Ende
        if (index === groupEvents.length - 1) {
            return {
                position: `${position}%`,
                width: `calc(100% - ${position}%)`
            };
        }

        // Ansonsten fülle bis zum nächsten Event
        const nextEvent = groupEvents[index + 1];
        const nextPosition = this.calculateEventPosition(nextEvent, startDate, visualEndDate);
        
        return {
            position: `${position}%`,
            width: `calc(${nextPosition}% - ${position}%)`
        };
    }

    private formatDate(date: Date, event?: TimelineEvent): string {
        // Für das Harvest-Event verwenden wir das displayDate
        if (event?.type === 'harvest' && event.displayDate) {
            return event.displayDate.toLocaleDateString(undefined, { day: '2-digit', month: '2-digit' });
        }
        return date.toLocaleDateString(undefined, { day: '2-digit', month: '2-digit' });
    }

    private checkOverlap(
        positions: Array<{ index: number; position: number; type: string; offset: number }>
    ) {
        const offsets: Record<number, number> = {};
        let lastOffset = 0;

        // Sortiere nach Position
        positions.sort((a, b) => a.position - b.position);

        // Erstelle temporäre Elemente um Breiten zu messen
        const elementWidths = new Map<number, number>();
        const tempDiv = document.createElement('div');
        tempDiv.style.visibility = 'hidden';
        tempDiv.style.position = 'absolute';
        tempDiv.className = 'timeline-label';
        document.body.appendChild(tempDiv);

        positions.forEach(pos => {
            let text;
            if (pos.index >= this.events.length) {
                // Harvest Event
                text = TranslationUtils.translateHistory(this.hass, 'harvest');
            } else {
                const event = this.events[pos.index];
                text = event.label;
            }
            tempDiv.textContent = text;
            const width = tempDiv.getBoundingClientRect().width;
            elementWidths.set(pos.index, width);
        });

        document.body.removeChild(tempDiv);

        for (let i = 0; i < positions.length; i++) {
            const current = positions[i];
            
            // Prüfe Überlappung mit vorherigen Elementen
            let overlaps = false;
            for (let j = Math.max(0, i - 3); j < i; j++) {
                const previous = positions[j];
                
                // Berechne den minimalen Abstand basierend auf den Element-Breiten
                const currentWidth = elementWidths.get(current.index) || 0;
                const previousWidth = elementWidths.get(previous.index) || 0;
                const minDistance = (currentWidth + previousWidth) / 2 + 1; // 1px zusätzlicher Abstand

                // Konvertiere die prozentuale Position in Pixel
                const currentPosInPixels = (current.position / 100) * this._timelineWidth;
                const previousPosInPixels = (previous.position / 100) * this._timelineWidth;

                if (Math.abs(currentPosInPixels - previousPosInPixels) < minDistance) {
                    overlaps = true;
                    if (lastOffset === 0) lastOffset = 1;      // Nach oben
                    else if (lastOffset === 1) lastOffset = 2;  // Weiter nach oben
                    else if (lastOffset === 2) lastOffset = 0;  // Zurück zur Mitte
                    break;
                }
            }

            if (overlaps) {
                offsets[current.index] = lastOffset;
            } else {
                offsets[current.index] = 0;
                lastOffset = 0;
            }
        }

        return offsets;
    }

    // Hilfsmethode zum Rendern von Event-Gruppen
    private renderEventGroup(
        events: TimelineEvent[],
        groupType: string,
        startDate: Date,
        visualEndDate: Date,
        offsets: Map<TimelineEvent, number>,
        styles: Map<string, { top: number; height: number }>
    ): HTMLTemplateResult {
        return html`
            ${events.map((event, index) => {
                const { position, width } = this.calculateEventWidth(event, index, events, startDate, visualEndDate);
                const offset = offsets.get(event) || 0;
                const isImage = event.type === 'image';
                const isTreatment = event.type === 'treatment';

                const imageIndex = isImage ? event.data?.imageIndex : null;
                
                // Finde den Index des Events in der gesamten Events-Liste
                const eventIndex = this.events.findIndex(e => e === event);
                const isHovered = isImage && this._hoveredImageIndex === imageIndex || this._hoveredEventIndex === eventIndex;

                // Klick-Handler für verschiedene Event-Typen
                const handleClick = () => {
                    if (isImage) {
                        this._handleImageClick(imageIndex!);
                    } else {
                        this._handleTimelineEventClick(event);
                    }
                };
                
                const handleMouseEnter = (): void => { 
                    if (isImage) {
                        this._hoveredImageIndex = imageIndex;
                    }
                    this._hoveredEventIndex = eventIndex;
                };
                const handleMouseLeave = (): void => { 
                    if (isImage) {
                        this._hoveredImageIndex = null;
                    }
                    this._hoveredEventIndex = null;
                };

                return html`
                    <div class="timeline-event ${event.type}"
                         style="left: calc(${position} + ${offset}px); 
                                width: ${width};
                                top: ${styles.get(groupType)?.top}px;
                                height: ${styles.get(groupType)?.height}px;
                                ${event.style || ''}"
                         title="${event.description}"
                         @click="${handleClick}"
                         @mouseenter="${handleMouseEnter}"
                         @mouseleave="${handleMouseLeave}"
                         ?data-hovered="${isHovered}"
                         ?data-scale-effect="${isImage || isTreatment}"
                    >
                    </div>
                `;
            })}
        `;
    }

    // Hilfsmethode zum Rendern der Status-Indikatoren
    private renderStatusIndicators(
        stateHistory: Array<{ state: string; last_changed: string }>,
        startDate: Date,
        visualEndDate: Date,
        styles: Map<string, { top: number; height: number }>
    ): HTMLTemplateResult {
        return html`
            ${stateHistory.map((state, index) => {
                const stateDate = new Date(state.last_changed);
                const nextState = this.stateHistory[index + 1];
                const endDate = nextState ? new Date(nextState.last_changed) : new Date();
                
                const position = Math.min(((stateDate.getTime() - startDate.getTime()) / (visualEndDate.getTime() - startDate.getTime())) * 100, 100);
                const width = Math.min(((endDate.getTime() - stateDate.getTime()) / (visualEndDate.getTime() - startDate.getTime())) * 100, 100 - position);
                
                const statusClass = state.state === 'problem' ? 'timeline-status-problem' : 
                                  state.state === 'unknown' ? 'timeline-status-unknown' : '';
                
                return statusClass ? html`
                    <div class="timeline-status-indicator ${statusClass}"
                         style="left: ${position}%; 
                                width: ${width}%;
                                top: ${styles.get('status')?.top}px;
                                height: ${styles.get('status')?.height}px;">
                    </div>
                ` : '';
            })}
        `;
    }

    private _handleImageClick(index: number): void {
        this._showGallery = true;
        this._hoveredImageIndex = index;
        this.requestUpdate();
    }

    // Gemeinsame Methode zum Rendern von Labels und Markern
    private renderTimelineItems(
        events: TimelineEvent[], 
        startDate: Date, 
        visualEndDate: Date, 
        isLabel: boolean
    ): HTMLTemplateResult {
        return html`
            ${events.map((event, index) => {
                const position = Math.min(((event.date.getTime() - startDate.getTime()) / (visualEndDate.getTime() - startDate.getTime())) * 100, 100);
                const offset = isLabel ? this.labelOffsets[index] || 0 : this.markerOffsets[index] || 0;
                const isImage = event.type === 'image';
                const imageIndex = isImage ? event.data?.imageIndex : null;
                
                // Finde den Index des Events in der gesamten Events-Liste
                const eventIndex = this.events.findIndex(e => e === event);
                const isHovered = isImage && this._hoveredImageIndex === imageIndex || this._hoveredEventIndex === eventIndex;

                // Klick-Handler für verschiedene Event-Typen
                const handleClick = () => {
                    if (isImage) {
                        this._handleImageClick(imageIndex!);
                    } else {
                        this._handleTimelineEventClick(event);
                    }
                };
                
                const handleMouseEnter = (): void => { 
                    if (isImage) {
                        this._hoveredImageIndex = imageIndex;
                    }
                    this._hoveredEventIndex = eventIndex;
                };
                const handleMouseLeave = (): void => { 
                    if (isImage) {
                        this._hoveredImageIndex = null;
                    }
                    this._hoveredEventIndex = null;
                };

                // Bestimme die CSS-Klassen basierend auf dem Typ (Label oder Marker)
                let offsetClass = '';
                if (isLabel) {
                    offsetClass = offset === 1 ? 'offset-up' : offset === 2 ? 'offset-up-2' : offset === -1 ? 'offset-down' : '';
                } else {
                    offsetClass = offset === 1 ? 'offset-up' : offset === 2 ? 'offset-up-2' : offset === -1 ? 'offset-down' : offset === -2 ? 'offset-down-2' : '';
                }

                const itemClass = isLabel ? 'timeline-label' : 'timeline-marker';
                const content = isLabel ? event.label : this.formatDate(event.date, event);

                return html`
                    <div class="${itemClass} ${offsetClass} ${isHovered ? 'hovered' : ''}"
                         style="left: ${position}%; ${event.style || ''}"
                         @click="${handleClick}"
                         @mouseenter="${handleMouseEnter}"
                         @mouseleave="${handleMouseLeave}"
                         ?data-hovered="${isHovered}"
                         data-type="${event.type}"
                    >
                        ${content}
                    </div>
                `;
            })}
        `;
    }

    // Neue Methode zum Behandeln von Klicks auf Timeline-Events
    private _handleTimelineEventClick(event: TimelineEvent): void {
        // Ignoriere Klicks auf Bild-Events, da diese bereits behandelt werden
        if (event.type === 'image') return;
        
        // Bestimme den Zeitbereich basierend auf dem Event-Typ
        let startDate: Date = event.date;
        let endDate: Date = new Date();
        
        // Für Phasen-Events
        if (event.type.startsWith('phase-')) {
            const phase = event.type.split('-')[1];
            
            // Hole die Entity ID aus der API
            if (this._plantInfo?.helpers?.growth_phase?.entity_id) {
                const phaseEntityId = this._plantInfo.helpers.growth_phase.entity_id;
                const phaseEntity = this.hass?.states[phaseEntityId];
                
                if (phaseEntity?.attributes) {
                    // Startdatum ist das Datum des Events
                    startDate = event.date;
                    
                    // Enddatum ist das Startdatum der nächsten Phase oder heute
                    const phases = ['seeds', 'germination', 'rooting', 'growing', 'flowering', 'removed', 'harvested'];
                    const currentPhaseIndex = phases.indexOf(phase);
                    
                    if (currentPhaseIndex >= 0 && currentPhaseIndex < phases.length - 1) {
                        // Suche nach dem Startdatum der nächsten Phase
                        const nextPhase = phases[currentPhaseIndex + 1];
                        const nextPhaseStartAttr = nextPhase === 'removed' || nextPhase === 'harvested' 
                            ? nextPhase 
                            : `${nextPhase}_start`;
                        
                        const nextPhaseStart = phaseEntity.attributes[nextPhaseStartAttr];
                        if (nextPhaseStart) {
                            endDate = new Date(nextPhaseStart);
                        }
                    }
                }
            }
        }
        // Für Raumwechsel-Events
        else if (event.type === 'area-moved') {
            // Startdatum ist das Datum des Events
            startDate = event.date;
            
            // Finde alle Area-Events in der Timeline
            const areaEvents = this.events.filter(e => e.type === 'area-moved');
            const currentAreaIndex = areaEvents.findIndex(e => 
                e.date.getTime() === event.date.getTime());
            
            // Enddatum ist das Datum des nächsten Raumwechsels oder heute
            if (currentAreaIndex >= 0 && currentAreaIndex < areaEvents.length - 1) {
                endDate = areaEvents[currentAreaIndex + 1].date;
            }
        }
        // Für Topfgrößen-Events
        else if (event.type === 'pot-size') {
            // Startdatum ist das Datum des Events
            startDate = event.date;
            
            // Finde alle Topfgrößen-Events
            const potEvents = this.events.filter(e => e.type === 'pot-size');
            const currentPotIndex = potEvents.findIndex(e => e.date.getTime() === event.date.getTime());
            
            // Enddatum ist das Datum des nächsten Topfgrößen-Events oder heute
            if (currentPotIndex >= 0 && currentPotIndex < potEvents.length - 1) {
                endDate = potEvents[currentPotIndex + 1].date;
            }
        }
        
        // Füge einen Tag zum Enddatum hinzu, um den gesamten Zeitraum zu zeigen
        endDate = new Date(endDate.getTime() + 24 * 60 * 60 * 1000);
        
        // Aktualisiere den Graphen
        this._updateGraph(startDate, endDate);
    }
    
    // Methode zum Aktualisieren des Graphen
    private _updateGraph(startDate: Date, endDate: Date): void {
        // Finde den Graphen im DOM
        const graphElement = this.parentNode?.querySelector('flower-graph') as HTMLElement & { _dateRange: Date[]; _picker?: { setDate: (dates: Date[], triggerChange: boolean) => void }; updateGraphData: (redraw: boolean) => void };
        
        if (graphElement) {
            // Setze den Datumsbereich
            graphElement._dateRange = [startDate, endDate];
            
            // Aktualisiere den Datepicker
            if (graphElement._picker) {
                graphElement._picker.setDate(graphElement._dateRange, false);
            }
            
            // Aktualisiere den Graphen
            graphElement.updateGraphData(true);
        }
    }

    render(): HTMLTemplateResult {
        if (!this.entityId || !this.hass || this.events.length === 0) return html``;

        // Holen wir die Entity IDs aus der geladenen Pflanzen-Info
        let phaseEntity;
        let floweringDurationEntity;
        
        if (this._plantInfo?.helpers) {
            const helpers = this._plantInfo.helpers;
            const phaseEntityId = helpers.growth_phase?.entity_id;
            const floweringDurationEntityId = helpers.flowering_duration?.entity_id;
            
            phaseEntity = phaseEntityId ? this.hass.states[phaseEntityId] : null;
            floweringDurationEntity = floweringDurationEntityId ? this.hass.states[floweringDurationEntityId] : null;
        } else {
            return html``;
        }
        
        if (!phaseEntity) return html``;

        // Bestimme Start- und Enddatum
        const startDate = this.events[0].date;
        const currentPhase = phaseEntity.state;
        const today = new Date();
        
        // Berechne das erwartete Erntedatum
        let endDate: Date;
        if (currentPhase === 'removed') {
            endDate = new Date(phaseEntity.attributes.removed_date);
        } else if (currentPhase === 'harvested') {
            endDate = new Date(phaseEntity.attributes.harvested_date);
        } else {
            if (currentPhase === 'flowering' && floweringDurationEntity?.state) {
                const floweringStart = new Date(phaseEntity.attributes.flowering_start);
                endDate = new Date(floweringStart);
                endDate.setDate(endDate.getDate() + parseInt(floweringDurationEntity.state));
            } else if (floweringDurationEntity?.state) {
                endDate = new Date(today);
                endDate.setDate(endDate.getDate() + parseInt(floweringDurationEntity.state));
            } else {
                endDate = today;
            }
        }

        // Berechne die Timeline-Breite (immer 90% Vergangenheit, 10% Zukunft)
        const timeFromStartToNow = today.getTime() - startDate.getTime();
        const totalTime = timeFromStartToNow / 0.9;
        const visualEndDate = new Date(startDate.getTime() + totalTime);

        // Erstelle eine vollständige Liste aller Events einschließlich Harvest
        const allEvents = [...this.events];
        // Füge das Harvest-Event am Ende der Timeline hinzu
        const harvestEvent = {
            date: visualEndDate,
            displayDate: endDate,
            type: 'harvest',
            label: TranslationUtils.translateHistory(this.hass, 'harvest'),
            description: `${TranslationUtils.translateHistory(this.hass, 'expected_harvest_date')}: ${endDate.toLocaleDateString()}`
        };
        allEvents.push(harvestEvent);

        // Berechne Versatz für gleichzeitige Events
        const labelPositions = allEvents.map((event, index) => {
            const position = Math.min(((event.date.getTime() - startDate.getTime()) / (visualEndDate.getTime() - startDate.getTime())) * 100, 100);
            return { index, position, type: 'label', offset: 0 };
        });

        // Berechne Offsets nur für Labels
        this.labelOffsets = this.checkOverlap(labelPositions);
        // Marker verwenden die gleichen Offsets spiegelverkehrt
        this.markerOffsets = Object.fromEntries(
            Object.entries(this.labelOffsets).map(([key, value]) => [key, value * -1])
        );

        // Gruppiere Events nach Typ
        const phaseEvents = this.events.filter(e => e.type.startsWith(EVENT_TYPES.PHASE));
        const areaEvents = this.events.filter(e => e.type.startsWith(EVENT_TYPES.AREA));
        const potEvents = this.events.filter(e => e.type === EVENT_TYPES.POT);
        const treatmentEvents = this.events.filter(e => e.type === EVENT_TYPES.TREATMENT);
        const imageEvents = this.events.filter(e => e.type === EVENT_TYPES.IMAGE);

        // Berechne Offsets für jede Gruppe
        const phaseOffsets = this.checkCollisions(phaseEvents, startDate, visualEndDate);
        const areaOffsets = this.checkCollisions(areaEvents, startDate, visualEndDate);
        const potOffsets = this.checkCollisions(potEvents, startDate, visualEndDate);
        const treatmentOffsets = this.checkCollisions(treatmentEvents, startDate, visualEndDate);
        const imageOffsets = this.checkCollisions(imageEvents, startDate, visualEndDate);



        // Berechne die Positionen basierend auf aktiven Gruppen
        const styles = new Map();

        if (phaseEvents.length > 0) {
            styles.set('phase', { top: 0, height: 10 });
        }
        if (areaEvents.length > 0) {
            styles.set('area', { top: 10, height: 10 });
        }
        if (potEvents.length > 0) {
            styles.set('pot', { top: 20, height: 10 });
        }
        if (this.stateHistory.length > 0) {
            styles.set('status', { top: 30, height: 4 }); // Status-Indikatoren bleiben unten
        }
        if (treatmentEvents.length > 0) {
            styles.set('treatment', { top: 0, height: 34 }); // Treatment geht über die volle Höhe
        }
        if (imageEvents.length > 0) {
            styles.set('image', { top: 0, height: 34 }); // Bilder gehen auch über die volle Höhe
        }

        return html`
            <div class="timeline-container">
                <div class="timeline">
                    <div class="timeline-labels">
                        ${this.renderTimelineItems(allEvents, startDate, visualEndDate, true)}
                    </div>
                    <div class="timeline-events">
                        <div class="current-time-line" style="left: 90%;"></div>
                        ${this.renderEventGroup(phaseEvents, 'phase', startDate, visualEndDate, phaseOffsets, styles)}
                        ${this.renderEventGroup(areaEvents, 'area', startDate, visualEndDate, areaOffsets, styles)}
                        ${this.renderEventGroup(potEvents, 'pot', startDate, visualEndDate, potOffsets, styles)}
                        ${this.renderStatusIndicators(this.stateHistory, startDate, visualEndDate, styles)}
                        ${this.renderEventGroup(treatmentEvents, 'treatment', startDate, visualEndDate, treatmentOffsets, styles)}
                        ${this.renderEventGroup(imageEvents, 'image', startDate, visualEndDate, imageOffsets, styles)}
                    </div>
                    <div class="timeline-markers">
                        ${this.renderTimelineItems(allEvents, startDate, visualEndDate, false)}
                    </div>
                </div>
            </div>
            ${this._showGallery ? html`
                <flower-gallery
                    .hass=${this.hass}
                    .entityId=${this.entityId}
                    .images=${this._imageUrls}
                    .initialImageIndex=${this._hoveredImageIndex}
                    .onClose=${() => {
                        this._showGallery = false;
                        this._hoveredImageIndex = null;
                    }}
                ></flower-gallery>
            ` : ''}
        `;
    }
} 