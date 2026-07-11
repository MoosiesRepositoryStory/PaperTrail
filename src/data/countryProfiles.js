/* ------------------------------------------------------------------
   Section 5 — RSF World Press Freedom Index (country-level, verified)
   Cite RSF directly; update annually when they publish (each April/May).
------------------------------------------------------------------- */
const PRESS_FREEDOM = {
  IN: { country: "India", rank: 157, total: 180, score: 31.96, year: 2026, note: "Down from 151 in 2025. RSF cites highly concentrated ownership and overt political alignment.", ref: "rsf.org/en/country/india" },
  US: { country: "United States", rank: 64, total: 180, year: 2026, note: "Fell 7 places from 2025; RSF cites legal pressure and economic strain on journalism.", ref: "rsf.org/en/country/united-states" },
  IL: { country: "Israel", rank: 116, total: 180, score: 46.46, year: 2026, note: "Down from 112 in 2025. RSF cites restrictions since Oct 2023, military censorship, and journalist killings in Gaza.", ref: "rsf.org/en/country/israel" },
};
const RSF_METHOD_URL = "rsf.org/en/index";

/* ------------------------------------------------------------------
   Section 5 (v4 round) — RSF country profiles, seeded with figures
   verified against RSF's 2026 Index publication and country pages.
   Rationale text is a brief paraphrase of RSF's stated reasons, cited
   and linked — never original analysis. Where RSF's public text is
   thin, that limit is stated rather than filled with speculation.
   The remaining ~165 profiles load via the annual RSF ingestion job.
------------------------------------------------------------------- */
const COUNTRY_PROFILES = [
  { code: "NO", country: "Norway", rank: 1, year: 2026, trend: "Top of the Index for the tenth consecutive year", rationale: "RSF's highest-rated environment for journalism across its five indicators.", ref: "rsf.org/en/country/norway" },
  { code: "US", country: "United States", rank: 64, year: 2026, prev: 57, trend: "Fell 7 places from 2025; down 47 positions since the Index began in 2002", rationale: "RSF cites growing legal pressure on reporting and severe economic strain on journalism, especially local news.", ref: "rsf.org/en/country/united-states" },
  { code: "AR", country: "Argentina", rank: 98, year: 2026, trend: "Down 11 places", rationale: "RSF highlighted a dramatic decline under the current government.", ref: "rsf.org/en/country/argentina" },
  { code: "IL", country: "Israel", rank: 116, year: 2026, prev: 112, score: 46.46, trend: "Down 4 places from 2025; down 30 since 2022", rationale: "RSF cites restrictions on press freedom since October 2023, military censorship, pressure on Israeli journalists, and the killing of journalists in Gaza by the Israeli army.", ref: "rsf.org/en/country/israel" },
  { code: "NE", country: "Niger", rank: 120, year: 2026, trend: "Steepest fall in the 2026 Index (-37)", rationale: "RSF links the fall to deteriorating conditions in the Sahel under military rule and armed-group pressure.", ref: "rsf.org/en/country/niger" },
  { code: "GE", country: "Georgia", rank: 135, year: 2026, trend: "Down 75 places over recent years", rationale: "RSF cites an intensifying crackdown on the press.", ref: "rsf.org/en/country/georgia" },
  { code: "HK", country: "Hong Kong", rank: 140, year: 2026, trend: "Down 122 places since Beijing tightened control", rationale: "RSF cites national-security prosecutions of journalists, including the 20-year sentence of publisher Jimmy Lai — the heaviest ever handed to a journalist in the territory.", ref: "rsf.org/en/country/hong-kong" },
  { code: "SY", country: "Syria", rank: 141, year: 2026, trend: "Biggest improvement in the 2026 Index (+36)", rationale: "RSF attributes the rise to the fall of the Assad regime in late 2024; conditions remain classified as difficult.", ref: "rsf.org/en/country/syria" },
  { code: "SV", country: "El Salvador", rank: 143, year: 2026, trend: "Down 105 places since 2014", rationale: "RSF links the long fall to the state of exception and pressure on independent reporting.", ref: "rsf.org/en/country/el-salvador" },
  { code: "PE", country: "Peru", rank: 144, year: 2026, trend: "Down 14 places", rationale: "RSF cites the murder of four journalists and worsening violence. Where RSF's public rationale is brief, that limit is noted rather than filled in.", ref: "rsf.org/en/country/peru" },
  { code: "IN", country: "India", rank: 157, year: 2026, prev: 151, score: 31.96, trend: "Down 6 places from 2025; 'very serious' category", rationale: "RSF cites violence against journalists, highly concentrated media ownership, outlets with increasingly overt political alignment, and government advertising used as financial leverage.", ref: "rsf.org/en/country/india" },
  { code: "VE", country: "Venezuela", rank: 159, year: 2026, trend: "—", rationale: "RSF describes guarantees for press freedom as deeply uncertain despite journalist releases earlier in the year.", ref: "rsf.org/en/country/venezuela" },
  { code: "CU", country: "Cuba", rank: 160, year: 2026, trend: "—", rationale: "RSF describes a profound crisis forcing the few remaining independent journalists underground.", ref: "rsf.org/en/country/cuba" },
  { code: "NI", country: "Nicaragua", rank: 168, year: 2026, trend: "—", rationale: "RSF describes a media landscape in ruins under systematic repression.", ref: "rsf.org/en/country/nicaragua" },
  { code: "RU", country: "Russia", rank: 172, year: 2026, trend: "—", rationale: "RSF cites the war of aggression in Ukraine and 48 journalists jailed as of April 2026 under anti-terrorism and extremism laws.", ref: "rsf.org/en/country/russia" },
  { code: "IR", country: "Iran", rank: 177, year: 2026, trend: "Down 1 place", rationale: "RSF cites the regime's crackdown and the war on its soil.", ref: "rsf.org/en/country/iran" },
  { code: "CN", country: "China", rank: 178, year: 2026, trend: "—", rationale: "RSF describes China as among the world's largest jailers of journalists, with systemic state control of information.", ref: "rsf.org/en/country/china" },
  { code: "KP", country: "North Korea", rank: 179, year: 2026, trend: "—", rationale: "Near-total state control over information.", ref: "rsf.org/en/country/north-korea" },
  { code: "ER", country: "Eritrea", rank: 180, year: 2026, trend: "Last place for the third consecutive year", rationale: "RSF describes an information desert; journalist Dawit Isaak has been imprisoned without trial for 25 years.", ref: "rsf.org/en/country/eritrea" },
];

export { PRESS_FREEDOM, RSF_METHOD_URL, COUNTRY_PROFILES };
