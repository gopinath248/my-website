/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fff9e7',
          100: '#fdf0c2',
          200: '#f7df8b',
          300: '#efc85b',
          400: '#e1b23a',
          500: '#c99a22',
          600: '#a97918',
          700: '#855d13',
          800: '#63460f',
          900: '#44300a',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.08)',
        gold: '0 24px 70px rgba(201, 154, 34, 0.18)',
      },
    },
  },
  plugins: [],
};
