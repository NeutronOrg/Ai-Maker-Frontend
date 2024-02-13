/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customColor: '#d19d1e', 
      },
    },
  },
  plugins: [require("daisyui")],
}
