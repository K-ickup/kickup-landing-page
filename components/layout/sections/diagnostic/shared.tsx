"use client";

export const sectionTitleStyle: React.CSSProperties = {
  fontSize: "clamp(2rem, 4vw, 3rem)",
  fontWeight: 800,
  letterSpacing: "-0.03em",
  lineHeight: 1.1,
  color: "var(--text)",
};

export const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: {
    duration: 0.5,
    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    delay,
  },
});

export function CheckIcon({ size = 14 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      style={{
        width: size + 10,
        height: size + 10,
        borderRadius: "50%",
        backgroundColor: "rgba(26,92,255,0.12)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
        <path
          d="M2.5 7l3 3 6-6"
          stroke="#1A5CFF"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
