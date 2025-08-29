import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";

export const metadata = {
  title: "Kickup ESN - Solutions digitales sur mesure pour PME et ETI | Paris",
  description:
    "ESN spécialisée dans l'accompagnement digital des PME et ETI. Sites web, applications métier, logiciels de gestion et consultants en régie. Partenaire de votre croissance digitale.",
  keywords:
    "ESN, Kickup, développement sur mesure PME, site web entreprise, application métier, logiciel gestion, consultant informatique, transformation digitale PME, ESN Paris",
  authors: [{ name: "Kickup ESN" }],
  openGraph: {
    type: "website",
    url: "https://kick-up.eu",
    title: "Kickup ESN - Partenaire digital des PME en croissance",
    description:
      "Solutions digitales sur mesure : sites web, applications métier, logiciels de gestion. Consultants en régie pour renforcer vos équipes.",
    siteName: "Kickup ESN",
    images: [
      {
        url: "https://kick-up.eu/kickup-og-image.png",
        width: 1200,
        height: 630,
        alt: "Kickup - Solutions digitales pour PME",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@KickupESN",
    title: "Kickup ESN - Solutions digitales PME",
    description: "Partenaire digital sur mesure pour PME et ETI en croissance",
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
      <BenefitsSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
