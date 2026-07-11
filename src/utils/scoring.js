const CHECK_COUNT = 5;
const scoreOf = (o) =>
  Math.round(
    (Object.values(o.checks).filter((c) => c.pass).length / CHECK_COUNT) * 100
  );

const ALLEGATION_STATUS_META = {
  alleged: { label: "Alleged", tone: "amber" },
  charged: { label: "Charged", tone: "flag" },
  convicted: { label: "Convicted", tone: "flag" },
  settled: { label: "Settled", tone: "ink" },
  dismissed: { label: "Dismissed / quashed", tone: "verify" },
};


const STATUS_META = {
  illustrative: { label: "Illustrative template — not a verdict", tone: "amber" },
  open: { label: "Open — real event, outlet not yet directly checked", tone: "ink" },
  draft: { label: "Pending review — submitted, not yet moderated", tone: "amber" },
  "checked-clear": { label: "Checked — no flag found", tone: "verify" },
  verified: { label: "Verified incident", tone: "flag" },
  rejected: { label: "Rejected on review", tone: "flag" },
};

export { CHECK_COUNT, scoreOf, ALLEGATION_STATUS_META, STATUS_META };
