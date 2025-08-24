import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Zap",
    title: "Mindset Startup",
    description:
      "Agilité et réactivité d'une startup dans l'univers ESN traditionnel. Décisions rapides, pas de bureaucratie.",
  },
  {
    icon: "MessageSquare",
    title: "On parle business",
    description:
      "Nous comprenons vos enjeux métier avant tout. Solutions alignées sur votre croissance, pas juste de la tech.",
  },
  {
    icon: "Users",
    title: "Relation directe",
    description:
      "Pas d'intermédiaire commercial. Contact direct avec les décideurs. Communication fluide et transparente.",
  },
  {
    icon: "Rocket",
    title: "Ultra-réactif",
    description:
      "On s'adapte à votre rythme. Mise en œuvre rapide, livraisons fréquentes, feedback continu.",
  },
  {
    icon: "Handshake",
    title: "Partenariat long terme",
    description:
      "On grandit avec vous. Contrats pluriannuels, relation de confiance, accompagnement dans la durée.",
  },
  {
    icon: "Award",
    title: "Expertise confirmée",
    description:
      "Équipe expérimentée sur les technologies modernes et les grands comptes. Qualité professionnelle garantie.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-lg text-primary mb-2 tracking-wider">Avantages</h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Pourquoi Kickup ?
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          L'ESN nouvelle génération qui combine l'agilité startup avec
          l'expertise technique pour accélérer votre transformation digitale.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {benefitList.map(({ icon, title, description }, index) => (
          <Card
            key={title}
            className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number hover:shadow-lg hover:scale-105"
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="white"
                    className="text-white"
                  />
                </div>
                <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                  0{index + 1}
                </span>
              </div>

              <CardTitle className="text-lg">{title}</CardTitle>
            </CardHeader>

            <CardContent className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
