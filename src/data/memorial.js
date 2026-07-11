/* ------------------------------------------------------------------
   Section 6 — Journalists killed in the line of duty (memorial)
   Respectful, factual. Causes are as classified by CPJ / RSF — never
   inferred by PaperTrail. Where sources disagree, the disagreement is
   shown. This is a seed subset; full records live at cpj.org & rsf.org.
------------------------------------------------------------------- */
const MEMORIAL_COUNTS = [
  { body: "CPJ", figure: "209 journalists and media workers killed by Israel in Gaza and in Israeli detention since Oct 7, 2023", date: "as of June 25, 2026", note: "Under a full review expected to conclude July 2026; 15 names were removed (8 later established as combatants, 7 as not journalists).", ref: "cpj.org (June 25, 2026 statement)" },
  { body: "CPJ", figure: "At least 263 journalists and media workers killed across Gaza, Yemen, Lebanon, Israel and Iran since Oct 7, 2023; at least 75 determined to have been directly targeted for their work", date: "as of June 11, 2026", note: "Broader geographic scope than the Gaza-specific figure.", ref: "cpj.org journalist-casualties tracker" },
  { body: "RSF", figure: "More than 220 journalists killed in Gaza by the Israeli army since Oct 2023, including at least 70 slain while carrying out their work", date: "2026 World Press Freedom Index (April 30, 2026)", note: "RSF's 'due to their work' subset uses its own verification standard.", ref: "rsf.org 2026 Index" },
  { body: "CPJ (annual)", figure: "129 journalists and media workers killed worldwide in 2025 — the deadliest year on record; Israel responsible for roughly two-thirds", date: "February 2026 report", note: "Second consecutive record year.", ref: "cpj.org special report, Feb 2026" },
];

const MEMORIAL = [
  /* ---- India ---- */
  {
    name: "Gauri Lankesh",
    outlet: "Gauri Lankesh Patrike (editor)",
    date: "September 5, 2017", year: 2017, country: "India", region: "IN",
    location: "Bengaluru, India",
    circumstances: "Shot outside her home. A special investigation team arrested suspects linked to an extremist network; the case remains a landmark in Indian press-freedom history.",
    classification: "Classified by CPJ as: murdered, motive confirmed (targeted for her work).",
    cite: "cpj.org database entry",
  },
  {
    name: "Danish Siddiqui",
    outlet: "Reuters (chief photographer, India)",
    date: "July 16, 2021", year: 2021, country: "Afghanistan", region: "IN",
    location: "Spin Boldak, Afghanistan",
    circumstances: "Pulitzer Prize-winning photojournalist killed while covering fighting between Afghan forces and the Taliban. Accounts of his final moments differ: initial reports described crossfire; later investigations reported he may have been killed after being identified. The differing accounts are noted rather than resolved.",
    classification: "Classified by CPJ as: killed on dangerous assignment; subsequent investigative reports raised the possibility of a targeted killing.",
    cite: "cpj.org database entry; Reuters",
  },
  {
    name: "Shashikant Warishe",
    outlet: "Mahanagari Times",
    date: "February 7, 2023", year: 2023, country: "India", region: "IN",
    location: "Rajapur, Maharashtra, India",
    circumstances: "Run over by an SUV a day after publishing a report critical of a land dealer connected to a refinery project. Police arrested and charged the man he had reported on.",
    classification: "Classified by CPJ as: murdered, motive confirmed.",
    cite: "cpj.org database entry",
  },
  /* ---- Israel-Gaza war & region ---- */
  {
    name: "Shireen Abu Akleh",
    outlet: "Al Jazeera",
    date: "May 11, 2022", year: 2022, country: "West Bank (Palestine)", region: "CONFLICT",
    location: "Jenin, West Bank",
    circumstances: "Killed by gunfire while covering an Israeli military raid, wearing a press vest and helmet. Investigations by the UN and multiple independent organizations concluded she was shot by Israeli forces; Israel initially disputed this and later acknowledged a high probability its soldier fired the shot.",
    classification: "Classified by CPJ as: murder. No one has been held accountable to date.",
    cite: "cpj.org; UN OHCHR findings",
  },
  {
    name: "Issam Abdallah",
    outlet: "Reuters",
    date: "October 13, 2023", year: 2023, country: "Lebanon", region: "CONFLICT",
    location: "Alma al-Shaab, southern Lebanon",
    circumstances: "Videographer killed while filming cross-border shelling from a clearly identified press position. Investigations by Reuters, AFP, RSF and human rights organizations attributed the strike to Israeli tank fire.",
    classification: "CPJ: killed by strike attributed to Israeli forces; CPJ called Israel's 'mistake' explanation unjustified.",
    cite: "cpj.org; Reuters investigation",
  },
  {
    name: "Anas Al-Sharif — with colleagues Mohammed Qreiqeh, Ibrahim Zaher, Mohammed Noufal, and Moamen Aliwa",
    outlet: "Al Jazeera",
    date: "August 10, 2025", year: 2025, country: "Gaza (Palestine)", region: "CONFLICT",
    location: "Gaza City (media tent outside Al-Shifa Hospital)",
    circumstances: "Five journalists killed in an Israeli airstrike on a media tent. The Israeli military alleged Al-Sharif was a Hamas operative; Al Jazeera and CPJ rejected the allegation. Both positions are recorded here as attributed claims.",
    classification: "Listed by CPJ and RSF among journalists killed; Israeli military disputes Al-Sharif's status. Disagreement shown, not resolved.",
    cite: "cpj.org; Al Jazeera; press reports",
  },
  {
    name: "Mariam Dagga",
    outlet: "Freelance (Associated Press since the start of the war)",
    date: "August 25, 2025", year: 2025, country: "Gaza (Palestine)", region: "CONFLICT",
    location: "Nasser Hospital, Khan Yunis, Gaza",
    circumstances: "Photojournalist killed in an Israeli strike on the hospital where she was reporting.",
    classification: "Listed by CPJ among journalists killed in the war.",
    cite: "AP; cpj.org",
  },
  {
    name: "Mohammad Weshah",
    outlet: "Al Jazeera",
    date: "April 2026", year: 2026, country: "Gaza (Palestine)", region: "CONFLICT",
    location: "Deir al-Balah, central Gaza",
    circumstances: "Killed in an Israeli airstrike during the post-ceasefire period. RSF recorded him among journalists killed since the ceasefire; Israel released images it said showed him training with weaponry (reported via Times of Israel).",
    classification: "Disputed: RSF counts him as a journalist killed; Israel disputes his status. Both claims shown as attributed; PaperTrail adopts neither.",
    cite: "RSF; Times of Israel (attributed)",
  },
  /* ---- Global (since 2000, seed of the worldwide record) ---- */
  {
    name: "Anna Politkovskaya",
    outlet: "Novaya Gazeta",
    date: "October 7, 2006", year: 2006, country: "Russia", region: "GLOBAL",
    location: "Moscow, Russia",
    circumstances: "Investigative reporter on the Chechen wars, shot in the elevator of her apartment building. Several men were convicted of carrying out the killing; the person who ordered it has never been identified.",
    classification: "Classified by CPJ as: murdered, motive confirmed. Partial impunity — masterminds unidentified.",
    cite: "cpj.org database entry",
  },
  {
    name: "Lasantha Wickrematunge",
    outlet: "The Sunday Leader (editor)",
    date: "January 8, 2009", year: 2009, country: "Sri Lanka", region: "GLOBAL",
    location: "Colombo, Sri Lanka",
    circumstances: "Attacked and killed by men on motorcycles on his way to work. In an editorial he wrote to be published in the event of his death, he predicted his own killing.",
    classification: "Classified by CPJ as: murdered, motive confirmed. Full impunity to date.",
    cite: "cpj.org database entry",
  },
  {
    name: "Marie Colvin",
    outlet: "The Sunday Times",
    date: "February 22, 2012", year: 2012, country: "Syria", region: "GLOBAL",
    location: "Homs, Syria",
    circumstances: "Killed with photographer Rémi Ochlik in the shelling of a media center in besieged Homs. A US federal court (Colvin v. Syria, 2019) found the Syrian government deliberately targeted the media center.",
    classification: "CPJ: killed on dangerous assignment; US court finding of deliberate targeting by the Assad government is noted as a judicial determination.",
    cite: "cpj.org; US District Court judgment (2019)",
  },
  {
    name: "Javier Valdez Cárdenas",
    outlet: "Ríodoce (co-founder)",
    date: "May 15, 2017", year: 2017, country: "Mexico", region: "GLOBAL",
    location: "Culiacán, Sinaloa, Mexico",
    circumstances: "Renowned chronicler of drug trafficking and organized crime, shot near his newsroom. Convictions followed for the gunmen; Mexico remains one of the deadliest countries for journalists outside war zones.",
    classification: "Classified by CPJ as: murdered, motive confirmed.",
    cite: "cpj.org database entry",
  },
  {
    name: "Daphne Caruana Galizia",
    outlet: "Running Commentary (independent investigative journalist)",
    date: "October 16, 2017", year: 2017, country: "Malta", region: "GLOBAL",
    location: "Bidnija, Malta",
    circumstances: "Killed by a car bomb after years of reporting on corruption. Convictions followed; a public inquiry found the Maltese state had created a culture of impunity that facilitated the assassination.",
    classification: "Classified by CPJ as: murdered, motive confirmed. Public-inquiry state-responsibility finding noted.",
    cite: "cpj.org; Malta public inquiry (2021)",
  },
  {
    name: "Ján Kuciak",
    outlet: "Aktuality.sk",
    date: "February 21, 2018", year: 2018, country: "Slovakia", region: "GLOBAL",
    location: "Veľká Mača, Slovakia",
    circumstances: "Shot at home with his fiancée Martina Kušnírová while investigating fraud and political-business links. The killings triggered the largest protests in Slovakia since 1989 and the prime minister's resignation.",
    classification: "Classified by CPJ as: murdered, motive confirmed.",
    cite: "cpj.org database entry",
  },
  {
    name: "Jamal Khashoggi",
    outlet: "The Washington Post (columnist)",
    date: "October 2, 2018", year: 2018, country: "Türkiye", region: "GLOBAL",
    location: "Saudi consulate, Istanbul",
    circumstances: "Killed inside the Saudi consulate he had entered for marriage paperwork. The UN Special Rapporteur's inquiry and the declassified US intelligence assessment concluded the operation was approved at the highest level of the Saudi state; Saudi Arabia attributed it to a rogue operation.",
    classification: "Classified by CPJ as: murdered, motive confirmed. State-responsibility findings and the Saudi counter-position both noted, attributed.",
    cite: "cpj.org; UN Special Rapporteur report (2019); ODNI assessment (2021)",
  },
];

export { MEMORIAL_COUNTS, MEMORIAL };
