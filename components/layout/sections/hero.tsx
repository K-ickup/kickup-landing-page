"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="container w-full min-h-[80vh] flex items-center justify-center scroll-mt-20"
    >
      <div className="w-full max-w-screen-xl mx-auto py-16 md:py-20">
        <div className="text-center space-y-8 md:space-y-10">
          {/* Badge */}
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Rocket className="w-4 h-4" />
            </span>
            <span> Code production-ready • Livraison sous 3 semaines </span>
          </Badge>

          {/* Titre - Réduit */}
          <div className="max-w-screen-lg mx-auto text-center pt-4 pb-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Applications modernes &
              <span className="text-transparent px-2 bg-gradient-to-r from-emerald-400 to-purple-600 bg-clip-text">
                Solutions IA
              </span>
              sur-mesure
            </h1>
          </div>

          {/* Hook */}
          <p className="max-w-screen-md mx-auto text-2xl md:text-3xl text-muted-foreground font-light pt-4">
            Vos équipes perdent du temps sur des tâches répétitives ?
          </p>

          {/* Solution */}
          <div className="max-w-screen-sm mx-auto space-y-3 pt-2">
            <p className="text-lg md:text-xl text-muted-foreground/90">
              Nous créons des applications et agents IA qui automatisent vos
              workflows métiers.
            </p>
            <p className="text-base md:text-lg text-gradient-kickup font-semibold">
              React/TypeScript + IA générative · PME et ETI
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-8">
            <Button
              asChild
              size="lg"
              className="w-full md:w-auto min-w-[240px] font-bold group/arrow bg-gradient-to-r from-emerald-500 to-purple-600 hover:from-emerald-600 hover:to-purple-700"
            >
              <Link href="#contact">
                Audit gratuit 30min
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full md:w-auto min-w-[240px] font-bold"
            >
              <Link href="#services">Voir nos solutions</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
