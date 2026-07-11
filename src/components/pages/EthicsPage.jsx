/* ---------- ethics & standards (Section 4) ---------- */

function EthicsPage() {
  return (
    <div className="method fade-in">
      <h2 className="dossier-name">Journalism ethics & standards</h2>
      <p className="method-lede">
        Reference material: the professional codes journalists themselves have adopted. Readers can hold any outlet — including ones they like — against these, and each principle links to the rubric category that operationalizes it.
      </p>

      <div className="m-block">
        <div className="layer-tag">Core professional codes</div>
        <p><strong>SPJ Code of Ethics</strong> (Society of Professional Journalists, US) — four principles: seek truth and report it; minimize harm; act independently; be accountable and transparent.</p>
        <p><strong>IFJ Global Charter of Ethics</strong> (International Federation of Journalists, 2019) — sixteen articles building on the 1954 Bordeaux Declaration; respect for truth and the public's right to it is the first duty.</p>
        <p><strong>Press Council of India — Norms of Journalistic Conduct</strong> — accuracy and pre-publication verification, right of reply, and specific caution in reporting on communal disputes.</p>
      </div>

      <div className="m-block">
        <div className="layer-tag">Principles → rubric</div>
        <p><strong>Accuracy</strong> — verification before publication. → Rubric: headline-vs-content mismatch.</p>
        <p><strong>Independence</strong> — no obligation to owners, funders or advertisers shaping coverage. → Dossier: entanglement flags, funder registry.</p>
        <p><strong>Minimizing harm</strong> — treating subjects as humans, not targets. → Rubric: dehumanizing language, asymmetric casualty framing.</p>
        <p><strong>Accountability</strong> — corrections owned publicly. → Transparency checks: corrections policy.</p>
        <p><strong>Transparency of sourcing</strong> — anonymity used for a stated reason, not as a shield. → Rubric: sourcing transparency.</p>
      </div>

      <div className="m-block">
        <div className="layer-tag dim-tag">How to use this section</div>
        <p>These codes are the industry's own stated standards. When an outlet fails a rubric check, the failure is measured against commitments the profession made for itself — not against PaperTrail's politics.</p>
      </div>
    </div>
  );
}

export { EthicsPage };
