/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,tsx,ts}'],
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
			"heading-large": ["3rem, 3rem"],
			"heading-medium": ["2.5rem", "2.5rem"],
			"heading-small": ["2rem", "2rem"],
			"title-large": ["2rem", "2rem"],
			"title-medium": ["1.5rem", "1.5rem"],
			"title-small": ["1.25rem", "1.25rem"],
			"body-large": ["1.25rem", "1.25rem"],
			"body-medium": ["1rem", "1rem"],
			"body-small": ["0.875rem", "0.875rem"],
			"caption-large": ["0.875rem", "0.875rem"],
			"caption-medium": ["0.75rem", "0.75rem"],
			"caption-small": ["0.625rem", "0.625rem"],
		}
	},
	plugins: [
		require('@tailwindcss/line-clamp')
	],
}
