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
        curves: "#B641FF",
        dark: "#4E0B77",
        primaryLight: "#C363FF",
        light: "#F2B80E",
      },
      backgroundImage: {
        background: "../public/background.jpeg",
      }
    },
    
    
  },
  plugins: [],
}
