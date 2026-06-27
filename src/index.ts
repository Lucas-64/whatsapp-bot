import makeWASocket, {
  DisconnectReason,
  useMultiFileAuthState,
} from "@whiskeysockets/baileys";

import { Boom } from "@hapi/boom";
import qrcode from "qrcode-terminal";

import fs from "fs";
import path from "path";

import db from "./database/database";
import openPacks from "./temp/openPacks";
import cooldowns from "./temp/cooldowns";
import stickers from "./data/stickers";
import trades from "./temp/trades";
import steals from "./temp/steals";
import robberyCooldown from "./temp/robberyCooldown";
import openPackTimers from "./temp/openPackTimers";
import {
  getEvent,
  addTrade,
  setPhase,
  addSacrificePack,
  resetSacrificePack,
} from "./temp/event";
import {
  registerPlayer,
  getPlayer,
  damagePlayer,
  getAlivePlayers,
  setWinner,
  resetWar,
} from "./temp/war";
import { giveKey, getKey, getAllKeys, resetKeys } from "./temp/keys";

const IMAGES_PATH = path.join(process.cwd(), "src", "assets", "images");
const PACK_ABANDON_TIMEOUT = 60 * 1000;
const NEXT_RIDDLE_DELAY = 2 * 60 * 1000;

const KEY_RIDDLES = [
  {
    command: "!hexa",
    keyName: "Legado",
    text: `📜 *PRIMEIRO PERGAMINHO*

Cinco marcas adornam a coroa.

Mas os profetas falam de uma sexta.

Ela ainda não existe.

Ela ainda não foi conquistada.

Mesmo assim, seu nome ecoa
nos sonhos dos fiéis.

Diga o nome daquilo que todos aguardam.`,
  },
  {
    command: "!brasilpenta",
    keyName: "Glória",
    text: `📜 *SEGUNDO PERGAMINHO*

Cinco vezes foi coroado.

Cinco vezes fez o mundo se curvar.

Seu trono ainda permanece intocado.

Aquele que souber o verdadeiro nome do Rei
poderá reivindicar a segunda chave.`,
  },
  {
    command: "!gol",
    keyName: "União",
    text: `📜 *TERCEIRO PERGAMINHO*

Um homem sozinho nada conquista.

Onze caminham.

Uma nação observa.

E quando o destino encontra a rede,
milhares tornam-se um.

Pronuncie a palavra que transforma multidões
em uma única voz.`,
  },
  {
    command: "!camisadez",
    keyName: "Honra",
    text: `📜 *QUARTO PERGAMINHO*

Nem todo guerreiro carrega espada.

Alguns vestem um número sagrado.

Onde ele pisa, o campo silencia.

Onde ele toca, a esperança desperta.

Diga o nome do manto dos escolhidos.`,
  },
  {
    command: "!neymar",
    keyName: "Coragem",
    text: `📜 *QUINTO PERGAMINHO*

Entre glória e queda,
ele ainda caminha.

Amado por uns.

Caçado por outros.

Carrega nos pés o peso de uma era.

Diga o nome do príncipe ferido.`,
  },
];

const SECRET_KEY_COMMANDS: Record<string, string> = KEY_RIDDLES.reduce(
  (commands, riddle) => {
    commands[riddle.command] = riddle.keyName;
    return commands;
  },
  {} as Record<string, string>,
);

const riddleTimers: Record<string, NodeJS.Timeout> = {};

const playersNames: Record<string, string> = {};

function getRandomSticker(stickersList: any[]) {
  const totalChance = stickersList.reduce(
    (sum, sticker) => sum + sticker.chance,
    0,
  );

  const random = Math.random() * totalChance;

  let accumulated = 0;

  for (const sticker of stickersList) {
    accumulated += sticker.chance;

    if (random <= accumulated) {
      return sticker;
    }
  }

  return stickersList[0];
}

function getStickerPoints(rarity: string): number {
  switch (rarity) {
    case "Mítica":
      return 50;
    case "Lendária":
      return 15;
    case "Épica":
      return 7;
    case "Rara":
      return 3;
    case "Comum":
      return 1;
    default:
      return 1;
  }
}

async function sendStickerMedia(
  sock: any,
  jid: string,
  absolutePath: string,
  caption: string,
) {
  const mediaBuffer = fs.readFileSync(absolutePath);
  const isAnimated =
    absolutePath.toLowerCase().endsWith(".gif") ||
    absolutePath.toLowerCase().endsWith(".mp4");

  if (isAnimated) {
    await sock.sendMessage(jid, {
      video: mediaBuffer,
      gifPlayback: true,
      caption,
    });

    return;
  }

  await sock.sendMessage(jid, {
    image: mediaBuffer,
    caption,
  });
}

function getNextRiddle() {
  for (const riddle of KEY_RIDDLES) {
    const keyData: any = getKey(riddle.keyName);

    if (!keyData || keyData.obtained === 0) {
      return riddle;
    }
  }

  return null;
}

async function sendNextRiddle(sock: any, jid: string) {
  const eventData: any = getEvent();

  if (eventData.current_phase !== 4) {
    return;
  }

  const nextRiddle = getNextRiddle();

  if (!nextRiddle) {
    await sock.sendMessage(jid, {
      text: `🕯️ *TODOS OS PERGAMINHOS FORAM DECIFRADOS*

As seis chaves possuem portadores.

O Cofre Mítico aguarda o chamado final.

Use:
!abrircofre`,
    });

    return;
  }

  await sock.sendMessage(jid, {
    text: `${nextRiddle.text}

━━━━━━━━━━━━━━

🩸 Existe uma única palavra de poder.
Quem pronunciá-la primeiro tomará a chave.`,
  });
}

function scheduleNextRiddle(sock: any, jid: string) {
  if (riddleTimers[jid]) {
    clearTimeout(riddleTimers[jid]);
    delete riddleTimers[jid];
  }

  const nextRiddle = getNextRiddle();

  if (!nextRiddle) {
    return;
  }

  riddleTimers[jid] = setTimeout(async () => {
    console.log("⏳ Timer disparou. Enviando próximo pergaminho para:", jid);
    delete riddleTimers[jid];
    await sendNextRiddle(sock, jid);
  }, NEXT_RIDDLE_DELAY);
}

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState("auth");

  const sock = makeWASocket({
    auth: state,
  });

  sock.ev.on("connection.update", (update) => {
    const { connection, qr, lastDisconnect } = update;

    if (qr) {
      qrcode.generate(qr, { small: true });
    }

    if (connection === "close") {
      const shouldReconnect =
        (lastDisconnect?.error as Boom)?.output?.statusCode !==
        DisconnectReason.loggedOut;

      console.log("Conexão fechada.");

      if (shouldReconnect) {
        startBot();
      }
    } else if (connection === "open") {
      console.log("Bot conectado no WhatsApp 🚀");
    }
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("messages.upsert", async ({ messages }) => {
    const msg = messages[0];

    if (!msg.message) return;

    const text =
      msg.message.conversation || msg.message.extendedTextMessage?.text;

    if (!text) return;

    const from = msg.key.remoteJid;
    const userId = msg.key.participant || msg.key.remoteJid;
    const pushName = msg.pushName || "Jogador";

    db.prepare(
      `
    INSERT OR REPLACE INTO users
    (user_id, user_name)
    VALUES (?, ?)
`,
    ).run(userId, pushName);

    if (userId) {
      playersNames[userId] = pushName;
    }

    console.log("Mensagem recebida:", text);

    if (text === "!killall") {
  db.prepare(`
    UPDATE war_players
    SET hp = 0
  `).run();

  const winner: any = db.prepare(`
    SELECT user_id
    FROM war_players
    LIMIT 1
  `).get();

  if (winner) {
    giveKey("Destino", winner.user_id);
  }

  setPhase(4);

  await sock.sendMessage(from!, {
    text: `☠️ *A GUERRA CHEGOU AO FIM*

As últimas chamas do conflito se apagaram.

Um único sobrevivente carregou consigo a Chave do Destino.

📜 Os antigos pergaminhos começaram a despertar...

A Fase IV foi iniciada.`,
  });

  await sendNextRiddle(sock, from!);

  return;
}
    // =========================================================
    // COMANDO !ABRIR
    // =========================================================

    if (text === "!abrir") {
      const cooldownTime = 1 * 60 * 1000;

      const lastUsed = cooldowns[from!];

      if (lastUsed) {
        const timePassed = Date.now() - lastUsed;

        if (timePassed < cooldownTime) {
          const remaining = Math.ceil((cooldownTime - timePassed) / 1000);

          await sock.sendMessage(from!, {
            text: `⏳ Você abriu um pack recentemente!

Aguarde ${remaining}s para abrir outro 📦`,
          });

          return;
        }
      }

      const availableStickers = stickers.filter((sticker) => {
        const imagePath = path.join(IMAGES_PATH, sticker.file);

        const existing = db
          .prepare(
            `
      SELECT 1
      FROM collections
      WHERE sticker_name = ?
    `,
          )
          .get(sticker.file);

        return (
          fs.existsSync(imagePath) &&
          !existing &&
          !sticker.file.startsWith("miticas/")
        );
      });

      if (availableStickers.length < 3) {
        await sock.sendMessage(from!, {
          text: "📭 Não há figurinhas suficientes disponíveis no momento!",
        });

        return;
      }

      const shuffled = [...availableStickers].sort(() => Math.random() - 0.5);
      const selected = shuffled.slice(0, 3);

      openPacks[userId!] = selected.map((item) => item.file);
      cooldowns[from!] = Date.now();

      await sock.sendMessage(from!, {
        text: `📦 *PACK ABERTO!*

Escolha sabiamente 👀`,
      });

      for (let i = 0; i < selected.length; i++) {
        const sticker = selected[i];

        await sendStickerMedia(
          sock,
          from!,
          path.join(IMAGES_PATH, sticker.file),
          `${i + 1}️⃣ ${sticker.emoji} ${sticker.rarity}

🏆 ${sticker.title}
🎴 ${sticker.code}`,
        );
      }

      await sock.sendMessage(from!, {
        text: `🎯 Escolha sua figurinha usando:
!pegar 1
!pegar 2
!pegar 3`,
      });

      if (openPackTimers[userId!]) {
        clearTimeout(openPackTimers[userId!]);
        delete openPackTimers[userId!];
      }

      const eventData: any = getEvent();

      if (eventData.current_phase === 2) {
        openPackTimers[userId!] = setTimeout(async () => {
          if (!openPacks[userId!]) {
            delete openPackTimers[userId!];
            return;
          }

          delete openPacks[userId!];
          delete openPackTimers[userId!];

          const currentEvent: any = getEvent();

          if (currentEvent.current_phase !== 2) {
            return;
          }

          addSacrificePack();

          const updatedEvent: any = getEvent();

          if (updatedEvent.phase2_packs >= 100) {
            setPhase(3);

            await sock.sendMessage(from!, {
              text: `🕯️ *O SACRIFÍCIO FOI ACEITO*

Cem oferendas foram abandonadas.

Ninguém tocou o proibido.
Ninguém quebrou o juramento.

🔓 *TERCEIRO RITO DESPERTADO*

⚔️ A Guerra das Figurinhas`,
            });

            return;
          }

          await sock.sendMessage(from!, {
            text: `📦 *OFERENDA ABANDONADA*

O sacrifício permanece de pé.

Progresso do rito:
${updatedEvent.phase2_packs}/100`,
          });
        }, PACK_ABANDON_TIMEOUT);
      }
    }

    // =========================================================
    // COMANDO !PEGAR
    // =========================================================

    if (text.startsWith("!pegar ")) {
      const choice = Number(text.replace("!pegar ", ""));

      const currentPack = openPacks[userId!];

      if (!currentPack) {
        await sock.sendMessage(from!, {
          text: "📦 Você não possui nenhum pack aberto!",
        });

        return;
      }

      if (choice < 1 || choice > 3) {
        await sock.sendMessage(from!, {
          text: "🎯 Escolha um número entre 1 e 3.",
        });

        return;
      }

      const selectedSticker = currentPack[choice - 1];

      const alreadyTaken = db
        .prepare(
          `
      SELECT * FROM collections
      WHERE sticker_name = ?
    `,
        )
        .get(selectedSticker);

      if (alreadyTaken) {
        await sock.sendMessage(from!, {
          text: "🚫 Essa figurinha já pertence a outro jogador!",
        });

        return;
      }

      if (openPackTimers[userId!]) {
        clearTimeout(openPackTimers[userId!]);
        delete openPackTimers[userId!];
      }

      const userCollection = db
        .prepare(
          `
      SELECT * FROM collections
      WHERE user_id = ?
      ORDER BY obtained_at ASC
    `,
        )
        .all(userId!) as any[];

      if (userCollection.length >= 18) {
        const oldestSticker = userCollection[0];

        db.prepare(
          `
      DELETE FROM collections
      WHERE id = ?
    `,
        ).run(oldestSticker.id);
      }

      db.prepare(
        `
    INSERT INTO collections (user_id, sticker_name)
    VALUES (?, ?)
  `,
      ).run(userId, selectedSticker);

      delete openPacks[userId!];

      const eventData: any = getEvent();

      if (eventData.current_phase === 2) {
        resetSacrificePack();

        await sock.sendMessage(from!, {
          text: `💥 *O JURAMENTO FOI QUEBRADO*

Alguém cedeu à tentação.

O rito foi profanado.

📦 O contador retornou para:
0/100`,
        });
      }

      const stickerData = stickers.find(
        (sticker) => sticker.file === selectedSticker,
      );
      await sock.sendMessage(from!, {
        text: `🎉 Figurinha adicionada ao seu álbum!

${stickerData?.emoji} ${stickerData?.rarity}
🏆 ${stickerData?.title}
🎴 ${stickerData?.code}`,
      });
    }

    // =========================================================
    // COMANDO !ALBUM
    // =========================================================

    if (text === "!album") {
      const collection = db
        .prepare(
          `
      SELECT *
      FROM collections
      WHERE user_id = ?
      ORDER BY obtained_at ASC
    `,
        )
        .all(userId!) as any[];

      if (collection.length === 0) {
        await sock.sendMessage(from!, {
          text: "📭 Seu álbum ainda está vazio!",
        });
        return;
      }

      const mainSticker = collection.find((item) => item.is_main === 1);
      const reserves = collection.filter((item) => item.is_main === 0);

      let message = `🏆 *Seu Álbum*

`;

      message += `⭐ *Titular:*

`;

      if (mainSticker) {
        const stickerData = stickers.find(
          (sticker) => sticker.file === mainSticker.sticker_name,
        );

        if (stickerData) {
          message += `${stickerData.emoji} ${stickerData.rarity}
🏆 ${stickerData.title}
🎴 ${stickerData.code}

`;
        }
      } else {
        message += `Nenhum definido

`;
      }

      message += `📚 *Coleção:*

`;

      reserves.forEach((item, index) => {
        const stickerData = stickers.find(
          (sticker) => sticker.file === item.sticker_name,
        );

        if (!stickerData) return;

        message += `${index + 1}.
${stickerData.emoji} ${stickerData.rarity}
🏆 ${stickerData.title}
🎴 ${stickerData.code}

`;
      });

      message += `📦 Total: ${collection.length}/18`;

      await sock.sendMessage(from!, {
        text: message,
      });

      for (const item of collection) {
        const stickerData = stickers.find(
          (sticker) => sticker.file === item.sticker_name,
        );

        if (!stickerData) continue;

        await sendStickerMedia(
          sock,
          from!,
          path.join(IMAGES_PATH, stickerData.file),
          `${stickerData.emoji} ${stickerData.rarity}

🏆 ${stickerData.title}
🎴 ${stickerData.code}`,
        );
      }
    }

    // =========================================================
    // COMANDO !TITULAR
    // =========================================================

    if (text.startsWith("!titular ")) {
      const stickerCode = text.replace("!titular ", "").trim();

      const stickerData = stickers.find(
        (sticker) => sticker.code === stickerCode,
      );

      if (!stickerData) {
        await sock.sendMessage(from!, {
          text: "🔎 Não encontrei essa figurinha.",
        });

        return;
      }

      const sticker = db
        .prepare(
          `
      SELECT * FROM collections
      WHERE user_id = ?
      AND sticker_name = ?
    `,
        )
        .get(userId!, stickerData.file) as any;

      if (!sticker) {
        await sock.sendMessage(from!, {
          text: "🚫 Você não possui essa figurinha no álbum!",
        });

        return;
      }

      db.prepare(
        `
    UPDATE collections
    SET is_main = 0
    WHERE user_id = ?
  `,
      ).run(userId);

      db.prepare(
        `
    UPDATE collections
    SET is_main = 1
    WHERE user_id = ?
    AND sticker_name = ?
  `,
      ).run(userId, stickerData.file);

      await sock.sendMessage(from!, {
        text: `⭐ Novo YAG!

${stickerData.emoji} ${stickerData.rarity}
🏆 ${stickerData.title}
🎴 ${stickerData.code}`,
      });
    }

    // =========================================================
    // COMANDO !TROCAR
    // =========================================================

    if (text.startsWith("!trocar ")) {
      const args = text.split(" ");

      const stickerCode = args[1];

      const mentionedUser =
        msg.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0];

      if (!stickerCode || !mentionedUser) {
        await sock.sendMessage(from!, {
          text: "📨 Use:\n!trocar CODIGO @usuario",
        });

        return;
      }

      if (mentionedUser === userId) {
        await sock.sendMessage(from!, {
          text: "🤨 Você não pode trocar figurinha com você mesmo.",
        });

        return;
      }

      const stickerData = stickers.find(
        (sticker) => sticker.code === stickerCode,
      );

      if (!stickerData) {
        await sock.sendMessage(from!, {
          text: "🔎 Não encontrei essa figurinha.",
        });

        return;
      }

      const userSticker = db
        .prepare(
          `
      SELECT *
      FROM collections
      WHERE user_id = ?
      AND sticker_name = ?
    `,
        )
        .get(userId!, stickerData.file);

      if (!userSticker) {
        await sock.sendMessage(from!, {
          text: "🚫 Você não possui essa figurinha para troca!",
        });

        return;
      }

      trades[mentionedUser] = {
        fromChat: from!,
        requesterId: userId!,
        receiverId: mentionedUser,
        stickerCode,
      };

      await sock.sendMessage(mentionedUser, {
        text: `🔄 Você recebeu uma proposta de troca!

🏆 ${stickerData.title}
🎴 ${stickerData.code}

Digite:
!aceitar`,
      });

      await sock.sendMessage(from!, {
        text: "✅ Pedido de troca enviado com sucesso!",
      });

      return;
    }
    // =========================================================
    // COMANDO !ACEITAR
    // =========================================================

    if (text === "!aceitar") {
      const trade = trades[userId!];

      if (!trade) {
        await sock.sendMessage(from!, {
          text: "📭 Você não possui trocas pendentes.",
        });

        return;
      }

      const stickerData = stickers.find(
        (sticker) => sticker.code === trade.stickerCode,
      );

      if (!stickerData) {
        await sock.sendMessage(from!, {
          text: "⚠️ Essa figurinha não existe mais.",
        });

        delete trades[userId!];

        return;
      }

      const requesterStillHasSticker = db
        .prepare(
          `
      SELECT *
      FROM collections
      WHERE user_id = ?
      AND sticker_name = ?
    `,
        )
        .get(trade.requesterId, stickerData.file);

      if (!requesterStillHasSticker) {
        await sock.sendMessage(from!, {
          text: "🚫 Essa troca não pode mais ser concluída. A pessoa que enviou a proposta não possui mais essa figurinha.",
        });

        delete trades[userId!];

        return;
      }

      const transaction = db.transaction(() => {
        const result = db
          .prepare(
            `
        UPDATE collections
        SET user_id = ?
        WHERE user_id = ?
        AND sticker_name = ?
      `,
          )
          .run(trade.receiverId, trade.requesterId, stickerData.file);

        if (result.changes === 0) {
          throw new Error("Nenhuma figurinha foi transferida.");
        }

        addTrade();
      });

      try {
        transaction();
      } catch (error) {
        console.error("Erro ao concluir troca:", error);

        await sock.sendMessage(from!, {
          text: "⚠️ Ocorreu um erro ao concluir a troca. Nenhuma troca foi contabilizada.",
        });

        return;
      }

      const eventData: any = getEvent();

      if (eventData.current_phase === 1 && eventData.phase1_trades >= 100) {
        setPhase(2);

        await sock.sendMessage(from!, {
          text: `🩸 *O PRIMEIRO SELO FOI ROMPIDO*

Cem pactos foram firmados entre os sobreviventes.

O mercado silenciou.
As portas do sacrifício se abriram.

🔓 *SEGUNDO RITO DESPERTADO*

📦 O Sacrifício dos Campeões`,
        });
      }

      delete trades[userId!];

      await sock.sendMessage(from!, {
        text: `🎉 Troca concluída com sucesso!

Você recebeu:
🏆 ${stickerData.title}
🎴 ${stickerData.code}`,
      });

      await sock.sendMessage(trade.requesterId, {
        text: `🤝 Sua troca foi aceita!

Você enviou:
🏆 ${stickerData.title}
🎴 ${stickerData.code}`,
      });

      return;
    }

    // =========================================================
    // COMANDO !HELP
    // =========================================================

    if (text === "!help") {
      await sock.sendMessage(from!, {
        text: `📖 *COMANDOS DA COPA*

📦 *Figurinhas*
!abrir → Abre um pack
!pegar 1/2/3 → Escolhe uma figurinha
!album → Mostra seu álbum completo
!titular CODIGO → Define sua figurinha titular

🤝 *Interações*
!trocar CODIGO @usuario → Envia uma troca
!aceitar → Aceita uma troca pendente

🥷 *Roubo*
!roubar @usuario → Rouba uma figurinha aleatória
!devolva → Recupera sua figurinha roubada (20 min)

🏆 *Competição*
!rank → Ranking geral dos jogadores
!stats → Estatísticas da copa

ℹ️ *Ajuda*
!help → Exibe esta mensagem

━━━━━━━━━━━━━━

⭐ Pontuação:

🔥 Mítica = 50 pts
🟡 Lendária = 15 pts
🟣 Épica = 7 pts
🔵 Rara = 3 pts
⚪ Comum = 1 pt

📦 Limite do álbum: 18 figurinhas
🥷 Roubo global: 1 a cada 12 horas`,
      });
    }

    // =========================================================
    // COMANDO !EVENTO
    // =========================================================

    if (text === "!evento") {
      const eventData: any = getEvent();

      if (eventData.current_phase === 1) {
        const progress = Math.floor((eventData.phase1_trades / 100) * 100);

        await sock.sendMessage(from!, {
          text: `🌑 *CRÔNICAS DO CAOS*

🤝 *PRIMEIRO RITO - O MERCADO DAS ALMAS*

Pactos firmados:
${eventData.phase1_trades}/100

🩸 Avanço do selo:
${progress}%`,
        });

        return;
      }

      if (eventData.current_phase === 2) {
        const progress = Math.floor((eventData.phase2_packs / 100) * 100);

        await sock.sendMessage(from!, {
          text: `🌑 *CRÔNICAS DO CAOS*

📦 *SEGUNDO RITO - O SACRIFÍCIO DOS CAMPEÕES*

Oferendas abandonadas:
${eventData.phase2_packs}/100

⚠️ Se alguém tocar no proibido,
o rito retorna ao pó.

🩸 Avanço do selo:
${progress}%`,
        });

        return;
      }

      if (eventData.current_phase === 3) {
        await sock.sendMessage(from!, {
          text: `🌑 *CRÔNICAS DO CAOS*

⚔️ *TERCEIRO RITO - A GUERRA DOS CAÍDOS*

A arena está aberta.
Apenas um sairá carregando a chave.`,
        });

        return;
      }

      if (eventData.current_phase === 4) {
        await sock.sendMessage(from!, {
          text: `🌑 *CRÔNICAS DO CAOS*

🔑 *QUARTO RITO - O COFRE MÍTICO*

Os pergaminhos estão despertos.
As chaves procuram seus portadores.

Use:
!chaves

Para consultar os selos.`,
        });

        return;
      }
    }
    // =========================================================
    // COMANDO !INICIARGUERRA
    // =========================================================

    if (text === "!iniciarguerra") {
      resetWar();
      resetKeys();

      const players = db
        .prepare(
          `
      SELECT DISTINCT user_id
      FROM collections
    `,
        )
        .all() as any[];

      if (players.length < 2) {
        await sock.sendMessage(from!, {
          text: "⚠️ Não há jogadores suficientes para iniciar a guerra.",
        });

        return;
      }

      for (const player of players) {
        registerPlayer(player.user_id);
      }

      setPhase(3);

      await sock.sendMessage(from!, {
        text: `⚔️ *A GUERRA DAS FIGURINHAS COMEÇOU!*

${players.length} jogadores entraram na arena.

❤️ Todos começaram com 100 HP.

Use:
!guerra

Para ver os sobreviventes.`,
      });

      return;
    }
    // =========================================================
    // COMANDO !GUERRA
    // =========================================================

    if (text === "!guerra") {
      const alivePlayers = getAlivePlayers() as any[];

      if (alivePlayers.length === 0) {
        await sock.sendMessage(from!, {
          text: "⚔️ A guerra ainda não possui jogadores vivos.",
        });

        return;
      }

      let message = `⚔️ *GUERRA DAS FIGURINHAS*

Jogadores vivos: ${alivePlayers.length}

`;

      alivePlayers
        .sort((a, b) => b.hp - a.hp)
        .forEach((player, index) => {
          const user = db
            .prepare(
              `
          SELECT user_name
          FROM users
          WHERE user_id = ?
        `,
            )
            .get(player.user_id) as any;

          const playerName =
            user?.user_name || "+" + player.user_id.split("@")[0];

          message += `${index + 1}. 👤 ${playerName}
❤️ ${player.hp}/100 HP

`;
        });

      await sock.sendMessage(from!, {
        text: message,
      });

      return;
    }
    // =========================================================
    // COMANDO !ATACAR
    // =========================================================

    if (text.startsWith("!atacar ")) {
      const eventData: any = getEvent();

      if (eventData.current_phase !== 3) {
        await sock.sendMessage(from!, {
          text: "⚠️ A guerra ainda não está ativa.",
        });

        return;
      }

      const args = text.split(" ");
      const stickerCode = args[1];

      const targetId =
        msg.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0];

      if (!stickerCode || !targetId) {
        await sock.sendMessage(from!, {
          text: "⚔️ Use:\n!atacar CODIGO @usuario",
        });

        return;
      }

      if (targetId === userId) {
        await sock.sendMessage(from!, {
          text: "😂 Você não pode atacar a si mesmo.",
        });

        return;
      }

      const attacker = getPlayer(userId!) as any;
      const target = getPlayer(targetId) as any;

      if (!attacker || attacker.eliminated === 1) {
        await sock.sendMessage(from!, {
          text: "💀 Você não está vivo na guerra.",
        });

        return;
      }

      if (!target || target.eliminated === 1) {
        await sock.sendMessage(from!, {
          text: "💀 Esse jogador já foi eliminado ou não está na guerra.",
        });

        return;
      }

      const stickerData = stickers.find(
        (sticker) => sticker.code === stickerCode,
      );

      if (!stickerData) {
        await sock.sendMessage(from!, {
          text: "🔎 Não encontrei essa figurinha.",
        });

        return;
      }

      const attackerSticker = db
        .prepare(
          `
      SELECT *
      FROM collections
      WHERE user_id = ?
      AND sticker_name = ?
    `,
        )
        .get(userId!, stickerData.file) as any;

      if (!attackerSticker) {
        await sock.sendMessage(from!, {
          text: "🚫 Você não possui essa figurinha para atacar.",
        });

        return;
      }

      const damage = getStickerPoints(stickerData.rarity);

      db.prepare(
        `
    DELETE FROM collections
    WHERE id = ?
  `,
      ).run(attackerSticker.id);

      damagePlayer(targetId, damage);

      const updatedTarget = getPlayer(targetId) as any;

      const targetUser = db
        .prepare(
          `
      SELECT user_name
      FROM users
      WHERE user_id = ?
    `,
        )
        .get(targetId) as any;

      const targetName = targetUser?.user_name || "+" + targetId.split("@")[0];

      await sock.sendMessage(from!, {
        text: `⚔️ *ATAQUE REALIZADO!*

${stickerData.emoji} ${stickerData.rarity}
🏆 ${stickerData.title}
🎴 ${stickerData.code}

💥 Dano causado:
-${damage} HP

👤 Alvo:
${targetName}

❤️ Vida atual:
${Math.max(updatedTarget.hp, 0)}/100`,
      });

      if (updatedTarget.eliminated === 1) {
        await sock.sendMessage(from!, {
          text: `💀 *JOGADOR ELIMINADO!*

${targetName} caiu na Guerra das Figurinhas.`,
        });
      }

      const alivePlayers = getAlivePlayers() as any[];

      if (alivePlayers.length === 1) {
        const winner = alivePlayers[0];

        setWinner(winner.user_id);
        giveKey("Conquistador", winner.user_id);
        setPhase(4);

        const winnerUser = db
          .prepare(
            `
        SELECT user_name
        FROM users
        WHERE user_id = ?
      `,
          )
          .get(winner.user_id) as any;

        const winnerName =
          winnerUser?.user_name || "+" + winner.user_id.split("@")[0];

        await sock.sendMessage(from!, {
          text: `👑 *A GUERRA TERMINOU*

${winnerName} foi o último sobrevivente.

🔑 A *Chave do Conquistador* foi marcada em seu nome.

🔓 *O QUARTO RITO DESPERTOU*

O Cofre Mítico abriu os olhos.

O primeiro pergaminho será revelado agora...`,
        });

        await sendNextRiddle(sock, from!);
      }

      return;
    }

    // =========================================================
    // COMANDO !VIDA
    // =========================================================

    if (text === "!vida") {
      const player = getPlayer(userId!) as any;

      if (!player) {
        await sock.sendMessage(from!, {
          text: "⚠️ Você ainda não está participando da guerra.",
        });

        return;
      }

      if (player.eliminated === 1) {
        await sock.sendMessage(from!, {
          text: `💀 Você foi eliminado da guerra.

❤️ Vida: 0/100`,
        });

        return;
      }

      await sock.sendMessage(from!, {
        text: `❤️ *SUA VIDA NA GUERRA*

HP atual:
${Math.max(player.hp, 0)}/100`,
      });

      return;
    }
    // =========================================================
    // COMANDO !RESETGUERRA
    // =========================================================

    if (text === "!resetguerracivil") {
      resetWar();
      setPhase(3);

      await sock.sendMessage(from!, {
        text: `♻️ *GUERRA RESETADA*

Todos os dados da guerra foram apagados.

Use:
!iniciarguerra

para começar novamente.`,
      });

      return;
    }
    // =========================================================
    // COMANDO !CHAVES
    // =========================================================

    if (text === "!chaves") {
      const keys = getAllKeys() as any[];

      if (keys.length === 0) {
        await sock.sendMessage(from!, {
          text: "⚠️ Nenhuma chave cadastrada no banco. Verifique se a tabela mythic_keys foi criada no database.ts.",
        });

        return;
      }

      let message = `🔑 *CHAVES DO COFRE MÍTICO*

`;

      for (const key of keys) {
        let holderName = "Ainda não encontrada";

        if (key.holder_id) {
          const holder = db
            .prepare(
              `
          SELECT user_name
          FROM users
          WHERE user_id = ?
        `,
            )
            .get(key.holder_id) as any;

          holderName = holder?.user_name || "+" + key.holder_id.split("@")[0];
        }

        message += `🔑 ${key.key_name}
👤 ${holderName}

`;
      }

      await sock.sendMessage(from!, {
        text: message,
      });

      return;
    }

    // =========================================================
    // COMANDOS SECRETOS DOS PERGAMINHOS
    // =========================================================

    if (SECRET_KEY_COMMANDS[text]) {
      const eventData: any = getEvent();

      if (eventData.current_phase !== 4) {
        return;
      }

      const currentRiddle = getNextRiddle();

      if (!currentRiddle) {
        await sock.sendMessage(from!, {
          text: `🕯️ Todos os pergaminhos já foram decifrados.

O Cofre Mítico aguarda o chamado final.

Use:
!abrircofre`,
        });

        return;
      }

      if (text !== currentRiddle.command) {
        await sock.sendMessage(from!, {
          text: `🌫️ *A PALAVRA NÃO ECOA*

Este selo ainda não responde a esse chamado.`,
        });

        return;
      }

      const keyName = currentRiddle.keyName;
      const keyData: any = getKey(keyName);

      if (!keyData) {
        await sock.sendMessage(from!, {
          text: "⚠️ Essa chave não foi encontrada no banco de dados.",
        });

        return;
      }

      if (keyData.obtained === 1) {
        await sock.sendMessage(from!, {
          text: `🔒 A chave *${keyName}* já foi reivindicada.`,
        });

        return;
      }

      giveKey(keyName, userId!);

      await sock.sendMessage(from!, {
        text: `🔑 *O SELO FOI ROMPIDO*

${pushName} pronunciou a palavra correta.

🔑 A Chave da *${keyName}* encontrou um portador.

⏳ O próximo pergaminho surgirá em 4 minutos.`,
      });

      scheduleNextRiddle(sock, from!);

      return;
    }

    // =========================================================
    // COMANDO !DARCHAVE
    // =========================================================

    if (text === "!darchave") {
      const alivePlayers = getAlivePlayers() as any[];

      if (alivePlayers.length !== 1) {
        await sock.sendMessage(from!, {
          text: "⚠️ Precisa existir exatamente 1 jogador vivo para entregar a chave.",
        });

        return;
      }

      const winner = alivePlayers[0];

      setWinner(winner.user_id);
      giveKey("Conquistador", winner.user_id);
      setPhase(4);

      const winnerUser = db
        .prepare(
          `
      SELECT user_name
      FROM users
      WHERE user_id = ?
    `,
        )
        .get(winner.user_id) as any;

      const winnerName =
        winnerUser?.user_name || "+" + winner.user_id.split("@")[0];

      await sock.sendMessage(from!, {
        text: `🔑 *CHAVE ENTREGUE*

👑 ${winnerName} recebeu a *Chave do Conquistador*.

🔓 O quarto rito foi ativado.

O primeiro pergaminho será revelado agora...`,
      });

      await sendNextRiddle(sock, from!);

      return;
    }

    // =========================================================
    // COMANDO !ABRIRCOFRE
    // =========================================================

    if (text === "!abrircofre") {
      const eventData: any = getEvent();

      if (eventData.current_phase !== 4) {
        await sock.sendMessage(from!, {
          text: "⚠️ O Cofre Mítico ainda não despertou.",
        });

        return;
      }

      const keys = getAllKeys() as any[];
      const missingKeys = keys.filter((key) => key.obtained === 0);

      if (missingKeys.length > 0) {
        let message = `🔒 *O COFRE AINDA ESTÁ SELADO*

Ainda faltam ${missingKeys.length} chave(s):

`;

        for (const key of missingKeys) {
          message += `🔑 ${key.key_name}\n`;
        }

        await sock.sendMessage(from!, {
          text: message,
        });

        return;
      }

      const keyHolders = Array.from(
        new Set(keys.map((key) => key.holder_id).filter(Boolean)),
      ) as string[];

      const availableMythics = stickers.filter((sticker) => {
        const imagePath = path.join(IMAGES_PATH, sticker.file);

        const existing = db
          .prepare(
            `
        SELECT 1
        FROM collections
        WHERE sticker_name = ?
      `,
          )
          .get(sticker.file);

        return (
          fs.existsSync(imagePath) &&
          !existing &&
          sticker.file.startsWith("miticas/")
        );
      });

      if (availableMythics.length < keyHolders.length) {
        await sock.sendMessage(from!, {
          text: `⚠️ Não existem relíquias Míticas suficientes.

Portadores de chave: ${keyHolders.length}
Míticas disponíveis: ${availableMythics.length}`,
        });

        return;
      }

      const shuffledMythics = [...availableMythics].sort(
        () => Math.random() - 0.5,
      );

      let message = `🔓 *O COFRE MÍTICO FOI ABERTO*

As seis chaves foram reunidas.

As correntes se partiram.
As relíquias despertaram.

🔥 Os portadores receberam uma Figurinha Mítica:

`;

      for (let i = 0; i < keyHolders.length; i++) {
        const holderId = keyHolders[i];
        const mythic = shuffledMythics[i];

        const holder = db
          .prepare(
            `
        SELECT user_name
        FROM users
        WHERE user_id = ?
      `,
          )
          .get(holderId) as any;

        const holderName = holder?.user_name || "+" + holderId.split("@")[0];

        const alreadyHasMythic = db
          .prepare(
            `
        SELECT 1
        FROM collections
        WHERE user_id = ?
        AND sticker_name = ?
      `,
          )
          .get(holderId, mythic.file);

        if (!alreadyHasMythic) {
          db.prepare(
            `
        INSERT INTO collections (user_id, sticker_name)
        VALUES (?, ?)
      `,
          ).run(holderId, mythic.file);
        }

        message += `👤 ${holderName}
🔥 ${mythic.title}
🎴 ${mythic.code}

`;

        const mythicPath = path.join(IMAGES_PATH, mythic.file);

        try {
          await sendStickerMedia(
            sock,
            holderId,
            mythicPath,
            `🔥 *RELÍQUIA MÍTICA DESPERTADA*

🏆 ${mythic.title}
🎴 ${mythic.code}

Você carregou uma das chaves.
Agora a relíquia pertence ao seu álbum.`,
          );
        } catch {
          await sendStickerMedia(
            sock,
            from!,
            mythicPath,
            `🔥 *RELÍQUIA MÍTICA DESPERTADA*

👤 ${holderName}

🏆 ${mythic.title}
🎴 ${mythic.code}`,
          );
        }
      }

      await sock.sendMessage(from!, {
        text: message,
      });

      setPhase(5);

      return;
    }

    // =========================================================
    // COMANDO !STATS
    // =========================================================

    if (text === "!stats") {
      const collections = db
        .prepare(
          `
      SELECT *
      FROM collections
    `,
        )
        .all() as any[];

      const totalPlayers = db
        .prepare(
          `
      SELECT COUNT(DISTINCT user_id) as total
      FROM collections
    `,
        )
        .get() as any;

      let mythics = 0;
      let commons = 0;
      let rares = 0;
      let epics = 0;
      let legendaries = 0;

      const players: Record<string, number> = {};

      for (const item of collections) {
        const stickerData = stickers.find(
          (sticker) => sticker.file === item.sticker_name,
        );

        if (!stickerData) continue;

        if (stickerData.rarity === "Mítica") mythics++;
        if (stickerData.rarity === "Comum") commons++;
        if (stickerData.rarity === "Rara") rares++;
        if (stickerData.rarity === "Épica") epics++;
        if (stickerData.rarity === "Lendária") legendaries++;

        if (!players[item.user_id]) {
          players[item.user_id] = 0;
        }

        players[item.user_id] += getStickerPoints(stickerData.rarity);
      }

      const ranking = Object.entries(players).sort((a, b) => b[1] - a[1]);

      let leader = "Ninguém";
      let leaderPoints = 0;

      if (ranking.length > 0) {
        const leaderId = ranking[0][0];

        const player = db
          .prepare(
            `
        SELECT user_name
        FROM users
        WHERE user_id = ?
      `,
          )
          .get(leaderId) as any;

        leader = player?.user_name || leaderId;
        leaderPoints = ranking[0][1];
      }

      const remaining = stickers.length - collections.length;

      await sock.sendMessage(from!, {
        text: `📊 *ESTATÍSTICAS DA COPA*

👥 Jogadores: ${totalPlayers.total}

📦 Distribuídas: ${collections.length}
🖼️ Restantes: ${remaining}

━━━━━━━━━━━━━━

🔥 Míticas: ${mythics}
🟡 Lendárias: ${legendaries}
🟣 Épicas: ${epics}
🔵 Raras: ${rares}
⚪ Comuns: ${commons}

━━━━━━━━━━━━━━

👑 Líder Atual:
${leader}

⭐ ${leaderPoints} pontos`,
      });
    }

    // =========================================================
    // COMANDO !RANK
    // =========================================================

    if (text === "!rank") {
      const collections = db
        .prepare(
          `
      SELECT *
      FROM collections
    `,
        )
        .all() as any[];

      if (collections.length === 0) {
        await sock.sendMessage(from!, {
          text: "📭 Ainda não existem figurinhas coletadas.",
        });

        return;
      }

      const players: Record<string, any> = {};

      for (const item of collections) {
        const stickerData = stickers.find(
          (sticker) => sticker.file === item.sticker_name,
        );

        if (!stickerData) continue;

        if (!players[item.user_id]) {
          players[item.user_id] = {
            points: 0,
            mythics: 0,
            legendaries: 0,
            epics: 0,
            rares: 0,
            commons: 0,
            total: 0,
          };
        }

        players[item.user_id].points += getStickerPoints(stickerData.rarity);

        players[item.user_id].total++;

        if (stickerData.rarity === "Mítica") {
          players[item.user_id].mythics++;
        }

        if (stickerData.rarity === "Lendária") {
          players[item.user_id].legendaries++;
        }

        if (stickerData.rarity === "Épica") {
          players[item.user_id].epics++;
        }

        if (stickerData.rarity === "Rara") {
          players[item.user_id].rares++;
        }

        if (stickerData.rarity === "Comum") {
          players[item.user_id].commons++;
        }
      }

      const ranking = Object.entries(players).sort(
        (a: any, b: any) => b[1].points - a[1].points,
      );

      let message = `🏆 *RANKING DA COPA* 🏆\n\n`;

      ranking.slice(0, 10).forEach(([user, data]: any, index) => {
        const medal =
          index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : "🏅";

        const player = db
          .prepare(
            `
              SELECT user_name
              FROM users
              WHERE user_id = ?
            `,
          )
          .get(user) as any;

        const playerName = player?.user_name || "+" + user.split("@")[0];

        message += `${medal} ${index + 1}º Lugar

👤 ${playerName}

⭐ ${data.points} pontos
📦 ${data.total} figurinhas

🔥 ${data.mythics}
🟡 ${data.legendaries}
🟣 ${data.epics}
🔵 ${data.rares}
⚪ ${data.commons}

`;
      });

      await sock.sendMessage(from!, {
        text: message,
      });
    }

    // =========================================================
    // COMANDO !ROUBAR
    // =========================================================

    if (text.startsWith("!roubar")) {
      const cooldownTime = 6 * 60 * 60 * 1000;

      const lastRobbery = robberyCooldown.get();

      if (Date.now() - lastRobbery < cooldownTime) {
        const remaining = Math.ceil(
          (cooldownTime - (Date.now() - lastRobbery)) / (60 * 60 * 1000),
        );

        await sock.sendMessage(from!, {
          text: `🚨 O último roubo aconteceu recentemente.

Tente novamente em ${remaining} hora(s).`,
        });

        return;
      }

      const victimId =
        msg.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0];

      if (!victimId) {
        await sock.sendMessage(from!, {
          text: `📨 Use:\n!roubar @usuario`,
        });

        return;
      }

      if (victimId === userId) {
        await sock.sendMessage(from!, {
          text: "😂 Você não pode roubar a si mesmo.",
        });

        return;
      }

      const victimCollection = db
        .prepare(
          `
      SELECT *
      FROM collections
      WHERE user_id = ?
    `,
        )
        .all(victimId) as any[];

      const availableToSteal = victimCollection.filter((item) => {
        const stickerData = stickers.find(
          (sticker) => sticker.file === item.sticker_name,
        );

        if (!stickerData) return false;

        // Não rouba titular
        if (item.is_main === 1) return false;

        // Não rouba lendária ou mítica
        if (stickerData.rarity === "Lendária") return false;
        if (stickerData.rarity === "Mítica") return false;

        return true;
      });

      if (availableToSteal.length === 0) {
        await sock.sendMessage(from!, {
          text: "🛡️ Esse jogador não possui figurinhas válidas para roubo.",
        });

        return;
      }

      const randomSticker =
        availableToSteal[Math.floor(Math.random() * availableToSteal.length)];

      db.prepare(
        `
    UPDATE collections
    SET user_id = ?
    WHERE user_id = ?
    AND sticker_name = ?
  `,
      ).run(userId, victimId, randomSticker.sticker_name);

      steals[victimId] = {
        thief: userId,
        victim: victimId,
        stickerName: randomSticker.sticker_name,
        expiresAt: Date.now() + 20 * 60 * 1000,
      };

      robberyCooldown.set(Date.now());

      const stickerData = stickers.find(
        (sticker) => sticker.file === randomSticker.sticker_name,
      );

      if (!stickerData) {
        await sock.sendMessage(from!, {
          text: "⚠️ Erro ao localizar dados da figurinha.",
        });

        return;
      }

      const imagePath = path.join(IMAGES_PATH, stickerData.file);

      if (!fs.existsSync(imagePath)) {
        await sock.sendMessage(from!, {
          text: `⚠️ Arquivo da figurinha não encontrado:
${stickerData.file}`,
        });

        return;
      }

      await sendStickerMedia(
        sock,
        from!,
        imagePath,
        `🚨 ROUBO REALIZADO!

🥷 O ladrão conseguiu levar:

${stickerData.emoji} ${stickerData.rarity}

🏆 ${stickerData.title}
🎴 ${stickerData.code}

🛡️ A vítima possui 20 minutos para recuperar a figurinha usando:

!devolva`,
      );
    }

    // =========================================================
    // COMANDO !DEVOLVA
    // =========================================================

    if (text === "!devolva") {
      const steal = steals[userId!];

      if (!steal) {
        await sock.sendMessage(from!, {
          text: "📭 Você não possui nenhuma figurinha roubada.",
        });

        return;
      }

      if (Date.now() > steal.expiresAt) {
        delete steals[userId!];

        await sock.sendMessage(from!, {
          text: "⏰ O prazo expirou.\nA figurinha agora pertence ao ladrão.",
        });

        return;
      }

      db.prepare(
        `
    UPDATE collections
    SET user_id = ?
    WHERE user_id = ?
    AND sticker_name = ?
  `,
      ).run(steal.victim, steal.thief, steal.stickerName);

      delete steals[userId!];

      await sock.sendMessage(from!, {
        text: "🛡️ Figurinha recuperada com sucesso!",
      });
    }
  });
}

startBot();
