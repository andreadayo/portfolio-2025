import { Azeret_Mono } from "next/font/google";
import localFont from "next/font/local";

export const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const neueMontreal = localFont({
  src: [
    {
      path: "../public/fonts/NeueMontreal-Regular.otf",
      weight: "450",
      style: "normal",
    },
  ],
});
