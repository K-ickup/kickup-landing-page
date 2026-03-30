const useCases = [
  {
    badge: "🎯",
    badgeColor: "#00d4ff",
    title: "Qualification de leads",
    description:
      "Agent IA qui analyse, enrichit et score automatiquement chaque lead entrant selon vos critères métiers.",
    metrics: [
      { value: "+50%", label: "leads qualifiés" },
      { value: "-40%", label: "temps commercial" },
      { value: "3 sem.", label: "mise en prod" },
    ],
  },
  {
    badge: "💬",
    badgeColor: "#7c3aed",
    title: "Support client 24/7",
    description:
      "Agent conversationnel qui gère les demandes courantes, accède à votre documentation et escalade intelligemment.",
    metrics: [
      { value: "-80%", label: "charge tier 1" },
      { value: "+35%", label: "satisfaction" },
      { value: "2-3 sem.", label: "mise en prod" },
    ],
  },
  {
    badge: "📄",
    badgeColor: "#10b981",
    title: "Traitement documents",
    description:
      "Extraction automatique de données, validation de conformité, synthèse et mise à jour de vos systèmes.",
    metrics: [
      { value: "5-10h", label: "gagnées/semaine" },
      { value: "0", label: "saisie manuelle" },
      { value: "2-4 sem.", label: "mise en prod" },
    ],
  },
  {
    badge: "📧",
    badgeColor: "#f43f5e",
    title: "Automatisation email",
    description:
      "Agent IA qui automatise vos séquences de prospection email — personnalisation, envoi, suivi des réponses.",
    metrics: [
      { value: "-5h/sem.", label: "prospection manuelle" },
      { value: "×3", label: "volume prospects" },
      { value: "2-3 sem.", label: "mise en prod" },
    ],
  },
  {
    badge: "🏭",
    badgeColor: "#f59e0b",
    title: "Outils métier industrie",
    description:
      "Applications sur-mesure pour vos opérations. Code propriétaire, sans dépendance à un éditeur tiers.",
    metrics: [
      { value: "100%", label: "code propriétaire" },
      { value: "0", label: "vendor lock-in" },
      { value: "3-8 sem.", label: "mise en prod" },
    ],
  },
];

export const UseCasesSection = () => {
  return (
    <section
      id="use-cases"
      style={{
        backgroundColor: "var(--bg2)",
        padding: "6rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "var(--accent)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Cas d'usage
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              color: "var(--text)",
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Concret. Mesurable. En production.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "var(--muted)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Des solutions qui génèrent un ROI mesurable en quelques semaines.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-5">
          {useCases.map(
            ({ badge, badgeColor, title, description, metrics }, i) => (
              <div
                key={title}
                className={`card-hover ${
                  i === 3
                    ? "sm:[grid-column:2/4]"
                    : i === 4
                    ? "sm:[grid-column:4/6]"
                    : "sm:col-span-2"
                }`}
                style={{
                  backgroundColor: "var(--bg)",
                  borderRadius: "12px",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.5rem",
                      lineHeight: 1,
                    }}
                  >
                    {badge}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      color: "var(--text)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {title}
                  </h3>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "var(--muted)",
                    lineHeight: 1.65,
                    marginBottom: "1.5rem",
                    flex: 1,
                  }}
                >
                  {description}
                </p>

                {/* Metrics */}
                <div
                  style={{
                    borderTop: "1px solid var(--border)",
                    paddingTop: "1.25rem",
                    display: "flex",
                    gap: "0",
                  }}
                >
                  {metrics.map((m, i) => (
                    <div
                      key={m.label}
                      style={{
                        flex: 1,
                        textAlign: "center",
                        paddingLeft: i > 0 ? "1rem" : 0,
                        borderLeft: i > 0 ? "1px solid var(--border)" : "none",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 800,
                          fontSize: "1.25rem",
                          color: badgeColor,
                          lineHeight: 1,
                          marginBottom: "0.25rem",
                        }}
                      >
                        {m.value}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.7rem",
                          color: "var(--muted)",
                        }}
                      >
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};
