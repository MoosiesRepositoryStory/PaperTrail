/* ------------------------------------------------------------------
   Section 6 (v12 replacement) — Corporate-entity allegations tracker.
   Named-individual profiles were removed: corporations carry a
   meaningfully higher bar to sue over accurate, sourced reporting than
   individuals do. Same investigative value (the money/influence trail),
   attached one layer further into related corporate parties instead of
   named people — parent/holding companies here, not executives.
   Primary sources only; denials included where on record.
------------------------------------------------------------------- */
const CORPORATE_ENTITIES = [
  {
    id: "adani-group",
    name: "Adani Group",
    type: "Conglomerate — ports, energy, infrastructure; controlling parent of NDTV via AMG Media Networks",
    linkedOutlets: ["ndtv"],
    note: "Included here because its corporate conduct — separate from NDTV's own editorial record — is directly relevant to who controls that outlet.",
    allegations: [
      {
        what: "Alleged stock manipulation and accounting fraud via undisclosed related-party transactions, publicized in a short-seller report that wiped over $150 billion in market value at its peak",
        allegedBy: "Hindenburg Research (report, January 2023); investigated by SEBI under India Supreme Court direction",
        date: "Alleged January 2023; SEBI final orders on two specific transaction sets, September 2025",
        status: "dismissed",
        note: "SEBI's September 2025 final orders found the allegations regarding Adicorp, Milestone Tradelinks and Rehvar Infrastructure transactions 'not established.' Reuters reported over a dozen related cases remained pending final orders as of that month — the dismissal covers specific matters, not the entire episode. Hindenburg Research ceased operations in January 2025. Adani Group has consistently denied all wrongdoing.",
        cite: "SEBI final orders, September 2025 (sebi.gov.in); OCCRP reporting; Reuters",
      },
      {
        what: "US federal indictment alleging a $250 million bribery scheme to secure Indian solar energy contracts",
        allegedBy: "US Department of Justice, Eastern District of New York",
        date: "Indictment unsealed November 2024",
        status: "charged",
        note: "Gautam Adani and other executives were named. Adani Group has denied the allegations and called them baseless. This is a separate matter from the SEBI/Hindenburg proceedings above.",
        cite: "US DOJ indictment, November 2024; company statements",
      },
    ],
  },
  {
    id: "arg-outlier",
    name: "ARG Outlier Media Pvt Ltd",
    type: "Private company — corporate parent of Republic TV and Republic Bharat",
    linkedOutlets: ["republic"],
    note: "The allegation below was previously associated with a named executive; it is attached here to the corporate entity that owns and operates the channels, consistent with this section's entity-based model.",
    allegations: [
      {
        what: "Alleged manipulation of Television Rating Points (TRP) to inflate ratings, in conspiracy with a former BARC CEO",
        allegedBy: "Mumbai Police (Crime Intelligence Unit), based on a BARC/Hansa Research complaint",
        date: "Complaint 2020; multiple chargesheets filed 2020–2021",
        status: "charged",
        note: "The company was named as an accused alongside individual employees in supplementary chargesheets citing WhatsApp records as evidence. ARG Outlier Media has denied the allegations, calling the case a politically motivated prosecution; no conviction has been recorded.",
        cite: "Mumbai Police chargesheets, 2020–2021; Bombay High Court filings",
      },
    ],
  },
  {
    id: "zeel",
    name: "Zee Entertainment Enterprises Ltd (ZEEL)",
    type: "Publicly listed entertainment company — a separate Essel Group entity from Zee Media Corporation (Zee News' parent), tied through the same promoter family",
    linkedOutlets: ["zee"],
    note: "Included because the promoter family named in this matter overlaps directly with Zee Media's promoter family, even though ZEEL and Zee Media are distinct listed companies.",
    allegations: [
      {
        what: "Alleged diversion of funds via a Yes Bank fixed-deposit arrangement benefiting promoter-family-controlled associate entities",
        allegedBy: "Securities and Exchange Board of India (SEBI)",
        date: "Interim order June 2023; fresh show-cause notice February 12, 2026",
        status: "alleged",
        note: "SEBI's order describes an FD adjustment by Yes Bank covering dues of associate entities owned by the promoter family. The company has denied the allegations and said it would respond formally to SEBI; SAT has at points set aside specific related directives while the underlying investigation continued.",
        cite: "SEBI interim order, June 2023; SEBI show-cause notice, February 12, 2026",
      },
    ],
  },
];

export { CORPORATE_ENTITIES };
