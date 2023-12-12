/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: true,
  },
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        base:'#ffa40b',
        baseBG:'#181B20'
      },
      width: {
        'inherit': 'inherit',
      }
    },
  },
  plugins: [],
}

