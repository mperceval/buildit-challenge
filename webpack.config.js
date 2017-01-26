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
      {
        loader: "babel-loader",
        // Skip any files outside of the project's src dir
        include: [
          path.resolve(__dirname, "js"),
        ],
        test: /\.js$/,
        query: {
          presets: ['es2015'],
        }
      },
      {
        test: /\.css/,
        loaders: ['style', 'css'],
        include: __dirname + '/css'
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: "source-map"
};
