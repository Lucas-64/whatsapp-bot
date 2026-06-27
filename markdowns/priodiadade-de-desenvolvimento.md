
---

# Documento 10 — Prioridade de Desenvolvimento

Crie o arquivo:

## `10-roadmap.md`

```md
# Roadmap de Desenvolvimento

## Fase 1 — Base das cartas

Objetivo:
Criar a estrutura de cartas no código.

Tarefas:
- criar cards.ts;
- definir tipos de carta;
- definir raridades;
- definir facções;
- criar tabela de cartas;
- criar coleção do usuário.

Comandos:
- !cartas
- !carta CODIGO
- !grimorio

## Fase 2 — Deck

Objetivo:
Permitir que jogadores montem decks.

Tarefas:
- criar tabela decks;
- validar limite de cartas;
- validar raridade;
- impedir carta que o usuário não possui;
- listar deck.

Comandos:
- !deck
- !adddeck CODIGO
- !removerdeck CODIGO
- !limpardeck

## Fase 3 — Duelo simples

Objetivo:
Criar duelo 1x1 funcional.

Tarefas:
- desafiar jogador;
- aceitar duelo;
- sortear mão inicial;
- alternar turnos;
- usar cartas de dano e cura;
- encerrar duelo.

Comandos:
- !duelar
- !aceitarduelo
- !mao
- !usar
- !passar
- !statusduelo
- !desistir

## Fase 4 — Efeitos avançados

Objetivo:
Adicionar defesa, maldição, invocação e relíquia.

Tarefas:
- implementar duração de efeitos;
- implementar cemitério;
- implementar criaturas;
- implementar efeitos por turno.

## Fase 5 — Interferência do grupo

Objetivo:
Permitir que jogadores externos afetem o duelo.

Tarefas:
- sacrificar carta para curar;
- sacrificar carta para aumentar dano;
- sacrificar carta para defender;
- sacrificar carta para aplicar maldição;
- registrar interferências no log.

Comandos:
- !sacrificar
- !interferir

## Fase 6 — Eventos

Objetivo:
Criar eventos especiais.

Ideias:
- boss global;
- guerra entre facções;
- torneio;
- invasão do abismo;
- temporada do eclipse.