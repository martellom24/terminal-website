/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu Mono', 'monospace'],
      },
      colors: {
        black: '#2e2e2e',
        white: '#d6d6d6',
        Yellow: '#e5b567',
        Green: '#519975',
        Orange: '#e87d3e',
        Purple: '#9e86c8',
        Pink: '#b05279',
        Blue: '#6c99bb ',
      }
    },
  },
  plugins: [],
}

