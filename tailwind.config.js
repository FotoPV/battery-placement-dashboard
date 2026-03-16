/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aqua: '#00EAD3',
        orange: '#F36710',
        ash: '#808285',
      },
      fontFamily: {
        'nextsphere': ['Nextsphere', 'sans-serif'],
        'generalsans': ['GeneralSans', 'sans-serif'],
        'urbanist': ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
