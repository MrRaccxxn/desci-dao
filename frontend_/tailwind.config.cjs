/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['.index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
    colors: {
      white: 'white',
      blue: "#04d9ff",
      primary: "#191d26",
      primaryColor: "#00040f",
      secondaryColor: "#00f6ff",
      secondaryColor_green: '#c2f70f',
      primaryColor_orange: '#ff9f00',
      secondaryColor_orange: '#fe7a15',
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
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