const services = [
  {
    emoji: "⚡",
    title: "Applications web sur-mesure",
    description: "Pensé pour durer et évoluer avec vous. Architecture scalable, code maintenable, interfaces modernes.",
    tags: ["React", "TypeScript", "Next.js", "PostgreSQL"],
  },
  {
    emoji: "🧠",
    title: "IA intégrée nativement",
    description: "Assistants métier, recommandations auto, analyse prédictive directement dans vos applications.",
    tags: ["OpenAI", "Anthropic", "RAG", "LangChain"],
  },
  {
    emoji: "🤖",
    title: "Agents IA autonomes",
    description: "Automatisation de workflows intelligents. ROI mesurable en 4 semaines.",
    tags: ["n8n", "Mastra", "LangChain", "Zapier"],
  },
  {
    emoji: "🔍",
    title: "Audit & refonte technique",
    description: "Évaluation de votre stack actuelle, identification des bottlenecks, plan de migration clair.",
    tags: ["Code review", "Architecture", "Migration"],
  },
  {
    emoji: "🚀",
    title: "Renfort d'équipe senior",
    description: "Standards craft, montée en compétences de vos équipes, leadership technique.",
    tags: ["Tech Lead", "Craft", "Agile"],
  },
  {
    emoji: "🏗️",
    title: "MVP & proof of concept",
    description: "Architecture solide dès le départ. Vous validez votre idée sans dette technique.",
    tags: ["MVP", "Startup", "Validation"],
  },
];

export const ServicesSection = () => {
  return (
    <section
      id="services"
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
          Services
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
          Ce qu'on fait — et comment on le fait
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1rem",
            color: "var(--muted)",
            maxWidth: "520px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Du développement web au déploiement d'agents IA autonomes, on livre du code qui tourne en production.
        </p>
      </div>

      {/* Grid 3x2 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {services.map(({ emoji, title, description, tags }) => (
          <div
            key={title}
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
            <div style={{ fontSize: "2rem", lineHeight: 1 }}>{emoji}</div>

            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.05rem",
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
                  lineHeight: 1.6,
                }}
              >
                {description}
              </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "auto" }}>
              {tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    color: "var(--muted)",
                    backgroundColor: "var(--bg3)",
                    border: "1px solid var(--border)",
                    borderRadius: "6px",
                    padding: "0.2rem 0.6rem",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
