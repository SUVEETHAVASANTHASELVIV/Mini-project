/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        bubbleAnimation: {
          '0%': {
            transform: 'translateY(10px)',
            opacity: '0',
          },
          '50%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(-10px)',
            opacity: '0',
          },
        },
      },
      animation: {
        bubbleAnimation: 'bubbleAnimation 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
