import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Code2, Brain, Workflow, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  stack?: string;
  cta: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Développement d'applications web sur-mesure",
    description:
      "Applications React/Next.js pensées pour durer. Architecture scalable, code maintenable, interfaces modernes.",
    icon: Code2,
    features: [
      "Dashboards et outils de pilotage",
      "CRM et outils métiers personnalisés",
      "Plateformes e-commerce évolutives",
      "Applications SaaS multi-tenants",
    ],
    stack: "React, Next.js, TypeScript, Tailwind CSS, PostgreSQL",
    cta: "Discutons de votre projet",
  },
  {
    title: "Applications intelligentes avec IA embarquée",
    description:
      "Ajoutez de l'intelligence à vos outils existants. Agents IA intégrés nativement dans vos applications.",
    icon: Brain,
    features: [
      "Assistant métier contextuel dans vos apps",
      "Recommandations personnalisées automatiques",
      "Analyse prédictive et aide à la décision",
      "Chatbots intelligents intégrés à votre interface",
    ],
    cta: "Explorer les possibilités",
  },
  {
    title: "Agents IA autonomes pour vos workflows métiers",
    description:
      "Automatisez vos tâches répétitives avec des agents intelligents. Déploiement rapide, ROI mesurable sous 4 semaines.",
    icon: Workflow,
    features: [
      "Qualification automatique de leads (scoring + enrichissement)",
      "Support client tier 1 (FAQ + routing intelligent)",
      "Automatisation de workflows internes",
      "Analyse et synthèse de documents/emails",
    ],
    stack: "OpenAI, Anthropic, LangChain, n8n, Mastra",
    cta: "Réserver un audit gratuit",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-lg text-primary mb-2 tracking-wider">Services</h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nos expertises : développement & intelligence artificielle
        </h2>
        <h3 className="md:w-2/3 mx-auto text-xl text-muted-foreground">
          Nous combinons développement d'applications modernes et intégration
          d'IA pour créer des solutions qui évoluent avec vos besoins.
        </h3>
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        {serviceList.map(({ title, description, icon: Icon, features, stack, cta }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full hover:shadow-lg transition-all duration-300 hover:scale-105 flex flex-col"
          >
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription className="text-muted-foreground">
                {description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-4">
                <p className="text-sm font-semibold mb-3 text-foreground">
                  {title.includes("web") ? "Idéal pour :" : title.includes("intelligentes") ? "Cas d'usage :" : "Agents que nous déployons :"}
                </p>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start text-sm text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-purple-600 rounded-full mr-3 flex-shrink-0 mt-1.5"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              {stack && (
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold">Stack :</span> {stack}
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter className="pt-0">
              <Button
                asChild
                variant="outline"
                className="w-full group hover:bg-gradient-to-r hover:from-emerald-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all"
              >
                <Link href="#contact">
                  {cta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
