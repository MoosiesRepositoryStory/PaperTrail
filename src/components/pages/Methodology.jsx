/* ---------- methodology ---------- */

function Methodology() {
  return (
    <div className="method fade-in">
      <h2 className="dossier-name">How PaperTrail works</h2>
      <p className="method-lede">We don't tell you which outlets to trust. We show you who owns them, who funds them, who those funders also fund — and how transparent everyone is about it. You decide.</p>

      <div className="m-block">
        <div className="layer-tag">Layer 1 · The record</div>
        <p>Ownership chains, funding, persons of interest. Every entry cites a primary document a skeptic can open. India: MCA filings, SEBI/NSE disclosures, MIB licenses, ECI electoral-bond data. US: SEC, FEC, FCC public files, IRS 990s. This layer contains zero judgments.</p>
      </div>

      <div className="m-block">
        <div className="layer-tag">The funder registry</div>
        <p>Every donor, investor and controlling entity gets its own dossier: every outlet, party and politician it funds, cross-linked both ways. One funder → everything they touch.</p>
      </div>

      <div className="m-block">
        <div className="layer-tag">Layer 2 · Transparency checks</div>
        <p>Five procedural yes/no checks with published evidence. The score measures how easy an outlet makes it to audit itself — not whether its politics are correct.</p>
      </div>

      <div className="m-block">
        <div className="layer-tag flag-tag">Entanglement flags</div>
        <p>Owner/funder/advertiser overlap with covered subjects is reported, never scored. Whether it corrupted coverage is your call, made with the facts in front of you.</p>
      </div>

      <div className="m-block">
        <div className="layer-tag dim-tag">Lean & watchdog ratings — always attributed</div>
        <p>PaperTrail never issues its own bias verdict. Lean characterizations and reliability ratings are displayed with their source, as external claims.</p>
      </div>

      <div className="m-block">
        <div className="layer-tag dim-tag">Appeals & our own books</div>
        <p>Outlets and funders can dispute any entry; disputes publish verbatim beside the record. PaperTrail's own funding and conflicts get the same dossier treatment — permanently pinned.</p>
      </div>

      <h2 className="dossier-name" style={{ marginTop: 32 }}>Guide: Follow the money yourself</h2>
      <p className="method-lede">
        This is a walkthrough for researching an outlet's ownership and funding independently — not PaperTrail's investigative conclusions, but the same steps used to build this database, so you can verify or extend any entry yourself.
      </p>

      <div className="m-block">
        <div className="layer-tag">Step 1 — Find the parent company</div>
        <p>Start with the outlet's own "About" or masthead page — most disclose a parent company or publisher. If it's a listed company, its stock ticker is the fastest way in. If it's private, a business registry search by the outlet's legal name (not its brand name) usually surfaces a parent.</p>
      </div>

      <div className="m-block">
        <div className="layer-tag">Step 2 — Read the ownership filing</div>
        <p>US: search the company name on <strong>SEC EDGAR</strong> (sec.gov/edgar/search) for 10-Ks and proxy statements — proxy statements list major shareholders and board members by name. India: <strong>MCA21</strong> (mca.gov.in) gives director and charge data for any registered company; SEBI/NSE/BSE disclosure pages carry shareholding patterns for listed media companies. Either way, look for the "promoter" or "controlling shareholder" line — that's the ownership chain's top node.</p>
      </div>

      <div className="m-block">
        <div className="layer-tag">Step 3 — Cross-reference the owner's other interests</div>
        <p><strong>OpenCorporates</strong> (opencorporates.com) is the largest free open database of company registrations worldwide — search a person's or holding company's name to see what else they control. This is how you catch the "the outlet's owner also owns the company it's covering favorably" pattern.</p>
      </div>

      <div className="m-block">
        <div className="layer-tag">Step 4 — Trace political money</div>
        <p>US: <strong>FEC.gov</strong> (or api.open.fec.gov for bulk queries) lets you search individual donors by name and employer — search the owner's or executive's name directly. India: the 2024 Supreme Court-ordered <strong>electoral bond disclosure data</strong> (published via ECI) is the closest equivalent; candidate and party affidavits are on the ECI's affidavit portal, though not as a clean API — expect to read PDFs.</p>
      </div>

      <div className="m-block">
        <div className="layer-tag">Step 5 — Check for regulatory history</div>
        <p>Search the company and named executives on the relevant regulator's own order/enforcement pages (SEBI's enforcement orders list, SEC litigation releases, FCC public files for broadcast licenses) — these are usually free-text searchable and dated, which is exactly the citation discipline this database tries to hold itself to.</p>
      </div>

      <div className="m-block">
        <div className="layer-tag dim-tag">The toolbox, in one place</div>
        <p>
          SEC EDGAR — sec.gov/edgar/search · FEC — fec.gov & api.open.fec.gov · MCA21 — mca.gov.in · SEBI enforcement orders — sebi.gov.in/enforcement · OpenCorporates — opencorporates.com · OpenSecrets (US money, non-commercial license) — opensecrets.org · ECI — eci.gov.in
        </p>
      </div>

      <div className="m-block">
        <div className="layer-tag dim-tag">The point of this guide</div>
        <p>PaperTrail's dossiers are a starting point, not an endpoint. If a citation looks thin, this is how to go check it yourself — and if you find something we've missed, the "Log a new incident" and reply forms are how it gets added, reviewed, and published.</p>
      </div>
    </div>
  );
}

export { Methodology };
