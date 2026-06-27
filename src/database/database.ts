import Database from "better-sqlite3"

const db = new Database("database.db")

db.exec(`
    CREATE TABLE IF NOT EXISTS collections (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id TEXT NOT NULL,
        sticker_name TEXT NOT NULL,
        obtained_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`)

try {
    db.exec(`
        ALTER TABLE collections
        ADD COLUMN is_main INTEGER DEFAULT 0
    `)
} catch {
    // coluna já existe
}

db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        user_id TEXT PRIMARY KEY,
        user_name TEXT NOT NULL
    )
`)
db.prepare(`
CREATE TABLE IF NOT EXISTS event_progress (
  id INTEGER PRIMARY KEY,
  current_phase INTEGER DEFAULT 1,

  phase1_trades INTEGER DEFAULT 0,
  phase2_packs INTEGER DEFAULT 0,

  phase3_started INTEGER DEFAULT 0,
  phase4_started INTEGER DEFAULT 0
)
`).run();
db.prepare(`
INSERT OR IGNORE INTO event_progress (
  id,
  current_phase,
  phase1_trades,
  phase2_packs
)
VALUES (
  1,
  1,
  0,
  0
)
`).run();
db.exec(`
  CREATE TABLE IF NOT EXISTS war_players (
    user_id TEXT PRIMARY KEY,
    hp INTEGER DEFAULT 100,
    eliminated INTEGER DEFAULT 0,
    is_winner INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);
db.exec(`
  CREATE TABLE IF NOT EXISTS mythic_keys (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    key_name TEXT NOT NULL UNIQUE,
    holder_id TEXT,
    obtained INTEGER DEFAULT 0,
    obtained_at DATETIME
  )
`);
const mythicKeys = [
  "Conquistador",
  "Glória",
  "Honra",
  "Coragem",
  "União",
  "Legado",
];

for (const key of mythicKeys) {
  db.prepare(`
    INSERT OR IGNORE INTO mythic_keys (key_name)
    VALUES (?)
  `).run(key);
}


// ====================================================================
// eclipse Gamepad
// ====================================================================
export default db