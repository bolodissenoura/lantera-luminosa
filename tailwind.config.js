const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        yellow: "#FFD56F",
        green: "#1D272A",
      },
    },
    fontFamily: {
      primary: ["Plus Jakarta Sans"],
      secondary: ['"Open Sans"'],
      tertiary: ["Bebas Neue"],
      fourth: ["Manrope"]
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
