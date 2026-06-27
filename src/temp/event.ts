import db from "../database/database";

export function getEvent() {
  return db.prepare(`
    SELECT *
    FROM event_progress
    WHERE id = 1
  `).get();
}

export function addTrade() {
  db.prepare(`
    UPDATE event_progress
    SET phase1_trades = phase1_trades + 1
    WHERE id = 1
  `).run();
}

export function addSacrificePack() {
  db.prepare(`
    UPDATE event_progress
    SET phase2_packs = phase2_packs + 1
    WHERE id = 1
  `).run();
}

export function resetSacrificePack() {
  db.prepare(`
    UPDATE event_progress
    SET phase2_packs = 0
    WHERE id = 1
  `).run();
}

export function setPhase(phase: number) {
  db.prepare(`
    UPDATE event_progress
    SET current_phase = ?
    WHERE id = 1
  `).run(phase);
}