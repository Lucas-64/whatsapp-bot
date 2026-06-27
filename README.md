# WhatsApp Game Bot 🎮🤖

An interactive WhatsApp bot built with **Node.js**, **TypeScript**, **Baileys** and **SQLite**, created to run a gamified card/sticker collection experience inside WhatsApp groups.

This project was developed as a personal experiment to explore **chat automation**, **game mechanics**, **ranking systems**, **user interaction** and **event-based progression** using WhatsApp as the main interface.

---

## 🚀 Overview

The bot turns a WhatsApp group into an interactive game environment where users can open packs, collect cards, trade items, join events and compete through rankings.

The main goal was to create a lightweight game experience using only WhatsApp messages and commands.

---

## ✨ Features

- 📦 Pack opening system
- 🃏 Card/sticker collection
- 🔁 Trade system between users
- 🏆 Ranking and score system
- 🎲 Rarity system
- ⏱️ Cooldowns and action control
- 🎯 Multi-phase event system
- 🔐 Special keys and unlockable rewards
- 🗃️ Local persistence with SQLite
- 🤖 WhatsApp automation using Baileys

---

## 🛠️ Tech Stack

- **Node.js**
- **TypeScript**
- **Baileys**
- **SQLite**
- **better-sqlite3**
- **ts-node-dev**

---

## 📁 Project Structure

```txt
src/
├── assets/
│   ├── game/
│   ├── images/
│   │   ├── temp1/
│   │   ├── temp2/
│   │   └── miticas/
│   └── stickers/
├── commands/
├── data/
├── database/
├── scripts/
├── temp/
└── index.ts

> The real card/sticker images are not included in this repository because they may contain personal or private media.

---

## 🖼️ Adding Your Own Images

Before running the bot, you need to add your own images to the project.

Use this folder structure:

```txt
src/assets/images/
├── temp1/
│   ├── card-001.png
│   ├── card-002.png
│   └── card-003.png
├── temp2/
│   ├── card-001.png
│   ├── card-002.png
│   └── card-003.png
└── miticas/
    ├── mythic-001.png
    └── mythic-002.png
```

Recommended formats:

```txt
.png
.jpg
.jpeg
.webp
```

Use simple file names without spaces or special characters.

Good examples:

```txt
card-common-01.png
card-rare-02.jpg
legendary-player.webp
mythic-card-01.png
```

Avoid names like:

```txt
Minha figurinha #1.png
card lendário (final).jpg
imagem nova!!.webp
```

---

## 🔒 Why Images Are Not Included

The image folders are intentionally ignored in Git because this project was originally created for a private/personal game event.

To keep the repository safe and public-friendly, the following files are not included:

```txt
src/assets/images/*
auth/
database.db
node_modules/
.env
```

Only the folder structure should be kept using `.gitkeep` files.

---

## ⚙️ How to Run

### 1. Clone the repository

```bash
git clone https://github.com/Lucas-64/whatsapp-bot.git
```

### 2. Access the project folder

```bash
cd whatsapp-bot
```

### 3. Install dependencies

```bash
npm install
```

---

## 🃏 Preparing the Sticker Data

After adding your images to:

```txt
src/assets/images/
```

run the script responsible for generating or registering the stickers/cards used by the bot.

```bash
npm run generate:stickers
```

> If your local script has a different name, check the `scripts` section inside `package.json`.

This step should prepare the sticker/card data used by the bot, such as image references, file names, rarity configuration or generated sticker metadata.

---

## 🤖 Starting the Bot

After preparing the images and sticker data, start the bot:

```bash
npm run dev
```

The bot will start using **Baileys** and display a QR Code in the terminal.

---

## 📱 Connecting WhatsApp

When the QR Code appears:

1. Open WhatsApp on your personal phone.
2. Go to **Settings**.
3. Tap **Linked Devices**.
4. Tap **Link a Device**.
5. Scan the QR Code displayed in the terminal.

After scanning, the bot will connect using your WhatsApp session.

> Important: do not publish your authentication/session folders. They contain private connection data.

---

## 🎮 Main Commands

Some of the main commands implemented in the bot:

```txt
!abrir25       Opens a pack
!pegar         Selects a card from the opened pack
!album         Shows the user's collection
!titular       Sets a main card
!trocar        Sends a trade request
!aceitar       Accepts a trade
!rank          Shows the ranking
!stats         Shows player statistics
!evento        Shows event progress
!abrircofre    Opens a special reward chest
```

---

## 🧩 Game Mechanics

### Pack System

Users can open packs and receive random cards based on rarity, season and availability.

### Collection System

Each user has a personal collection stored in a local SQLite database.

### Trade System

Players can trade cards with each other using commands and mentions.

### Ranking System

The bot calculates user progress and ranking based on collected cards and points.

### Event System

The project includes a multi-phase event system with challenges, progression goals and special rewards.

---

## 🗃️ Database

The bot uses a local SQLite database to store information such as:

* users
* collections
* selected/main cards
* rankings
* event progress
* obtained cards

The local database file is ignored by Git to avoid publishing private or test data.

---

## 🔐 Sensitive Files

Make sure these files and folders are not published:

```txt
.env
auth/
session/
sessions/
baileys_auth/
auth_info_baileys/
database.db
*.sqlite
*.sqlite3
node_modules/
src/assets/images/*
```

---

## 📌 Project Status

This project is currently a **personal experimental project**.

The main goal is to explore:

* WhatsApp automation
* Game logic
* Chat-based interactions
* Local persistence
* Event-driven mechanics
* TypeScript project organization
* User engagement through simple game systems

Future improvements may include:

* Admin dashboard
* Web interface
* Better database structure
* Public documentation
* Docker setup
* Automated tests
* Deployable bot architecture
* Example image pack for demonstration purposes

---

## 🧠 What I Learned

During this project, I practiced:

* Building command-based interactions
* Managing user state
* Working with local databases
* Structuring a TypeScript project
* Creating game mechanics
* Handling cooldowns and temporary data
* Designing a multi-phase event system
* Thinking about user engagement through automation

---

## ⚠️ Disclaimer

This project is not affiliated with WhatsApp or Meta.

It was created for study, experimentation and portfolio purposes.

Use responsibly and avoid spam, abusive automation or actions that may violate WhatsApp's terms of service.

---

## 👤 Author

Made by **Lucas Lima**

* Portfolio: [l64.net.br](https://l64.net.br/)
* LinkedIn: [Lucas Lima](https://www.linkedin.com/in/lucas-lima64/)
* GitHub: [Lucas-64](https://github.com/Lucas-64)

```
```
