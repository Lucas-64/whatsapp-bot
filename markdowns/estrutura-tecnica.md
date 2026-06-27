# Estrutura Técnica

## Pastas sugeridas

```txt
src/
  data/
    cards.ts
    factions.ts
    rarities.ts

  database/
    database.ts

  game/
    duel/
      duelManager.ts
      duelTypes.ts
      duelEffects.ts
      turnManager.ts

    deck/
      deckManager.ts
      deckValidation.ts

    cards/
      cardEffects.ts
      cardResolver.ts
      cardTypes.ts

    interference/
      interferenceManager.ts

  commands/
    collectionCommands.ts
    deckCommands.ts
    duelCommands.ts
    adminCommands.ts

  assets/
    cards/
      common/
      rare/
      epic/
      legendary/
      mythic/

    frames/
      common_frame.png
      rare_frame.png
      epic_frame.png
      legendary_frame.png
      mythic_frame.png

  temp/
    activeDuels.ts
    pendingDuels.ts