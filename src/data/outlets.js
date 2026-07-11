import { PATTERN_THRESHOLD } from "./rubric";

const OUTLETS = [
  /* ------------------------- INDIA ------------------------- */
  {
    id: "aajtak",
    name: "Aaj Tak",
    url: "aajtak.in",
    logo: { url: "https://logo.clearbit.com/aajtak.in", source: "Clearbit Logo API (via outlet domain) — hotlinked, not reproduced/stored by PaperTrail" },
    type: "Hindi TV / Digital",
    country: "IN",
    lean: "Commonly characterized by press critics as government-friendly in prime time",
    watchdogs: [
      { name: "NewsGuard", value: "Not on file — connect API" },
      { name: "RSF World Press Freedom Index (country-level, India)", value: "157 / 180 in the 2026 Index, score 31.96 — down from 151 in 2025. RSF cites highly concentrated media ownership and outlets with increasingly overt political alignment. (Country-level, not outlet-specific.)", date: "2026 Index (published May 2026)", ref: "rsf.org/en/country/india" },
      { name: "IFCN fact-check mentions", value: "Placeholder" },
    ],
    incidents: [
      {
        cat: "dehumanizing",
        status: "illustrative",
        event: "Manipur ethnic conflict coverage (2023–24)",
        date: "— (researcher fills)",
        quote:
          "[Template — paste the exact broadcast clip transcript or chyron screenshot text, with the specific term used for the Meitei or Kuki community, dated to the broadcast.]",
        source: "[Dated clip/screenshot URL or archive + channel + timestamp]",
        note:
          "Template only — no verdict entered. The rule fires on the term used, regardless of which community it targets or which community the channel is perceived to favor. Counts toward a pattern only at " +
          PATTERN_THRESHOLD +
          "+ verified incidents in 12 months, and must be checked against ALL channels covering the conflict, not only the one already suspected.",
      },
      {
        cat: "omission",
        status: "checked-clear",
        event: "Cockroach Janta Party protest, Jantar Mantar (NEET/CBSE row, June–July 2026)",
        date: "Checked July 6, 2026 — protest ongoing since June 20, 2026",
        quote:
          "PTI wire coverage (via ThePrint, dated July 4, 2026) confirmed the protest's 15th day with named participants. Aaj Tak runs a dedicated, continuously updated topic page (aajtak.in/topic/cockroach-janta-party) with dozens of dated articles and live-stream coverage of the protest site, spanning May–July 2026.",
        source: "PTI/ThePrint: theprint.in/india/cjp-protest-day-15... (July 4, 2026) · Aaj Tak topic page: aajtak.in/topic/cockroach-janta-party",
        note:
          "Real check, not a template. Result: no omission — Aaj Tak's coverage matches or exceeds the wire baseline in volume and prominence. This is the honest negative result the rubric should produce when there's nothing to flag.",
      },
      {
        cat: "sourcing",
        status: "illustrative",
        event: "Adani Group business reporting",
        date: "— (researcher fills)",
        quote:
          "[Template — log each unnamed-source attribution in the outlet's Adani-related coverage (e.g., 'sources close to the company' vs. 'sources in the investigating agency'), dated, with a running tally of which direction the anonymous claims favor.]",
        source: "[Dated article URLs, tallied over a defined coverage window]",
        note:
          "Template only — no verdict entered. Cross-references the funder registry directly: this outlet's ownership links appear above, so a one-directional tally here is exactly the overlap the entanglement flags exist to surface. Counts toward a pattern only at " +
          PATTERN_THRESHOLD +
          "+ verified incidents in 12 months.",
      },
    ],
    chain: [
      { role: "Outlet", entity: "Aaj Tak", note: "Flagship Hindi channel of the India Today Group", cite: "MIB uplinking license (demo)" },
      { role: "Parent", entity: "TV Today Network Ltd", note: "Publicly listed — NSE: TVTODAY", cite: "SEBI / NSE disclosures (demo)" },
      { role: "Ultimate control", entity: "Living Media India (Purie family)", note: "Promoter group; Aditya Birla Group holds a reported minority stake", cite: "MCA filings (demo)" },
    ],
    funding: [
      { kind: "Revenue", detail: "Advertising + subscription (TV) and digital ads", amount: "—", cite: "Annual report (demo)" },
      { kind: "Govt advertising", detail: "Receives central & state government (DAVP/BOC) ad spend", amount: "Not itemized publicly per channel", cite: "BOC RTI data (demo)" },
    ],
    people: [
      { name: "Aroon Purie", role: "Founder-Chairman, India Today Group", note: "Promoter", cite: "Annual report (demo)" },
      { name: "Kalli Purie", role: "Vice-Chairperson", note: "Promoter family", cite: "Annual report (demo)" },
      { name: "Sudhir Chaudhary", role: "Anchor", note: "Joined from Zee News in 2022", cite: "Press reporting (demo)" },
    ],
    donorIds: ["birla"],
    checks: {
      "Ownership disclosed": { pass: true, evidence: "Listed parent — shareholding pattern public via SEBI" },
      "Corrections policy published": { pass: false, evidence: "No standing public corrections page found (demo check)" },
      "Author bylines present": { pass: true, evidence: "Bylines on digital articles" },
      "News / opinion labeled": { pass: false, evidence: "Debate & commentary segments blend with news programming" },
      "Funders disclosed": { pass: true, evidence: "Listed-company revenue disclosure" },
    },
    flags: [
      { title: "Conglomerate minority stake", detail: "Aditya Birla Group's stake in the parent creates coverage overlap with a major industrial house. Reported — not scored." },
      { title: "Government ad dependence", detail: "Government advertising is a revenue line for most Indian TV news; per-channel amounts are not public. Reported as a structural incentive." },
    ],
    response: null,
    analysis:
      "The listed-company structure makes the paper trail unusually good for Indian TV. The open questions are the ones India's disclosure regime doesn't force: per-channel government ad revenue and the influence of a conglomerate minority stake.",
  },
  {
    id: "republic",
    name: "Republic TV",
    url: "republicworld.com",
    logo: { url: "https://logo.clearbit.com/republicworld.com", source: "Clearbit Logo API (via outlet domain) — hotlinked, not reproduced/stored by PaperTrail" },
    type: "English TV / Digital",
    country: "IN",
    lean: "Widely characterized by press critics and rating discussions as government-aligned",
    watchdogs: [
      { name: "NewsGuard", value: "Not on file — connect API" },
      { name: "RSF World Press Freedom Index (country-level, India)", value: "157 / 180 in the 2026 Index, score 31.96 — down from 151 in 2025. RSF cites highly concentrated media ownership and outlets with increasingly overt political alignment. (Country-level, not outlet-specific.)", date: "2026 Index (published May 2026)", ref: "rsf.org/en/country/india" },
      { name: "NBDSA orders", value: "Multiple orders on record — placeholder" },
    ],
    incidents: [
      {
        cat: "casualty",
        status: "illustrative",
        event: "Farm laws protests, Delhi border sites (2020–21)",
        date: "— (researcher fills)",
        quote:
          "[Template — paste two same-window passages: one naming/humanizing casualties or injuries on one side (protester or police), the other reducing the other side's casualties/injuries to an aggregate count only.]",
        source: "[Two dated outlet URLs + PTI/Reuters same-day baseline]",
        note:
          "Template only — no verdict entered. Must be checked in both directions and against the outlet's full coverage of the protest, not cherry-picked pairs. Counts toward a pattern only at " +
          PATTERN_THRESHOLD +
          "+ verified incidents in 12 months.",
      },
      {
        cat: "omission",
        status: "open",
        event: "Cockroach Janta Party protest, Jantar Mantar (NEET/CBSE row, June–July 2026)",
        date: "Wire baseline confirmed July 4, 2026 (PTI, day 15 of protest)",
        quote:
          "[Open — the wire baseline is now real and dated (PTI via ThePrint, July 4, 2026); this outlet's own archive/search results for the same window have not yet been directly checked in this pass.]",
        source: "Wire baseline: theprint.in/india/cjp-protest-day-15... (PTI, July 4, 2026)",
        note:
          "Anchored to a real, current event rather than a hypothetical placeholder. Needs one more research pass — a direct site search on this outlet — before it can move to checked-clear or verified.",
      },
    ],
    chain: [
      { role: "Outlet", entity: "Republic TV", note: "Launched May 2017", cite: "MIB uplinking license (demo)" },
      { role: "Parent", entity: "ARG Outlier Media Pvt Ltd", note: "Private company", cite: "MCA filings (demo)" },
      { role: "Control", entity: "Arnab Goswami (majority)", note: "Founding investor Asianet News (Rajeev Chandrasekhar) later divested; Goswami took majority control", cite: "MCA filings (demo)" },
    ],
    funding: [
      { kind: "Launch capital", detail: "Asianet News Media, then controlled by a sitting MP", amount: "Not publicly itemized", cite: "MCA filings + press (demo)" },
      { kind: "Revenue", detail: "Advertising-led", amount: "Private — limited disclosure", cite: "MCA financials (demo)" },
    ],
    people: [
      { name: "Arnab Goswami", role: "Co-founder, Editor-in-Chief", note: "Majority owner", cite: "MCA filings (demo)" },
      { name: "Rajeev Chandrasekhar", role: "Founding investor (exited)", note: "BJP MP at launch; divested on taking ministerial office", cite: "Public record (demo)" },
    ],
    donorIds: ["rc"],
    allegations: [
      {
        what: "Alleged manipulation of Television Rating Points (TRP) to inflate Republic TV's ratings, in conspiracy with a former BARC CEO",
        allegedBy: "Mumbai Police (Crime Intelligence Unit), based on a BARC/Hansa Research complaint",
        date: "Complaint 2020; multiple chargesheets filed 2020\u20132021",
        status: "charged",
        note: "Editor-in-Chief Arnab Goswami and the company were named as accused in supplementary chargesheets citing WhatsApp records as evidence. ARG Outlier Media and Goswami have denied the allegations, calling the case a politically motivated prosecution; no conviction has been recorded in the case.",
        cite: "Mumbai Police chargesheets, 2020\u20132021; Bombay High Court filings",
      },
    ],
    checks: {
      "Ownership disclosed": { pass: true, evidence: "Private, but shareholding traceable via MCA filings" },
      "Corrections policy published": { pass: false, evidence: "No standing public corrections page found (demo check)" },
      "Author bylines present": { pass: true, evidence: "Bylines on digital articles" },
      "News / opinion labeled": { pass: false, evidence: "Debate-led format blends commentary and news" },
      "Funders disclosed": { pass: false, evidence: "Private financials — limited public revenue detail" },
    },
    flags: [
      { title: "Founding investor was a sitting parliamentarian", detail: "Launch capital came from a company controlled by a then-sitting MP of the governing party. On record via filings — impact on coverage not scored." },
      { title: "Named in 2020 BARC TRP investigation", detail: "Mumbai police named the channel in a ratings-manipulation probe; the channel denied wrongdoing and contested the case. Reported as public record." },
    ],
    response: null,
    analysis:
      "The founding-capital story is the clearest Indian example of why launch funding belongs in a money trail: the investor's political position was public, but rarely attached to the channel's coverage in viewers' minds.",
  },
  {
    id: "ndtv",
    name: "NDTV",
    url: "ndtv.com",
    logo: { url: "https://logo.clearbit.com/ndtv.com", source: "Clearbit Logo API (via outlet domain) — hotlinked, not reproduced/stored by PaperTrail" },
    type: "English/Hindi TV / Digital",
    country: "IN",
    lean: "Historically characterized as independent/critical of government; post-2022 characterization contested",
    watchdogs: [
      { name: "NewsGuard", value: "Not on file — connect API" },
      { name: "RSF World Press Freedom Index (country-level, India)", value: "157 / 180 in the 2026 Index, score 31.96 — down from 151 in 2025. RSF cites highly concentrated media ownership and outlets with increasingly overt political alignment. (Country-level, not outlet-specific.)", date: "2026 Index (published May 2026)", ref: "rsf.org/en/country/india" },
    ],
    incidents: [
      {
        cat: "omission",
        status: "checked-clear",
        event: "Cockroach Janta Party protest, Jantar Mantar (NEET/CBSE row, June–July 2026)",
        date: "Checked July 6, 2026 — protest ongoing since June 20, 2026",
        quote:
          "CNN's on-the-ground report (June 26, 2026) records that Education Minister Dharmendra Pradhan responded to the protest specifically 'speaking to Indian news channel NDTV' — confirming NDTV carried direct interview coverage of the story.",
        source: "CNN: cnn.com/2026/06/26/india/india-cockroach-janta-party-delhi-protest-intl-hnk",
        note:
          "Real check, not a template. Result: no omission — NDTV secured a direct newsmaker interview on the story, which is stronger than baseline wire-level coverage, not weaker.",
      },
      {
        cat: "sourcing",
        status: "illustrative",
        event: "Adani Group business reporting",
        date: "— (researcher fills)",
        quote:
          "[Template — log each unnamed-source attribution in this outlet's Adani-related coverage, dated, with a running tally of which direction the anonymous claims favor — with particular scrutiny given the ownership link above.]",
        source: "[Dated article URLs, tallied over a defined coverage window]",
        note:
          "Template only — no verdict entered. This is the highest-value check on this dossier: the outlet's owner is the subject of its own coverage. Counts toward a pattern only at " +
          PATTERN_THRESHOLD +
          "+ verified incidents in 12 months.",
      },
    ],
    chain: [
      { role: "Outlet", entity: "NDTV", note: "New Delhi Television Ltd — listed, NSE: NDTV", cite: "SEBI / NSE disclosures (demo)" },
      { role: "Control (2022–)", entity: "AMG Media Networks", note: "Adani Group unit; acquired promoter vehicle RRPR then open offer", cite: "SEBI open-offer documents (demo)" },
      { role: "Prior control", entity: "Prannoy & Radhika Roy", note: "Founders; exited control after the 2022 acquisition", cite: "SEBI disclosures (demo)" },
    ],
    funding: [
      { kind: "Revenue", detail: "Advertising + subscription; listed-company disclosure", amount: "—", cite: "Annual report (demo)" },
    ],
    people: [
      { name: "Gautam Adani", role: "Chairman, Adani Group", note: "Ultimate controlling interest since 2022", cite: "SEBI filings (demo)" },
      { name: "Prannoy Roy", role: "Co-founder", note: "Exited control 2022", cite: "SEBI filings (demo)" },
      { name: "Ravish Kumar", role: "Former senior anchor", note: "Resigned Nov 2022 after the acquisition", cite: "Press reporting (demo)" },
    ],
    donorIds: ["adani"],
    allegations: [
      {
        what: "Alleged insider trading by founders Prannoy Roy and Radhika Roy in NDTV shares",
        allegedBy: "Securities and Exchange Board of India (SEBI)",
        date: "SEBI order 2020; quashed by SAT October 2025",
        status: "dismissed",
        note: "The Securities Appellate Tribunal found the information at issue was not price-sensitive and that the Roys were not insiders, overturning SEBI's two-year market-access bar and disgorgement order.",
        cite: "SEBI order (2020); Securities Appellate Tribunal ruling, October 2025",
      },
      {
        what: "Alleged failure to disclose a 2018 SEBI order concerning a loan arrangement with VCPL, a separate disclosure-violation matter",
        allegedBy: "Securities and Exchange Board of India (SEBI), adjudication proceeding",
        date: "Adjudication order proceeding active as of May 2026",
        status: "alleged",
        note: "A distinct, ongoing SEBI adjudication concerning listed-company disclosure obligations, separate from the insider-trading matter above.",
        cite: "SEBI adjudication order, May 2026 (sebi.gov.in)",
      },
    ],
    checks: {
      "Ownership disclosed": { pass: true, evidence: "Listed — acquisition fully documented in SEBI filings" },
      "Corrections policy published": { pass: true, evidence: "Corrections appended to digital articles (demo check)" },
      "Author bylines present": { pass: true, evidence: "Bylines standard" },
      "News / opinion labeled": { pass: true, evidence: "Opinion section labeled on digital" },
      "Funders disclosed": { pass: true, evidence: "Listed-company revenue disclosure" },
    },
    flags: [
      { title: "Owner's core business is a major news subject", detail: "The controlling conglomerate spans ports, energy and infrastructure — sectors NDTV covers, including coverage of the group itself. Reported — not scored." },
      { title: "Ownership change → editorial exits", detail: "Senior editorial departures followed the 2022 acquisition. On record; causality not scored." },
    ],
    response: null,
    analysis:
      "NDTV is the textbook before/after case: identical brand, changed ownership. A money-trail tool shows the change instantly; a content-rating tool takes years to catch up.",
  },
  {
    id: "timesnow",
    name: "Times Now",
    url: "timesnownews.com",
    logo: { url: "https://logo.clearbit.com/timesnownews.com", source: "Clearbit Logo API (via outlet domain) — hotlinked, not reproduced/stored by PaperTrail" },
    type: "English TV / Digital",
    country: "IN",
    lean: "Commonly characterized by press critics as government-leaning",
    watchdogs: [
      { name: "NewsGuard", value: "Not on file — connect API" },
      { name: "RSF World Press Freedom Index (country-level, India)", value: "157 / 180 in the 2026 Index, score 31.96 — down from 151 in 2025. RSF cites highly concentrated media ownership and outlets with increasingly overt political alignment. (Country-level, not outlet-specific.)", date: "2026 Index (published May 2026)", ref: "rsf.org/en/country/india" },
    ],
    incidents: [
      {
        cat: "omission",
        status: "open",
        event: "Cockroach Janta Party protest, Jantar Mantar (NEET/CBSE row, June–July 2026)",
        date: "Wire baseline confirmed July 4, 2026 (PTI, day 15 of protest)",
        quote:
          "[Open — the wire baseline is now real and dated (PTI via ThePrint, July 4, 2026); this outlet's own archive/search results for the same window have not yet been directly checked in this pass.]",
        source: "Wire baseline: theprint.in/india/cjp-protest-day-15... (PTI, July 4, 2026)",
        note:
          "Anchored to a real, current event rather than a hypothetical placeholder. Needs one more research pass — a direct site search on this outlet — before it can move to checked-clear or verified.",
      },
      {
        cat: "headline",
        status: "illustrative",
        event: "Routine economic data release (inflation / GDP / unemployment print)",
        date: "— (researcher fills)",
        quote:
          "[Template — paste the headline claim and the body-text passage it overstates or contradicts.]",
        source: "[Dated article URL, headline + body quoted]",
        note:
          "Deliberately non-ideological: this category should catch sloppy editing on routine data reporting just as readily as on identity or conflict stories. Counts toward a pattern only at " +
          PATTERN_THRESHOLD +
          "+ verified incidents in 12 months.",
      },
    ],
    chain: [
      { role: "Outlet", entity: "Times Now", note: "Times Network channel", cite: "MIB uplinking license (demo)" },
      { role: "Parent", entity: "Bennett, Coleman & Co Ltd (Times Group)", note: "Privately held — India's largest media house", cite: "MCA filings (demo)" },
      { role: "Ultimate control", entity: "Jain family (Sahu Jain)", note: "Promoter family", cite: "MCA filings (demo)" },
    ],
    funding: [
      { kind: "Revenue", detail: "Advertising-led across the group", amount: "Private — limited disclosure", cite: "MCA financials (demo)" },
      { kind: "Private treaties", detail: "Group historically took equity stakes in companies in exchange for advertising", amount: "—", cite: "SEBI commentary + press (demo)" },
    ],
    people: [
      { name: "Vineet Jain", role: "Managing Director, BCCL", note: "Promoter family", cite: "MCA filings (demo)" },
      { name: "Samir Jain", role: "Vice-Chairman, BCCL", note: "Promoter family", cite: "MCA filings (demo)" },
    ],
    donorIds: [],
    checks: {
      "Ownership disclosed": { pass: false, evidence: "Private — full shareholding not published, traceable only via MCA" },
      "Corrections policy published": { pass: false, evidence: "No standing public corrections page found (demo check)" },
      "Author bylines present": { pass: true, evidence: "Bylines on digital articles" },
      "News / opinion labeled": { pass: false, evidence: "Debate programming blends commentary and news" },
      "Funders disclosed": { pass: false, evidence: "Private financials" },
    },
    flags: [
      { title: "Advertiser-equity entanglement", detail: "The group's documented 'private treaties' model — equity in covered companies in exchange for ad space — is the sharpest ad-money entanglement on file in Indian media. Reported — not scored." },
    ],
    response: null,
    analysis:
      "Private treaties invert the usual worry: instead of advertisers influencing coverage, the outlet holds equity in the companies it covers. It's the strongest argument for making ad-side money a first-class layer, not a footnote.",
  },
  {
    id: "zee",
    name: "Zee News",
    url: "zeenews.india.com",
    logo: { url: "https://logo.clearbit.com/zeenews.india.com", source: "Clearbit Logo API (via outlet domain) — hotlinked, not reproduced/stored by PaperTrail" },
    type: "Hindi TV / Digital",
    country: "IN",
    lean: "Commonly characterized by press critics as government-leaning",
    watchdogs: [
      { name: "NewsGuard", value: "Not on file — connect API" },
      { name: "RSF World Press Freedom Index (country-level, India)", value: "157 / 180 in the 2026 Index, score 31.96 — down from 151 in 2025. RSF cites highly concentrated media ownership and outlets with increasingly overt political alignment. (Country-level, not outlet-specific.)", date: "2026 Index (published May 2026)", ref: "rsf.org/en/country/india" },
      { name: "NBDSA orders", value: "Orders on record — placeholder" },
    ],
    incidents: [
      {
        cat: "dehumanizing",
        status: "illustrative",
        event: "Manipur ethnic conflict coverage (2023–24)",
        date: "— (researcher fills)",
        quote:
          "[Template — paste the exact broadcast clip transcript or chyron screenshot text, with the specific term used for the Meitei or Kuki community, dated to the broadcast.]",
        source: "[Dated clip/screenshot URL or archive + channel + timestamp]",
        note:
          "Template only — no verdict entered. The rule fires on the term used, regardless of which community it targets. Checked identically across every channel covering the conflict. Counts toward a pattern only at " +
          PATTERN_THRESHOLD +
          "+ verified incidents in 12 months.",
      },
      {
        cat: "omission",
        status: "open",
        event: "Cockroach Janta Party protest, Jantar Mantar (NEET/CBSE row, June–July 2026)",
        date: "Wire baseline confirmed July 4, 2026 (PTI, day 15 of protest)",
        quote:
          "[Open — the wire baseline is now real and dated (PTI via ThePrint, July 4, 2026); this outlet's own archive/search results for the same window have not yet been directly checked in this pass.]",
        source: "Wire baseline: theprint.in/india/cjp-protest-day-15... (PTI, July 4, 2026)",
        note:
          "Anchored to a real, current event rather than a hypothetical placeholder. Needs one more research pass — a direct site search on this outlet — before it can move to checked-clear or verified.",
      },
    ],
    chain: [
      { role: "Outlet", entity: "Zee News", note: "Zee Media Corporation flagship", cite: "MIB uplinking license (demo)" },
      { role: "Parent", entity: "Zee Media Corporation Ltd", note: "Publicly listed — NSE: ZEEMEDIA", cite: "SEBI / NSE disclosures (demo)" },
      { role: "Promoter", entity: "Essel Group (Subhash Chandra family)", note: "Promoter stake reduced through the group's debt crisis", cite: "SEBI shareholding pattern (demo)" },
    ],
    funding: [
      { kind: "Revenue", detail: "Advertising + subscription", amount: "—", cite: "Annual report (demo)" },
    ],
    people: [
      { name: "Subhash Chandra", role: "Founder-promoter", note: "Rajya Sabha MP 2016–2022 (BJP-backed independent)", cite: "Public record (demo)" },
    ],
    donorIds: ["essel"],
    allegations: [
      {
        what: "Alleged diversion of funds from Zee Entertainment Enterprises Ltd (ZEEL) \u2014 a separate listed Essel Group company from Zee Media Corporation (Zee News' parent) \u2014 via a Yes Bank fixed-deposit arrangement benefiting promoter-family entities",
        allegedBy: "Securities and Exchange Board of India (SEBI)",
        date: "Interim order June 2023; fresh show-cause notice February 12, 2026",
        status: "alleged",
        note: "Included here because the named individuals \u2014 Subhash Chandra and Punit Goenka \u2014 are the same promoter family tied to Zee Media/Zee News. SAT has at various points set aside specific SEBI directives against the individuals while the underlying fund-diversion investigation continued; the company denies the allegations and has stated it will respond to SEBI.",
        cite: "SEBI interim order, June 2023; SEBI show-cause notice, February 12, 2026; company statements",
      },
    ],
    checks: {
      "Ownership disclosed": { pass: true, evidence: "Listed — shareholding pattern public" },
      "Corrections policy published": { pass: false, evidence: "No standing public corrections page found (demo check)" },
      "Author bylines present": { pass: true, evidence: "Bylines on digital articles" },
      "News / opinion labeled": { pass: false, evidence: "Commentary-led prime time blends with news" },
      "Funders disclosed": { pass: true, evidence: "Listed-company disclosure" },
    },
    flags: [
      { title: "Promoter held legislative office", detail: "The founder sat in the Rajya Sabha while promoting a national news network. Public record — not scored." },
      { title: "Promoter debt crisis", detail: "Essel Group's leverage forced promoter stake sales, changing effective control pressure on the network. Reported via SEBI filings." },
    ],
    response: null,
    analysis:
      "Zee shows why promoter debt belongs in a money trail: creditors of an owner can shape an outlet's incentives as much as the owner does.",
  },
  {
    id: "thewire",
    name: "The Wire",
    url: "thewire.in",
    logo: { url: "https://logo.clearbit.com/thewire.in", source: "Clearbit Logo API (via outlet domain) — hotlinked, not reproduced/stored by PaperTrail" },
    type: "Digital nonprofit",
    country: "IN",
    lean: "Commonly characterized as left-leaning / government-critical",
    watchdogs: [
      { name: "NewsGuard", value: "Not on file — connect API" },
      { name: "RSF World Press Freedom Index (country-level, India)", value: "157 / 180 in the 2026 Index, score 31.96 — down from 151 in 2025. RSF cites highly concentrated media ownership and outlets with increasingly overt political alignment. (Country-level, not outlet-specific.)", date: "2026 Index (published May 2026)", ref: "rsf.org/en/country/india" },
      { name: "IFCN", value: "Not a signatory — placeholder" },
    ],
    incidents: [
      {
        cat: "casualty",
        status: "illustrative",
        event: "Farm laws protests, Delhi border sites (2020–21)",
        date: "— (researcher fills)",
        quote:
          "[Template — paste two same-window passages: one naming/humanizing casualties or injuries on one side (protester or police), the other reducing the other side's to an aggregate count only.]",
        source: "[Two dated outlet URLs + PTI/Reuters same-day baseline]",
        note:
          "Template only — no verdict entered. Included here specifically because the rubric must apply to outlets across the spectrum: a money-trail tool that only checks outlets it suspects isn't a tool, it's advocacy. Counts toward a pattern only at " +
          PATTERN_THRESHOLD +
          "+ verified incidents in 12 months.",
      },
      {
        cat: "omission",
        status: "open",
        event: "Cockroach Janta Party protest, Jantar Mantar (NEET/CBSE row, June–July 2026)",
        date: "Wire baseline confirmed July 4, 2026 (PTI, day 15 of protest)",
        quote:
          "[Open — the wire baseline is now real and dated (PTI via ThePrint, July 4, 2026); this outlet's own archive/search results for the same window have not yet been directly checked in this pass.]",
        source: "Wire baseline: theprint.in/india/cjp-protest-day-15... (PTI, July 4, 2026)",
        note:
          "Anchored to a real, current event rather than a hypothetical placeholder. Needs one more research pass — a direct site search on this outlet — before it can move to checked-clear or verified.",
      },
    ],
    chain: [
      { role: "Outlet", entity: "The Wire", note: "Digital-only publication", cite: "RNI / registration (demo)" },
      { role: "Structure", entity: "Foundation for Independent Journalism", note: "Nonprofit company — no promoter, no ads on principle", cite: "MCA filings (demo)" },
      { role: "Funding base", entity: "Reader contributions + grants", note: "Donor-supported model", cite: "Published accounts (demo)" },
    ],
    funding: [
      { kind: "Revenue", detail: "Reader donations, philanthropic grants; carries no advertising", amount: "—", cite: "Published accounts (demo)" },
    ],
    people: [
      { name: "Siddharth Varadarajan", role: "Founding Editor", note: "", cite: "Registration (demo)" },
      { name: "M.K. Venu", role: "Founding Editor", note: "", cite: "Registration (demo)" },
    ],
    donorIds: [],
    checks: {
      "Ownership disclosed": { pass: true, evidence: "Nonprofit structure public; no promoter equity" },
      "Corrections policy published": { pass: true, evidence: "Retractions and editor's notes published prominently" },
      "Author bylines present": { pass: true, evidence: "Bylines standard" },
      "News / opinion labeled": { pass: true, evidence: "Opinion section separately labeled" },
      "Funders disclosed": { pass: false, evidence: "Individual donors not itemized publicly (demo check)" },
    },
    flags: [
      { title: "Retractions on record", detail: "Retracted its Meta 'Tek Fog'-era stories in 2022 after verification failures, publishing an account of what went wrong. Reported as public record — the corrections process itself passed." },
      { title: "Grant dependence", detail: "Philanthropic funding creates its own relationships with covered causes. Reported as a structural incentive — not scored." },
    ],
    response: null,
    analysis:
      "Included deliberately: a money-trail tool must apply the same lens to outlets critics like. The Wire's retractions show accountability practices working; its unnamed-donor gap shows nonprofit models have transparency limits too.",
  },

  {
    id: "toi",
    name: "The Times of Israel",
    url: "timesofisrael.com",
    logo: { url: "https://logo.clearbit.com/timesofisrael.com", source: "Clearbit Logo API (via outlet domain) — hotlinked, not reproduced/stored by PaperTrail" },
    type: "Digital",
    country: "IL",
    lean: "Commonly characterized as center to center-right within Israeli English-language press (attributed)",
    leanRatings: [
      { body: "MBFC", rating: "Least Biased / Right-Center (assessments vary by review)", method: "Editorial criteria-based review", ref: "mediabiasfactcheck.com (demo — verify live)" },
    ],
    watchdogs: [
      { name: "RSF Press Freedom Index", value: "Country-level ranking — connect live index", date: "placeholder", ref: "rsf.org (demo)" },
    ],
    incidents: [
      {
        cat: "casualty",
        status: "illustrative",
        event: "Israeli invasion of Lebanon (Oct 2024)",
        date: "— (researcher fills)",
        quote:
          "[Template — paste the exact passages: e.g., a story naming and profiling Israeli soldiers or civilians harmed, alongside a same-window story reporting Lebanese casualties only as a Hezbollah or health-ministry aggregate. Both passages quoted verbatim, both dated.]",
        source: "[Two dated Times of Israel URLs + the AP/Reuters same-day baseline]",
        note:
          "Companion template to the NYT entry for the identical event — same rubric, checked in the opposite likely direction. No verdict entered; requires the same full-coverage-set standard and " +
          PATTERN_THRESHOLD +
          "+ verified incidents before it counts as a pattern.",
      },
    ],
    chain: [
      { role: "Outlet", entity: "The Times of Israel", note: "English-language digital news outlet, Jerusalem", cite: "Company About page (demo — verify)" },
      { role: "Structure", entity: "Privately held", note: "Founding backers not fully itemized in public filings found to date", cite: "Press reporting (demo — verify)" },
    ],
    funding: [
      { kind: "Revenue", detail: "Advertising + a paid membership tier", amount: "—", cite: "Company statements (demo)" },
    ],
    people: [
      { name: "David Horovitz", role: "Founding Editor", note: "Founded the outlet in 2012", cite: "Press reporting (demo)" },
    ],
    donorIds: [],
    checks: {
      "Ownership disclosed": { pass: false, evidence: "Private — founding investors not fully itemized publicly (needs verification)" },
      "Corrections policy published": { pass: true, evidence: "Corrections noted on updated articles (demo check)" },
      "Author bylines present": { pass: true, evidence: "Bylines standard" },
      "News / opinion labeled": { pass: true, evidence: "Opinion/Blogs section separately labeled" },
      "Funders disclosed": { pass: false, evidence: "Revenue detail not broken out publicly" },
    },
    flags: [
      { title: "Regional conflict proximity", detail: "Jerusalem-based outlet covering an active regional war involving its home country. Reported as context — not scored as bias." },
    ],
    response: null,
    analysis:
      "Included specifically to pair with the NYT dossier: same event, same rubric category, checked in both plausible directions. Whether either shows a real pattern is an empirical question this template exists to answer, not one this dossier answers for you.",
  },

  /* -------------------------- US --------------------------- */
  {
    id: "fox",
    name: "Fox News",
    url: "foxnews.com",
    logo: { url: "https://logo.clearbit.com/foxnews.com", source: "Clearbit Logo API (via outlet domain) — hotlinked, not reproduced/stored by PaperTrail" },
    type: "Cable / Digital",
    country: "US",
    lean: "Rated right-leaning by major US rating organizations (attributed)",
    leanRatings: [
      { body: "AllSides", rating: "Right", method: "Blind bias surveys + multipartisan editorial review", ref: "allsides.com/media-bias (demo — verify live)" },
      { body: "Ad Fontes", rating: "Skews Right (news) / further right (opinion)", method: "Tripartisan analyst pods, article-level scoring", ref: "adfontesmedia.com (demo — verify live)" },
      { body: "MBFC", rating: "Right", method: "Editorial criteria-based review", ref: "mediabiasfactcheck.com (demo — verify live)" },
    ],
    watchdogs: [
      { name: "NewsGuard", value: "Rated — placeholder until API" },
      { name: "RSF World Press Freedom Index (country-level, US)", value: "United States ranked 57 / 180 in the 2025 Index; RSF flagged economic pressure on local journalism. (Country-level, not outlet-specific.)", date: "2025 Index", ref: "rsf.org" },
      { name: "Ad Fontes", value: "Rated — placeholder" },
    ],
    incidents: [
      {
        cat: "headline",
        status: "illustrative",
        event: "Routine economic data release (inflation / GDP / unemployment print)",
        date: "— (researcher fills)",
        quote:
          "[Template — paste the headline claim and the body-text passage it overstates or contradicts.]",
        source: "[Dated article URL, headline + body quoted]",
        note:
          "Deliberately non-ideological: this category should catch sloppy editing on routine data reporting just as readily as on identity or conflict stories — the same template runs on NYT's dossier for direct comparison. Counts toward a pattern only at " +
          PATTERN_THRESHOLD +
          "+ verified incidents in 12 months.",
      },
    ],
    chain: [
      { role: "Outlet", entity: "Fox News Media", note: "Cable news channel and digital properties", cite: "FCC public file (demo)" },
      { role: "Parent", entity: "Fox Corporation", note: "Publicly traded — NASDAQ: FOXA / FOX", cite: "SEC 10-K (demo)" },
      { role: "Ultimate control", entity: "Murdoch Family Trust", note: "Controlling voting stake; Lachlan Murdoch, Executive Chair", cite: "SEC proxy statement (demo)" },
    ],
    funding: [
      { kind: "Revenue", detail: "Cable carriage fees + advertising", amount: "Majority of revenue", cite: "SEC 10-K (demo)" },
    ],
    people: [
      { name: "Lachlan Murdoch", role: "Executive Chair", note: "Family trust control", cite: "SEC proxy (demo)" },
      { name: "Rupert Murdoch", role: "Chairman Emeritus", note: "Documented political donations across decades", cite: "FEC records (demo)" },
    ],
    donorIds: [],
    allegations: [
      {
        what: "Defamation lawsuit brought by Dominion Voting Systems over false claims that its machines altered 2020 election results",
        allegedBy: "Dominion Voting Systems (civil plaintiff)",
        date: "Filed 2021; settled April 2023",
        status: "settled",
        note: "Fox paid $787.5 million, the largest publicly known defamation settlement in US media history. Fox made no admission of wrongdoing but acknowledged the court's findings that certain claims about Dominion were false.",
        cite: "Public settlement announcement, April 18, 2023; court filings, Delaware Superior Court",
      },
      {
        what: "Defamation lawsuit brought by Smartmatic over similar 2020 election-related claims, seeking $2.7 billion",
        allegedBy: "Smartmatic (civil plaintiff)",
        date: "Filed February 2021; pending as of mid-2026",
        status: "alleged",
        note: "Dueling summary-judgment motions were filed in 2025; no trial date was set as of the last confirmed filings. Fox disputes the claims and says its coverage was newsworthy reporting protected by the First Amendment.",
        cite: "New York State Supreme Court docket; smartmatic.com lawsuit updates; court filings, 2025",
      },
    ],
    checks: {
      "Ownership disclosed": { pass: true, evidence: "Public company — ownership in SEC filings" },
      "Corrections policy published": { pass: true, evidence: "Corrections process exists on site" },
      "Author bylines present": { pass: true, evidence: "Bylines on digital articles" },
      "News / opinion labeled": { pass: false, evidence: "Opinion programming not consistently labeled distinct from news" },
      "Funders disclosed": { pass: true, evidence: "Revenue sources in public filings" },
    },
    flags: [
      { title: "Litigation on record", detail: "Settled Dominion Voting Systems defamation suit for $787.5M in April 2023, on the eve of trial; no admission of wrongdoing. Public record — see Allegations section below for the fuller picture, including the still-pending Smartmatic suit." },
    ],
    response: null,
    analysis:
      "Concentrated family voting control means editorial direction can shift with a single trust decision rather than shareholder consensus.",
  },
  {
    id: "nbc",
    name: "NBC News",
    url: "nbcnews.com",
    logo: { url: "https://logo.clearbit.com/nbcnews.com", source: "Clearbit Logo API (via outlet domain) — hotlinked, not reproduced/stored by PaperTrail" },
    type: "Broadcast / Digital",
    country: "US",
    lean: "Rated lean-left by major US rating organizations (attributed)",
    leanRatings: [
      { body: "AllSides", rating: "Lean Left", method: "Blind bias surveys + multipartisan editorial review", ref: "allsides.com/media-bias (demo — verify live)" },
      { body: "Ad Fontes", rating: "Middle / Skews Left", method: "Tripartisan analyst pods, article-level scoring", ref: "adfontesmedia.com (demo — verify live)" },
      { body: "MBFC", rating: "Left-Center", method: "Editorial criteria-based review", ref: "mediabiasfactcheck.com (demo — verify live)" },
    ],
    watchdogs: [
      { name: "NewsGuard", value: "Rated — placeholder until API" },
      { name: "RSF World Press Freedom Index (country-level, US)", value: "United States ranked 57 / 180 in the 2025 Index; RSF flagged economic pressure on local journalism. (Country-level, not outlet-specific.)", date: "2025 Index", ref: "rsf.org" },
    ],
    chain: [
      { role: "Outlet", entity: "NBC News", note: "Broadcast network news division", cite: "FCC public file (demo)" },
      { role: "Parent", entity: "NBCUniversal", note: "Media & entertainment conglomerate", cite: "SEC filings (demo)" },
      { role: "Ultimate control", entity: "Comcast Corporation", note: "NASDAQ: CMCSA; Roberts family holds high-vote shares", cite: "SEC proxy statement (demo)" },
    ],
    funding: [
      { kind: "Revenue", detail: "Advertising + affiliate fees within Comcast segment reporting", amount: "—", cite: "SEC 10-K (demo)" },
    ],
    people: [
      { name: "Brian Roberts", role: "Comcast Chairman & CEO", note: "High-vote family shares", cite: "SEC proxy (demo)" },
    ],
    donorIds: ["comcast"],
    checks: {
      "Ownership disclosed": { pass: true, evidence: "Public company — SEC filings" },
      "Corrections policy published": { pass: true, evidence: "Corrections appended to articles" },
      "Author bylines present": { pass: true, evidence: "Bylines standard" },
      "News / opinion labeled": { pass: true, evidence: "Opinion labeled" },
      "Funders disclosed": { pass: true, evidence: "Revenue in public filings" },
    },
    flags: [
      { title: "Coverage overlap with parent's business", detail: "Covers broadband, streaming and telecom policy while parent is the largest US ISP. Reported — not scored." },
    ],
    response: null,
    analysis:
      "The structural question is telecom coverage: stories on ISP regulation touch the parent's core business directly.",
  },
  {
    id: "nyt",
    name: "The New York Times",
    url: "nytimes.com",
    logo: { url: "https://logo.clearbit.com/nytimes.com", source: "Clearbit Logo API (via outlet domain) — hotlinked, not reproduced/stored by PaperTrail" },
    type: "Newspaper / Digital",
    country: "US",
    lean: "Rated lean-left by major US rating organizations (attributed)",
    leanRatings: [
      { body: "AllSides", rating: "Lean Left (news)", method: "Blind bias surveys + multipartisan editorial review", ref: "allsides.com/media-bias (demo — verify live)" },
      { body: "Ad Fontes", rating: "Skews Left", method: "Tripartisan analyst pods, article-level scoring", ref: "adfontesmedia.com (demo — verify live)" },
      { body: "MBFC", rating: "Left-Center", method: "Editorial criteria-based review", ref: "mediabiasfactcheck.com (demo — verify live)" },
    ],
    watchdogs: [
      { name: "NewsGuard", value: "Rated — display NewsGuard's own label text verbatim once API is wired", date: "placeholder", ref: "newsguardtech.com (demo)" },
      { name: "Ad Fontes", value: "Rated — display Ad Fontes's own reliability/bias wording verbatim", date: "placeholder", ref: "adfontesmedia.com (demo)" },
    ],
    incidents: [
      {
        cat: "casualty",
        status: "illustrative",
        event: "Israeli invasion of Lebanon (Oct 2024)",
        date: "— (researcher fills)",
        quote:
          "[Template — paste the exact passages: e.g., a story profiling named Israeli or Israeli-civilian victims alongside a same-window story reporting Lebanese deaths only as a health-ministry aggregate. Both passages quoted verbatim, both dated.]",
        source: "[Two dated NYT URLs + the AP/Reuters same-day baseline for comparison]",
        note:
          "Template only — no verdict entered. A valid flag must survey the FULL event coverage set: NYT also published named Lebanese victim profiles during this period, so the coder must show the asymmetry holds across the coverage, not in cherry-picked pairs. Counts toward a pattern only at " +
          PATTERN_THRESHOLD +
          "+ verified incidents in 12 months. The identical template applies to any outlet, in either direction.",
      },
      {
        cat: "headline",
        status: "illustrative",
        event: "Routine economic data release (inflation / GDP / unemployment print)",
        date: "— (researcher fills)",
        quote:
          "[Template — paste the headline claim and the body-text passage it overstates or contradicts.]",
        source: "[Dated article URL, headline + body quoted]",
        note:
          "Deliberately non-ideological: the same template runs on Fox News's dossier for direct comparison. This category exists to prove the rubric checks sloppy journalism even with no identity or conflict angle at all.",
      },
    ],
    chain: [
      { role: "Outlet", entity: "The New York Times", note: "National newspaper and digital subscriptions", cite: "Company reports (demo)" },
      { role: "Parent", entity: "The New York Times Company", note: "NYSE: NYT, dual-class shares", cite: "SEC 10-K (demo)" },
      { role: "Ultimate control", entity: "Ochs-Sulzberger family", note: "Class B shares elect most of the board", cite: "SEC proxy statement (demo)" },
    ],
    funding: [
      { kind: "Revenue", detail: "Digital subscriptions now the dominant revenue line", amount: "—", cite: "SEC 10-K (demo)" },
    ],
    people: [
      { name: "A.G. Sulzberger", role: "Publisher & Chairman", note: "Family control via dual-class structure", cite: "SEC proxy (demo)" },
    ],
    donorIds: [],
    checks: {
      "Ownership disclosed": { pass: true, evidence: "Dual-class structure disclosed in filings" },
      "Corrections policy published": { pass: true, evidence: "Daily corrections page maintained" },
      "Author bylines present": { pass: true, evidence: "Bylines standard" },
      "News / opinion labeled": { pass: true, evidence: "Opinion separately labeled and staffed" },
      "Funders disclosed": { pass: true, evidence: "Revenue in public filings" },
    },
    flags: [
      { title: "Subscriber-revenue incentive", detail: "Majority-subscription model ties revenue to retaining its existing audience. Reported — not scored." },
    ],
    response: null,
    analysis:
      "Dual-class control insulates the newsroom from activist shareholders but concentrates stewardship in one family.",
  },
  {
    id: "dw",
    name: "The Daily Wire",
    url: "dailywire.com",
    logo: { url: "https://logo.clearbit.com/dailywire.com", source: "Clearbit Logo API (via outlet domain) — hotlinked, not reproduced/stored by PaperTrail" },
    type: "Digital / Podcast",
    country: "US",
    lean: "Rated right by major US rating organizations (attributed)",
    leanRatings: [
      { body: "AllSides", rating: "Right", method: "Blind bias surveys + multipartisan editorial review", ref: "allsides.com/media-bias (demo — verify live)" },
      { body: "MBFC", rating: "Right", method: "Editorial criteria-based review", ref: "mediabiasfactcheck.com (demo — verify live)" },
    ],
    watchdogs: [
      { name: "NewsGuard", value: "Rated — placeholder until API" },
      { name: "RSF World Press Freedom Index (country-level, US)", value: "United States ranked 57 / 180 in the 2025 Index; RSF flagged economic pressure on local journalism. (Country-level, not outlet-specific.)", date: "2025 Index", ref: "rsf.org" },
    ],
    chain: [
      { role: "Outlet", entity: "The Daily Wire", note: "Digital media and podcast company", cite: "State registration (demo)" },
      { role: "Parent", entity: "Bentkey Ventures, LLC", note: "Private — no public filing requirement", cite: "State registration (demo)" },
      { role: "Known backers", entity: "Co-founders + early investor Farris Wilks", note: "Stakes not publicly itemized", cite: "Press reporting (demo)" },
    ],
    funding: [
      { kind: "Revenue", detail: "Memberships, advertising, entertainment ventures", amount: "Not publicly reported", cite: "Company statements (demo)" },
    ],
    people: [
      { name: "Ben Shapiro", role: "Co-founder", note: "", cite: "Press reporting (demo)" },
      { name: "Farris Wilks", role: "Early investor", note: "Major documented political donor", cite: "FEC records (demo)" },
    ],
    donorIds: ["wilks"],
    checks: {
      "Ownership disclosed": { pass: false, evidence: "Private — full cap table not public" },
      "Corrections policy published": { pass: false, evidence: "No standing public corrections page found (demo check)" },
      "Author bylines present": { pass: true, evidence: "Bylines on articles" },
      "News / opinion labeled": { pass: false, evidence: "News and commentary frequently blended" },
      "Funders disclosed": { pass: false, evidence: "Revenue and investor detail not published" },
    },
    flags: [
      { title: "Opaque ownership", detail: "Private status means the chain ends at press reporting rather than filings. Reported as a transparency gap — not scored as dishonesty." },
    ],
    response: null,
    analysis:
      "With no filing trail, the confidence level of every fact here is lower — the dossier says so instead of pretending otherwise.",
  },
  {
    id: "npr",
    name: "NPR",
    url: "npr.org",
    logo: { url: "https://logo.clearbit.com/npr.org", source: "Clearbit Logo API (via outlet domain) — hotlinked, not reproduced/stored by PaperTrail" },
    type: "Public radio / Digital",
    country: "US",
    lean: "Rated lean-left by major US rating organizations (attributed; contested)",
    leanRatings: [
      { body: "AllSides", rating: "Lean Left", method: "Blind bias surveys + multipartisan editorial review", ref: "allsides.com/media-bias (demo — verify live)" },
      { body: "Ad Fontes", rating: "Middle / Skews Left", method: "Tripartisan analyst pods, article-level scoring", ref: "adfontesmedia.com (demo — verify live)" },
      { body: "MBFC", rating: "Left-Center", method: "Editorial criteria-based review", ref: "mediabiasfactcheck.com (demo — verify live)" },
    ],
    watchdogs: [
      { name: "NewsGuard", value: "Rated — placeholder until API" },
      { name: "RSF World Press Freedom Index (country-level, US)", value: "United States ranked 57 / 180 in the 2025 Index; RSF flagged economic pressure on local journalism. (Country-level, not outlet-specific.)", date: "2025 Index", ref: "rsf.org" },
    ],
    chain: [
      { role: "Outlet", entity: "NPR", note: "Nonprofit membership media organization", cite: "IRS Form 990 (demo)" },
      { role: "Structure", entity: "501(c)(3) nonprofit", note: "No owners — board-governed; member stations pay fees", cite: "IRS Form 990 (demo)" },
      { role: "Public funding", entity: "CPB + member stations", note: "Federal support flows mostly via member stations", cite: "CPB reports (demo)" },
    ],
    funding: [
      { kind: "Revenue", detail: "Member station fees + corporate sponsorship + philanthropy", amount: "—", cite: "IRS Form 990 (demo)" },
    ],
    people: [
      { name: "Board of Directors", role: "Governance", note: "Mix of station managers and public members", cite: "IRS Form 990 (demo)" },
    ],
    donorIds: [],
    checks: {
      "Ownership disclosed": { pass: true, evidence: "Nonprofit — Form 990 public" },
      "Corrections policy published": { pass: true, evidence: "Standing corrections page" },
      "Author bylines present": { pass: true, evidence: "Bylines standard" },
      "News / opinion labeled": { pass: true, evidence: "Limited opinion content, labeled" },
      "Funders disclosed": { pass: true, evidence: "Sponsors and grants disclosed in reports" },
    },
    flags: [
      { title: "Sponsor & philanthropy dependence", detail: "Underwriting and grants create relationships with covered entities. Disclosed and reported — not scored." },
    ],
    response: null,
    analysis:
      "Nonprofit structure removes shareholder pressure but substitutes donor relationships; the 990 trail makes those unusually auditable.",
  },
];

export { OUTLETS };
