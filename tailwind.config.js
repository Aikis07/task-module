/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      spacing: {
        '647': '647px',
      },
      colors: {
        'light-grey': '#151515',
        'light-greyBtn': '#f5f5f5',
        'bg-main': '#101010',
      }
    },
  },
  plugins: [],
}
