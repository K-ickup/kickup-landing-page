import Link from "next/link";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="grid-bg"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: "120px",
        paddingBottom: "80px",
      }}
    >
      {/* Radial gradient background */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,255,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(124,58,237,0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 1.5rem",
          textAlign: "center",
        }}
      >
        {/* Badge pulsant */}
        <div
          className="animate-fade-up delay-100"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "2rem",
            padding: "0.4rem 1rem",
            borderRadius: "999px",
            border: "1px solid rgba(0, 212, 255, 0.3)",
            backgroundColor: "rgba(0, 212, 255, 0.06)",
            fontFamily: "var(--font-body)",
            fontSize: "0.8rem",
            color: "var(--accent)",
            fontWeight: 500,
            letterSpacing: "0.01em",
          }}
        >
          <span
            className="animate-pulse-dot"
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "var(--accent)",
              flexShrink: 0,
            }}
          />
          Studio IA & Dev · Applications sur-mesure · Agents IA
        </div>

        {/* H1 */}
        <h1
          className="animate-fade-up delay-200"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(2.4rem, 6vw, 4rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "var(--text)",
            marginBottom: "1.5rem",
          }}
        >
          Vos propres outils.{" "}
          <span className="text-gradient-accent">Moins de friction. Plus de business.</span>
        </h1>

        {/* Sous-titre */}
        <p
          className="animate-fade-up delay-300"
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            color: "var(--muted)",
            maxWidth: "640px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.7,
          }}
        >
          On développe vos applications métier et agents IA sur-mesure. Vous possédez 100% de ce qu&apos;on livre — zéro dépendance, zéro abonnement SaaS inutile.
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up delay-400"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
            marginBottom: "4rem",
          }}
        >
          <Link href="#contact" className="btn-accent">
            Réserver un audit gratuit →
          </Link>
          <Link href="#use-cases" className="btn-outline">
            Voir nos réalisations
          </Link>
        </div>

        {/* Stats */}
        <div
          className="animate-fade-up delay-500"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0",
          }}
        >
          {[
            { value: "24h", label: "Réponse garantie" },
            { value: "7+ ans", label: "d'expérience dev & IA" },
            { value: "15+", label: "Projets livrés" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              style={{
                padding: "1rem 2rem",
                borderLeft: i > 0 ? "1px solid var(--border)" : "none",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.75rem",
                  color: "var(--accent)",
                  lineHeight: 1,
                  marginBottom: "0.35rem",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  color: "var(--muted)",
                  fontWeight: 400,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
