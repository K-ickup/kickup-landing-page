"use client";
import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer
      id="footer"
      style={{
        padding: "3rem 1.5rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          backgroundColor: "var(--bg2)",
          border: "1px solid var(--border)",
          borderRadius: "16px",
          padding: "2.5rem",
        }}
      >
        {/* Grid links */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: "1 / -1", maxWidth: "260px" }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", marginBottom: "0.75rem" }}>
              <Image
                src="/kickup-logo-round.png"
                alt="Kickup"
                width={48}
                height={48}
                style={{ objectFit: "contain" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  color: "var(--text)",
                  letterSpacing: "-0.02em",
                }}
              >
                Kickup
              </span>
            </Link>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                color: "var(--muted)",
                lineHeight: 1.6,
              }}
            >
              Applications web sur-mesure & Solutions IA pour PME et ETI.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.85rem",
                color: "var(--text)",
                marginBottom: "1rem",
                letterSpacing: "0.02em",
              }}
            >
              Services
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { href: "#services", label: "Développement web" },
                { href: "#services", label: "Solutions IA intégrées" },
                { href: "#services", label: "Agents autonomes" },
                { href: "#contact", label: "Audit gratuit" },
              ].map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    color: "var(--muted)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Ressources */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.85rem",
                color: "var(--text)",
                marginBottom: "1rem",
                letterSpacing: "0.02em",
              }}
            >
              Ressources
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { href: "#use-cases", label: "Cas clients" },
                { href: "#benefits", label: "Pourquoi Kickup" },
                { href: "#process", label: "Notre méthode" },
                { href: "#tech-stack", label: "Technologies" },
                { href: "#faq", label: "FAQ" },
              ].map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    color: "var(--muted)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.85rem",
                color: "var(--text)",
                marginBottom: "1rem",
                letterSpacing: "0.02em",
              }}
            >
              Contact
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <Link
                href="mailto:contact@kickup.studio"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  color: "var(--muted)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                contact@kickup.studio
              </Link>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--muted)" }}>
                Paris, France
              </span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--muted)" }}>
                Interventions Europe & remote
              </span>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                color: "var(--muted)",
              }}
            >
              © 2026 Kickup. Tous droits réservés.
            </p>
            <Link
              href="/mentions-legales"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                color: "var(--muted)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
