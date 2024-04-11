/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--orbitron-font)", "sans-serif"],
        sans: ["var(--exo2-font)", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
