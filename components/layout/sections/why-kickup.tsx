"use client";

import { motion } from "framer-motion";

const REASONS = [
  {
    title: "Un interlocuteur stable",
    body: "Pas de rotation d'équipe, pas de passage de relais en cours de mission. Vous savez avec qui vous travaillez du début à la fin.",
  },
  {
    title: "Livrables en production",
    body: "Nos engagements se mesurent sur ce qui fonctionne en conditions réelles, pas sur des démonstrations.",
  },
  {
    title: "Connaissance des contraintes",
    body: "Budget maîtrisé, délais contraints, systèmes existants à intégrer. Nous adaptons notre approche à votre réalité.",
  },
  {
    title: "Vous restez autonomes",
    body: "Une mission Kickup ne crée pas de dépendance. À la livraison, vous maîtrisez ce qui a été construit.",
  },
];

export function WhyKickupSection() {
  return (
    <section
      id="pourquoi"
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
            gap: "2rem",
            marginBottom: "4rem",
            alignItems: "end",
          }}
          className="grid-cols-1 md:grid-cols-2 md:gap-16"
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
              Notre approche
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
              L&rsquo;exigence technique au service de vos enjeux business.
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
            }}
          >
            Nous intervenons là où les enjeux sont réels. Nous cadrons honnêtement, nous livrons ce que nous promettons.
          </motion.p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
          }}
          className="grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
        >
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
                delay: i * 0.08,
              }}
              style={{
                padding: "1.75rem",
                backgroundColor: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: 12,
              }}
            >
              {/* Number */}
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
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--text)",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.625rem",
                  lineHeight: 1.3,
                }}
              >
                {reason.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {reason.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
