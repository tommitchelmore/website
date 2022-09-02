/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,tsx}'],
	darkMode: 'class',

	theme: {
		extend: {},
		colors: {
			vulcan: "#0C0E16",
			haze: "#D1D3E4",
			amaranth: "#EE2F46"
		},
		fontFamily: {
			sans: ["Inter", "sans-serif"],
			serif: ["Playfair Display", "serif"]
		},
		fontWeight: {
			regular: 400,
			medium: 500,
		},
		fontSize: {
			"display-large": ["6rem", "6rem"],
			"display-medium": ["5.5rem", "5.5rem"],
			"display-small": ["3rem", "3rem"],
			heading: ["3rem", "3rem"],
			subheading: ["2rem", "2rem"],
			base: ["1.25rem", "1.25rem"],
			label: ["1rem", "1rem"]
		}
	},
	plugins: [
		require('@tailwindcss/line-clamp')
	],
}
