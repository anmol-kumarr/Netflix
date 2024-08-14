/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'form-grey':'rgba(0, 0, 0, 0.7);',
        'sign-in-red':"rgb(193, 17, 25)",
        "input-grey":"rgba(128, 128, 128, 0.4)",
        'netflix-bg':'#141414'
      },
      fontFamily:{
        'Gilroy':['Gilroy','Georgia']
      }
    },
  },
  plugins: [],
}

