/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sub': 'hsl(10, 79%, 65%)',
        'main': 'hsl(27, 66%, 92%)',
        'chart-font-color': ' hsl(25, 47%, 15%)',
        'graph': 'hsl(186, 34%, 60%)'
      }
    },
  },
  plugins: [],
}