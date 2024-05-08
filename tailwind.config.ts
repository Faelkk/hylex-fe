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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
        },
        gray: {
          0: "#FFFFFF",
          50: "#FCFCFC",
          100: "#F8F9FA",
          200: "#F0F0F0",
          300: "#E9E9E9",
          400: "#D9D9D9",
        },
        black: {
          0: "#000",
          50: "#1B1B1B",
          100: "#2B2A2A",
          200: "#4F4F4F",
          300: "#42464D",
          400: "#B1B1B1",
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
