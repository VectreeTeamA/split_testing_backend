var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.ejs',
  output: {
    path: path.join(__dirname, 'client'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow']
        }
      },
      {
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-render-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.ejs',
    })
  ],
};
