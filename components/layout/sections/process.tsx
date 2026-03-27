const steps = [
  {
    number: "01",
    title: "Audit gratuit 30min",
    description:
      "On analyse vos besoins ensemble. Doc de cadrage + devis sous 48h, sans engagement.",
    details: [
      "Analyse de vos processus actuels",
      "Identification des gains de productivité",
      "Estimation ROI et faisabilité technique",
      "Proposition d'approche et planning",
    ],
    deliverable: "Document de cadrage + estimation budgétaire sous 48h",
  },
  {
    number: "02",
    title: "Sprints agiles 1-2 semaines",
    description:
      "Démo à chaque sprint, feedback continu. Vous voyez l'avancement chaque semaine.",
    details: [
      "Sprints de 1-2 semaines",
      "Démo à chaque sprint",
      "Feedback continu",
      "Ajustements en temps réel",
    ],
    deliverable: "Vous voyez l'avancement chaque semaine, pas de surprise.",
  },
  {
    number: "03",
    title: "Déploiement & support",
    description:
      "Mise en prod accompagnée, formation équipes, 3 mois support inclus.",
    details: [
      "Déploiement sur votre infrastructure",
      "Formation de vos équipes",
      "Documentation technique et utilisateur",
      "Support & maintenance 3 mois inclus",
    ],
    deliverable: "Vous êtes autonomes, mais on reste disponibles.",
  },
];

export const ProcessSection = () => {
  return (
    <section
      id="process"
      style={{
        padding: "6rem 1.5rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
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
          Notre méthode
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            color: "var(--text)",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}
        >
          De l'idée à la production en 3 étapes
        </h2>
      </div>

      {/* 3 colonnes */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {steps.map(({ number, title, description, details, deliverable }) => (
          <div
            key={number}
            className="card-hover"
            style={{
              backgroundColor: "var(--bg2)",
              borderRadius: "12px",
              padding: "1.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {/* Numéro */}
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "3.5rem",
                color: "var(--muted)",
                opacity: 0.2,
                lineHeight: 1,
                userSelect: "none",
                marginBottom: "-0.5rem",
              }}
            >
              {number}
            </div>

            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "var(--text)",
                  marginBottom: "0.5rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                }}
              >
                {description}
              </p>
            </div>

            {/* Details */}
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
                margin: 0,
                padding: 0,
                listStyle: "none",
              }}
            >
              {details.map((detail) => (
                <li
                  key={detail}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    color: "var(--muted)",
                  }}
                >
                  <span
                    style={{
                      color: "var(--accent)",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    →
                  </span>
                  {detail}
                </li>
              ))}
            </ul>

            {/* Deliverable */}
            <div
              style={{
                borderTop: "1px solid var(--border)",
                paddingTop: "1rem",
                marginTop: "auto",
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                fontWeight: 500,
                color: "var(--text)",
                fontStyle: "italic",
              }}
            >
              {deliverable}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
