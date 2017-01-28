var path = require('path');

module.exports = {
  entry: [
    "./js/index.js",
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, include: path.resolve(__dirname, "js"),loaders: ['babel'], presets: ['es2015']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  },
  stats: {
    colors: true
  },
  devtool: "source-map"
};
