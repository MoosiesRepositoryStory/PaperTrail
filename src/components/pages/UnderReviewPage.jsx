import { outletById } from "../../utils/lookup";
import { PendingIncidentCard } from "../outlet/PendingIncidentCard";

/* ---------- Under Review — global pending-submission tab (Section 3) ---------- */

function UnderReviewPage({ userIncidents, adminMode, setAdminMode, onApprove, onReject, onEdit }) {
  const rows = [];
  Object.entries(userIncidents).forEach(([outletId, list]) => {
    const o = outletById(outletId);
    (list || []).forEach((inc, idx) => {
      if (inc.status === "draft" || inc.status === "rejected") {
        rows.push({ outletId, outletName: o ? o.name : outletId, idx, inc });
      }
    });
  });

  return (
    <div className="method fade-in">
      <h2 className="dossier-name">Under review</h2>
      <p className="method-lede">
        Every submission a reader logs lands here first — visible to anyone, clearly labeled unverified, with its source attached, so you can assess raw claims yourself without PaperTrail vouching for them. Nothing here counts toward any outlet's flags or pattern threshold until a moderator approves it.
      </p>

      <div className="row" style={{ marginBottom: 16 }}>
        <label className="check-ev" style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
          <input type="checkbox" checked={adminMode} onChange={(e) => setAdminMode(e.target.checked)} />
          Admin mode (prototype only — real deployment requires authenticated moderator accounts, not a checkbox)
        </label>
      </div>

      {rows.length === 0 && (
        <div className="reply">Nothing pending. Submissions made from any outlet's "Log a new incident" form will appear here.</div>
      )}

      {rows.map((r, i) => (
        <PendingIncidentCard
          key={i}
          inc={r.inc}
          outletName={r.outletName}
          adminMode={adminMode}
          onApprove={() => onApprove(r.outletId, r.idx)}
          onReject={(reason) => onReject(r.outletId, r.idx, reason)}
          onEdit={(patch) => onEdit(r.outletId, r.idx, patch)}
        />
      ))}
    </div>
  );
}

export { UnderReviewPage };
