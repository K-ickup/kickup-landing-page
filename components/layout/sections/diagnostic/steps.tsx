"use client";

import { motion } from "framer-motion";
import { reveal, sectionTitleStyle } from "./shared";

const STEPS = [
  {
    title: "Le diagnostic gratuit, 45 minutes en visio.",
    body: "Je vous pose des questions sur votre activité, vos outils et ce qui vous fait perdre du temps. Je ne vous vends rien pendant l'appel.",
  },
  {
    title: "Une proposition chiffrée, sous quelques jours.",
    body: "Un seul cas d'usage, ce qu'il vous fait gagner en euros, ce qu'il coûte et le délai. Vous décidez sur pièces.",
  },
  {
    title: "Votre premier usage IA, livré en quelques semaines.",
    body: "Branché sur vos outils et vos données, avec une démo à mi-parcours. Si elle ne vous convainc pas, vous arrêtez là.",
  },
];

export function DiagnosticStepsSection() {
  return (
    <section
      id="deroulement"
      style={{ backgroundColor: "var(--bg)", padding: "6rem 1.5rem" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.h2
          {...reveal()}
          style={{ ...sectionTitleStyle, marginBottom: "3.5rem" }}
        >
          Comment ça se passe
        </motion.h2>

        <ol
          style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "1.5rem" }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {STEPS.map((step, i) => (
            <motion.li
              key={step.title}
              {...reveal(i * 0.1)}
              style={{
                padding: "2rem",
                backgroundColor: "var(--bg-alt)",
                border: "1px solid var(--border)",
                borderRadius: 12,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  backgroundColor: "rgba(26,92,255,0.1)",
                  color: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  marginBottom: "1.25rem",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "var(--text)",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.75rem",
                  lineHeight: 1.3,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {step.body}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
