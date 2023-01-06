const express = require("express");

const isLiggedIn = require("../middleware/isLiggedIn");
const {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todos");
const router = express.Router();

router.get("/", isLiggedIn, getAllTodos);
router.post("/", isLiggedIn, createTodo);
router.patch("/:id", isLiggedIn, updateTodo);
router.delete("/:id", isLiggedIn, deleteTodo);

module.exports = router;
