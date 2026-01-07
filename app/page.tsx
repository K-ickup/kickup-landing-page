import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactFormSection } from "@/components/layout/sections/contact-form";
import { CTAFinalSection } from "@/components/layout/sections/cta-final";
import { FAQSection } from "@/components/layout/sections/faq";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ProcessSection } from "@/components/layout/sections/process";
import { ServicesSection } from "@/components/layout/sections/services";
import { TechStackSection } from "@/components/layout/sections/tech-stack";
import { UseCasesSection } from "@/components/layout/sections/use-cases";

export const metadata = {
  title:
    "Kickup ESN IA - Applications web & Solutions IA sur-mesure | React, TypeScript, Agents intelligents",
  description:
    "ESN spécialisée IA : développement d'applications React et déploiement d'agents IA pour PME et ETI. De la qualification de leads à l'automatisation support : solutions sur-mesure qui passent en production.",
  keywords:
    "ESN IA, ESN Paris, ESN spécialisée IA, développement React, applications web sur-mesure, agents IA, automatisation IA, TypeScript, Next.js, LangChain, OpenAI, Anthropic Claude, qualification leads IA, support client automatisé, workflow automation, PME ETI",
  authors: [{ name: "Kickup ESN IA" }],
  openGraph: {
    type: "website",
    url: "https://kick-up.eu",
    title: "Kickup ESN IA - Applications web & Solutions IA sur-mesure",
    description:
      "ESN spécialisée en développement web et intelligence artificielle. Du développement web au déploiement d'agents intelligents. Nous créons des solutions digitales qui automatisent vos processus métiers.",
    siteName: "Kickup ESN IA",
    images: [
      {
        url: "https://kick-up.eu/kickup-og-image.png",
        width: 1200,
        height: 630,
        alt: "Kickup ESN IA - Applications web & Solutions IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@KickupESN",
    title: "Kickup - Applications web & Solutions IA sur-mesure",
    description:
      "Du développement web au déploiement d'agents intelligents. Nous créons des solutions digitales qui automatisent vos processus métiers.",
    images: ["https://kick-up.eu/kickup-og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <UseCasesSection />
      <BenefitsSection />
      <TechStackSection />
      <ProcessSection />
      <CTAFinalSection />
      <ContactFormSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
