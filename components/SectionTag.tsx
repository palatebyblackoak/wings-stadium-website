type Props = {
  children: React.ReactNode;
  color?: "yellow" | "red" | "white";
  tilt?: number;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

/* Yellow (or red) sticker-style section tag — the dominant motif from the
   printed food menu. Slight rotation + irregular rounded corners gives the
   hand-cut feel. */
export function SectionTag({
  children,
  color = "yellow",
  tilt = -1.5,
  size = "md",
  className = "",
}: Props) {
  const palette =
    color === "yellow"
      ? "bg-yellow-brand text-ink"
      : color === "red"
        ? "bg-red-brand text-white"
        : "bg-white text-ink";

  const sizing =
    size === "xl"
      ? "text-4xl sm:text-6xl px-7 py-2.5"
      : size === "lg"
        ? "text-3xl sm:text-5xl px-6 py-2"
        : size === "md"
          ? "text-2xl sm:text-3xl px-5 py-1.5"
          : "text-base sm:text-lg px-4 py-1";

  return (
    <span
      className={`inline-block font-display uppercase leading-none tracking-wider shadow-[6px_6px_0_rgba(0,0,0,0.35)] ${palette} ${sizing} ${className}`}
      style={{
        transform: `rotate(${tilt}deg)`,
        borderRadius: "14px 22px 16px 26px",
      }}
    >
      {children}
    </span>
  );
}

/* Yellow brush highlight that sits behind sub-section text, mirroring the
   "TRADITIONAL WINGS / SOUTHERN STYLE" treatment from the menu. */
export function BrushHighlight({
  children,
  color = "yellow",
}: {
  children: React.ReactNode;
  color?: "yellow" | "red";
}) {
  const bg = color === "yellow" ? "var(--yellow)" : "var(--red)";
  const text = color === "yellow" ? "var(--black)" : "var(--white)";
  return (
    <span
      className="font-display uppercase tracking-wider px-3 py-0.5 inline-block leading-tight"
      style={{
        background: bg,
        color: text,
        clipPath:
          "polygon(2% 6%, 99% 0%, 100% 88%, 97% 100%, 4% 96%, 0% 12%)",
      }}
    >
      {children}
    </span>
  );
}
