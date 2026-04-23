"use client";

import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
} from "react";

type Ctx = {
  value: string;
  onValueChange: (v: string) => void;
  open: boolean;
  setOpen: (o: boolean) => void;
};

const SelectCtx = createContext<Ctx>({
  value: "",
  onValueChange: () => {},
  open: false,
  setOpen: () => {},
});

// ─── Select (root) ────────────────────────────────────────────────────────────

export function Select({
  children,
  value,
  defaultValue = "",
  onValueChange,
}: {
  children: React.ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (v: string) => void;
}) {
  const [internal, setInternal] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const current = value !== undefined ? value : internal;

  const handleChange = (v: string) => {
    setInternal(v);
    onValueChange?.(v);
    setOpen(false);
  };

  // close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <SelectCtx.Provider value={{ value: current, onValueChange: handleChange, open, setOpen }}>
      <div ref={rootRef} style={{ position: "relative" }}>
        {children}
      </div>
    </SelectCtx.Provider>
  );
}

// ─── SelectTrigger ────────────────────────────────────────────────────────────

export function SelectTrigger({
  children,
  style,
  className,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}) {
  const { open, setOpen } = useContext(SelectCtx);

  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
        textAlign: "left",
        ...style,
      }}
    >
      {children}
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        aria-hidden="true"
        style={{
          flexShrink: 0,
          marginLeft: 8,
          opacity: 0.5,
          transform: open ? "rotate(180deg)" : "none",
          transition: "transform 0.15s ease",
        }}
      >
        <path
          d="M2 4l4 4 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

// ─── SelectValue ──────────────────────────────────────────────────────────────

export function SelectValue({ placeholder }: { placeholder?: string }) {
  const { value } = useContext(SelectCtx);
  return (
    <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
      {value || <span style={{ opacity: 0.45 }}>{placeholder}</span>}
    </span>
  );
}

// ─── SelectContent ────────────────────────────────────────────────────────────

export function SelectContent({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const { open } = useContext(SelectCtx);
  if (!open) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: "calc(100% + 4px)",
        left: 0,
        right: 0,
        zIndex: 100,
        borderRadius: 8,
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ─── SelectItem ───────────────────────────────────────────────────────────────

export function SelectItem({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) {
  const { value: selected, onValueChange } = useContext(SelectCtx);
  const isSelected = selected === value;

  return (
    <div
      role="option"
      aria-selected={isSelected}
      onClick={() => onValueChange(value)}
      style={{
        padding: "0.65rem 1rem",
        cursor: "pointer",
        fontSize: "0.875rem",
        color: isSelected ? "#1A5CFF" : "#F8F8F6",
        backgroundColor: isSelected ? "rgba(26,92,255,0.1)" : "transparent",
        transition: "background-color 0.1s ease",
      }}
      onMouseEnter={(e) => {
        if (!isSelected) e.currentTarget.style.backgroundColor = "rgba(248,248,246,0.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = isSelected
          ? "rgba(26,92,255,0.1)"
          : "transparent";
      }}
    >
      {children}
    </div>
  );
}
