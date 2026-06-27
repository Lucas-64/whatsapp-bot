import db from "./database/database";

db.prepare(`
  UPDATE collections
  SET sticker_name = 'temp1/' || sticker_name
`).run();

console.log("Migração concluída!");