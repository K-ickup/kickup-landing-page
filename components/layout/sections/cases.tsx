"use client";

import { motion } from "framer-motion";

const CASES = [
  {
    industry: "ETI Industrielle",
    context: "200 salariés · Clermont-Ferrand",
    challenge:
      "Reporting qualité manuel : 3h de saisie par jour sur des tableurs partagés, erreurs fréquentes, zéro visibilité temps réel.",
    solution:
      "Application React + API Node.js sur-mesure connectée au ERP existant. Tableau de bord opérationnel, export automatique.",
    result: "3h éliminées par jour",
    tag: "Dev sur-mesure",
  },
  {
    industry: "PME Retail",
    context: "50 salariés · Lyon",
    challenge:
      "Gestion des stocks sans visibilité temps réel. Les ruptures n'étaient détectées qu'au moment de la commande client.",
    solution:
      "Agent IA de surveillance des stocks couplé à un dashboard opérationnel. Alertes proactives et prévisions automatiques.",
    result: "0 rupture critique en 6 mois",
    tag: "IA intégrée",
  },
  {
    industry: "Scale-up SaaS",
    context: "30 salariés · Paris",
    challenge:
      "Support client submergé. 60% des tickets concernaient les mêmes questions récurrentes, épuisant l'équipe.",
    solution:
      "Assistant IA intégré directement dans le produit. RAG sur la base documentaire, escalade automatique vers humain si besoin.",
    result: "−60% de tickets manuels",
    tag: "IA intégrée",
  },
];

export function CasesSection() {
  return (
    <section
      id="realisations"
      style={{
        backgroundColor: "var(--bg-alt)",
        padding: "6rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3.5rem", maxWidth: 600 }}
        >
          <span
            style={{
              display: "block",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "1rem",
            }}
          >
            Réalisations
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--text)",
              marginBottom: "1rem",
            }}
          >
            Des résultats concrets.
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--text-muted)",
              lineHeight: 1.65,
            }}
          >
            Cas clients anonymisés. Mêmes problématiques, résultats mesurables.
          </p>
        </motion.div>

        {/* Cases */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {CASES.map((c, i) => (
            <motion.article
              key={c.industry}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
                delay: i * 0.08,
              }}
              style={{
                backgroundColor: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "2rem 2.25rem",
                display: "grid",
                gap: "2rem",
                transition: "border-color 0.2s ease",
              }}
              className="grid-cols-1 md:grid-cols-[2fr_2fr_1fr]"
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "var(--border-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "var(--border)")
              }
            >
              {/* Left: context */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    marginBottom: "1.25rem",
                    flexWrap: "wrap",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 700,
                      color: "var(--text)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {c.industry}
                  </h3>
                  <span
                    style={{
                      padding: "0.15rem 0.625rem",
                      backgroundColor: "rgba(26,92,255,0.12)",
                      color: "var(--accent)",
                      borderRadius: 100,
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    {c.tag}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--text-muted)",
                    marginBottom: "1rem",
                  }}
                >
                  {c.context}
                </p>
                <div>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      marginBottom: "0.375rem",
                    }}
                  >
                    Problème
                  </p>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {c.challenge}
                  </p>
                </div>
              </div>

              {/* Middle: solution */}
              <div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginBottom: "0.375rem",
                  }}
                >
                  Solution
                </p>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                  }}
                >
                  {c.solution}
                </p>
              </div>

              {/* Right: result */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "1.25rem 1.5rem",
                  backgroundColor: "rgba(26,92,255,0.06)",
                  borderRadius: 10,
                  border: "1px solid rgba(26,92,255,0.15)",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Résultat
                </p>
                <p
                  style={{
                    fontSize: "1.375rem",
                    fontWeight: 800,
                    color: "var(--text)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                  }}
                >
                  {c.result}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
