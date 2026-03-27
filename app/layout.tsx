import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "Kickup - Studio IA & Dev",
  description:
    "Studio spécialisé en développement sur-mesure et agents IA pour PME et ETI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@700,800,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
