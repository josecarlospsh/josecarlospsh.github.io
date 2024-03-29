/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        ...defaultTheme.colors,
        "gray": "#222",
        "lightgray": "#dddddd",
        "lightgray2": "#cfcfcf",
        "mediumgray": "#888",
        "darkgray": "#555",
        "darkgray": "#374151",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "xxxs": ".55rem",
        "xxs": ".65rem",
      },
      "animation": {
        "background-shine": "background-shine 2s linear infinite",
        "text-gradient": "text-gradient 3.5s linear infinite"
      },
      "keyframes": {
        "background-shine": {
          "from": {
            "backgroundPosition": "0 0"
          },
          "to": {
            "backgroundPosition": "-200% 0"
          }
        },
        "text-gradient": {
          "to": {
            "backgroundPosition": "200% center"
          }
        }
      }
    },
  },
  plugins: [],
}

