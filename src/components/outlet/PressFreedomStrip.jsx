import { PRESS_FREEDOM, RSF_METHOD_URL } from "../../data/countryProfiles";
import { Cite } from "../common/Cite";

function PressFreedomStrip({ country }) {
  const pf = PRESS_FREEDOM[country];
  if (!pf) return null;
  return (
    <div className="lean-strip" style={{ marginTop: -12 }}>
      <span className="lean-label">Press freedom context</span>
      <span className="lean-text">
        Operates in {pf.country} — ranked {pf.rank} / {pf.total} in RSF's {pf.year} World Press Freedom Index{pf.score ? ` (score ${pf.score})` : ""}
      </span>
      <span className="lean-attr">{pf.note} · <Cite>{pf.ref}</Cite> · methodology: <Cite>{RSF_METHOD_URL}</Cite> · updated annually</span>
    </div>
  );
}

export { PressFreedomStrip };
