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
      enforce: 'pre',
      test: /\.tsx?$/,
      loader: 'tslint-loader',
      exclude: /node_modules/,
      options:{
        emitErrors: false,
        failOnHint: true,
        tsConfigFile: 'tsconfig.json',
      }
    },
    { 
      test: /\.tsx?$/,
      loader: 'ts-loader',
    }
    ]
  }
}
