var path = require('path'),
	webpack = require('webpack'),
	ModernizrWebpackPlugin = require('modernizr-webpack-plugin');
//	DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
	entry: {
		'bundle': './source/js/entry.js',
		'bundle2': './source/js/entry2.js'
	},
	output: {
		path: path.resolve(__dirname, './release/js'),
		publicPath: '/release/js/',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.modernizrrc$/,
				loader: "modernizr"
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
			},
/*			{
				test: /\.css$/,
				loader: 'style!css'
			}*/
		]
	},
	resolve: {
		root: [
			path.resolve(__dirname, 'node_modules')
		],
		modulesDirectories: ['source/js/modules', 'node_modules'],
		extensions: ['', '.js', '.es6'],
		alias: {
			modernizr$: path.resolve(__dirname, ".modernizrrc")
		}
	},
	plugins: [
		//new DashboardPlugin(),
		new webpack.ProvidePlugin(
			{
				$: 'jquery',
				jQuery: 'jquery',
				"window.jQuery": 'jquery'
			}
		)
	]
};
