// Sammel-Entry: baut alle vier Karten in eine einzige brokkoli-card.js.
//
// Grund: HA lädt beim Öffnen des Dashboards *alle* registrierten Lovelace-
// Resources sofort (loadLovelaceResources), es gibt kein Lazy-Loading pro
// Karte. Vier getrennte Bundles bedeuteten also nur vier Kopien von lit, den
// Übersetzungen und den geteilten Komponenten — zusammen rund doppelt so viel
// wie ein gemeinsames Bundle. Als eine Datei registriert HACS die Resource
// zudem automatisch, es bleibt keine Handarbeit im Frontend übrig.
//
// Die alten Dateinamen existieren weiterhin als No-Op-Stubs (src/stubs/),
// damit Bestandsnutzer mit vier Resource-Einträgen weder 404 noch eine
// doppelte customElements.define bekommen.
import './brokkoli-card';
import './brokkoli-area-card';
import './brokkoli-list-card';
import './brokkoli-sensor-assignment-card';
