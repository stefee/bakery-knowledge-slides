# bakery-knowledge-slides

Slide deck for the Hearth & Wheel / Open Knowledge Format hackathon project, built with [reveal.js](https://revealjs.com) and Vite.

The project itself (knowledge bundle, MCP server and demos) lives in [stefee/bakery-knowledge](https://github.com/stefee/bakery-knowledge).

```bash
npm install
npm run dev       # http://localhost:5173, live reload
npm run build     # static site in dist/
```

- Slides: `index.html` (one `<section>` per slide; `<aside class="notes">` for speaker notes).
- Theme: `src/theme.css` (warm bakery palette layered on reveal's `white` theme).
- Keys: arrows to navigate, `S` speaker view, `O` overview, `F` fullscreen.
- PDF: open `http://localhost:5173/?print-pdf` and print to PDF from Chrome.
