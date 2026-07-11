# PaperTrail — Phase 1 Build Brief (for Claude Code)

**Read this first if you're a Claude Code session picking this up.** This project
is Claude-only — no Codex, no handoff between tools. This brief assumes you're
running locally with real network access (npm registry, git, Netlify CLI),
which the claude.ai chat sandbox that wrote this brief does not have. Execute
these steps directly; don't ask the user to run them manually unless a step
explicitly requires a decision or credential only they can provide.

**Starting point:** `papertrail-v12.jsx` — a single-file React app (in-browser
Babel, no build step) with all data as in-memory JS constants. Your job this
phase: turn it into a real, modular, buildable project — no backend yet.

**Explicitly out of scope for Phase 1:** Supabase, Google OAuth, any database,
any deploy of new infrastructure. This phase produces a Vite-built app that
*could* deploy to the existing Netlify site, but doesn't yet talk to a backend.

---

## Step 1 — Scaffold the real project

```bash
npm create vite@latest papertrail -- --template react
cd papertrail
npm install
```

Delete the boilerplate in `src/` (App.jsx, App.css, assets) — you're migrating
real content in, not keeping the Vite starter.

## Step 2 — Split the monolith into modules

Break `papertrail-v12.jsx` into this structure (exact grouping matters less than
the split itself — the goal is no single file over ~300 lines):

```
src/
  data/
    outlets.js          -- OUTLETS array
    donors.js            -- DONORS array
    corporateEntities.js -- CORPORATE_ENTITIES array
    memorial.js          -- MEMORIAL + MEMORIAL_COUNTS
    countryProfiles.js   -- COUNTRY_PROFILES + PRESS_FREEDOM
    rubric.js            -- RUBRIC + TEST_BENCH + PATTERN_THRESHOLD
    selfDossier.js        -- SELF_DOSSIER
  utils/
    search.js             -- levenshtein, buildSearchIndex, rankMatches
    scoring.js            -- scoreOf, CHECK_COUNT, STATUS_META, ALLEGATION_STATUS_META
  components/
    common/               -- Stamp, ScoreRing, Cite, LogoBox, LogoBoxImg, SkeletonCard
    outlet/               -- OutletCard, Dossier, AllegationCard, IncidentCard,
                             IncidentForm, PendingIncidentCard, PressFreedomStrip, LeanPanel
    donor/                -- DonorCard, DonorPage
    pages/                -- MemorialPage, CountriesPage, StandardsPage, RubricPage,
                             EthicsPage, LeftRightPage, SelfDossierPage,
                             CorporateEntitiesPage, UnderReviewPage, Methodology
  App.jsx                 -- top-level state + routing only
  main.jsx                -- ReactDOM mount
  index.css               -- the big CSS block, extracted from the <style> tag
```

Convert the CSS-in-a-template-literal block into a real `index.css` imported in
`main.jsx`. Keep the same class names — no visual changes in this phase.

## Step 3 — Install routing and wire it up

```bash
npm install react-router-dom
```

Routes to establish (replace the `tab`/`sel` state machine with real routes):

```
/                          -> Directory (outlet + donor search)
/outlet/:id                -> Dossier
/donor/:id                 -> DonorPage
/memorial                  -> MemorialPage
/countries                 -> CountriesPage
/countries/:code           -> country detail (currently inline in CountriesPage)
/corporate-entities         -> CorporateEntitiesPage
/corporate-entities/:id    -> entity detail
/standards                 -> StandardsPage (keep its internal sub-tabs as-is for now)
/methodology               -> Methodology
/about                     -> SelfDossierPage
/review                    -> UnderReviewPage
```

This is the highest-leverage change in this phase — it unblocks deep links,
back-button behavior, and is a hard prerequisite for social share cards and an
RSS feed in Phase 3. Don't skip or half-do this step.

## Step 4 — No-backend quick wins (any order, fill gaps between the above)

- **Citation/PDF export per dossier**: a "Download as PDF" or "Export citation"
  button on `Dossier`, `CorporateEntitiesPage` detail, and `MemorialPage` entries.
  `window.print()` with a print stylesheet is the pragmatic v1; a proper PDF
  library (e.g. `react-to-print` or `jspdf`) can follow later.
- **Surface `retrieved_at`/last-updated timestamps**: the data already has date
  fields scattered through it (citations, `date`, etc.) — add a consistent
  "last verified: [date]" line near the top of each dossier type, pulling from
  whatever the most specific date field already present is. Don't invent new
  timestamps — use what's already in the data.
- **Onboarding walkthrough**: a first-visit modal or a dismissible banner
  walking through the three-layer methodology (Record / Transparency checks /
  Interpretation) — 3-4 steps, skippable, shown once (store the "seen" flag in
  localStorage is fine here since there's no backend yet and it's not user data
  in the privacy-sensitive sense — just a UI preference).

## Step 5 — Error tracking (Sentry)

```bash
npm install @sentry/react
```

In `main.jsx`, before rendering:

```javascript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_DSN_HERE", // from sentry.io project settings — user must create this
  integrations: [],
  tracesSampleRate: 0.1,
});
```

**Decision/credential needed from the user here**: they need to create a free
Sentry account and project at sentry.io, then paste the DSN. This can't be
provisioned by an AI session — flag it and wait rather than guessing a DSN.

## Step 6 — Build and verify

```bash
npm run build
npm run preview
```

Click through every route manually — search, dossier navigation, the
incident-logging form, the corporate-entities section, memorial filters — since
this phase touched the file structure of literally everything. A visual/click
regression here is the main risk of this phase, not a logic bug.

## Step 7 — Deploy to existing Netlify site

```bash
netlify deploy --prod
```

(Or connect the git repo to Netlify's auto-deploy if not already done — ask the
user which they're using before assuming.)

---

## What's explicitly NOT this phase

- No Supabase, no database, no API calls — Phase 2.
- No Google OAuth — Phase 2, and only if the user has confirmed they want
  accounts yet.
- No GoatCounter/Resend wiring — GoatCounter is a Phase 1-adjacent nice-to-have
  if there's time (it's just a script tag, zero backend needed), but don't let
  it block the routing/module-split work above, which is the actual point of
  this phase.

## Definition of done for Phase 1

- [ ] Project builds with `npm run build`, no errors
- [ ] Every tab from the old version is reachable via a real URL
- [ ] Refresh on any route lands back on that same page (not the directory)
- [ ] Browser back/forward buttons work as expected
- [ ] Sentry is capturing a test error (throw one deliberately, confirm it
      shows up in the Sentry dashboard)
- [ ] Deployed and reachable at the existing Netlify URL
- [ ] No visual regressions versus the v12 single-file version
