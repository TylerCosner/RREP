import glob from "glob";

glob.sync("models/**.js")
  .filter(file => file !== "models/index.js")
  .map(file => {
    var modelConfig = require(file);
    console.log(file);
    exports[file] = model;
  });
