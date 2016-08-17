var path = require('path'),
	webpack = require('webpack'); 
module.exports = {
	entry: {
		'bundle': './source/js/entry.js',
		'bundle2': './source/js/entry2.js'
	},
	output: {
		path: path.resolve(__dirname, './release/js'),
		publicPath: '/js/',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				//test: /\.es6$/,
				test: /\.js$/,
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
//			path.resolve(__dirname, 'bower_components'),
			path.resolve(__dirname, 'node_modules')
		],
		extensions: ['', '.js', '.es6']
	},
	plugins: [
		new webpack.ProvidePlugin(
			{
				$: 'jquery',
				jQuery: 'jquery',
				"window.jQuery": 'jquery'
			}
		)
	]
/*    module: {
		loaders: [
			{ test: /\.css$/, loader: 'style!css' }
		]
	}*/
 
};
