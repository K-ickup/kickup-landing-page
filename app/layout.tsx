import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const TITLE = "Kickup — Développement sur-mesure et IA pour PME et ETI";
const DESCRIPTION =
  "Kickup accompagne les PME et ETI qui veulent gagner en efficacité et accélérer leur croissance. Développement sur-mesure, IA appliquée, expertise technique senior.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kickup.studio"),
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "développement sur-mesure, agents IA, React, TypeScript, PME, ETI, Clermont-Ferrand",
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
    url: "https://kickup.studio",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Kickup",
    locale: "fr_FR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kickup — Développement sur-mesure et IA pour PME et ETI",
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
  return (
    <html lang="fr" className={inter.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
