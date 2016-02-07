import express from "express";

var router = express.Router();

router.get("/", (req, res) => {
  var Todo = require("../models/Todo").default;
  Todo.fetchAll()
    .then((todos) => {
      res.json(todos);
    });
});

export default router;
