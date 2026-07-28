import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF7F2",
        cream: "#F1EBE0",
        charcoal: "#1A1917",
        gold: "#C9A961",
        "gold-dark": "#A8863F",
        taupe: "#D8CFC0",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        tag: "0.24em",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(26, 25, 23, 0.06)",
        card: "0 12px 40px rgba(26, 25, 23, 0.08)",
        glass: "0 8px 32px rgba(26, 25, 23, 0.10)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
