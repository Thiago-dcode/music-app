/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pastelGreen: '#C4DFDF',
        pastelBlue: '#BEE1E6',
        pastelPink: '#FDE2E4'
      },
      fontFamily:{
        robot:['Roboto Mono', 'monospace']
      }
    },
  },
  plugins: [],
}