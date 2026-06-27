import db from "../database/database";

export function giveKey(keyName: string, userId: string) {
  db.prepare(`
    UPDATE mythic_keys
    SET holder_id = ?,
        obtained = 1,
        obtained_at = CURRENT_TIMESTAMP
    WHERE key_name = ?
    AND obtained = 0
  `).run(userId, keyName);
}

export function getKey(keyName: string) {
  return db.prepare(`
    SELECT *
    FROM mythic_keys
    WHERE key_name = ?
  `).get(keyName);
}

export function getAllKeys() {
  return db.prepare(`
    SELECT *
    FROM mythic_keys
    ORDER BY id ASC
  `).all();
}

export function resetKeys() {
  db.prepare(`
    UPDATE mythic_keys
    SET holder_id = NULL,
        obtained = 0,
        obtained_at = NULL
  `).run();
}