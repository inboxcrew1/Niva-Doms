import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      colors: {
        charcoal: {
          DEFAULT: "#0D0D0F",
          50: "#2B2B33",
          100: "#222228",
          200: "#1A1A1F",
          300: "#141418",
          400: "#101014",
          500: "#0D0D0F",
          600: "#0A0A0C",
          700: "#070709",
          800: "#040405",
          900: "#000000",
        },
        champagne: {
          DEFAULT: "#C9A46A",
          light: "#E1B977",
          dark: "#B08A50",
          50: "#FAF6EE",
          100: "#F2E8D5",
          200: "#E6CE9F",
          300: "#DAB57E",
          400: "#D2AB70",
          500: "#C9A46A",
          600: "#B88E4F",
          700: "#9A733B",
          800: "#75562B",
          900: "#4D371A",
        },
        gold: {
          warm: "#E1B977",
          DEFAULT: "#C9A46A",
          muted: "#A88855",
        },
        ivory: {
          DEFAULT: "#F2EFE6",
          light: "#FAF9F5",
          dark: "#E4DFCFC",
        },
        stone: {
          warm: "#B7B0A1",
          light: "#CCC7BC",
          dark: "#9E9685",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Playfair Display", "Cinzel", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        widest: ".25em",
        ultra: ".35em",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gold-shimmer": "linear-gradient(90deg, #C9A46A 0%, #E1B977 50%, #C9A46A 100%)",
        "charcoal-fade": "linear-gradient(180deg, rgba(13,13,15,0) 0%, rgba(13,13,15,0.85) 60%, rgba(13,13,15,1) 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up": "slideUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
