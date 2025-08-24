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
    question: "Qu'est-ce qui différencie Kickup des autres ESN ?",
    answer:
      "Nous combinons l'agilité d'une startup avec l'expertise technique d'une ESN. Relation directe avec les décideurs, décisions rapides, et focus sur votre business avant tout.",
    value: "item-1",
  },
  {
    question:
      "Travaillez-vous avec des PME ou seulement des grandes entreprises ?",
    answer:
      "Nous nous spécialisons dans l'accompagnement des PME et ETI (20-100M€ de CA). Notre approche sur mesure s'adapte parfaitement aux besoins et budgets des entreprises en croissance.",
    value: "item-2",
  },
  {
    question:
      "Proposez-vous uniquement de la régie ou aussi des projets au forfait ?",
    answer:
      "Nous proposons les deux : projets clés en main au forfait (sites, apps, logiciels) ET expertise en régie pour renforcer vos équipes. Nous nous adaptons à vos besoins.",
    value: "item-3",
  },
  {
    question: "Quelles sont vos technologies de prédilection ?",
    answer:
      "Nous maîtrisons un large stack technologique : React/Next.js, Node.js, Python, PHP, DevOps (AWS, Docker), bases de données, mobile, etc. Nous choisissons la meilleure tech pour votre projet.",
    value: "item-4",
  },
  {
    question: "Comment se déroule un premier échange avec vous ?",
    answer:
      "Premier échange gratuit et sans engagement. Nous écoutons vos enjeux business, analysons vos besoins, et vous proposons une approche personnalisée. Pas de commercial, direct avec les décideurs tech.",
    value: "item-5",
  },
  {
    question: "Travaillez-vous en présentiel ou à distance ?",
    answer:
      "Nous nous adaptons à vos besoins et contraintes. En régie, nous pouvons être présents sur site selon vos exigences. Pour les projets au forfait, nous privilégions le remote avec des points réguliers, mais restons flexibles.",
    value: "item-6",
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
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
