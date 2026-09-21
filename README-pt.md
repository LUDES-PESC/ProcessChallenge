# Process Challenge — BPMN Rescue

**Process Challenge** é um jogo educacional mobile-first para aprender BPMN lendo, executando, depurando e consertando modelos de processo.

Versão: **v0.2**

## GitHub Pages

Todo o site público fica em **`docs/`**:

- [Página inicial](docs/index.html)
- [Jogar](docs/play/index.html)
- [Jogo direto](docs/processchallenge.html)
- [Artigo sobre o design educacional](docs/article.html)
- [Manifesto PWA](docs/manifest.webmanifest)

Os links internos do site publicado são relativos. Assim, a futura troca do nome do repositório não exige alterar a estrutura do site.

## Curso

O jogo possui sete aulas:

1. **Introdução: fluxo e tokens**
2. **Fluxos, Dados e Atividades**
3. **Pools, Lanes e Message Flows**
4. **Semântica de Gateways**
5. **Eventos**
6. **Nomes de Atividades e Eventos**
7. **Nomes de Gateways e Colaboração**

Cada partida tem sempre **21 questões**, sorteadas de um banco maior e embaralhadas dentro de cada aula. A ordem pedagógica das aulas é preservada.

Há um **debrief baseado nos erros** ao final de cada aula e um debrief final com padrões de confusão.

## Idiomas

Toda a interface, questões, feedbacks, debriefs e labels dos diagramas estão disponíveis em inglês, português, francês, espanhol e italiano.

## Notação

A simbologia BPMN é redesenhada em SVG nativo, usando o BPMN Quick Guide como referência visual e a OMG BPMN 2.0.2 como referência normativa. As aulas de nomenclatura também usam as BPMN Naming Conventions Best Practices.

## Estrutura

- `docs/` — site completo do GitHub Pages e PWA
- `docs/processchallenge.html` — jogo
- `docs/index.html` — página inicial
- `docs/article.html` — artigo
- `docs/play/` — entrada estável para o jogo
- `docs/icons/` — ícones da PWA
- `.github/workflows/pages.yml` — publica somente `docs/`
- `.github/workflows/validate.yml` — valida jogo e site
- `AIDisclaimer.md` — declaração de uso de IA
- `LICENSE` — licença MIT

## Execução local

Para testar a PWA completa:

```bash
python -m http.server 8000
```

Abra `http://localhost:8000/docs/`.

## Licença

MIT License — Copyright (c) 2026 Geraldo Xexéo.
