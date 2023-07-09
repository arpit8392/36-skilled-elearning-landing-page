/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'primary-dark': '#13183F',
				'secondary-1': '#83869A',
				'secondary-2': '#666CA3',
				'accent-1': '#F74780',
				'accent-2': '#FFA7C3',
			},
		
		},
		backgroundImage: {
			'primary-gradient':
				'linear-gradient(180deg, #FF6F48 0.04%, #F02AA6 100%)',
			'primary-hover-gradient':
				'linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), linear-gradient(180deg, #FF6F48 0%, #F02AA6 100%)',
			'secondary-gradient': 'linear-gradient(180deg, #4851FF 0%, #F02AA6 100%)',
			'secondary-hover-gradient':
				'linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), linear-gradient(180deg, #4851FF 0%, #F02AA6 100%)',
			'light-gradient': 'linear-gradient(180deg, #FFF 0%, #F0F1FF 100%)',
		},
	},
	plugins: [],
}
