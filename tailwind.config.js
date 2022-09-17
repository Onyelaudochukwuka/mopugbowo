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
        curves: "#A287AF",
        dark: "#4E0B77",
        primaryLight: "#A287AF",
        light: "#FFF6FF",
        text: "#fff"
      },
      backgroundImage: {background: "url(../public/background.jpeg)"},
    },
    
    
  },
  plugins: [],
}
