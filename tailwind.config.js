/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: 'var(--font-sans)',
				serif: 'var(--font-serif)',
			},
			animation: {
				'ping-large': 'ping-large 1s ease-in-out infinite',
				'move-left': 'move-left 35s linear infinite',
				'move-right': 'move-right 35s linear infinite',
			},
			keyframes: {
				'ping-large': {
					'75%, 100%': {
						transform: 'scale(3)',
						opacity: '0',
					},
				},
				'move-left': {
					'0%': {
						transform: 'translateX(0%)',
					},
					'100%': {
						transform: 'translateX(-50%)',
					},
				},
				'move-right': {
					'0%': {
						transform: 'translateX(-50%)',
					},
					'100%': {
						transform: 'translateX(0%)',
					},
				},
			},
		},
	},
	plugins: [],
};
