/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./layer/**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "card-dark": "#121822",
      },
    },
  },
  plugins: [],
};
