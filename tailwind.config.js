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
      },
      fontFamily: {
        'theme-rubik': ['Rubik', 'sans-serif'], 
      },
      scale: {
        '108': '1.08',
      },
    },
  },
  plugins: [],
}

