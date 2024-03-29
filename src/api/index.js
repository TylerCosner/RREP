import glob from "glob";

export default (app) => {
  let routes = glob.sync( "src/api/**")
    .filter(route => route !== "src/api" && route !== "src/api/index.js") // Ignore base dir and index.js
    .filter(route => route.slice(-2) === "js")                    // Filter out folders.
    .map(route => route.slice(7, -3));                            // Remove 'api' from the front and '.js' from the back.

  // Api now matches folder structure!
  routes.map(route => app.use("/api" + route, require("." + route).default));
};
