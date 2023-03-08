/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      spacing: {
        '647': '647px',
        '1146': '1146px',
        '542': '542px',
        '135': '135px',
        '-50%': '-50%',
        '30%': '30%',
        '200': '200px'
      },
      colors: {
        'light-grey': '#151515',
        'main': '#101010',
        primary: "#171717",
        success: "#B4E681",
      }
    },
  },
  plugins: [],
}
