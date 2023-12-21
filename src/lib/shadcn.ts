import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import plugin from "tailwindcss/plugin";

const shadcnPlugin = plugin(
  ({ addBase }) => {
    addBase({
      ":root": {
        "--background": "0 0% 100%",
        "--foreground": "#191F28",
        "--card": "0 0% 100%",
        "--card-foreground": "#191F28",
        "--popover": "0 0% 100%",
        "--popover-foreground": "#191F28",
        "--secondary": "240 4.8% 95.9%",
        "--secondary-foreground": "240 5.9% 10%",
        "--muted": "240 4.8% 95.9%",
        "--muted-foreground": "240 3.8% 46.1%",
        "--accent": "240 4.8% 95.9%",
        "--accent-foreground": "240 5.9% 10%",
        "--destructive": "0 84.2% 60.2%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "240 5.9% 90%",
        "--input": "240 5.9% 90%",
        "--ring": "240 5.9% 10%",
        "--radius": "0.5rem",
      },
    });

    addBase({
      "*": {
        "@apply border-border": {},
      },
      body: {
        "@apply bg-background text-foreground": {},
      },
    });
  },
  {
    theme: {
      container: {
        center: true,
        padding: "16px",
        screens: {
          "2xl": "1200px",
        },
      },
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "var(--foreground)",
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "var(--popover-foreground)",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "var(--card-foreground)",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
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
        },
        animation: {
          "fade-in": "fade-in 0.6s ease-in-out",
          "avatar-image-fade-in": "fade-in 0.6s ease-in-out",
          "form-message-down": "form-message-down 0.7s cubic-bezier(0.16,1,0.3,1)",
          "accordion-down": "accordion-down 0.2s ease-in-out",
          "accordion-up": "accordion-up 0.3s ease-in-out",
        },
      },
    },
  },
);

export const shadcnPreset = {
  darkMode: ["class"],
  content: [],
  plugins: [animatePlugin, shadcnPlugin],
} satisfies Config;
