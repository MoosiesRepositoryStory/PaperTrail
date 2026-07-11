import { useState } from "react";
import { Stamp } from "../common/Stamp";
import { STATUS_META } from "../../utils/scoring";
import { RUBRIC } from "../../data/rubric";

function PendingIncidentCard({ inc, outletName, adminMode, onApprove, onReject, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState({ quote: inc.quote, source: inc.source, date: inc.date });
  const [reason, setReason] = useState("");
  const meta = STATUS_META[inc.status] || STATUS_META.draft;
  const r = RUBRIC.find((x) => x.id === inc.cat);

  return (
    <div className="analysis" style={{ marginTop: 10 }}>
      <Stamp tone={meta.tone}>{meta.label}</Stamp>{" "}
      {outletName && <Stamp tone="ink">{outletName}</Stamp>}
      <p><span className="row-kind">{r?.name}</span> · {inc.event} · {inc.date}</p>
      {!editing ? (
        <>
          <p>{inc.quote}</p>
          <p className="check-ev">Source: {inc.source}</p>
        </>
      ) : (
        <div className="row" style={{ marginTop: 6 }}>
          <textarea className="search" style={{ marginBottom: 0, minHeight: 50 }} value={draft.quote} onChange={(e) => setDraft({ ...draft, quote: e.target.value })} />
          <input className="search" style={{ marginBottom: 0 }} value={draft.source} onChange={(e) => setDraft({ ...draft, source: e.target.value })} />
          <input className="search" style={{ marginBottom: 0 }} value={draft.date} onChange={(e) => setDraft({ ...draft, date: e.target.value })} />
        </div>
      )}
      <p className="check-ev">Submitted by: {inc.coder}{inc.secondCoder ? ` · reviewed by ${inc.secondCoder}` : ""}</p>
      {inc.status === "rejected" && inc.rejectionReason && (
        <p className="check-ev" style={{ color: "var(--flag)" }}>Rejection reason: {inc.rejectionReason}</p>
      )}

      {adminMode && inc.status === "draft" && (
        <div className="row" style={{ marginTop: 8, gap: 6 }}>
          <div className="check-ev">Admin controls (prototype — real deployment requires authenticated moderator accounts)</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {!editing ? (
              <button className="toggle" onClick={() => setEditing(true)}>Edit</button>
            ) : (
              <button className="toggle" onClick={() => { onEdit(draft); setEditing(false); }}>Save edit</button>
            )}
            <button className="toggle" onClick={() => onApprove()}>Approve → verified</button>
            <input className="search" style={{ marginBottom: 0, flex: 1, minWidth: 140 }} placeholder="Rejection reason" value={reason} onChange={(e) => setReason(e.target.value)} />
            <button className="toggle" onClick={() => onReject(reason || "No reason given")}>Reject</button>
          </div>
        </div>
      )}
    </div>
  );
}

export { PendingIncidentCard };
