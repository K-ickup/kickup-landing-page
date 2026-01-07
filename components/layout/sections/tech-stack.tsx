import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TechCategory {
  category: string;
  technologies: string[];
}

const techStack: TechCategory[] = [
  {
    category: "Développement Web",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "tRPC",
    ],
  },
  {
    category: "Intelligence Artificielle",
    technologies: [
      "OpenAI (GPT-5)",
      "Anthropic (Claude)",
      "LangChain",
      "LlamaIndex",
      "Mastra",
      "n8n",
      "Make",
      "Zapier",
    ],
  },
  {
    category: "Infrastructure & DevOps",
    technologies: [
      "Vercel",
      "Railway",
      "Supabase",
      "GitHub Actions",
      "Docker",
      "Sentry",
      "Posthog",
    ],
  },
];

export const TechStackSection = () => {
  return (
    <section id="tech-stack" className="container py-24 sm:py-32 bg-muted/30">
      <div className="text-center mb-16">
        <h2 className="text-lg text-primary mb-2 tracking-wider">
          Stack technique
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Technologies & Stack technique
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Nous utilisons les frameworks et outils les plus modernes pour
          garantir performance, sécurité et évolutivité.
        </p>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
        {techStack.map(({ category, technologies }) => (
          <Card
            key={category}
            className="bg-card border-2 hover:shadow-lg transition-all duration-300"
          >
            <CardHeader>
              <CardTitle className="text-xl text-center">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 justify-center">
                {technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="px-3 py-1.5 text-sm font-medium hover:bg-gradient-to-r hover:from-emerald-500 hover:to-purple-600 hover:text-white transition-all cursor-default"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
