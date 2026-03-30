"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "#services", label: "Services" },
  { href: "#use-cases", label: "Cas clients" },
  { href: "#testimonials", label: "Témoignages" },
  { href: "#about", label: "À propos" },
  { href: "#faq", label: "FAQ" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          maxWidth: "1100px",
          zIndex: 50,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          backgroundColor: "rgba(8, 12, 16, 0.85)",
          border: "1px solid var(--border)",
          borderRadius: "14px",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <Image
            src="/kickup-logo-round.png"
            alt="Kickup"
            width={36}
            height={36}
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

        {/* Desktop nav */}
        <nav
          style={{
            alignItems: "center",
            gap: "2rem",
          }}
          className="hidden lg:flex"
        >
          {routeList.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                color: "var(--muted)",
                textDecoration: "none",
                transition: "color 0.2s ease",
                fontWeight: 500,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <Link
          href="#contact"
          className="hidden lg:inline-flex btn-accent"
          style={{ fontSize: "0.875rem", padding: "0.6rem 1.25rem" }}
        >
          Audit gratuit →
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden"
          style={{
            background: "none",
            border: "none",
            color: "var(--text)",
            cursor: "pointer",
            padding: "4px",
          }}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile menu */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: "80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            maxWidth: "1100px",
            zIndex: 49,
            backgroundColor: "var(--bg2)",
            border: "1px solid var(--border)",
            borderRadius: "14px",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
          className="lg:hidden"
        >
          {routeList.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                color: "var(--text)",
                textDecoration: "none",
                padding: "0.75rem 1rem",
                borderRadius: "8px",
                transition: "background-color 0.2s ease",
                fontWeight: 500,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--bg3)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              {label}
            </Link>
          ))}

          <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid var(--border)" }}>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="btn-accent"
              style={{ width: "100%", justifyContent: "center", fontSize: "0.9rem" }}
            >
              Audit gratuit →
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
