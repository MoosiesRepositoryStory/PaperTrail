import { useNavigate } from "react-router-dom";
import { PATTERN_THRESHOLD, RUBRIC, TEST_BENCH } from "../../data/rubric";
import { OUTLETS } from "../../data/outlets";

/* ---------- rubric page (Section 3 rules + Section 4 test bench) ---------- */

function RubricPage() {
  const navigate = useNavigate();
  return (
    <div className="method fade-in">
      <h2 className="dossier-name">Bias-flagging rubric</h2>
      <p className="method-lede">
        Every rule is direction-neutral: it flags the behavior no matter which group is targeted or which side is favored. An incident counts only with a quoted, dated, sourced example. One incident is never a pattern — {PATTERN_THRESHOLD}+ verified incidents in 12 months is.
      </p>

      {RUBRIC.map((r) => {
        const matches = OUTLETS.filter((o) => (o.incidents || []).some((i) => i.cat === r.id));
        return (
          <div key={r.id} className="m-block">
            <div className="layer-tag flag-tag">{r.name}</div>
            <p><strong>Rule:</strong> {r.rule}</p>
            <p><strong>Counts:</strong> {r.triggers}</p>
            <p><strong>Doesn't count:</strong> {r.nonTriggers}</p>
            {matches.length > 0 ? (
              <div style={{ marginTop: 8 }}>
                <span className="check-ev">Template currently logged on {matches.length} outlet{matches.length > 1 ? "s" : ""}:</span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 6 }}>
                  {matches.map((o) => (
                    <button key={o.id} className="chip" onClick={() => navigate(`/outlet/${o.id}`)}>
                      {o.name} · {o.country}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <p className="check-ev">No outlet carries this template yet.</p>
            )}
          </div>
        );
      })}

      <h2 className="dossier-name" style={{ marginTop: 30 }}>Test bench</h2>
      <p className="method-lede">
        Open verification tasks used to check the rubric itself — never pre-loaded verdicts. If these only ever flag outlets the operator already suspects, the rubric has failed and must be revised.
      </p>
      {TEST_BENCH.map((t, i) => (
        <div key={i} className="m-block">
          <div className="layer-tag dim-tag">{t.check}</div>
          <p><strong>{t.name}</strong></p>
          <p>{t.method}</p>
          <p className="check-ev">Status: {t.status}</p>
        </div>
      ))}
    </div>
  );
}

export { RubricPage };
