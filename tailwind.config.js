/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "seventies-red": "#F44129",
        "seventies-yellow": "#F5B925", 
        "seventies-blue": "#1F4888"
      },
      backgroundImage: {
        "gradient": "url(/gradient.jpg)",
        "balls": "url(/balls.svg)"
      },
      fontFamily: {
        'berkshire': ['"Berkshire Swash"', 'cursive']
      }
    },
  },
  plugins: [],
}