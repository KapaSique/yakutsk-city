import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0891b2",
          dark: "#0e7490",
          light: "#06b6d4",
        },
        secondary: {
          DEFAULT: "#6366f1",
        },
        cta: {
          DEFAULT: "#06b6d4",
        },
        background: {
          DEFAULT: "#0f172a",
        },
        gray: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          600: "#475569",
          900: "#0f172a",
        },
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
        info: "#06b6d4",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
      },
      keyframes: {
        skeleton: {
          "0%, 100%": { backgroundColor: "#E5E7EB" },
          "50%": { backgroundColor: "#D1D5DB" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        skeleton: "skeleton 2s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
