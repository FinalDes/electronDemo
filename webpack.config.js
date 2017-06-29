var path = require('path');

module.exports = {
  target: 'electron',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules:[
      { 
        test: /\.tsx?$/,
        loader: 'ts-loader',
      }
    ]
  }
}
