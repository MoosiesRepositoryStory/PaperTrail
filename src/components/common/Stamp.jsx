/* ---------- small pieces ---------- */

function Stamp({ children, tone }) {
  return <span className={`stamp stamp-${tone || "ink"}`}>{children}</span>;
}

export { Stamp };
