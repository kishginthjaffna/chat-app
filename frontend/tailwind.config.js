/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1995AD',
        'secondary': '#A1D6E2',
        'tertiary': '#F1F1F2',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    
  },
}