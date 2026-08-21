import {
  LitElement,
  html,
  css,
  nothing,
  CSSResult,
  TemplateResult
} from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import { styleMap } from 'lit/directives/style-map.js';
import { positionStyles } from '../styles/area-styles';
import './plant-create-dialog';
import './plant-flyout-menu';
import './brokkoli-area-legend'; // Importiere die neue Legende-Komponente
import { LegendSettings } from './brokkoli-area-legend'; // Importiere die Settings-Schnittstelle

import { PlantEntityUtils } from '../utils/plant-entity-utils';

interface SensorData {
  icon?: string;
  max?: number;
  min?: number;
  current?: number;
  sensor?: string;
  unit_of_measurement?: string;
}

interface PlantInfo {
  result?: {
    [key: string]: SensorData;
  } & {
    helpers?: {
      health?: {
        entity_id?: string;
      };
      cycle?: {
        entity_id?: string;
        current?: string;
      };
    };
  };
}

interface Position {
  x: number;
  y: number;
}

interface CycleGroup {
  name: string;
  color: string;
  members: string[];
  positions: Position[];
}



@customElement('brokkoli-area')
export class BrokkoliArea extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @property({ attribute: false }) entities: string[] = [];
  @property() areaId?: string;
  @property({ attribute: false }) showRings: string[] = [];
  @property({ attribute: false }) showLabels: string[] = [];
  @property({ attribute: false }) heatmap?: string;
  @property({ attribute: false }) heatmapColor?: string;
  @property({ attribute: false }) heatmapSecondaryColor?: string;
  @property({ attribute: false }) heatmapOpacity?: number;
  @property({ attribute: false }) showLegend: boolean = true; // Neue Property für die Anzeige der Legende
  
  // Neue Eigenschaft, um zu verfolgen, ob die Einstellungen vom Benutzer überschrieben wurden
  @state() private _userSettings: {
    showRings?: string[];
    showLabels?: string[];
    heatmap?: string;
    heatmapColor?: string;
    heatmapSecondaryColor?: string;
    heatmapOpacity?: number;
    activeTab?: string;
  } = {};
  
  @state() private _positions: Record<string, Position> = {};
  @state() private _draggingMember: string | null = null;
  @state() private _hoveringMember: string | null = null;
  @state() private _dragOffset = { x: 0, y: 0 };
  @state() private _containerSize = { width: 0, height: 0 };
  @state() private _cellSize = 60; // Standardgröße für Zellen
  @state() private _targetPosition: Position | null = null;
  @state() private _isSnapping = false;
  @state() private _currentDragPosition: Position | null = null;
  @state() private _originalPosition: Position | null = null;
  @state() private _wasElementSelected = false; // Speichert, ob das gezogene Element beim Start bereits ausgewählt war
  
  @state() private _selectedMembers: Set<string> = new Set();
  @state() private _isMultiDragging = false;
  @state() private _originalPositions: Record<string, Position> = {};
  @state() private _targetPositions: Record<string, Position> = {};
  @state() private _isDraggingSelection = false;
  @state() private _showSelectionHint = false; // Neuer Status für den Hilfetext
  @state() private _justFinishedMultiDrag = false; // Neues Flag, um gerade beendetes Multi-Drag zu erkennen
  
  @state() private _cycleGroups: CycleGroup[] = [];

  @state() private _bounds = { minX: 0, minY: 0, maxX: 0, maxY: 0 };
  
  @state() private _showAddPlantIndicator: {x: number, y: number} | null = null;
  @state() private _showAddPlantDialog = false;
  @state() private _showPlantFlyout = false;
  @state() private _flyoutPosition = {x: 0, y: 0};
  @state() private _newPlantPosition = {x: 0, y: 0};
  
  @state() private _debugMode = false; // Debug-Modus deaktivieren
  
  @state() private _highlightCell: {x: number, y: number} | null = null;
  
  @state() private _plantInfoCache: Record<string, PlantInfo> = {};
  @state() private _plantRetryTimeouts: Record<string, number> = {}; // Timeouts für Pflanzen-Ladungen
  @state() private _plantLastLoaded: Record<string, number> = {}; // Zeitpunkt der letzten Ladung für jede Pflanze
  
  // Timer für die verzögerte Datenaktualisierung
  private _updateTimeout: number = 0;

  // ResizeObserver erkennt sowohl Resize als auch Visibility-Changes
  // (z.B. Tab-Switch). window-resize verfehlt letzteren Fall.
  private _resizeObserver?: ResizeObserver;

  // Bound event handlers to ensure proper reference
  private _boundHandleDrag = this._handleDrag.bind(this);
  private _boundEndDrag = this._endDrag.bind(this);
  
  // Wird aufgerufen, wenn die Komponente zum ersten Mal gerendert wird
  firstUpdated() {
    // Container-Größe ermitteln
    const rect = this.getBoundingClientRect();
    this._containerSize = { width: rect.width, height: rect.height };
    
    // Positionen für Entitäten laden
    this._loadPositions();
    
    // Größe der Zellen berechnen
    this._calculateCellSize();
    
    // Auf Größenänderungen reagieren — Window-Resize + ResizeObserver,
    // damit auch Visibility-Changes (Tab-Switch, kollabierte Sections)
    // einen recalc auslösen.
    window.addEventListener('resize', this._handleResize);
    this._resizeObserver = new ResizeObserver(() => this._handleResize());
    this._resizeObserver.observe(this);

    // Globalen Klick-Listener hinzufügen, um Auswahl zurückzusetzen, wenn außerhalb geklickt wird
    window.addEventListener('click', this._handleGlobalClick);
    
    // Event-Listener für neu erstellte Pflanzen hinzufügen
    this.addEventListener('plant-created', this._handlePlantCreated);

    this._userSettings = this._ladeEinstellungen();
  }

  // Die Legenden-Einstellungen (Ringe, Labels, Heatmap) sind eine Ansichtssache
  // des Betrachters, keine Konfiguration der Karte -- eine Lovelace-Karte kann
  // ihre eigene YAML ausserhalb des Dashboard-Editors ohnehin nicht schreiben.
  // Sie liegen deshalb pro Raum im localStorage des Browsers; die YAML bleibt
  // die Vorgabe, solange nichts gespeichert ist.
  private get _speicherSchluessel(): string {
    return `brokkoli-area:${this.areaId || 'default'}`;
  }

  private _ladeEinstellungen(): typeof this._userSettings {
    try {
      const roh = localStorage.getItem(this._speicherSchluessel);
      return roh ? JSON.parse(roh) : {};
    } catch {
      return {};
    }
  }
  
  // Wird aufgerufen, wenn sich Eigenschaften ändern
  updated(changedProps: Map<string, unknown>) {
    super.updated(changedProps);
    
    // Wenn sich hass oder entities geändert haben, lade die Positionen neu
    if (changedProps.has('hass') || changedProps.has('entities')) {
      this._loadPositions();
    }
    
    // Positioniere die Cycle-Gruppen-Rahmen nach dem Rendering
    this._updateCycleGroups();
    
    // Wenn sich die Entitäten geändert haben oder hass zum ersten Mal gesetzt wird
    if (changedProps.has('entities') || 
        (changedProps.has('hass') && !changedProps.get('hass'))) {
      // Starte die Ladung aller Pflanzendaten mit der neuen optimierten Methode
      this._loadAllPlantData();
    }
    
    // Dialog-Handling - nur wenn sich _showAddPlantDialog geändert hat
    if (changedProps.has('_showAddPlantDialog')) {
      this._handleDialogStateChange();
    }

    // Flyout-Handling, analog zum Dialog
    if (changedProps.has('_showPlantFlyout') || changedProps.has('_flyoutPosition')) {
      if (this._showPlantFlyout && this.hass) {
        this._createFlyout();
      } else {
        this._removeFlyout();
      }
    }
  }
  
  // Behandelt Größenänderungen des Containers
  private _handleResize = () => {
    const rect = this.getBoundingClientRect();
    this._containerSize = { width: rect.width, height: rect.height };
    
    // Größe der Zellen neu berechnen
    this._calculateCellSize();
    
    // Erzwinge ein Update der Komponente
    this.requestUpdate();
  };
  
  // Wird aufgerufen, wenn die Komponente entfernt wird
  disconnectedCallback() {
    super.disconnectedCallback();
    // Am body haengende Overlays mitnehmen, sonst bleiben sie stehen
    this._removeFlyout();
    this._removeDialog();
    
    // Event-Listener entfernen
    window.removeEventListener('resize', this._handleResize);
    window.removeEventListener('click', this._handleGlobalClick);
    this._resizeObserver?.disconnect();
    this._resizeObserver = undefined;
    
    // Event-Listener für neu erstellte Pflanzen entfernen
    this.removeEventListener('plant-created', this._handlePlantCreated);
    
    // Lösche alle aktiven Timeouts
    if (this._updateTimeout) {
      clearTimeout(this._updateTimeout);
      this._updateTimeout = 0;
    }
  }
  
  // Findet den Location-Text-Helper einer Plant über das gemeinsame
  // config_entry_id. Vermeidet das Erraten der Helper-Entity-ID aus
  // dem Plant-Slug — das ist fehleranfällig bei Strain-Namen mit
  // Ziffern (z.B. "AK-47" → "ak_47").
  //
  // Gematcht wird über translation_key, nicht über das entity_id-Suffix:
  // dessen Wortlaut stammt aus der UI-Sprache beim Anlegen, auf einer
  // deutschen Instanz heißt der Helper "..._standort". Ein Suffix-Match
  // findet ihn dort nie, die Karte hält jede Pflanze für positionslos und
  // verteilt sie neu — eine verschobene Pflanze springt dann zurück.
  private _findLocationEntity(plantEntityId: string) {
    if (!this.hass) return null;
    const plantEntity = this.hass.entities?.[plantEntityId];
    const deviceId = plantEntity?.device_id;
    if (!deviceId) return null;
    for (const e of Object.values(this.hass.entities ?? {})) {
      if (
        e.device_id === deviceId
        && e.entity_id.startsWith('text.')
        && (e as { translation_key?: string }).translation_key === 'location'
      ) {
        return this.hass.states[e.entity_id] ?? null;
      }
    }
    return null;
  }

  // Lädt die Positionen aus den Entitäten
  private _loadPositions() {
    if (!this.hass) return;
    
    // Liste der bereits belegten Positionen
    const occupiedPositions = new Set<string>();
    // Liste der Pflanzen ohne definierte Position
    const undefinedPositionEntities: string[] = [];
    
    this.entities.forEach(entityId => {
      // Plant-Entity und Location-Helper teilen sich die config_entry_id;
      // der Helper hat zudem unique_id `{entry_id}-location`. Damit lookup'en
      // wir den richtigen Helper ohne Bastelei am Entity-Slug.
      const locationEntity = this._findLocationEntity(entityId);

      let hasDefinedPosition = false;
      
      if (locationEntity && locationEntity.state && locationEntity.state !== 'unknown') {
        try {
          // Versuche, die Position aus dem JSON-String zu extrahieren
          const locationData = JSON.parse(locationEntity.state);
          if (locationData && typeof locationData.x === 'number' && typeof locationData.y === 'number') {
            const position = {
              x: locationData.x,
              y: locationData.y
            };
            
            this._positions[entityId] = position;
            
            // Position als belegt markieren
            occupiedPositions.add(`${position.x},${position.y}`);
            
            // Diese Pflanze hat eine definierte Position
            hasDefinedPosition = true;
            
            return; // Position gefunden, weiter zum nächsten
          }
        } catch {
          // Fehler beim Parsen des JSON
        }
      }
      
      // Wenn kein Location-Helper gefunden oder keine Position vorhanden ist
      this._positions[entityId] = { x: 0, y: 0 };
      
      // Nur Pflanzen ohne definierte Position zur Liste hinzufügen
      if (!hasDefinedPosition) {
        undefinedPositionEntities.push(entityId);
      }
    });
    
    // Nur Pflanzen ohne definierte Position verteilen
    if (undefinedPositionEntities.length > 0) {
      this._distributeUndefinedPositionEntities(undefinedPositionEntities, occupiedPositions);
    }
    
    // Identifiziere Cycle-Gruppen
    this._identifyCycleGroups();
    
    // Berechne die Grenzen des belegten Bereichs
    this._calculateBounds();
    
    // Normalisiere die Positionen, sodass die am weitesten links oben 0,0 ist
    this._normalizePositions();
  }

  // Verteilt Pflanzen ohne definierte Position spiralförmig um den Ursprung
  private _distributeUndefinedPositionEntities(entities: string[], occupiedPositions: Set<string>) {
    if (entities.length === 0) return;
    
    // Spiralförmig von (0,0) nach außen gehen
    const directions = [
      [1, 0],   // rechts
      [0, 1],   // unten
      [-1, 0],  // links
      [0, -1]   // oben
    ];
    
    let x = 0;
    let y = 0;
    let dirIndex = 0;
    let sideLength = 1;
    let sideStep = 0;
    let turnCount = 0;
    
    entities.forEach(entityId => {
      // Finde die nächste freie Position
      let positionFound = false;
      
      while (!positionFound) {
        // Aktuelle Position prüfen
        const posKey = `${x},${y}`;
        
        if (!occupiedPositions.has(posKey)) {
          // Freie Position gefunden
          this._positions[entityId] = { x, y };
          occupiedPositions.add(posKey);
          positionFound = true;
        } else {
          // Zur nächsten Position in der Spirale bewegen
          x += directions[dirIndex][0];
          y += directions[dirIndex][1];
          sideStep++;
          
          // Prüfen, ob wir die Richtung wechseln müssen
          if (sideStep === sideLength) {
            dirIndex = (dirIndex + 1) % 4;
            sideStep = 0;
            turnCount++;
            
            // Nach zwei Wendungen erhöhen wir die Seitenlänge
            if (turnCount === 2) {
              sideLength++;
              turnCount = 0;
            }
          }
        }
      }
    });
  }

  // Identifiziert Cycle-Gruppen von Pflanzen
  private _identifyCycleGroups() {
    if (!this.hass || !this.entities || this.entities.length === 0) {
      this._cycleGroups = [];
      return;
    }

    const cycleGroups: Record<string, string[]> = {};
    
    this.entities.forEach(entityId => {
      const entityObj = { entity_id: entityId };
      const cycleName = this._getEntityCycleName(entityObj);
      
      if (cycleName) {
        if (!cycleGroups[cycleName]) cycleGroups[cycleName] = [];
        cycleGroups[cycleName].push(entityId);
      }
    });
    
    this._cycleGroups = Object.entries(cycleGroups)
      .filter(([, members]) => members.length >= 2)
      .map(([name, members]) => ({
        name,
        color: this._getColorForCycle(name),
        members,
        positions: members.map(id => this._positions[id]).filter(Boolean)
      }));
  }
  
  // Berechnet die Grenzen des belegten Bereichs
  private _calculateBounds() {
    // Wenn keine Positionen vorhanden sind, setze Standardwerte
    if (Object.keys(this._positions).length === 0) {
      this._bounds = { minX: 0, minY: 0, maxX: 0, maxY: 0 };
      return false;
    }
    
    // Min/Max-Werte initialisieren
    let minX = Number.MAX_SAFE_INTEGER, minY = Number.MAX_SAFE_INTEGER;
    let maxX = Number.MIN_SAFE_INTEGER, maxY = Number.MIN_SAFE_INTEGER;
    
    // Alle Positionen durchlaufen
    [...Object.values(this._positions), 
     ...(this._targetPosition ? [this._targetPosition] : []),
     ...Object.values(this._isMultiDragging ? this._targetPositions : {})
    ].forEach(pos => {
      minX = Math.min(minX, pos.x);
      minY = Math.min(minY, pos.y);
      maxX = Math.max(maxX, pos.x);
      maxY = Math.max(maxY, pos.y);
    });
    
    // Vergleich mit alten Bounds
    const oldBounds = { ...this._bounds };
    this._bounds = { minX, minY, maxX, maxY };
    
    // Wenn geändert, Zellgröße neu berechnen
    const boundsChanged = JSON.stringify(oldBounds) !== JSON.stringify(this._bounds);
    if (boundsChanged) this._calculateCellSize();
    
    return boundsChanged;
  }
  
  // Berechnet die Größe der Zellen
  private _calculateCellSize() {
    const { minX, minY, maxX, maxY } = this._bounds;
    const { width, height } = this._containerSize;
    
    // +2 für Rand, +0.5 für Labels
    const cols = maxX - minX + 2;
    const rows = maxY - minY + 2 + 0.5;
    
    this._cellSize = Math.min(width / cols, height / rows);
  }
  
  // Konvertiert Grid-Koordinaten in Pixel-Koordinaten
  private _gridToPixel(x: number, y: number): { x: number, y: number } {
    const { minX, minY } = this._bounds;
    const { offsetX, offsetY } = this._getGridOffsets();
    
    return {
      x: offsetX + (x - minX) * this._cellSize,
      y: offsetY + (y - minY) * this._cellSize
    };
  }
  
  // Konvertiert Pixel-Koordinaten in Grid-Koordinaten
  private _pixelToGrid(pixelX: number, pixelY: number): { x: number, y: number } {
    const { minX, minY } = this._bounds;
    const { offsetX, offsetY } = this._getGridOffsets();
    
    return { 
      x: Math.floor((pixelX - offsetX) / this._cellSize) + minX,
      y: Math.floor((pixelY - offsetY) / this._cellSize) + minY
    };
  }
  
  // Hilfsfunktion für die Offset-Berechnung
  private _getGridOffsets() {
    const { minX, minY, maxX, maxY } = this._bounds;
    const visibleCols = maxX - minX + 2;
    const visibleRows = maxY - minY + 2;
    
    const visibleWidthPx = visibleCols * this._cellSize;
    const visibleHeightPx = visibleRows * this._cellSize;
    
    return {
      offsetX: (this._containerSize.width - visibleWidthPx) / 2 + this._cellSize / 2,
      offsetY: (this._containerSize.height - visibleHeightPx) / 2 + this._cellSize / 2
    };
  }
  
  // Behandelt globale Klicks, um das Plus-Symbol zurückzusetzen
  private _handleGlobalClick = (e: MouseEvent) => {
    // Prüfe nur außerhalb UND wenn keine Auswahl gezogen wird
    const isOutside = !e.composedPath().some(el => el === this);
    if (isOutside && !this._isDraggingSelection && this._showAddPlantIndicator) {
      this._showAddPlantIndicator = null;
      this.requestUpdate();
    }
  };
  
  // Togglet die Auswahl eines Members
  
  // Rendert Member mit ihren zugehörigen Labels
  private _renderMembersWithLabels() {
    if (!this.hass) return [];
    
    // Sortiere nach Position (Änderung: rechts zuerst, dann oben zuerst)
    const sortedEntities = [...this.entities].sort((a, b) => {
      const posA = this._positions[a] || { x: 0, y: 0 };
      const posB = this._positions[b] || { x: 0, y: 0 };
      return posA.y !== posB.y ? posA.y - posB.y : posB.x - posA.x;
    });
    
    // Z-Indizes zuweisen - umgekehrt, sodass Elemente früher in der Liste (rechts/oben) höhere Z-Indizes bekommen
    const baseZIndex = 1; 
    const zIndexMap = new Map();
    const totalCount = sortedEntities.length;
    // Höhere Z-Indizes für Elemente am Anfang der Liste (rechts/oben)
    sortedEntities.forEach((id, i) => zIndexMap.set(id, baseZIndex + (totalCount - 1 - i)));
    
    // Für Drag-Operationen werden wir ein Offset verwenden, das größer als die Anzahl der Pflanzen ist
    
    return sortedEntities.map(entityId => {
      const entity = this.hass!.states[entityId];
      if (!entity) return html``;
      
      const position = this._positions[entityId] || { x: 0, y: 0 };
      let pixelPos;
      
      // Position ermitteln basierend auf Drag-Status
      if (this._isMultiDragging && this._selectedMembers.has(entityId) && this._currentDragPosition) {
        if (entityId === this._draggingMember) {
          pixelPos = { ...this._currentDragPosition };
        } else {
          const dragOrigPos = this._originalPositions[this._draggingMember!];
          const curOrigPos = this._originalPositions[entityId];
          const dx = curOrigPos.x - dragOrigPos.x;
          const dy = curOrigPos.y - dragOrigPos.y;
          pixelPos = {
            x: this._currentDragPosition.x + (dx * this._cellSize),
            y: this._currentDragPosition.y + (dy * this._cellSize)
          };
        }
      } else if (this._draggingMember === entityId && this._currentDragPosition) {
        pixelPos = { ...this._currentDragPosition };
      } else {
        pixelPos = this._gridToPixel(position.x, position.y);
        pixelPos.x += this._cellSize / 2;
        pixelPos.y += this._cellSize / 2;
      }
      
      // Element-Zustände
      const name = entity.attributes.friendly_name || entityId.split('.')[1];
      const image = entity.attributes.entity_picture || '';
      const isDragging = this._draggingMember === entityId || 
                        (this._isMultiDragging && this._selectedMembers.has(entityId));
      const isSnapping = this._isSnapping && 
                        (this._draggingMember === entityId || this._selectedMembers.has(entityId));
      const isHovering = this._hoveringMember === entityId;
      const isSelected = this._selectedMembers.has(entityId);
      
      // Z-Index anpassen - relativ und basierend auf der Anzahl der Pflanzen
      let zIndex = zIndexMap.get(entityId);
      // Kleinere Erhöhungen reichen jetzt aus, da keine CSS-Überschreibungen mehr stören
      if (isDragging) zIndex += 3; // Ziehen erhöht Z-Index am stärksten
      else if (isHovering) zIndex += 2; // Hover erhöht Z-Index mittelstark
      else if (isSelected) zIndex += 1; // Selektion erhöht Z-Index leicht
      
      // Heatmap-Styling hinzufügen, wenn ein Heatmap-Sensor konfiguriert ist
      let heatmapOverlay = null;
      // Verwende den aktiven Heatmap-Sensor statt this.heatmap
      const activeHeatmap = this._getHeatmapSensor();
      
      if (activeHeatmap && entityId.startsWith('plant.') && this._plantInfoCache[entityId]) {
        const plantInfo = this._plantInfoCache[entityId];
        if (plantInfo && plantInfo.result) {
          // Suche nach dem konfigurierten Sensor in den Pflanzeninformationen
          const sensorData = plantInfo.result[activeHeatmap];
          const healthSensor = plantInfo.result.helpers?.health?.entity_id && this.hass?.states[plantInfo.result.helpers.health.entity_id];
          
          if (activeHeatmap === 'health' && healthSensor) {
            // Spezialfall für den Health-Sensor
            const healthValue = Number(healthSensor.state);
            const healthMax = 5; // Annahme: Health-Werte sind von 0-5
            // Normalisierter Wert für die Farbmischung (0-100%)
            const colorPercent = Math.min(100, Math.max(0, Math.round(healthValue / healthMax * 100)));
            
            // Bei Health-Sensor: grün für gute Werte
            // Verwende die aktive Heatmap-Farbe statt this.heatmapColor
            const baseColor = this._getHeatmapColor() || `rgb(148,202,83)`;
            const secondaryColor = this._getHeatmapSecondaryColor() || 'white';
            const opacity = this._getHeatmapOpacity();
            
            heatmapOverlay = html`
              <div class="heatmap-overlay" style=${styleMap({
                backgroundColor: `color-mix(in srgb, ${baseColor} ${colorPercent}%, ${secondaryColor})`,
                opacity: opacity
              })}></div>
            `;
          } else if (sensorData) {
            // Normale Sensoren (einschließlich Nullwerte)
            // Wir prüfen jetzt explizit, ob sensorData existiert, nicht ob current definiert ist
            const currentValue = Number(sensorData.current || 0);
            const minValue = Number(sensorData.min || 0);
            const maxValue = Number(sensorData.max || 100);
            
            // Normalisierter Wert für die Farbmischung (0-100%)
            const normalizedValue = Math.min(1, Math.max(0, (currentValue - minValue) / (maxValue - minValue)));
            const colorPercent = Math.round(normalizedValue * 100);
            
            // Verwende die aktive Heatmap-Farbe statt this.heatmapColor
            const baseColor = this._getHeatmapColor() || `var(--sensor-ring-${activeHeatmap}-color)`;
            const secondaryColor = this._getHeatmapSecondaryColor() || 'white';
            const opacity = this._getHeatmapOpacity();
            
            heatmapOverlay = html`
              <div class="heatmap-overlay" style=${styleMap({
                backgroundColor: `color-mix(in srgb, ${baseColor} ${colorPercent}%, ${secondaryColor})`,
                opacity: opacity
              })}></div>
            `;
          } else {
            // Fallback für nicht vorhandene Sensordaten: Zeige Overlay mit 0% der Hauptfarbe
            const secondaryColor = this._getHeatmapSecondaryColor() || 'white';
            const opacity = this._getHeatmapOpacity();
            
            heatmapOverlay = html`
              <div class="heatmap-overlay" style=${styleMap({
                backgroundColor: secondaryColor,
                opacity: opacity
              })}></div>
            `;
          }
        }
      }
      
      // Temperatur- und Feuchtigkeits-Ringe erstellen
      let sensorRings: TemplateResult | '' = '';

      if (entityId.startsWith('plant.')) {
        // API-Informationen aus dem PlantEntityUtils-Cache holen
        // Da wir in einer Render-Methode sind, können wir kein await verwenden
        // Stattdessen prüfen wir, ob die Daten bereits im lokalen Cache sind
        if (this._plantInfoCache[entityId] && this._plantInfoCache[entityId].result) {
          // Verwende die gecachten Daten für die Ringe
          sensorRings = this._renderPlantSensorRings(entityId);
        } else {
          // Wenn noch keine Daten geladen wurden, zeige deaktivierte Ringe an
          sensorRings = this._renderDisabledRings();
          
          // Starte den Ladevorgang im Hintergrund, wenn nicht bereits gestartet
          if (this.hass) {
            // Da wir im Render-Prozess sind, lösen wir die Anfrage einfach aus und lassen den Cache-Mechanismus arbeiten
            PlantEntityUtils.getPlantInfo(this.hass, entityId)
              .then(result => {
                if (result) {
                  // Cache das Ergebnis im lokalen Cache
                  this._plantInfoCache[entityId] = { result: result as PlantInfo['result'] };
                  this.requestUpdate();
                }
              });
          }
        }
      }
      
      // Rendert Sensorlabels für eine Pflanze basierend auf den plant/get_info Daten
      const sensorLabels = this._renderSensorLabels(entityId);

      // Stammdaten-Badge: Strain und/oder Breeder, je nach Auswahl in der
      // Legende. Beides aktiv ergibt "Strain - Breeder" in einer Zeile, nur
      // eines davon steht ohne Trennstrich -- keine zweite Zeile.
      const plantAttrs = this.hass?.states[entityId]?.attributes ?? {};
      const activeLabelIds = this._getActiveLabels();
      const strainParts: string[] = [];
      if (activeLabelIds.includes('strain') && plantAttrs.strain) {
        strainParts.push(String(plantAttrs.strain));
      }
      if (activeLabelIds.includes('breeder') && plantAttrs.breeder) {
        strainParts.push(String(plantAttrs.breeder));
      }
      const strainText = strainParts.join(' - ');
      
      return html`
        <div 
          class="member-wrapper ${isDragging ? 'dragging' : ''} ${isHovering ? 'hovering' : ''} ${isSelected ? 'selected' : ''}"
          style=${styleMap({
            left: `${pixelPos.x}px`, top: `${pixelPos.y}px`, 
            '--cell-size': `${this._cellSize}px`, '--z-index': `${zIndex}`, 'z-index': `${zIndex}`
          })}
          data-entity-id="${entityId}"
        >
          <div
            class="member ${isDragging ? 'dragging' : ''} ${isSnapping ? 'snapping' : ''} ${isSelected ? 'selected' : ''}"
            @mousedown=${(e: MouseEvent) => this._startDrag(e, entityId)}
            @touchstart=${(e: TouchEvent) => this._handleTouchStart(e, entityId)}
            @click=${(e: MouseEvent) => this._handleClick(e, entityId)}
            @mouseover=${() => { this._hoveringMember = entityId; }}
            @mouseleave=${() => { this._hoveringMember = null; }}
          >
            <div class="member-image" style=${styleMap({
              backgroundImage: image ? `url(${image})` : 'none'
            })}>
              ${heatmapOverlay}
              ${sensorRings}
              ${!image ? html`<ha-icon icon="mdi:flower"></ha-icon>` : ''}
            </div>
          </div>
          <div class="entity-name ${strainText ? 'shifted' : ''} ${isDragging ? 'dragging' : ''} ${isHovering ? 'hovering' : ''} ${isSelected ? 'selected' : ''}">
            ${name}
          </div>
          ${strainText ? html`
            <div class="entity-strain ${isDragging ? 'dragging' : ''} ${isHovering ? 'hovering' : ''} ${isSelected ? 'selected' : ''}">
              ${strainText}
            </div>
          ` : ''}
          ${sensorLabels}
        </div>
      `;
    });
  }
  
  // Rendert Sensorringe für eine Pflanze basierend auf den plant/get_info Daten
  private _renderPlantSensorRings(entityId: string): TemplateResult {
    const plantInfo = this._plantInfoCache[entityId];
    
    // Verwende die aktiven Ringe statt this.showRings
    const activeRings = this._getActiveRings();
    
    // Wenn keine Ringe konfiguriert sind, zeige gar nichts
    if (activeRings.length === 0) {
      return html``;
    }
    
    if (!plantInfo || !plantInfo.result) {
      return this._renderDisabledRings();
    }
    
    const result = plantInfo.result;
    
    // Prüfe Health-Sensor aus den helpers
    let healthSensor = null;
    if (this.hass && result.helpers?.health?.entity_id) {
      // Health-Sensor aus der Helper-Struktur abrufen
      const healthEntityId = result.helpers.health.entity_id;
      if (this.hass.states[healthEntityId]) {
        healthSensor = this.hass.states[healthEntityId];
      }
    }
    
    // Filtere verfügbare Sensoren basierend auf showRings
    const availableSensors = activeRings.filter(sensorType => {
      // Spezielle Behandlung für Health
      if (sensorType === 'health') {
        return healthSensor !== null;
      }
      // Normale Sensoren - auch Nullwerte akzeptieren
      return result[sensorType] && (typeof result[sensorType].current !== 'undefined');
    });
    
    // Wenn keine Sensoren verfügbar sind, zeige deaktivierte Ringe
    if (availableSensors.length === 0) {
      return this._renderDisabledRings();
    }
    
    // Container für die Ringe
    return html`
      <div class="sensor-rings">
        ${availableSensors.map((sensorType, index) => {
          // Berechne Position: Ringe von außen nach innen anordnen
          const position = index;
          const totalSensors = availableSensors.length;
          
          // Spezielle Behandlung für Health-Ring
          if (sensorType === 'health' && healthSensor) {
            // Bereite Health-Daten im gleichen Format wie andere Sensoren vor
            const healthData = {
              current: Number(healthSensor.state),
              min: 0,
              max: 5,
              icon: "mdi:heart-pulse",
              sensor: healthSensor.entity_id,
              unit_of_measurement: ""
            };
            
            return this._renderSensorRing(healthData, position, totalSensors, sensorType);
          }
          
          // Normale Sensorringe
          return this._renderSensorRing(result[sensorType], position, totalSensors, sensorType);
        })}
      </div>
    `;
  }
  
  // Rendert einen einzelnen Sensoring basierend auf den Daten
  private _renderSensorRing(sensorData: SensorData, position: number, totalRings: number, sensorType: string): TemplateResult {
    if (!sensorData || typeof sensorData.current === 'undefined') {
      return this._renderDisabledRing(position);
    }
    
    // Extrahiere die Werte aus den Sensordaten
    const current = Number(sensorData.current);
    const min = Number(sensorData.min);
    const max = Number(sensorData.max);
    
    // Bestimme den Status des Rings
    const isValueNaN = isNaN(current);
    const isZero = current === 0;
    const isExactlyMin = current === min;
    const isBelowMin = current < min && !isZero; 
    const isAboveMax = current > max;
    
    // Berechne Prozentsatz und Farbe
    let percent = 0;
    if (isValueNaN) {
      // Für NaN-Werte, zeige leeren Ring
      percent = 0;
    } else if (sensorType === 'health' && isZero) {
      // Spezialbehandlung für Health-Sensor bei 0: 5% des Rings anzeigen
      percent = 0.05;
    } else if (isZero) {
      // Für Werte von 0, zeige 10% des Rings an
      percent = 0.1;
    } else if (isBelowMin) {
      // Für Werte unter min, zeige 10% des Rings an
      percent = 0.1;
    } else if (isExactlyMin) {
      // Für Werte genau auf min, zeige 2% des Rings an
      percent = 0.02;
    } else if (isAboveMax) {
      // Für Werte über max, zeige vollen Ring an
      percent = 1.0;
    } else {
      // Wert ist im normalen Bereich, berechne prozentual
      percent = Math.max(0, Math.min(1, (current - min) / (max - min)));
    }
    
    // Strichbreite für alle Ringe
    const strokeWidth = 4;
    
    // Berechne Radius exakt - ohne Abstände
    // Abhängig von der Position (0 = äußerster Ring, 1 = zweiter Ring, usw.)
    // und der Gesamtzahl der Ringe
    // Math.max(0, …) verhindert SVG-Errors falls _cellSize transient 0 ist
    // (z.B. wenn Container noch keine messbare Höhe hat — getBoundingClientRect=0).
    const radius = Math.max(0, (this._cellSize / 2) - (strokeWidth / 2) - (position * strokeWidth));
    
    // Berechne Kreisparameter
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = `${circumference * percent} ${circumference * (1 - percent)}`;
    
    // CSS-Klassen für Animation
    const animationClass = isZero || isBelowMin || isAboveMax || (sensorType === 'health' && current <= 1.5) ? 'sensor-pulsating' : '';
    
    // Spezielle Farbbehandlung für Health-Ring
    let customColor = null;
    let colorClass = '';
    
    if (sensorType === 'health') {
      // Für Health-Ring immer benutzerdefinierte Farbe verwenden
      if (current <= 0) {
        // Spezieller Zustand für Null - verwende einen klaren Rotton
        customColor = 'rgba(240,100,100,1)';
      } else if (current <= 0.5) {
        customColor = 'rgba(240,163,163,1)'; // Rot
      } else if (current <= 2.5) {
        const mix = (current - 0.5) / 2;
        customColor = `rgb(${240 + (15 * mix)}, ${163 + (51 * mix)}, ${163 - (163 * mix)})`;
      } else {
        const mix = (current - 2.5) / 2.5;
        customColor = `rgb(${255 - (212 * mix)}, ${214 - (20 * mix)}, ${0 + (83 * mix)})`;
      }
    } else {
      // Für andere Sensoren die Standard-Klasse verwenden
      colorClass = `sensor-ring-${sensorType}`;
    }
    
    // SVG-Template für den Ring
    return html`
      <svg class="sensor-ring" viewBox="0 0 ${this._cellSize} ${this._cellSize}">
        <circle 
          cx="${this._cellSize / 2}" 
          cy="${this._cellSize / 2}" 
          r="${radius}" 
          class="sensor-ring-bg"
        />
        <circle 
          class="sensor-ring-fg ${colorClass} ${animationClass}"
          cx="${this._cellSize / 2}" 
          cy="${this._cellSize / 2}" 
          r="${radius}" 
          stroke-dasharray="${strokeDasharray}"
          stroke-dashoffset="0"
          transform="rotate(-90, ${this._cellSize / 2}, ${this._cellSize / 2})"
          style="${customColor ? `stroke: ${customColor}` : ''}"
        />
      </svg>
    `;
  }
  
  // Rendert deaktivierte Ringe als Platzhalter
  private _renderDisabledRing(position: number): TemplateResult {
    // Strichbreite für alle Ringe
    const strokeWidth = 4;
    
    // Berechne Radius exakt - ohne Abstände
    // Math.max(0, …) verhindert SVG-Errors falls _cellSize transient 0 ist
    // (z.B. wenn Container noch keine messbare Höhe hat — getBoundingClientRect=0).
    const radius = Math.max(0, (this._cellSize / 2) - (strokeWidth / 2) - (position * strokeWidth));
    
    return html`
      <svg class="sensor-ring" viewBox="0 0 ${this._cellSize} ${this._cellSize}">
        <circle 
          cx="${this._cellSize / 2}" 
          cy="${this._cellSize / 2}" 
          r="${radius}" 
          class="sensor-ring-bg"
        />
        <circle 
          cx="${this._cellSize / 2}" 
          cy="${this._cellSize / 2}" 
          r="${radius}" 
          class="sensor-ring-disabled"
          transform="rotate(-90 ${this._cellSize / 2} ${this._cellSize / 2})"
        />
      </svg>
    `;
  }
  
  // Rendert mehrere deaktivierte Ringe
  private _renderDisabledRings(): TemplateResult {
    // Verwende die aktiven Ringe statt this.showRings
    const activeRings = this._getActiveRings();
    
    // Wenn keine Ringe konfiguriert sind, zeige gar nichts
    if (activeRings.length === 0) {
      return html``;
    }
    
    return html`
      <div class="sensor-rings">
        ${Array.from({ length: activeRings.length }, (_, i) => this._renderDisabledRing(i))}
      </div>
    `;
  }
  
  // Behandlung von Klicks auf Mitglieder (nur für Auswahl)
  private _handleClick(e: MouseEvent, entityId: string) {
    // Verarbeite den Klick nur, wenn kein Drag stattfindet
    if (this._draggingMember || this._isMultiDragging) return;
    
    e.stopPropagation();
    e.preventDefault();
    
    // Wenn gerade ein Multi-Drag beendet wurde, setze nur das Flag zurück
    if (this._justFinishedMultiDrag) {
      this._justFinishedMultiDrag = false;
      return;
    }
    
    // Nach einer kurzen Verzögerung den Auswahlstatus umschalten
    // Die Verzögerung verhindert ungewollte Auswahl bei Drag-Operationen
    setTimeout(() => {
      // Speichere den Zustand vor dem Toggle, um zu wissen ob eine Auswahl oder Abwahl erfolgte
      const wasSelected = this._selectedMembers.has(entityId);
      
      // Toggle selection
      if (wasSelected) {
        this._selectedMembers.delete(entityId);
      } else {
        this._selectedMembers.add(entityId);
      }

      // Bestimme die Entity für das Event
      let eventEntityId = entityId;
      
      // Bei Abwahl und wenn es noch andere ausgewählte Pflanzen gibt
      if (wasSelected && this._selectedMembers.size > 0) {
        // Nehme die letzte noch ausgewählte Pflanze
        eventEntityId = Array.from(this._selectedMembers)[this._selectedMembers.size - 1];
      }
      
      // Sende Event, auch wenn keine Pflanzen mehr ausgewählt sind
      const entitySelectedEvent = new CustomEvent('brokkoli-area-entity-selected', {
        bubbles: true,
        composed: true,
        detail: {
          entityId: this._selectedMembers.size > 0 ? eventEntityId : null,
          selectedEntities: Array.from(this._selectedMembers)
        }
      });
      this.dispatchEvent(entitySelectedEvent);
      
      this.requestUpdate();
    }, 10);
  }
  
  // Beginnt das Ziehen eines Elements
  private _startDrag(e: MouseEvent | TouchEvent, entityId: string) {
    if (this._showAddPlantDialog) {
      return; // Kein Ziehen, wenn der Dialog geöffnet ist
    }
    
    // Wenn gerade ein Multi-Drag beendet wurde, keine Drag-Aktion starten
    if (this._justFinishedMultiDrag) {
      return;
    }
    
    e.preventDefault();
    
    // Setze das Highlight-Quadrat zurück, wenn ein Drag beginnt
    this._highlightCell = null;
    this._showAddPlantIndicator = null;
    
    document.body.style.userSelect = 'none';
    
    // Speichern, ob das Element beim Start bereits ausgewählt war
    this._wasElementSelected = this._selectedMembers.has(entityId);
    
    // Position für das Ziehen speichern
    let clientX: number, clientY: number;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    const rect = this.getBoundingClientRect();
    
    if (this._selectedMembers.has(entityId) && this._selectedMembers.size > 1) {
      // Multi-Dragging aktivieren
      this._isMultiDragging = true;
      this._draggingMember = entityId; // Anker-Element speichern
      this._isDraggingSelection = true;
      
      // Originalposition aller ausgewählten Elemente speichern
      this._selectedMembers.forEach(memberId => {
        this._originalPositions[memberId] = { ...this._positions[memberId] };
      });
      
      // Position der ersten Pflanze berechnen
      const { x, y } = this._positions[entityId];
      const pixelPos = this._gridToPixel(x, y);
      
      // Berechne Offset zwischen Mauscursor und Mittelpunkt der Pflanze
      this._dragOffset = {
        x: clientX - rect.left - pixelPos.x - this._cellSize / 2,
        y: clientY - rect.top - pixelPos.y - this._cellSize / 2
      };
      
    } else {
      // Normales Dragging eines Elements
      this._draggingMember = entityId;
      this._originalPosition = { ...this._positions[entityId] };
      
      const { x, y } = this._positions[entityId];
      const pixelPos = this._gridToPixel(x, y);
      
      // Berechne Offset zwischen Mauscursor und Mittelpunkt der Pflanze
      this._dragOffset = {
        x: clientX - rect.left - pixelPos.x - this._cellSize / 2,
        y: clientY - rect.top - pixelPos.y - this._cellSize / 2
      };
    }
    
    // Entferne zuerst alle alten Listener, um sicherzustellen, dass keine doppelten existieren
    window.removeEventListener('mousemove', this._boundHandleDrag);
    window.removeEventListener('touchmove', this._boundHandleDrag);
    window.removeEventListener('mouseup', this._boundEndDrag);
    window.removeEventListener('touchend', this._boundEndDrag);
    
    // Füge die Listener neu hinzu
    window.addEventListener('mousemove', this._boundHandleDrag);
    window.addEventListener('touchmove', this._boundHandleDrag, { passive: false });
    window.addEventListener('mouseup', this._boundEndDrag);
    window.addEventListener('touchend', this._boundEndDrag);
  }
  
  // Behandelt das Ziehen eines Members oder einer Auswahl
  private _handleDrag(e: MouseEvent | TouchEvent) {
    if (!this._draggingMember && !this._isMultiDragging) return;
    
    e.preventDefault();
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const rect = this.getBoundingClientRect();
    const mouseX = clientX - rect.left;
    const mouseY = clientY - rect.top;
    
    this._currentDragPosition = { 
      x: mouseX - this._dragOffset.x, 
      y: mouseY - this._dragOffset.y 
    };
    
    const gridPos = this._pixelToGrid(mouseX, mouseY);
    
    if (this._isMultiDragging) {
      const firstMemberId = Array.from(this._selectedMembers)[0];
      const firstOriginalPos = this._originalPositions[firstMemberId];
      const deltaX = gridPos.x - firstOriginalPos.x;
      const deltaY = gridPos.y - firstOriginalPos.y;
      
      const oldTargetPositions = { ...this._targetPositions };
      this._targetPositions = {};
      let allPositionsValid = true;
      
      this._selectedMembers.forEach(memberId => {
        const originalPos = this._originalPositions[memberId];
        const newPos = {
          x: originalPos.x + deltaX,
          y: originalPos.y + deltaY
        };
        
        // Prüfe, ob die Position bereits belegt ist (von nicht ausgewählten Elementen)
        const isOccupied = Object.entries(this._positions).some(([member, pos]) => 
          !this._selectedMembers.has(member) && pos.x === newPos.x && pos.y === newPos.y
        );
        
        if (isOccupied) {
          allPositionsValid = false;
        }
        
        this._targetPositions[memberId] = newPos;
      });
      
      if (!allPositionsValid) {
        this._targetPositions = {};
      }
      
      // Wenn sich die Zielpositionen geändert haben, berechne die Grenzen neu
      if (JSON.stringify(oldTargetPositions) !== JSON.stringify(this._targetPositions)) {
        this._calculateBounds();
      }
    } else if (this._draggingMember) {
      // Prüfe, ob die Position durch ein anderes Element belegt ist
      const isOccupied = Object.entries(this._positions).some(([member, pos]) => 
        member !== this._draggingMember && pos.x === gridPos.x && pos.y === gridPos.y
      );
      
      // Original _targetPosition für die Logik setzen
      this._targetPosition = isOccupied ? null : { ...gridPos };
      
      // Separate highlightCell für den visuellen Rahmen - immer als neues Objekt
      this._highlightCell = isOccupied ? null : { x: gridPos.x, y: gridPos.y };
      
      // Eine neue Instanz des Objekts erzeugen, um Referenzprobleme zu vermeiden
      if (!isOccupied) {
        // Erzwinge einen Neubau des Objekts
        this._highlightCell = JSON.parse(JSON.stringify({ x: gridPos.x, y: gridPos.y }));
      }
      
      // Grenzen neu berechnen und Update erzwingen
      this._calculateBounds();
      this.requestUpdate();
    }
  }
  
  private _endDrag(e: MouseEvent | TouchEvent) {
    if (!this._draggingMember && !this._isMultiDragging) return;
    
    const wasMultiDragging = this._isMultiDragging;
    
    // Die gebundenen Event-Handler entfernen
    window.removeEventListener('mousemove', this._boundHandleDrag);
    window.removeEventListener('touchmove', this._boundHandleDrag);
    window.removeEventListener('mouseup', this._boundEndDrag);
    window.removeEventListener('touchend', this._boundEndDrag);
    
    document.body.style.userSelect = '';
    
    // Prüfe, ob wirklich eine Bewegung stattgefunden hat
    const hasMovement = this._currentDragPosition !== null && 
                        (this._draggingMember && this._originalPosition ? 
                          Math.abs(this._currentDragPosition.x - this._gridToPixel(this._originalPosition.x, this._originalPosition.y).x) > 5 ||
                          Math.abs(this._currentDragPosition.y - this._gridToPixel(this._originalPosition.x, this._originalPosition.y).y) > 5
                          : this._isMultiDragging);
    
    // Wenn keine Bewegung stattgefunden hat, behandle es als Klick
    if (!hasMovement) {
      // Bei keiner Bewegung lassen wir den _handleClick das Selektion-Toggle übernehmen
      // und tun hier nichts
    } else {
      // Es wurde tatsächlich gezogen
      if (this._isMultiDragging && this._draggingMember) {
        // Setze das Flag, dass wir gerade ein Multi-Drag beendet haben
        this._justFinishedMultiDrag = true;
        
        this._isSnapping = true;
        
        // Berechne die Zielposition des angeklickten Elements
        const clientX = 'touches' in e ? e.changedTouches[0].clientX : e.clientX;
        const clientY = 'touches' in e ? e.changedTouches[0].clientY : e.clientY;
        const rect = this.getBoundingClientRect();
        
        // Berechne die Grid-Position direkt aus der Mausposition
        const gridPos = this._pixelToGrid(clientX - rect.left, clientY - rect.top);
        
        // Berechne den Versatz zwischen Originalposition und Zielposition des Ankerelements
        const anchorOriginalPos = this._originalPositions[this._draggingMember];
        const deltaX = gridPos.x - anchorOriginalPos.x;
        const deltaY = gridPos.y - anchorOriginalPos.y;
        
        // Prüfe, ob alle Zielpositionen frei sind
        let allPositionsValid = true;
        
        this._selectedMembers.forEach(memberId => {
          const originalPos = this._originalPositions[memberId];
          const newPos = {
            x: originalPos.x + deltaX,
            y: originalPos.y + deltaY
          };
          
          // Prüfe ob Position belegt (von nicht ausgewählten Elementen)
          const isOccupied = Object.entries(this._positions).some(([member, pos]) => 
            !this._selectedMembers.has(member) && pos.x === newPos.x && pos.y === newPos.y
          );
          
          if (isOccupied) {
            allPositionsValid = false;
          }
        });
        
        if (allPositionsValid) {
          // Aktualisiere die Positionen aller ausgewählten Elemente
          this._selectedMembers.forEach(memberId => {
            const originalPos = this._originalPositions[memberId];
            this._positions[memberId] = {
              x: originalPos.x + deltaX,
              y: originalPos.y + deltaY
            };
          });
          
          // Aktualisiere und speichere
          this._calculateBounds();
          this._normalizePositions();
          
          Object.entries(this._positions).forEach(([entityId, position]) => {
            this._savePosition(entityId, position);
          });
          
          this._identifyCycleGroups();
          this._calculateCellSize();
        } else {
          // Zurück zu Originalpositionen
          Object.entries(this._originalPositions).forEach(([memberId, position]) => {
            this._positions[memberId] = { ...position };
          });
        }
        
        setTimeout(() => {
          this._isSnapping = false;
          this.requestUpdate();
        }, 300);
      } else if (this._targetPosition && this._draggingMember) {
        // Einzelnes Element wurde gezogen
        // Setze das Flag, dass wir gerade ein Drag beendet haben, 
        // um unerwünschte Toggle-Events zu verhindern
        this._justFinishedMultiDrag = true;
        
        this._isSnapping = true;
        this._positions[this._draggingMember] = { ...this._targetPosition };
        
        // Wenn das Element vor dem Ziehen nicht ausgewählt war,
        // entferne alle anderen Elemente aus der Auswahl
        if (!this._wasElementSelected && this._selectedMembers.size > 1) {
          const elementsToRemove = [...this._selectedMembers].filter(id => id !== this._draggingMember);
          elementsToRemove.forEach(id => this._selectedMembers.delete(id));
        }
        
        this._calculateBounds();
        this._normalizePositions();
        
        Object.entries(this._positions).forEach(([entityId, position]) => {
          this._savePosition(entityId, position);
        });
        
        this._identifyCycleGroups();
        this._calculateCellSize();
        
        setTimeout(() => {
          this._isSnapping = false;
          this.requestUpdate();
        }, 300);
      } else if (this._draggingMember) {
        // Zurück zur Originalposition
        this._isSnapping = true;
        this._positions[this._draggingMember] = { ...this._originalPosition };
        
        setTimeout(() => {
          this._isSnapping = false;
          this.requestUpdate();
        }, 300);
      }
    }
    
    // Zurücksetzen der Drag-Status
    this._draggingMember = null;
    this._isMultiDragging = false;
    this._originalPositions = {};
    this._targetPositions = {};
    this._isDraggingSelection = false;
    this._currentDragPosition = null;
    this._originalPosition = null;
    this._targetPosition = null;
    
    // Highlights explizit zurücksetzen
    this._highlightCell = null;
    
    this._wasElementSelected = false; // Zurücksetzen des Status-Flags
    
    this.requestUpdate();
    
    // Setze das Flag nach einer Weile zurück, für den Fall, dass kein Toggle auftritt
    if (wasMultiDragging || this._justFinishedMultiDrag) {
      setTimeout(() => {
        this._justFinishedMultiDrag = false;
      }, 100);
    }
    
    // Erzwinge eine vollständige Neuberechnung und Neupositionierung
    setTimeout(() => {
      // Bounds neu berechnen
      this._calculateBounds();
      
      // Container-Größe aktualisieren
      const rect = this.getBoundingClientRect();
      this._containerSize = { width: rect.width, height: rect.height };
      
      // Zellgröße neu berechnen
      this._calculateCellSize();
      
      // Erzwinge ein Update
      this.requestUpdate();
    }, 50);
  }
  
  // Normalisiert die Positionen
  private _normalizePositions() {
    if (Object.keys(this._positions).length === 0) return;
    
    let minX = Number.MAX_SAFE_INTEGER;
    let minY = Number.MAX_SAFE_INTEGER;
    
    Object.values(this._positions).forEach(pos => {
      minX = Math.min(minX, pos.x);
      minY = Math.min(minY, pos.y);
    });
    
    if (minX === 0 && minY === 0) return;
    
    Object.keys(this._positions).forEach(entityId => {
      this._positions[entityId] = {
        x: this._positions[entityId].x - minX,
        y: this._positions[entityId].y - minY
      };
    });
    
    this._bounds = {
      minX: 0,
      minY: 0,
      maxX: this._bounds.maxX - minX,
      maxY: this._bounds.maxY - minY
    };
  }
  
  // Speichert die Position in der Entität
  private async _savePosition(entityId: string, position: Position) {
    if (!this.hass) return;
    
    try {
      // Verwende den plant.change_position Service nur mit den erforderlichen Parametern
      await this.hass.callService('plant', 'change_position', {
        entity_id: entityId,
        position_x: position.x,
        position_y: position.y
      });
    } catch {
      // Fehler still behandeln
    }
  }

  // Rendert die Rahmen um Pflanzen aus dem gleichen Cycle
  private _renderCycleGroups() {
    if (!this._cycleGroups?.length) return html``;

    // Nur Gruppen mit mindestens 2 Positionen sind sichtbar
    const validGroups = this._cycleGroups
      .filter(group => group.positions.length >= 2)
      .map(group => {
        const groupId = `cycle-${group.name.replace(/\s+/g, '-')}`;
        return html`<div id="${groupId}" data-name="${group.name}" class="cycle-group-frame"></div>`;
      });

    return validGroups.length ? html`<div class="cycle-layer">${validGroups}</div>` : html``;
  }
  
  render() {
    if (!this.hass) {
      return html``;
    }
    
    // Wenn keine Entitäten vorhanden sind, verwende einen minimalen Grid
    let visibleRows;
    if (this.entities.length === 0) {
      visibleRows = 4;
    } else {
      visibleRows = this._bounds.maxY - this._bounds.minY + 2;
    }
    
    const visibleHeightPx = visibleRows * this._cellSize;
    
    const containerHeight = visibleHeightPx + 20; // Platz für Labels
    
    // Belegte Positionen markieren
    const occupiedPositions = new Set<string>();
    Object.entries(this._positions).forEach(([member, pos]) => {
      // Ändere diese Bedingung, um auch beim Draggen das Original zu entfernen
      if (member !== this._draggingMember) {
        occupiedPositions.add(`${pos.x},${pos.y}`);
      }
    });
    
    // Quadrate für den Hintergrund rendern
    const squares: TemplateResult[] = [];
    
    // Bestimme die Grenzen für die Schleife
    let minX, maxX, minY, maxY;
    if (this.entities.length === 0) {
      minX = -1;
      maxX = 2;
      minY = -1;
      maxY = 2;
    } else {
      minX = this._bounds.minX - 1;
      maxX = this._bounds.maxX + 1;
      minY = this._bounds.minY - 1;
      maxY = this._bounds.maxY + 1;
    }
    
    for (let y = minY; y <= maxY; y++) {
      for (let x = minX; x <= maxX; x++) {
        const posKey = `${x},${y}`;
        
        if (!occupiedPositions.has(posKey)) {
          const pixelPos = this._gridToPixel(x, y);
          
          // Prüfen, ob diese Zelle die Highlight-Zelle ist 
          const isTarget = this._highlightCell !== null && 
                          this._highlightCell.x === x && 
                          this._highlightCell.y === y;
                          
          const isAddIndicator = this._showAddPlantIndicator && 
                                this._showAddPlantIndicator.x === x && 
                                this._showAddPlantIndicator.y === y;
          
          squares.push(html`
            <svg 
              class="cell ${isTarget ? 'highlight' : ''} ${isAddIndicator ? 'add-indicator' : ''}" 
              style=${styleMap({
                left: `${pixelPos.x}px`,
                top: `${pixelPos.y}px`,
                width: `${this._cellSize}px`,
                height: `${this._cellSize}px`,
                transform: 'translate(-50%, -50%)',
                zIndex: isTarget || isAddIndicator ? '5' : '1'
              })}
            >
              <rect 
                x="0" 
                y="0" 
                width="${this._cellSize}" 
                height="${this._cellSize}" 
                fill="transparent" 
                stroke="${isTarget ? 'var(--primary-color, #3498db)' : isAddIndicator ? 'var(--accent-color, #f3a95e)' : 'var(--divider-color, #e0e0e0)'}" 
                stroke-width="${isTarget || isAddIndicator ? '2.5' : '0.8'}" 
                stroke-opacity="${isTarget || isAddIndicator ? '1' : '0.4'}"
                ${isTarget ? 'stroke-dasharray="5,3"' : ''}
                rx="2" 
                ry="2"
              />
            </svg>
            ${isAddIndicator ? html`
              <div 
                class="add-plant-button"
                style=${styleMap({
                  position: 'absolute',
                  left: `${pixelPos.x}px`,
                  top: `${pixelPos.y}px`,
                  width: `${this._cellSize}px`,
                  height: `${this._cellSize}px`,
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: `${this._cellSize * 1.0}px`,
                  color: 'var(--accent-color, #f3a95e)',
                  opacity: '0.1',
                  zIndex: '50',
                  cursor: 'pointer'
                })}
                @click=${(e: MouseEvent) => this._handleCellClick(e, x, y)}
              >+</div>
            ` : ''}
          `);
        }
      }
    }
    
    // Verschiebe den Grid um eine halbe Zellgröße
    // Das erzeugt den visuellen Effekt einer halben Zeile/Spalte an den Rändern
    const offset = this._cellSize / 2;
    
    // Forciere ein komplettes Neurendering mit einem zeitbasierten Key
    
    // Haupt-Template rendern, OHNE den Dialog (der wird später separat gerendert)
    const mainTemplate = html`
      <div class="container" 
           style=${styleMap({ height: `${containerHeight}px` })} 
           @click=${this._handleContainerClick}>
        <div class="grid-background" style=${styleMap({ 
          transform: `translate(${offset}px, ${offset}px)` 
        })}>
          ${squares}
        </div>
        
        <div class="cycle-layer">
          ${this._renderCycleGroups()}
        </div>
        
        <div class="members">
          ${this._renderMembersWithLabels()}
        </div>
        
        <div class="cycle-labels-layer"></div>
        
        ${this._renderSelectionHint()}
        
        <!-- Legende einfügen -->
        ${this.showLegend ? html`
          <brokkoli-area-legend
            .hass=${this.hass}
            .initialShowRings=${this._getActiveRings()}
            .initialShowLabels=${this._getActiveLabels()}
            .initialHeatmap=${this._getHeatmapSensor()}
            .initialHeatmapColor=${this._getHeatmapColor()}
            .initialHeatmapSecondaryColor=${this._getHeatmapSecondaryColor()}
            .initialActiveTab=${this._userSettings.activeTab}
            .plantInfo=${this._plantInfoCache[Object.keys(this._plantInfoCache)[0]]}
            @settings-changed=${this._handleSettingsChanged}
          ></brokkoli-area-legend>
        ` : ''}
      </div>
    `;

    // Dialog-Handling wird jetzt in updated() gemacht, nicht im render()
    // Das verhindert mehrfache Dialog-Erstellung bei Re-Renders
    
    // Das Flyout-Menü wird nicht hier gerendert, sondern wie der
    // Erstellen-Dialog an document.body gehängt (siehe _createFlyout).
    // z-index wirkt nur innerhalb des eigenen Stacking-Kontexts: im Shadow-DOM
    // der Karte liegt es zwangsläufig unter später folgenden Nachbarkarten.
    return html`
      ${mainTemplate}
    `;
  }
  
  // Positioniert die Cycle-Gruppen-Rahmen mit einer komplett neuen Methode
  private _updateCycleGroups() {
    // Ausführen nach dem Rendern
    setTimeout(() => {
      this._cycleGroups.forEach(group => {
        if (group.positions.length < 1) return;
        
        // Lösche vorhandene Rahmen für diese Gruppe
        const groupId = `cycle-${group.name.replace(/\s+/g, '-')}`;
        const frameContainer = this.shadowRoot?.getElementById(groupId);
        if (!frameContainer) return;
        
        // Leere den Container
        frameContainer.innerHTML = '';
        
        // Hole alle Mitglieder-Elemente dieser Gruppe aus dem DOM
        const memberElements: HTMLElement[] = [];
        group.members.forEach(entityId => {
          const selector = `.member-wrapper[data-entity-id="${entityId}"]`;
          const memberEl = this.shadowRoot?.querySelector(selector) as HTMLElement;
          if (memberEl) memberElements.push(memberEl);
        });
        
        if (memberElements.length < 1) return;
        
        // Identifiziere zusammenhängende Inseln von Pflanzen
        const islands = this._identifyIslands(group.members);
        
        // Erstelle für jede Insel einen eigenen Rahmen
        islands.forEach((island) => {
          // Filtere die Elemente für diese Insel
          const islandElements = memberElements.filter(el => {
            const entityId = el.getAttribute('data-entity-id');
            return entityId && island.includes(entityId);
          });
          
          if (islandElements.length < 1) return;
          
          // Sammle die Positionen und Größen der Elemente
          const elementData: {center: {x: number, y: number}, radius: number}[] = [];
          let minX = Number.MAX_SAFE_INTEGER;
          let minY = Number.MAX_SAFE_INTEGER;
          let maxX = Number.MIN_SAFE_INTEGER;
          let maxY = Number.MIN_SAFE_INTEGER;
          
          islandElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const containerRect = this.getBoundingClientRect();
            
            // Berechne die Position relativ zum Container
            const left = rect.left - containerRect.left + rect.width / 2;
            const top = rect.top - containerRect.top + rect.height / 2;
            const radius = Math.max(rect.width, rect.height) / 2;
            
            elementData.push({
              center: { x: left, y: top },
              radius: radius
            });
            
            // Aktualisiere die Bounding Box
            minX = Math.min(minX, left - radius - 20);
            minY = Math.min(minY, top - radius - 20);
            maxX = Math.max(maxX, left + radius + 20);
            maxY = Math.max(maxY, top + radius + 20);
          });
          
          // Erstelle ein neues Rahmenelement für diese Insel
          const islandFrame = document.createElement('div');
          islandFrame.className = 'cycle-group-frame';
          islandFrame.style.position = 'absolute';
          islandFrame.style.boxSizing = 'border-box';
          islandFrame.style.zIndex = '2';
          islandFrame.style.pointerEvents = 'none';
          islandFrame.style.left = `${minX}px`;
          islandFrame.style.top = `${minY}px`;
          islandFrame.style.width = `${maxX - minX}px`;
          islandFrame.style.height = `${maxY - minY}px`;
          
          // Speichere die Rahmenposition für später
          islandFrame.dataset.centerX = `${minX + (maxX - minX) / 2}`;
          islandFrame.dataset.centerY = `${minY + (maxY - minY) / 2}`;
          islandFrame.dataset.width = `${maxX - minX}`;
          islandFrame.dataset.height = `${maxY - minY}`;
          islandFrame.dataset.groupName = group.name;
          islandFrame.dataset.groupColor = group.color || '#3388ff';
          
          // Erstelle ein SVG-Element für den Pfad
          const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          svgElement.setAttribute('width', '100%');
          svgElement.setAttribute('height', '100%');
          svgElement.style.position = 'absolute';
          svgElement.style.top = '0';
          svgElement.style.left = '0';
          svgElement.style.overflow = 'visible';
          
          // Berechne den Pfad für die Hüllkurve oder einen Kreis für einzelne Pflanzen
          let pathData;
          if (islandElements.length === 1) {
            // Für einzelne Pflanzen: Erstelle einen Kreis
            const el = elementData[0];
            const radius = el.radius + 15;
            pathData = `M ${el.center.x - minX - radius} ${el.center.y - minY} ` +
                       `a ${radius} ${radius} 0 1 0 ${radius * 2} 0 ` +
                       `a ${radius} ${radius} 0 1 0 ${-radius * 2} 0`;
          } else {
            // Für mehrere Pflanzen: Berechne die Hüllkurve
            pathData = this._createHullPath(elementData, minX, minY);
          }
          
          // Erstelle den Pfad
          const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          pathElement.setAttribute('d', pathData);
          pathElement.setAttribute('fill', 'none');
          pathElement.setAttribute('stroke', group.color || '#3388ff');
          pathElement.setAttribute('stroke-width', '2');
          pathElement.setAttribute('stroke-linejoin', 'round');
          pathElement.setAttribute('stroke-linecap', 'round');
          
          // Füge den Pfad zum SVG hinzu
          svgElement.appendChild(pathElement);
          
          // Füge das SVG zum Rahmenelement hinzu
          islandFrame.appendChild(svgElement);
          
          // Füge das Rahmenelement zum Container hinzu
          frameContainer.appendChild(islandFrame);
        });
      });
      
      // Nachdem alle Rahmen erstellt wurden, erstelle die klickbaren Labels
      this._createClickableCycleLabels();
    }, 100);
  }
  
  // Überarbeitete Methode: Wählt alle Mitglieder eines Cycles aus oder hebt die Auswahl auf
  private _selectCycleMembers(cycleName: string) {
    // Finde die Gruppe mit diesem Namen
    const group = this._cycleGroups.find(g => g.name === cycleName);
    
    if (!group) {
      console.warn(`Keine Cycle-Gruppe mit Namen ${cycleName} gefunden`);
      return;
    }
    
    // Prüfe, ob alle Mitglieder bereits ausgewählt sind (für Toggle-Funktionalität)
    const allMembersSelected = group.members.every(entityId => 
      this._selectedMembers.has(entityId)
    );
    
    // Wenn alle bereits ausgewählt sind, hebe die Auswahl auf
    if (allMembersSelected) {
      // Lösche nur die Mitglieder dieser Gruppe
      group.members.forEach(entityId => {
        this._selectedMembers.delete(entityId);
      });
    } else {
      // Sonst wähle alle Mitglieder aus
      // Lösche zuerst die aktuelle Auswahl
      this._selectedMembers.clear();
      
      // Füge alle Mitglieder des Cycles zur Auswahl hinzu
      group.members.forEach(entityId => {
        this._selectedMembers.add(entityId);
      });
    }
    
    // Erzwinge ein Update
    this.requestUpdate();
  }
  
  // Erstellt einen Pfad für die Hüllkurve um eine Gruppe von Kreisen
  private _createHullPath(
    elements: {center: {x: number, y: number}, radius: number}[],
    offsetX: number,
    offsetY: number
  ): string {
    if (elements.length < 2) return '';
    
    // Verwende einen größeren Abstand für die Hüllkurve
    const padding = 20;
    
    // Erstelle ein Array von Punkten rund um die Kreise
    const points: {x: number, y: number}[] = [];
    const numPointsPerCircle = 16; // Anzahl der Punkte pro Kreis
    
    elements.forEach(el => {
      const { center, radius } = el;
      const adjustedRadius = radius + padding;
      
      for (let i = 0; i < numPointsPerCircle; i++) {
        const angle = (i / numPointsPerCircle) * 2 * Math.PI;
        points.push({
          x: center.x - offsetX + adjustedRadius * Math.cos(angle),
          y: center.y - offsetY + adjustedRadius * Math.sin(angle)
        });
      }
    });
    
    // Berechne die konvexe Hülle
    const hull = this._computeConvexHull(points);
    
    if (hull.length < 3) return '';
    
    // Erstelle einen Pfad aus der konvexen Hülle mit einer geschlossenen Kurve
    let path = `M ${hull[0].x} ${hull[0].y}`;
    
    // Füge Kurven zwischen den Punkten hinzu
    for (let i = 1; i < hull.length; i++) {
      const p1 = hull[i-1];
      const p2 = hull[i];
      
      // Berechne den Mittelpunkt zwischen den Punkten
      const mpX = (p1.x + p2.x) / 2;
      const mpY = (p1.y + p2.y) / 2;
      
      // Füge eine quadratische Kurve zum Pfad hinzu
      path += ` Q ${p1.x} ${p1.y}, ${mpX} ${mpY}`;
    }
    
    // Schließe die Kurve zum ersten Punkt
    const lastPoint = hull[hull.length - 1];
    const firstPoint = hull[0];
    const mpX = (lastPoint.x + firstPoint.x) / 2;
    const mpY = (lastPoint.y + firstPoint.y) / 2;
    
    path += ` Q ${lastPoint.x} ${lastPoint.y}, ${mpX} ${mpY}`;
    path += ` Q ${firstPoint.x} ${firstPoint.y}, ${hull[0].x} ${hull[0].y}`;
    
    return path;
  }

  // Berechnet die konvexe Hülle einer Menge von Punkten (Graham Scan Algorithmus)
  private _computeConvexHull(points: {x: number, y: number}[]): {x: number, y: number}[] {
    if (points.length < 3) return points;
    
    // Finde den Punkt mit der niedrigsten y-Koordinate (und bei Gleichheit der niedrigsten x-Koordinate)
    let lowestPoint = points[0];
    for (let i = 1; i < points.length; i++) {
      if (points[i].y < lowestPoint.y || (points[i].y === lowestPoint.y && points[i].x < lowestPoint.x)) {
        lowestPoint = points[i];
      }
    }
    
    // Sortiere die Punkte nach dem Polarwinkel bezüglich des niedrigsten Punktes
    const sortedPoints = points.slice();
    sortedPoints.sort((a, b) => {
      if (a === lowestPoint) return -1;
      if (b === lowestPoint) return 1;
      
      const angleA = Math.atan2(a.y - lowestPoint.y, a.x - lowestPoint.x);
      const angleB = Math.atan2(b.y - lowestPoint.y, b.x - lowestPoint.x);
      
      if (angleA === angleB) {
        // Bei gleichem Winkel: Punkt näher am lowestPoint zuerst
        const distA = Math.sqrt(Math.pow(a.x - lowestPoint.x, 2) + Math.pow(a.y - lowestPoint.y, 2));
        const distB = Math.sqrt(Math.pow(b.x - lowestPoint.x, 2) + Math.pow(b.y - lowestPoint.y, 2));
        return distA - distB;
      }
      
      return angleA - angleB;
    });
    
    // Entferne Duplikate
    const uniquePoints: {x: number, y: number}[] = [];
    for (let i = 0; i < sortedPoints.length; i++) {
      if (i === 0 || sortedPoints[i].x !== sortedPoints[i-1].x || sortedPoints[i].y !== sortedPoints[i-1].y) {
        uniquePoints.push(sortedPoints[i]);
      }
    }
    
    // Graham Scan
    const hull: {x: number, y: number}[] = [];
    
    // Füge die ersten drei Punkte zum Hull hinzu
    for (let i = 0; i < Math.min(3, uniquePoints.length); i++) {
      hull.push(uniquePoints[i]);
    }
    
    // Verarbeite die restlichen Punkte
    for (let i = 3; i < uniquePoints.length; i++) {
      while (hull.length > 1 && this._ccw(hull[hull.length - 2], hull[hull.length - 1], uniquePoints[i]) <= 0) {
        hull.pop();
      }
      hull.push(uniquePoints[i]);
    }
    
    return hull;
  }

  // Hilfsfunktion für den Graham Scan: Prüft, ob drei Punkte eine Linkskurve bilden
  private _ccw(p1: {x: number, y: number}, p2: {x: number, y: number}, p3: {x: number, y: number}): number {
    return (p2.x - p1.x) * (p3.y - p1.y) - (p2.y - p1.y) * (p3.x - p1.x);
  }

  // Identifiziert zusammenhängende Inseln von Pflanzen
  private _identifyIslands(members: string[]): string[][] {
    // Erstelle eine Map von Positionen zu Entitäts-IDs
    const positionMap: Record<string, string> = {};
    members.forEach(entityId => {
      const pos = this._positions[entityId];
      if (pos) {
        positionMap[`${pos.x},${pos.y}`] = entityId;
      }
    });
    
    // Erstelle eine Map von Entitäts-IDs zu Positionen
    const entityPositions: Record<string, Position> = {};
    members.forEach(entityId => {
      const pos = this._positions[entityId];
      if (pos) {
        entityPositions[entityId] = pos;
      }
    });
    
    // Erstelle eine Liste von besuchten Entitäten
    const visited = new Set<string>();
    
    // Erstelle eine Liste von Inseln
    const islands: string[][] = [];
    
    // Durchlaufe alle Mitglieder
    members.forEach(entityId => {
      // Wenn die Entität bereits besucht wurde, überspringe sie
      if (visited.has(entityId)) return;
      
      // Erstelle eine neue Insel
      const island: string[] = [];
      
      // Führe eine Tiefensuche durch, um alle verbundenen Entitäten zu finden
      const stack: string[] = [entityId];
      
      while (stack.length > 0) {
        const currentId = stack.pop()!;
        
        // Wenn die Entität bereits besucht wurde, überspringe sie
        if (visited.has(currentId)) continue;
        
        // Markiere die Entität als besucht
        visited.add(currentId);
        
        // Füge die Entität zur Insel hinzu
        island.push(currentId);
        
        // Hole die Position der Entität
        const pos = entityPositions[currentId];
        if (!pos) continue;
        
        // Prüfe die Nachbarn (oben, unten, links, rechts)
        const neighbors = [
          `${pos.x},${pos.y-1}`, // oben
          `${pos.x},${pos.y+1}`, // unten
          `${pos.x-1},${pos.y}`, // links
          `${pos.x+1},${pos.y}`, // rechts
          `${pos.x-1},${pos.y-1}`, // oben links
          `${pos.x+1},${pos.y-1}`, // oben rechts
          `${pos.x-1},${pos.y+1}`, // unten links
          `${pos.x+1},${pos.y+1}`  // unten rechts
        ];
        
        // Füge alle Nachbarn zum Stack hinzu
        neighbors.forEach(neighborPos => {
          const neighborId = positionMap[neighborPos];
          if (neighborId && !visited.has(neighborId)) {
            stack.push(neighborId);
          }
        });
      }
      
      // Füge die Insel zur Liste der Inseln hinzu
      if (island.length > 0) {
        islands.push(island);
      }
    });
    
    return islands;
  }
  
  // Rendert einen Hilfstext zur Mehrfachauswahl, wenn nötig
  private _renderSelectionHint() {
    // Immer nichts zurückgeben, da wir den Hilfetext nicht mehr anzeigen wollen
    return nothing;
  }
  
  // Definiert die Styles für die Komponente
  static get styles(): CSSResult {
    return css`
      ${positionStyles}
    `;
  }

  // Holt den Cycle-Namen einer Entität
  private _getEntityCycleName(entity: { entity_id: string }): string | null {
    if (!entity || !entity.entity_id || !entity.entity_id.startsWith('plant.')) return null;
    
    // Prüfe, ob wir Pflanzendaten für diese Entity haben
    const plantInfo = this._plantInfoCache[entity.entity_id];
    
    if (plantInfo && plantInfo.result) {
      // Versuche, die Cycle-Information aus den plant/get_info Daten zu holen
      const result = plantInfo.result;
      
      // Prüfe, ob Cycle-Informationen in den Pflanzendaten unter helpers vorhanden sind
      if (result.helpers && result.helpers.cycle && result.helpers.cycle.current) {
        return result.helpers.cycle.current; // Cycle-Name aus den API-Daten (helpers.cycle.current)
      }
    }
    
    return null;
  }
  
  // Generiert eine konsistente Farbe für einen Cycle-Namen
  private _getColorForCycle(cycleName: string): string {
    // Erzeuge einen numerischen Hash aus dem Cycle-Namen
    let hash = 0;
    for (let i = 0; i < cycleName.length; i++) {
      hash = cycleName.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    // Verwende den Hash, um einen HSL-Farbwert zu generieren
    const hue = Math.abs(hash) % 360;
    return `hsl(${hue}, 70%, 45%)`;
  }

  // Erstelle separate klickbare Labels für jede Cycle-Gruppe
  private _createClickableCycleLabels() {
    // Zuerst alle vorhandenen Labels entfernen
    const existingLabels = this.shadowRoot?.querySelectorAll('.clickable-cycle-label');
    existingLabels?.forEach(label => label.remove());
    
    // Container für die klickbaren Labels
    let labelsContainer = this.shadowRoot?.querySelector('.cycle-labels-layer');
    
    if (!labelsContainer) {
      // Erstelle den Container, falls er noch nicht existiert
      labelsContainer = document.createElement('div');
      labelsContainer.className = 'cycle-labels-layer';
      this.shadowRoot?.querySelector('.container')?.appendChild(labelsContainer);
    }
    
    // Finde alle Cycle-Gruppen-Rahmen und erstelle dafür klickbare Labels
    const frames = this.shadowRoot?.querySelectorAll('.cycle-group-frame');
    frames?.forEach(frame => {
      // Hole die Daten aus dem Frame
      const centerX = parseFloat(frame.getAttribute('data-center-x') || '0');
      const centerY = parseFloat(frame.getAttribute('data-center-y') || '0');
      const height = parseFloat(frame.getAttribute('data-height') || '0');
      const groupName = frame.getAttribute('data-group-name') || '';
      const groupColor = frame.getAttribute('data-group-color') || '#3388ff';
      
      if (!groupName) return;
      
      // Erstelle das klickbare Label
      const label = document.createElement('div');
      label.className = 'clickable-cycle-label';
      label.textContent = groupName;
      
      // Setze nur die dynamischen Eigenschaften
      label.style.left = `${centerX}px`;
      label.style.top = `${centerY + height/2 - 5}px`;
      label.style.backgroundColor = groupColor;
      
      // Klick-Event
      label.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Für alle Ereignisse zuständig sein
        window.removeEventListener('click', this._handleGlobalClick);
        
        // Finde die Gruppe mit diesem Namen
        const group = this._cycleGroups.find(g => g.name === groupName);
        if (group) {
          this._selectCycleMembers(groupName);
        } else {
          // Keine Gruppe gefunden, nichts tun
        }
        
        // Füge den globalen Click-Listener wieder hinzu
        setTimeout(() => {
          window.addEventListener('click', this._handleGlobalClick);
        }, 10);
      });
      
      // Füge das Label zum Container hinzu
      labelsContainer?.appendChild(label);
    });
  }

  // Konvertiert lokale Grid-Koordinaten in globale Koordinaten
  private _convertToGlobalPosition(localPosition: Position): Position {
    // Berechne Differenz zwischen lokalen und globalen Koordinaten
    // Wichtig: Die echte Position im globalen Koordinatensystem basiert auf den Bounds
    
    // Berechne den Offset zum globalen Koordinatensystem
    // Berücksichtige den aktuellen _bounds-Wert für die Umrechnung
    const offsetX = this._bounds.minX;
    const offsetY = this._bounds.minY;
    
    // Konvertiere von lokalen zu globalen Koordinaten
    return {
      x: localPosition.x + offsetX,
      y: localPosition.y + offsetY
    };
  }

  // Neuer Event-Handler für Klicks auf leere Zellen
  private _handleCellClick(e: MouseEvent, x: number, y: number) {
    // Setze die Auswahl zurück, um konsistentes Verhalten zu erzielen
    this._selectedMembers.clear();
    
    // Wenn bereits ein Dialog oder Flyout sichtbar ist, entferne sie
    if (this._showAddPlantDialog || this._showPlantFlyout) {
      this._showAddPlantDialog = false;
      this._showPlantFlyout = false;
      this._showAddPlantIndicator = null;
      return;
    }
    
    // Wenn die Position bereits belegt ist, ignoriere den Klick
    const isOccupied = Object.values(this._positions).some(
      pos => pos.x === x && pos.y === y
    );
    
    if (isOccupied) {
      return;
    }
    
    // Wenn an dieser Position bereits ein Plus angezeigt wird, öffne das Flyout
    if (this._showAddPlantIndicator && 
        this._showAddPlantIndicator.x === x && 
        this._showAddPlantIndicator.y === y) {
      // Konvertiere zu globalen Koordinaten für das Flyout
      this._newPlantPosition = this._convertToGlobalPosition({x, y});
      this._flyoutPosition = { x: e.clientX, y: e.clientY };
      this._showPlantFlyout = true;
      this._showAddPlantIndicator = null;
    } else {
      // Sonst zeige das Plus-Symbol an
      this._showAddPlantIndicator = {x, y};
    }
    
    // Wichtig: Aktualisierung erzwingen
    this.requestUpdate();
  }
  
  // Dialog schließen
  private _closeAddPlantDialog() {
    this._showAddPlantDialog = false;
    this._showAddPlantIndicator = null;
    
    this.requestUpdate();
  }

  // Behandelt Änderungen am Dialog-Status
  private _handleDialogStateChange() {
    if (this._showAddPlantDialog && this.hass) {
      // Dialog öffnen
      this._createDialog();
    } else {
      // Dialog schließen
      this._removeDialog();
    }
  }

  // Erstellt den Dialog
  private _createDialog() {
    // Entferne vorherige Dialoginstanzen
    this._removeDialog();
    
    // Erstelle einen Container für den Dialog
    const dialogContainer = document.createElement('div');
    dialogContainer.id = 'plant-dialog-container';
    dialogContainer.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 10000; pointer-events: auto;';
    
    // Rendere den Dialog als eigenständiges Element
    const plantCreateDialog = document.createElement('plant-create-dialog');
    
    // Element zum Body hinzufügen
    document.body.appendChild(dialogContainer);
    dialogContainer.appendChild(plantCreateDialog);
    
    // Eigenschaften zuweisen (nach dem DOM append, damit es funktioniert)
    const dialog = plantCreateDialog as unknown as {
      hass: HomeAssistant;
      position: Position;
      areaId: string;
    };
    dialog.hass = this.hass;
    dialog.position = this._newPlantPosition;
    dialog.areaId = this.areaId || '';
    
    // Event-Listener für Dialog-Schließen hinzufügen
    plantCreateDialog.addEventListener('dialog-closed', () => {
      this._closeAddPlantDialog();
    });
  }

  // Entfernt den Dialog
  private _removeDialog() {
    const existingContainer = document.getElementById('plant-dialog-container');
    if (existingContainer && document.body.contains(existingContainer)) {
      document.body.removeChild(existingContainer);
    }
  }

  // Hängt das Flyout-Menü an document.body, damit es über Nachbarkarten liegt
  private _createFlyout() {
    this._removeFlyout();

    const container = document.createElement('div');
    container.id = 'plant-flyout-container';
    container.style.cssText =
      'position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 10000; pointer-events: none;';

    const menu = document.createElement('plant-flyout-menu');

    // Eigenschaften VOR dem Einhängen setzen: connectedCallback() des Menüs
    // lädt die Pflanzenliste und bricht ohne hass wortlos ab, ohne es später
    // erneut zu versuchen. Angehängt vor der Zuweisung bliebe die Liste leer.
    const el = menu as unknown as {
      hass: HomeAssistant;
      position: Position;
      targetPosition: Position;
      areaId: string;
      isMobile: boolean;
    };
    el.hass = this.hass;
    el.position = this._flyoutPosition;
    el.targetPosition = this._newPlantPosition;
    el.areaId = this.areaId || '';
    el.isMobile = window.innerWidth <= 768;

    container.appendChild(menu);
    document.body.appendChild(container);

    // Als addEventListener-Callback geht das this verloren, das Lit bei
    // @event-Bindings im Template mitliefert -- deshalb explizit binden.
    menu.addEventListener('new-plant-requested', this._handleNewPlantRequested.bind(this) as EventListener);
    menu.addEventListener('move-plant-requested', this._handleMovePlantRequested.bind(this) as EventListener);
    menu.addEventListener('plant-cloned', this._handlePlantCloned.bind(this) as EventListener);
    menu.addEventListener('menu-closed', this._handleMenuClosed.bind(this) as EventListener);
  }

  private _removeFlyout() {
    const existing = document.getElementById('plant-flyout-container');
    if (existing && document.body.contains(existing)) {
      document.body.removeChild(existing);
    }
  }

  // Verbesserter Container-Klick-Handler
  private _handleContainerClick(e: MouseEvent) {
    // Prüfe, ob der Klick auf die Legende ging
    const path = e.composedPath();
    const clickedOnLegend = path.some(el => 
      el instanceof HTMLElement && el.tagName.toLowerCase() === 'flower-area-legend'
    );
    
    // Wenn auf die Legende geklickt wurde, ignoriere den Klick
    if (clickedOnLegend) {
      return;
    }

    // Setze die Auswahl zurück, um konsistentes Verhalten zu erzielen
    this._selectedMembers.clear();
    
    // Prüfe, ob der Klick auf ein interaktives Element ging (Member, Label, etc.)
    // Das funktioniert besser als class-Suche - wir prüfen die Elemente direkt
    const clickedOnInteractiveElement = path.some(el => {
      if (el instanceof HTMLElement) {
        // Prüfe die ID oder Element-Typ statt Klassen
        const id = el.getAttribute('data-entity-id');
        if (id) return true; // Hat eine entity-id, ist also eine Pflanze
        
        // Oder prüfe den Tag-Namen für bestimmte Elemente wie SVG
        if (el.tagName === 'svg' && el.classList.contains('cell')) {
          return false; // SVG-Zellen sollen nicht als interaktive Elemente gelten
        }
        
        // Oder prüfe, ob ein bekannter Container angeklickt wurde
        if (el.classList.contains('member') || 
            el.classList.contains('member-wrapper') || 
            el.classList.contains('member-image') ||
            el.classList.contains('cycle-label') ||
            el.classList.contains('clickable-cycle-label') ||
            el.classList.contains('name-label')) {
          return true;
        }
      }
      return false;
    });
    
    // Wenn ein interaktives Element angeklickt wurde, ignoriere den Klick
    if (clickedOnInteractiveElement) {
      return;
    }
    
    // Berechne die geklickte Position im Grid
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Konvertiere die Pixel-Position in Grid-Koordinaten
    const gridPos = this._pixelToGrid(x, y);
    
    // Prüfe, ob die Position bereits belegt ist
    const isOccupied = Object.values(this._positions).some(
      pos => pos.x === gridPos.x && pos.y === gridPos.y
    );
    
    if (isOccupied) {
      return;
    }
    
    // Wenn an dieser Position bereits ein Plus angezeigt wird, öffne das Flyout
    if (this._showAddPlantIndicator && 
        this._showAddPlantIndicator.x === gridPos.x && 
        this._showAddPlantIndicator.y === gridPos.y) {
      // Konvertiere zu globalen Koordinaten für das Flyout
      this._newPlantPosition = this._convertToGlobalPosition(gridPos);
      this._flyoutPosition = { x: e.clientX, y: e.clientY };
      this._showPlantFlyout = true;
      this._showAddPlantIndicator = null;
    } else {
      // Sonst zeige das Plus-Symbol an der geklickten Position
      this._showAddPlantIndicator = gridPos;
    }
    
    // Wichtig: Aktualisierung erzwingen
    this.requestUpdate();
  }

  // Neuer Event-Handler für Klicks auf das transparente Overlay
  private _handleOverlayClick(e: MouseEvent) {
    // Setze die Auswahl zurück, um konsistentes Verhalten zu erzielen
    this._selectedMembers.clear();
    
    // Prüfe, ob der Klick auf eine Pflanze ging
    const path = e.composedPath();
    const isPlant = path.some(el => {
      if (el instanceof HTMLElement) {
        // Überprüfe, ob es ein Element mit der Klasse member, member-wrapper, member-image, name usw. ist
        const classes = el.className?.split?.(' ') || [];
        return classes.some(c => 
          c.includes('member') || c.includes('name') || 
          c.includes('cycle-label') || c.includes('clickable-cycle-label')
        );
      }
      return false;
    });

    // Wenn der Klick auf eine Pflanze ging, nichts tun
    if (isPlant) {
      return;
    }
    
    // Prüfe, ob der Klick auf ein anderes Element mit eigenem Event-Handler ging
    const clickedOnSpecialElement = path.some(el => {
      if (el instanceof HTMLElement) {
        const classes = el.className.split(' ');
        return classes.includes('member') || 
               classes.includes('member-wrapper') || 
               classes.includes('cycle-label') ||
               classes.includes('clickable-cycle-label');
      }
      return false;
    });
    
    // Wenn wir auf ein Element mit eigenem Handler geklickt haben, ignorieren wir den Klick
    if (clickedOnSpecialElement) {
      return;
    }
    
    // Berechne die geklickte Position im Grid
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Konvertiere die Pixel-Position in Grid-Koordinaten
    const gridPos = this._pixelToGrid(x, y);
    
    // Prüfe, ob die Position bereits belegt ist
    const isOccupied = Object.values(this._positions).some(
      pos => pos.x === gridPos.x && pos.y === gridPos.y
    );
    
    if (isOccupied) {
      return;
    }
    
    // Wenn an dieser Position bereits ein Plus angezeigt wird, öffne das Flyout
    if (this._showAddPlantIndicator && 
        this._showAddPlantIndicator.x === gridPos.x && 
        this._showAddPlantIndicator.y === gridPos.y) {
      // Konvertiere zu globalen Koordinaten für das Flyout
      this._newPlantPosition = this._convertToGlobalPosition(gridPos);
      this._flyoutPosition = { x: e.clientX, y: e.clientY };
      this._showPlantFlyout = true;
      this._showAddPlantIndicator = null;
    } else {
      // Sonst zeige das Plus-Symbol an der geklickten Position
      this._showAddPlantIndicator = gridPos;
    }
    
    // Aktualisierung erzwingen
    this.requestUpdate();
  }

  // Spezielle Behandlung für Touch-Events
  private _handleTouchStart(e: TouchEvent, entityId: string) {
    // Speichert, ob ein Drag gestartet wurde
    let dragStarted = false;
    
    // Verhindere das Standard-Touch-Verhalten
    e.preventDefault();
    
    // Startposition speichern
    const touch = e.touches[0];
    const startX = touch.clientX;
    const startY = touch.clientY;
    
    // Temporärer Handler für die Bewegung
    const touchMoveHandler = (moveEvent: TouchEvent) => {
      // Wenn bereits ein Drag gestartet wurde, nichts weiter tun
      if (dragStarted) return;
      
      const moveTouch = moveEvent.touches[0];
      const moveX = moveTouch.clientX;
      const moveY = moveTouch.clientY;
      
      // Nur bei deutlicher Bewegung einen Drag starten
      if (Math.abs(moveX - startX) > 10 || Math.abs(moveY - startY) > 10) {
        dragStarted = true;
        this._startDrag(e, entityId);
      }
    };
    
    // Temporärer Handler für das Touch-Ende
    const touchEndHandler = () => {
      // Handler entfernen
      window.removeEventListener('touchmove', touchMoveHandler);
      window.removeEventListener('touchend', touchEndHandler);
      
      // Wenn kein Drag gestartet wurde, simuliere einen Klick
      if (!dragStarted) {
        this._handleClick(new MouseEvent('click'), entityId);
      }
    };
    
    // Event-Listener hinzufügen
    window.addEventListener('touchmove', touchMoveHandler, { passive: false });
    window.addEventListener('touchend', touchEndHandler);
  }

  // Wird aufgerufen, wenn eine neue Pflanze erstellt wird
  private _handlePlantCreated = async (e: CustomEvent) => {
    if (!this.hass) return;
    
    const { entity_id, position } = e.detail;
    
    // 1. Füge die neue Pflanze zur Position hinzu (diese kann negative Werte haben)
    this._positions[entity_id] = position;
    
    // 2. Berechne neue Grenzen, um negative Positionen zu erkennen
    this._calculateBounds();
    
    // 3. Normalisiere alle Positionen (verschiebt alles in den positiven Bereich)
    this._normalizePositions();
    
    // 4. Speichere alle normalisierten Positionen
    const savePromises = Object.entries(this._positions).map(([eid, pos]) => 
      this._savePosition(eid, pos)
    );
    
    // Warte, bis alle Positionen gespeichert sind
    await Promise.all(savePromises);
    
    // 5. Lade die Komponente neu
    this._loadPositions();
  };

  // Flyout Event-Handler
  private _handleNewPlantRequested = (e: CustomEvent) => {
    const { position } = e.detail;
    this._newPlantPosition = position;
    this._showPlantFlyout = false;
    this._showAddPlantDialog = true;
    this.requestUpdate();
  };

  private _handleMovePlantRequested = async (e: CustomEvent) => {
    if (!this.hass) return;
    
    const { plant, position } = e.detail;
    
    // Setze die neue Position für die Pflanze
    this._positions[plant.entity_id] = position;
    
    // Berechne neue Grenzen und normalisiere
    this._calculateBounds();
    this._normalizePositions();
    
    // Speichere alle Positionen
    const savePromises = Object.entries(this._positions).map(([eid, pos]) => 
      this._savePosition(eid, pos)
    );
    
    await Promise.all(savePromises);
    
    // Zusätzlich: Setze die Area für die verschobene Pflanze
    await this._assignArea(this.hass.entities[plant.entity_id]?.device_id);
    
    // Schließe das Flyout und lade neu
    this._showPlantFlyout = false;
    this._loadPositions();
  };

  // Ordnet ein Gerät der Area der Karte zu.
  private async _assignArea(deviceId?: string) {
    if (!this.hass || !this.areaId || !deviceId) return;
    try {
      // Formatiere die Area-ID (lowercase und Umlaute ersetzen)
      const formattedAreaId = this.areaId.toLowerCase()
        .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
        .replace(/ß/g, 'ss');

      await this.hass.callService('plant', 'move_to_area', {
        device_id: [deviceId],
        area_id: formattedAreaId
      });
    } catch (error) {
      console.error('Fehler beim Setzen der Area:', error);
    }
  }

  private _handlePlantCloned = async (e: CustomEvent) => {
    // Schließe das Flyout nach erfolgreichem Klonen
    this._showPlantFlyout = false;
    this.requestUpdate();

    // Der Klon ist eine neue Pflanze ohne Position und ohne Raum. Beides muss
    // hier gesetzt werden, sonst taucht er nirgends auf.
    const { entity_id, device_id, position } = e.detail ?? {};
    if (!this.hass || !entity_id || !position) return;

    this._positions[entity_id] = position;
    this._calculateBounds();
    this._normalizePositions();
    await Promise.all(Object.entries(this._positions).map(([eid, pos]) => this._savePosition(eid, pos)));

    await this._assignArea(device_id ?? this.hass.entities[entity_id]?.device_id);

    this._loadPositions();
  };

  private _handleMenuClosed = () => {
    this._showPlantFlyout = false;
    this.requestUpdate();
  };

  // Lädt die Pflanzendaten via WebSocket API für eine Entity
  private async _loadPlantInfo() {
    // Verwende die neue Methode stattdessen
    await this._loadAllPlantData();
  }

  // Entferne die nicht mehr benötigte initPlantDataLoading-Methode, jetzt verwenden wir _loadAllPlantData
  private _initPlantDataLoading() {
    // Verweise auf die neue Methode
    this._loadAllPlantData();
  }
  
  // Diese Methode wird jetzt durch _loadAllPlantData ersetzt
  private _loadPlantInfosWithDelay() {
    // Verweise auf die neue Methode
    this._loadAllPlantData();
  }

  // Rendert Sensorlabels für eine Pflanze basierend auf den plant/get_info Daten
  private _renderSensorLabels(entityId: string): TemplateResult {
    const plantInfo = this._plantInfoCache[entityId];
    
    // Verwende die aktiven Labels statt this.showLabels. Strain und Breeder
    // sind Stammdaten und werden als eigenes Badge gerendert, nicht hier.
    const activeLabels = this._getActiveLabels()
      .filter(id => id !== 'strain' && id !== 'breeder');
    
    // Wenn keine Labels konfiguriert sind, zeige nichts an
    if (activeLabels.length === 0) {
      return html``;
    }
    
    if (!plantInfo || !plantInfo.result) {
      return html``;
    }
    
    const result = plantInfo.result;
    
    // Prüfe Health-Sensor aus den helpers
    let healthSensor = null;
    if (this.hass && result.helpers?.health?.entity_id) {
      // Health-Sensor aus der Helper-Struktur abrufen
      const healthEntityId = result.helpers.health.entity_id;
      if (this.hass.states[healthEntityId]) {
        healthSensor = this.hass.states[healthEntityId];
      }
    }
    
    // Filtere verfügbare Sensoren basierend auf activeLabels
    const availableSensors = activeLabels.filter(sensorType => {
      // Spezielle Behandlung für Health
      if (sensorType === 'health') {
        return healthSensor !== null;
      }
      // Normale Sensoren - Prüfe ob der Sensor existiert und current definiert ist (auch wenn 0)
      return result[sensorType] && result[sensorType].current !== undefined && result[sensorType].current !== null;
    });
    
    // Wenn keine Sensoren verfügbar sind, zeige nichts an
    if (availableSensors.length === 0) {
      return html``;
    }
    
    // Sensordaten vorbereiten
    const sensorData = availableSensors.map(sensorType => {
      // Spezielle Behandlung für Health-Sensor
      if (sensorType === 'health' && healthSensor) {
        // Bereite Health-Daten im gleichen Format wie andere Sensoren vor
        return {
          type: sensorType,
          current: Number(healthSensor.state),
          min: 0,
          max: 5,
          icon: "mdi:heart-pulse",
          sensor: healthSensor.entity_id,
          unit_of_measurement: ""
        };
      }
      
      // Normaler Sensor
      return {
        type: sensorType,
        ...result[sensorType]
      };
    });
    
    // Container für die Labels
    return html`
      <div class="sensor-labels">
        ${sensorData.map(sensor => {
          // Bestimme den Status des Sensors
          const current = Number(sensor.current);
          const min = Number(sensor.min);
          const max = Number(sensor.max);
          
          const isZero = current === 0;
          const isBelowMin = current < min && !isZero; 
          const isAboveMax = current > max;
          
          // CSS-Klassen für Animation
          const animationClass = isZero || isBelowMin || isAboveMax || 
                                 (sensor.type === 'health' && current <= 1.5) ? 
                                 'sensor-pulsating' : '';
          
          // Icon-Farbe bestimmen
          let iconColor = '';
          if (sensor.type === 'health') {
            if (current <= 0.5) {
              iconColor = 'rgba(240,163,163,1)'; // Rot
            } else if (current <= 2.5) {
              const mix = (current - 0.5) / 2;
              iconColor = `rgb(${240 + (15 * mix)}, ${163 + (51 * mix)}, ${163 - (163 * mix)})`;
            } else {
              const mix = (current - 2.5) / 2.5;
              iconColor = `rgb(${255 - (212 * mix)}, ${214 - (20 * mix)}, ${0 + (83 * mix)})`;
            }
          } else {
            // Standard-Farbe aus dem entsprechenden Ring verwenden
            iconColor = `var(--sensor-ring-${sensor.type}-color, var(--primary-color))`;
          }
          
          // Formatiere den Wert: Entferne Nachkommastellen, wenn es eine ganze Zahl ist
          let displayValue = isNaN(current) ? '-' : current;
          if (Number.isInteger(current)) {
            displayValue = Math.round(current);
          } else if (!isNaN(current)) {
            // Auf eine Nachkommastelle runden
            displayValue = current.toFixed(1);
          }
          
          return html`
            <div class="sensor-label ${animationClass}">
              <ha-icon 
                icon="${sensor.icon || `mdi:${sensor.type}`}" 
                style="color: ${iconColor};"
              ></ha-icon>
              <span class="sensor-value">${displayValue}</span>
              <span class="sensor-unit">${sensor.unit_of_measurement || ''}</span>
            </div>
          `;
        })}
      </div>
    `;
  }

  // Behandelt Änderungen an den Legende-Einstellungen
  private _handleSettingsChanged(e: CustomEvent) {
    const settings = e.detail as LegendSettings;
    
    // Aktualisiere die internen Einstellungen
    this._userSettings = {
      showRings: settings.selectedRings,
      showLabels: settings.selectedLabels,
      heatmap: settings.heatmapSensor,
      heatmapColor: settings.heatmapColor,
      heatmapSecondaryColor: settings.heatmapSecondaryColor,
      heatmapOpacity: settings.heatmapOpacity,
      activeTab: settings.activeTab
    };
    
    try {
      localStorage.setItem(this._speicherSchluessel, JSON.stringify(this._userSettings));
    } catch {
      // Kein Speicher verfuegbar (privater Modus, volles Kontingent) -- die
      // Einstellungen gelten dann nur fuer diese Sitzung.
    }

    // Erzwinge ein Update der Komponente
    this.requestUpdate();
  }
  
  // Hilfsmethode, um die aktiven Ringe zu bekommen (entweder aus Benutzereinstellungen oder aus YAML)
  private _getActiveRings(): string[] {
    return this._userSettings.showRings !== undefined ? this._userSettings.showRings : this.showRings;
  }
  
  // Hilfsmethode, um die aktiven Labels zu bekommen (entweder aus Benutzereinstellungen oder aus YAML)
  private _getActiveLabels(): string[] {
    return this._userSettings.showLabels !== undefined ? this._userSettings.showLabels : this.showLabels;
  }
  
  // Hilfsmethode, um den aktiven Heatmap-Sensor zu bekommen
  private _getHeatmapSensor(): string | undefined {
    // Prüfe, ob der Benutzer explizit den Heatmap-Sensor festgelegt hat
    // Wenn der Wert auf null gesetzt wurde, bedeutet dies, dass der Benutzer die Heatmap deaktiviert hat
    // und wir ignorieren bewusst die YAML-Konfiguration
    if (this._userSettings.heatmap === null) {
      return undefined; // Deaktiviere die Heatmap vollständig
    }
    return this._userSettings.heatmap !== undefined ? this._userSettings.heatmap : this.heatmap;
  }
  
  // Hilfsmethode, um die aktive Heatmap-Farbe zu bekommen
  private _getHeatmapColor(): string | undefined {
    return this._userSettings.heatmapColor !== undefined ? this._userSettings.heatmapColor : this.heatmapColor;
  }
  
  // Hilfsmethode, um die aktive sekundäre Heatmap-Farbe zu bekommen
  private _getHeatmapSecondaryColor(): string | undefined {
    return this._userSettings.heatmapSecondaryColor !== undefined ? this._userSettings.heatmapSecondaryColor : this.heatmapSecondaryColor;
  }
  
  // Hilfsmethode, um die aktive Heatmap-Transparenz zu bekommen
  private _getHeatmapOpacity(): number {
    return this._userSettings.heatmapOpacity !== undefined ? this._userSettings.heatmapOpacity : 0.8; // Standard 80%
  }

  // Neue Methode: Lädt alle Pflanzendaten auf einmal und aktualisiert sie synchronisiert
  private async _loadAllPlantData() {
    if (!this.hass) return;
    
    // Nur Pflanzen-Entitäten filtern (keine Cycles)
    const plantEntities = this.entities.filter(entityId => entityId.startsWith('plant.'));
    if (plantEntities.length === 0) return;
    
    // Prüfen, ob wir bereits Daten im Cache haben
    let allDataLoaded = true;
    for (const entityId of plantEntities) {
      if (!this._plantInfoCache[entityId] || !this._plantInfoCache[entityId].result) {
        allDataLoaded = false;
        break;
      }
    }
    
    // Wenn wir bereits Daten für alle Pflanzen haben, identifiziere Cycle-Gruppen und plane Update
    if (allDataLoaded) {
      // Identifiziere die Cycle-Gruppen mit den vorhandenen Daten
      this._identifyCycleGroups();
      this.requestUpdate();
      
      // Plane eine einzige verzögerte Aktualisierung für alle Pflanzen
      if (this._updateTimeout) {
        clearTimeout(this._updateTimeout);
      }
      this._updateTimeout = window.setTimeout(() => {
        this._loadAllPlantData();
      }, 10000); // Alle 10 Sekunden aktualisieren
      
      return;
    }
    
    // Paralleles Laden aller Pflanzendaten
    const loadPromises = plantEntities.map(async (entityId) => {
      try {
        const response = await this.hass!.callWS({
          type: "plant/get_info",
          entity_id: entityId,
        });
        
        // Typsicheres Überprüfen der Antwort
        if (response && typeof response === 'object' && 'result' in response && response.result) {
          // Daten im lokalen Cache speichern
          this._plantInfoCache[entityId] = { result: response.result as PlantInfo['result'] };
        }
        
        return { entityId, success: true };
      } catch (err) {
        console.error(`[FLOWER-AREA] Fehler beim Laden der Daten für ${entityId}:`, err);
        return { entityId, success: false };
      }
    });
    
    // Warte, bis alle Daten geladen wurden
    await Promise.all(loadPromises);
    
    // Identifiziere die Cycle-Gruppen erst nach dem Laden aller Daten
    this._identifyCycleGroups();
    this.requestUpdate();
    
    // Plane eine einzige verzögerte Aktualisierung für alle Pflanzen
    if (this._updateTimeout) {
      clearTimeout(this._updateTimeout);
    }
    this._updateTimeout = window.setTimeout(() => {
      this._loadAllPlantData();
    }, 10000); // Alle 10 Sekunden aktualisieren
  }
}
