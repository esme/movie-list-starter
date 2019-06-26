const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, 'client', 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};