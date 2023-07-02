module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'whats-app': '#25D366',
			},
		},
		fontFamily: {
			sans: ['Roboto'],
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
