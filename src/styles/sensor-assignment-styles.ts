import { css } from 'lit';

// Eigenständiges Farbschema für diese Card — bewusst NICHT die
// --sensor-ring-*-color-Variablen aus area-styles.ts wiederverwendet,
// da die dort für Graph/Area-Ringe historisch gewachsenen Farben
// (z.B. temperature=blau, illuminance=grau) nicht der hier gewünschten,
// intuitiven Zuordnung entsprechen (temperature=rot, illuminance=gelb).
export const sensorAssignmentStyles = css`
  :host {
    --sa-color-temperature: #e74c3c;
    --sa-color-illuminance: #f1c40f;
    --sa-color-humidity: #3498db;
    --sa-color-moisture: #16a085;
    --sa-color-conductivity: #9b59b6;
    --sa-color-power_consumption: #e67e22;
    --sa-color-ph: #2ecc71;

    display: block;
  }

  .sa-container {
    display: flex;
    gap: 32px;
    padding: 16px;
    align-items: flex-start;
  }

  .sa-column {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .sa-column-title {
    font-size: 1.1em;
    font-weight: 500;
    margin-bottom: 4px;
    color: var(--primary-text-color);
  }

  /* Geräte- und Entitäten-Bereich sind unabhängig voneinander scrollbar,
     statt die ganze Spalte beliebig wachsen zu lassen. */
  .sa-scroll-section {
    max-height: 340px;
    overflow-y: auto;
    padding-right: 4px;
  }

  .sa-scroll-section-tall {
    max-height: 720px;
  }

  .sa-section-divider {
    height: 1px;
    background: var(--divider-color, #ccc);
    margin: 4px 0;
  }

  .sa-tiles {
    display: flex;
    flex-wrap: wrap;
    gap: 28px;
    justify-content: flex-start;
  }

  .sa-tiles-vertical {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    gap: 20px;
  }

  /* Ein Tile besteht aus großem Kreis (Foto/Icon) + kleinen Satelliten-
     Kreisen für jeden Sensortyp, angeordnet per JS-berechnetem transform. */
  .sa-tile {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }

  /* Pflanze + ihre angedockten Geräte-Kopien nebeneinander in einer Reihe —
     "Kopie rechts neben der Pflanze", damit die farbigen Satelliten-Punkte
     der Pflanze und der Kopie sich optisch als zusammengehörig lesen. */
  .sa-plant-row {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 4px;
    border-radius: 12px;
    transition: background-color 0.15s ease;
  }

  .sa-plant-row.sa-drop-target {
    background-color: var(--primary-color, #03a9f4);
    opacity: 0.85;
  }

  .sa-tile-orbit {
    position: relative;
    flex-shrink: 0;
  }

  .sa-tile-main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    background-color: var(--card-background-color, #fff);
    border: 2px solid var(--divider-color, #ccc);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    cursor: grab;
    user-select: none;
    z-index: 2;
  }

  .sa-tile-main.sa-dragging {
    cursor: grabbing;
    opacity: 0.5;
  }

  .sa-tile-main ha-icon {
    --mdc-icon-size: 28px;
    color: var(--secondary-text-color);
  }

  .sa-satellite {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-top: -12px;
    margin-left: -12px;
    border-radius: 50%;
    background: var(--card-background-color, #fff);
    border: 2px solid var(--disabled-text-color, #bbb);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
  }

  .sa-satellite ha-icon {
    --mdc-icon-size: 13px;
    color: var(--disabled-text-color, #bbb);
    transition: color 0.2s ease;
  }

  .sa-satellite.sa-active {
    background: var(--sa-type-color);
    border-color: var(--sa-type-color);
  }

  .sa-satellite.sa-active ha-icon {
    color: white;
  }

  .sa-satellite.sa-clickable {
    cursor: pointer;
  }

  .sa-tile-name {
    font-size: 0.8em;
    text-align: center;
    color: var(--primary-text-color);
    max-width: 96px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Angedockte Kopien zugewiesener Geräte neben einer Pflanze — jede Kopie
     ist eine verkleinerte Version der Sensoren-Kachel (großes Icon +
     Satelliten), damit die farbig hervorgehobenen Typ-Punkte optisch mit
     denen der Pflanze "verbunden" wirken. */
  .sa-docked-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: flex-start;
  }

  .sa-docked-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
  }

  .sa-docked-name {
    font-size: 0.65em;
    text-align: center;
    color: var(--secondary-text-color);
    max-width: 56px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .sa-empty-hint {
    color: var(--secondary-text-color);
    font-style: italic;
    font-size: 0.9em;
  }
`;
