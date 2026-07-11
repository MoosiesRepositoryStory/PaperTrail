import { Stamp } from "../common/Stamp";
import { Cite } from "../common/Cite";
import { outletById } from "../../utils/lookup";

/* ---------- donor page (Track-AIPAC-style reverse index) ---------- */

function DonorPage({ d, onBack, onOpen }) {
  const outletLinks = d.links.filter((l) => l.to);
  const politicalLinks = d.links.filter((l) => !l.to);
  return (
    <div className="dossier fade-in">
      <button className="back" onClick={onBack}>← Back</button>
      <div className="dossier-head">
        <div>
          <h2 className="dossier-name">◈ {d.name}</h2>
          <div className="card-meta">{d.type}</div>
        </div>
        <Stamp tone="ink">Funder dossier</Stamp>
      </div>
      <p className="donor-note">{d.note}</p>

      <section>
        <div className="layer-tag">Media outlets funded or controlled</div>
        {outletLinks.map((l, i) => {
          const o = outletById(l.to);
          return (
            <button key={i} className="link-row" onClick={() => onOpen({ kind: "outlet", id: l.to })}>
              <div>
                <div className="link-name">{o.name} →</div>
                <div className="check-ev">{l.detail}</div>
              </div>
              <Cite>{l.cite}</Cite>
            </button>
          );
        })}
        {outletLinks.length === 0 && <div className="reply">No outlet links on file.</div>}
      </section>

      <section>
        <div className="layer-tag flag-tag">Political money & positions on record</div>
        {politicalLinks.map((l, i) => (
          <div key={i} className="row">
            <div><span className="row-kind">{l.name}</span> — {l.detail}</div>
            <Cite>{l.cite}</Cite>
          </div>
        ))}
        {politicalLinks.length === 0 && <div className="reply">No political links on file.</div>}
      </section>

      <div className="score-note">
        Reverse index: one funder → everything they touch. The same entity appears identically on every outlet dossier it links to.
      </div>
    </div>
  );
}

export { DonorPage };
