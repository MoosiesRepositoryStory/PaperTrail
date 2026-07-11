/* ---------- understanding left/right (Section 5 — neutral reference) ---------- */

function LeftRightPage() {
  return (
    <div className="method fade-in">
      <h2 className="dossier-name">Understanding "left" and "right"</h2>
      <p className="method-lede">
        Reference material, written to inform rather than persuade. PaperTrail uses these terms only when quoting rating bodies — here's where they come from and what they do and don't capture.
      </p>

      <div className="m-block">
        <div className="layer-tag">Origins: a seating chart, 1789</div>
        <p>The terms began as literal geography: in the French National Assembly of 1789, supporters of the king sat to the president's right, supporters of the revolution to his left. The spatial metaphor outlived the seating, spread through 19th-century European parliaments, and reached most of the world's political vocabulary by the 20th century — shifting meaning at every border it crossed.</p>
      </div>

      <div className="m-block">
        <div className="layer-tag">One axis among several</div>
        <p>Political scientists generally treat left/right as one dimension among several. Common alternatives and supplements: separating <strong>economic</strong> positions (redistribution, regulation) from <strong>social/cultural</strong> ones (tradition, identity, authority); the <strong>authoritarian–libertarian</strong> axis; and two-axis maps like the Nolan chart. Spatial models of politics trace to work such as Anthony Downs' <em>An Economic Theory of Democracy</em> (1957); research in the tradition of Philip Converse (1964) found many voters hold positions that don't line up neatly on a single axis at all.</p>
      </div>

      <div className="m-block">
        <div className="layer-tag">The case for the framework</div>
        <p>Defenders note it works as shorthand: it compresses many issues into one comparable scale, predicts real voting coalitions and party alliances reasonably well in many countries, and lets voters orient quickly without studying every issue. Rating bodies like AllSides use it because their audiences already think in it.</p>
      </div>

      <div className="m-block">
        <div className="layer-tag">The case against it</div>
        <p>Critics note the axis means different things in different countries — an economic "liberal" in Europe and the US are nearly opposites — and different things across eras. It obscures cross-cutting issues (a voter can be economically left and culturally conservative), and research on affective polarization (e.g., Lilliana Mason, <em>Uncivil Agreement</em>, 2018) argues the labels increasingly function as tribal identities rather than descriptions of policy positions.</p>
      </div>

      <div className="m-block">
        <div className="layer-tag dim-tag">Where PaperTrail stands</div>
        <p>Nowhere. Both cases are presented above from the political-science literature; the reader draws the conclusion. This is also why the app aggregates others' lean ratings with their methodologies attached instead of issuing its own.</p>
      </div>
    </div>
  );
}

export { LeftRightPage };
