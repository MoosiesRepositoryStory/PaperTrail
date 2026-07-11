const PATTERN_THRESHOLD = 3; // verified incidents per rolling 12 months

/* ------------------------------------------------------------------
   SECTION 3 — Procedural bias-flagging rubric
   Rules are direction-neutral: each applies regardless of which group,
   side or party is targeted or favored. An incident counts only with a
   quoted, dated, sourced example. Single incident ≠ pattern.
------------------------------------------------------------------- */
const RUBRIC = [
  {
    id: "dehumanizing",
    name: "Dehumanizing language",
    rule: "Slurs or dehumanizing terms for any ethnic, religious or national group in broadcast speech, article text or chyron — flagged regardless of which group is targeted.",
    triggers: "Dated clip or screenshot, the exact quoted term, and a source link.",
    nonTriggers: "Quoting a slur while reporting on its use; harsh criticism of a government, army or party (criticism of institutions is not dehumanization of a people).",
  },
  {
    id: "casualty",
    name: "Asymmetric casualty framing",
    rule: "One side's dead are named and humanized while the other side's appear only as aggregate numbers — across the outlet's coverage of the same event, in the same time window.",
    triggers: "Two or more dated stories from the same event window, passages quoted side by side, checked against the outlet's FULL event coverage set, with a wire-service baseline for the same days.",
    nonTriggers: "A single story using aggregate counts when names were unavailable from either side at press time; asymmetry explained by asymmetric information access, if documented.",
  },
  {
    id: "omission",
    name: "Omission patterns",
    rule: "An event carried with due prominence by the wire baseline (PTI / Reuters / AP) is absent or demonstrably buried in the outlet.",
    triggers: "Wire timestamps plus outlet archive/search evidence, repeated across 3+ comparable events — the pattern is the flag, not one miss.",
    nonTriggers: "Missing a single story in a heavy news cycle; covering it later with equivalent prominence.",
  },
  {
    id: "sourcing",
    name: "Sourcing transparency",
    rule: "Recurring unnamed-official claims that consistently favor one actor, with no disclosed reason for anonymity.",
    triggers: "Quoted passages, dated, with a running count showing the one-directional tilt over time.",
    nonTriggers: "Occasional anonymous sourcing with a stated justification; anonymous claims that cut in different directions.",
  },
  {
    id: "headline",
    name: "Headline-vs-content mismatch",
    rule: "The headline asserts something the body text does not support.",
    triggers: "Dated screenshot of the headline plus the quoted body passage it contradicts.",
    nonTriggers: "A simplified but accurate headline; a headline updated as facts developed, with correction noted.",
  },
];

/* SECTION 4 — Test bench: open verification tasks, never pre-loaded verdicts.
   If these only ever flag outlets the operator already suspects, the rubric fails. */
const TEST_BENCH = [
  {
    name: "Jantar Mantar protest coverage gaps (2025–26)",
    check: "Omission patterns",
    method: "Log PTI / Reuters / AP wire timestamps for each protest development, then check every outlet's archive for presence and prominence. Same procedure for every outlet, government-friendly and government-critical alike.",
    status: "In progress — real wire baseline identified (PTI via ThePrint, July 4 2026, on the Cockroach Janta Party / NEET-CBSE protest). Aaj Tak and NDTV checked directly: no omission found on either. Republic TV, Times Now, Zee News and The Wire still need direct per-outlet archive confirmation.",
  },
  {
    name: "Derogatory terms for religious minorities in Indian broadcast/chyrons",
    check: "Dehumanizing language",
    method: "Chyron screenshot corpus + NBDSA complaint and order records, applied to all channels equally; terms targeting any community count identically.",
    status: "Open — evidence collection",
  },
  {
    name: "Israel–Lebanon casualty framing, multi-outlet",
    check: "Asymmetric casualty framing",
    method: "Same-event story pairs across NYT, Times of Israel and others against a wire baseline; asymmetries in BOTH directions logged. Coder must survey each outlet's full event coverage, not selected pairs.",
    status: "Open — worked template on the NYT dossier shows the required evidence",
  },
  {
    name: "Times of Israel vs NYT, identical events, wire baseline",
    check: "Multiple categories",
    method: "Side-by-side coding of the same event windows by two coders working blind to each other's results.",
    status: "Open — evidence collection",
  },
];

export { PATTERN_THRESHOLD, RUBRIC, TEST_BENCH };
