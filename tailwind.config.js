/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        "home": "url('/assets/bg.png')"
      }
    },
  },
  plugins: [],
}

