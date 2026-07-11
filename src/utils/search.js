import { OUTLETS } from "../data/outlets";
import { DONORS } from "../data/donors";

/* ---------- fuzzy search utilities (Section 4) ---------- */

function levenshtein(a, b) {
  a = a.toLowerCase(); b = b.toLowerCase();
  const m = a.length, n = b.length;
  if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
}

function buildSearchIndex() {
  const idx = [];
  OUTLETS.forEach((o) => {
    idx.push({ label: o.name, kind: "outlet", sel: { kind: "outlet", id: o.id } });
    o.chain.forEach((n) => idx.push({ label: n.entity, kind: "owner", sel: { kind: "outlet", id: o.id } }));
    o.people.forEach((p) => idx.push({ label: p.name, kind: "person", sel: { kind: "outlet", id: o.id } }));
  });
  DONORS.forEach((d) => idx.push({ label: d.name, kind: "funder", sel: { kind: "donor", id: d.id } }));
  const seen = new Set();
  return idx.filter((e) => (seen.has(e.label.toLowerCase()) ? false : (seen.add(e.label.toLowerCase()), true)));
}
const SEARCH_INDEX = buildSearchIndex();

function rankMatches(q) {
  const query = q.trim().toLowerCase();
  if (!query) return [];
  const scored = SEARCH_INDEX.map((e) => {
    const label = e.label.toLowerCase();
    let score;
    if (label.startsWith(query)) score = 0;
    else if (label.includes(query)) score = 1;
    else {
      const words = label.split(/\s+/);
      const d = Math.min(levenshtein(query, label), ...words.map((w) => levenshtein(query, w)));
      score = 2 + d;
    }
    return { ...e, score };
  });
  return scored.sort((a, b) => a.score - b.score);
}

export { levenshtein, rankMatches };
