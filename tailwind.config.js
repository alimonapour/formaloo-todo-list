/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Roboto', 'Inter', 'sans-serif'],
        mono: ['Roboto Mono'],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
