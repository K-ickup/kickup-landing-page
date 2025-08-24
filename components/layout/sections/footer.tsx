import { Separator } from "@/components/ui/separator";
import { Rocket, Mail, Phone, MapPin } from "lucide-react";
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
              L'ESN nouvelle génération pour PME et ETI en croissance.
            </p>
            <p className="text-sm font-semibold bg-gradient-to-r from-emerald-400 to-purple-600 bg-clip-text text-transparent">
              Boost your digital projects
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-2">Services</h3>
            <div>
              <Link
                href="#services"
                className="opacity-60 hover:opacity-100 text-sm transition-opacity"
              >
                Projets clés en main
              </Link>
            </div>
            <div>
              <Link
                href="#services"
                className="opacity-60 hover:opacity-100 text-sm transition-opacity"
              >
                Expertises en régie
              </Link>
            </div>
            <div>
              <Link
                href="#services"
                className="opacity-60 hover:opacity-100 text-sm transition-opacity"
              >
                Conseil & Accompagnement
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-2">À propos</h3>
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
                href="#faq"
                className="opacity-60 hover:opacity-100 text-sm transition-opacity"
              >
                FAQ
              </Link>
            </div>
            <div>
              <Link
                href="#contact"
                className="opacity-60 hover:opacity-100 text-sm transition-opacity"
              >
                Contact
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
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>&copy; 2025 Kickup. Tous droits réservés.</div>

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
