/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
	  container: {
		  center:true,
		  paddind: '1.25rem'
	  },
    daisyui: {
      themes: [
        'emerald'
      ],
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
    fontFamily: {
      sans: ['Montserrat','sans-serif'],
      serif: ['serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
		white:"#ffffff",
        primary: "#333C4D",
		primary_blue: "#C9ECF6",
        primary_green: "#66CCBA",
        primary_white: "#FAF9F6",
        secondary_blue: "#3ABFF8",
      },
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
