/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue, js}"],
  theme: {
    extend: {
      fontFamily: { inter: ["Inter"] },
      colors: { primary: "#04395E" },
    },
  },
  plugins: [],
};
