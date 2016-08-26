var path = require('path'),
	webpack = require('webpack'),
	ModernizrWebpackPlugin = require('modernizr-webpack-plugin'),
	entry = require('./amp-config').wpentry;
//	DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
	entry: entry,
	output: {
		path: path.resolve(__dirname, './release/js'),
		publicPath: '/js/',
		filename: '[name].js'
	},
	devServer : {
		inline: true,
		port: 3333,
		contentBase: './release',
		publicPath: '/js/',
		hot: true,
		historyApiFallback: true,
		stats: {
			colors: true
		}
	},
	module: {
		loaders: [
			{
				test: /\.modernizrrc$/,
				loader: 'modernizr'
			},
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015'] 
				}
			},
			{
				test: /\.es6$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015'] 
				}
			}
		]
	},
	resolve: {
		root: [
			path.resolve(__dirname, 'node_modules')
		],
		modulesDirectories: ['node_modules','./source/js/modules/','./source/js/components/'],
		extensions: ['', '.js', '.es6'],
		alias: {
			modernizr$: path.resolve(__dirname, '.modernizrrc')
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		//new DashboardPlugin(),
	],
	devtool: 'eval'
};
