/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
      'outfit-light':'Outfit-Light',
      'outfit-regular':'Outfit-Regular',
      'outfit-medium':'Outfit-Medium',
      'outfit-semibold':'Outfit-SemiBold',
      'outfit-bold':'Outfit-Bold',
      'outfit-extra-bold':'Outfit-ExtraBold',
    },
    extend: {},
  },
  plugins: [],
}

