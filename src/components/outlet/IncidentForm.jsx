import { useState } from "react";
import { RUBRIC } from "../../data/rubric";

/* ---------- coder verification workflow (Section 3 build item) ---------- */

function IncidentForm({ onSubmit }) {
  const [cat, setCat] = useState(RUBRIC[0].id);
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");
  const [quote, setQuote] = useState("");
  const [source, setSource] = useState("");
  const [coder, setCoder] = useState("");
  const [err, setErr] = useState("");

  function looksLikeSource(s) {
    // Mandatory source/citation field — accept a URL or a specific enough citation.
    return /https?:\/\//i.test(s) || s.trim().length >= 12;
  }

  function submit() {
    if (!event.trim() || !date.trim() || !quote.trim() || !coder.trim()) {
      setErr("Event, date, quote and your name are all required.");
      return;
    }
    if (!source.trim()) {
      setErr("A source URL or citation is mandatory — submissions with no source are rejected at the form, before they ever reach review.");
      return;
    }
    if (!looksLikeSource(source)) {
      setErr("That source looks too short to verify — paste a URL or a specific citation (publication, date, headline).");
      return;
    }
    const result = onSubmit({ cat, event: event.trim(), date: date.trim(), quote: quote.trim(), source: source.trim(), coder: coder.trim(), status: "draft" });
    if (result && result.error) { setErr(result.error); return; }
    setErr("");
    setEvent(""); setDate(""); setQuote(""); setSource(""); setCoder("");
  }

  return (
    <div className="row" style={{ gap: 8 }}>
      <div className="check-ev" style={{ marginBottom: 2 }}>Log a new incident — a source is mandatory. Submissions land in Pending Review, visible to anyone as unverified, until a moderator approves, edits, or rejects them.</div>
      <select className="search" style={{ marginBottom: 0 }} value={cat} onChange={(e) => setCat(e.target.value)}>
        {RUBRIC.map((r) => <option key={r.id} value={r.id}>{r.name}</option>)}
      </select>
      <input className="search" style={{ marginBottom: 0 }} placeholder="Event (e.g. name + date range)" value={event} onChange={(e) => setEvent(e.target.value)} />
      <input className="search" style={{ marginBottom: 0 }} placeholder="Date checked" value={date} onChange={(e) => setDate(e.target.value)} />
      <textarea className="search" style={{ marginBottom: 0, minHeight: 60 }} placeholder="Quoted passage(s) — verbatim" value={quote} onChange={(e) => setQuote(e.target.value)} />
      <input className="search" style={{ marginBottom: 0 }} placeholder="Source URL or citation (mandatory)" value={source} onChange={(e) => setSource(e.target.value)} />
      <input className="search" style={{ marginBottom: 0 }} placeholder="Your name" value={coder} onChange={(e) => setCoder(e.target.value)} />
      {err && <div className="check-ev" style={{ color: "var(--flag)" }}>{err}</div>}
      <button className="toggle" onClick={submit}>Submit for review</button>
    </div>
  );
}

export { IncidentForm };
