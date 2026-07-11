import { Cite } from "../common/Cite";
import { Stamp } from "../common/Stamp";

/* ---------- political lean panel (Section 3: aggregate, never invent) ---------- */

const LEAN_BUCKETS = { left: -2, "lean left": -1, "left-center": -1, middle: 0, center: 0, "lean right": 1, "right-center": 1, right: 2 };
function leanBucket(rating) {
  const r = rating.toLowerCase();
  for (const k of Object.keys(LEAN_BUCKETS).sort((a, b) => b.length - a.length)) {
    if (r.includes(k)) return LEAN_BUCKETS[k];
  }
  return null;
}

function LeanPanel({ o }) {
  const ratings = o.leanRatings || [];
  const buckets = ratings.map((r) => leanBucket(r.rating)).filter((b) => b !== null);
  const disagree = buckets.length > 1 && Math.max(...buckets) - Math.min(...buckets) >= 1;
  return (
    <section>
      <div className="layer-tag dim-tag">Political lean — third-party ratings, aggregated & attributed, never our own score</div>
      {ratings.length === 0 && (
        <div className="reply">
          Coverage gap: no major published rating body (AllSides, Ad Fontes, MBFC) rates this outlet. PaperTrail displays the gap rather than filling it with its own verdict. Attributed press characterizations appear above.
        </div>
      )}
      {ratings.map((r, i) => (
        <div key={i} className="row">
          <div>
            <span className="row-kind">{r.body}</span> — {r.rating}
            <span className="row-amount"> · {r.method}</span>
          </div>
          <Cite>{r.ref}</Cite>
        </div>
      ))}
      {disagree && (
        <div className="score-note">
          <Stamp tone="amber">Bodies differ</Stamp>&nbsp; Ratings shown separately — disagreement between methodologies is information, not noise to average away.
        </div>
      )}
      {ratings.length > 0 && !disagree && (
        <div className="score-note">Bodies broadly agree for this outlet. Each rating links to its own published methodology.</div>
      )}
    </section>
  );
}

export { LEAN_BUCKETS, leanBucket, LeanPanel };
