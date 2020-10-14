module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
	},
	important: true,
	theme: {
		container: {
			center: true
		},
		fontFamily: {
			display: ['Gilroy', 'sans-serif'],
			body: ['Graphik', 'sans-serif']
		},
		extend: {
			colors: {
				cyan: '#9cdbff',
				'red-1000': '#FF866C',
				'green-1000': '#2E7D72',
			},
			margin: {
				'96': '24rem',
				'128': '32rem'
			},
			fontFamily: {
				'gill-sans': ['Montserrat-Regular', 'sans-serif'],
				'lora': ['Tangerine', 'serif']
			},
			height: {
				'96': '24rem',
				'128': '32rem',
				'144': '36',
				'160': '40',
				'176': '44',
				'192': '48',
				'208': '52',
				'224': '56',
				'240': '60',
				'256': '64',
				'272': '68',
				'288': '72',
				'304': '76',
				'320': '80',
				'336': '84'
			},
			width: {
				'96': '24rem',
				'128': '32rem',
				'144': '36',
				'160': '40',
				'176': '44',
				'192': '48',
				'208': '52',
				'224': '56',
				'240': '60',
				'256': '64',
				'272': '68',
				'288': '72',
				'304': '76',
				'320': '80',
				'336': '84'
			},
			borderRadius: {
				'75': '1.5rem'
			},
			keyframes: {
				'rotationmail': {
					'0%': { transform: 'rotate(0deg)', 'justify-content': 'start' },
					'50%': { transform: 'rotate(30deg)', 'justify-content': 'end' },
					'100%': { transform: 'rotate(45deg)', 'justify-content': 'end' }
				}
			},
			animation: {
				'mymail': 'rotationmail 4s linear infinite'
			}
		}
	},
	variants: {
		opacity: ['responsive', 'hover']
	},
	purge: [
		'./src/**/*.html',
		'./src/**/*.vue',
		'./src/**/*.jsx',
	],
}
