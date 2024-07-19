import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-anuncio": "url('/assets/home.jpg')",
      },
      screens: {
        "3pp": "300px",
        pp: "370px",
        medium: "500px",
        small: "900px",
        large: "1200px",
        default: "1300px",
        xl: "1400px",
      },

      fontFamily: {
        poppins: ["var(--font-primary-poppins)"],
        roboto: ["var(--font-primary-roboto)"],
      },
      colors: {
        blue: {
          50: "#02060D",
          100: "#080F1A",
          200: "#142133",
          300: "#27374D",
          400: "#526D82",
          500: "#9DB2BF",
          600: "#DDE6ED",
          700: "#565C69",
        },
        gray: {
          0: "#FFFFFF",
          50: "#FCFCFC",
          80: "#F1F1F1",
          100: "#F8F9FA",
          200: "#F0F0F0",
          300: "#E9E9E9",
          400: "#D9D9D9",
          500: "#F5F5F5",
          600: "#959595",
        },
        black: {
          0: "#000",
          50: "#1B1B1B",
          100: "#2B2A2A",
          200: "#4F4F4F",
          300: "#42464D",
          400: "#B1B1B1",
          500: "#BBBB",
          600: "#797979",
          700: "#969696",
          800: "#B6B6B6",
          900: "#2E2C2C",
          950: "#171719",
        },
        green: {
          50: "#F2FBF8",
          100: "#D3F4E9",
          200: "#A8E7D3",
          300: "#74D4B9",
          400: "#2D9B81",
          500: "#227F6A",
          600: "#1F6657",
          700: "#1D5247",
          800: "#1C453D",
          900: "#0A2B25",
          950: "#031411",
        },
      },
    },
  },
  plugins: [],
};
export default config;
