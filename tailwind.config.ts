import typographyPlugin from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import defaultTheme from "tailwindcss/defaultTheme";
import { theme } from "./src/styles/theme";

module.exports = {
  plugins: [typographyPlugin, animatePlugin, require("tailwind-scrollbar-hide")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-pretendard)", ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
        padding: "16px",
        screens: {
          "2xl": "1200px",
        },
      },
      boxShadow: {
        md: "0 4px 40px rgba(0, 0, 0, .075)",
        lg: "2px 4px 16px rgba(0, 0, 0, .16)",
      },
      colors: {
        primary: theme.colors.primary,
        "primary-dark": theme.colors.primaryDark,
        "primary-lighter": theme.colors.primaryLighter,
        content: theme.colors.content,
        "primary-content": theme.colors.primaryContent,
        "content-light": theme.colors.contentLight,
        secondary: theme.colors.secondary,
        "secondary-dark": theme.colors.secondaryDark,
        main: theme.colors.main,
        sub: theme.colors.sub,
        divider: theme.colors.divider,
        border: theme.colors.border,
        ring: theme.colors.ring,
        error: theme.colors.error,
        "error-light": theme.colors.errorLight,
        "error-lighter": theme.colors.errorLighter,
        "error-dark": theme.colors.errorDark,
        success: theme.colors.success,
        "success-light": theme.colors.successLight,
        kakao: theme.colors.kakao,
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "form-message-down": {
          from: { transform: "translateY(-8px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "dropdown-open": {
          from: { opacity: "0", transform: "translateY(-4px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-in-out",
        "avatar-image-fade-in": "fade-in 0.6s ease-in-out",
        "form-message-down": "form-message-down 0.7s cubic-bezier(0.16,1,0.3,1)",
        "accordion-down": "accordion-down 0.2s ease-in-out",
        "accordion-up": "accordion-up 0.3s ease-in-out",
        "dropdown-open": "dropdown-open 0.15s ease-in-out",
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
