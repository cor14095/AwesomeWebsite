/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-black': '#505150',
        'darkslategray': '#2f4f4f',
        'inverted-space': '#afaeaf',
        'avatar-blue': '#7094b7',
        'space-light-blue': '#2f4a5b',
        'stars-white': '#f1f7fb',
      },
      spacing: {
        'mh': '400vh',
      },
      backgroundImage: {
        'space-image': "url('../public/pexels-instawalli-176851.jpg')",
        'earth': "url('../public/earth.png')",
        'avatar': "url('../public/aang.png')"
      },
      animation: {
        'slow-pulse': 'pulse 3s infinite',
        'planet-bounce': 'planet 7s infinite',
      },
      keyframes: {
        planet: {
          '0%, 50%, 100%': {
            transform: 'translateY(0)',
          },
          '25%': {
            transform: 'translateY(-5%)',
          },
          '75%': {
            transform: 'translateY(3%)',
          },
          
        },
      }
    },
  },
  plugins: [],
}
