import { useNavigate, useParams } from "react-router-dom";
import { CORPORATE_ENTITIES } from "../../data/corporateEntities";
import { outletById } from "../../utils/lookup";
import { AllegationCard } from "../outlet/AllegationCard";
import { Stamp } from "../common/Stamp";

/* ---------- Corporate-entity allegations tracker (Section 6, v12) ---------- */

function CorporateEntitiesPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const scopeNote = (
    <div className="flag-card" style={{ marginBottom: 16 }}>
      <div className="flag-title">⚑ Scope note</div>
      <div className="flag-detail">
        This section tracks allegations against corporate entities — parent companies, holding companies, and related corporate parties — rather than named individuals. Every entry is sourced only to primary documents (regulatory orders, court/chargesheet filings, official statements) and includes the entity's own denial or response where one is on record.
      </div>
    </div>
  );

  if (id) {
    const e = CORPORATE_ENTITIES.find((x) => x.id === id);
    if (!e) {
      return (
        <div className="method fade-in">
          <button className="back" onClick={() => navigate("/corporate-entities")}>← All entities</button>
          <div className="reply">No corporate entity on file for "{id}".</div>
        </div>
      );
    }
    return (
      <div className="method fade-in">
        <button className="back" onClick={() => navigate("/corporate-entities")}>← All entities</button>
        {scopeNote}
        <div className="dossier-head">
          <div>
            <h2 className="dossier-name">{e.name}</h2>
            <div className="card-meta">{e.type}</div>
          </div>
        </div>
        <div className="check-ev" style={{ marginBottom: 16 }}>{e.note}</div>

        {e.linkedOutlets && e.linkedOutlets.length > 0 && (
          <section>
            <div className="layer-tag">Linked outlets in PaperTrail's database</div>
            {e.linkedOutlets.map((oid) => {
              const o = outletById(oid);
              return o ? (
                <button key={oid} className="link-row" onClick={() => navigate(`/outlet/${oid}`)}>
                  <div className="link-name">{o.name} →</div>
                </button>
              ) : null;
            })}
          </section>
        )}

        <section>
          <div className="layer-tag flag-tag">Allegations & regulatory actions — status shown as classified, denial included where on record</div>
          {e.allegations.map((a, i) => <AllegationCard key={i} a={a} />)}
        </section>

        <div className="reply" style={{ marginTop: 16 }}>
          See an inaccuracy on this page? Every entry cites its primary source above; a correction request pointing to a more current or more specific document will be reviewed the same way any submission is, via the Under Review queue.
        </div>
      </div>
    );
  }

  return (
    <div className="method fade-in">
      <h2 className="dossier-name">Corporate entities</h2>
      <p className="method-lede">Parent companies, holding companies, and related corporate parties with documented allegations or regulatory actions — extending the same entity-based model one layer further into ownership, without profiling named individuals.</p>
      {scopeNote}
      {CORPORATE_ENTITIES.map((e) => (
        <button key={e.id} className="card" onClick={() => navigate(`/corporate-entities/${e.id}`)}>
          <div className="card-top">
            <div>
              <div className="card-name">{e.name}</div>
              <div className="card-meta">{e.type}</div>
            </div>
            {e.allegations.length > 0 && <Stamp tone="flag">{e.allegations.length} allegation{e.allegations.length > 1 ? "s" : ""}</Stamp>}
          </div>
        </button>
      ))}
    </div>
  );
}

export { CorporateEntitiesPage };
