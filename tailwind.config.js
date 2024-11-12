/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:
      {
        emojiHoverColor:"#F1F3F4"
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

