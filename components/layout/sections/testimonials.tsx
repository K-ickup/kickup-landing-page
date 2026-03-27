const testimonials = [
  {
    initials: "MB",
    name: "Martin Buriez",
    role: "Développeur full-stack · Norauto International",
    quote:
      "Pendant les six mois de notre collaboration chez Norauto, Jeremy a joué un rôle essentiel. Ses compétences en développement fullstack m'ont été d'une grande aide. Je le recommande vivement.",
  },
  {
    initials: "LS",
    name: "Lilian Szalkowski",
    role: "Ingénieur développement · UNIS",
    quote:
      "Passionné et motivé, Jeremy a été un véritable moteur dans l'équipe. Il a toujours fait preuve d'initiative et d'un sens du collectif sans faille. Au-delà de ses compétences techniques, profondément humain.",
  },
  {
    initials: "KG",
    name: "Kévin Gallet",
    role: "Freelance Senior Developer",
    quote:
      "Jérémy a su être à l'écoute et force de proposition. Son implication fait qu'il est très agréable de travailler ensemble. Ce sera un réel plaisir de collaborer à nouveau.",
  },
  {
    initials: "PM",
    name: "Project Manager",
    role: "Sous NDA · Secteur industriel",
    quote:
      "Autonome et ultra compétent, une combinaison rare ! Son implication et son expertise ont clairement fait la différence sur le projet.",
  },
];

export const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
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
          Témoignages
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
          Ce qu'ils disent de nous
        </h2>
      </div>

      {/* Grid 2x2 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {testimonials.map(({ initials, name, role, quote }) => (
          <div
            key={name}
            className="card-hover"
            style={{
              backgroundColor: "var(--bg2)",
              borderRadius: "12px",
              padding: "1.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {/* Guillemet décoratif */}
            <div
              aria-hidden
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "4rem",
                lineHeight: 0.8,
                color: "var(--accent)",
                opacity: 0.4,
                userSelect: "none",
              }}
            >
              "
            </div>

            {/* Citation */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--text)",
                lineHeight: 1.7,
                flex: 1,
              }}
            >
              {quote}
            </p>

            {/* Auteur */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #10b981 0%, #7c3aed 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  color: "white",
                  letterSpacing: "0.05em",
                }}
              >
                {initials}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    color: "var(--text)",
                  }}
                >
                  {name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    color: "var(--muted)",
                  }}
                >
                  {role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
