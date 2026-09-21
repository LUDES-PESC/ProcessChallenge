# Process Panic! — BPMN Rescue

**Process Panic!** é um jogo educacional mobile-first para aprender BPMN lendo, executando, depurando e consertando modelos de processo.

Versão: **v0.2**

O jogo segue a ordem das aulas: **Introdução → Fluxos, Dados e Atividades → Pools, Raias e Mensagens → Gateways → Eventos**. Há debrief ao final de cada aula e um debrief geral.

## Idiomas

Toda a interface, opções, feedbacks, debriefs e labels dos diagramas são internacionalizados em inglês, português, francês, espanhol e italiano. A troca é imediata.

## Notação

A simbologia é redesenhada em SVG nativo tomando o [BPMN Quick Guide](https://www.bpmnquickguide.com/view-bpmn-quick-guide/) como referência visual e a OMG BPMN 2.0.2 como referência normativa. O jogo privilegia notação explícita e não usa cor como semântica normativa de BPMN.

## Estrutura

- `index.html` — página inicial
- `article.html` — artigo curto sobre o design educacional
- `play/index.html` — entrada estável do jogo
- `processpanic.html` — jogo autocontido
- `manifest.webmanifest` e `sw.js` — PWA/offline
- `.github/workflows/` — validação e publicação no GitHub Pages

## Licença

MIT License — Copyright (c) 2026 Geraldo Xexéo.