/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#12372F',
        'background-dark': '#0C2923',
        cream: '#F3EBDD',
        'cream-soft': '#E8DFCF',
        'muted-green': '#6D8377',
        border: 'rgba(243, 235, 221, 0.25)',
        black: '#101513',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
