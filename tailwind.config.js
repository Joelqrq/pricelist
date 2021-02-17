const defaultTheme = require('tailwindcss/defaultTheme');
require("dotenv").config();
const enablePurge = process.env.ENABLE_PURGE || false;

module.exports = {
  purge: {
    //enabled: enablePurge,
    content: ["./src/**/*.html", "./src/**/*.scss"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  variants: {
    extend: {
      margin: ['first', 'last']
    },
  },
  plugins: [],
};
