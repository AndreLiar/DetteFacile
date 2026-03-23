
# Epic 1 — PWA Infrastructure
> Agent: Bob (Scrum Master)

**Goal:** Scaffold a working Next.js 16 PWA, deployable on Vercel, installable on mobile.

---

## Stories

### STORY-01 — Initialize Next.js project
- Init Next.js 14 with TypeScript, App Router, Tailwind CSS
- Configure tsconfig strict mode
- Install dependencies: next-pwa, @react-pdf/renderer, react-hook-form, zod, shadcn/ui
- Status: TODO

### STORY-02 — Configure PWA manifest & icons
- Create `public/manifest.json` with app name, icons, theme color
- Add 192x192 and 512x512 icons
- Configure next-pwa in next.config.js
- Status: TODO

### STORY-03 — Configure PWA meta tags
- Add PWA meta tags in root layout (apple-touch-icon, theme-color, viewport)
- Add `<link rel="manifest">` in layout
- Status: TODO

### STORY-04 — Initial Vercel deployment
- Connect repo to Vercel
- Verify build passes
- Verify PWA installable on mobile
- Status: TODO
