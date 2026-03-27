import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Combien coûte un projet typique ?",
    answer:
      "Nous adaptons nos tarifs à votre projet et recommandons une approche progressive.\n\nPoint d'entrée (2-3 semaines) :\n• POC/Prototype fonctionnel (8-12K€)\n• Agent IA simple 1 use case (8-15K€)\n• Automatisation workflow basique (5-10K€)\n\nProjets standards (1-3 mois) :\n• Application web complète (20-40K€)\n• Agent IA avec intégrations multiples (15-30K€)\n• Solution complète app + agents IA (40-60K€)\n\nTous nos projets incluent : développement, tests, déploiement, formation, 3 mois de support.\n\nNous recommandons de commencer par un POC pour valider l'approche, puis d'étendre selon les résultats.",
    value: "item-1",
  },
  {
    question: "Puis-je commencer par un petit projet test ?",
    answer:
      "Absolument, c'est même notre recommandation !\n\nApproche typique :\n1) POC sur 1 use case précis (2-3 semaines, 8-12K€)\n2) Validation des résultats et ROI mesuré\n3) Extension progressive selon vos besoins\n\nExemples de POC :\n• Automatiser la qualification d'un type de lead spécifique\n• Agent support sur vos 20 questions les plus fréquentes\n• Extraction automatique d'un type de document (factures, CV, etc.)\n\nPas d'engagement long terme. Vous évaluez à chaque étape.",
    value: "item-2",
  },
  {
    question: "Quel délai pour voir les premiers résultats ?",
    answer:
      "• POC fonctionnel : 2-3 semaines\n• Agent IA en production : 3-4 semaines\n• Application web complète : 2-3 mois\n\nNous livrons de manière incrémentale : vous avez des fonctionnalités utilisables et testables dès les premières semaines, pas de surprise en fin de projet.",
    value: "item-3",
  },
  {
    question: "Travaillez-vous avec des sous-traitants ?",
    answer:
      "Non, pas de sous-traitance. Développement en direct par des seniors, recrutés et supervisés en France. Qualité, réactivité et sécurité garanties.",
    value: "item-4",
  },
  {
    question: "Quels secteurs d'activité couvrez-vous ?",
    answer:
      "Nous travaillons principalement avec des PME et ETI (50-500 personnes) dans ces secteurs :\n\n• SaaS B2B et éditeurs de logiciels\n• Agences et ESN\n• E-commerce et retail digital\n• Services B2B (conseil, finance, RH, etc.)\n\nNotre expertise : automatiser les processus répétitifs et développer des applications métiers sur-mesure.\n\nSi vous avez des tâches chronophages à automatiser ou des besoins d'applications spécifiques, nous pouvons probablement vous aider.",
    value: "item-5",
  },
  {
    question: "Quelle est la différence avec un consultant IA no-code ?",
    answer:
      "Nous développons de vraies applications et agents IA en code.\n\nConsultants no-code (Make, Zapier, Bubble) :\n• Templates et limitations des plateformes\n• Évolutivité limitée\n• Dépendance aux outils tiers\n• Difficile à industrialiser\n\nNotre approche :\n• Applications sur-mesure scalables et maintenables\n• Intégration profonde à vos systèmes existants\n• Propriété totale de votre code\n• Architecture production-ready dès le départ\n\nCas d'usage : consultants no-code pour du prototypage rapide, nous pour des solutions qui durent et qui scalent.",
    value: "item-6",
  },
  {
    question: "Proposez-vous de la maintenance après livraison ?",
    answer:
      "Oui, 3 mois de support inclus après la mise en production.\n\nSupport inclus (3 mois) :\n• Corrections de bugs\n• Ajustements mineurs\n• Support technique (email/Slack)\n• Monitoring et alertes\n\nPuis contrats de maintenance sur-mesure :\n• Support technique prioritaire\n• Mises à jour et évolutions\n• Optimisations continues\n• Hébergement et infrastructure\n\nTarif sur devis selon la complexité de votre solution.",
    value: "item-7",
  },
  {
    question:
      "Comment garantissez-vous la sécurité et la confidentialité de nos données ?",
    answer:
      "La sécurité est intégrée dès la conception :\n\n• Hébergement EU (Vercel, Railway, Supabase)\n• Conformité RGPD native\n• Chiffrement des données sensibles\n• APIs sécurisées et authentifiées\n• Accès limité selon les rôles\n• Logs et monitoring en temps réel\n\nPour les agents IA :\n• Vos données ne servent pas à entraîner les modèles (OpenAI/Anthropic Enterprise)\n• Pas de stockage permanent des prompts sensibles\n• Anonymisation possible selon vos besoins\n\nNDA signé avant tout échange de données sensibles.",
    value: "item-8",
  },
  {
    question: "Avez-vous des exemples de projets réalisés ?",
    answer:
      "Oui. Côté développement web : 7+ ans de réalisations pour Carrier, Norauto, Mobivia, Insy2s et d'autres (certains sous NDA). Côté IA : premiers projets livrés — agent de qualification de leads B2B et automatisation de workflows documentaires. Nous proposons des POC à tarif accessible pour que vous puissiez évaluer notre delivery avant tout engagement majeur.",
    value: "item-9",
  },
  {
    question: "Quelle est votre méthode de travail ?",
    answer:
      "Méthodologie agile en 3 phases.\n\nPhase 1 - Audit & Cadrage (gratuit, 30min) :\n• Analyse de vos besoins et processus\n• Identification des gains de productivité\n• Estimation ROI et faisabilité technique\n• Document de cadrage + devis sous 48h\n\nPhase 2 - Développement en sprints (1-2 semaines) :\n• Démo à chaque fin de sprint\n• Feedback continu et ajustements\n• Code review et tests automatisés\n• Vous voyez l'avancement chaque semaine\n\nPhase 3 - Déploiement & Support (3 mois inclus) :\n• Mise en production accompagnée\n• Formation de vos équipes\n• Documentation complète\n• Support réactif (email/Slack)\n\nCommunication : Slack ou email, points hebdomadaires, transparence totale.",
    value: "item-10",
  },
];

export const FAQSection = () => {
  return (
    <section
      id="faq"
      style={{
        backgroundColor: "var(--bg2)",
        padding: "6rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
            FAQ
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              color: "var(--text)",
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
              lineHeight: 1.2,
            }}
          >
            Questions fréquentes
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              color: "var(--muted)",
            }}
          >
            Vous avez d'autres questions ? Contactez-nous directement !
          </p>
        </div>

        {/* Accordion */}
        <div
          style={{
            backgroundColor: "var(--bg)",
            borderRadius: "12px",
            border: "1px solid var(--border)",
            overflow: "hidden",
          }}
        >
          <Accordion type="single" collapsible>
            {FAQList.map(({ question, answer, value }) => (
              <AccordionItem
                key={value}
                value={value}
                style={{
                  borderBottom: "1px solid var(--border)",
                  padding: "0 1.5rem",
                }}
              >
                <AccordionTrigger
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: "var(--text)",
                    textAlign: "left",
                    paddingTop: "1.25rem",
                    paddingBottom: "1.25rem",
                  }}
                  className="hover:no-underline [&:hover]:text-[var(--accent)] transition-colors"
                >
                  {question}
                </AccordionTrigger>
                <AccordionContent
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "var(--muted)",
                    lineHeight: 1.7,
                    paddingBottom: "1.25rem",
                    whiteSpace: "pre-line",
                  }}
                >
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
