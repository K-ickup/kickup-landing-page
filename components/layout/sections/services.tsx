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
    label: "Applications métier",
    title: "Vos équipes perdent du temps sur des tâches qui mériteraient un vrai outil.",
    body: "Applications métier, interfaces opérationnelles, outils sur-mesure adaptés à vos process. Livré en production, maintenu dans le temps, documenté.",
    items: ["Applications métier", "Interfaces opérationnelles", "Livraison et maintenance"],
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
    label: "Automatisation",
    title: "Vos process répétitifs à fort volume, on les automatise.",
    body: "Automatisation de process, agents métier, analyse documentaire. Des solutions déployées dans votre environnement. Pas des POC qui restent en démonstration.",
    items: ["Automatisation de process", "Agents métier", "Analyse documentaire"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8 6H5a2 2 0 00-2 2v8a2 2 0 002 2h3M16 6h3a2 2 0 012 2v8a2 2 0 01-2 2h-3M12 2v20M8 10h8M8 14h8"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Connexion systèmes",
    title: "Vos outils ne se parlent pas. Vos équipes ressaisissent. On règle ça.",
    body: "ERP, CRM, outils métier : reliez vos logiciels existants entre eux. Synchronisation de données, automatisation de flux, connecteurs sur-mesure. Sans remplacer ce qui fonctionne.",
    items: ["Connexion ERP / CRM", "Synchronisation de données", "Automatisation de flux"],
  },
];

export function ServicesSection() {
  return (
    <section
      id="missions"
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
            Vos enjeux ont une réponse.
          </h2>
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
