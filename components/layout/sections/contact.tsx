"use client";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <section id="contact" className="container py-24 sm:py-32">
      <div className="max-w-2xl mx-auto text-center min-h-[80vh] flex flex-col justify-center">
        <div className="mb-12">
          <h2 className="text-lg text-primary mb-2 tracking-wider">Contact</h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Parlons de votre projet
          </h2>
          <p className="text-xl text-muted-foreground">
            Parlons de vos projets, vos enjeux, vos ambitions.
            <br />
            Premier échange gratuit et sans engagement.
          </p>
        </div>

        <div className="bg-gradient-to-r from-emerald-50 to-purple-50 dark:from-emerald-950/20 dark:to-purple-950/20 rounded-2xl p-12 mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-base text-muted-foreground">Écrivez-nous à</p>
              <p className="text-xl sm:text-2xl font-bold break-all">
                contact@kick-up.eu
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Button
              asChild
              size="lg"
              className="w-full md:w-auto bg-gradient-to-r from-emerald-500 to-purple-600 hover:from-emerald-600 hover:to-purple-700"
            >
              <Link href="mailto:contact@kick-up.eu?subject=Demande d'information Kickup">
                Nous contacter
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="text-center text-muted-foreground">
          <p className="text-sm">
            Réponse garantie sous 24h • Échange téléphonique possible
          </p>
        </div>
      </div>
    </section>
  );
};
