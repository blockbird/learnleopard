/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFC107',
          // yellow (changed from green)
          dark: '#FFA000',
          light: '#FFECB3'
        },
        secondary: {
          DEFAULT: '#FFEB3B',
          // lighter yellow
          dark: '#FBC02D',
          light: '#FFF59D'
        },
        accent: {
          DEFAULT: '#212121',
          // black
          light: '#424242',
          lighter: '#616161'
        }
      }
    }
  },
  plugins: [require("tailwindcss-motion"), require('@tailwindcss/typography')],
  safelist: [{
    pattern: /^motion-/
  }]
};