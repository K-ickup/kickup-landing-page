"use client";

import { motion } from "framer-motion";


export function FounderSection() {
  return (
    <section
      id="fondateur"
      style={{
        backgroundColor: "var(--bg)",
        padding: "6rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gap: "3rem",
            alignItems: "center",
          }}
          className="grid-cols-1 md:grid-cols-2 md:gap-16"
        >
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src="/jeremy.png"
              alt="Jérémy Dumas — CTO & Fondateur de Kickup"
              style={{
                width: "min(320px, 100%)",
                aspectRatio: "4/5",
                borderRadius: 16,
                objectFit: "cover",
                display: "block",
              }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
          >
            <span
              style={{
                display: "block",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "1.25rem",
              }}
            >
              Le fondateur
            </span>

            <h2
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "var(--text)",
                marginBottom: "0.375rem",
              }}
            >
              Pas une agence anonyme.
            </h2>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: 500,
                color: "var(--accent)",
                marginBottom: "1.75rem",
              }}
            >
              Jérémy Dumas — CTO &amp; Fondateur
            </p>

            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--text-muted)",
                lineHeight: 1.7,
              }}
            >
              J&rsquo;ai fondé Kickup avec une conviction : les PME et ETI
              méritent le même niveau d&rsquo;exigence que les grands groupes —
              avec la réactivité et la proximité qu&rsquo;une grande structure
              ne peut pas offrir.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
