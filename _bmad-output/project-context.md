# Project Context — DetteFacile
> Constitutional file — loaded by all agents and workflows

---

## Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16 |
| Language | TypeScript | 5+ |
| Styling | Tailwind CSS | 3+ |
| Components | shadcn/ui | latest |
| Forms | react-hook-form | 7+ |
| Validation | zod | 3+ |
| PDF | @react-pdf/renderer | 3+ |
| PWA | next-pwa | 5+ |
| Deployment | Vercel | — |

---

## Critical Rules (all agents must follow)

1. **TypeScript strict mode** — `strict: true` in tsconfig. No `any`.
2. **App Router only** — No `pages/` directory. All routes under `app/`.
3. **Client components** — Use `"use client"` only when needed (forms, PDF download, interactive UI). Prefer server components.
4. **PDF generation is client-side only** — Never attempt server-side PDF generation for MVP.
5. **No backend** — No API routes for MVP. All data stays in browser.
6. **French language** — All UI text in French. Legalese in French (droit français).
7. **Mobile-first** — All components designed for 375px width first, then desktop.
8. **Zod schema is the single source of truth** — Form validation and PDF data both use the same `DebtFormData` schema from `lib/schema.ts`.
9. **Accessibility** — All form inputs must have associated labels. Use shadcn/ui accessible primitives.
10. **No external API calls** — Fully offline-capable.

---

## Directory Conventions

- `app/` — Next.js routes only
- `components/form/` — Multi-step form steps
- `components/pdf/` — PDF template and download button
- `components/ui/` — shadcn/ui primitives (do not modify)
- `lib/` — Utilities, schema, helpers
- `_bmad-output/` — Planning docs (not deployed)

---

## Legal Context

DetteFacile generates documents conforming to **droit français** (French law).
- Articles 1359+ du Code Civil
- Reconnaissance de dette = acte sous seing privé
- Montant doit apparaître EN CHIFFRES et EN LETTRES
- Document doit être signé par les deux parties (manuscritement)
- Le PDF généré est un modèle — la signature reste manuscrite
