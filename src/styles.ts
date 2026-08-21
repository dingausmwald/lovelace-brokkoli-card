import { css } from 'lit';

export const style = css`
  /* ===== Base Card Styles ===== */
  ha-card {
    display: flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
    max-height: 100%;
    overflow: visible !important;
  }

  .card-margin-top {
    margin-top: 32px;
  }

  /* ===== Header Section ===== */
  .header,
  .header-compact {
    position: relative;
  }

  .header {
    padding-top: 8px;
    height: 100px;
  }

  .header-compact {
    padding-top: 4px;
    height: 55px;
  }

  /* Menu Button */
  .menu-button {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    z-index: 3;
  }

  .menu-button ha-icon {
    color: var(--primary-text-color);
    opacity: 0.7;
  }

  .menu-button:hover ha-icon {
    opacity: 1;
  }

  /* Flyout Menu */
  .flyout-menu {
    position: absolute;
    top: 40px;
    right: 8px;
    background: var(--card-background-color);
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    z-index: 10;
    overflow: hidden;
    min-width: 180px;
  }

  .flyout-menu-item {
    padding: 10px 16px;
    cursor: pointer;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .flyout-menu-item:hover {
    background-color: var(--secondary-background-color);
  }

  .flyout-menu-item ha-icon {
    color: var(--primary-text-color);
    opacity: 0.9;
  }

  .flyout-menu-divider {
    height: 1px;
    background-color: var(--divider-color);
    margin: 4px 0;
  }

  /* Plant Dropdown Styles */
  .plant-dropdown-container {
    position: relative;
    display: block;
    margin: 4px 0 0 132px;
    color: #8c96a5;
    text-transform: capitalize;
  }
  
  .clickable-plants {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }

  .clickable-plants:hover {
    text-decoration: underline;
  }

  .plant-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    background: var(--card-background-color);
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    z-index: 100;
    overflow: hidden;
    min-width: 200px;
    max-height: 300px;
    overflow-y: auto;
    margin-top: 5px;
  }

  .plant-dropdown-item {
    padding: 10px 16px;
    cursor: pointer;
    transition: background-color 0.2s;
    border-bottom: 1px solid var(--divider-color);
  }

  .plant-dropdown-item:last-child {
    border-bottom: none;
  }

  .plant-dropdown-item:hover {
    background-color: var(--secondary-background-color);
  }

  .plant-dropdown-name {
    font-weight: 500;
    margin-bottom: 4px;
  }

  .plant-dropdown-info {
    font-size: 0.85em;
    opacity: 0.8;
  }

  /* Popup Dialog */
  .popup-dialog {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  .popup-content {
    background: var(--card-background-color);
    border-radius: 8px;
    padding: 24px;
    min-width: 300px;
    max-width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  }

  .popup-title {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 20px;
    color: var(--primary-text-color);
    border-bottom: 1px solid var(--divider-color);
    padding-bottom: 10px;
  }

  .popup-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 24px;
  }

  .popup-buttons button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.2s;
  }

  .popup-buttons button:first-child {
    background-color: var(--secondary-background-color);
    color: var(--primary-text-color);
  }

  .popup-buttons button:last-child {
    background-color: var(--primary-color);
    color: var(--text-primary-color);
  }

  .popup-buttons button:hover {
    opacity: 0.9;
  }

  .popup-buttons button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .popup-buttons button.danger {
    background-color: var(--error-color);
    color: white;
  }

  /* Form Fields */
  .form-field {
    margin-bottom: 16px;
  }

  .form-field label {
    display: block;
    margin-bottom: 6px;
    color: var(--primary-text-color);
    font-weight: 500;
  }

  .form-field .input-group {
    display: flex;
    gap: 8px;
  }

  .form-field .input-group input {
    flex: 1;
  }

  /* Sensor Replacement Styles */
  .form-field select {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    background: var(--card-background-color);
    color: var(--primary-text-color);
    font-size: 14px;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 12px;
    padding-right: 30px;
  }

  .form-field select:focus {
    outline: none;
    border-color: var(--primary-color);
  }

  /* Header Image Container */
  .image-container {
    position: relative;
    width: 100px;
    height: 100px;
    float: left;
    margin: -16px 16px 0;
  }

  .header-compact .image-container {
    width: 50px;
    height: 50px;
    margin: 0 8px;
  }

  /* Header Image */
  .image-container .back-image,
  .image-container .front-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: var(--ha-card-box-shadow, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2));
  }

  .image-container .back-image {
    z-index: 1;
  }

  .image-container .front-image {
    z-index: 2;
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }

  .image-container .front-image.fade {
    opacity: 0;
  }

  .header > img {
    width: 100px;
    height: 100px;
    margin: -16px 16px 0;
  }

  .header-compact > img {
    width: 50px;
    height: 50px;
    margin: 0 8px;
  }

  .header > img.fade,
  .header-compact > img.fade {
    opacity: 0;
  }

  /* Header Text */
  .header > #name,
  .header-compact > #name {
    font-weight: bold;
    text-transform: capitalize;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .header > #name {
    width: fit-content;
    max-width: calc(100% - 150px);
    margin: 16px 0 0 132px;
  }

  .header-compact > #name {
    width: calc(100% - 74px);
    margin-top: 8px;
  }

  #name ha-icon {
    color: rgb(240, 163, 163);
  }

  .header > #species {
    text-transform: capitalize;
    color: #8c96a5;
    display: block;
    margin: 4px 0 0 132px;
  }

  .header-compact > #species {
    text-transform: capitalize;
    color: #8c96a5;
    display: block;
    margin: 4px 0 0 0;
  }

  .header-compact .plant-dropdown-container {
    margin: 4px 0 0 0;
  }

  /* Header Status */
  #battery {
    float: right;
    margin: -15px 16px 0 0;
  }

  .header > #status-container {
    display: flex;
    gap: 16px;
    margin: 4px 0 0 132px;
  }

  .header > #status-container span {
    color: #8c96a5;
    display: flex;
    align-items: center;
    font-size: 0.9em;
  }

  .header > #metrics-container {
    display: none;
  }

  .header > #metrics-container ha-icon,
  .header > #status-container ha-icon {
    margin-right: 4px;
  }

  /* ===== Divider ===== */
  .divider {
    height: 1px;
    background-color: #727272;
    opacity: 0.25;
    margin: 0 8px;
  }

  /* ===== Attributes Section ===== */
  .attributes {
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
  }

  .attributes:first-child {
    margin-top: 16px;
  }

  .attributes.width-100 {
    padding: 2px;
  }

  /* Container für Full-Width Items */
  .attributes.has-full-width-item {
    display: block;
  }

  /* Basis-Styling für alle Attribute */
  .attribute {
    display: flex;
    align-items: center;
    width: 50%;
    box-sizing: border-box;
    position: relative;
  }

  /* Attribute in voller Breite */
  .attribute.width-100,
  .attribute.full-width {
    width: 100%;
  }

  /* Header in Attributen */
  .attribute .header {
    margin-left: auto;
    min-width: 20px;
    height: auto;
    padding-top: 0;
  }

  /* Header in Width-100 ausblenden, aber in Full-Width anzeigen */
  .attribute.width-100 .header {
    display: none;
  }

  .attribute.width-100.full-width .header {
    display: flex;
  }

  /* Icon-Styling */
  .attribute ha-icon {
    margin-right: 8px;
  }

  /* Cursor für klickbare Health-Bar Icons */
  .attribute[data-attribute="health"] ha-icon {
    cursor: pointer;
  }

  /* ===== Meter Styles ===== */
  .meter {
    height: 8px;
    background-color: var(--primary-background-color);
    border-radius: 2px;
    display: inline-grid;
    overflow: hidden;
  }

  .meter.red {
    flex-grow: 1;
    margin-right: 5px;
  }

  .meter.green {
    flex-grow: 10;
    margin-right: 8px;
  }

  /* Spezielle Styles für Health-Bar-Meter */
  .attribute[data-attribute="health"] .meter.green {
    display: grid; 
    grid-template-columns: repeat(10, 1fr); 
    column-gap: 5px; 
    position: relative;
    background-color: transparent;
  }

  /* Health-Bar in Full-Width */
  .attribute.full-width[data-attribute="health"] .meter.green {
    flex: 1;
    width: 100%;
  }

  /* Health-Segmente */
  .attribute[data-attribute="health"] .health-segment {
    grid-row: 1;
    border-radius: 2px;
    height: 8px;
  }

  /* Range-Input für Health-Bar */
  .attribute[data-attribute="health"] .meter.green input[type="range"] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.0001;
    cursor: pointer;
    margin: 0;
    padding: 0;
  }

  .meter > span {
    grid-row: 1;
    grid-column: 1;
    height: 100%;
  }

  .meter > .good {
    background-color: rgba(43, 194, 83, 1);
  }

  .meter > .bad {
    background-color: rgba(240, 163, 163);
  }

  .meter > .unavailable {
    background-color: rgba(158, 158, 158, 1);
  }

  /* ===== Tooltip Styles ===== */
  .tooltip {
    position: relative;
    cursor: pointer;
    overflow: visible !important;
    z-index: 2;
  }

  .tooltip .tip {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    padding: 6px 10px;
    bottom: 150%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(97, 97, 97, 0.9);
    color: white;
    white-space: normal;
    z-index: 99999;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    pointer-events: none;
    max-width: 300px;
    min-width: 150px;
    text-align: center;
    word-break: normal;
    overflow-wrap: break-word;
    transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
    transition-delay: 0s;
  }

  .tooltip .tip::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: rgba(97, 97, 97, 0.9) transparent transparent transparent;
  }

  .battery.tooltip .tip {
    bottom: 180%;
    min-width: unset;
  }

  .tooltip:hover .tip {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.3s;
  }

  /* .tooltip ist positioniert und hat einen z-index -- damit oeffnet es einen
     eigenen Stapelkontext, und die 99999 des .tip zaehlen nur INNERHALB davon.
     Nach aussen galt die 2 der Kachel, also lag der Tooltip unter Menue-Button
     (3), Flyout (10) und Dropdown (100) und sah abgeschnitten aus. Angehoben
     wird nur beim Hovern: im Ruhezustand bleiben die Balken unter einem
     geoeffneten Menue. */
  .tooltip:hover {
    z-index: 500;
  }

  /* Ensure tooltips don't get cut off at the edges */
  .attributes .tooltip:first-child .tip {
    left: 20%;
    transform: translateX(0);
  }

  .attributes .tooltip:first-child .tip::after {
    left: 10%;
  }

  .attributes .tooltip:last-child .tip {
    left: 80%;
    transform: translateX(-100%);
  }

  .attributes .tooltip:last-child .tip::after {
    left: 90%;
  }
  
  /* Special handling for compact mode */
  .attributes.width-100 .tooltip .tip {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .attributes.width-100 .tooltip .tip::after {
    left: 50%;
  }

  /* Special handling for full-width items */
  .attributes.has-full-width-item .tooltip .tip {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .attributes.has-full-width-item .tooltip .tip::after {
    left: 50%;
  }

  /* ===== Options Styles ===== */
  .options-container {
    display: flex;
    justify-content: space-between;
    height: 16px;
    line-height: 0;
  }

  /* Wenn options-container das erste Element ist */
  .options-container:first-child {
    margin-top: 0;
  }

  .options-section {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 2px 0;
    transition: background-color 0.2s ease-in-out;
  }

  .options-section:hover {
    background-color: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.05);
  }

  .options-section ha-icon {
    color: var(--primary-text-color);
    opacity: 0.5;
    width: 12px;
    height: 12px;
    --mdc-icon-size: 12px;
    transform: rotate(0deg);
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, color 0.3s ease-in-out;
  }

  .options-section.expanded ha-icon {
    opacity: 1;
    transform: rotate(180deg);
    color: var(--primary-color, #03a9f4);
  }

  /* ===== Expanded Content Styles ===== */
  .expanded-content {
    display: none;
    padding: 0 8px;
    box-sizing: border-box;
    width: 100%;
    overflow-x: hidden;
  }

  .expanded-content.show {
    display: block;
    animation: fadeIn 0.3s ease-in-out;
    margin: 8px 0;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Wenn expanded-content das erste Element ist */
  .expanded-content.show:first-child {
    margin-top: 16px;
  }

  .expanded-content.show flower-graph,
  .expanded-content.show flower-timeline,
  .expanded-content.show flower-consumption,
  .expanded-content.show flower-history {
    width: 100%;
    max-width: 100%;
    display: block;
  }

  /* Schmale Scrollbar für Webkit-Browser (Chrome, Safari, etc.) */
  .expanded-content.show::-webkit-scrollbar {
    width: 6px;
  }

  .expanded-content.show::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 3px;
  }

  .expanded-content.show::-webkit-scrollbar-track {
    background: transparent;
  }

  /* ===== Plant Details Styles ===== */
  .plant-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin: 8px 0;
    padding: 0 8px;
    box-sizing: border-box;
  }

  /* Wenn plant-details das erste Element ist */
  .plant-details:first-child {
    margin-top: 16px;
    padding-top: 8px;
  }

  .detail-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px;
    background: var(--card-background-color, #fff);
    border-radius: 4px;
  }

  .detail-item.full-width {
    grid-column: 1 / -1;
  }

  .detail-item .label {
    font-size: 0.8em;
    color: var(--primary-text-color);
    opacity: 0.7;
  }

  .detail-item .value {
    font-size: 0.9em;
    word-break: break-word;
    white-space: pre-wrap;
  }

  .detail-item .link {
    color: var(--primary-color);
    text-decoration: none;
  }

  .detail-item .link:hover {
    text-decoration: underline;
  }

  .detail-item ha-icon {
    color: var(--primary-text-color);
    opacity: 0.7;
    width: 20px;
    height: 20px;
  }

  @media (max-width: 600px) {
    .header > .unit {
      display: none;
    }
  }

  /* ===== Timeline Container Styles ===== */
  .timeline-container {
    width: 100%;
    overflow-x: hidden;
    padding: 0 8px;
    box-sizing: border-box;
    margin: 8px 0;
  }

  /* Wenn der Container das erste Element ist */
  .timeline-container:first-child {
    margin-top: 16px;
  }

  .timeline-container flower-graph,
  .timeline-container flower-timeline {
    width: 100%;
    max-width: 100%;
    display: block;
  }

  /* ===== Component Container Styles ===== */
  .component-container {
    width: 100%;
    overflow-x: hidden;
    padding: 0 8px;
    box-sizing: border-box;
    margin: 0 0 8px 0;
  }

  /* Wenn der Container das erste Element ist */
  .component-container:first-child {
    margin-top: 0;
  }

  .component-container flower-consumption,
  .component-container flower-history {
    width: 100%;
    max-width: 100%;
    display: block;
  }
`;
