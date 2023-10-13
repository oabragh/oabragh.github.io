/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				aquamarine: 'rgb(80, 255, 175)',
				'black-olive': 'rgb(40, 51, 44)',
				'eerie-black': 'rgb(19, 30, 23)',
				'dark-green': 'rgb(16, 53, 37)',
				'cambridge-blue': 'rgb(136, 180, 166)',
			},
			fontFamily: {
				'archivo': "'Archivo Black', sans-serif"
			}
		},
	},
	plugins: [],
}
