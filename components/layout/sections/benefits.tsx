import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Code2",
    title: "On code vraiment, pas de no-code",
    description:
      "Développement sur-mesure. Pas de templates Bubble/Webflow + plugin ChatGPT. Applications scalables et maintenables, intégration profonde à vos systèmes, propriété totale de votre code, évolutivité garantie sans refonte.",
  },
  {
    icon: "Shield",
    title: "Architecture production-ready dès le départ",
    description:
      "Pas de POC jetable qui ne passera jamais en prod. Notre code est pensé pour durer. Tests automatisés et code documenté, monitoring et observabilité intégrés, sécurité et RGPD natifs, performance optimisée dès le jour 1.",
  },
  {
    icon: "Zap",
    title: "Livraison rapide, ROI immédiat",
    description:
      "Premier agent en production en 3 semaines. Premiers gains de productivité mesurables sous 1 mois. Méthodologie agile (sprints de 1-2 semaines), démos hebdomadaires, vous validez on itère, support & maintenance inclus.",
  },
];

export const BenefitsSection = () => {
  return (
    <section
      id="benefits"
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
          Différenciation
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
          Pourquoi choisir Kickup ?
        </h2>
      </div>

      {/* Grid 3 colonnes */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {benefitList.map(({ icon, title, description }, index) => (
          <div
            key={title}
            className="card-hover"
            style={{
              backgroundColor: "var(--bg2)",
              borderRadius: "12px",
              padding: "1.75rem",
            }}
          >
            {/* Icon + numéro */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "1.25rem",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #10b981 0%, #7c3aed 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon
                  name={icon as keyof typeof icons}
                  size={22}
                  color="white"
                />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "3rem",
                  color: "var(--muted)",
                  opacity: 0.2,
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                0{index + 1}
              </span>
            </div>

            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.05rem",
                color: "var(--text)",
                marginBottom: "0.65rem",
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
        ))}
      </div>
    </section>
  );
};
