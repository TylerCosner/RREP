require("babel-register")();

global.__CLIENT__ = false;
global.__SERVER__ = true;

require("./server");
