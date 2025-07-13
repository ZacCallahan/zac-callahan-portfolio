/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky': {
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
        }
      }
    },
  },
  plugins: [],
}