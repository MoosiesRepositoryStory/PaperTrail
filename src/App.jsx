import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import { Stamp } from "./components/common/Stamp";
import { DirectoryPage } from "./components/pages/DirectoryPage";
import { Dossier } from "./components/outlet/Dossier";
import { DonorPage } from "./components/donor/DonorPage";
import { MemorialPage } from "./components/pages/MemorialPage";
import { CountriesPage } from "./components/pages/CountriesPage";
import { CorporateEntitiesPage } from "./components/pages/CorporateEntitiesPage";
import { StandardsPage } from "./components/pages/StandardsPage";
import { Methodology } from "./components/pages/Methodology";
import { SelfDossierPage } from "./components/pages/SelfDossierPage";
import { UnderReviewPage } from "./components/pages/UnderReviewPage";
import { outletById, donorById } from "./utils/lookup";

/* ------------------------------------------------------------------
   PAPERTRAIL — prototype
   · Indian outlets (Aaj Tak, Republic TV, NDTV, Times Now, Zee News, The Wire)
   · Funder registry: search any donor/investor -> see every outlet,
     party and politician they fund (Track-AIPAC-style reverse index)
   · Persons of interest per outlet (owners, execs, anchors)
   · Watchdog ratings (attributed, placeholder until APIs wired)
   · Reported lean — always attributed to third parties, never scored here
   · Corporate-entity allegations tracker, one layer into ownership
   All data is DEMO DATA. Citations are placeholders for real filings:
   India: MCA, SEBI/NSE, MIB licenses, ECI electoral-bond disclosures
   US:    SEC, FEC, FCC public files, IRS 990s
------------------------------------------------------------------- */

function OutletRoute({ userIncidents, onAddIncident, onConfirmIncident, onApproveIncident, onRejectIncident, onEditIncident, adminMode, replies, onAddReply }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const o = outletById(id);
  if (!o) {
    return (
      <div className="dossier fade-in">
        <button className="back" onClick={() => navigate("/")}>← Back</button>
        <div className="reply">No outlet on file for "{id}".</div>
      </div>
    );
  }
  return (
    <Dossier
      o={o}
      onBack={() => navigate(-1)}
      onOpen={(sel) => navigate(sel.kind === "outlet" ? `/outlet/${sel.id}` : `/donor/${sel.id}`)}
      userIncidents={userIncidents[o.id]}
      onAddIncident={onAddIncident}
      onConfirmIncident={onConfirmIncident}
      onApproveIncident={onApproveIncident}
      onRejectIncident={onRejectIncident}
      onEditIncident={onEditIncident}
      adminMode={adminMode}
      replies={replies[o.id]}
      onAddReply={onAddReply}
    />
  );
}

function DonorRoute() {
  const { id } = useParams();
  const navigate = useNavigate();
  const d = donorById(id);
  if (!d) {
    return (
      <div className="dossier fade-in">
        <button className="back" onClick={() => navigate("/")}>← Back</button>
        <div className="reply">No funder on file for "{id}".</div>
      </div>
    );
  }
  return (
    <DonorPage
      d={d}
      onBack={() => navigate(-1)}
      onOpen={(sel) => navigate(sel.kind === "outlet" ? `/outlet/${sel.id}` : `/donor/${sel.id}`)}
    />
  );
}

export default function App() {
  const [theme, setTheme] = useState("light");
  const [booting, setBooting] = useState(true); // also covers loading persisted data
  const [userIncidents, setUserIncidents] = useState({}); // { outletId: [incident, ...] }
  const [replies, setReplies] = useState({}); // { outletId: [reply, ...] } — right of reply
  const [persistOn, setPersistOn] = useState(false); // true once we confirm storage works
  const [showSplash, setShowSplash] = useState(true);
  const [splashLeaving, setSplashLeaving] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const t1 = setTimeout(() => setSplashLeaving(true), 1100);
    const t2 = setTimeout(() => setShowSplash(false), 1400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // window.storage is available inside the Claude.ai artifact runtime.
  // In the standalone build it won't exist, so everything degrades to in-memory.
  const hasStorage = typeof window !== "undefined" && window.storage && typeof window.storage.get === "function";

  const [submissionLog, setSubmissionLog] = useState([]); // rate limiting — client-side prototype only
  const [adminMode, setAdminMode] = useState(false);
  const RATE_LIMIT_MAX = 3;
  const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

  function addIncident(outletId, incident) {
    const now = Date.now();
    const recent = submissionLog.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
    if (recent.length >= RATE_LIMIT_MAX) {
      return { error: `Rate limit reached (${RATE_LIMIT_MAX} submissions per 10 minutes on this device). This is a client-side prototype limiter — real deployment rate-limits per user/IP server-side. Try again shortly.` };
    }
    setSubmissionLog([...recent, now]);
    setUserIncidents((prev) => ({ ...prev, [outletId]: [...(prev[outletId] || []), incident] }));
    return { error: null };
  }
  function confirmIncident(outletId, idx, secondCoderName) {
    setUserIncidents((prev) => {
      const list = [...(prev[outletId] || [])];
      list[idx] = { ...list[idx], status: "verified", secondCoder: secondCoderName };
      return { ...prev, [outletId]: list };
    });
  }
  function approveIncident(outletId, idx) {
    setUserIncidents((prev) => {
      const list = [...(prev[outletId] || [])];
      list[idx] = { ...list[idx], status: "verified", secondCoder: "Admin review" };
      return { ...prev, [outletId]: list };
    });
  }
  function rejectIncident(outletId, idx, reason) {
    setUserIncidents((prev) => {
      const list = [...(prev[outletId] || [])];
      list[idx] = { ...list[idx], status: "rejected", rejectionReason: reason };
      return { ...prev, [outletId]: list };
    });
  }
  function editIncident(outletId, idx, patch) {
    setUserIncidents((prev) => {
      const list = [...(prev[outletId] || [])];
      list[idx] = { ...list[idx], ...patch };
      return { ...prev, [outletId]: list };
    });
  }
  function addReply(outletId, reply) {
    setReplies((prev) => ({ ...prev, [outletId]: [...(prev[outletId] || []), reply] }));
  }
  function resetSaved() {
    setUserIncidents({});
    setReplies({});
    if (hasStorage) {
      try { window.storage.delete("papertrail:incidents"); } catch (e) { /* no-op */ }
      try { window.storage.delete("papertrail:replies"); } catch (e) { /* no-op */ }
    }
  }

  // Load persisted state on boot
  useEffect(() => {
    let cancelled = false;
    async function boot() {
      if (hasStorage) {
        try {
          const inc = await window.storage.get("papertrail:incidents");
          if (!cancelled && inc && inc.value) setUserIncidents(JSON.parse(inc.value));
        } catch (e) { /* key absent or parse error — start empty */ }
        try {
          const rep = await window.storage.get("papertrail:replies");
          if (!cancelled && rep && rep.value) setReplies(JSON.parse(rep.value));
        } catch (e) { /* no saved replies */ }
        try {
          const th = await window.storage.get("papertrail:theme");
          if (!cancelled && th && th.value) setTheme(th.value);
        } catch (e) { /* no saved theme */ }
        if (!cancelled) setPersistOn(true);
      }
      await new Promise((r) => setTimeout(r, 500)); // brief skeleton beat
      if (!cancelled) setBooting(false);
    }
    boot();
    return () => { cancelled = true; };
  }, [hasStorage]);

  // Save incidents whenever they change (after boot)
  useEffect(() => {
    if (!persistOn || booting) return;
    try { window.storage.set("papertrail:incidents", JSON.stringify(userIncidents)); } catch (e) { /* no-op */ }
  }, [userIncidents, persistOn, booting]);

  // Save replies whenever they change (after boot)
  useEffect(() => {
    if (!persistOn || booting) return;
    try { window.storage.set("papertrail:replies", JSON.stringify(replies)); } catch (e) { /* no-op */ }
  }, [replies, persistOn, booting]);

  // Save theme whenever it changes (after boot)
  useEffect(() => {
    if (!persistOn || booting) return;
    try { window.storage.set("papertrail:theme", theme); } catch (e) { /* no-op */ }
  }, [theme, persistOn, booting]);

  const path = location.pathname;
  const isActive = (...prefixes) => prefixes.some((p) => (p === "/" ? path === "/" : path.startsWith(p)));

  return (
    <div className={`app ${theme === "dark" ? "dark" : ""}`}>
      {showSplash && (
        <div className={`splash ${splashLeaving ? "splash-leave" : ""}`} aria-hidden="true">
          <div className="splash-mark">PAPER<em>TRAIL</em></div>
          <div className="splash-sub">who owns the news you read</div>
        </div>
      )}

      <header className="masthead">
        <div className="logo">PAPER<em>TRAIL</em></div>
        <div className="tagline">who owns the news you read</div>
        <Stamp tone="ink">Prototype v12</Stamp>
        <button
          className="theme-btn"
          onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? "☀ Light" : "☾ Dark"}
        </button>
        <button
          className="theme-btn"
          onClick={() => {
            if (document.fullscreenElement) document.exitFullscreen?.();
            else document.documentElement.requestFullscreen?.().catch(() => {});
          }}
          aria-label="Toggle fullscreen"
          title="Fullscreen (desktop); installed PWA launches fullscreen on mobile"
        >
          ⛶
        </button>
      </header>
      <div className="demo-banner">
        Demo data — citations are placeholders until filing pipelines (MCA · SEBI · ECI · SEC · FEC) are connected.
        {persistOn ? (
          <>
            {" "}Logged incidents are <strong>saved across sessions</strong>.
            {Object.keys(userIncidents).length > 0 && (
              <button className="banner-reset" onClick={resetSaved}>Reset saved incidents</button>
            )}
          </>
        ) : (
          <> Running in-memory — logged incidents reset on refresh (open in Claude.ai for persistence).</>
        )}
      </div>

      <nav className="tabs">
        <button className={`tab ${isActive("/", "/outlet", "/donor") ? "active" : ""}`} onClick={() => navigate("/")}>
          Directory
        </button>
        <button className={`tab ${isActive("/memorial") ? "active" : ""}`} onClick={() => navigate("/memorial")}>
          In memory
        </button>
        <button className={`tab ${isActive("/countries") ? "active" : ""}`} onClick={() => navigate("/countries")}>
          Countries
        </button>
        <button className={`tab ${isActive("/corporate-entities") ? "active" : ""}`} onClick={() => navigate("/corporate-entities")}>
          Corporate entities
        </button>
        <button className={`tab ${isActive("/review") ? "active" : ""}`} onClick={() => navigate("/review")}>
          Under review
        </button>
        <button className={`tab ${isActive("/standards") ? "active" : ""}`} onClick={() => navigate("/standards")}>
          Standards & perspective
        </button>
        <button className={`tab ${isActive("/methodology") ? "active" : ""}`} onClick={() => navigate("/methodology")}>
          Methodology
        </button>
        <button className={`tab ${isActive("/about") ? "active" : ""}`} onClick={() => navigate("/about")}>
          About us
        </button>
      </nav>

      <main className="wrap">
        <Routes>
          <Route path="/" element={<DirectoryPage booting={booting} />} />
          <Route
            path="/outlet/:id"
            element={
              <OutletRoute
                userIncidents={userIncidents}
                onAddIncident={addIncident}
                onConfirmIncident={confirmIncident}
                onApproveIncident={approveIncident}
                onRejectIncident={rejectIncident}
                onEditIncident={editIncident}
                adminMode={adminMode}
                replies={replies}
                onAddReply={addReply}
              />
            }
          />
          <Route path="/donor/:id" element={<DonorRoute />} />
          <Route path="/memorial" element={<MemorialPage />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/countries/:code" element={<CountriesPage />} />
          <Route path="/corporate-entities" element={<CorporateEntitiesPage />} />
          <Route path="/corporate-entities/:id" element={<CorporateEntitiesPage />} />
          <Route path="/standards" element={<StandardsPage />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/about" element={<SelfDossierPage />} />
          <Route
            path="/review"
            element={
              <UnderReviewPage
                userIncidents={userIncidents}
                adminMode={adminMode}
                setAdminMode={setAdminMode}
                onApprove={approveIncident}
                onReject={rejectIncident}
                onEdit={editIncident}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}
