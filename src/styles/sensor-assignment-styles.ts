import { css } from 'lit';

// Die Typ-Farben stehen als TS-Konstante in sensor-assignment-utils.ts und
// werden inline gesetzt, nicht als CSS-Variablen: das Drag-Overlay hängt an
// <body> und sieht die Variablen dieses Shadow-Roots nicht.
//
// Formensprache, damit Geräte und einzelne Entitäten auf einen Blick
// auseinanderzuhalten sind:
//   abgerundetes Quadrat = HA-Gerät (bündelt mehrere Messwerte, neutral)
//   Kreis in Typfarbe     = einzelne Entität (ist selbst ein Messwert)
// Ein Typ-Symbol taucht deshalb pro Quelle nur EINMAL auf — als farbiger Chip
// bzw. am Stiel, nie zusätzlich noch einmal in Graustufen auf der Kachel.
export const sensorAssignmentStyles = css`
  /* Ohne border-box zählt der Rand ZUSÄTZLICH zur angegebenen Breite. Alle
     Kreise hier werden über negative Margins bzw. transform auf ihren
     Mittelpunkt gesetzt (z.B. .sa-core: width 68, margin-left -34) — mit einem
     3px-Rand landet der Mittelpunkt dann 3px daneben. Genau das hat das
     Pflanzenbild gegenüber Blütenmitte und Namenspille verschoben. */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Die Karte soll ihre in Lovelace eingestellte Höhe wirklich ausfüllen.
     Dafür muss die Höhe lückenlos durchgereicht werden — jedes Glied der Kette
     braucht height:100% bzw. flex:1 UND min-height:0, sonst wächst ein
     Flex-Kind auf seine Inhaltshöhe und der Scrollbereich landet nicht dort,
     wo er hingehört. */
  :host {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 0;
  }

  .sa-container {
    display: flex;
    flex: 1;
    min-height: 0;
    gap: 16px;
    padding: 4px 16px 12px;
  }

  .sa-column {
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
  }

  .sa-column-sources {
    position: relative;
    flex: 0 0 clamp(190px, 28%, 320px);
    border-right: 1px solid var(--divider-color, #e0e0e0);
    padding-right: 12px;
    border-radius: 10px;
    transition: background-color 0.15s ease, box-shadow 0.15s ease;
  }

  /* Gegenrichtung des Ziehens: ein Blatt, das hier landet, wird gelöst. */
  .sa-column-sources.sa-drop-active {
    background-color: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
    box-shadow: inset 0 0 0 2px var(--error-color, #db4437);
  }

  /* Eigener Hintergrund, sonst liegt der Hinweis unlesbar auf der Liste. */
  .sa-drop-hint {
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translateX(-50%);
    padding: 5px 12px;
    border-radius: 999px;
    white-space: nowrap;
    background: var(--error-color, #db4437);
    color: #fff;
    font-size: 0.78em;
    font-weight: 500;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.15s ease;
    pointer-events: none;
  }

  .sa-drop-active .sa-drop-hint {
    opacity: 1;
  }

  .sa-column-garden {
    flex: 1 1 auto;
  }

  /* --- Werkzeugleiste (Suche + Typ-Filter) -------------------------------
     Liegt AUSSERHALB von .sa-scroll, damit sie beim Scrollen stehen bleibt. */
  .sa-toolbar {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 6px 4px 8px;
  }

  .sa-search {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0 8px;
    border-radius: 999px;
    background: var(--secondary-background-color, rgba(0, 0, 0, 0.06));
  }

  .sa-search > ha-icon {
    --mdc-icon-size: 17px;
    color: var(--secondary-text-color);
    flex: 0 0 auto;
  }

  .sa-search input {
    flex: 1;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    padding: 7px 0;
    font-family: inherit;
    font-size: 0.9em;
    color: var(--primary-text-color);
  }

  /* Das native Kreuz von type=search doppelt unseren eigenen Knopf. */
  .sa-search input::-webkit-search-cancel-button {
    display: none;
  }

  .sa-icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
    color: var(--secondary-text-color);
  }

  .sa-icon-button:hover:not(:disabled) {
    background: var(--divider-color, rgba(0, 0, 0, 0.12));
  }

  .sa-icon-button:disabled {
    opacity: 0.3;
    cursor: default;
  }

  .sa-icon-button ha-icon {
    --mdc-icon-size: 15px;
  }

  /* Sieben Chips plus Reset müssen in eine schmale Spalte passen, ohne
     umzubrechen — sonst kostet die Leiste eine zweite Zeile Höhe. */
  .sa-type-filter {
    display: flex;
    align-items: center;
    gap: 3px;
    flex-wrap: nowrap;
  }

  /* Ungewählt: nur der farbige Umriss, damit die Leiste ruhig bleibt.
     Gewählt: gefüllt — der Filter ist dann sichtbar aktiv. */
  .sa-filter-chip {
    flex: 0 0 auto;
    width: 20px;
    height: 20px;
    padding: 0;
    border-radius: 50%;
    border: 1.5px solid var(--sa-filter-color);
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.55;
    transition: opacity 0.12s ease, background-color 0.12s ease;
  }

  .sa-filter-chip ha-icon {
    --mdc-icon-size: 12px;
    color: var(--sa-filter-color);
  }

  .sa-filter-chip:hover {
    opacity: 1;
  }

  .sa-filter-chip.sa-filter-on {
    opacity: 1;
    background: var(--sa-filter-color);
  }

  .sa-filter-chip.sa-filter-on ha-icon {
    color: #fff;
  }

  .sa-filter-reset {
    margin-left: auto;
  }

  /* Überschreiben-Schalter. Steht bewusst kräftiger da als die Filter-Chips
     daneben: er ändert, ob eine bestehende Zuweisung ersetzt wird, und darf
     nicht übersehen werden. Eingeschaltet wird er zusätzlich gefüllt. */
  .sa-overwrite {
    flex: 0 0 auto;
    margin-left: 2px;
    color: var(--primary-text-color);
    border: 1.5px solid var(--divider-color, #ccc);
  }

  .sa-overwrite-on,
  .sa-overwrite-on:hover:not(:disabled) {
    background: var(--error-color, #db4437);
    border-color: var(--error-color, #db4437);
    color: #fff;
  }

  .sa-selection-bar {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 4px 4px 10px;
    border-radius: 999px;
    background: var(--primary-color, #03a9f4);
    color: #fff;
    font-size: 0.76em;
  }

  .sa-selection-bar span {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .sa-selection-bar .sa-icon-button {
    color: #fff;
  }

  .sa-selection-bar .sa-icon-button:hover {
    background: rgba(255, 255, 255, 0.25);
  }

  /* Genau EIN Scrollbereich pro Spalte — vorher hatte jede Sektion ihren
     eigenen Kasten mit fester max-height, was zu mehreren ineinander
     verschachtelten Scrollbalken und einer von der Kartenhöhe entkoppelten
     Innenhöhe führte. */
  .sa-scroll {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 4px;
  }

  .sa-section-title {
    position: sticky;
    top: 0;
    z-index: 5;
    background: var(--ha-card-background, var(--card-background-color, #fff));
    padding: 8px 0 6px;
    margin-bottom: 6px;
    font-size: 0.78em;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--secondary-text-color);
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
  }

  .sa-section-title ~ .sa-section-title {
    margin-top: 14px;
  }

  /* --- Quellen (linke Spalte) --------------------------------------------
     Kompakte Listenzeilen statt großer Kacheln: die Spalte ist schmal und soll
     möglichst ohne Scrollen auskommen. touch-action: pan-y lässt vertikales
     Scrollen zu und gibt nur horizontale Gesten an das Drag-Handling weiter. */
  .sa-source {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 8px;
    border-radius: 10px;
    cursor: grab;
    user-select: none;
    touch-action: pan-y;
    transition: background-color 0.15s ease, opacity 0.15s ease;
  }

  .sa-source:hover {
    background-color: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
  }

  .sa-source-dragging {
    opacity: 0.35;
  }

  /* Feste Breite für die Symbolspalte, damit die Namen fluchten, obwohl
     Geräte-Kästchen und Entitäts-Punkte unterschiedlich groß sind. */
  .sa-source-avatar-slot {
    flex: 0 0 38px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sa-avatar {
    background-size: cover;
    background-position: center;
    background-color: var(--card-background-color, #fff);
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }

  .sa-avatar-device {
    width: 38px;
    height: 38px;
    border-radius: 11px;
    border: 2px solid var(--divider-color, #ccc);
  }

  .sa-source-used .sa-avatar-device {
    border-color: var(--primary-color, #03a9f4);
  }

  .sa-avatar-device ha-icon {
    --mdc-icon-size: 20px;
    color: var(--secondary-text-color);
  }

  /* Bei einer Entität ist das Avatar selbst das farbige Typ-Symbol — und
     bleibt klein, in derselben Größe wie die Typ-Chips und die Icons am Stiel. */
  .sa-avatar-entity {
    border-radius: 50%;
    border: none;
  }

  .sa-source-avatar-slot .sa-avatar-entity {
    width: 26px;
    height: 26px;
  }

  .sa-avatar-entity ha-icon {
    --mdc-icon-size: 14px;
    color: #fff;
  }

  .sa-glyph {
    width: 24px;
    height: 24px;
    color: var(--secondary-text-color);
  }

  /* Das Avatar einer Entität ist gleichzeitig ihr Auswahlknopf — dieselbe
     Rolle, die bei Geräten die kleinen Chips haben. */
  .sa-avatar-button {
    flex: 0 0 auto;
    display: flex;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.12s ease, box-shadow 0.12s ease;
  }

  .sa-avatar-button:hover {
    transform: scale(1.06);
  }

  .sa-avatar-selected {
    transform: scale(1.06);
    box-shadow:
      0 0 0 2px var(--ha-card-background, var(--card-background-color, #fff)),
      0 0 0 4px currentColor,
      0 1px 5px rgba(0, 0, 0, 0.3);
  }

  .sa-avatar-selected:hover {
    transform: scale(1.12);
  }

  .sa-source-body {
    flex: 1;
    min-width: 0;
  }

  .sa-source-name {
    font-size: 0.88em;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Etwas Luft nach oben/unten, damit die vergrößerten ausgewählten Chips
     nicht an der Zeile darüber kleben. */
  .sa-source-types {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
    margin-top: 4px;
    min-height: 20px;
  }

  /* Anklickbar: wählt diesen einen Sensortyp der Quelle aus. Ausgewählte Typen
     werden größer und bekommen einen Ring — beim Ziehen wandern genau sie mit,
     über mehrere Quellen hinweg. */
  .sa-chip {
    width: 16px;
    height: 16px;
    padding: 0;
    border: 1.5px solid transparent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.12s ease, box-shadow 0.12s ease;
  }

  .sa-chip ha-icon {
    --mdc-icon-size: 10px;
    color: #fff;
  }

  .sa-chip:hover {
    transform: scale(1.15);
  }

  /* Nicht aktiv: nur der farbige Umriss. Der Typ bleibt sichtbar und lässt sich
     per Klick dazunehmen, geht beim Ziehen aber nicht mit. */
  .sa-chip-off ha-icon {
    color: currentColor;
  }

  .sa-chip-off {
    opacity: 0.75;
  }

  .sa-chip-off:hover {
    opacity: 1;
  }

  .sa-chip-selected {
    transform: scale(1.4);
    box-shadow:
      0 0 0 2px var(--ha-card-background, var(--card-background-color, #fff)),
      0 0 0 3.5px currentColor,
      0 1px 4px rgba(0, 0, 0, 0.35);
  }

  .sa-chip-selected:hover {
    transform: scale(1.5);
  }

  .sa-source-selected {
    background-color: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
  }

  /* --- Garten (rechte Spalte) --------------------------------------------
     Jede Pflanze ist eine "Blüte": Kern = Pflanze, Blätter = zugewiesene
     Quellen auf einer Umlaufbahn, farbige Typ-Icons sitzen auf dem Stiel
     dazwischen. Positionen werden pro Frame per transform gesetzt (Feder-
     Physik), das Layout hier gibt nur die Zellgröße und die Ankerpunkte vor. */
  .sa-garden {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    justify-items: center;
    /* Die Blätter laufen bis an den Zellrand, ihre Beschriftung ragt noch ein
       Stück darüber hinaus — ohne Zeilenabstand stößt sie an die Blüte darunter. */
    gap: 26px 4px;
  }

  .sa-flower {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .sa-flower-canvas {
    position: relative;
    width: 290px;
    height: 290px;
    flex: 0 0 auto;
  }

  /* Einrast-Hinweis beim Ziehen — als Pseudo-Element, damit sich die
     Deckkraft animieren lässt, ohne die Farbe hart zu codieren. */
  .sa-flower-canvas::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: radial-gradient(circle at center, var(--primary-color, #03a9f4) 0%, transparent 62%);
    opacity: 0;
    transition: opacity 0.18s ease;
    pointer-events: none;
  }

  .sa-flower-snap .sa-flower-canvas::before {
    opacity: 0.22;
  }

  .sa-stems {
    position: absolute;
    inset: 0;
    overflow: visible;
    pointer-events: none;
    z-index: 1;
  }

  .sa-core {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 68px;
    height: 68px;
    margin: -34px 0 0 -34px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    background-color: var(--card-background-color, #fff);
    border: 3px solid var(--divider-color, #ccc);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.22);
    z-index: 3;
  }

  .sa-core ha-icon {
    --mdc-icon-size: 32px;
    color: var(--secondary-text-color);
  }

  /* Anker so gesetzt, dass ein transform von (0,0) den MITTELPUNKT der
     Blattkachel exakt auf die Blütenmitte legt — die Physik rechnet in
     Koordinaten relativ zum Zentrum. */
  .sa-leaf {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 84px;
    height: 44px;
    margin: -22px 0 0 -42px;
    z-index: 2;
    cursor: grab;
    user-select: none;
    touch-action: none;
    will-change: transform;
  }

  .sa-leaf-dragging {
    opacity: 0.3;
  }

  /* Über den Mittelpunkt positioniert statt über eine feste Größe: Geräte- und
     Entitäts-Blätter sind unterschiedlich groß, sitzen aber beide exakt auf
     dem Punkt, den die Feder-Physik ausrechnet. */
  .sa-leaf-avatar {
    position: absolute;
    left: 50%;
    top: 22px;
    transform: translate(-50%, -50%);
    background-size: cover;
    background-position: center;
    background-color: var(--card-background-color, #fff);
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }

  .sa-leaf-avatar.sa-avatar-device {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    border: 2px solid var(--divider-color, #ccc);
  }

  .sa-leaf-avatar .sa-glyph {
    width: 26px;
    height: 26px;
  }

  /* Eine Entität bleibt so klein wie die Typ-Icons am Stiel — sie ist
     dasselbe Element, nur am Ende des Stiels statt darauf. */
  .sa-leaf-avatar.sa-avatar-entity {
    width: 24px;
    height: 24px;
  }

  .sa-leaf-avatar.sa-avatar-entity ha-icon {
    --mdc-icon-size: 13px;
  }

  /* Steht das Blatt oberhalb der Blütenmitte, wandert seine Beschriftung nach
     oben — sonst läge sie genau auf dem Stiel und den Typ-Icons darunter.
     Die Klasse setzt die Animationsschleife anhand der aktuellen Position. */
  .sa-leaf-name {
    position: absolute;
    left: 0;
    right: 0;
    top: 47px;
    font-size: 0.62em;
    line-height: 1.15;
    text-align: center;
    color: var(--secondary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    pointer-events: none;
  }

  .sa-leaf-above .sa-leaf-name {
    top: auto;
    bottom: 47px;
  }

  /* Bei Entitäts-Blättern liegt die Beschriftung zunächst mittig auf dem
     Ankerpunkt; die Animationsschleife schiebt sie von dort radial nach außen
     (siehe _placeLeafName), weil der Punkt selbst auf dem inneren Ring sitzt.
     Schmaler und zweizeilig: ein waagerechtes Blatt hat auf seinem Ring nur
     rund 70px Platz bis zum Zellrand, eine einzeilige Beschriftung würde in
     die Nachbarblüte laufen. */
  .sa-leaf-entity .sa-leaf-name,
  .sa-leaf-entity.sa-leaf-above .sa-leaf-name {
    top: 22px;
    bottom: auto;
    left: 50%;
    right: auto;
    width: 64px;
    /* Kein margin-top: die senkrechte Zentrierung macht ein translateY(-50%)
       in _placeLeafName() — nur das stimmt für ein- UND mehrzeilige Texte. */
    margin: 0 0 0 -32px;
    font-size: 0.58em;
    line-height: 1.15;
    white-space: normal;
    overflow-wrap: anywhere;
  }

  .sa-type {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 24px;
    height: 24px;
    margin: -12px 0 0 -12px;
    border-radius: 50%;
    border: 2px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 4;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.28);
    will-change: transform;
  }

  .sa-type ha-icon {
    --mdc-icon-size: 13px;
    color: #fff;
  }

  .sa-type:hover {
    filter: brightness(1.15);
  }

  /* Noch nicht belegter Typ: nur der farbige Umriss, gleiche Machart wie die
     Filter-Chips über der Quellenliste. So ist auch bei einer Pflanze ohne
     jede Zuweisung sichtbar, welche Messwerte sie aufnehmen kann. */
  .sa-type-open {
    background: var(--ha-card-background, var(--card-background-color, #fff));
    border-width: 1.5px;
    cursor: default;
    box-shadow: none;
    opacity: 0.5;
    z-index: 3;
  }

  .sa-type-open ha-icon {
    color: currentColor;
  }

  .sa-type-open:hover {
    opacity: 0.85;
    filter: none;
  }

  /* Namenspille direkt am unteren Rand des Pflanzenbildes — gleiche Machart
     wie .entity-name in der Area-Card (Pille mit Kartenhintergrund, leicht
     über den Bildrand geschoben), damit beide Karten gleich aussehen. */
  .sa-flower-name {
    position: absolute;
    left: 50%;
    top: calc(50% + 26px);
    transform: translateX(-50%);
    z-index: 5;
    max-width: 150px;
    padding: 1px 7px;
    border-radius: 10px;
    background-color: var(--ha-card-background, var(--card-background-color, #fff));
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.14);
    opacity: 0.92;
    font-size: 0.8em;
    text-align: center;
    color: var(--primary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    pointer-events: none;
  }

  /* --- Listenansicht ------------------------------------------------------
     Pflanze links, darunter ihr Name; rechts je Sensortyp eine Zeile. Typen
     derselben Quelle stehen zusammen und laufen über geschwungene Verbinder
     auf EINE Quellenkachel zu — dieselbe Aussage wie die Stiele der Blüte. */
  .sa-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .sa-row {
    position: relative;
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 8px 12px;
    border-radius: 12px;
    transition: background-color 0.15s ease, box-shadow 0.15s ease;
  }

  /* Sanfte Trennung statt Rahmen: eine Linie, die zu beiden Enden ausläuft und
     den Rand gar nicht erst erreicht. */
  .sa-row + .sa-row::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 12%;
    right: 12%;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      var(--divider-color, #d0d0d0) 25%,
      var(--divider-color, #d0d0d0) 75%,
      transparent
    );
    pointer-events: none;
  }

  .sa-row-snap::before {
    opacity: 0;
  }

  .sa-row-snap {
    background-color: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
    box-shadow: inset 0 0 0 2px var(--primary-color, #03a9f4);
  }

  .sa-row-plant {
    flex: 0 0 96px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  /* In der Zeile steht das Pflanzensymbol im Fluss, nicht absolut zentriert
     wie im Blüten-Canvas. */
  .sa-row-plant .sa-core {
    position: static;
    margin: 0;
    flex: 0 0 auto;
  }

  .sa-row-name {
    font-size: 0.78em;
    font-weight: 500;
    text-align: center;
    color: var(--primary-text-color);
    max-width: 96px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Der Abstand macht die Gruppierung: 2px zwischen Typen derselben Quelle
     (steckt in LIST_STEP), 14px zwischen zwei Quellen. Deshalb braucht es
     keine gezeichneten Verbinder — genau wie in der Blüte. */
  .sa-row-groups {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .sa-group {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .sa-group-types {
    position: relative;
    flex: 0 0 24px;
    align-self: stretch;
  }

  /* Im Listenlayout sitzen die Typ-Icons an festen Zeilenhöhen statt auf einer
     Umlaufbahn — die Positionierung der Blüte muss hier zurückgesetzt werden. */
  .sa-type-list {
    left: 0;
    margin: 0;
    transform: none;
    will-change: auto;
  }

  .sa-group-source {
    display: flex;
    align-items: center;
    gap: 8px;
    /* Feste Symbolspalte wie in der Quellenliste, damit die Namen fluchten —
       Gerätekachel und Entitätspunkt sind unterschiedlich breit. */
    min-width: 0;
    padding: 4px 10px 4px 4px;
    border-radius: 999px;
    cursor: grab;
    user-select: none;
    touch-action: none;
    transition: background-color 0.15s ease;
  }

  .sa-group-source:hover {
    background-color: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
  }

  .sa-group-source-name {
    font-size: 0.85em;
    color: var(--primary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Ohne Kachel davor: auf dieselbe Höhe einrücken wie die Namen daneben. */
  .sa-group-source-empty {
    padding-left: 46px;
    font-size: 0.8em;
    font-style: italic;
    color: var(--secondary-text-color);
    cursor: default;
    opacity: 0.75;
  }

  .sa-group-source-empty:hover {
    background: transparent;
  }

  /* --- Phasenfilter --------------------------------------------------------
     Bewusst schlank gehalten: nur die sieben Wachstumsphasen als Umschalter,
     keine Nachbildung des Spaltenfilters der List-Card. */
  .sa-phase-filter {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
    padding: 0 4px 6px;
  }

  /* Zwei Filterreihen untereinander — ein kurzes Wort davor sagt, wonach die
     jeweilige Reihe filtert. */
  .sa-filter-label {
    align-self: center;
    margin-right: 2px;
    font-size: 0.66em;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--secondary-text-color);
  }

  .sa-phase-chip {
    padding: 3px 10px;
    border-radius: 999px;
    border: 1px solid var(--divider-color, #ccc);
    background: transparent;
    color: var(--secondary-text-color);
    font-family: inherit;
    font-size: 0.72em;
    cursor: pointer;
    transition: background-color 0.12s ease, color 0.12s ease, border-color 0.12s ease;
  }

  .sa-phase-chip:hover {
    border-color: var(--primary-color, #03a9f4);
  }

  .sa-phase-chip.sa-phase-on {
    background: var(--primary-color, #03a9f4);
    border-color: var(--primary-color, #03a9f4);
    color: #fff;
  }

  /* --- Ansichtsumschalter -------------------------------------------------- */
  .sa-toolbar-garden {
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  .sa-toolbar-garden .sa-search {
    flex: 1;
    min-width: 0;
  }

  .sa-view-switch {
    flex: 0 0 auto;
    display: flex;
    gap: 2px;
    padding: 2px;
    border-radius: 999px;
    background: var(--secondary-background-color, rgba(0, 0, 0, 0.06));
  }

  .sa-view-switch button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 26px;
    padding: 0;
    border: none;
    border-radius: 999px;
    background: transparent;
    cursor: pointer;
    color: var(--secondary-text-color);
  }

  .sa-view-switch button ha-icon {
    --mdc-icon-size: 17px;
  }

  .sa-view-switch .sa-view-on {
    background: var(--ha-card-background, var(--card-background-color, #fff));
    color: var(--primary-color, #03a9f4);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.18);
  }

  .sa-empty-hint {
    color: var(--secondary-text-color);
    font-style: italic;
    font-size: 0.9em;
    padding: 4px 0 8px;
  }

  @media (max-width: 700px) {
    .sa-container {
      flex-direction: column;
    }

    .sa-column-sources {
      flex: 0 0 38%;
      border-right: none;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      padding-right: 0;
      padding-bottom: 8px;
    }
  }
`;
