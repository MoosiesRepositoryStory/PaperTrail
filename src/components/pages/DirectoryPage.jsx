import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { OUTLETS } from "../../data/outlets";
import { DONORS } from "../../data/donors";
import { donorById } from "../../utils/lookup";
import { rankMatches } from "../../utils/search";
import { OutletCard } from "../outlet/OutletCard";
import { DonorCard } from "../donor/DonorCard";
import { SkeletonCard } from "../common/SkeletonCard";

/* ---------- directory — outlet + donor search ---------- */

function DirectoryPage({ booting }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("ALL");
  const [showAuto, setShowAuto] = useState(false);

  const openSel = (sel) => navigate(sel.kind === "outlet" ? `/outlet/${sel.id}` : `/donor/${sel.id}`);

  const { outlets, donors } = useMemo(() => {
    const q = query.trim().toLowerCase();
    let os = OUTLETS.filter((o) => region === "ALL" || o.country === region);
    let ds = [];
    if (q) {
      ds = DONORS.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.links.some((l) => (l.name || "").toLowerCase().includes(q))
      );
      os = os.filter(
        (o) =>
          o.name.toLowerCase().includes(q) ||
          o.url.toLowerCase().includes(q) ||
          o.chain.some((n) => n.entity.toLowerCase().includes(q)) ||
          o.people.some((p) => p.name.toLowerCase().includes(q)) ||
          o.donorIds.some((id) => donorById(id).name.toLowerCase().includes(q))
      );
    }
    return { outlets: os, donors: ds };
  }, [query, region]);

  const ranked = useMemo(() => rankMatches(query), [query]);
  const autoMatches = useMemo(() => ranked.filter((m) => m.score <= 4).slice(0, 6), [ranked]);
  const didYouMean = useMemo(() => {
    const q = query.trim();
    if (!q || q.length < 3) return null;
    const exactHit = ranked.length && ranked[0].score <= 1;
    if (exactHit) return null; // query already substring-matches something
    const best = ranked[0];
    if (!best) return null;
    const dist = best.score - 2;
    // tolerate typos up to ~40% of the query length
    if (dist >= 0 && dist <= Math.max(2, Math.floor(q.length * 0.4))) return best;
    return null;
  }, [ranked, query]);

  if (booting) {
    return (
      <div className="fade-in">
        <div className="skel" style={{ height: 44, marginBottom: 10 }} />
        <SkeletonCard /><SkeletonCard /><SkeletonCard /><SkeletonCard />
      </div>
    );
  }

  return (
    <div className="fade-in">
      <div className="search-wrap">
        <input
          className="search"
          placeholder="Outlet, owner, anchor or funder (try: Adani)"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setShowAuto(true); }}
          onFocus={() => setShowAuto(true)}
          onBlur={() => setTimeout(() => setShowAuto(false), 150)}
          aria-label="Search outlets, owners, anchors or funders"
          autoComplete="off"
        />
        {showAuto && query.trim() && autoMatches.length > 0 && (
          <div className="auto-drop" role="listbox">
            {autoMatches.map((m, i) => (
              <button
                key={i}
                className="auto-item"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => { setQuery(m.label); setShowAuto(false); openSel(m.sel); }}
              >
                <span>{m.label}</span>
                <span className="auto-kind">{m.kind}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="chips" role="group" aria-label="Filter by region">
        {["ALL", "IN", "US", "IL"].map((r) => (
          <button key={r} className={`chip ${region === r ? "on" : ""}`} onClick={() => setRegion(r)}>
            {r === "ALL" ? "All" : r === "IN" ? "India" : r === "US" ? "US" : "Israel"}
          </button>
        ))}
      </div>

      {didYouMean && (
        <div className="dym">
          Did you mean:{" "}
          <button className="dym-btn" onClick={() => { setQuery(didYouMean.label); openSel(didYouMean.sel); }}>
            {didYouMean.label}
          </button>
          ?
        </div>
      )}

      {donors.length > 0 && (
        <>
          <div className="group-label">Funders & persons of interest</div>
          {donors.map((d) => <DonorCard key={d.id} d={d} onOpen={openSel} />)}
        </>
      )}

      {query && <div className="group-label">Outlets</div>}
      {outlets.map((o) => <OutletCard key={o.id} o={o} onOpen={openSel} />)}

      {outlets.length === 0 && donors.length === 0 && (
        <div className="reply">
          Nothing on file for "{query}".
          {didYouMean
            ? " The closest match is suggested above."
            : " Search by outlet name, owner, anchor or funder — the directory grows as filings are added."}
        </div>
      )}
    </div>
  );
}

export { DirectoryPage };
