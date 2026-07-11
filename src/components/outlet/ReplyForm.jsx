import { useState } from "react";

/* ---------- right of reply form (Section: real mechanism) ---------- */

function ReplyForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [body, setBody] = useState("");
  const [err, setErr] = useState("");

  function submit() {
    if (!name.trim() || !body.trim()) {
      setErr("A name and the response text are both required.");
      return;
    }
    setErr("");
    onSubmit({ name: name.trim(), role: role.trim(), body: body.trim(), date: new Date().toISOString().slice(0, 10) });
    setName(""); setRole(""); setBody("");
  }

  return (
    <div className="row" style={{ gap: 8, marginTop: 10 }}>
      <div className="check-ev">Submit a response — published verbatim beside the record, unedited. For the outlet or a representative to dispute or add context.</div>
      <input className="search" style={{ marginBottom: 0 }} placeholder="Name of respondent" value={name} onChange={(e) => setName(e.target.value)} />
      <input className="search" style={{ marginBottom: 0 }} placeholder="Role / affiliation (optional)" value={role} onChange={(e) => setRole(e.target.value)} />
      <textarea className="search" style={{ marginBottom: 0, minHeight: 70 }} placeholder="Response — published exactly as written" value={body} onChange={(e) => setBody(e.target.value)} />
      {err && <div className="check-ev" style={{ color: "var(--flag)" }}>{err}</div>}
      <button className="toggle" onClick={submit}>Publish response</button>
    </div>
  );
}

export { ReplyForm };
