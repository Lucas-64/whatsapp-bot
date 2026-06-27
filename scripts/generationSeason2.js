const fs = require("fs");
const path = require("path");

const season = "temp2";

const stickersPath = path.join(
  process.cwd(),
  "src",
  "data",
  "stickers.ts"
);

const imagesPath = path.join(
  process.cwd(),
  "src",
  "assets",
  "images",
  season
);

function generateToken(length = 3) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars.charAt(
      Math.floor(Math.random() * chars.length)
    );
  }

  return result;
}

function generateRarity(index) {

  // 2 míticas
  if (index <= 2) {
    return {
      rarity: "Mítica",
      emoji: "🔥",
      chance: 1
    };
  }

  // 6 lendárias
  if (index <= 8) {
    return {
      rarity: "Lendária",
      emoji: "🟡",
      chance: 5
    };
  }

  // 15 épicas
  if (index <= 23) {
    return {
      rarity: "Épica",
      emoji: "🟣",
      chance: 15
    };
  }

  // 30 raras
  if (index <= 53) {
    return {
      rarity: "Rara",
      emoji: "🔵",
      chance: 30
    };
  }

  return {
    rarity: "Comum",
    emoji: "⚪",
    chance: 50
  };
}

const currentContent =
  fs.readFileSync(stickersPath, "utf8");

const matches =
  [...currentContent.matchAll(/"title": "Figurinha (\d+)"/g)];

const lastNumber =
  matches.length > 0
    ? parseInt(matches[matches.length - 1][1])
    : 0;

console.log(
  `Última figurinha encontrada: ${lastNumber}`
);

const files = fs
  .readdirSync(imagesPath)
  .filter(file =>
    file.endsWith(".jpg") ||
    file.endsWith(".png") ||
    file.endsWith(".jpeg") ||
    file.endsWith(".webp") ||
    file.endsWith(".gif")
  );

const newStickers = files.map((file, index) => {

  const number =
    String(lastNumber + index + 1)
      .padStart(3, "0");

  const rarityData =
    generateRarity(index + 1);

  return {
    code: `${number}-${generateToken()}`,
    file: `${season}/${file}`,
    title: `Figurinha ${number}`,
    rarity: rarityData.rarity,
    emoji: rarityData.emoji,
    chance: rarityData.chance
  };
});

const insertPosition =
  currentContent.lastIndexOf("]");

const formattedStickers =
  newStickers
    .map(item =>
      JSON.stringify(item, null, 2)
    )
    .join(",\n");

const newContent =
  currentContent.slice(0, insertPosition)
  + ",\n"
  + formattedStickers
  + "\n"
  + currentContent.slice(insertPosition);

fs.writeFileSync(
  stickersPath,
  newContent
);

console.log(
  `✅ ${newStickers.length} figurinhas adicionadas ao stickers.ts`
);