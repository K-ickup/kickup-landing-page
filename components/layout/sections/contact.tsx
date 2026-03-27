"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MapPin, Clock, CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";

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

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.7rem 1rem",
  backgroundColor: "var(--bg)",
  border: "1px solid var(--border)",
  borderRadius: "8px",
  color: "var(--text)",
  fontFamily: "var(--font-body)",
  fontSize: "0.875rem",
  outline: "none",
  transition: "border-color 0.2s ease",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-body)",
  fontSize: "0.8rem",
  fontWeight: 500,
  color: "var(--text)",
  marginBottom: "0.4rem",
};

const errorStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "0.75rem",
  color: "#f87171",
  marginTop: "0.3rem",
};

export const ContactSection = () => {
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
    defaultValues: { consent: false },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Une erreur est survenue");
      setIsSuccess(true);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "6rem 1.5rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        {/* Colonne gauche — infos */}
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              marginBottom: "1.25rem",
              padding: "0.3rem 0.9rem",
              borderRadius: "999px",
              border: "1px solid rgba(0, 212, 255, 0.3)",
              backgroundColor: "rgba(0, 212, 255, 0.06)",
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              color: "var(--accent)",
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Contact
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
              color: "var(--text)",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            Parlons de votre projet.
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              color: "var(--muted)",
              lineHeight: 1.75,
              marginBottom: "2.5rem",
            }}
          >
            Premier échange gratuit et sans engagement. On analyse vos besoins, vous décidez ensuite.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  backgroundColor: "var(--bg2)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Mail size={16} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--muted)", marginBottom: "0.1rem" }}>Email</div>
                <Link
                  href="mailto:contact@kickup.studio"
                  style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--text)", textDecoration: "none", fontWeight: 500 }}
                >
                  contact@kickup.studio
                </Link>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  backgroundColor: "var(--bg2)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <MapPin size={16} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--muted)", marginBottom: "0.1rem" }}>Localisation</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--text)", fontWeight: 500 }}>Paris, France · Remote Europe</div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  backgroundColor: "var(--bg2)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Clock size={16} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--muted)", marginBottom: "0.1rem" }}>Délai de réponse</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--text)", fontWeight: 500 }}>Sous 24h ouvrées</div>
              </div>
            </div>
          </div>
        </div>

        {/* Colonne droite — formulaire */}
        <div
          style={{
            backgroundColor: "var(--bg2)",
            borderRadius: "12px",
            border: "1px solid var(--border)",
            padding: "2rem",
          }}
        >
          {isSuccess ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #10b981 0%, #7c3aed 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.25rem",
                }}
              >
                <CheckCircle2 size={28} color="white" />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: "var(--text)",
                  marginBottom: "0.75rem",
                }}
              >
                Merci ! Message reçu.
              </h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--muted)", marginBottom: "1.5rem" }}>
                Nous vous répondons sous 24h ouvrées.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="btn-outline"
                style={{ fontSize: "0.85rem", padding: "0.5rem 1.25rem" }}
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {/* Nom */}
              <div>
                <label htmlFor="nom" style={labelStyle}>
                  Nom complet <span style={{ color: "#f87171" }}>*</span>
                </label>
                <input
                  id="nom"
                  placeholder="Prénom Nom"
                  style={{ ...inputStyle, borderColor: errors.nom ? "#f87171" : "var(--border)" }}
                  {...register("nom")}
                />
                {errors.nom && <p style={errorStyle}>{errors.nom.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" style={labelStyle}>
                  Email professionnel <span style={{ color: "#f87171" }}>*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="vous@entreprise.fr"
                  style={{ ...inputStyle, borderColor: errors.email ? "#f87171" : "var(--border)" }}
                  {...register("email")}
                />
                {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
              </div>

              {/* Entreprise */}
              <div>
                <label htmlFor="entreprise" style={labelStyle}>
                  Entreprise <span style={{ color: "#f87171" }}>*</span>
                </label>
                <input
                  id="entreprise"
                  placeholder="Nom de votre entreprise"
                  style={{ ...inputStyle, borderColor: errors.entreprise ? "#f87171" : "var(--border)" }}
                  {...register("entreprise")}
                />
                {errors.entreprise && <p style={errorStyle}>{errors.entreprise.message}</p>}
              </div>

              {/* Type de besoin */}
              <div>
                <label style={labelStyle}>
                  Type de besoin <span style={{ color: "#f87171" }}>*</span>
                </label>
                <Select
                  onValueChange={(value) => setValue("besoin", value)}
                  defaultValue={watch("besoin")}
                >
                  <SelectTrigger
                    style={{
                      ...inputStyle,
                      borderColor: errors.besoin ? "#f87171" : "var(--border)",
                    }}
                  >
                    <SelectValue placeholder="Sélectionnez un type de besoin" />
                  </SelectTrigger>
                  <SelectContent
                    style={{
                      backgroundColor: "var(--bg2)",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                    }}
                  >
                    <SelectItem value="Développement d'application web">Développement d'application web</SelectItem>
                    <SelectItem value="Agent IA / Automatisation">Agent IA / Automatisation</SelectItem>
                    <SelectItem value="Les deux">Les deux</SelectItem>
                    <SelectItem value="Autre / Je ne sais pas encore">Autre / Je ne sais pas encore</SelectItem>
                  </SelectContent>
                </Select>
                {errors.besoin && <p style={errorStyle}>{errors.besoin.message}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" style={labelStyle}>Message (optionnel)</label>
                <textarea
                  id="message"
                  placeholder="Décrivez brièvement votre projet ou vos besoins..."
                  rows={4}
                  style={{ ...inputStyle, resize: "vertical" }}
                  {...register("message")}
                />
              </div>

              {/* Consent */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                <input
                  type="checkbox"
                  id="consent"
                  {...register("consent")}
                  style={{
                    marginTop: "2px",
                    width: "16px",
                    height: "16px",
                    flexShrink: 0,
                    accentColor: "var(--accent)",
                  }}
                />
                <label
                  htmlFor="consent"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    color: "var(--muted)",
                    cursor: "pointer",
                    lineHeight: 1.5,
                  }}
                >
                  J'accepte d'être contacté par Kickup{" "}
                  <span style={{ color: "#f87171" }}>*</span>
                </label>
              </div>
              {errors.consent && <p style={errorStyle}>{errors.consent.message}</p>}

              {/* Error */}
              {error && (
                <div
                  style={{
                    padding: "0.875rem 1rem",
                    backgroundColor: "rgba(248,113,113,0.08)",
                    border: "1px solid rgba(248,113,113,0.2)",
                    borderRadius: "8px",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    color: "#f87171",
                  }}
                >
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-accent"
                style={{
                  justifyContent: "center",
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />
                    Envoi en cours...
                  </>
                ) : (
                  "Envoyer ma demande →"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
