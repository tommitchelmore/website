/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,css}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      light: "#FFFFFF",
      stroke: "#52525280"
    },
    fontFamily: {
      sans: ["var(--body-font), sans-serif"],
      display: ["var(--display-font), sans-serif"],
    },
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, #0D0D0D 0%, #202020 100%)',
        'card': 'linear-gradient(to bottom right, #5252520C, #52525228)'
      }
    }
  },
  plugins: [],
}
