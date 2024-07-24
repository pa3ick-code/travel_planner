/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "outfit": "outfit",
        "outfit-medium": "outfit-medium",
        "outfit-semibold": "outfit-semibold",
        "outfit-bold": "outfit-bold",
        "outfit-xbold": "outfit-xbold",
      }
    },
  },
  plugins: [],
}

