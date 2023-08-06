import localFont from "next/font/local";

export const estedad = localFont({
  src: [
    {
      path: "../../public/fonts/Estedad/Estedad-Thin.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Estedad/Estedad-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Estedad/Estedad-Medium.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Estedad/Estedad-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Estedad/Estedad-Black.woff",
      weight: "900",
      style: "normal",
    },
  ],
});
