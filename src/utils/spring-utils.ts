// Kleine Feder-Physik für die Kacheln der Sensor-Zuweisungs-Karte. Bewusst kein
// externes Physik-Paket: gebraucht wird nur ein gedämpfter Feder-Integrator in
// 2D, und das Bundle soll klein und ohne zusätzliche Laufzeit-Abhängigkeit
// bleiben.
//
// Die Federn bewegen sich ausschließlich, wenn sich ihr Ziel ändert (Blatt neu
// zugewiesen, Blüte umsortiert, Ziehen). Steht alles still, kommen sie zur Ruhe
// und die Animationsschleife hält an — keine Dauerbewegung ohne Anlass.

export interface Spring2D {
    x: number;
    y: number;
    vx: number;
    vy: number;
}

export function createSpring(x = 0, y = 0): Spring2D {
    return { x, y, vx: 0, vy: 0 };
}

// Halb-impliziter Euler-Schritt. stiffness/damping sind so gewählt, dass die
// Bewegung leicht überschwingt und in gut einer halben Sekunde sitzt.
// dt wird gedeckelt, damit ein Tab-Wechsel (großer Zeitsprung) die Simulation
// nicht explodieren lässt.
export function stepSpring(
    s: Spring2D,
    targetX: number,
    targetY: number,
    dt: number,
    stiffness = 190,
    damping = 20
): void {
    const clamped = Math.min(dt, 0.05);
    s.vx += ((targetX - s.x) * stiffness - s.vx * damping) * clamped;
    s.vy += ((targetY - s.y) * stiffness - s.vy * damping) * clamped;
    s.x += s.vx * clamped;
    s.y += s.vy * clamped;
}

export function settleSpring(s: Spring2D, targetX: number, targetY: number): void {
    s.x = targetX;
    s.y = targetY;
    s.vx = 0;
    s.vy = 0;
}

export function isSettled(s: Spring2D, targetX: number, targetY: number): boolean {
    return (
        Math.abs(s.vx) < 0.4 &&
        Math.abs(s.vy) < 0.4 &&
        Math.abs(s.x - targetX) < 0.4 &&
        Math.abs(s.y - targetY) < 0.4
    );
}
