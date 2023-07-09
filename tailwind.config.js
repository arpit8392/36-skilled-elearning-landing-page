/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
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
	},
	plugins: [],
}
