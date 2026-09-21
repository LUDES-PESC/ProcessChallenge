# Process Panic! — BPMN Rescue

**Process Panic!** is a mobile-first educational game for learning BPMN by reading, executing, debugging, and repairing process models.

Version: **v0.2**

The project follows the progression of the BPMN course materials: Introduction; Flows, Data and Activities; Swimlanes and Message Flows; Gateway Types; and Events.

The playable game is designed as a self-contained HTML5 document. The repository also provides a landing page, a short explanatory article, GitHub Pages deployment, and PWA installation support.

## Languages

The complete game interface and all generated diagram labels are available in English, Portuguese, French, Spanish, and Italian. Language changes are applied immediately without restarting the current mission.

## Structure

- `index.html` — project landing page
- `article.html` — short article about the educational design
- `play/index.html` — stable entry point for playing
- `processpanic.html` — self-contained game
- `manifest.webmanifest` — PWA metadata
- `sw.js` — offline service worker
- `.github/workflows/pages.yml` — GitHub Pages deployment
- `.github/workflows/validate.yml` — syntax, I18N and content validation

## Educational principle

The core interaction is **choose → execute → observe → debrief**. BPMN is treated as executable semantics rather than a vocabulary list: tokens make routing, parallelism, synchronization, loops, events, pools, and messages visible.

## Reference

The notation targets OMG BPMN 2.0.2 and deliberately favors explicit, readable models when equivalent compact forms exist.
