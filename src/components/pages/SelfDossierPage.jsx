import { SELF_DOSSIER } from "../../data/selfDossier";
import { ScoreRing } from "../common/ScoreRing";
import { Cite } from "../common/Cite";

/* ---------- PaperTrail's own dossier (audit yourself first) ---------- */

function SelfDossierPage() {
  const passed = Object.values(SELF_DOSSIER.checks).filter((c) => c.pass).length;
  const total = Object.keys(SELF_DOSSIER.checks).length;
  const score = Math.round((passed / total) * 100);
  return (
    <div className="method fade-in">
      <div className="dossier-head">
        <div>
          <h2 className="dossier-name">{SELF_DOSSIER.name}</h2>
          <div className="card-meta">{SELF_DOSSIER.tagline}</div>
        </div>
        <div className="head-score">
          <ScoreRing value={score} size={72} />
          <div className="score-label">Own transparency<br />score</div>
        </div>
      </div>

      <div className="reply" style={{ marginBottom: 20 }}>
        This is PaperTrail holding itself to its own standard. Fields marked [Fill] are honest blanks for the real project to complete — shown as blanks rather than hidden, because pretending to have disclosures we don't have would be the exact failure this tool exists to catch.
      </div>

      <section>
        <div className="layer-tag">Ownership & control</div>
        {SELF_DOSSIER.ownership.map((n, i) => (
          <div key={i} className="node" style={{ marginBottom: 8 }}>
            <div className="node-role">{n.role}</div>
            <div className="node-entity">{n.entity}</div>
            <div className="node-note">{n.note}</div>
            <Cite>{n.cite}</Cite>
          </div>
        ))}
      </section>

      <section>
        <div className="layer-tag">Funding</div>
        {SELF_DOSSIER.funding.map((f, i) => (
          <div key={i} className="row">
            <div><span className="row-kind">{f.kind}</span> — {f.detail}</div>
            <Cite>{f.cite}</Cite>
          </div>
        ))}
      </section>

      <section>
        <div className="layer-tag flag-tag">Our own conflicts of interest — stated, not buried</div>
        {SELF_DOSSIER.conflicts.map((c, i) => (
          <div key={i} className="flag-card">
            <div className="flag-title">⚑ {c.title}</div>
            <div className="flag-detail">{c.detail}</div>
          </div>
        ))}
      </section>

      <section>
        <div className="layer-tag">Transparency checks — same rubric we apply to others</div>
        {Object.entries(SELF_DOSSIER.checks).map(([name, c]) => (
          <div key={name} className={`check ${c.pass ? "pass" : "fail"}`}>
            <span className="check-mark">{c.pass ? "✓" : "✕"}</span>
            <div>
              <div className="check-name">{name}</div>
              <div className="check-ev">{c.evidence}</div>
            </div>
          </div>
        ))}
        <div className="score-note">Note the failing check: funders aren't disclosed yet, so it's marked failing — not quietly passed. That's the whole point.</div>
      </section>
    </div>
  );
}

export { SelfDossierPage };
