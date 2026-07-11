/* ------------------------------------------------------------------
   PaperTrail's own dossier — the "audit yourself first" principle.
   A money-trail tool that hides its own money is dead on arrival, so
   PaperTrail gets the same treatment it applies to every outlet.
   This is a template for a real project to fill with real disclosures.
------------------------------------------------------------------- */

const SELF_DOSSIER = {
  name: "PaperTrail (this project)",
  tagline: "We apply our own lens to ourselves first — before rating anyone else.",
  ownership: [
    { role: "Project", entity: "PaperTrail", note: "Independent media-transparency prototype", cite: "[Fill: legal entity / registration once formed]" },
    { role: "Control", entity: "[Fill: founder / org name]", note: "[Fill: who ultimately controls editorial and data decisions]", cite: "[Fill: registration or founding document]" },
  ],
  funding: [
    { kind: "Current funding", detail: "[Fill honestly: self-funded / grant / donations / none yet]", cite: "[Fill: published accounts once they exist]" },
    { kind: "Funding PaperTrail will NOT take", detail: "Money from media owners, political parties, or entities in the database, without disclosing it here first", cite: "Standing policy" },
  ],
  conflicts: [
    { title: "The rater-rated problem", detail: "PaperTrail rates outlets while being a media entity itself. Mitigation: this dossier is permanent and pinned; any funder who also appears in the outlet database is flagged here before anywhere else." },
    { title: "Methodology is a judgment", detail: "The transparency rubric and bias rubric are PaperTrail's design choices. Mitigation: both are fully published, versioned, and open to dispute via the same right-of-reply mechanism outlets get." },
  ],
  checks: {
    "Ownership disclosed": { pass: true, evidence: "This dossier — to be completed with the real entity once formed" },
    "Corrections policy published": { pass: true, evidence: "Methodology + Rubric tabs are public and versioned" },
    "Funders disclosed": { pass: false, evidence: "Pending: no published accounts yet — marked failing until real disclosure exists, not assumed passing" },
    "Conflicts of interest stated": { pass: true, evidence: "Listed above, openly" },
    "Right of reply offered to rated outlets": { pass: true, evidence: "Built into every dossier" },
  },
};

export { SELF_DOSSIER };
