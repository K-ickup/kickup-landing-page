"use client";
import Image from "next/image";

export const ClientsBand = () => {
  const logos = [
    { src: "/logos/carrier.png", alt: "Carrier" },
    { src: "/logos/insy2s.png", alt: "Insy2s" },
    { src: "/logos/mobivia.png", alt: "Mobivia" },
    { src: "/logos/norauto.png", alt: "Norauto" },
    { src: "/logos/tindev.png", alt: "Tindev" },
  ];

  return (
    <div
      style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        backgroundColor: "#0d1117",
        padding: "48px 60px",
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: "0.75rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "var(--accent)",
          marginBottom: "40px",
          fontFamily: "var(--font-body)",
        }}
      >
        Ils nous ont choisi
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {logos.map((logo) => (
          <div
            key={logo.alt}
            className="logo-item"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background-color 0.2s ease",
            }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={90}
              height={50}
              className="logo-img"
              style={{
                objectFit: "contain",
                height: "60px",
              }}
            />
          </div>
        ))}
      </div>
      <style>{`
        .logo-item:hover {
          background-color: #e0e0e0 !important;
        }
      `}</style>
    </div>
  );
};
