import webpack              from "webpack";
import webpackConfig        from "../webpack.config.dev.js";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import morgan               from "morgan";

// Setup express
var app  = new (require("express"))();
var port = 8080;

// Setup webpack server
var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

// Request logging
app.use(morgan("combined"));

// Base route
app.get("/*", (req, res) => {
  res.sendFile(__dirname + `/index.html`);
});

// Start server
https.createServer(options, app).listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
