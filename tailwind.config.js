/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'translucent-white': 'rgba(255,255,255,0.55)',
        'translucent-white-2': 'rgba(255,255,255,0.15)',

        'gradient-blue': 'hsl(192, 100%, 67%)',
        'gradient-purple': 'hsl(280, 87%, 65%)',
        'nav-gradient-1': '#DDBDFC',
        'nav-gradient-2': '#96C8FB',
        'filter-gradient-1': '#36D1DC',
        'filter-gradient-2': '#5B86E5',
        'light-gray': 'hsl(217, 12%, 63%)',
        'very-dark-blue': 'hsl(216, 12%, 8%)',

        'fem-newbie': 'rgb(106, 190, 205)',
        'fem-junior': 'rgb(170, 215, 66)',
        'fem-intermediate': 'rgb(241, 182, 4)',
        'fem-advanced': 'rgb(244, 137, 37)',
        'fem-guru': 'rgb(237, 44, 73)',

        'fem-featured-1': 'hsl(273, 75%, 66%)',
        'fem-featured-2': 'hsl(240, 73%, 65%)',

        'translucent-black': 'rgba(0, 0, 0, 0.45)',
        'translucent-white-3': 'rgba(255, 255, 255, 0.45)',
        'translucent-black-2': 'rgba(0, 0, 0, 0.4)',
      },
      fontFamily: {
        'theme-rubik': ['Rubik', 'sans-serif'], 
        'theme-barlow': ['Barlow', 'sans-serif'],
      },
      scale: {
        '108': '1.08',
      },
      screens: {
        'custom-lg': '1128px',
        'custom-md': '1100px',
        'custom-sm': '500px',
      },
    },
  },
  plugins: [],
}

