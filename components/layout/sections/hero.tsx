"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

export function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 1.5rem",
        paddingTop: 96,
        paddingBottom: 80,
        backgroundColor: "var(--bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(42,42,40,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(42,42,40,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          pointerEvents: "none",
        }}
      />

      {/* Accent glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(26,92,255,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Label */}
        <motion.div {...fadeUp(0)}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.25rem 0.875rem",
              border: "1px solid var(--border)",
              borderRadius: 100,
              fontSize: "0.8125rem",
              fontWeight: 500,
              color: "var(--text-muted)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "var(--accent)",
                display: "inline-block",
              }}
            />
            Studio Dev &amp; IA · Paris · Clermont-Ferrand
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "var(--text)",
            maxWidth: 820,
            marginBottom: "1.75rem",
          }}
        >
          Votre business avance à la vitesse de{" "}
          <span style={{ color: "var(--accent)" }}>vos outils.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.2)}
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "var(--text-muted)",
            maxWidth: 520,
            lineHeight: 1.65,
            marginBottom: "2.75rem",
          }}
        >
          Gagnez en efficacité, réduisez vos coûts opérationnels et accélérez votre croissance.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.3)}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          <Link
            href="#contact"
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
            Parlons de votre projet
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8H13M9 4L13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link
            href="#offres"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.875rem 1.75rem",
              backgroundColor: "transparent",
              color: "var(--text)",
              fontWeight: 500,
              fontSize: "1rem",
              borderRadius: 9,
              textDecoration: "none",
              border: "1px solid var(--border)",
              letterSpacing: "-0.01em",
              transition: "border-color 0.2s ease, color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--border-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          >
            Notre approche
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
