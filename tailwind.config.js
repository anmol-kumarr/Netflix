/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'front': "url('https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
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

