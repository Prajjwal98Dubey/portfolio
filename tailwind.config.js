/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'bungee':["Bungee Spice", "sans-serif"],
        'pacifico':["Pacifico", "cursive"],
        'merienda':["Merienda", "cursive"]
      }
    },
  },
  plugins: [],
}

