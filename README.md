# partypress.org website

Static site for [partypress.org](https://partypress.org): project homepage, browse & search, and API docs for the PARTYPRESS corpus.

## Structure

- **`index.html`** — Homepage (PARTYPRESS v2, team, PARTYPRESS v1 / ParlGov, support)
- **`search/`** — Browse & search UI (map, filters, results table, FAQ). Uses the PARTYPRESS API; token required.
- **`api/`** — API documentation
- **`styles.css`**, **`script.js`** — Shared styles and scripts
- **`assets/`** — Favicons, web manifest
- **`img/`** — Team photos, partner logos

## Local preview

No build step. Serve the repo root with any static server, e.g.:

```bash
python3 -m http.server 8000
# or: npx serve .
```

Then open `http://localhost:8000`. The search page talks to the live API by default; use `?local=1` and a local API if you need to test against local data.

## Deploy

Typically deployed via GitHub Pages (see `CNAME`). Push to `main` to update the live site.

## Issues and feedback

Report bugs, data problems, or API issues at [GitHub Issues](https://github.com/partypress-org/partypress_website/issues).
