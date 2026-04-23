"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function KickupLogo() {
  return (
    <div className="flex items-center gap-3">
      <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="40" height="40" rx="10" fill="#1A5CFF"/>
        <line x1="13" y1="10" x2="13" y2="30" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        <polyline points="13,21 28,11" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="19,17 28,30" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span
        style={{
          fontWeight: 700,
          fontSize: "1.1rem",
          letterSpacing: "-0.02em",
          color: "var(--text)",
        }}
      >
        Kickup
      </span>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled
          ? "rgba(248, 248, 246, 0.96)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        transition: "background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 1.5rem",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }} aria-label="Kickup — accueil">
          <KickupLogo />
        </Link>

        {/* Desktop nav links */}
        <nav
          className="hidden lg:flex"
          style={{ alignItems: "center", gap: "2rem" }}
        >
          {[
            { href: "#probleme", label: "Le constat" },
            { href: "#offres", label: "Nos missions" },
            { href: "#pourquoi", label: "Notre approche" },
            { href: "#realisations", label: "Réalisations" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "var(--text-muted)",
                textDecoration: "none",
                letterSpacing: "-0.01em",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="hidden sm:inline-flex"
          style={{
            alignItems: "center",
            gap: "0.375rem",
            padding: "0.5rem 1.25rem",
            backgroundColor: "var(--accent)",
            color: "white",
            fontWeight: 600,
            fontSize: "0.875rem",
            borderRadius: 8,
            textDecoration: "none",
            transition: "background-color 0.2s ease",
            letterSpacing: "-0.01em",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--accent-dark)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--accent)")
          }
        >
          Contact
        </Link>

        {/* Mobile hamburger */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.25rem",
            color: "var(--text)",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <span
            style={{
              display: "block",
              width: 22,
              height: 2,
              backgroundColor: "var(--text)",
              borderRadius: 2,
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              transition: "transform 0.2s ease",
            }}
          />
          <span
            style={{
              display: "block",
              width: 22,
              height: 2,
              backgroundColor: "var(--text)",
              borderRadius: 2,
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.2s ease",
            }}
          />
          <span
            style={{
              display: "block",
              width: 22,
              height: 2,
              backgroundColor: "var(--text)",
              borderRadius: 2,
              transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              transition: "transform 0.2s ease",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "var(--bg-alt)",
            borderTop: "1px solid var(--border)",
            padding: "1rem 1.5rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
          className="lg:hidden"
        >
          {[
            { href: "#probleme", label: "Le constat" },
            { href: "#offres", label: "Nos missions" },
            { href: "#pourquoi", label: "Notre approche" },
            { href: "#realisations", label: "Réalisations" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "0.75rem 0.5rem",
                fontSize: "0.9375rem",
                fontWeight: 500,
                color: "var(--text-muted)",
                textDecoration: "none",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "0.75rem",
              padding: "0.75rem 1.25rem",
              backgroundColor: "var(--accent)",
              color: "white",
              fontWeight: 600,
              fontSize: "0.9375rem",
              borderRadius: 8,
              textDecoration: "none",
            }}
          >
            Parlons de votre projet
          </Link>
        </div>
      )}
    </header>
  );
}
