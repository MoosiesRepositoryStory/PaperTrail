import { useState } from "react";

function LogoBoxImg({ o }) {
  const [failed, setFailed] = useState(false);
  const initials = o.name.split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  if (failed || !o.logo) {
    return <span className="logo-fallback-inner">{initials}</span>;
  }
  return <img src={o.logo.url} alt={`${o.name} logo`} onError={() => setFailed(true)} />;
}

function LogoBox({ o }) {
  const hasLogo = !!o.logo;
  return (
    <div className={`logo-box ${!hasLogo ? "logo-fallback" : ""}`} title={hasLogo ? undefined : "Logo not cleanly available — flagged, not silently left blank"}>
      <LogoBoxImg o={o} />
    </div>
  );
}

export { LogoBoxImg, LogoBox };
