import express from "express";
import Todo    from "../models/Todo";

var router = express.Router();

router.get("/", (req, res) => {
  Todo.fetchAll()
    .then((todos) => {
      res.json(todos);
    });
});

export default router;
