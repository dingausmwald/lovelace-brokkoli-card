import { css } from 'lit';

/**
 * Gemeinsames Aussehen der Pflanzen-Dialoge (Klonen, Sensoren ersetzen,
 * Löschen). Vorher brachte jeder Dialog sein eigenes Stylesheet mit, weshalb
 * dieselbe Aktion je nach Karte anders aussah.
 */
export const dialogStyles = css`
    /* Das Flyout-Menue der Area-Card setzt auf seinem :host pointer-events: none
       und schaltet sie nur fuer die eigenen Elemente wieder an. Ein Dialog, der
       darin gerendert wird, erbt das und ist unbedienbar: sichtbar, aber kein
       Klick kommt an -- kein Fehler, kein Klon. Jeder Dialog holt sie sich hier
       selbst zurueck, unabhaengig davon, wer ihn einbettet. */
    :host {
        pointer-events: auto;
    }

    .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    }

    .dialog {
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        width: 90%;
        max-width: 420px;
        max-height: 85vh;
        overflow-y: auto;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 16px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
    }

    .header h2 {
        margin: 0;
        font-size: 1.1rem;
    }

    .close {
        background: none;
        border: none;
        color: inherit;
        font-size: 1.4rem;
        line-height: 1;
        cursor: pointer;
    }

    form, .body {
        padding: 16px;
    }

    .field {
        margin-bottom: 12px;
    }

    label {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-bottom: 4px;
        font-size: 0.9rem;
    }

    label ha-icon {
        --mdc-icon-size: 18px;
        opacity: 0.7;
    }

    input, select {
        width: 100%;
        box-sizing: border-box;
        padding: 8px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 4px;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        font-size: 1rem;
    }

    .actions {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        margin-top: 16px;
    }

    .actions button {
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        font-size: 1rem;
        cursor: pointer;
    }

    .primary {
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
    }

    .secondary {
        background: var(--secondary-background-color, #e0e0e0);
        color: var(--primary-text-color);
    }

    .danger {
        background: var(--error-color, #db4437);
        color: var(--text-primary-color, #fff);
    }
`;
