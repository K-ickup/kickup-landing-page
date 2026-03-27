"use client";

interface TechCategory {
  category: string;
  technologies: string[];
}

const techStack: TechCategory[] = [
  {
    category: "Développement Web",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "tRPC",
    ],
  },
  {
    category: "Intelligence Artificielle",
    technologies: [
      "OpenAI (GPT-5)",
      "Anthropic (Claude)",
      "LangChain",
      "LlamaIndex",
      "Mastra",
      "n8n",
      "Make",
      "Zapier",
    ],
  },
  {
    category: "Infrastructure & DevOps",
    technologies: [
      "Vercel",
      "Railway",
      "Supabase",
      "GitHub Actions",
      "Docker",
      "Sentry",
      "Posthog",
    ],
  },
];

export const TechStackSection = () => {
  return (
    <section
      id="tech-stack"
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
            Stack technique
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
            Technologies & Stack technique
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
            Nous utilisons les frameworks et outils les plus modernes pour
            garantir performance, sécurité et évolutivité.
          </p>
        </div>

        {/* Grid 3 colonnes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {techStack.map(({ category, technologies }) => (
            <div
              key={category}
              className="card-hover"
              style={{
                backgroundColor: "var(--bg)",
                borderRadius: "12px",
                padding: "1.75rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "var(--text)",
                  textAlign: "center",
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {category}
              </h3>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  justifyContent: "center",
                }}
              >
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      color: "var(--muted)",
                      backgroundColor: "var(--bg3)",
                      border: "1px solid var(--border)",
                      borderRadius: "6px",
                      padding: "0.3rem 0.7rem",
                      cursor: "default",
                      transition: "background 0.2s ease, color 0.2s ease, border-color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "linear-gradient(135deg, #10b981 0%, #7c3aed 100%)";
                      el.style.color = "white";
                      el.style.borderColor = "transparent";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "var(--bg3)";
                      el.style.color = "var(--muted)";
                      el.style.borderColor = "var(--border)";
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
