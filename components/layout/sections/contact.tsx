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

// ─── Schema ───────────────────────────────────────────────────────────────────

const contactSchema = z.object({
  nom:        z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email:      z.string().email("Email invalide"),
  entreprise: z.string().min(2, "Le nom de l'entreprise est requis"),
  telephone:  z.string().optional(),
  besoin:     z.string().min(1, "Veuillez sélectionner un type de besoin"),
  message:    z.string().optional(),
  consent:    z.boolean().refine((v) => v === true, {
    message: "Vous devez accepter d'être contacté",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

// ─── Kickup dark palette (local constants) ────────────────────────────────────

const C = {
  sectionBg:   "#1A1A18",
  cardBg:      "#242422",
  cardBorder:  "rgba(255,255,255,0.12)",
  iconBg:      "#2E2E2C",
  iconBorder:  "rgba(255,255,255,0.12)",
  fieldBg:     "#2E2E2C",
  fieldBorder: "rgba(255,255,255,0.15)",
  text:        "#F8F8F6",
  muted:       "rgba(248,248,246,0.6)",
  label:       "#F8F8F6",
  accent:      "#1A5CFF",
  accentDark:  "#1248d9",
  error:       "#f87171",
} as const;

// ─── Shared style fragments ───────────────────────────────────────────────────

const inputStyle: React.CSSProperties = {
  width:           "100%",
  padding:         "0.7rem 1rem",
  backgroundColor: C.fieldBg,
  border:          `1px solid ${C.fieldBorder}`,
  borderRadius:    8,
  color:           C.text,
  fontSize:        "0.875rem",
  outline:         "none",
  transition:      "border-color 0.2s ease",
  fontFamily:      "inherit",
};

const labelStyle: React.CSSProperties = {
  display:      "block",
  fontSize:     "0.8rem",
  fontWeight:   500,
  color:        C.label,
  marginBottom: "0.4rem",
};

const errorStyle: React.CSSProperties = {
  fontSize:   "0.75rem",
  color:      C.error,
  marginTop:  "0.3rem",
};

// ─── Component ────────────────────────────────────────────────────────────────

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess,   setIsSuccess]   = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    setValue,
    watch,
    reset,
  } = useForm<ContactFormData>({
    resolver:        zodResolver(contactSchema),
    mode:            "onSubmit",
    reValidateMode:  "onChange",
    defaultValues:   { consent: false },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Une erreur est survenue");
      setIsSuccess(true);
      reset();
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      style={{ backgroundColor: C.sectionBg, padding: "6rem 1.5rem" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap:                 "4rem",
            alignItems:          "start",
          }}
        >

          {/* ── Colonne gauche — infos ── */}
          <div>
            {/* Surtitre chip */}
            <span
              style={{
                display:         "inline-flex",
                alignItems:      "center",
                marginBottom:    "1.25rem",
                padding:         "0.3rem 0.9rem",
                borderRadius:    999,
                border:          "1px solid rgba(26,92,255,0.4)",
                backgroundColor: "rgba(26,92,255,0.08)",
                fontSize:        "0.75rem",
                fontWeight:      600,
                letterSpacing:   "0.06em",
                textTransform:   "uppercase",
                color:           C.accent,
              }}
            >
              Contact
            </span>

            <h2
              style={{
                fontWeight:    800,
                fontSize:      "clamp(1.75rem, 4vw, 2.25rem)",
                color:         C.text,
                letterSpacing: "-0.02em",
                lineHeight:    1.2,
                marginBottom:  "1rem",
              }}
            >
              Parlons de votre projet.
            </h2>

            <p
              style={{
                fontSize:     "0.95rem",
                color:        C.muted,
                lineHeight:   1.75,
                marginBottom: "2.5rem",
              }}
            >
              Premier échange gratuit et sans engagement. On analyse vos besoins,
              vous décidez ensuite.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                {
                  Icon:    Mail,
                  label:   "Email",
                  content: (
                    <Link
                      href="mailto:contact@kickup.studio"
                      style={{ fontSize: "0.9rem", color: C.text, textDecoration: "none", fontWeight: 500 }}
                    >
                      contact@kickup.studio
                    </Link>
                  ),
                },
                {
                  Icon:    MapPin,
                  label:   "Localisation",
                  content: <span style={{ fontSize: "0.9rem", color: C.text, fontWeight: 500 }}>Paris · Clermont-Ferrand · France &amp; remote</span>,
                },
                {
                  Icon:    Clock,
                  label:   "Délai de réponse",
                  content: <span style={{ fontSize: "0.9rem", color: C.text, fontWeight: 500 }}>Sous 24h ouvrées</span>,
                },
              ].map(({ Icon, label, content }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                  <div
                    style={{
                      width:           40,
                      height:          40,
                      borderRadius:    10,
                      backgroundColor: C.iconBg,
                      border:          `1px solid ${C.iconBorder}`,
                      display:         "flex",
                      alignItems:      "center",
                      justifyContent:  "center",
                      flexShrink:      0,
                    }}
                  >
                    <Icon size={16} style={{ color: C.accent }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: C.muted, marginBottom: "0.1rem" }}>{label}</div>
                    {content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Colonne droite — formulaire ── */}
          <div
            style={{
              backgroundColor: C.cardBg,
              borderRadius:    12,
              border:          `1px solid ${C.cardBorder}`,
              padding:         "2rem",
            }}
          >
            {isSuccess ? (
              <div style={{ textAlign: "center", padding: "2rem 0" }}>
                <div
                  style={{
                    width:           60,
                    height:          60,
                    borderRadius:    "50%",
                    backgroundColor: C.accent,
                    display:         "flex",
                    alignItems:      "center",
                    justifyContent:  "center",
                    margin:          "0 auto 1.25rem",
                  }}
                >
                  <CheckCircle2 size={28} color="white" />
                </div>
                <h3
                  style={{
                    fontWeight:   700,
                    fontSize:     "1.2rem",
                    color:        C.text,
                    marginBottom: "0.75rem",
                  }}
                >
                  Merci&nbsp;! Message reçu.
                </h3>
                <p style={{ fontSize: "0.875rem", color: C.muted, marginBottom: "1.5rem" }}>
                  Nous vous répondons sous 24h ouvrées.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  style={{
                    display:         "inline-flex",
                    alignItems:      "center",
                    padding:         "0.5rem 1.25rem",
                    fontSize:        "0.85rem",
                    fontWeight:      500,
                    color:           C.text,
                    backgroundColor: "rgba(248,248,246,0.06)",
                    border:          `1px solid ${C.iconBorder}`,
                    borderRadius:    8,
                    cursor:          "pointer",
                    fontFamily:      "inherit",
                    transition:      "background-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(248,248,246,0.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(248,248,246,0.06)")}
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
              >
                {/* Nom */}
                <div>
                  <label htmlFor="nom" style={labelStyle}>
                    Nom complet <span style={{ color: C.error }}>*</span>
                  </label>
                  <input
                    id="nom"
                    placeholder="Prénom Nom"
                    style={{ ...inputStyle, ...(errors.nom && { borderColor: C.error }) }}
                    {...register("nom")}
                  />
                  {errors.nom && <p style={errorStyle}>{errors.nom.message}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" style={labelStyle}>
                    Email professionnel <span style={{ color: C.error }}>*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="vous@entreprise.fr"
                    style={{ ...inputStyle, ...(errors.email && { borderColor: C.error }) }}
                    {...register("email")}
                  />
                  {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
                </div>

                {/* Entreprise */}
                <div>
                  <label htmlFor="entreprise" style={labelStyle}>
                    Entreprise <span style={{ color: C.error }}>*</span>
                  </label>
                  <input
                    id="entreprise"
                    placeholder="Nom de votre entreprise"
                    style={{ ...inputStyle, ...(errors.entreprise && { borderColor: C.error }) }}
                    {...register("entreprise")}
                  />
                  {errors.entreprise && <p style={errorStyle}>{errors.entreprise.message}</p>}
                </div>

                {/* Type de besoin */}
                <div>
                  <label style={labelStyle}>
                    Type de besoin <span style={{ color: C.error }}>*</span>
                  </label>
                  {/* hidden input so RHF tracks the field */}
                  <input type="hidden" {...register("besoin")} />
                  <Select
                    value={watch("besoin")}
                    onValueChange={(v) =>
                      setValue("besoin", v, { shouldValidate: isSubmitted })
                    }
                  >
                    <SelectTrigger
                      style={{
                        ...inputStyle,
                        borderColor: errors.besoin ? C.error : C.fieldBorder,
                      }}
                    >
                      <SelectValue placeholder="Sélectionnez un type de besoin" />
                    </SelectTrigger>
                    <SelectContent
                      style={{
                        backgroundColor: "#232321",
                        border:          `1px solid ${C.cardBorder}`,
                        borderRadius:    8,
                      }}
                    >
                      <SelectItem value="Développement d'application web">Développement d&apos;application web</SelectItem>
                      <SelectItem value="Agent IA / Automatisation">Agent IA / Automatisation</SelectItem>
                      <SelectItem value="Les deux">Les deux</SelectItem>
                      <SelectItem value="Autre / Je ne sais pas encore">Autre / Je ne sais pas encore</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.besoin && <p style={errorStyle}>{errors.besoin.message}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" style={labelStyle}>
                    Message{" "}
                    <span style={{ color: C.muted, fontWeight: 400 }}>(optionnel)</span>
                  </label>
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
                      marginTop:   2,
                      width:       16,
                      height:      16,
                      flexShrink:  0,
                      accentColor: C.accent,
                      cursor:      "pointer",
                    }}
                  />
                  <label
                    htmlFor="consent"
                    style={{
                      fontSize:   "0.8rem",
                      color:      C.muted,
                      cursor:     "pointer",
                      lineHeight: 1.5,
                    }}
                  >
                    J&apos;accepte d&apos;être contacté par Kickup{" "}
                    <span style={{ color: C.error }}>*</span>
                  </label>
                </div>
                {errors.consent && <p style={errorStyle}>{errors.consent.message}</p>}

                {/* Server error */}
                {serverError && (
                  <div
                    style={{
                      padding:         "0.875rem 1rem",
                      backgroundColor: "rgba(248,113,113,0.08)",
                      border:          "1px solid rgba(248,113,113,0.2)",
                      borderRadius:    8,
                      fontSize:        "0.8rem",
                      color:           C.error,
                    }}
                  >
                    {serverError}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    display:         "flex",
                    alignItems:      "center",
                    justifyContent:  "center",
                    gap:             "0.5rem",
                    width:           "100%",
                    padding:         "0.875rem 1.75rem",
                    backgroundColor: isSubmitting ? "rgba(26,92,255,0.6)" : C.accent,
                    color:           "white",
                    fontWeight:      600,
                    fontSize:        "0.9375rem",
                    borderRadius:    8,
                    border:          "none",
                    cursor:          isSubmitting ? "not-allowed" : "pointer",
                    fontFamily:      "inherit",
                    letterSpacing:   "-0.01em",
                    transition:      "background-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) e.currentTarget.style.backgroundColor = C.accentDark;
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) e.currentTarget.style.backgroundColor = C.accent;
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
      </div>
    </section>
  );
};
