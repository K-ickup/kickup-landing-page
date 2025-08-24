import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";

export const metadata = {
  title: "Kickup - Boost your digital projects",
  description:
    "L'ESN nouvelle génération pour PME et ETI en croissance. Partenaire digital sur mesure - Solutions complètes et expertises à la demande.",
  keywords:
    "ESN, développement, régie, conseil digital, PME, startup, React, Next.js, Paris",
  openGraph: {
    type: "website",
    url: "https://kick-up.eu",
    title: "Kickup - Boost your digital projects",
    description: "L'ESN nouvelle génération pour PME et ETI en croissance",
    images: [
      {
        url: "https://kick-up.eu/og-kickup.jpg",
        width: 1200,
        height: 630,
        alt: "Kickup - ESN nouvelle génération",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://kick-up.eu",
    title: "Kickup - Boost your digital projects",
    description: "L'ESN nouvelle génération pour PME et ETI en croissance",
    images: ["https://kick-up.eu/og-kickup.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
