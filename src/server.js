import webpack              from "webpack";
import webpackConfig        from "../webpack.config.js";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import morgan               from "morgan";
import knex                 from "knex";
import models               from "./models";
import api                  from "./api";

// Setup express
var app  = new (require("express"))();

var db = null;
var bookshelf = null;

var checkDatabaseConnection = () => {
  if (db !== null) return;
 
  try {
    db = knex({
      client: "pg",
      connection: process.env.DATABASE_URL,
      debug: true,
      pool: {
        min: 0,
        max: 4
      },
      migrations: {
        tableName: "src/migrations"
      }
    });

    db.migrate.latest()
      .then(() => {
        bookshelf = require("bookshelf")(knex);

        Object.keys(models).map((modelName) => {
          var modelConfig = models[modelName];
          models[modelName] = bookshelf.Model.extend(modelConfig);
        });
      });
  } catch (e) {
    return false;
  }

  return true;
};

// Setup webpack server
var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

// Request logging
app.use(morgan("combined"));

// API route to check database connection;
app.all("/api/*", (req, res, next) => {
  if (!checkDatabaseConnection()) {
    res.status(500).send("Database Error");
    return;
  }

  next();
});

// Init API routes
api(app);

// Base route
app.get("/*", (req, res) => {
  res.sendFile(__dirname + `/index.html`);
});

// Start server
export default app;
