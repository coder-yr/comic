import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080B09",
        "surface-base": "#0B100D",
        surface: "#111412",
        "surface-container": "#18211C",
        "surface-container-high": "#202820",
        "surface-container-highest": "#283228",
        primary: {
          DEFAULT: "#F7C048",
          container: "#D9A52E",
          fixed: "#FFDEA3",
          highlight: "#FFD15A",
          muted: "#C79528",
        },
        secondary: {
          DEFAULT: "#4FDBC7",
          tech: "#38C7B5",
          container: "#03B4A1",
          fixed: "#70F8E3",
        },
        jungle: {
          abyss: "#050806",
          emerald: "#0C1811",
          foliage: "#142419",
          border: "rgba(220, 176, 64, 0.22)",
          tealborder: "rgba(79, 219, 199, 0.25)",
        },
        editorial: {
          light: "#F4F0E7",
          secondary: "#B6B4A8",
          muted: "#777D74",
        },
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Newsreader", "Georgia", "serif"],
        headline: ["'Cormorant Garamond'", "Newsreader", "Georgia", "serif"],
        cinzel: ["Cinzel", "serif"],
        body: ["Inter", "'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        label: ["'Space Grotesk'", "Inter", "monospace", "sans-serif"],
      },
      boxShadow: {
        gold: "0 0 25px rgba(247, 192, 72, 0.25)",
        "gold-lg": "0 0 35px rgba(247, 192, 72, 0.4)",
        teal: "0 0 25px rgba(79, 219, 199, 0.2)",
        "teal-lg": "0 0 35px rgba(79, 219, 199, 0.35)",
        card: "0 20px 40px -15px rgba(0, 0, 0, 0.8)",
      },
      animation: {
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
