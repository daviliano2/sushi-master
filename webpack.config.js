const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: './src',
    hot: true,
    port: 4444,
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};