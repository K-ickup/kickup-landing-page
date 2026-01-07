"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Loader2, Mail } from "lucide-react";

const contactSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  entreprise: z.string().min(2, "Le nom de l'entreprise est requis"),
  telephone: z.string().optional(),
  besoin: z.string().min(1, "Veuillez sélectionner un type de besoin"),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter d'être contacté",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      consent: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Une erreur est survenue");
      }

      setIsSuccess(true);
      reset();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Une erreur est survenue"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="contact" className="container py-24 sm:py-32">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-emerald-500/20 bg-gradient-to-br from-emerald-50/50 to-purple-50/50 dark:from-emerald-950/20 dark:to-purple-950/20">
            <CardContent className="pt-12 pb-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Merci ! Nous avons bien reçu votre demande.
              </h3>
              <p className="text-muted-foreground mb-6">
                Nous vous répondons sous 24h ouvrées.
                <br />
                En attendant, vous pouvez consulter nos cas clients.
              </p>
              <Button
                onClick={() => setIsSuccess(false)}
                variant="outline"
                className="mt-4"
              >
                Retour à l'accueil
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-lg text-primary mb-2 tracking-wider">Contact</h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Parlons de votre projet
          </h2>
          <p className="text-xl text-muted-foreground">
            Remplissez ce formulaire et nous vous répondons sous 24h
          </p>
        </div>

        <Card className="bg-muted/60 dark:bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              Demande de contact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Nom */}
              <div className="space-y-2">
                <Label htmlFor="nom">
                  Nom complet <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="nom"
                  placeholder="Jean Dupont"
                  {...register("nom")}
                  className={errors.nom ? "border-red-500" : ""}
                />
                {errors.nom && (
                  <p className="text-sm text-red-500">{errors.nom.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email professionnel <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jean.dupont@entreprise.com"
                  {...register("email")}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Entreprise */}
              <div className="space-y-2">
                <Label htmlFor="entreprise">
                  Entreprise <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="entreprise"
                  placeholder="Nom de votre entreprise"
                  {...register("entreprise")}
                  className={errors.entreprise ? "border-red-500" : ""}
                />
                {errors.entreprise && (
                  <p className="text-sm text-red-500">
                    {errors.entreprise.message}
                  </p>
                )}
              </div>

              {/* Téléphone */}
              <div className="space-y-2">
                <Label htmlFor="telephone">Téléphone (optionnel)</Label>
                <Input
                  id="telephone"
                  type="tel"
                  placeholder="+33 6 12 34 56 78"
                  {...register("telephone")}
                />
              </div>

              {/* Type de besoin */}
              <div className="space-y-2">
                <Label htmlFor="besoin">
                  Votre besoin <span className="text-red-500">*</span>
                </Label>
                <Select
                  onValueChange={(value) => setValue("besoin", value)}
                  defaultValue={watch("besoin")}
                >
                  <SelectTrigger
                    className={errors.besoin ? "border-red-500" : ""}
                  >
                    <SelectValue placeholder="Sélectionnez un type de besoin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Développement d'application web">
                      Développement d'application web
                    </SelectItem>
                    <SelectItem value="Agent IA / Automatisation">
                      Agent IA / Automatisation
                    </SelectItem>
                    <SelectItem value="Les deux">Les deux</SelectItem>
                    <SelectItem value="Autre / Je ne sais pas encore">
                      Autre / Je ne sais pas encore
                    </SelectItem>
                  </SelectContent>
                </Select>
                {errors.besoin && (
                  <p className="text-sm text-red-500">{errors.besoin.message}</p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">Message (optionnel)</Label>
                <Textarea
                  id="message"
                  placeholder="Décrivez brièvement votre projet ou vos besoins..."
                  rows={4}
                  {...register("message")}
                />
              </div>

              {/* Consent */}
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="consent"
                  {...register("consent")}
                  className="mt-1 h-4 w-4 rounded border-gray-300"
                />
                <Label
                  htmlFor="consent"
                  className="text-sm font-normal cursor-pointer"
                >
                  J'accepte d'être contacté par Kickup{" "}
                  <span className="text-red-500">*</span>
                </Label>
              </div>
              {errors.consent && (
                <p className="text-sm text-red-500">{errors.consent.message}</p>
              )}

              {/* Error message */}
              {error && (
                <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg">
                  <p className="text-sm text-red-600 dark:text-red-400">
                    {error}
                  </p>
                </div>
              )}

              {/* Submit button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-500 to-purple-600 hover:from-emerald-600 hover:to-purple-700"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  "Envoyer ma demande"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
