# Process Challenge — BPMN Rescue

[Português](README-pt.md)

**Process Challenge** is a mobile-first educational game for learning BPMN by reading, executing, debugging, and repairing process models.

Version: **v0.2**

## GitHub Pages

The complete public site lives in **`docs/`**:

- [Project home](docs/index.html)
- [Play](docs/play/index.html)
- [Direct game](docs/processchallenge.html)
- [Educational design article](docs/article.html)
- [PWA manifest](docs/manifest.webmanifest)

All links inside the published site are relative, so changing the repository name later does not require rewriting the site structure.

## Course sequence

1. **Introduction: flow and tokens**
2. **Flows, Data and Activities**
3. **Pools, Lanes and Message Flows**
4. **Gateway semantics**
5. **Events**
6. **Naming activities and events**
7. **Naming gateways and collaboration**

A playthrough always contains **21 missions**, sampled from a larger question bank. Questions are randomly selected and randomly ordered inside each lesson, while lesson order remains pedagogical.

Every lesson ends with an **error-driven debrief**. The final debrief summarizes recurring confusion patterns.

## Educational design

The central loop is:

> **choose → execute → observe → debrief**

BPMN is treated as executable semantics rather than a vocabulary list. Tokens make routing, parallelism, synchronization, waiting, termination, participants, and message exchange visible.

## Internationalization

The interface, questions, feedback, debriefs and labels inside BPMN diagrams are available in:

- English
- Português
- Français
- Español
- Italiano

## BPMN notation

The BPMN shapes are redrawn as native SVG.

- **Visual reference:** BPMN Quick Guide, Second Edition, Denis Gagné and Simon Ringuette
- **Normative reference:** OMG BPMN 2.0.2
- **Naming practices:** BPMN Naming Conventions Best Practices

The game does not embed Quick Guide image assets. Color is used for game state and token animation rather than as normative BPMN semantics.

## Repository structure

- `docs/` — complete GitHub Pages site and PWA
- `docs/processchallenge.html` — playable game
- `docs/index.html` — project landing page
- `docs/article.html` — educational design article
- `docs/play/` — stable play entry point
- `docs/icons/` — PWA icons
- `.github/workflows/pages.yml` — publishes only `docs/`
- `.github/workflows/validate.yml` — validates the game and published site
- `AIDisclaimer.md` — disclosure of AI-assisted development
- `LICENSE` — MIT License

## Running locally

For complete PWA behavior, serve the repository and open `/docs/`:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/docs/`.

## License

MIT License — Copyright (c) 2026 Geraldo Xexéo.
