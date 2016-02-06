var webpackConfig = require("./webpack.config.js");
webpackConfig.devtool = "inline-source-map";

module.exports = function(config) {
  config.set({
    browsers: ["Chrome"],

    frameworks: ["chai", "mocha"],

    files: [
      "test/setup.js"
    ],

    plugins: [
      "karma-chai",
      "karma-mocha",
      "karma-sourcemap-loader",
      "karma-webpack"
    ],

    preprocessors: {
      "test/setup.js": ["webpack", "sourcemap"]
    },

    singleRun: true,

    reporters: ["dots"],

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    }
  });
};
