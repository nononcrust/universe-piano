import typographyPlugin from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import { shadcnPreset } from "./src/lib/shadcn";

module.exports = {
  presets: [shadcnPreset],
  plugins: [typographyPlugin, require("tailwind-scrollbar-hide")],
  theme: {
    extend: {
      boxShadow: {
        md: "0 4px 40px rgba(0, 0, 0, .075)",
        lg: "2px 4px 16px rgba(0, 0, 0, .16)",
      },
      colors: {
        primary: "#6857FF",
        "primary-dark": "#5E4EE6",
        content: colors.gray[100],
        "primary-content": "#F3F2FF",
        "content-light": colors.gray[50],
      },
    },
  },
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
} satisfies Config;
