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

        'qr-code-light-gray': 'hsl(212, 45%, 89%)',
        'qr-code-grayish-blue': 'hsl(220, 15%, 55%)',
        'qr-code-dark-blue': 'hsl(218, 44%, 22%)',

        'interactive-rating-light-gray': 'hsl(217, 12%, 63%)',
        'interactive-rating-dark-blue': 'hsl(213, 19%, 18%)',
        'interactive-rating-custom-dark-blue': 'hsl(215, 21%, 16%)',
        'interactive-rating-very-dark-blue': 'hsl(216, 12%, 8%)',
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

