/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        myPink: "#FB2576",
        myYellow: "#facc15"
    
      },
    },
    fontFamily:{
      Poppins: ['Poppins', 'sans-serif'],
      Oswald: [ 'Oswald', 'sans-serif']
    }
  },
  plugins: [require('flowbite/plugin')],
}
