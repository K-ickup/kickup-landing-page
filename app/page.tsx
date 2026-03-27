import { HeroSection } from "@/components/layout/sections/hero";
import { ClientsBand } from "@/components/layout/sections/clients-band";
import { ServicesSection } from "@/components/layout/sections/services";
import { UseCasesSection } from "@/components/layout/sections/use-cases";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { TechStackSection } from "@/components/layout/sections/tech-stack";
import { TestimonialsSection } from "@/components/layout/sections/testimonials";
import { AboutSection } from "@/components/layout/sections/about";
import { ProcessSection } from "@/components/layout/sections/process";
import { CTABanner } from "@/components/layout/sections/cta-banner";
import { FAQSection } from "@/components/layout/sections/faq";
import { ContactSection } from "@/components/layout/sections/contact";
import { FooterSection } from "@/components/layout/sections/footer";

export const metadata = {
  title: "Kickup - Studio IA & Dev · Applications sur-mesure",
  description:
    "Kickup est un studio spécialisé en développement sur-mesure et agents IA. Applications production-ready livrées en 3 semaines pour PME et ETI.",
  keywords:
    "studio IA, développement React, TypeScript, agents IA, automatisation, PME, ETI, Next.js",
  authors: [{ name: "Kickup" }],
  openGraph: {
    type: "website",
    url: "https://kickup.studio",
    title: "Kickup - Studio IA & Dev · Applications sur-mesure",
    description:
      "Studio spécialisé en développement sur-mesure et agents IA. Applications production-ready livrées en 3 semaines.",
    siteName: "Kickup",
    images: [
      {
        url: "https://kickup.studio/kickup-og-image.png",
        width: 1200,
        height: 630,
        alt: "Kickup - Studio IA & Dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kickup - Studio IA & Dev · Applications sur-mesure",
    description:
      "Studio spécialisé en développement sur-mesure et agents IA. Applications production-ready livrées en 3 semaines.",
    images: ["https://kickup.studio/kickup-og-image.png"],
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
      <ClientsBand />
      <ServicesSection />
      <UseCasesSection />
      <BenefitsSection />
      <TechStackSection />
      <TestimonialsSection />
      <AboutSection />
      <ProcessSection />
      <CTABanner />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
