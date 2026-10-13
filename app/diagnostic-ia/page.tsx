import type { Metadata } from "next";
import { DiagnosticHeroSection } from "@/components/layout/sections/diagnostic/hero";
import { DiagnosticAudienceSection } from "@/components/layout/sections/diagnostic/audience";
import { DiagnosticStepsSection } from "@/components/layout/sections/diagnostic/steps";
import { DiagnosticOutcomesSection } from "@/components/layout/sections/diagnostic/outcomes";
import { DiagnosticBookingSection } from "@/components/layout/sections/diagnostic/booking";
import { DiagnosticFaqSection } from "@/components/layout/sections/diagnostic/faq";
import { DiagnosticFinalCtaSection } from "@/components/layout/sections/diagnostic/final-cta";
import { FooterSection } from "@/components/layout/sections/footer";

const TITLE = "Diagnostic IA gratuit pour TPE et PME | Kickup";
const DESCRIPTION =
  "45 minutes en visio pour identifier le levier IA le plus rentable de votre entreprise. Gratuit et sans engagement.";
const PAGE_URL = "https://www.kickup.studio/diagnostic-ia";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Kickup",
    locale: "fr_FR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export default function DiagnosticIA() {
  return (
    <>
      <DiagnosticHeroSection />
      <DiagnosticAudienceSection />
      <DiagnosticStepsSection />
      <DiagnosticOutcomesSection />
      <DiagnosticBookingSection />
      <DiagnosticFaqSection />
      <DiagnosticFinalCtaSection />
      <FooterSection />
    </>
  );
}
