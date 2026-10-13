"use client";

import { motion } from "framer-motion";
import { reveal } from "./shared";

export function DiagnosticFinalCtaSection() {
  return (
    <section style={{ backgroundColor: "#1A1A18", padding: "6rem 1.5rem" }}>
      <motion.div
        {...reveal()}
        style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}
      >
        <p
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            color: "#F8F8F6",
            marginBottom: "2.25rem",
          }}
        >
          45 minutes pour savoir ce que l&rsquo;IA peut vraiment faire pour
          votre entreprise.
        </p>
        <a
          href="#reserver"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.375rem",
            padding: "0.875rem 1.75rem",
            backgroundColor: "var(--accent)",
            color: "white",
            fontWeight: 600,
            fontSize: "1rem",
            borderRadius: 9,
            textDecoration: "none",
            letterSpacing: "-0.01em",
            transition: "background-color 0.2s ease, transform 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--accent-dark)";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--accent)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Réserver mon diagnostic
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M3 8H13M9 4L13 8L9 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
