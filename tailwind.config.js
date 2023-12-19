module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 600: "#995157", 700: "#8f5055", 900: "#661a10" },
        blue_gray: { 100: "#d9d9d9", 900: "#1e4239" },
        black: { 900: "#000000" },
        red: { 300: "#c86e6e" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter", alikeangular: "Alike Angular" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
