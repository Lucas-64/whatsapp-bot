
const fs = require("fs");
const path = require("path");

const imagesPath = path.join(
  process.cwd(),
  "src",
  "assets",
  "images"
);

const files = fs.readdirSync(imagesPath);

function generateToken(length = 3) {

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let result = "";

  for (let i = 0; i < length; i++) {

    result +=
      chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
  }

  return result;
}

function generateRarity(index) {

  // 6 lendárias
  if (index <= 6) {

    return {
      rarity: "Lendária",
      emoji: "🟡",
      chance: 5
    };
  }

  // 15 épicas
  if (index <= 21) {

    return {
      rarity: "Épica",
      emoji: "🟣",
      chance: 15
    };
  }

  // 30 raras
  if (index <= 51) {

    return {
      rarity: "Rara",
      emoji: "🔵",
      chance: 30
    };
  }

  // resto comum
  return {
    rarity: "Comum",
    emoji: "⚪",
    chance: 50
  };
}


const stickers = files.map((file, index) => {

  const number =
    String(index + 1).padStart(3, "0");

  const token = generateToken();

  const rarityData =
    generateRarity(index + 1);

  return {
    code: `${number}-${token}`,
    file,
    title: `Figurinha ${number}`,
    rarity: rarityData.rarity,
    emoji: rarityData.emoji,
    chance: rarityData.chance
  };
});

const content =
`export interface Sticker {
  code: string
  file: string
  title: string
  rarity: string
  emoji: string
  chance: number
}

const stickers = ${JSON.stringify(stickers, null, 2)}

export default stickers
`;

fs.writeFileSync(
  path.join(
    process.cwd(),
    "src",
    "data",
    "stickers.ts"
  ),
  content
);

console.log("✅ stickers.ts gerado com sucesso!");
