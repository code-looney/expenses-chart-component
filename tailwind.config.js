/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header': 'hsl(10, 79%, 65%)',
        'main': 'hsl(27, 66%, 92%)',
        'chart-font-color': ' hsl(25, 47%, 15%)'
      }
    },
  },
  plugins: [],
}