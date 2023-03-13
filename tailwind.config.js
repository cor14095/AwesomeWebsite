/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#505150',
      'darkslategray': '#2f4f4f',
      'inverted-black': '#afaeaf',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
    },
    extend: {
      spacing: {
        '1w': '5vw',
        '2w': '10vw',
        '3w': '15vw',
        '4w': '20vw',
        '5w': '25vw',
        '1h': '5vh',
        '2h': '10vh',
        '3h': '15vh',
        '4h': '20vh',
        '5h': '25vh',
      },
      backgroundImage: {
        'space-image': "url('../public/pexels-instawalli-176851.jpg')",
      }
    },
  },
  plugins: [],
}
