const WebpackDevServer = require('webpack-dev-server');
//var Dashboard = require('webpack-dashboard');
//var DashboardPlugin = require('webpack-dashboard/plugin');
const webpack = require('webpack');
const config = require('./webpack.config.js');

const compiler = webpack(config);
//const dashboard = new Dashboard();

//compiler.apply(new DashboardPlugin(dashboard.setData));

/**
 * Create a webpack dev server and listens on the given port
 * @param {int} PORT - the port on which to listen
 */
module.exports = (PORT, HOT, PROTO, INLINE) => {
	const server = new WebpackDevServer(
		compiler,
		{
			contentBase: './release',
			publicPath: '/release/js',
			hot: HOT,
			open: 'http://localhost:8080/',
			https: PROTO,
			inline: INLINE,
			stats: {
				colors: true
			}
		}
	);

		server.listen(PORT, 'localhost', function () {
			console.log(`WebpackDevServer running on port ${PORT} and hot = ${HOT}`)
		}
	)
}