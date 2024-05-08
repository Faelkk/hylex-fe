import { Poppins, Roboto } from "next/font/google";

export const typePrimary = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-primary-poppins",
  display: "swap",
});

export const typeSecond = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-primary-roboto",
  display: "swap",
});
