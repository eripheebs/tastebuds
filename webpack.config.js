const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
    inline: true,
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: ['src', 'node_modules']
  },

  module: {
    rules: [
        { test: /\.tsx?$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                babelrc: true,
                plugins: ['react-hot-loader/babel'],
              },
            },
            'awesome-typescript-loader'
          ],
          include: path.resolve('src')
        },

        { enforce: "pre", test: /\.js$/, loader: 'source-map-loader' },
    ]
  },

  mode: 'production',

  // The created bundle relies on that dependency to be present in the consumer's environment
  // Prevent bundling of certain imported packages and instead retrieve these
  // external dependencies at runtime. https://webpack.js.org/configuration/externals/
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
};
