import { HeroSection } from "@/components/layout/sections/hero";
import { ProblemSection } from "@/components/layout/sections/problem";
import { ServicesSection } from "@/components/layout/sections/services";
import { WhyKickupSection } from "@/components/layout/sections/why-kickup";
import { FounderSection } from "@/components/layout/sections/founder";
import { CasesSection } from "@/components/layout/sections/cases";
import { ContactSection } from "@/components/layout/sections/contact";
import { FooterSection } from "@/components/layout/sections/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <WhyKickupSection />
      <FounderSection />
      <CasesSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
