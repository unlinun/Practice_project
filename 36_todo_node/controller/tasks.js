const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");

//取得所有在 mongoDB 的 data
const getAllTasks = asyncWrapper(async (req, res) => {
  // 使用 model.find()=> 來取得一個 collection中的所有data
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

// async function
const createTask = asyncWrapper(async (req, res) => {
  //使用 Task.create 創建一個 document
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getSingleTask = asyncWrapper(async (req, res) => {
  // 利用 req.params 來取得網址後方傳入的 id 資料
  const { id: taskID } = req.params;
  // 使用 Task.findOne => 來取得 collection 中的特定項目
  // 記得！ await
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return res.status(404).json({ msg: `No task found` });
  }
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  // 使用 Task.findOneAndUpdate({},要更新得值,{options})
  const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json({ msg: `no task found!` });
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndDelete({ _id: taskID });
  if (!task) {
    return res.status(404).json({ msg: `task not found!` });
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
