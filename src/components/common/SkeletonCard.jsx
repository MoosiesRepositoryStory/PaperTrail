/* ---------- skeleton (shown while pipeline calls resolve) ---------- */

function SkeletonCard() {
  return (
    <div className="card" style={{ cursor: "default" }} aria-hidden="true">
      <div className="card-top">
        <div style={{ flex: 1 }}>
          <div className="skel" style={{ height: 16, width: "45%", marginBottom: 8 }} />
          <div className="skel" style={{ height: 10, width: "65%" }} />
        </div>
        <div className="skel" style={{ height: 54, width: 54, borderRadius: "50%" }} />
      </div>
      <div className="skel" style={{ height: 10, width: "85%", marginTop: 12 }} />
    </div>
  );
}

export { SkeletonCard };
