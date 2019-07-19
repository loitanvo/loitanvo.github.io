const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './React/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }, 
  module: {
      rules:[
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }]

  },
  resolve: {
      modules: [
          "node_modules",
          path.resolve(__dirname, 'React')
      ],
    extensions: ['.js', '.jsx'], 
  },
  devtool: "source-map",
  plugins: [
     new HtmlWebpackPlugin({
         title: "myapp",
         filename: "index.html",
         template: "./index.html"
     })
  ] 
  
};