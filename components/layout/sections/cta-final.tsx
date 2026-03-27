"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export const CTAFinalSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 via-purple-600 to-purple-700 p-12 md:p-16 text-white shadow-2xl">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]"></div>

          <div className="relative z-10 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Prêt à automatiser vos processus ?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Réservez un audit gratuit de 30 minutes.
              <br />
              On analyse vos besoins, vous décidez ensuite.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-purple-600 hover:bg-white/90 font-bold text-lg px-8 py-6 group"
              >
                <Link href="#contact">
                  Réserver mon audit gratuit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6"
              >
                <Link href="mailto:contact@kickup.studio">
                  <Mail className="mr-2 w-5 h-5" />
                  contact@kickup.studio
                </Link>
              </Button>
            </div>

            <p className="text-sm text-white/80 pt-4">
              Réponse garantie sous 24h • Sans engagement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
