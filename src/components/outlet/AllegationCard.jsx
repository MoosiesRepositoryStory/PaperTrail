import { Stamp } from "../common/Stamp";
import { Cite } from "../common/Cite";
import { ALLEGATION_STATUS_META } from "../../utils/scoring";

function AllegationCard({ a }) {
  const meta = ALLEGATION_STATUS_META[a.status] || ALLEGATION_STATUS_META.alleged;
  return (
    <div className="analysis" style={{ marginTop: 10 }}>
      <Stamp tone={meta.tone}>{meta.label}</Stamp>
      <p><span className="row-kind">{a.what}</span></p>
      <p className="check-ev">Alleged by: {a.allegedBy} · {a.date}</p>
      {a.note && <p className="check-ev">{a.note}</p>}
      <Cite>{a.cite}</Cite>
    </div>
  );
}

export { AllegationCard };
