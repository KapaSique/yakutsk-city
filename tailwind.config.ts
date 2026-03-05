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
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          600: "#4B5563",
          900: "#111827",
        },
        success: "#059669",
        warning: "#D97706",
        error: "#DC2626",
        info: "#0284C7",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
      },
    },
  },
  plugins: [],
};

export default config;
