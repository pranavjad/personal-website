/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif']
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
      },
      boxShadow: {
        'mui': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
      }
    },
  },
  plugins: [],
}