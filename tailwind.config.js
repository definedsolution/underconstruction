/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#24ecf1",
				secondary: "#fd5ec4",
				background: "#0d141c",
			},
			fontFamily: {
				sans: ["Jura", "sans-serif"],
				serif: ["Titillium Web", "serif"],
				koulen: ["Koulen", "cursive"],
			},
		},
	},
	plugins: [],
};
