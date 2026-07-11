import { Stamp } from "../common/Stamp";
import { STATUS_META } from "../../utils/scoring";
import { RUBRIC } from "../../data/rubric";

function IncidentCard({ inc }) {
  const meta = STATUS_META[inc.status] || STATUS_META.illustrative;
  const r = RUBRIC.find((x) => x.id === inc.cat);
  return (
    <div className="analysis" style={{ marginTop: 10 }}>
      <Stamp tone={meta.tone}>{meta.label}</Stamp>
      <p><span className="row-kind">{r?.name}</span> · {inc.event} · {inc.date}</p>
      <p>{inc.quote}</p>
      <p className="check-ev">Evidence: {inc.source}</p>
      <p className="check-ev">{inc.note}</p>
      {inc.coder && <p className="check-ev">Logged by: {inc.coder}{inc.secondCoder ? ` · confirmed by ${inc.secondCoder}` : ""}</p>}
    </div>
  );
}

export { IncidentCard };
