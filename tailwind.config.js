/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#FFFFFF',
      'orange': '#FF7020',
      'dark-orange': 'FF5C00',
      'gray': 'B1B1B1',
    }
  },
  plugins: [],
}