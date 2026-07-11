import { useState } from "react";
import { MEMORIAL_COUNTS, MEMORIAL } from "../../data/memorial";
import { Cite } from "../common/Cite";

/* ---------- journalists' memorial (Section 6) ---------- */

function MemorialPage() {
  const [view, setView] = useState("ALL");
  const [country, setCountry] = useState("ALL");
  const [year, setYear] = useState("ALL");

  const countries = ["ALL", ...Array.from(new Set(MEMORIAL.map((e) => e.country))).sort()];
  const years = ["ALL", ...Array.from(new Set(MEMORIAL.map((e) => String(e.year)))).sort((a, b) => b - a)];

  const entries = MEMORIAL.filter((e) =>
    (view === "ALL" || e.region === view) &&
    (country === "ALL" || e.country === country) &&
    (year === "ALL" || String(e.year) === year)
  );

  return (
    <div className="method fade-in">
      <h2 className="dossier-name">In memory</h2>
      <p className="method-lede">
        Journalists killed in the line of duty, worldwide, since 2000. Every entry records only documented facts; the cause is stated exactly as classified by the source body — CPJ, RSF, or a judicial/inquiry finding, always attributed — never inferred by PaperTrail. Where sources disagree, the disagreement is shown.
      </p>

      <div className="reply" style={{ marginBottom: 16 }}>
        Honest note on coverage: this is a seed of the worldwide record — CPJ alone documents well over a thousand cases since 2000, and the full archive syncs via the ingestion pipeline (see spec). Data density is uneven by design of the world, not of this tool: heavily documented conflict zones carry far more detail than under-reported regions. That unevenness is shown, not smoothed over — an empty filter result may mean no killings, or no documentation. The full records live at cpj.org, rsf.org, and pressemblem.ch.
      </div>

      <section>
        <div className="layer-tag dim-tag">The counts — shown per source, dated, not reconciled</div>
        {MEMORIAL_COUNTS.map((c, i) => (
          <div key={i} className="row">
            <div>
              <span className="row-kind">{c.body}</span> — {c.figure}
              <span className="row-amount"> · {c.date}</span>
              <div className="check-ev" style={{ marginTop: 4 }}>{c.note}</div>
            </div>
            <Cite>{c.ref}</Cite>
          </div>
        ))}
        <div className="score-note">
          These figures differ because they measure different things — geography, definitions of "media worker," deaths in detention — and because the source bodies actively revise their records. PaperTrail shows each body's own current figure rather than picking or averaging one.
        </div>
      </section>

      <div className="chips" role="group" aria-label="Filter memorial entries by view">
        {[["ALL", "All"], ["IN", "India"], ["CONFLICT", "Gaza & regional conflict"], ["GLOBAL", "Global"]].map(([k, label]) => (
          <button key={k} className={`chip ${view === k ? "on" : ""}`} onClick={() => setView(k)}>{label}</button>
        ))}
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
        <select className="search" style={{ marginBottom: 0, flex: 1, minWidth: 140 }} value={country} onChange={(e) => setCountry(e.target.value)} aria-label="Filter by country">
          {countries.map((c) => <option key={c} value={c}>{c === "ALL" ? "All countries" : c}</option>)}
        </select>
        <select className="search" style={{ marginBottom: 0, flex: 1, minWidth: 110 }} value={year} onChange={(e) => setYear(e.target.value)} aria-label="Filter by year">
          {years.map((y) => <option key={y} value={y}>{y === "ALL" ? "All years" : y}</option>)}
        </select>
      </div>

      {entries.map((e, i) => (
        <div key={i} className="memorial-card">
          <div className="memorial-name">{e.name}</div>
          <div className="card-meta">{e.outlet} · {e.date} · {e.location}</div>
          <p className="memorial-body">{e.circumstances}</p>
          <p className="check-ev">{e.classification}</p>
          <Cite>{e.cite}</Cite>
        </div>
      ))}

      {entries.length === 0 && (
        <div className="reply">
          No entries on file for this filter combination. This may reflect no documented cases — or under-documentation of the region. The gap itself is information; full archives at cpj.org and rsf.org.
        </div>
      )}
    </div>
  );
}

export { MemorialPage };
