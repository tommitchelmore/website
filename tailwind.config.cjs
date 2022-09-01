/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
			display: "6rem",    // 96px
			heading: "3rem",    // 48px
			subheading: "2rem", // 32px
			base: "1.25rem",    // 20px
			label: "1rem"       // 16px
		}
	},
	plugins: [
		require('@tailwindcss/line-clamp')
	],
}
