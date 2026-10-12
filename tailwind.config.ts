import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        space: {
          950: "#030712",
          900: "#060913",
          850: "#0a0e1c",
          800: "#0f1629",
          750: "#141d36",
          700: "#1a2544",
          600: "#24325c",
        },
        cyber: {
          cyan: "#00f0ff",
          blue: "#3b82f6",
          indigo: "#6366f1",
          purple: "#a855f7",
          teal: "#14b8a6",
          accent: "#38bdf8",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "neon-cyan": "0 0 20px -3px rgba(0, 240, 255, 0.35)",
        "neon-blue": "0 0 20px -3px rgba(59, 130, 246, 0.35)",
        "neon-purple": "0 0 20px -3px rgba(168, 85, 247, 0.35)",
        "glass-sm": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glass-lg": "0 12px 40px 0 rgba(0, 0, 0, 0.55)",
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
