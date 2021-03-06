const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');
const entry = require('./amp-config').wpentry;

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : false,
  entry: entry,
  output: {
	path: path.resolve(__dirname, './release/js'),
	publicPath: '/js/',
	filename: '[name].js',
	},
	plugins: [
		new webpack.ProvidePlugin(
			{
				$: "jquery",
				jQuery: "jquery",
				"window.jQuery": "jquery"
			}
		)
	],
};
