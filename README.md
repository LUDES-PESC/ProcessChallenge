# Process Panic! — BPMN Rescue

[Português](README-pt.md)

**Process Panic!** is a mobile-first educational game for learning BPMN by reading, executing, debugging, and repairing process models.

Version: **v0.2**

## Access the project

The GitHub Pages site is **live**:

- **Project home:** https://ludes-pesc.github.io/ProcessPanic/
- **Play Process Panic!:** https://ludes-pesc.github.io/ProcessPanic/play/
- **Direct game URL:** https://ludes-pesc.github.io/ProcessPanic/processpanic.html
- **Article — educational design:** https://ludes-pesc.github.io/ProcessPanic/article.html
- **PWA manifest:** https://ludes-pesc.github.io/ProcessPanic/manifest.webmanifest
- **Service worker:** https://ludes-pesc.github.io/ProcessPanic/sw.js

GitHub Actions:

- **Deploy Process Panic! to GitHub Pages:** https://github.com/LUDES-PESC/ProcessPanic/actions/workflows/pages.yml
- **Validate Process Panic:** https://github.com/LUDES-PESC/ProcessPanic/actions/workflows/validate.yml

## Repository links

- **Repository:** https://github.com/LUDES-PESC/ProcessPanic
- **Game source:** https://github.com/LUDES-PESC/ProcessPanic/blob/main/processpanic.html
- **Landing page source:** https://github.com/LUDES-PESC/ProcessPanic/blob/main/index.html
- **Article source:** https://github.com/LUDES-PESC/ProcessPanic/blob/main/article.html
- **English README:** https://github.com/LUDES-PESC/ProcessPanic/blob/main/README.md
- **README em português:** https://github.com/LUDES-PESC/ProcessPanic/blob/main/README-pt.md
- **AI Use Disclaimer:** https://github.com/LUDES-PESC/ProcessPanic/blob/main/AIDisclaimer.md
- **MIT License:** https://github.com/LUDES-PESC/ProcessPanic/blob/main/LICENSE
- **PWA manifest:** https://github.com/LUDES-PESC/ProcessPanic/blob/main/manifest.webmanifest
- **Service worker:** https://github.com/LUDES-PESC/ProcessPanic/blob/main/sw.js

## Course sequence

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

- **BPMN Quick Guide:** https://www.bpmnquickguide.com/view-bpmn-quick-guide/
- **OMG BPMN 2.0.2:** https://www.omg.org/spec/BPMN/2.0.2

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

The game itself is self-contained and can be opened directly as `processpanic.html`.

For full PWA installation and service-worker behavior, serve the repository over HTTP/HTTPS. For example:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## Installing on a phone

When opened from GitHub Pages in a compatible browser, Process Panic! can be installed as a web app. Use the browser's **Install app** or **Add to Home Screen** command. The game includes a manifest, install icons, and an offline service worker.

## License

MIT License — Copyright (c) 2026 Geraldo Xexéo.
