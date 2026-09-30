# Vikas Maurya — Portfolio

Personal portfolio for Vikas Maurya — Cybersecurity Researcher & Full-Stack Developer.
Built with Next.js (App Router), TypeScript, and Tailwind CSS. Dark, editorial, security-lab aesthetic.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run typecheck
```

## Structure

- `src/app` — App Router pages, layout, metadata, SEO (sitemap, robots, JSON-LD)
- `src/components/sections` — Hero, Work, Security, Timeline, About, Contact, Footer
- `src/components/ui` — Nav and shared primitives
- `src/data` — typed content (profile, projects, experience) — the single source of truth
- `public/models` — optimised `.glb` assets for the planned 3D scenes
- `docs/` — production plan, GLB report, content deck

Content is fully server-rendered and works without any 3D/JS. The interactive 3D
workspace scenes (see `docs/PLAN.md`) layer on top progressively.

## Status

Phase 7 (content-first site) complete. 3D scene integration is next.
