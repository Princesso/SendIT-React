const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config();


module.exports = {
  entry: './src/index.js',
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'main.js',
    publicPath: '/'
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin ({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        MAP_KEY: JSON.stringify(process.env.MAP_KEY),
        API_URL: JSON.stringify(process.env.API_URL),
        MAP_API_KEY: JSON.stringify(process.env.MAP_API_KEY),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
      },
    }),
  ],
  devServer: {
    proxy: {
      '/api': 'http://localhost:8080',
    },
    historyApiFallback: true
  }
}