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
          DEFAULT: "#1E40AF",
          dark: "#1E3A8A",
          light: "#3B82F6",
        },
        secondary: {
          DEFAULT: "#3B82F6",
        },
        cta: {
          DEFAULT: "#F97316",
        },
        background: {
          DEFAULT: "#EFF6FF",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          600: "#4B5563",
          900: "#111827",
        },
        success: "#059669",
        warning: "#D97706",
        error: "#DC2626",
        info: "#0284C7",
      },
      fontFamily: {
        heading: ["EB Garamond", "serif"],
        body: ["Lato", "sans-serif"],
        sans: ["Lato", "sans-serif"],
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
      },
      animation: {
        skeleton: "skeleton 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
