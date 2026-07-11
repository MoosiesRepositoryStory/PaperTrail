import { useState } from "react";
import { RubricPage } from "./RubricPage";
import { EthicsPage } from "./EthicsPage";
import { LeftRightPage } from "./LeftRightPage";

/* ---------- Standards & Perspective (Section 4 nav restructure: Rubric + Ethics + Left/Right grouped) ---------- */

function StandardsPage() {
  const [sub, setSub] = useState("rubric");
  return (
    <div>
      <div className="chips" role="group" aria-label="Standards & perspective sections" style={{ marginBottom: 16 }}>
        {[["rubric", "Bias rubric"], ["ethics", "Journalism ethics"], ["leftright", "Understanding left/right"]].map(([k, label]) => (
          <button key={k} className={`chip ${sub === k ? "on" : ""}`} onClick={() => setSub(k)}>{label}</button>
        ))}
      </div>
      {sub === "rubric" && <RubricPage />}
      {sub === "ethics" && <EthicsPage />}
      {sub === "leftright" && <LeftRightPage />}
    </div>
  );
}

export { StandardsPage };
