/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./src/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the src directory
		"./public/index.html" // Include the main HTML file
	],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {}
		}
	},
	plugins: [require("tailwindcss-animate")],
}

