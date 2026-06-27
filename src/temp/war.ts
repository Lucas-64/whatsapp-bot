import db from "../database/database";

export function registerPlayer(userId: string) {
  db.prepare(`
    INSERT OR IGNORE INTO war_players (
      user_id,
      hp,
      eliminated,
      is_winner
    )
    VALUES (?, 100, 0, 0)
  `).run(userId);
}

export function getPlayer(userId: string) {
  return db.prepare(`
    SELECT *
    FROM war_players
    WHERE user_id = ?
  `).get(userId);
}

export function damagePlayer(userId: string, damage: number) {
  db.prepare(`
    UPDATE war_players
    SET hp = hp - ?
    WHERE user_id = ?
  `).run(damage, userId);

  db.prepare(`
    UPDATE war_players
    SET eliminated = 1
    WHERE user_id = ?
    AND hp <= 0
  `).run(userId);
}

export function getAlivePlayers() {
  return db.prepare(`
    SELECT *
    FROM war_players
    WHERE eliminated = 0
  `).all();
}

export function setWinner(userId: string) {
  db.prepare(`
    UPDATE war_players
    SET is_winner = 1
    WHERE user_id = ?
  `).run(userId);
}

export function resetWar() {
  db.prepare(`
    DELETE FROM war_players
  `).run();
}