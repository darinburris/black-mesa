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
			}
		]
	},
	resolve: {
		modules: [
			path.join(__dirname, 'source'),
			'node_modules',
			'source/js/',
			'source/js/modules/',
			'source/js/components/'
		],
		extensions: '.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.CommonsChunkPlugin(
			{
				name: 'commons',
				filename: 'commons.js',
				minChunks: 2,
			}
		),
	],
	devServer: {
		contentBase: path.resolve(__dirname, './release'),
		port: 3000,
		publicPath: '/js/'
	},
};
