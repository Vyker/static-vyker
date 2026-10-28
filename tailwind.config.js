/** @type {import('tailwindcss').Config} */
module.exports = {
  // Wildcard scan from day one so future pages are covered automatically
  content: ["./*.html", "./**/*.html", "./assets/js/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
};
