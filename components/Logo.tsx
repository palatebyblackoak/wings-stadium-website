type Props = { variant?: "dark" | "light"; className?: string; size?: number };

// On-brand inline SVG fallback — used until the real logo files are dropped in.
// Real PNGs at /public/logo/logo-white-for-dark.png and /public/logo/logo-black-for-light.png
// will take over via <LogoImage /> once you set USE_IMAGE_LOGO = true below.
const USE_IMAGE_LOGO = false;

export function Logo({ variant = "dark", className, size = 44 }: Props) {
  if (USE_IMAGE_LOGO) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={
          variant === "dark"
            ? "/logo/logo-white-for-dark.png"
            : "/logo/logo-black-for-light.png"
        }
        alt="The Wings Stadium"
        height={size}
        className={className}
      />
    );
  }

  const stroke = variant === "dark" ? "#ffffff" : "#202020";
  const text = variant === "dark" ? "#ffffff" : "#202020";

  return (
    <span
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: 10 }}
      aria-label="The Wings Stadium"
    >
      <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="heat" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffd600" />
            <stop offset="55%" stopColor="#f58c3d" />
            <stop offset="100%" stopColor="#ee3135" />
          </linearGradient>
        </defs>
        <path
          d="M32 4 C18 18, 12 30, 14 42 C16 54, 26 60, 32 60 C38 60, 48 54, 50 42 C52 30, 46 18, 32 4 Z"
          fill="url(#heat)"
        />
        <path
          d="M22 30 L28 46 L32 36 L36 46 L42 30"
          fill="none"
          stroke={stroke}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        style={{
          fontFamily: "var(--font-display)",
          color: text,
          fontSize: size * 0.55,
          letterSpacing: "0.04em",
          lineHeight: 1,
        }}
      >
        THE WINGS STADIUM
      </span>
    </span>
  );
}
