import { css, CSSResult } from 'lit';

export const positionStyles: CSSResult = css`
  :host {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    height: 100%;
    /* Default-Größe für Sections-View ohne grid_options. Wenn der User
       grid_options:rows setzt, gewinnt height:100% über den Parent;
       wenn nicht (Parent kollabiert), zieht min-height die Card auf. */
    min-height: 300px;
  }
  
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: var(--card-background-color, #fff);
    padding: 0;
    margin: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    z-index: 0; /* Erstellt einen Stacking-Kontext, damit Kinder-Elemente innerhalb bleiben */
  }
  
  .empty {
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: italic;
    color: var(--secondary-text-color);
  }
  
  .grid-background, .grid-svg, .members, .name-layer, .cycle-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .grid-background { z-index: 1; }
  .cycle-layer { z-index: 2; pointer-events: none; }
  .name-layer { z-index: 5; pointer-events: none; }
  .members { z-index: 3; }
  
  /* The whole grid lives in ONE svg. Every cell used to be its own absolutely
     positioned <svg> carrying a drop-shadow filter -- a hundred filtered
     layers the compositor repainted on every re-render, for a shadow at 5%
     alpha nobody can see. */
  .grid-svg {
    pointer-events: none;
    overflow: visible;
  }
  
  .grid-cell {
    fill: transparent;
    stroke: var(--divider-color, #e0e0e0);
    stroke-width: 0.8;
    stroke-opacity: 0.4;
  }
  
  .grid-cell.highlight {
    stroke: var(--primary-color, #3498db);
    stroke-width: 2.5;
    stroke-opacity: 1;
    stroke-dasharray: 5 3;
    animation: cell-pulse 1.5s infinite alternate;
  }
  
  .grid-cell.add-indicator {
    stroke: var(--accent-color, #f3a95e);
    stroke-width: 2.5;
    stroke-opacity: 1;
    animation: cell-pulse 1.5s infinite alternate;
  }
  
  .plus-icon {
    cursor: pointer;
    pointer-events: auto;
  }
  
  /* Opacity only: the old keyframes also animated border-width, which the
     <svg> box never had, so every frame cost a layout pass for nothing. */
  @keyframes cell-pulse {
    from { opacity: 0.4; }
    to { opacity: 1; }
  }
  
  .member-wrapper {
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 3;
  }
  
  .member {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: calc(var(--cell-size) * 1.1);
    height: calc(var(--cell-size) * 1.1);
  }
  
  .container.edit-mode .member { cursor: move; }
  
  .member:not(.dragging) { transition: transform 0.2s ease; }
  .member:hover { filter: brightness(1.05); }
  
  .member.dragging {
    filter: drop-shadow(0 0 8px var(--primary-color));
    transition: none;
  }
  
  .member.snapping { animation: snap 0.3s ease-in-out forwards; }
  
  @keyframes snap {
    0% { transform: scale(1.1); }
    50% { transform: scale(0.95); }
    100% { transform: scale(1); }
  }
  
  /* An alarm ring used to animate stroke-width and filter: brightness().
     Both force a repaint of the ring layer on every single frame, times the
     number of plants in alarm -- that is what made the browser sweat. Opacity
     composites instead: the layer is painted once and only re-blended. The
     extra weight is now a static stroke-width, not an animated one. */
  @keyframes sensor-pulse {
    from { opacity: 0.35; }
    to { opacity: 1; }
  }
  
  .sensor-pulsating,
  .pulsating {
    animation: sensor-pulse 1s infinite alternate ease-in-out;
    will-change: opacity;
  }
  
  .sensor-ring-fg.sensor-pulsating,
  .sensor-ring-fg.pulsating {
    stroke-width: 6px;
  }
  
  .add-plant-button {
    position: absolute;
    z-index: 1000 !important;
    pointer-events: auto;
    user-select: none;
    line-height: 1;
    transition: transform 0.2s ease;
  }
  
  .add-plant-button:hover {
    transform: translate(-50%, -50%) scale(1.2);
  }
  
  .sensor-rings {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  
  .sensor-ring {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }
  
  /* Standardfarben für Sensor-Ringe */
  .sensor-ring-temperature { stroke: var(--sensor-ring-temperature-color); }
  .sensor-ring-conductivity { stroke: var(--sensor-ring-conductivity-color); }
  .sensor-ring-dli { stroke: var(--sensor-ring-dli-color); }
  .sensor-ring-health { stroke: var(--sensor-ring-health-color); }
  .sensor-ring-water_consumption { stroke: var(--sensor-ring-water_consumption-color); }
  .sensor-ring-fertilizer_consumption { stroke: var(--sensor-ring-fertilizer_consumption-color); }
  .sensor-ring-power_consumption { stroke: var(--sensor-ring-power_consumption-color); }
  .sensor-ring-moisture { stroke: var(--sensor-ring-moisture-color); }
  .sensor-ring-illuminance { stroke: var(--sensor-ring-illuminance-color); }
  .sensor-ring-humidity { stroke: var(--sensor-ring-humidity-color); }
  
  /* Hintergrundringe */
  .sensor-ring-bg {
    stroke: rgba(0,0,0,0.1);
    fill: none;
    stroke-width: 4px;
  }
  
  /* Disabled Ringe */
  .sensor-ring-disabled {
    stroke: var(--disabled-text-color, #80808080);
    fill: none;
    stroke-width: 4px;
    stroke-dasharray: 5,10;
  }
  
  /* Sensor-Ringe selbst */
  .sensor-ring-fg {
    fill: none;
    stroke-width: 4px;
  }
  
  /* Spezielle Styling für Health-Ring Segmente */
  .sensor-ring-health-segment {
    fill: none;
    stroke-width: 4px;
    transition: stroke 0.3s ease;
  }
  
  /* Farbverlauf für Health-Ring von Rot zu Gelb zu Grün */
  .sensor-ring-health-segment-0 { stroke: rgba(240,163,163,1); } /* Rot - sehr schlecht */
  .sensor-ring-health-segment-1 { stroke: rgb(244,176,144); }     /* Rötlicher Orange */
  .sensor-ring-health-segment-2 { stroke: rgb(248,189,125); }     /* Orange */
  .sensor-ring-health-segment-3 { stroke: rgb(251,202,106); }     /* Orange-Gelb */
  .sensor-ring-health-segment-4 { stroke: rgb(255,214,82); }      /* Gelb */
  .sensor-ring-health-segment-5 { stroke: rgb(234,212,85); }      /* Gelbgrün */
  .sensor-ring-health-segment-6 { stroke: rgb(212,209,83); }      /* Hellgrün */
  .sensor-ring-health-segment-7 { stroke: rgb(191,207,81); }      /* Grün */ 
  .sensor-ring-health-segment-8 { stroke: rgb(169,204,79); }      /* Sattgrün */
  .sensor-ring-health-segment-9 { stroke: rgb(148,202,83); }      /* Dunkelgrün */
  
  .member-image {
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--primary-color);
    background-color: var(--card-background-color, #fff);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s ease;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  /* Heatmap-Overlay für die Pflanzenbilder */
  .heatmap-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    pointer-events: none;
    z-index: 1;
  }
  
  .member:hover .member-image { box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); }
  
  .member.dragging .member-image {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    transform: scale(1.1);
    transition: transform 0.1s ease-out, box-shadow 0.1s ease-out;
  }
  
  .member.selected:not(.dragging):hover .member-image {
    transform: scale(1.1);
    cursor: grab;
  }
  
  .member:not(.selected):hover .member-image { cursor: pointer; }
  
  /* Outside edit mode a badge is a shortcut to its own sensor's more-info
     dialog, so it has to catch clicks even though the stack around it does
     not. In edit mode it stays transparent to the mouse: a drag that starts
     on a badge must reach the plant underneath. */
  .container:not(.edit-mode) .sensor-label {
    pointer-events: auto;
    cursor: pointer;
  }
  
  .member-image ha-icon {
    --mdc-icon-size: 70%;
    color: var(--primary-color);
  }
  
  .member.selected .member-image {
    border: 2px solid var(--accent-color, #f3a95e);
    box-shadow: 0 0 0 2px var(--accent-color, #f3a95e);
    transform: scale(1.05);
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  }
  
  .entity-name.selected { 
    color: var(--accent-color, #f3a95e);
    font-weight: bold;
  }
  
  .entity-name {
    position: absolute;
    left: 50%;
    top: calc(95%);
    transform: translateX(-50%);
    font-size: 0.8rem;
    font-weight: bold;
    max-width: 120%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    color: var(--primary-text-color);
    background-color: var(--card-background-color, #fff);
    padding: 1px 5px;
    border-radius: 10px;
    opacity: 0.9;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    pointer-events: none;
    transition: opacity 0.2s ease, box-shadow 0.2s ease, font-weight 0.2s ease;
    z-index: 4;
  }
  
  /* Stammdaten-Badge: steht an der Stelle, an der sonst der Name sitzt.
     Ist es sichtbar, rückt der Name eine Badge-Höhe nach oben. */
  .entity-strain {
    position: absolute;
    left: 50%;
    top: calc(95%);
    transform: translateX(-50%);
    font-size: 0.8rem;
    font-weight: bold;
    max-width: 140%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    color: var(--primary-text-color);
    background-color: var(--card-background-color, #fff);
    padding: 1px 5px;
    border-radius: 10px;
    opacity: 0.9;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    pointer-events: none;
    transition: opacity 0.2s ease, box-shadow 0.2s ease;
    z-index: 4;
  }

  .entity-name.shifted {
    top: calc(95% - 26px);
  }

  /* Hovering used to be tracked in a reactive state, so moving the mouse
     across the room re-rendered every plant, ring and label. CSS knows who is
     hovered without asking Lit. */
  .entity-strain.dragging,
  .member-wrapper:hover .entity-strain {
    opacity: 1;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }

  .entity-name.dragging,
  .member-wrapper:hover .entity-name {
    opacity: 1;
    font-weight: bold;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }

  /* The hovered plant has to win over its neighbours' inline z-index, which
     is why this needs !important -- --z-index is what render() wrote there. */
  .member-wrapper:hover {
    z-index: calc(var(--z-index, 1) + 2) !important;
  }
  
  .cycle-group {
    position: absolute;
    border: 2px solid;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    pointer-events: none;
    box-sizing: border-box;
  }
  
  .cycle-label {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 2px 5px;
    font-size: 0.8em;
    background: rgba(255, 255, 255, 0.9);
    color: #333;
    border-radius: 5px 0 5px 0;
    transform: translate(0, -2px);
    cursor: pointer !important;
    pointer-events: auto !important;
    z-index: 7 !important;
    transition: background-color 0.2s ease;
  }
  
  .cycle-label:hover { background-color: rgba(220, 220, 220, 0.95) !important; }
  
  .grid-point {
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: rgba(127, 127, 127, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  
  .grid-point.active { background-color: rgba(127, 127, 127, 0.5); }
  
  .debug-indicator {
    position: absolute;
    top: 5px;
    left: 5px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    z-index: 8;
    font-size: 0.8rem;
  }
  
  .member-wrapper.dragging.selected .member-image {
    border-color: var(--accent-color, #f3a95e);
    box-shadow: 0 0 0 3px var(--accent-color, #f3a95e), 0 6px 12px rgba(0, 0, 0, 0.4);
  }
  
  .clickable-cycle-label {
    position: absolute;
    transform: translateX(-50%);
    background-color: var(--primary-color);
    color: white;
    padding: 0 8px;
    height: 20px;
    line-height: 20px;
    border-radius: 10px;
    font-size: 12px;
    font-weight: bold;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    cursor: pointer;
    pointer-events: auto;
    user-select: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
    z-index: 9;
    white-space: nowrap;
    overflow: visible;
    max-width: none;
  }
  
  .clickable-cycle-label:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.4);
    filter: brightness(1.1);
    transform: translateX(-50%) scale(1.05);
  }
  
  /* Outside edit mode the label does not select anything, so it must not
     advertise that it would. */
  .clickable-cycle-label.static {
    cursor: default;
  }
  
  .clickable-cycle-label.static:hover {
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    filter: none;
    transform: translateX(-50%);
  }
  
  .click-overlay {
    cursor: pointer;
    z-index: 3;
    pointer-events: none;
  }
  
  ha-card {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    z-index: 0; /* Erstellt einen Stacking-Kontext für die Karte */
  }
  
  ha-card .card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  
  /* Styling für Sensorlabels */
  .sensor-labels {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    max-width: 85%;
    z-index: 5;
    pointer-events: none;
  }
  
  .sensor-label {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1px 5px;
    border-radius: 10px;
    background-color: var(--card-background-color, #fff);
    opacity: 0.9;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    font-size: 0.75rem;
    color: var(--primary-text-color);
    width: auto;
    white-space: nowrap;
    transition: opacity 0.2s ease, box-shadow 0.2s ease, font-weight 0.2s ease;
  }
  
  /* Growing is the alarm signal. Fading while it grows is not: the badge is
     asking to be read at exactly the moment it turns see-through. A pulsating
     badge therefore sits at full opacity and only scales. */
  .sensor-label.sensor-pulsating {
    animation: label-pulse 1s infinite alternate ease-in-out;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
    opacity: 1;
    will-change: transform;
  }
  
  /* transform is the one property the compositor can animate without
     repainting anything. The box-shadow that used to grow along with the
     scale is now a static, already-strong shadow. */
  @keyframes label-pulse {
    from { transform: scale(1); }
    to { transform: scale(1.15); }
  }
  
  .sensor-label ha-icon {
    --mdc-icon-size: 12px;
    margin-right: 2px;
  }
  
  .sensor-value {
    font-weight: bold;
    margin-right: 2px;
  }
  
  .sensor-unit {
    opacity: 0.8;
    font-size: 0.7rem;
  }
  
  /* Edit-mode toggle. Deliberately built to match the collapsed legend next
     to it -- same 40px shell, same 28px circle -- so the two read as a pair. */
  .edit-toggle-container {
    position: absolute;
    top: 10px;
    z-index: 10;
    width: 40px;
    background-color: var(--card-background-color, #fff);
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .edit-toggle {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: var(--secondary-background-color, #f5f5f5);
    color: var(--secondary-text-color);
    border: none;
    margin: 4px;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: background-color 0.2s ease, color 0.2s ease;
  }
  
  .edit-toggle ha-icon {
    --mdc-icon-size: 18px;
  }
  
  .edit-toggle:hover { transform: scale(1.05); }
  
  .edit-toggle.active {
    background-color: var(--accent-color, #f3a95e);
    color: white;
  }
  
  /* A card scrolled out of view still burns frames on its alarm animations.
     The IntersectionObserver in brokkoli-area sets this attribute; the
     animations keep their state and resume where they left off. */
  :host([data-offscreen]) * {
    animation-play-state: paused !important;
  }
  
  @media (prefers-reduced-motion: reduce) {
    .grid-cell.highlight,
    .grid-cell.add-indicator,
    .sensor-pulsating,
    .pulsating,
    .sensor-label.sensor-pulsating {
      animation: none;
    }
  }
  
  /* Anpassung der CSS-Variablen für die Sensorring-Farben, die auch für die Icons verwendet werden */
  :host {
    --sensor-ring-temperature-color: #2E93fA;
    --sensor-ring-conductivity-color: #00D2FF;
    --sensor-ring-dli-color: #FFB900;
    --sensor-ring-health-color: #FF4560;
    --sensor-ring-water_consumption-color: #775DD0;
    --sensor-ring-fertilizer_consumption-color: #00D2FF;
    --sensor-ring-power_consumption-color: #FEB019;
    --sensor-ring-moisture-color: #00E396;
    --sensor-ring-illuminance-color: #CED4DC;
    --sensor-ring-humidity-color: #008FFB;
  }
`; 