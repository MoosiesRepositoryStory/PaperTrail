import { outletById } from "../../utils/lookup";

function DonorCard({ d, onOpen }) {
  return (
    <button className="card donor-card" onClick={() => onOpen({ kind: "donor", id: d.id })}>
      <div className="card-top">
        <div>
          <div className="card-name">◈ {d.name}</div>
          <div className="card-meta">{d.type}</div>
        </div>
      </div>
      <div className="card-bottom">
        <span className="chain-mini">
          Funds: {d.links.map((l) => (l.to ? outletById(l.to)?.name : l.name)).join(" · ")}
        </span>
      </div>
    </button>
  );
}

export { DonorCard };
