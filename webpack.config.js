var path    = require("path");
var webpack = require("webpack");

module.exports = {
  entry: {
    app: [
      "./src/main.js",
      "webpack-hot-middleware/client"
    ],
    vendor: ["react"]
  },

  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "./build"),
    publicPath: "/build/",
    sourceMapFilename: "debug/[file].map"
  },

  module: {
    loaders: [
      { test: /\.js?$/, loaders: ["babel", "eslint"], include: path.join(__dirname, "src"), exclude: /node_modules/ },
      { test: /\.css$/, loader: "style!css?sourceMap" },
      { test: /\.scss$/, loader: "style!css!sass?sourceMap" },
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader" }
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "vendor.js",
      minChunks: Infinity
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ],

  resolve: {
    alias: {
      purecss: __dirname + "/node_modules/purecss/build/pure-min.css"
    }
  }
};
