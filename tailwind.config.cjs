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
      montserrat: ["Montserrat", "sans-serif"],
      sans: ['sans-serif'],
      serif: ['serif'],
    },
    
  },
  backgroundImage: (theme) => ({
    "mobile-home": "url('./assets/HomePageGraphic.png')"
  })
},
screens: {
  'xl': { 'max': '1279px' },
  // => @media (max-width: 1279px) { ... }
  'lg': { 'max': '1023px' },
  // => @media (max-width: 1023px) { ... }
  'md': { 'max': '767px' },
  // => @media (max-width: 767px) { ... }
  'sm': { 'max': '639px' },
  // => @media (max-width: 639px) { ... }
},
extend: {
  spacing: {
    128: '32rem',
    144: '36rem',
  },
  borderRadius: {
    '4xl': '2rem',
  },
},
  plugins: [require("daisyui")],
};