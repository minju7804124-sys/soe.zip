# soe.zip — Portfolio OS (Y2K CRT Edition)

A Next.js App Router portfolio rebuilt as a Win98-inspired “Portfolio OS” centered inside a CRT monitor frame.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- react-draggable

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production (Vercel-ready)

```bash
npm run build
npm run start
```

No extra manual steps are required for Vercel.

## UX notes

- 1s boot screen with **SKIP**.
- Desktop icons support single-click select and double-click open.
- Windows are draggable and focus-aware.
- `Esc` closes the currently focused window.
- Mobile switches to a single-column launcher-like view (no overlapping windows).
- `CV.pdf` is available at `/cv.pdf`.
