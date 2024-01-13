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
        hero: "url('/public/hero.jpg')",
      },
      fontFamily: {
        primary: ["Mona-Sans"],
        secondary: ['"Open Sans"'],
        tertiary: ["Bebas Neue"],
        fourth: ["Manrope"],
        fifth: ["Microsoft Tai Le"],
      },
      colors: {
        primary: {
          50: "#EDEDF8",
          100: "#D5DEFF",
          300: "#E9FDFF",
          400: "#AEE8D5",
          500: "#1AC6D9",
          900: "#0F0F24",
        },
        pallet: {
          blue: "#00498166",
          orange: "#FF9D73",
          gray: "#29292E",
        },
        badge: "#F1F5F9",
        badgeText: "#5A6273",
      },
    },
  },
  plugins: [],
};
export default config;
