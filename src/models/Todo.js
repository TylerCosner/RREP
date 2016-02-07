import Bookshelf from "../database";

var Todo = Bookshelf.Model.extend({
  tableName: "todos"
});

export default Bookshelf.model("Todo", Todo);
