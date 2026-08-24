import { css } from 'lit';

export const plantFlyoutMenuStyles = css`
  /* Das Menü wird als Geschwister des Card-Containers gerendert, und der Host
     der Area ist ein Flex-Container. Ohne eigene Positionierung wäre dieses
     Element ein Flex-Kind und erschiene unterhalb der Karte, obwohl seine
     Innereien mit position:fixed auf den Viewport ausgelegt sind. */
  :host {
    position: fixed;
    inset: 0;
    z-index: 1000;
    pointer-events: none;
  }

  .flyout-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: auto;
  }

  .flyout-overlay.mobile {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .flyout-menu {
    background: var(--card-background-color, #fff);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    min-width: 300px;
    max-width: 400px;
    max-height: 80vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    pointer-events: auto;
  }

  .flyout-menu.mobile {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 500px;
    max-height: 90vh;
  }

  .flyout-header {
    padding: 1rem;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .search-container {
    position: relative;
    flex: 1;
  }

  .search-input {
    width: 100%;
    padding: 0.5rem 2rem 0.5rem 0.5rem;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 4px;
    font-size: 0.9rem;
    box-sizing: border-box;
  }

  .search-icon {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--secondary-text-color);
    --mdc-icon-size: 20px;
  }

  .close-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    color: var(--secondary-text-color);
  }

  .close-button:hover {
    background-color: var(--divider-color, #e0e0e0);
  }

  .plant-flyout-search:focus {
    outline: none;
    border-color: var(--primary-color, #03a9f4);
  }

  .new-plant-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    cursor: pointer;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
    color: var(--primary-color);
    font-weight: 500;
  }

  .new-plant-button:hover {
    background-color: var(--primary-color);
    color: white;
  }

  .plants-list {
    flex: 1;
    overflow-y: auto;
    max-height: 300px;
  }

  .plant-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
  }

  .plant-item:last-child {
    border-bottom: none;
  }

  .plant-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex: 1;
  }

  .plant-image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--divider-color, #e0e0e0);
  }

  .plant-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .plant-image ha-icon {
    --mdc-icon-size: 24px;
    color: var(--primary-color);
  }

  .plant-details {
    flex: 1;
  }

  .plant-name {
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--primary-text-color);
  }

  .plant-area {
    font-size: 0.8rem;
    color: var(--secondary-text-color);
    margin-top: 0.25rem;
  }

  .plant-actions {
    display: flex;
    gap: 0.5rem;
  }

  .action-button {
    background: none;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 4px;
    padding: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
  }

  .action-button:hover {
    background-color: var(--divider-color, #e0e0e0);
  }

  .action-button.move {
    color: var(--primary-color);
  }

  .action-button.clone {
    color: var(--accent-color, #f3a95e);
  }

  .action-button ha-icon {
    --mdc-icon-size: 16px;
  }

  .plant-flyout-empty {
    padding: 32px 16px;
    text-align: center;
    color: var(--secondary-text-color, #666);
    font-size: 14px;
  }

  .plant-flyout-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }

  .plant-flyout-backdrop.mobile {
    z-index: 1000;
  }
`; 