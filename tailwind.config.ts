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
        label: ["var(--font-label)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        heat: "linear-gradient(90deg, var(--yellow) 0%, var(--orange) 45%, var(--red) 100%)",
        "heat-radial":
          "radial-gradient(60% 60% at 50% 40%, rgba(245,140,61,0.35) 0%, rgba(238,49,53,0.18) 45%, rgba(32,32,32,0) 75%)",
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
