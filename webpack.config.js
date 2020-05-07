// Use ES5 'require' because Webpack dont support ES6 'import statemant'
const path = require('path')
const rules = [
	{
		// Will use 'babel-loader' on all .tsx files except thoose in node_modules
		test: /\.tsx?/,
		exclude: /node_modules/,
		loader: 'babel-loader'
	}
]

module.exports = {
	target: 'web',
	mode: 'development',
	// Entry point of the app
	entry: './src/index.tsx',
	// When project is build will create folder dist in current directory with file bundle.js in it
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {rules},
	// When you want to import some file it wont be necessary to add '.format' example: import index not index.tsx
	resolve: {extensions: ['.ts', '.tsx', '.js']},
	devServer: {
		// Content of the project
		contentBase: './',
		// Starting port of dev server
		port: 5000
	}
}