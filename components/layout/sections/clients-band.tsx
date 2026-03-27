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
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "64px",
          flexWrap: "wrap",
        }}
      >
        {logos.map((logo) => (
          <div key={logo.alt} className="logo-item" style={{ lineHeight: 0 }}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={90}
              style={{
                objectFit: "contain",
                width: "auto",
                height: "90px",
              }}
            />
          </div>
        ))}
      </div>
      <style>{`
        .logo-item {
          transition: opacity 0.3s ease;
        }
        .logo-item:hover {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};
