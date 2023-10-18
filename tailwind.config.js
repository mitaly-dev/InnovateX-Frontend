/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#f28a03",
        secondary: "#202020",
        accent: "#d2d2d240",
        background: "#0201010d",
        darkOrange: "#ea531c",
        lightGray: "#8a8a8a",
      },
    },
  },
  plugins: [require("daisyui")],
};
