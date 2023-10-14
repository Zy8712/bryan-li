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
    },
  },
  plugins: [],
}

