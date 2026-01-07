import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Code, Rocket, ArrowRight } from "lucide-react";

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  details: string[];
  deliverable: string;
  icon: React.ElementType;
}

const processSteps: ProcessStepProps[] = [
  {
    step: 1,
    title: "Audit & Cadrage (Gratuit)",
    description:
      "Visio 30min pour comprendre vos besoins et identifier les quick wins.",
    details: [
      "Analyse de vos processus actuels",
      "Identification des gains de productivité",
      "Estimation ROI et faisabilité technique",
      "Proposition d'approche et planning",
    ],
    deliverable: "Document de cadrage + estimation budgétaire sous 48h",
    icon: Search,
  },
  {
    step: 2,
    title: "Développement en sprints agiles",
    description: "Livraisons progressives, démos hebdomadaires.",
    details: [
      "Sprints de 1-2 semaines",
      "Démo à chaque sprint",
      "Feedback continu",
      "Ajustements en temps réel",
    ],
    deliverable:
      "Vous voyez l'avancement chaque semaine, pas de surprise en fin de projet.",
    icon: Code,
  },
  {
    step: 3,
    title: "Déploiement & Support",
    description: "Mise en production accompagnée + support inclus.",
    details: [
      "Déploiement sur votre infrastructure",
      "Formation de vos équipes",
      "Documentation technique et utilisateur",
      "Support & maintenance pendant 3 mois inclus",
    ],
    deliverable: "Vous êtes autonomes, mais on reste disponibles.",
    icon: Rocket,
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="container py-24 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-lg text-primary mb-2 tracking-wider">
          Notre méthode
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          De l'idée à la production en 3 étapes
        </h2>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Connection line for desktop */}
        <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-purple-500 to-purple-600 -z-10"></div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {processSteps.map(
            ({ step, title, description, details, deliverable, icon: Icon }) => (
              <div key={step} className="relative">
                <Card className="bg-card border-2 hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader>
                    {/* Step number badge */}
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-gradient-to-r from-emerald-500 to-purple-600 text-white px-4 py-2 text-base font-bold">
                        Étape {step}
                      </Badge>
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-purple-600 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <CardTitle className="text-xl mb-2">{title}</CardTitle>
                    <p className="text-muted-foreground text-sm">
                      {description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Details list */}
                    <ul className="space-y-2">
                      {details.map((detail, index) => (
                        <li
                          key={index}
                          className="flex items-start text-sm text-muted-foreground"
                        >
                          <ArrowRight className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {/* Deliverable */}
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm font-medium text-foreground">
                        {deliverable}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow between steps (desktop only) */}
                {step < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
