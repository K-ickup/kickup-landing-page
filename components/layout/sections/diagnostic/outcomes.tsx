"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, UtensilsCrossed, Wrench } from "lucide-react";
import { CheckIcon, reveal, sectionTitleStyle } from "./shared";

const OUTCOMES = [
  "Le problème qui vous coûte le plus, chiffré en heures et en euros.",
  "Une piste concrète pour le régler avec l'IA.",
  "Les aides publiques auxquelles vous êtes peut-être éligible.",
  "Aucun engagement : si ce n'est pas le bon moment, on en reste là.",
];

const EXAMPLES = [
  { Icon: UtensilsCrossed, sector: "Restaurant", body: "Répondre aux demandes de réservation et aux avis clients." },
  { Icon: Wrench, sector: "Garage", body: "Relancer les devis et envoyer les rappels de révision." },
  { Icon: Building2, sector: "PME", body: "Extraire automatiquement les données des factures et bons de commande." },
  { Icon: Briefcase, sector: "Indépendant", body: "Rédiger les comptes rendus et relancer les clients." },
];

export function DiagnosticOutcomesSection() {
  return (
    <section
      id="resultat"
      style={{ backgroundColor: "var(--bg-alt)", padding: "6rem 1.5rem" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.h2
          {...reveal()}
          style={{ ...sectionTitleStyle, marginBottom: "2.5rem", maxWidth: 720 }}
        >
          À la fin des 45 minutes, vous avez :
        </motion.h2>

        <ul
          style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "1rem" }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {OUTCOMES.map((outcome, i) => (
            <motion.li
              key={outcome}
              {...reveal(i * 0.08)}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                padding: "1.5rem 1.75rem",
                backgroundColor: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                fontSize: "1rem",
                color: "var(--text)",
                lineHeight: 1.6,
              }}
            >
              <CheckIcon />
              <span>{outcome}</span>
            </motion.li>
          ))}
        </ul>

        {/* Examples */}
        <motion.h3
          {...reveal()}
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            marginTop: "4rem",
            marginBottom: "1.5rem",
          }}
        >
          Quelques exemples d&rsquo;usages
        </motion.h3>

        <div
          style={{ display: "grid", gap: "1.5rem" }}
          className="grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
        >
          {EXAMPLES.map(({ Icon, sector, body }, i) => (
            <motion.div
              key={sector}
              {...reveal(i * 0.08)}
              style={{
                padding: "1.75rem",
                backgroundColor: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: 12,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  backgroundColor: "rgba(26,92,255,0.12)",
                  color: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                }}
              >
                <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
              </div>
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "0.5rem",
                }}
              >
                {sector}
              </p>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--text)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
