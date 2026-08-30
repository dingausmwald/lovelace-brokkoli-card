import { css, CSSResult } from 'lit';

export const legendStyles: CSSResult = css`
  :host {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
    width: 40px;
    background-color: var(--card-background-color, #fff);
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    max-height: calc(100% - 20px); /* Begrenzung nur an die Card */
    display: flex;
    flex-direction: column;
  }
  
  .legend-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    overflow: hidden;
  }
  
  .mode-toggle {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: var(--primary-color);
    color: white;
    border: none;
    margin: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 1;
    padding: 0;
    flex-shrink: 0; /* Verhindert Schrumpfen bei begrenztem Platz */
  }
  
  .mode-toggle ha-icon {
    --mdc-icon-size: 18px;
  }
  
  .mode-toggle:hover {
    transform: scale(1.05);
  }
  
  .content-container {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2px 0; /* Reduziertes Padding */
    -webkit-overflow-scrolling: touch; /* Verbessertes Scrollen für iOS */
    touch-action: pan-y; /* Erlaubt nur vertikales Scrollen */
  }
  
  .sensor-icons {
    display: flex;
    flex-direction: column;
    gap: 2px; /* Reduzierter Abstand zwischen Icons */
    width: 100%;
    align-items: center;
    padding-bottom: 0; /* Kein Padding am Ende */
  }
  
  .sensor-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: var(--secondary-background-color, #f5f5f5);
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
    flex-shrink: 0; /* Verhindert Schrumpfen bei begrenztem Platz */
    margin: 1px 0; /* Reduzierter Abstand */
  }
  
  .sensor-icon.selected {
    transform: scale(1.1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .sensor-icon ha-icon {
    --mdc-icon-size: 16px;
  }
  
  .sensor-icon:hover {
    transform: scale(1.05);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .sensor-icon.selected:hover {
    transform: scale(1.15);
  }
  
  .color-picker-section {
    margin-top: 2px; /* Reduzierter oberer Rand */
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 2px; /* Reduzierter Abstand */
    flex-shrink: 0;
    margin-bottom: 2px; /* Reduzierter unterer Rand */
  }
  
  .color-option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
  }
  
  .color-option input[type="color"] {
    width: 16px;
    height: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .color-preview {
    padding: 1px; /* Reduziertes Padding */
    background-color: var(--secondary-background-color, #f5f5f5);
    border-radius: 4px;
  }
  
  .gradient-preview {
    height: 8px; /* Reduzierte Höhe */
    border-radius: 2px;
    cursor: ew-resize;
  }

  /* Scrollbar ausblenden für alle Browser */
  .content-container::-webkit-scrollbar {
    display: none;
  }
  
  .content-container {
    -ms-overflow-style: none;  /* IE und Edge */
    scrollbar-width: none;  /* Firefox */
  }
`; 