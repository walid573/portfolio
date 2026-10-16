<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio — Agent Notes

Single-app Next.js 16.4.1 portfolio (React 19, TS strict, Tailwind v4). No monorepo, no tests, no CI.

## Commands

- `npm run dev` / `npm run build` / `npm run start`
- Lint: `npx eslint .` — `npm run lint` is bare `eslint` with no path arg, so pass a path explicitly.
- Typecheck: `npx tsc --noEmit` — no dedicated script exists.
- No test runner configured. Verify with build + typecheck + lint.

## Structure

- `app/page.tsx` assembles homepage from `Hero`, `HomeAbout`, `HomeTechGrid`, `HomeGitHub` (not the full `About`/`Skills`/`Contact` section components — those back the standalone `/about`, `/skills`, etc. routes).
- `app/projects/[slug]/page.tsx` is the only dynamic route: `generateStaticParams` from `getAllProjectSlugs()`, `await params` (Next 16 async params typed as `PageProps<"/projects/[slug]">`), `notFound()` on unknown slug.
- Content source of truth: `data/portfolio.ts` (`personalInfo`, `skillsData`, `educationData`, `journeyMilestones`) and `data/projects.ts` (`projectsData`). New project = add one entry to `projectsData`; card + detail route generate automatically.
- Path alias: `@/*` maps to repo root (`./`), not `./src`.
- Styling: Tailwind v4 via `@import "tailwindcss"` in `app/globals.css` plus `@tailwindcss/turbopack` loader rule in `next.config.ts`. Design tokens/utilities (`.glass`, `.glass-card`, `.gradient-text`, `.bg-grid-pattern`) live in `globals.css`.

## Gotchas

- `next.config.ts` enables `cacheComponents: true` and `partialPrefetching: true`; keep Server/Client boundaries clean and don't break static generation of project pages.
- Contact form (`components/Contact.tsx`) is `mailto:`-only — no API route/backend. Don't add server actions without asking.
- Theme defaults to dark: `html.dark`/`html.light` class + `localStorage("theme")`, with an inline FOUC script in `app/layout.tsx` and extensive `html.light` overrides in `globals.css`. Test visual changes in both modes.
- `public/resume.pdf` and `public/images/profile.jpg` are placeholders; resume flow goes through `ResumeModal.tsx`, not a direct download.
