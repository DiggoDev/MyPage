const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	mode: "development",
	entry: './src/index.tsx',
	devtool: 'inline-source-map',
	module: {
		rules: [{
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node_modules/,
		}],
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: "static", to: "./" },
			],
		}),
	],
  	resolve: {
    	extensions: ['.tsx', '.ts', '.js'],
  	},
  	output: {
		clean: true,
    	filename: 'bundle.js',
    	path: path.resolve(__dirname, 'dev'),
  	},
};