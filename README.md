# WhatsApp Game Bot

Bot para grupos de WhatsApp com um jogo de coleção de cartas: pacotes, trocas, rankings e eventos, com persistência local em SQLite.

## Problema

Manter o engajamento de um grupo com uma dinâmica simples, usando apenas comandos de mensagem, sem app extra. O projeto é um experimento pessoal de automação de chat e mecânicas de jogo.

## Funcionalidades

- Abertura de pacotes de cartas, com escolha entre as cartas do pacote
- Álbum de coleção por usuário
- Carta titular definida pelo usuário
- Trocas entre usuários por comando e menção
- Raridades e temporadas
- Ranking e estatísticas
- Eventos com fases e recompensas especiais (cofre)
- Cooldowns para controlar ações

## Stack

- Node.js
- TypeScript
- [Baileys](https://github.com/WhiskeySockets/Baileys) (conexão com WhatsApp Web)
- SQLite (better-sqlite3)

## Como rodar

Requisito: Node.js.

```bash
git clone https://github.com/Lucas-64/whatsapp-bot.git
cd whatsapp-bot
npm install
npm run dev
```

O `npm run dev` inicia o bot com `ts-node-dev` e exibe um QR Code no terminal. Para conectar, abra o WhatsApp no celular, vá em **Aparelhos conectados** e escaneie o código.

As imagens das cartas não estão no repositório. Antes de rodar, adicione as suas em `src/assets/images/` (as pastas `temp1/`, `temp2/` e `miticas/` já existem, com `.gitkeep`).

Os scripts de geração de cartas estão em `scripts/` (`generationSeason1.js`, `generationSeason2.js` e `generationSeasonFinal.js`). Eles não estão expostos como comandos no `package.json`.

## Comandos

| Comando | Função |
| --- | --- |
| `!abrir` | Abre um pacote |
| `!pegar 1`, `!pegar 2`, `!pegar 3` | Escolhe uma carta do pacote aberto |
| `!album` | Mostra a coleção do usuário |
| `!titular CODIGO` | Define a carta titular |
| `!trocar CODIGO @usuario` | Envia uma proposta de troca |
| `!aceitar` | Aceita uma troca |
| `!rank` | Mostra o ranking |
| `!stats` | Mostra as estatísticas do jogador |
| `!evento` | Mostra o progresso do evento |
| `!abrircofre` | Abre o cofre de recompensas |

## Estrutura

```text
src/
├── commands/     comandos de coleção, deck e duelo
├── data/         cartas, facções e raridades
├── database/     acesso ao SQLite e eventos globais
├── temp/         cooldowns, trocas, guerra e outros estados temporários
├── assets/       imagens (não incluídas no repositório)
└── index.ts      ponto de entrada
scripts/          geração de cartas por temporada
markdowns/        regras e documentação do jogo
```

## Dados sensíveis

Não publique as pastas de sessão do WhatsApp, o arquivo `.env` nem o banco de dados local. O `.gitignore` já cobre esses arquivos e as imagens.

## Status

Projeto pessoal experimental.

## Próximos passos

- Adicionar um script `npm` para a geração de cartas, já que hoje ela não é executada por comando.
- Criar um script de testes automatizados (não há nenhum no `package.json`).
- Padronizar o acesso ao banco: o projeto tem `sqlite3` e `better-sqlite3` nas dependências.
