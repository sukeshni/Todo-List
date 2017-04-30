var webpack =require('webpack');
var path = require('path');

module.exports = {
  // Which filetypes are in our project and where they are located 
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    // How to process project files woth loaders 
    loaders: [
      // Process any .js file or .jsx file with Babel
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader']
      }
    ]
  },
  // Which file is the entry point to out application
  entry: [
    './src/index.jsx'
  ],
  // Where to output the final bundled code to
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'app.js',
  }
};