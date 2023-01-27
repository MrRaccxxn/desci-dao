/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['.index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
    colors: {
      white: 'white',
      black: '#A7A7A7',
      primaryColor_white: '#35bbca',
      primaryColor_gray: '#0191b4',
      primaryColor_beige: '#f8d90f',
      secondaryColor_black: '#d30018',
      secondaryColor_slate: '#fe7a15',
    },
    fontFamily: {
      popins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"]
    }
  },
},
  plugins: [],
};