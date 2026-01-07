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
      "Nous adaptons nos tarifs à votre projet et recommandons une approche progressive.\n\nPoint d'entrée (2-3 semaines) :\n• POC/Prototype fonctionnel (5-10K€)\n• Agent IA simple 1 use case (8-15K€)\n• Automatisation workflow basique (5-10K€)\n\nProjets standards (1-3 mois) :\n• Application web complète (20-40K€)\n• Agent IA avec intégrations multiples (15-30K€)\n• Solution complète app + agents IA (40-60K€)\n\nTous nos projets incluent : développement, tests, déploiement, formation, 3 mois de support.\n\nNous recommandons de commencer par un POC pour valider l'approche, puis d'étendre selon les résultats.",
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
      "• POC fonctionnel : 2-3 semaines\n• Agent IA en production : 3-4 semaines\n• Application web complète : 2-3 mois\n\nNous livrons de manière incrémentale : vous avez des fonctionnalités utilisables et testables dès les premières semaines, pas de surprise en fin de projet.\n\nPremiers gains de productivité mesurables : sous 1 mois après déploiement.",
    value: "item-3",
  },
  {
    question: "Travaillez-vous avec des sous-traitants ?",
    answer:
      "Non, pas de sous-traitance.\n\nPhase actuelle : développement en direct par le fondateur (développeur senior React/TypeScript avec 6+ ans d'expérience).\n\nÀ terme : équipe de développeurs seniors supervisés directement, recrutés et formés en France.\n\nNous ne sous-traitons jamais à l'étranger. Qualité, réactivité et sécurité garanties.",
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
      "Nous développons de vraies applications et agents IA en code.\n\nConsultants no-code (Make, Zapier, Bubble) :\n• Templates et limitations des plateformes\n• Évolutivité limitée\n• Dépendance aux outils tiers\n• Difficile à industrialiser\n\nNotre approche (React/TypeScript + IA) :\n• Applications sur-mesure scalables et maintenables\n• Intégration profonde à vos systèmes existants\n• Propriété totale de votre code\n• Architecture production-ready dès le départ\n\nCas d'usage : consultants no-code pour du prototypage rapide, nous pour des solutions qui durent et qui scalent.",
    value: "item-6",
  },
  {
    question: "Proposez-vous de la maintenance après livraison ?",
    answer:
      "Oui, 3 mois de support inclus après la mise en production.\n\nSupport inclus (3 mois) :\n• Corrections de bugs\n• Ajustements mineurs\n• Support technique (email/Slack)\n• Monitoring et alertes\n\nPuis contrats de maintenance sur-mesure :\n• Support technique prioritaire\n• Mises à jour et évolutions\n• Optimisations continues\n• Hébergement et infrastructure\n\nÀ partir de 800€/mois selon la complexité de votre solution.",
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
      "Nous construisons actuellement notre portfolio de projets IA.\n\nExpertise technique démontrée :\n• 6+ ans de développement React/TypeScript en production\n• Applications web pour des PME et ETI (NDA en cours)\n• Intégrations complexes (APIs, CRM, outils métiers)\n• Architecture moderne et scalable\n\nPremiers projets IA en cours de livraison :\n• Agent de qualification de leads (B2B SaaS)\n• Automatisation de workflows documentaires (services)\n\nNous sommes transparents sur notre positionnement : expertise dev confirmée, spécialisation IA en construction.\n\nC'est pourquoi nous proposons des POC à tarif accessible pour vous permettre d'évaluer notre capacité de livraison avant tout engagement majeur.",
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
    <section id="faq" className="container md:w-[800px] py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQ
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Questions fréquentes
        </h2>
        <p className="text-muted-foreground">
          Vous avez d'autres questions ? Contactez-nous directement !
        </p>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left hover:text-primary transition-colors">
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
