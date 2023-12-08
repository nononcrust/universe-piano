import typographyPlugin from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import { shadcnPreset } from "./src/lib/shadcn";

module.exports = {
  presets: [shadcnPreset],
  plugins: [typographyPlugin, require("tailwind-scrollbar-hide")],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
} satisfies Config;
