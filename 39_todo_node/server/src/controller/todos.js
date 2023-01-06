const TodoModel = require("../models/todoModel");

// READ
const getAllTodos = async (req, res) => {
  try {
    // fetch todo list from data base
    const todos = await TodoModel.find();
    console.log(todos);
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE
const createTodo = async (req, res) => {
  try {
    const { text } = req.body;
    // 使用 mongoose => 創建新的model => new TodoModel
    const todo = new TodoModel({
      text,
    });
    const newTodo = await todo.save();
    res.status(200).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    // 使用 findOneAndUpdate({},要更新得值,{options})
    const todo = await TodoModel.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!todo) {
      return res.status(404).json({ msg: `no todo found!` });
    }
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    // 使用 findByIdAndDelete({ _id: taskID })
    const todo = await TodoModel.findByIdAndDelete({ _id: id });
    if (!todo) {
      return res.status(404).json({ msg: `no todo found!` });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllTodos, createTodo, updateTodo, deleteTodo };
