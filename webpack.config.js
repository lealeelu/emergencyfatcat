const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: './emergency.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './*.html' },
    ])
  ]
};
