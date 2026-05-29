import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: { brand: "var(--red)" },
        yellow: { brand: "var(--yellow)" },
        orange: { brand: "var(--orange)" },
        ink: "var(--black)",
        paper: "var(--white)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
        label: ["var(--font-label)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundColor: {
        // Brand "heat" used to be a yellow→orange→red gradient. Per brand
        // direction, accents are now a single solid red. Keeping the
        // bg-heat utility name so existing call-sites keep working.
        heat: "var(--red)",
      },
      keyframes: {
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        flicker: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
      animation: {
        riseIn: "riseIn .6s ease-out both",
        flicker: "flicker 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
