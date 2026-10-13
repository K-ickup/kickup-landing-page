"use client";

import { motion } from "framer-motion";
import { CheckIcon, reveal, sectionTitleStyle } from "./shared";

const SIGNS = [
  "Vous savez que l'IA peut vous faire gagner du temps, mais vous ne savez pas par où commencer.",
  "Vous avez testé ChatGPT, mais il n'est branché sur rien de votre activité.",
  "Vous hésitez à confier vos données à un outil dont vous ne savez pas où elles partent.",
  "Vous perdez des heures chaque semaine sur des tâches répétitives : devis, relances, saisies, réponses aux clients.",
];

export function DiagnosticAudienceSection() {
  return (
    <section
      id="pour-qui"
      style={{ backgroundColor: "var(--bg-alt)", padding: "6rem 1.5rem" }}
    >
      <div
        style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gap: "2.5rem" }}
        className="grid-cols-1 md:grid-cols-[2fr_3fr] md:gap-16"
      >
        <motion.h2 {...reveal()} style={sectionTitleStyle}>
          C&rsquo;est pour vous si&hellip;
        </motion.h2>

        <div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gap: "1px",
              backgroundColor: "var(--border)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            {SIGNS.map((sign, i) => (
              <motion.li
                key={sign}
                {...reveal(i * 0.08)}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  padding: "1.5rem 1.75rem",
                  backgroundColor: "var(--bg)",
                  fontSize: "1rem",
                  color: "var(--text)",
                  lineHeight: 1.6,
                }}
              >
                <CheckIcon />
                <span>{sign}</span>
              </motion.li>
            ))}
          </ul>

          <motion.p
            {...reveal(0.3)}
            style={{
              marginTop: "1.5rem",
              fontSize: "0.9375rem",
              color: "var(--text-muted)",
              lineHeight: 1.65,
            }}
          >
            Vous cherchez une stratégie IA de 80 pages ? Ce n&rsquo;est pas pour
            vous. Ici, on part d&rsquo;un cas concret qui rapporte.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
