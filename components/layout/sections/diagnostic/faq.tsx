"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { reveal, sectionTitleStyle } from "./shared";

const FAQ = [
  {
    q: "C'est vraiment gratuit ?",
    a: "Oui. 45 minutes, sans engagement. Si une piste ressort, je vous présente une proposition chiffrée quelques jours après. Vous êtes libre de ne pas donner suite.",
  },
  {
    q: "Qu'est-ce que je dois préparer ?",
    a: "Rien de spécial. Pensez simplement aux tâches qui vous prennent le plus de temps. Si la personne qui décide peut être présente, c'est encore mieux.",
  },
  {
    q: "Que deviennent mes données ?",
    a: "Pendant le diagnostic, nous parlons de votre activité, rien de plus. Pour un projet, l'outil travaille sur vos données avec des accès maîtrisés, et nous vous indiquons précisément où elles sont stockées et où passent les appels à l'IA.",
  },
  {
    q: "Combien coûte un projet ensuite ?",
    a: "Le prix dépend du cas retenu. Vous le connaissez avant de décider, avec ce que ça vous fait gagner en face, et il est pensé pour le budget d'une TPE ou d'une PME. Pas de surprise : tout est chiffré et écrit avant de commencer.",
  },
  {
    q: "Existe-t-il des aides ?",
    a: "Selon votre taille et votre situation, certains projets peuvent être financés en partie, par exemple avec le Prêt Boost IA de Bpifrance pour les sociétés de 2 à 49 salariés. Nous vérifions votre éligibilité avec vous, sans rien promettre.",
  },
  {
    q: "Je n'y connais rien en IA, c'est un problème ?",
    a: "Non, c'est même le point de départ. Vous connaissez votre métier, nous nous occupons de la technique.",
  },
];

export function DiagnosticFaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{ backgroundColor: "var(--bg-alt)", padding: "6rem 1.5rem" }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <motion.h2
          {...reveal()}
          style={{ ...sectionTitleStyle, marginBottom: "2.5rem" }}
        >
          Questions fréquentes
        </motion.h2>

        <motion.div
          {...reveal(0.1)}
          style={{
            border: "1px solid var(--border)",
            borderRadius: 12,
            overflow: "hidden",
            backgroundColor: "var(--bg)",
          }}
        >
          {FAQ.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <div
                key={q}
                style={{ borderTop: i === 0 ? "none" : "1px solid var(--border)" }}
              >
                <h3 style={{ margin: 0 }}>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                      padding: "1.375rem 1.75rem",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      fontFamily: "inherit",
                      fontSize: "1.0625rem",
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                      color: "var(--text)",
                    }}
                  >
                    {q}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      style={{
                        flexShrink: 0,
                        color: "var(--accent)",
                        transform: isOpen ? "rotate(45deg)" : "none",
                        transition: "transform 0.2s ease",
                      }}
                    >
                      <path
                        d="M8 3v10M3 8h10"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-a-${i}`}
                      role="region"
                      aria-labelledby={`faq-q-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        style={{
                          padding: "0 1.75rem 1.5rem",
                          margin: 0,
                          fontSize: "0.9375rem",
                          color: "var(--text-muted)",
                          lineHeight: 1.7,
                        }}
                      >
                        {a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
