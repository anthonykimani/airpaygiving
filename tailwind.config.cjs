/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "buttongreen":"#009473",
        "primarygreen":"#007BFF",
        "secondarygreen":"#007BFF",
        "lightgreen":"#F4FEFC"
      }
    },
    fontFamily: {
      'inter': ['Inter','sans-serif'],
      'kumbh': ['Kumbh Sans', 'sans-serif'],
      'poppins': ['Poppins','sans-serif']
    },
    screens: {
      'xxs':'320px',
      
      'xsm':'450px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}