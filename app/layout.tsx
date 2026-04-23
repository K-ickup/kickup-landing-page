import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const TITLE =
  "Kickup | Développement sur-mesure, IA et intégration pour PME et ETI | Paris · Clermont-Ferrand";
const DESCRIPTION =
  "Développement sur-mesure, IA appliquée et intégration systèmes pour PME et ETI. Kickup, expertise technique senior à Paris et Clermont-Ferrand.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kickup.studio"),
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "développement sur-mesure, intégration systèmes, agents IA, ERP CRM, React, TypeScript, PME, ETI, Paris, Clermont-Ferrand",
  authors: [{ name: "Kickup" }],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    url: "https://www.kickup.studio",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Kickup",
    locale: "fr_FR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kickup - Développement sur-mesure, IA et intégration pour PME et ETI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Kickup",
    url: "https://kickup.studio",
    description: DESCRIPTION,
    founder: {
      "@type": "Person",
      name: "Jérémy Dumas",
      jobTitle: "Fondateur & CTO",
    },
    areaServed: { "@type": "Country", name: "France" },
    serviceType: [
      "Développement sur-mesure",
      "Intelligence artificielle appliquée",
      "Intégration systèmes",
    ],
    location: [
      {
        "@type": "Place",
        address: { "@type": "PostalAddress", addressLocality: "Paris", addressCountry: "FR" },
      },
      {
        "@type": "Place",
        address: { "@type": "PostalAddress", addressLocality: "Clermont-Ferrand", addressCountry: "FR" },
      },
    ],
  };

  return (
    <html lang="fr" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
