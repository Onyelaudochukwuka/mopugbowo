/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        shadow: "#D9D9D9",
        primary: "#550984",
        curves: "#B641FF"

      }
    },
    
  },
  plugins: [],
}
