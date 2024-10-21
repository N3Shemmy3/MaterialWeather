/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.{vue,js,css}",
    "./components/**/*.{vue,js}",
    "./layOuts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-Out",
      },
      colors: {
        /* light */
        colorSurfaceLight: "#FAFAFA",
        colorBackgroundLight: "#F4F4F4F4",
        colorTextLight: "#3E3E3E",
        colorOutlineLight: "#D1D1D1",
        /* dark */
        colorSurfaceDark: "#282828",
        colorBackgroundDark: "#1F1F1F",
        colorTextDark: "#FFFFFF",
        colorOutlineDark: "#404040",
      },
    },
  },
};
