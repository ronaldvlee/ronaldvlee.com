/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      sans: ['"Anonymous Pro"', 'sans-serif']
    },
    extend: {
      colors: {
        brown: {
          DEFAULT: '#786151',
          light: '#D7C4B5'
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
