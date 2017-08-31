const path = require('path');
const webpack = require('webpack');
const entry = require('./amp-config').wpentry;

module.exports = {
	//context: path.resolve(__dirname, './source'),
	entry: entry,
	output: {
		path: path.resolve(__dirname, './release/js'),
		publicPath: '/js/',
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015','stage-2'],
					plugins: ['transform-decorators-legacy']
				}
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	},
	resolve: {
		modules: [
			path.join(__dirname, 'source'),
			'node_modules',
			'source/js/',
			'source/js/modules/'
		],
		extensions: ['.js']
	},
	plugins: [
		new webpack.ProvidePlugin(
			{
				$: "jquery",
				jQuery: "jquery",
				"window.jQuery": "jquery"
			}
		)
	]
};
