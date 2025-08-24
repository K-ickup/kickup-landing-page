import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Target, Users, Rocket } from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
}

const serviceList: ServiceProps[] = [
  {
    title: "Projets clés en main",
    description:
      "Du site vitrine au logiciel métier, nous réalisons vos projets digitaux de A à Z.",
    icon: Target,
    features: [
      "Sites web & e-commerce",
      "Applications mobiles",
      "Logiciels de gestion",
      "Plateformes sur-mesure",
    ],
  },
  {
    title: "Expertises en régie",
    description:
      "Renforcez vos équipes avec nos talents tech adaptés à vos besoins.",
    icon: Users,
    features: [
      "Développeurs fullstack",
      "DevOps & Cloud",
      "Data & IA",
      "Cybersécurité",
    ],
  },
  {
    title: "Conseil & Accompagnement",
    description:
      "Stratégie digitale, architecture technique, pilotage de projet.",
    icon: Rocket,
    features: [
      "Audit technique",
      "Stratégie digitale",
      "Architecture système",
      "Pilotage de projet",
    ],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-lg text-primary mb-2 tracking-wider">Services</h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
        <h3 className="md:w-1/2 mx-auto text-xl text-muted-foreground">
          Solutions complètes et expertises à la demande pour accompagner votre
          croissance digitale.
        </h3>
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        {serviceList.map(({ title, description, icon: Icon, features }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full hover:shadow-lg transition-all duration-300 hover:scale-105"
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
            <CardContent>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-purple-600 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
