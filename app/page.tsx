import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";

export const metadata = {
  title: "Kickup ESN - Développement sur mesure & Expertise en régie | Paris",
  description:
    "ESN spécialisée React, Node.js pour PME et ETI. Projets clés en main et consultants en régie. Partenaire digital sur mesure - Paris & France entière.",
  keywords:
    "ESN, Kickup, développement React, consultant régie, ESN Paris, développement sur mesure PME, expertise JavaScript, Node.js, freelance React",
  authors: [{ name: "Kickup ESN" }],
  openGraph: {
    type: "website",
    url: "https://kick-up.eu",
    title: "Kickup ESN - L'ESN nouvelle génération",
    description:
      "Partenaire digital sur mesure pour PME et ETI. Solutions clés en main et expertises en régie.",
    siteName: "Kickup ESN",
    images: [
      {
        url: "https://kick-up.eu/kickup-og-image.png",
        width: 1200,
        height: 630,
        alt: "Kickup - ESN nouvelle génération",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@KickupESN",
    title: "Kickup ESN - Boost your digital projects",
    description: "L'ESN nouvelle génération pour PME et ETI en croissance",
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
  verification: {
    google: "ton-code-google-search-console-ici",
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
