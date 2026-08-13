/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1d4ed8', // Deep Blue
          light: '#eff6ff',
          dark: '#1e293b', // Slate Gray
          text: '#334155'
        }
      }
    },
  },
  plugins: [],
}
