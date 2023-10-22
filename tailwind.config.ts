import type { Config } from "tailwindcss";
import { shadcnPreset } from "./src/lib/shadcn";

module.exports = {
  presets: [shadcnPreset],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
} satisfies Config;
