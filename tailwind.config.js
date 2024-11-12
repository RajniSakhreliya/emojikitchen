/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'medium': '461px',

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },

    extend: {
      colors:
      {
        emojiHoverColor: "#F1F3F4"
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'], // Enable hover state for background color
      textColor: ['hover'], // Enable hover state for text color
    },
  },
  plugins: [],
}

