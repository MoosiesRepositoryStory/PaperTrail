import { useState } from "react";
import { LogoBox } from "../common/LogoBox";
import { Cite } from "../common/Cite";
import { ScoreRing } from "../common/ScoreRing";
import { Stamp } from "../common/Stamp";
import { PressFreedomStrip } from "./PressFreedomStrip";
import { LeanPanel } from "./LeanPanel";
import { AllegationCard } from "./AllegationCard";
import { IncidentCard } from "./IncidentCard";
import { PendingIncidentCard } from "./PendingIncidentCard";
import { IncidentForm } from "./IncidentForm";
import { ReplyForm } from "./ReplyForm";
import { donorById } from "../../utils/lookup";
import { scoreOf, CHECK_COUNT } from "../../utils/scoring";
import { PATTERN_THRESHOLD, RUBRIC } from "../../data/rubric";

/* ---------- outlet dossier ---------- */

function Dossier({ o, onBack, onOpen, userIncidents, onAddIncident, onConfirmIncident, onApproveIncident, onRejectIncident, onEditIncident, adminMode, replies, onAddReply }) {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const score = scoreOf(o);
  const staticIncidents = o.incidents || [];
  const drafts = userIncidents || [];
  const allForCount = [...staticIncidents, ...drafts];

  return (
    <div className="dossier fade-in">
      <button className="back" onClick={onBack}>← Back</button>

      <div className="dossier-head">
        <LogoBox o={o} />
        <div>
          <h2 className="dossier-name">{o.name} <span className="country">{o.country}</span></h2>
          <div className="card-meta">{o.url} · {o.type}</div>
          {o.logo && <div className="check-ev" style={{ marginTop: 2 }}>Logo: <Cite>{o.logo.source}</Cite></div>}
        </div>
        <div className="head-score">
          <ScoreRing value={score} size={72} />
          <div className="score-label">Transparency<br />score</div>
        </div>
      </div>

      <div className="lean-strip">
        <span className="lean-label">Reported lean</span>
        <span className="lean-text">{o.lean}</span>
        <span className="lean-attr">— attributed to third parties, not a PaperTrail score</span>
      </div>

      <PressFreedomStrip country={o.country} />

      <LeanPanel o={o} />

      {/* LAYER 1 — THE RECORD */}
      <section>
        <div className="layer-tag">Layer 1 · The record — facts on file, every node cited</div>

        <h3 className="sec-title">Ownership & money trail</h3>
        <div className="chain">
          {o.chain.map((n, i) => (
            <div key={i}>
              {i > 0 && <div className="trail" aria-hidden="true">↓ ₹$</div>}
              <div className="node">
                <div className="node-role">{n.role}</div>
                <div className="node-entity">{n.entity}</div>
                <div className="node-note">{n.note}</div>
                <Cite>{n.cite}</Cite>
              </div>
            </div>
          ))}
        </div>

        <h3 className="sec-title">Funding</h3>
        {o.funding.map((f, i) => (
          <div key={i} className="row">
            <div>
              <span className="row-kind">{f.kind}</span> — {f.detail}
              {f.amount !== "—" && <span className="row-amount"> · {f.amount}</span>}
            </div>
            <Cite>{f.cite}</Cite>
          </div>
        ))}

        <h3 className="sec-title">Persons of interest</h3>
        {o.people.map((p, i) => (
          <div key={i} className="row">
            <div>
              <span className="row-kind">{p.name}</span> — {p.role}
              {p.note && <span className="row-amount"> · {p.note}</span>}
            </div>
            <Cite>{p.cite}</Cite>
          </div>
        ))}

        {o.donorIds.length > 0 && (
          <>
            <h3 className="sec-title">Linked funders — tap to see everything they fund</h3>
            {o.donorIds.map((id) => {
              const d = donorById(id);
              return (
                <button key={id} className="link-row" onClick={() => onOpen({ kind: "donor", id })}>
                  <div>
                    <div className="link-name">◈ {d.name} →</div>
                    <div className="check-ev">{d.type}</div>
                  </div>
                </button>
              );
            })}
          </>
        )}
      </section>

      {/* ENTANGLEMENT FLAGS */}
      {o.flags.length > 0 && (
        <section>
          <div className="layer-tag flag-tag">Entanglement flags — reported, never scored</div>
          {o.flags.map((f, i) => (
            <div key={i} className="flag-card">
              <div className="flag-title">⚑ {f.title}</div>
              <div className="flag-detail">{f.detail}</div>
            </div>
          ))}
        </section>
      )}

      {/* ALLEGATIONS & REGULATORY ACTIONS (Section 2, v11) */}
      {(o.allegations || []).length > 0 && (
        <section>
          <div className="layer-tag flag-tag">Allegations & regulatory actions — status shown as classified, never collapsed into one bucket</div>
          {o.allegations.map((a, i) => <AllegationCard key={i} a={a} />)}
          <div className="score-note">Status categories — alleged / charged / convicted / settled / dismissed — are kept distinct on purpose: a settlement is not an admission, a dismissal is not a conviction, and a charge is not a verdict.</div>
        </section>
      )}

      {/* LAYER 2 — TRANSPARENCY */}
      <section>
        <div className="layer-tag">Layer 2 · Transparency checks — procedural, evidence-based</div>
        {Object.entries(o.checks).map(([name, c]) => (
          <div key={name} className={`check ${c.pass ? "pass" : "fail"}`}>
            <span className="check-mark">{c.pass ? "✓" : "✕"}</span>
            <div>
              <div className="check-name">{name}</div>
              <div className="check-ev">{c.evidence}</div>
            </div>
          </div>
        ))}
        <div className="score-note">Score = passed checks ÷ {CHECK_COUNT} · rubric public, weights equal</div>
      </section>

      {/* SECTION 2 — WATCHDOG & INSTITUTIONAL FLAGS */}
      <section>
        <div className="layer-tag dim-tag">Watchdog & institutional flags — their words, dated & linked, never paraphrased stronger</div>
        {o.watchdogs.map((w, i) => (
          <div key={i} className="row">
            <div>
              <span className="row-kind">{w.name}</span> — {w.value}
              {w.date && <span className="row-amount"> · {w.date}</span>}
            </div>
            {w.ref && <Cite>{w.ref}</Cite>}
          </div>
        ))}
        <div className="score-note">
          Sources to wire: RSF Press Freedom Index & Media Ownership Monitor India · CPJ · IFCN signatories/violations · EUvsDisinfo · NewsGuard · NBDSA & Press Council of India orders. Each displayed in the body's own language.
        </div>
      </section>

      {/* SECTION 3 — PROCEDURAL BIAS FLAGS */}
      <section>
        <div className="layer-tag flag-tag">Procedural bias flags — quoted, dated, sourced incidents only · {PATTERN_THRESHOLD}+ verified in 12 months = pattern</div>
        {RUBRIC.map((r) => {
          const inc = allForCount.filter((i) => i.cat === r.id);
          const verified = inc.filter((i) => i.status === "verified").length;
          const isPattern = verified >= PATTERN_THRESHOLD;
          if (inc.length === 0) return null;
          return (
            <div key={r.id} className="row">
              <div style={{ display: "flex", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
                <span className="row-kind">{r.name}</span>
                <span>
                  {isPattern ? <Stamp tone="flag">Pattern</Stamp> : (
                    <span className="check-ev">{verified} verified · {inc.length - verified} pending/other</span>
                  )}
                </span>
              </div>
            </div>
          );
        })}

        {staticIncidents.map((inc, i) => <IncidentCard key={`s${i}`} inc={inc} />)}
        {drafts.map((inc, i) =>
          inc.status === "verified"
            ? <IncidentCard key={`u${i}`} inc={inc} />
            : (
              <PendingIncidentCard
                key={`u${i}`}
                inc={inc}
                adminMode={adminMode}
                onApprove={() => onApproveIncident(o.id, i)}
                onReject={(reason) => onRejectIncident(o.id, i, reason)}
                onEdit={(patch) => onEditIncident(o.id, i, patch)}
              />
            )
        )}

        {allForCount.length === 0 && (
          <div className="reply">No incidents on file. Flags require a quoted, dated, sourced example — see the Rubric tab for what does and doesn't count.</div>
        )}

        <IncidentForm onSubmit={(inc) => onAddIncident(o.id, inc)} />
      </section>

      {/* LAYER 3 — INTERPRETATION */}
      <section>
        <div className="layer-tag dim-tag">Layer 3 · Interpretation — opinion, off by default</div>
        <button className="toggle" onClick={() => setShowAnalysis((s) => !s)}>
          {showAnalysis ? "Hide interpretation" : "Show interpretation"}
        </button>
        {showAnalysis && (
          <div className="analysis">
            <Stamp tone="amber">Opinion — not part of the record</Stamp>
            <p>{o.analysis}</p>
          </div>
        )}
      </section>

      {/* RIGHT OF REPLY — real mechanism */}
      <section>
        <div className="layer-tag dim-tag">Right of reply — responses published verbatim, unedited</div>
        {o.response && <div className="reply" style={{ marginBottom: 8 }}>{o.response}</div>}
        {(replies || []).map((r, i) => (
          <div key={i} className="analysis" style={{ marginTop: 8 }}>
            <Stamp tone="ink">Response on file · {r.date}</Stamp>
            <p><span className="row-kind">{r.name}</span>{r.role ? ` — ${r.role}` : ""}</p>
            <p>{r.body}</p>
          </div>
        ))}
        {!o.response && (!replies || replies.length === 0) && (
          <div className="reply">No response on file. This outlet can dispute any entry above using the form below; responses publish here verbatim.</div>
        )}
        <ReplyForm onSubmit={(reply) => onAddReply(o.id, reply)} />
      </section>
    </div>
  );
}

export { Dossier };
