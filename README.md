# static-vyker

VYKER holding page — a single cyberpunk-styled page served by GitHub Pages.

**Live:** https://vyker.github.io/static-vyker/

## Structure

- `index.html` — the page markup (design-verbatim from the Stitch source; the design is the spec)
- `assets/css/tailwind.css` — compiled Tailwind (replaces the Play CDN runtime)
- `assets/js/main.js` — the page's vanilla JS (clock, hex ticker, cryptic output)
- `assets/favicon.svg` — brand mark
- Fonts: Share Tech Mono, Cinzel, Space Grotesk (Google Fonts CDN)
- Ambient FX (scanlines, vignette, cyber grid, flicker) live in the inline `<style>` block in `index.html`

## Rebuilding (after changing Tailwind classes or adding pages)

```bash
npm install
npm run build
```

## Notes

- Source of record: `stitch_cyberpunk_vyker_holding_page.zip` (kept in `C:\Users\Vyker\Hermes\vyker\`, not in this repo)
- No remote images; self-contained except Google Fonts
- Rollback: checkout a previous `deploy-*` tag and push, Pages republishes on push
