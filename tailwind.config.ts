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
      fontSize: {
        h1: [
          "3.5rem",
          {
            lineHeight: "3.75rem",
          },
        ],
        h2: [
          "2.25rem",
          {
            lineHeight: "2.625rem",
          },
        ],
        h3: [
          "1.875rem",
          {
            lineHeight: "2.25rem",
          },
        ],
        h4: [
          "1.5rem",
          {
            lineHeight: "2rem",
          },
        ],
        h5: [
          "1.25rem",
          {
            lineHeight: "1.75rem",
          },
        ],
        h6: [
          "1.125rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        poster: [
          "6rem",
          {
            lineHeight: "6rem",
          },
        ],
        "large-h1": [
          "4.5rem",
          {
            lineHeight: "4.5rem",
          },
        ],
        "section-title": [
          "3rem",
          {
            lineHeight: "3rem",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
