import { useNavigate, useParams } from "react-router-dom";
import { COUNTRY_PROFILES, RSF_METHOD_URL } from "../../data/countryProfiles";
import { OUTLETS } from "../../data/outlets";
import { Cite } from "../common/Cite";

/* ---------- RSF country profiles (Section 5, v4 round) ---------- */

function CountriesPage() {
  const { code } = useParams();
  const navigate = useNavigate();
  const sorted = [...COUNTRY_PROFILES].sort((a, b) => a.rank - b.rank);

  if (code) {
    const c = COUNTRY_PROFILES.find((x) => x.code === code);
    if (!c) {
      return (
        <div className="method fade-in">
          <button className="back" onClick={() => navigate("/countries")}>← All countries</button>
          <div className="reply">No country profile on file for "{code}".</div>
        </div>
      );
    }
    const linkedOutlets = OUTLETS.filter((o) => o.country === c.code);
    return (
      <div className="method fade-in">
        <button className="back" onClick={() => navigate("/countries")}>← All countries</button>
        <div className="dossier-head">
          <div>
            <h2 className="dossier-name">{c.country}</h2>
            <div className="card-meta">RSF World Press Freedom Index {c.year}</div>
          </div>
          <div className="rank-badge">{c.rank}<span className="rank-total">/180</span></div>
        </div>

        <section>
          <div className="layer-tag">Rank, score & trend</div>
          <div className="row"><div><span className="row-kind">Rank</span> — {c.rank} of 180 ({c.year} Index){c.score ? ` · score ${c.score}` : ""}{c.prev ? ` · ${c.prev} in ${c.year - 1}` : ""}</div></div>
          <div className="row"><div><span className="row-kind">Trend</span> — {c.trend}</div></div>
        </section>

        <section>
          <div className="layer-tag dim-tag">RSF's stated rationale — paraphrased briefly, cited, never our analysis</div>
          <div className="row">
            <div>{c.rationale}</div>
            <Cite>{c.ref}</Cite>
          </div>
          <div className="score-note">
            Full country analysis in RSF's own words: <Cite>{c.ref}</Cite> · methodology: <Cite>{RSF_METHOD_URL}</Cite>. Where RSF's published rationale is limited, PaperTrail says so rather than speculating.
          </div>
        </section>

        <section>
          <div className="layer-tag">Outlets in PaperTrail's database operating here</div>
          {linkedOutlets.length > 0 ? linkedOutlets.map((o) => (
            <button key={o.id} className="link-row" onClick={() => navigate(`/outlet/${o.id}`)}>
              <div>
                <div className="link-name">{o.name} →</div>
                <div className="check-ev">{o.type}</div>
              </div>
            </button>
          )) : (
            <div className="reply">No outlets from this country in the database yet — dossiers are added as ownership research is completed.</div>
          )}
        </section>
      </div>
    );
  }

  return (
    <div className="method fade-in">
      <h2 className="dossier-name">Press freedom by country</h2>
      <p className="method-lede">
        RSF's World Press Freedom Index ranks 180 countries annually. Each profile shows RSF's rank, trend, and its stated rationale — cited and linked, never PaperTrail's own analysis. {COUNTRY_PROFILES.length} profiles are seeded from the 2026 Index publication; the remaining ~{180 - COUNTRY_PROFILES.length} load via the annual RSF ingestion job (see pipeline spec).
      </p>
      {sorted.map((c) => (
        <button key={c.code} className="card" onClick={() => navigate(`/countries/${c.code}`)}>
          <div className="card-top">
            <div>
              <div className="card-name">{c.country}</div>
              <div className="card-meta">{c.trend}</div>
            </div>
            <div className="rank-badge small">{c.rank}<span className="rank-total">/180</span></div>
          </div>
        </button>
      ))}
      <div className="reply" style={{ marginTop: 12 }}>
        Rankings and rationales © Reporters Without Borders, {new Date().getFullYear()} Index — displayed here with attribution and links; refreshed annually when RSF publishes.
      </div>
    </div>
  );
}

export { CountriesPage };
