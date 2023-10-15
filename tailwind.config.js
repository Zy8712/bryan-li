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

        'gradient-blue': 'hsl(192, 100%, 67%)',
        'gradient-purple': 'hsl(280, 87%, 65%)',

        'nav-gradient-1': '#DDBDFC',
        'nav-gradient-2': '#96C8FB',
      },
      fontFamily: {
        'theme-rubik': ['Rubik', 'sans-serif'], 
      },
      scale: {
        '108': '1.08',
      },
      width: {
        'icon-2': '80px',
        'icon-3': '120px',
        'icon-4': '160px',
        'icon-5': '200px',
        'icon-6': '240px',

        'lang-width': '30px',
      },
    },
  },
  plugins: [],
}

