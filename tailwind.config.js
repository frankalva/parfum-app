/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        gold: {
          50: '#fdfaf3',
          100: '#f9f0d9',
          200: '#f2e0b3',
          300: '#e8c878',
          400: '#d4a84a',
          500: '#c49a2e',
          600: '#a67c22',
          700: '#855f1e',
          800: '#6e4d20',
          900: '#5e411f',
        },
      },
    },
  },
  plugins: [],
}

