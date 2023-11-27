const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				materialize: {
					'0%': {
						opacity: '1',
					},
					'20%': {
						opacity: '0',
					},
					'50%': {
						opacity: '0',
					},
					'70%': {
						opacity: '1',
					}
				}
			},
			animation: {
				materialize: 'materialize 10s ease-in-out infinite',
			},
			backgroundImage: {
				'hero-image': "url('/images/hero.jpeg')",
			},
			fontFamily: {
				'logo': ['foglighten', 'serif'],
				'sans': ['"Open Sans"', 'sans-serif'],
				'raleway': ['Raleway', 'sans-serif'],
				'oswald': ['Oswald', 'sans-serif'],
			},
			colors: {
				'pearl-bush': {
					'50': '#f8f6f4',
					'100': '#ebe4dc',
					'200': '#dfd4c9',
					'300': '#cbb8a6',
					'400': '#b69781',
					'500': '#a68069',
					'600': '#996f5d',
					'700': '#805b4e',
					'800': '#694c43',
					'900': '#553f39',
					'950': '#2d1f1d',
				},
				'rose-fog': {
					'50': '#fcf6f4',
					'100': '#f9ebe7',
					'200': '#f5dad3',
					'300': '#efc4b9',
					'400': '#e29a87',
					'500': '#d37760',
					'600': '#be5d44',
					'700': '#9f4b36',
					'800': '#844130',
					'900': '#6f3a2d',
					'950': '#3b1c14',
				},
				'storm-dust': {
					'50': '#f6f6f6',
					'100': '#e7e7e7',
					'200': '#d1d1d1',
					'300': '#b0b0b0',
					'400': '#888888',
					'500': '#666666',
					'600': '#5d5d5d',
					'700': '#4f4f4f',
					'800': '#454545',
					'900': '#3d3d3d',
					'950': '#262626',
				},
				'sisal': {
					'50': '#f8f7f4',
					'100': '#efede5',
					'200': '#d7d1c1',
					'300': '#c8bfa9',
					'400': '#b1a186',
					'500': '#a18d6e',
					'600': '#947d62',
					'700': '#7b6753',
					'800': '#655447',
					'900': '#53463b',
					'950': '#2c241e',
				},
				'blue-bell': {
					'50': '#f3f7fa',
					'100': '#e9eff6',
					'200': '#d7e1ee',
					'300': '#becde3',
					'400': '#a3b4d6',
					'500': '#8b9bc8',
					'600': '#7481b7',
					'700': '#626ca0',
					'800': '#515a82',
					'900': '#464d69',
					'950': '#292d3d',
				},
				'gulf-stream': {
					'50': '#f5f8f7',
					'100': '#ddeae6',
					'200': '#bbd4cd',
					'300': '#8db4ab',
					'400': '#6a978e',
					'500': '#507c74',
					'600': '#3e635c',
					'700': '#35504c',
					'800': '#2d423e',
					'900': '#293836',
					'950': '#141f1e',
				},
				'main-bg': '#ebe4dc',
				'main-text': '#666666',
				'accent-bg' : '#eab1a6',
				'secondary-bg': '#d7d1c1',
				'accent-text': '#8b9bc8',
				'hover-text': '#e29a87',
				'title-text': '#404040'
			}
		},
	},
	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				'@font-face': {
					fontFamily: 'foglighten',
					fontWeight: '400',
					fontStyle: 'normal',
					fontDisplay: 'swap',
					src: 'url("/fonts/foglighten.woff") format("woff")',
				},
			});
		})
	],
}
