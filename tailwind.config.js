/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        libre: ["Press Start 2P", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};

module.exports = {
  //...
  plugins: [require("daisyui")],
};

