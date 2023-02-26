/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				twitter: '#1D9BF0'
			}
		}
	},
	plugins: [require('tailwind-scrollbar-hide')]
};
