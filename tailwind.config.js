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
			fontSize: {
				'heading-xl': [
					'3.5rem',
					{
						lineHeight: '4.375',
						fontWeight: '800',
					},
				],
				'heading-lg': [
					'2.5rem',
					{
						lineHeight: '3.188',
						fontWeight: '800',
					},
				],
				'heading-md': [
					'2rem',
					{
						lineHeight: '2.5',
						fontWeight: '800',
					},
				],
				'heading-sm': [
					'1.5rem',
					{
						lineHeight: '1.75',
						fontWeight: '800',
					},
				],
				'body-md': [
					'1.125rem',
					{
						lineHeight: '1.75',
						fontWeight: '500',
					},
				],
				'body-sm': [
					'1rem',
					{
						lineHeight: '1.75',
						fontWeight: '700',
					},
				],
			},
		},
		backgroundImage: {
			'primary-gradient':
				'linear-gradient(180deg, #FF6F48 0.04%, #F02AA6 100%)',
			'secondary-gradient': 'linear-gradient(180deg, #4851FF 0%, #F02AA6 100%)',
			'light-gradient': 'linear-gradient(180deg, #FFF 0%, #F0F1FF 100%)',
		},
	},
	plugins: [],
}
