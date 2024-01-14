/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter']
    },
    extend: {
      gridTemplateColumns: {
        'medium': 'var(--default-gutter) minmax(auto, var(--max-width-medium)) var(--default-gutter)'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-12deg)' },
          '50%': { transform: 'rotate(12deg)' },
          '75%': { transform: 'rotate(-12deg)' },
        }
      },
      animation: {
        'wiggle': 'wiggle 1s linear'
      }
    },
  },
  plugins: [],
}