type Props = {
  variant?: "dark" | "light";
  className?: string;
  /** Rendered height in px. Width is derived from the lockup's 3000×731 aspect. */
  height?: number;
};

const SRC = {
  dark: "/logo/logo-white-for-dark.png",  // white type — for dark backgrounds
  light: "/logo/logo-black-for-light.png", // black type — for light backgrounds
};

// Intrinsic dimensions of the lockup PNGs.
const INTRINSIC_W = 3000;
const INTRINSIC_H = 731;
const ASPECT = INTRINSIC_W / INTRINSIC_H;

export function Logo({ variant = "dark", className, height = 40 }: Props) {
  const width = Math.round(height * ASPECT);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={SRC[variant]}
      alt="The Wings Stadium — Food · Family · Friends"
      width={width}
      height={height}
      style={{ height, width: "auto", maxWidth: "100%" }}
      className={className}
    />
  );
}
