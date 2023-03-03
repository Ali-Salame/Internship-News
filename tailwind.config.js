/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'golden-custom': '#FFD900',
        'golden-custom2': '#F2B253',
      },
    },
  },
  plugins: [
    require('tailwindcss-3d'),
  ],
}
