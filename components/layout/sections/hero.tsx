"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-16 mx-auto py-16 md:py-24">
        {/* Contenu textuel */}
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Rocket className="w-4 h-4" />
            </span>
            <span> L'ESN nouvelle génération </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Boost your
              <span className="text-transparent px-2 bg-gradient-to-r from-emerald-400 to-purple-600 bg-clip-text">
                digital projects
              </span>
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            Partenaire digital sur mesure pour PME et ETI en croissance. On
            parle votre business, on boost vos projets.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow bg-gradient-to-r from-emerald-500 to-purple-600 hover:from-emerald-600 hover:to-purple-700">
              Parlons de votre projet
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link href="mailto:contact@kick-up.eu">contact@kick-up.eu</Link>
            </Button>
          </div>
        </div>

        {/* Logo section - plus simple et intégré */}
        <div className="relative w-full max-w-md mx-auto mt-8">
          {/* Effet de glow subtil */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-purple-600/20 rounded-full blur-3xl scale-110"></div>

          {/* Logo */}
          <div className="relative z-10">
            <Image
              src="/kickup-logo.png"
              alt="Kickup Logo"
              width={120}
              height={120}
              className="mx-auto h-auto w-auto max-w-[100px] sm:max-w-[110px] md:max-w-[120px] drop-shadow-2xl"
              priority
            />
          </div>

          {/* Tagline sous le logo */}
          <div className="text-center mt-4">
            <p className="text-lg text-muted-foreground">
              Solutions complètes et expertises à la demande
            </p>
            <p className="text-sm text-gradient-kickup font-semibold mt-2">
              De l'idée à la mise en œuvre
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
