/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'medium': 'var(--default-gutter) minmax(auto, var(--max-width-medium)) var(--default-gutter)'
      }
    },
  },
  plugins: [],
}