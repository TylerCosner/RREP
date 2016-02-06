import jsdom from "jsdom";

global.document = jsdom.jsdom("<!doctype html><html><body></body></html>");
global.window   = document.parentWindow;

var context = require.context('.', true, /.+\.spec\.jsx?$/);
context.keys().forEach(context);

export default context;
