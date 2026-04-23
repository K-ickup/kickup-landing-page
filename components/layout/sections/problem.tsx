"use client";

import { motion } from "framer-motion";

const PAIN_POINTS = [
  {
    number: "01",
    title: "Vous perdez de la marge sans savoir où",
    body: "Vos équipes passent du temps sur des tâches qui pourraient être automatisées. Ce coût est invisible mais réel.",
  },
  {
    number: "02",
    title: "Vos données ne vous servent pas",
    body: "L'information existe dans votre organisation. Elle est dispersée, inaccessible au bon moment, inexploitable pour décider vite.",
  },
  {
    number: "03",
    title: "Vos projets de transformation n'aboutissent pas",
    body: "Les intentions sont là. Les résultats concrets, rarement. L'écart entre la promesse d'un prestataire et la réalité opérationnelle est systématiquement sous-estimé.",
  },
  {
    number: "04",
    title: "Vous dépendez de prestataires qui pilotent à votre place",
    body: "Sans interlocuteur technique de confiance, les décisions structurantes sont prises par des tiers dont les intérêts ne sont pas toujours alignés avec les vôtres.",
  },
];

const stagger = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay: i * 0.08 },
});

export function ProblemSection() {
  return (
    <section
      id="probleme"
      style={{
        backgroundColor: "var(--bg-alt)",
        padding: "6rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            marginBottom: "4rem",
          }}
          className="md:grid-cols-2 md:gap-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
              Le constat
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "var(--text)",
              }}
            >
              Vos process vous coûtent plus cher que vous ne le pensez.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontSize: "1.0625rem",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              alignSelf: "end",
            }}
          >
            Les organisations qui avancent vite ont un point commun : leurs décisions s&rsquo;appuient sur des informations fiables, accessibles au bon moment.
          </motion.p>
        </div>

        {/* Pain points grid */}
        <div
          style={{
            display: "grid",
            gap: "1px",
            backgroundColor: "var(--border)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            overflow: "hidden",
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {PAIN_POINTS.map((point, i) => (
            <motion.div
              key={point.number}
              {...stagger(i)}
              style={{
                padding: "2rem 2.25rem",
                backgroundColor: "var(--bg)",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--bg-alt)";
                e.currentTarget.style.boxShadow = "inset 0 0 0 1px rgba(26,92,255,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--bg)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--accent)",
                  letterSpacing: "0.08em",
                  marginBottom: "0.875rem",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {point.number}
              </div>
              <h3
                style={{
                  fontSize: "1.0625rem",
                  fontWeight: 700,
                  color: "var(--text)",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.625rem",
                  lineHeight: 1.3,
                }}
              >
                {point.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {point.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
