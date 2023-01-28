/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['.index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
    colors: {
      white: 'white',
      black: '#000',
      blue: "#04d9ff",
      primaryColor: "#00040f",
      secondaryColor: "#00f6ff",
      dimWhite: "rgba(255, 255, 255, 0.7)",
      secondaryColor_green: '#c2f70f',
      secondaryColor_orange: '#fe7a15',
    },
    fontFamily: {
      popins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"]
    }
  },
  backgroundImage: (theme) => ({
    "mobile-home": "url('./assets/HomePageGraphic.png')"
  })
},
screens: {
  xs: "480px",
  ss: "620px",
  sm: "768px",
  md: "1060px",
},
  plugins: [],
};