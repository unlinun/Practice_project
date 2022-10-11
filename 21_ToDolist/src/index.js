import "./scss/style.scss";
import logo from "./assets/logo.svg";
import menu from "./assets/align-justify.svg";
import user from "./assets/user.svg";
import * as model from "./js/model";
import addNewTaskView from "./js/View/addTaskView";

// Add new task and pass data to model.js
const controlAddNewTaskData = function (data) {
  const newTasks = model.updateTaskState(data);
  console.log(newTasks);
};

const init = function () {
  addNewTaskView.addHandlerAddTaskData(controlAddNewTaskData);
};
init();
