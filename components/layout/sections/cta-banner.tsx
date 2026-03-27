import Link from "next/link";

export const CTABanner = () => {
  return (
    <section
      style={{
        padding: "6rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          position: "relative",
          backgroundColor: "var(--bg2)",
          borderRadius: "16px",
          border: "1px solid var(--border)",
          padding: "4rem 2.5rem",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Radial glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-40%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60%",
            height: "200%",
            background:
              "radial-gradient(ellipse at top, rgba(0,212,255,0.07) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              color: "var(--text)",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            Prêt à automatiser vos processus ?
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "var(--muted)",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              maxWidth: "480px",
              margin: "0 auto 2.5rem",
            }}
          >
            Réservez un audit gratuit de 30 minutes. On analyse vos besoins, vous décidez ensuite.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
              marginBottom: "1.5rem",
            }}
          >
            <Link href="#contact" className="btn-accent">
              Réserver mon audit gratuit →
            </Link>
            <Link
              href="mailto:contact@kickup.studio"
              className="btn-outline"
            >
              contact@kickup.studio
            </Link>
          </div>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              color: "var(--muted)",
            }}
          >
            Réponse garantie sous 24h · Sans engagement
          </p>
        </div>
      </div>
    </section>
  );
};
