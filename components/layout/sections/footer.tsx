"use client";

import Link from "next/link";

function KickupLogoSmall() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <svg width="32" height="32" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="40" height="40" rx="10" fill="#1A5CFF"/>
        <line x1="13" y1="10" x2="13" y2="30" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <polyline points="13,21 28,11" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="19,17 28,30" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span
        style={{
          fontWeight: 700,
          fontSize: "1rem",
          letterSpacing: "-0.02em",
          color: "var(--text)",
        }}
      >
        Kickup
      </span>
    </div>
  );
}

const linkStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "var(--text-muted)",
  textDecoration: "none",
  transition: "color 0.2s",
  display: "block",
};

const colTitleStyle: React.CSSProperties = {
  fontSize: "0.75rem",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--text)",
  marginBottom: "1rem",
};

export function FooterSection() {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-alt)",
        borderTop: "1px solid var(--border)",
        padding: "3.5rem 1.5rem 2rem",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Columns */}
        <div
          style={{
            display: "grid",
            gap: "2.5rem",
            marginBottom: "3rem",
          }}
          className="grid-cols-1 sm:grid-cols-3"
        >
          {/* Col 1 — Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <KickupLogoSmall />
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-muted)",
                lineHeight: 1.6,
                margin: 0,
                maxWidth: 260,
              }}
            >
              Développement sur-mesure et IA pour PME et ETI.
            </p>
          </div>

          {/* Col 2 — Missions */}
          <div>
            <p style={colTitleStyle}>Nos missions</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {["Développement sur-mesure", "Intelligence artificielle appliquée", "Expertise à la demande"].map((item) => (
                <a
                  key={item}
                  href="#offres"
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <p style={colTitleStyle}>Contact</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              <a
                href="mailto:contact@kickup.studio"
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                contact@kickup.studio
              </a>
              <span style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
                Paris · Clermont-Ferrand
              </span>
              <span style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
                France &amp; remote
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "1.5rem",
            borderTop: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", margin: 0 }}>
            © 2026 Kickup — Tous droits réservés.
          </p>
          <Link
            href="/mentions-legales"
            style={{ fontSize: "0.8125rem", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
