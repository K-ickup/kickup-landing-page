import { Separator } from "@/components/ui/separator";
import { Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-1">
            <Link href="#" className="flex items-center mb-4">
              <div className="w-12 h-12 relative">
                <Image
                  src="/kickup-logo-round.png"
                  alt="Kickup"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Applications modernes & Solutions IA
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Nous aidons les PME et ETI à automatiser leurs processus métiers
              grâce au développement web sur-mesure et à l'intelligence
              artificielle.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-2">Services</h3>
            <div>
              <Link
                href="#services"
                className="opacity-60 hover:opacity-100 text-sm transition-opacity"
              >
                Développement web
              </Link>
            </div>
            <div>
              <Link
                href="#services"
                className="opacity-60 hover:opacity-100 text-sm transition-opacity"
              >
                Solutions IA intégrées
              </Link>
            </div>
            <div>
              <Link
                href="#services"
                className="opacity-60 hover:opacity-100 text-sm transition-opacity"
              >
                Agents autonomes
              </Link>
            </div>
            <div>
              <Link
                href="#contact"
                className="opacity-60 hover:opacity-100 text-sm transition-opacity"
              >
                Audit gratuit
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-2">Ressources</h3>
            <div>
              <Link
                href="#use-cases"
                className="opacity-60 hover:opacity-100 text-sm transition-opacity"
              >
                Cas clients
              </Link>
            </div>
            <div>
              <Link
                href="#benefits"
                className="opacity-60 hover:opacity-100 text-sm transition-opacity"
              >
                Pourquoi Kickup
              </Link>
            </div>
            <div>
              <Link
                href="#process"
                className="opacity-60 hover:opacity-100 text-sm transition-opacity"
              >
                Notre méthode
              </Link>
            </div>
            <div>
              <Link
                href="#tech-stack"
                className="opacity-60 hover:opacity-100 text-sm transition-opacity"
              >
                Technologies
              </Link>
            </div>
            <div>
              <Link
                href="#faq"
                className="opacity-60 hover:opacity-100 text-sm transition-opacity"
              >
                FAQ
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg mb-2">Contact</h3>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              <Link
                href="mailto:contact@kick-up.eu"
                className="hover:text-foreground transition-colors"
              >
                contact@kick-up.eu
              </Link>
            </div>

            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p>Basé à Paris, France</p>
                <p>Interventions nationales & remote</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>&copy; 2026 Kickup (2MS-IT EURL). Tous droits réservés.</div>

          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="hover:text-foreground transition-colors"
            >
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
