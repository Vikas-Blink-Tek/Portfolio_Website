import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#0B0B0D",
        surface: { DEFAULT: "#141416", low: "#1C1B1D", high: "#2A2A2C", highest: "#353437" },
        concrete: "#2A2A2C",
        steel: "#A8ABB3",
        "warm-white": "#EDEAE4",
        grey: "#9A9794",
        outline: "#5A5754",
        accent: { DEFAULT: "#FF4D24", dim: "#C23A1B" },
      },
      fontFamily: {
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        body: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      maxWidth: { content: "1400px" },
    },
  },
  plugins: [],
};
export default config;
