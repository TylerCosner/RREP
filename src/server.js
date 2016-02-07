import webpack              from "webpack";
import webpackConfig        from "../webpack.config.js";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import morgan               from "morgan";
import api                  from "./api";

// Setup express
var app  = new (require("express"))();

// Setup webpack server
var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

// Request logging
app.use(morgan("combined"));

// API route to check database connection;
app.all("/api/*", (req, res, next) => {
  require("./database").default().then((database) => {
    if (database === null) {
      res.status(500).send("Database Error");
    } else {
      next("route");
    }
  });
});

// Init API routes
api(app);

// Base route
app.get("/*", (req, res) => {
  res.sendFile(__dirname + `/index.html`);
});

// Start server
export default app;
