# soe-zip — Portfolio OS (Y2K CRT Edition)

A Next.js + Tailwind + TypeScript portfolio rebuilt as a Win98-inspired desktop inside a CRT monitor frame.

## Features

- Centered CRT monitor frame with physical bezel, stickers, and controls.
- 4:3 responsive screen area (`min(92vw, 1200px)`) containing the entire desktop UI.
- Win98-style windows (title bars, controls, draggable behavior on desktop).
- Desktop icons with single-click select and double-click open.
- Focus-based window management (ESC closes focused window).
- Boot screen (`Extracting soe.zip...`) for 1s with SKIP action.
- CRT overlay effects over the screen only (scanlines, noise, vignette).
- Taskbar inside screen (Start button + live clock).
- Mobile fallback launcher mode (single-column, non-overlapping windows).
- Content apps: WORKS, AI FILM, FASHION PACK, ABOUT.txt, CV.pdf, CONTACT.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build (Vercel-compatible)

```bash
npm run build
npm start
```

No extra setup is required for deployment.
