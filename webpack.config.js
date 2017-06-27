var path = require('path');

module.exports = {
  target: 'electron',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      { 
        test: /\.tsx?$/,
        loader: 'ts-loader',
      }
    ]
  }
}
