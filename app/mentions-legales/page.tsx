import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Kickup",
};

export default function MentionsLegales() {
  const style: React.CSSProperties = {
    maxWidth: 720,
    margin: "0 auto",
    padding: "8rem 1.5rem 4rem",
    color: "var(--text)",
  };

  const h1Style: React.CSSProperties = {
    fontSize: "2rem",
    fontWeight: 800,
    letterSpacing: "-0.03em",
    marginBottom: "2.5rem",
  };

  const h2Style: React.CSSProperties = {
    fontSize: "1.125rem",
    fontWeight: 700,
    marginTop: "2rem",
    marginBottom: "0.75rem",
    color: "var(--text)",
  };

  const pStyle: React.CSSProperties = {
    fontSize: "0.9375rem",
    color: "var(--text-muted)",
    lineHeight: 1.7,
    marginBottom: "0.5rem",
  };

  return (
    <div style={style}>
      <h1 style={h1Style}>Mentions légales</h1>

      <h2 style={h2Style}>Éditeur du site</h2>
      <p style={pStyle}>Kickup — Activité de la société 2MS-IT EURL</p>
      <p style={pStyle}>SIREN : 949 256 762</p>
      <p style={pStyle}>Siège social : 40 Rue Alexandre Dumas — 75011 Paris</p>
      <p style={pStyle}>Directeur de la publication : Jérémy Dumas</p>

      <h2 style={h2Style}>Hébergement</h2>
      <p style={pStyle}>Ce site est hébergé par Vercel Inc.</p>
      <p style={pStyle}>
        Infrastructure : Vercel Edge Network (Europe — Frankfurt, Germany)
      </p>
      <p style={pStyle}>
        Siège social : 340 S Lemon Ave #4133, Walnut, CA 91789, USA
      </p>
      <p style={pStyle}>
        Les données des utilisateurs européens sont stockées et traitées
        exclusivement sur des serveurs situés dans l&rsquo;Union Européenne
        (région Frankfurt) en conformité avec le RGPD.
      </p>

      <h2 style={h2Style}>Contact</h2>
      <p style={pStyle}>
        Email :{" "}
        <a
          href="mailto:contact@kickup.studio"
          style={{ color: "var(--accent)" }}
        >
          contact@kickup.studio
        </a>
      </p>
      <p style={pStyle}>
        Site web :{" "}
        <a href="https://kickup.studio" style={{ color: "var(--accent)" }}>
          kickup.studio
        </a>
      </p>

      <h2 style={h2Style}>Propriété intellectuelle</h2>
      <p style={pStyle}>
        Le présent site et l&rsquo;ensemble de ses éléments sont la propriété
        exclusive de Kickup (2MS-IT), à l&rsquo;exception des marques, logos ou
        contenus appartenant à d&rsquo;autres sociétés partenaires ou auteurs.
      </p>
      <p style={pStyle}>
        Toute reproduction, représentation, modification ou publication, quel
        que soit le moyen utilisé, est interdite sans autorisation écrite
        préalable de Kickup.
      </p>

      <h2 style={h2Style}>Données personnelles</h2>
      <p style={pStyle}>
        Kickup s&rsquo;engage à ce que la collecte et le traitement de vos
        données, effectués à partir du site kickup.studio, soient conformes au
        RGPD et à la loi Informatique et Libertés.
      </p>
      <p style={pStyle}>
        Les données collectées via le formulaire de contact sont utilisées
        uniquement pour répondre à vos demandes et ne sont jamais cédées à des
        tiers.
      </p>

      <h2 style={h2Style}>Droit applicable</h2>
      <p style={pStyle}>
        Le présent site est soumis au droit français. En cas de litige, les
        tribunaux français seront seuls compétents.
      </p>

      <p style={{ ...pStyle, marginTop: "2rem", fontStyle: "italic" }}>
        Dernière mise à jour : avril 2026
      </p>

      <div
        style={{
          marginTop: "3rem",
          paddingTop: "1.5rem",
          borderTop: "1px solid var(--border)",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: "0.875rem",
            color: "var(--accent)",
            textDecoration: "none",
          }}
        >
          ← Retour
        </Link>
      </div>
    </div>
  );
}
