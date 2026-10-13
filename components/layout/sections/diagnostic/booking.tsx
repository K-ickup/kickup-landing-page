"use client";

import { useCallback, useRef } from "react";
import Script from "next/script";
import Link from "next/link";
import { motion } from "framer-motion";
import { CALENDLY_URL } from "@/lib/contact-options";
import { reveal, sectionTitleStyle } from "./shared";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

export function DiagnosticBookingSection() {
  const widgetRef = useRef<HTMLDivElement>(null);

  // onReady fires after the first load and on every remount (client-side
  // navigation), so the widget is initialised explicitly instead of relying
  // on Calendly's one-time DOM scan.
  const initWidget = useCallback(() => {
    const el = widgetRef.current;
    if (!el || !window.Calendly || el.querySelector("iframe")) return;
    window.Calendly.initInlineWidget({ url: CALENDLY_URL, parentElement: el });
  }, []);

  return (
    <section
      id="reserver"
      style={{
        backgroundColor: "var(--bg)",
        padding: "6rem 1.5rem",
        scrollMarginTop: 64,
      }}
    >
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onReady={initWidget}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          {...reveal()}
          style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 3rem" }}
        >
          <h2 style={{ ...sectionTitleStyle, marginBottom: "1rem" }}>
            Choisissez votre créneau
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
            Quelques questions rapides au moment de réserver, pour que
            j&rsquo;arrive préparé.
          </p>
        </motion.div>

        <div
          ref={widgetRef}
          className="calendly-embed"
          style={{
            width: "100%",
            backgroundColor: "var(--bg-alt)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            overflow: "hidden",
          }}
        />

        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            textAlign: "center",
          }}
        >
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
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
              transition: "border-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
          >
            Ouvrir l&rsquo;agenda dans un nouvel onglet
          </a>
          <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)", margin: 0 }}>
            Vous préférez écrire ?{" "}
            <Link
              href="/#contact"
              style={{ color: "var(--accent)", fontWeight: 500, textDecoration: "none" }}
            >
              Utilisez le formulaire de contact.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
