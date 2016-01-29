var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react-with-addons.min');
var pathToReactDOM = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');

config = {
	entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
	resolve: {
		alias: {
			'react': pathToReact,
			'react-dom': pathToReactDOM
		}
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	module: {
		loaders: [{
				test: /\.jsx?$/,
				loader: 'babel'
        },
    // SASS
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
    }
        ],
		noParse: [pathToReact,pathToReactDOM]
	}
};

module.exports = config;
