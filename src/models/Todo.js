var Bookshelf = require("../database").default();

var Todo = Bookshelf.Model.extend({
  tableName: "todos"
});

export default Bookshelf.model("Todo", Todo);
