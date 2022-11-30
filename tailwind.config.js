/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.tsx"],
  theme: {
    colors: {
      "primary": {
        DEFAULT: "#071029",
        "alt": "#040B20",
      },
      "accent": "#54C5AD",
      "text": {
        DEFAULT: "#B1DCFFB2",
        "alt": "#B1DCFF60",
      },
      "white": "#FFFFFF",
      "card-border": "#54C5AD4D",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"]
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700
    },
    fontSize: {
      sm: ["clamp(0.75rem, 0.7197rem + 0.1294vw, 0.875rem)", "1"],
      base: ["clamp(0.875rem, 0.7233rem + 0.6472vw, 1.5rem)", "1.5"],
      subtitle: ["clamp(1.125rem, 1.034rem + 0.3883vw, 1.5rem)", "1.5"],
      title: ["clamp(1.75rem, 1.6893rem + 0.2589vw, 2rem)", "1.5"],
      heading: ["clamp(2rem, 1.5146rem + 2.0712vw, 4rem)", "1.5"],
      display: ["clamp(3rem, 2.2718rem + 3.1068vw, 6rem)", "1"],
    },
    blur: {
      "divider": "200px",
      "card": "8px",
      "nav": "16px"
    },
    extend: {
      backgroundImage: {
        gradient: 'linear-gradient(22.47deg, #071029 14.63%, #0E4673 100%)',
        "accent-gradient": "linear-gradient(to right, #12558B 0%, #56C5AD 100%)",
        "text-gradient": "linear-gradient(to top right, #FFFFFF 0%, #77BDF4 73.51%, #FFFFFF 100%)",
        "card-gradient": "linear-gradient(to bottom right, #80FFE314 0%, #70BFFF0D 100%)",
        "haze-gradient": "linear-gradient(to top right, rgba(86, 197, 173, 0.63) -0.02%, rgba(0, 113, 203, 0.33) 38.53%, rgba(86, 197, 173, 0) 88.1%)",
        "grid": "url('/img/grid-20.png')",
      },
      
    },
  },
  plugins: [],
}
