# Modelo de Carta

Cada carta deve seguir o seguinte padrão:

## Campos

- código;
- nome;
- tipo;
- facção;
- raridade;
- custo;
- efeito;
- valor numérico;
- duração;
- alvo;
- pode ser usada em duelo;
- pode ser usada como interferência;
- texto curto;
- texto narrativo;
- imagem;
- frame.

## Exemplo

```json
{
  "code": "ATK001",
  "name": "Corte Enferrujado",
  "type": "ataque",
  "faction": "Ordem da Cinza",
  "rarity": "comum",
  "cost": 1,
  "effect": "damage",
  "value": 10,
  "duration": 0,
  "target": "enemy",
  "usableInDuel": true,
  "usableAsInterference": false,
  "shortText": "Causa 10 de dano.",
  "lore": "Uma lâmina velha ainda é capaz de abrir carne fresca.",
  "image": "atk001_corte_enferrujado.png",
  "frame": "common_frame.png"
}