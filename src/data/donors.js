const DONORS = [
  {
    id: "adani",
    name: "Adani Group (AMG Media Networks)",
    type: "Conglomerate — ports, energy, infrastructure",
    note: "Acquired majority control of NDTV in 2022 via AMG Media Networks.",
    links: [
      { to: "ndtv", kind: "outlet", detail: "Majority owner since Dec 2022", cite: "SEBI open-offer filings (demo)" },
      { to: null, kind: "political", name: "Electoral trusts", detail: "Corporate contributions on record via electoral trusts", cite: "ECI disclosures (demo)" },
    ],
  },
  {
    id: "rc",
    name: "Rajeev Chandrasekhar",
    type: "Politician & investor (BJP)",
    note: "Sitting MP at Republic TV's 2017 launch; founding investor via Asianet News. Later divested as he took ministerial office.",
    links: [
      { to: "republic", kind: "outlet", detail: "Founding investor via Asianet News; stake later divested", cite: "MCA filings (demo)" },
      { to: null, kind: "political", name: "BJP", detail: "Party membership; Union Minister of State 2021–24", cite: "Public record (demo)" },
    ],
  },
  {
    id: "birla",
    name: "Aditya Birla Group",
    type: "Conglomerate — metals, cement, finance, telecom",
    note: "Took a reported ~27.5% stake in Living Media (India Today Group) in 2012.",
    links: [
      { to: "aajtak", kind: "outlet", detail: "Minority stake in Living Media, parent of TV Today Network", cite: "Press reporting + MCA (demo)" },
      { to: null, kind: "political", name: "General Electoral Trust", detail: "Long-running corporate political contributions via electoral trust", cite: "ECI disclosures (demo)" },
    ],
  },
  {
    id: "essel",
    name: "Subhash Chandra / Essel Group",
    type: "Founder-promoter",
    note: "Founder of Zee; Rajya Sabha MP 2016–2022, elected with BJP support.",
    links: [
      { to: "zee", kind: "outlet", detail: "Founder-promoter of Zee Media Corporation", cite: "SEBI shareholding disclosures (demo)" },
      { to: null, kind: "political", name: "Rajya Sabha (BJP-backed independent)", detail: "Sitting MP while promoter of a national news network", cite: "Public record (demo)" },
    ],
  },
  {
    id: "wilks",
    name: "Farris Wilks",
    type: "Private investor",
    note: "Early investor in The Daily Wire; major US political donor.",
    links: [
      { to: "dw", kind: "outlet", detail: "Early investment funding the company's launch", cite: "Press reporting (demo)" },
      { to: null, kind: "political", name: "Keep the Promise super PAC (Ted Cruz, 2016)", detail: "$15M with brother Dan Wilks", cite: "FEC records (demo)" },
    ],
  },
  {
    id: "comcast",
    name: "Comcast Corporation",
    type: "Public company — largest US ISP",
    note: "Ultimate parent of NBC News via NBCUniversal.",
    links: [
      { to: "nbc", kind: "outlet", detail: "Ultimate parent company", cite: "SEC 10-K (demo)" },
      { to: null, kind: "political", name: "Federal lobbying", detail: "Sustained lobbying spend on broadband & telecom policy", cite: "Lobbying disclosures (demo)" },
    ],
  },
];

export { DONORS };
