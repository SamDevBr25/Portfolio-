import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f6f3ed",
          100: "#e8e2d6",
          300: "#b9ac97",
          500: "#716754",
          700: "#292520",
          900: "#11100f"
        },
        graphite: "#161719",
        ivory: "#f7f1e8",
        champagne: "#c7a96a",
        mineral: "#7ca6a0",
        signal: "#356bf5",
        clay: "#a65f3d"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Cormorant Garamond", "Georgia", "serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"]
      },
      boxShadow: {
        editorial: "0 34px 90px rgba(17,16,15,0.16)",
        halo: "0 0 0 1px rgba(199,169,106,0.18), 0 24px 70px rgba(17,16,15,0.18)"
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(17,16,15,0.08) 1px, transparent 0)",
        "museum": "linear-gradient(135deg, rgba(247,241,232,0.94), rgba(230,222,210,0.72) 36%, rgba(255,255,255,0.88))"
      }
    }
  },
  plugins: []
};

export default config;
