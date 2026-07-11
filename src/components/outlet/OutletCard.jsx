import { ScoreRing } from "../common/ScoreRing";
import { Stamp } from "../common/Stamp";
import { LogoBoxImg } from "../common/LogoBox";
import { scoreOf } from "../../utils/scoring";

/* ---------- cards ---------- */

function OutletCard({ o, onOpen }) {
  return (
    <button className="card" onClick={() => onOpen({ kind: "outlet", id: o.id })}>
      <div className="card-top">
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div className="logo-box" style={{ width: 36, height: 36 }}>
            <LogoBoxImg o={o} />
          </div>
          <div>
            <div className="card-name">{o.name} <span className="country">{o.country}</span></div>
            <div className="card-meta">{o.url} · {o.type}</div>
          </div>
        </div>
        <ScoreRing value={scoreOf(o)} />
      </div>
      <div className="card-bottom">
        <span className="chain-mini">{o.chain.map((n) => n.entity).join(" → ")}</span>
        {o.flags.length > 0 && <Stamp tone="flag">{o.flags.length} flag{o.flags.length > 1 ? "s" : ""}</Stamp>}
      </div>
    </button>
  );
}

export { OutletCard };
