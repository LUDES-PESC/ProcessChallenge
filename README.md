# Process Panic! — BPMN Rescue

[Português](README-pt.md)

**Process Panic!** is a mobile-first educational game for learning BPMN by reading, executing, debugging, and repairing process models.

Version: **v0.2**

The game follows the teaching sequence used in the supporting course materials:

1. **Introduction: flow and tokens**
2. **Flows, Data and Activities**
3. **Pools, Lanes and Message Flows**
4. **Gateway semantics**
5. **Events**

Every lesson ends with a **lesson debrief**. Completing the fifth lesson opens a separate **final debrief** that revisits the complete route.

## Educational design

The central loop is:

> **choose → execute → observe → debrief**

BPMN is treated as executable semantics rather than a vocabulary list. Tokens make routing, parallelism, synchronization, waiting, termination, participants, and message exchange visible. Wrong choices are allowed to produce observable process behavior before the explanation is shown.

## Internationalization

The game uses one explicit I18N catalogue with five complete language variants:

- English
- Português
- Français
- Español
- Italiano

The interface, mission statements, answer options, feedback, debriefs, glossary, setup labels, and every label drawn inside BPMN SVG diagrams come from the active language catalogue. Language changes apply immediately without restarting the mission. The language preference is shared by the landing page, article, and game.

## BPMN notation

The BPMN shapes are redrawn as native SVG. The **BPMN Quick Guide, Second Edition, by Denis Gagné and Simon Ringuette** is used as the visual reference for the symbol set, while **OMG BPMN 2.0.2** is treated as the normative specification for notation and semantics.

- BPMN Quick Guide: https://www.bpmnquickguide.com/view-bpmn-quick-guide/
- OMG BPMN 2.0.2: https://www.omg.org/spec/BPMN/2.0.2

The game does not embed Quick Guide image assets. Color is reserved for game state and token animation rather than presented as normative BPMN meaning.

## Repository structure

- `index.html` — multilingual project landing page
- `article.html` — multilingual short article about the educational design
- `play/index.html` — stable entry point that opens the game
- `processpanic.html` — self-contained playable HTML5 game
- `manifest.webmanifest` — PWA metadata
- `sw.js` — offline service worker
- `icons/` — install icons
- `.github/workflows/pages.yml` — GitHub Pages deployment
- `.github/workflows/validate.yml` — JavaScript, I18N, structure, and PWA validation
- `AIDisclaimer.md` — disclosure of AI-assisted development
- `LICENSE` — MIT License

## Running locally

The game itself can be opened directly as `processpanic.html`. PWA installation and the service worker require an HTTP/HTTPS origin, so for full offline/install behavior serve the repository with a small local web server or use GitHub Pages.

## License

MIT License — Copyright (c) 2026 Geraldo Xexéo.