var webpack = require('webpack');

module.exports = {
  cache: true,  
  devtool: "source-map",
  module: {
    rules: [
      {        
		test: /\.m?js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};