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
    icon: "Code2",
    title: "On code vraiment, pas de no-code",
    description:
      "Développement sur-mesure React/TypeScript. Pas de templates Bubble/Webflow + plugin ChatGPT. Applications scalables et maintenables, intégration profonde à vos systèmes, propriété totale de votre code, évolutivité garantie sans refonte.",
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
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-lg text-primary mb-2 tracking-wider">
          Différenciation
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Pourquoi choisir Kickup ?
        </h2>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 w-full">
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
