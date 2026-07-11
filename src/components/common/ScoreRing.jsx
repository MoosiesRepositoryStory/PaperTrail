function ScoreRing({ value, size = 54 }) {
  const r = (size - 8) / 2;
  const c = 2 * Math.PI * r;
  const tone = value >= 80 ? "var(--verify)" : value >= 50 ? "var(--amber)" : "var(--flag)";
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label={`Transparency score ${value} of 100`}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--line)" strokeWidth="5" />
      <circle
        cx={size / 2} cy={size / 2} r={r} fill="none"
        stroke={tone} strokeWidth="5"
        strokeDasharray={`${(value / 100) * c} ${c}`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text x="50%" y="53%" dominantBaseline="middle" textAnchor="middle"
        style={{ font: "600 13px 'IBM Plex Mono', monospace", fill: "var(--ink)" }}>
        {value}
      </text>
    </svg>
  );
}

export { ScoreRing };
