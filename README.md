# PaperTrail

Who owns the news you read. A media-ownership and funding transparency tracker: outlet ownership chains, funder registries, procedural bias-flagging, and a corporate-entity allegations tracker — all citation-first, with demo data standing in for the real filing pipelines (MCA, SEBI, ECI, SEC, FEC) until those are connected.

## Status

Phase 1 complete: the original single-file prototype has been split into a modular Vite + React app with real client-side routing (`react-router-dom`) and every former tab now a real, deep-linkable URL. No backend yet — see `docs/papertrail-pipeline-spec.md` for the planned data-ingestion architecture and `docs/papertrail-phase1-build-brief.md` for how this phase was scoped.

## Development

```bash
npm install
npm run dev       # dev server, http://localhost:5173
npm run build     # production build to dist/
npm run preview   # serve the production build locally
```

## Structure

```
src/
  data/        static demo datasets (outlets, donors, corporate entities, rubric, memorial, country profiles)
  utils/       search/scoring helpers with no React dependency
  components/
    common/    small shared pieces (Stamp, Cite, ScoreRing, LogoBox, SkeletonCard)
    outlet/    outlet dossier and its sub-components (incident logging/review, right of reply, etc.)
    donor/     funder registry cards and dossier
    pages/     top-level routed pages
  App.jsx      route table + app-wide state (theme, persisted incidents/replies, admin mode)
```

## Error tracking

Sentry is wired up in `src/main.jsx` but inert until a DSN from a Sentry project is added.

## Deploy

Configured for Netlify (`netlify.toml`): `npm run build` → `dist/`, with an SPA fallback redirect so deep links and hard refreshes work on every route.
