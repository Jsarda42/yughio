module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' for dark mode
	theme: {
	  extend: {
		backgroundImage: {
		  'custom-gradient': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
		},
		colors: {
		  primary: '#3490dc',
		  secondary: '#ffed4a',
		  danger: '#e3342f',
		},
	  },
	},
	plugins: [],
  }  

