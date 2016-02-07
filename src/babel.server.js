require("babel-register")();

var chokidar = require("chokidar");
var app      = null;
var server   = null;
var port     = 8080;

global.__CLIENT__ = false;
global.__SERVER__ = true;

function startServer(newApp) {
  app = newApp.default;

  server = app.listen(port, function(error) {
    if (error) {
      console.error(error);
    } else {
      console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
    }
  });
}

if (process.env.NODE_ENV !== "production") {
  var watcher = chokidar.watch("server", {persistent: true});

  watcher.add("./src/server.js");
  watcher.add("./src/api/**.js");
  watcher.add("./src/models/**.js");

  watcher.on("change", function() {
    if (server) server.close();

    Object.keys(require.cache).forEach(function(id) {
      if (/(server|api|models|database)/.test(id)) delete require.cache[id];
    });

    startServer(require("./server"));
  });
}

startServer(require("./server"));
