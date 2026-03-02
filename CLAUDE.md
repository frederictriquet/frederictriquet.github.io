# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

Site statique pur : HTML + CSS + JavaScript vanilla, sans bundler, framework ni dépendance. Prévisualisation directe en ouvrant `index.html` dans un navigateur.

## Architecture

- `index.html` — structure de la page : header (avatar GitHub, tagline), barre de filtres, grille de cartes projets, footer
- `style.css` — thème dark inspiré GitHub, design tokens via CSS custom properties (`:root`)
- `script.js` — filtrage des cartes par langage via `data-lang` et `data-filter`

## Projets recensés (ordre d'affichage)

| # | Nom | Langage | Description courte |
|---|-----|---------|--------------------|
| 1 | NosElus | TypeScript | Template SvelteKit prod avec CI/CD, Playwright, Vitest, mutation testing 100% |
| 2 | ForClaude | Shell | Guide de bonnes pratiques pour Claude Code : CLAUDE.md, MCP, agents, skills, prompting |
| 3 | Publipostage | Python | CLI OAuth 2.0 pour publier des vidéos sur TikTok et Instagram |
| 4 | Jukebox | Python | Lecteur audio modulaire (MP3/FLAC/WAV) Mac/Linux/Raspberry Pi, config YAML |
| 5 | ManyInOne | Kotlin | Application Android multi-fonctionnalités |
| 6 | FemtoLogger | TypeScript | Logger zéro-dépendance pour Node, transports Telegram/Slack/Discord, 97% coverage |
| 7 | FemtoLogger-python | Python | Portage Python async de FemtoLogger, transport Telegram, pip package |
| 8 | WhenIdle | Go | Daemon macOS : lance des tâches CPU-intensives pendant les périodes d'inactivité |
| 9 | VideoSequencer | Svelte | Séquenceur vidéo interactif |
| 10 | PrivaSend | TypeScript | Alternative self-hosted à WeTransfer, upload chunked jusqu'à 5 Go, liens tokenisés |
| 11 | PrivateTab | TypeScript | Extension Chrome/Firefox : protection d'onglets par mot de passe (PBKDF2) |

## Conventions

**Ajouter un projet** : créer un `<article class="card" data-lang="LANGAGE">` dans `#projects-grid`. Le `data-lang` doit correspondre exactement à la valeur d'un bouton `data-filter` existant (ou ajouter le bouton dans `.filter-bar`).

**Langages supportés** (CSS classes et boutons déjà définis) : `TypeScript`, `Python`, `Go`, `Kotlin`, `Svelte`, `Shell`.

**Couleurs** : définies comme variables CSS dans `:root` (`--ts`, `--py`, `--go`, `--kotlin`, `--svelte`, `--shell`). Ajouter la variable et la classe `.lang-badge.xxx` pour tout nouveau langage.
