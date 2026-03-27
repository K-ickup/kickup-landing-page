import Image from "next/image";

const tags = [
  "React/TypeScript",
  "Agents IA",
  "Architecture scalable",
  "Software Craftsmanship",
];

export const AboutSection = () => {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "var(--bg2)",
        padding: "6rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Colonne gauche — photo */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              position: "relative",
              width: "320px",
              maxWidth: "100%",
            }}
          >
            {/* Halo dégradé derrière la photo */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: "-20px",
                borderRadius: "30px",
                background:
                  "radial-gradient(ellipse at center, rgba(0,212,255,0.15) 0%, rgba(124,58,237,0.1) 50%, transparent 70%)",
                filter: "blur(20px)",
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid var(--border)",
              }}
            >
              <Image
                src="/jeremy.png"
                alt="Jérémy Dumas — Fondateur de Kickup"
                width={320}
                height={400}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>

        {/* Colonne droite — texte */}
        <div>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              marginBottom: "1.25rem",
              padding: "0.3rem 0.9rem",
              borderRadius: "999px",
              border: "1px solid rgba(0, 212, 255, 0.3)",
              backgroundColor: "rgba(0, 212, 255, 0.06)",
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              color: "var(--accent)",
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Fondateur
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
              color: "var(--text)",
              letterSpacing: "-0.02em",
              marginBottom: "0.5rem",
              lineHeight: 1.2,
            }}
          >
            Pas une agence anonyme.
          </h2>

          <p
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1.1rem",
              color: "var(--accent)",
              marginBottom: "1.5rem",
            }}
          >
            Jérémy Dumas — CTO &amp; Fondateur
          </p>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              color: "var(--muted)",
              lineHeight: 1.75,
              marginBottom: "1rem",
            }}
          >
            Développeur React/TypeScript avec 7+ ans d'expérience sur des projets industriels exigeants, je fonde Kickup pour donner aux PME et ETI accès à ce que les grandes entreprises ont depuis longtemps : des outils sur-mesure qui tiennent vraiment en production.
          </p>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              color: "var(--muted)",
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}
          >
            J'ai travaillé pour Carrier, Norauto, Mobivia et d'autres grands comptes. Je sais ce que production-ready veut dire. Pas des POC. Des solutions qui durent.
          </p>

          {/* Tags pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: "var(--text)",
                  backgroundColor: "var(--bg3)",
                  border: "1px solid var(--border)",
                  borderRadius: "6px",
                  padding: "0.3rem 0.8rem",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
