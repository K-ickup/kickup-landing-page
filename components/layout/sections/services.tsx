"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2h-2M8 3a2 2 0 012-2h4a2 2 0 012 2M8 3h8M12 12h4M12 16h4M8 12h.01M8 16h.01"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Développement",
    title: "Développement sur-mesure",
    body: "Applications métier, interfaces opérationnelles, intégrations à vos systèmes existants. Livré en production, maintenu dans le temps, documenté.",
    items: ["Applications métier", "Intégrations systèmes", "Livraison et maintenance"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Intelligence artificielle",
    title: "Intelligence artificielle appliquée",
    body: "Automatisation de process, agents métier, analyse documentaire. Des solutions déployées dans votre environnement — pas des POC qui restent en démonstration.",
    items: ["Automatisation de process", "Agents métier", "Analyse documentaire"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Accompagnement",
    title: "Expertise à la demande",
    body: "De la mission embarquée au cadrage stratégique — un profil senior qui s'adapte à votre besoin : dans votre équipe, en appui ponctuel, ou pour piloter votre roadmap.",
    items: ["Mission embarquée", "Cadrage stratégique", "Pilotage de roadmap"],
  },
];

export function ServicesSection() {
  return (
    <section
      id="offres"
      style={{
        backgroundColor: "var(--bg)",
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
          style={{ marginBottom: "3.5rem", maxWidth: 640 }}
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
            Ce que nous faisons
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
            Des missions calibrées à vos enjeux.
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--text-muted)",
              lineHeight: 1.65,
            }}
          >
            Chaque mission est calibrée à votre besoin réel. Pas de forfait surdimensionné, pas de ressource junior derrière un chef de projet.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
          }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {SERVICES.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
                delay: i * 0.1,
              }}
              style={{
                backgroundColor: "var(--bg-alt)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                transition: "border-color 0.25s ease, transform 0.25s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(26,92,255,0.3)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  backgroundColor: "rgba(26,92,255,0.12)",
                  color: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {service.icon}
              </div>

              {/* Label */}
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                {service.label}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--text)",
                  lineHeight: 1.2,
                  marginTop: "-0.5rem",
                }}
              >
                {service.title}
              </h3>

              {/* Body */}
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {service.body}
              </p>

              {/* Items */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  paddingTop: "0.5rem",
                  borderTop: "1px solid var(--border)",
                  marginTop: "auto",
                }}
              >
                {service.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.625rem",
                      fontSize: "0.875rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                      style={{ flexShrink: 0 }}
                    >
                      <path
                        d="M2.5 7l3 3 6-6"
                        stroke="#1A5CFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
