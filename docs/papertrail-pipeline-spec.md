# PaperTrail — Global Data Pipeline Spec (Section 2)

**Status:** architecture for a separate backend build. The React prototype is a sandboxed
client — no server, no secret storage, CORS-restricted fetch — so live ingestion cannot
run inside it and is not faked with mock "live" data. This document is the build plan.

---

## 1. Architecture

```
[ Ingestion workers (Node, cron) ]
   ├─ GDELT poller        (15-min cycle, free)
   ├─ RSS fetch + parser   (per-outlet feeds, hourly)
   ├─ News aggregator API  (NewsAPI / Mediastack, rate-limited)
   └─ Manual-entry admin   (ownership, funding, incidents — humans only)
              │
              ▼
[ Postgres ]  every row: fetched_at, source_api, source_url
              │
              ▼
[ API layer (REST, read-only public) ]
              │
              ▼
[ React client ]  staleness badges rendered from fetched_at
```

Pilot can run on a single small VM + SQLite; move to Postgres at Phase 3.

## 2. Sources — realistic notes

| Source | What it's good for | Constraints |
|---|---|---|
| **GDELT 2.0 (DOC API + GKG)** | Global article volume per outlet domain, per topic, per day — this powers the **omission-pattern rubric test** semi-automatically (outlet volume vs. wire baseline for the same event window) | Free; noisy entity extraction; treat as signal for human review, never auto-flag |
| **RSS direct** | Article-level feeds from each pilot outlet; headline history (powers headline-vs-content checks) | Free; needs dedupe + feed-death monitoring; some outlets truncate feeds |
| **NewsAPI** | Convenience aggregation for pilot outlets | Free tier ≈ dev-only with daily request caps and no commercial use; budget for paid tier or use Mediastack/GNews as fallback |
| **Wire baselines (PTI / Reuters / AP)** | The comparison standard for omission tests | Licensing required for full feeds; public web headlines + GDELT coverage of wire content is the no-budget fallback |
| **Ownership / funding / donations** | MCA + SEBI (India), ECI electoral-bond data, SEC + FEC + FCC (US), IRS 990s | **Never pipeline-automated.** Human-sourced, cited per entry, `verified_at` dated. Ownership records are not reliably machine-readable and mistakes here are the ones that get the project sued |

## 3. Schema (core tables)

```sql
outlets(id, name, country, urls[], created_at)
ownership_edges(id, outlet_id, parent_entity, role, cite_url,
                confidence ENUM('filing','press','claimed'),
                verified_at, verified_by)          -- manual only
funding_entries(id, outlet_id, kind, detail, cite_url, verified_at)
lean_ratings(id, outlet_id, body, rating_verbatim, method_url, retrieved_at)
watchdog_flags(id, outlet_id, body, finding_verbatim, dated, source_url, retrieved_at)
articles(id, outlet_id, url, headline, published_at, fetched_at, source_api)
coverage_volume(outlet_id, topic, day, article_count, source_api, fetched_at)  -- GDELT
incidents(id, outlet_id, rubric_cat, quote, dated, source_urls[],
          status ENUM('draft','verified'), coder_id, second_coder_id, created_at)
```

Hard rules encoded as constraints:
- `incidents.status='verified'` requires non-null `quote`, `dated`, `source_urls`, and a
  `second_coder_id` different from `coder_id`.
- `ownership_edges` cannot insert without `cite_url`.

## 4. Staleness (user-visible)

Every pipeline row carries `fetched_at` + `source_api`. Client thresholds:

- articles / coverage volume: stale after **24 h**
- lean ratings & watchdog findings: stale after **90 days** → "re-verify" badge
- ownership edges: stale after **365 days** → "re-verification due" badge

Stale data is shown greyed with its date — never hidden, never silently trusted.

## 5. Phases (multi-session build — do not attempt worldwide in one pass)

**Phase 1 — pilot, 2 countries (matches current demo set):**
India (Aaj Tak, Republic, NDTV, Times Now, Zee, The Wire) + US (Fox, NBC, NYT,
Daily Wire, NPR). RSS + GDELT volume + manual ownership backfill with real citation
URLs replacing the demo placeholders. Exit criteria: every dossier fact has a live link
and a `verified_at` date.

**Phase 2 — test-bench countries:** add outlets needed by the rubric test bench
(Times of Israel + 2–3 Lebanese/regional outlets; UK wire-adjacent outlets as baseline
controls). Run the four Section-4 test cases end-to-end with two-coder verification.

**Phase 3 — scale-out:** GDELT's domain metadata as the seed list per country;
ownership research prioritized by audience reach. Accept permanent unevenness:
coverage gaps displayed as gaps.

## 6. What stays manual forever

Ownership chains, funding, affiliations, incident coding. The pipeline fetches articles
and volumes; it never writes a fact a human didn't verify with a citation. Automation
feeds the queue; people make the claims.


---

## Addendum (v9 round): new tables + API versioning

### New tables

```sql
press_freedom(country_code, rank, total, score, index_year,
              summary_verbatim, source_url, retrieved_at)
  -- RSF publishes each April/May; annual refresh job, keep prior years for trend

memorial_entries(id, name, outlet, date_of_death, location, country_code, region_tag,
                 circumstances,           -- brief, factual, source-recorded only
                 classification_body,     -- 'CPJ' | 'RSF' | 'PEC'
                 classification_verbatim, -- the body's own wording, never inferred
                 disputed BOOLEAN,        -- true when bodies/parties disagree
                 dispute_note,            -- each side's claim, attributed
                 source_url, retrieved_at)

memorial_counts(body, scope_description, figure_verbatim, as_of_date,
                caveat_note, source_url, retrieved_at)
  -- counts stored per-body and per-scope; NEVER reconciled into one number
```

Memorial sync jobs: CPJ and RSF databases are the sources of record; entries mirror
their classifications verbatim. Where CPJ is conducting a review (as in mid-2026),
the review status itself is stored and displayed. Rows are updated, never silently
deleted — removals get a dated removal_reason, mirroring CPJ's own practice.

### API versioning (from day one)

- All routes namespaced: `/api/v1/outlets`, `/api/v1/funders`, `/api/v1/memorial`,
  `/api/v1/press-freedom`, `/api/v1/incidents`.
- Breaking schema changes → `/api/v2/...`; v1 kept alive with a sunset header.
- Every response envelope carries `schema_version`, `generated_at`, and per-record
  `retrieved_at` + `source` so clients can render staleness without extra calls.
- Pipeline jobs write to versioned staging tables and promote atomically, so a
  mid-refresh API call never serves a half-updated dataset.


---

## Addendum (v10 round): Auth, per-regulator modules, global memorial & 180-country ingestion

### Google OAuth module (Section 3 — needs YOUR credentials first)
Prerequisite you must do yourself: create a Google Cloud project → OAuth consent
screen → OAuth 2.0 Client ID (web). An AI session cannot provision these.

Flow (standard, no shortcuts):
1. Frontend: Google Identity Services button → receives an ID token (JWT).
2. Backend: verify the ID token server-side with `google-auth-library`
   (audience = your client ID, issuer = accounts.google.com). NEVER trust
   client-side login state.
3. On first verification: create `users(id, google_sub, email, created_at)`.
4. Issue your own session JWT (short-lived) + refresh token (httpOnly cookie).
5. Tie preferences to the user: `user_prefs(user_id, theme, saved_searches JSONB)`
   — replaces the current window.storage persistence when logged in.

### Regulatory pipeline modules (Section 4 — each independent, partial completion OK)

| Module | Access reality | Automation level |
|---|---|---|
| **SEC (US)** | EDGAR full-text search (`efts.sec.gov/LATEST/search-index?q=`) + submissions API (`data.sec.gov/submissions/CIK##########.json`). Free, JSON, rate-limited by politeness policy (declare a User-Agent). | Fully automated |
| **FEC (US)** | `api.open.fec.gov/v1/` — free API key, JSON, individual contributions searchable by name/employer. | Fully automated |
| **ECI (India)** | Candidate affidavits + party donation reports published as PDFs/portal pages; no unified modern API. Electoral-bond disclosure data (2024, SC-ordered) is a fixed public dataset. | Scraper + manual verification |
| **SEBI (India)** | Listed-company filings via SEBI/NSE/BSE disclosure portals; shareholding patterns are structured on exchange sites, other filings are PDFs. | Semi-automated (exchange data) + PDF parsing |
| **MCA (India)** | MCA21 portal: director/company master data partially free; documents (annual returns, charge documents) are pay-per-document. **Hardest to automate** — plan manual entry per company, cited to the specific filing, with `verified_at` + `verified_by`. | Manual-first, by design |

Each module writes to the same `ownership_edges` / `funding_entries` tables with a
`source_module` field, so SEC/FEC being live never blocks on MCA being manual.

### Global memorial ingestion (Section 1 — its own dedicated session)
- CPJ database: structured, filterable, covers 1992–present (1000+ cases since 2000) — primary sync source.
- RSF barometer: second source; PEC and INSI archives where accessible.
- Sync job stores each body's classification VERBATIM per case; a case carried by
  multiple bodies stores multiple classification rows — disagreement is data.
- Country/year/cause indexes power the filters already built in the UI.
- Removal handling mirrors CPJ practice: dated removal_reason, never silent deletion.
- Display rule (already in UI): uneven documentation density is shown, not smoothed.

### RSF 180-country ingestion (Section 5)
- Annual job each April/May when RSF publishes: rank, score, five indicator scores,
  year-over-year trend, link to RSF's country page.
- Store RSF's rationale as a SHORT paraphrase + link — do not mirror their full
  country text (copyright + attribution hygiene); the profile page links out for
  the full analysis in RSF's own words.
- 19 profiles are already seeded in the client from the 2026 publication; the job
  fills the remaining ~161 and refreshes all annually.

### Hosting target (Section 2)
Netlify or Vercel both fine for the current static PWA (drag-and-drop or git-push).
When the backend lands, Vercel/Fly/Railway for the API + managed Postgres (Neon,
Supabase). Custom domain: point DNS at the host; HTTPS is automatic on both.


---

## Addendum (v11 round): moderation backend, allegations schema, logos, people

### Moderation pipeline — real backend requirements
The in-app prototype (client-side, window.storage) demonstrates the submit →
pending → admin approve/reject/edit flow structurally, but a real deployment needs:

```sql
submissions(id, outlet_id, rubric_cat, quote, date_claimed, source_url,
           submitter_id, submitter_ip_hash, status ENUM('pending','approved','rejected'),
           rejection_reason, reviewed_by, reviewed_at, created_at)
```

- **Server-side rate limiting**: per-IP and per-account (once auth lands), not the
  client-side timestamp array used in the prototype — that's trivially bypassable
  by clearing state and is a placeholder for the real mechanism.
- **Mandatory source field enforced server-side too** (never trust client validation
  alone — a direct API call could skip the form).
- **Admin auth**: moderator role gated behind the Google OAuth session (Section 3
  from the prior round) plus a `role = 'moderator'` flag — not a checkbox.
- **Public "Under Review" feed**: a simple `GET /api/v1/submissions?status=pending`
  — no auth needed to read, since the whole point is public visibility of
  unverified claims with sources attached.

### Allegations & regulatory actions schema

```sql
allegations(id, subject_type ENUM('outlet','person'), subject_id,
           what, alleged_by, date_range, status ENUM('alleged','charged','convicted','settled','dismissed'),
           note, source_url, retrieved_at)
```

Status values are never collapsed — the enum itself prevents a "guilty" bucket.
Real entries seeded this round (Fox/Dominion + Smartmatic, NDTV/SEBI insider-trading
reversal, Zee/SEBI fund-diversion notice, Republic/BARC TRP case) are cited to
primary filings and news of record, not paraphrased into stronger claims.

### Outlet logos
Prototype hotlinks `logo.clearbit.com/{domain}` — free, no auth, resolves most
company logos from the domain alone. This is a live external dependency, not a
stored asset; PaperTrail never downloads or rehosts the image. For outlets where
Clearbit has no match, the UI shows a flagged monogram fallback rather than a
blank space. A production build should still verify each hotlinked logo once
(rights basis: nominative use for identification, standard practice among news
aggregators) and record the check date.


### Corporate-entity allegations tracker (replaces the earlier named-individuals section)

Named-individual profiles were removed. Corporations carry a meaningfully higher
bar to sue over accurate, sourced reporting than individuals do, so the same
investigative value (the money/influence trail) now extends one layer further
into related corporate parties — parent companies, holding companies, ad
agencies, PR firms, major donor organizations — instead of profiling executives.

```sql
corporate_entities(id, name, entity_type, note, source_url, retrieved_at)
entity_outlet_links(entity_id, outlet_id)
-- allegations table (already specced above) gains subject_type = 'corporate_entity'
-- alongside 'outlet', pointing at corporate_entities.id
```

Pre-launch checklist (lighter than the individuals version, but still real):
- [ ] Every allegation sourced only to primary documents (regulatory orders,
      court/chargesheet filings, official statements)
- [ ] Entity's denial or response included wherever one is on record
- [ ] No entity added without at least one linked outlet or donor relationship
      already in the database — this section extends the existing money trail,
      it doesn't start new unconnected threads

### Locked-in service stack (confirmed this round)

- **Hosting**: Netlify (already in use — no migration cost; free tier: 100GB
  bandwidth/mo, 125k serverless invocations/mo)
- **Backend + DB**: Supabase (free tier: 500MB DB; built-in OAuth provider
  support meaningfully cuts custom Google-login backend work)
- **Error tracking**: Sentry (free tier: 5k errors/month)
- **Analytics**: GoatCounter (free, open-source, no ads/data-selling — consistent
  with PaperTrail's own privacy-conscious positioning)
- **Email (Phase 3)**: Resend (free tier: 3k emails/month, 100/day; clean with
  React-based email templates)

Legal scaffolding (privacy policy + ToS) is a **hard prerequisite for Phase 2**,
not a trailing item — Google's OAuth consent-screen registration requires a
privacy policy URL to verify the app, and GDPR/India's DPDP Act both require
disclosure at or before data collection, not after.
