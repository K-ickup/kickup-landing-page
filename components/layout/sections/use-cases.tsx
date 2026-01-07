import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, MessageSquare, Workflow, CheckCircle2, Clock } from "lucide-react";

interface UseCaseProps {
  title: string;
  problem: string;
  solution: string;
  results: string[];
  timeline: string;
  technologies: string;
  icon: React.ElementType;
}

const useCasesList: UseCaseProps[] = [
  {
    title: "Agent de qualification de leads automatique",
    problem:
      "Vos commerciaux passent 60% de leur temps sur des leads non qualifiés. Taux de conversion faible, frustration des équipes, opportunités manquées.",
    solution:
      "Agent IA qui analyse, enrichit et score automatiquement chaque lead entrant",
    results: [
      "Extraction automatique des informations (LinkedIn, site web, bases publiques)",
      "Scoring de pertinence selon vos critères métiers",
      "Priorisation intelligente des leads chauds",
      "Synchronisation automatique avec votre CRM",
      "+50% de leads qualifiés, -40% de temps commercial perdu",
    ],
    timeline: "3 semaines",
    technologies: "React dashboard + agents LangChain + intégration CRM",
    icon: Target,
  },
  {
    title: "Agent support client tier 1 disponible 24/7",
    problem:
      "80% des questions support sont répétitives. Temps d'attente élevés, équipes débordées, satisfaction client en baisse.",
    solution:
      "Agent IA conversationnel qui gère automatiquement les demandes courantes",
    results: [
      "Réponses instantanées aux questions fréquentes",
      "Accès à votre documentation et base de connaissances",
      "Escalade intelligente vers humain si nécessaire",
      "Widget intégré à votre site ou app",
      "-80% de charge tier 1, satisfaction client +35%",
    ],
    timeline: "2-3 semaines",
    technologies: "Widget React + RAG + API Anthropic/OpenAI",
    icon: MessageSquare,
  },
  {
    title: "Automatisation de workflows internes",
    problem:
      "Validation de documents, extraction de données, mise à jour de tableaux... Tâches manuelles chronophages qui ralentissent vos équipes.",
    solution:
      "Agents IA qui automatisent vos processus répétitifs",
    results: [
      "Extraction automatique de factures → comptabilité",
      "Analyse de CVs → scoring RH automatique",
      "Synthèse de réunions → mise à jour CRM",
      "Validation de conformité documents → workflow validation",
      "5-10h/semaine gagnées par collaborateur",
    ],
    timeline: "2-4 semaines selon complexité",
    technologies: "n8n / Make + APIs IA + intégrations métiers",
    icon: Workflow,
  },
];

export const UseCasesSection = () => {
  return (
    <section id="use-cases" className="container py-24 sm:py-32 bg-muted/30">
      <div className="text-center mb-16">
        <h2 className="text-lg text-primary mb-2 tracking-wider">
          Cas d'usage
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          L'IA au service de votre productivité
        </h2>
        <h3 className="md:w-2/3 mx-auto text-xl text-muted-foreground">
          Des solutions concrètes qui génèrent un ROI mesurable en quelques
          semaines.
        </h3>
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        {useCasesList.map(
          ({
            title,
            problem,
            solution,
            results,
            timeline,
            technologies,
            icon: Icon,
          }) => (
            <Card
              key={title}
              className="bg-card h-full hover:shadow-xl transition-all duration-300 flex flex-col border-2"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl mb-3">{title}</CardTitle>
              </CardHeader>

              <CardContent className="flex-1 space-y-6">
                {/* Problem */}
                <div>
                  <Badge variant="destructive" className="mb-2">
                    Le problème
                  </Badge>
                  <CardDescription className="text-sm">
                    {problem}
                  </CardDescription>
                </div>

                {/* Solution */}
                <div>
                  <Badge
                    variant="outline"
                    className="mb-2 border-emerald-500 text-emerald-600 dark:text-emerald-400"
                  >
                    Notre solution
                  </Badge>
                  <p className="text-sm font-medium mb-3">{solution}</p>
                  <ul className="space-y-2">
                    {results.map((result, index) => (
                      <li
                        key={index}
                        className="flex items-start text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline & Tech */}
                <div className="pt-4 border-t border-border space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="font-semibold">Mise en œuvre :</span>
                    <span className="text-muted-foreground">{timeline}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold">Technologies :</span>{" "}
                    {technologies}
                  </p>
                </div>
              </CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
