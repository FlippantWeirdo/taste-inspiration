# Taste — a design inspiration library

A curated, labelled library of design inspiration. Every entry answers five questions:
**what is this design, what vocabulary describes it, what's the brief, what prompt builds it,
and what recipe generates its imagery.**

React + Vite.

## Running it

**Double-click `start.cmd`.** It installs dependencies the first time, then opens the app
in your browser. Nothing else to do.

Same thing from a terminal:

```bash
npm start
```

The app runs at <http://localhost:4610>. Edits to anything in `src/` appear instantly —
no rebuild, no refresh.

To produce a static copy you can host or hand to someone:

```bash
npm run build
```

That writes `dist/` with the screenshots copied alongside. Serve it with `npm run preview`.
`dist/` needs a web server — opening its `index.html` straight off the filesystem won't
work, because browsers block ES modules over `file://`.

## What's in it

- **38 entries** across **7 design types**, all with screenshots
- [fora.so](https://fora.so/) is entry `fora`;
  [contentarchitecture.dev](https://www.contentarchitecture.dev/) is `content-architecture`

### The design types (`src/data/families.js`)

| id | name | the short version |
|---|---|---|
| `editorial-grotesk` | Editorial Grotesk | huge tight-tracked sans on calm ground |
| `mono-technical` | Mono Technical | monospace, visible grid, status-bar furniture |
| `cinematic-atmosphere` | Cinematic Atmosphere | one full-bleed photograph carrying the mood |
| `neon-dark` | Neon Dark | near-black lit by a single acid or bloom colour |
| `painterly-illustrated` | Painterly & Illustrated | drawn or generated worlds, not photography |
| `bento-studio` | Bento Studio | uneven card grid of studio-lit objects |
| `app-surface` | App Surface | the product UI itself as the hero |

## Using it

| | |
|---|---|
| `/` | focus search |
| `←` `→` | previous / next entry while a sheet is open |
| `Esc` | close the sheet |
| click a swatch | copies the hex |
| `◑` | toggle paper / ink theme (remembered) |

Search covers **everything** — titles, vocabulary, notes, briefs, prompts, recipes, hex
codes. Multiple words are AND-ed, so `dark mono grid` narrows properly.

URLs are shareable: `#family/neon-dark`, `#entry/dune`, `#q/gradient`.

## Adding an entry

1. Drop the screenshot into `screenshots/`.
2. Append one object to the array in `src/data/library.js`.

That's it — the dev server picks it up on save. Only `id`, `title`, and `family` are
strictly required; everything else degrades gracefully. A missing or broken `image`
renders a typographic card built from the entry's palette, as `fora` does.

```js
{
  id: "kebab-case-unique",          // used in the URL hash
  title: "Brand or Piece Name",
  styleLabel: "short × descriptor",  // shown top-right on the card
  family: "neon-dark",               // must match an id in families.js
  crossTags: ["mono-technical"],     // optional; entry also shows under these filters
  image: "screenshots/Screenshot 2026-07-25 224108.png",  // spaces are fine
  source: "https://example.com/",    // or null

  summary: "One or two sentences: what this design actually is.",

  vocabulary: [                      // the language for this look — 6-10 terms
    "acid lime accent", "split-colour headline", "dot-matrix panels"
  ],

  notes: [                           // structural observations, one per bullet
    "Headline formula is consistent site-wide: first word in accent, rest in white."
  ],

  palette: ["#05070A", "#B8F02A"],   // click-to-copy swatches
  typeStack: {                       // free-form keys; each becomes a labelled row
    display: "Grotesk 600, tight tracking",
    body: "Grotesk 400, 13px"
  },

  brief: "The paragraph you'd hand a designer — intent, not instructions.",
  prompt: "The paragraph you'd hand an AI to build the page — concrete and specific.",
  imageRecipe: "IMAGE RECIPE — fill [SUBJECT], render at 16:9, 2K\n\n[SUBJECT: ...] ..."
}
```

### Conventions worth keeping

These are what make the library useful rather than just pretty:

- **`brief` states intent; `prompt` states specifics.** The brief explains *why* the
  design works and what feeling it targets. The prompt is executable — exact sizes,
  weights, hex codes, layout structure. Don't blur them.
- **`imageRecipe` uses a `[SUBJECT: ...]` slot** so the recipe is reusable across
  subjects. Keep the `STRICT palette:` clause — it's the thing that stops generators
  drifting into generic AI colour.
- **`vocabulary` is naming, not description.** "waterline split" and "dimmed inactive
  copy" are useful because you can ask for them by name later.
- **`notes` capture the mechanism** — the trick that makes it work, not what it looks like.

### Adding a design type

Add to `src/data/families.js` before using its `id`. Entries pointing at a missing family
fall into "Unfiled" rather than breaking. `tells` is the diagnostic list shown when
that family is filtered — the signals that identify the style in the wild.

## Files

```
start.cmd              double-click to run
index.html             page shell — Vite's entry point
vite.config.js         dev server + the step that copies screenshots into dist/

src/
  main.jsx             mounts React
  App.jsx              routing, filtering, search, keyboard
  styles.css           both themes (paper / ink)
  components/
    Masthead.jsx       brand, search, family tabs, result count
    Card.jsx           one gallery card
    Sheet.jsx          the detail modal
    Recipe.jsx         tints the image-recipe header and [SLOTS]
    Figure.jsx         image, with a typographic fallback
  lib/
    library.js         taxonomy lookup, filtering, search index
    useRoute.js        hash <-> state
    useCopy.js         clipboard, with a fallback for non-secure contexts
  data/
    families.js        the taxonomy      ← edit
    library.js         the entries       ← edit

screenshots/           source images     ← drop new ones here
```

### A note on the modal

The sheet's contents are derived from the open entry id on every render — it isn't
populated field-by-field after opening. If an id doesn't resolve (a stale link, a deleted
entry), there's no sheet at all rather than an empty one, and the id is dropped from the
URL. The body scroll lock is released by an effect cleanup, so it can't outlive the modal.
