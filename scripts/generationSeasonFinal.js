const fs = require("fs");
const path = require("path");

const SEASON_FOLDER = "temp2";

const stickersFile = path.resolve(
  __dirname,
  "../src/data/stickers.ts"
);

const imagesPath = path.resolve(
  __dirname,
  `../src/assets/images/${SEASON_FOLDER}`
);

function generateToken(length = 3) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}

function generateRarity(index) {
  if (index <= 20) {
    return {
      rarity: "Épica",
      emoji: "🟣",
      chance: 8,
    };
  }

  if (index <= 50) {
    return {
      rarity: "Rara",
      emoji: "🔵",
      chance: 20,
    };
  }

  return {
    rarity: "Comum",
    emoji: "⚪",
    chance: 70,
  };
}

if (!fs.existsSync(imagesPath)) {
  throw new Error(`Pasta não encontrada: ${imagesPath}`);
}

const files = fs
  .readdirSync(imagesPath)
  .filter((file) => {
    const ext = path.extname(file).toLowerCase();

    return [".jpg", ".jpeg", ".png", ".gif", ".webp", ".mp4"].includes(ext);
  })
  .sort();

const newStickers = files.map((file, index) => {
  const number = String(index + 1).padStart(3, "0");
  const token = generateToken();
  const rarityData = generateRarity(index + 1);

  return {
    code: `${number}-${token}`,
    file: `${SEASON_FOLDER}/${file}`,
    title: `Figurinha ${number}`,
    rarity: rarityData.rarity,
    emoji: rarityData.emoji,
    chance: rarityData.chance,
  };
});

const mythicStickers = [
  {
    code: "MIT-044",
    title: "Molejo",
    rarity: "Mítica",
    emoji: "🔥",
    file: "miticas/44.mp4",
    chance: 0,
  },
  {
    code: "MIT-045",
    title: "O Arauto",
    rarity: "Mítica",
    emoji: "🔥",
    file: "miticas/45.mp4",
    chance: 0,
  },
  {
    code: "MIT-046",
    title: "O Guardião",
    rarity: "Mítica",
    emoji: "🔥",
    file: "miticas/46.mp4",
    chance: 0,
  },
  {
    code: "MIT-047",
    title: "O Profeta",
    rarity: "Mítica",
    emoji: "🔥",
    file: "miticas/47.mp4",
    chance: 0,
  },
  {
    code: "MIT-048",
    title: "O Conquistador",
    rarity: "Mítica",
    emoji: "🔥",
    file: "miticas/48.mp4",
    chance: 0,
  },
  {
    code: "MIT-049",
    title: "O Último Rei",
    rarity: "Mítica",
    emoji: "🔥",
    file: "miticas/49.mp4",
    chance: 0,
  },
];

const finalStickers = [...newStickers, ...mythicStickers];

const content = `export interface Sticker {
  code: string
  file: string
  title: string
  rarity: string
  emoji: string
  chance: number
}

const stickers = ${JSON.stringify(finalStickers, null, 2)}

export default stickers
`;

fs.writeFileSync(stickersFile, content);

console.log(`✅ ${newStickers.length} figurinhas comuns/raras/épicas geradas da pasta ${SEASON_FOLDER}`);
console.log(`🔥 ${mythicStickers.length} Míticas adicionadas`);
console.log("🎯 stickers.ts recriado do zero com sucesso!");