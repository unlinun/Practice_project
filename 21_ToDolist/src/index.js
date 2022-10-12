import "./scss/style.scss";
import logo1 from "./assets/white-logo.svg";
import logo2 from "./assets/dark-logo.svg";
import menu from "./assets/align-justify.svg";
import user from "./assets/user.svg";
import addNewTaskView from "./js/View/addTaskView";
import taskListView from "./js/View/taskListView";
import menuNavView from "./js/View/menuNavView";
import themeView from "./js/View/themeView";
import * as model from "./js/model";

// window loading
const controlWindowLoad = function () {
  themeView.getTheme();
  const data = model.getStateTask();
  taskListView.renderData(data);
  taskListView.renderTaskList();
  menuNavView.renderData(data);
  menuNavView.renderMenuNav();
};

// Add new task and pass data to model.js
const controlAddNewTaskData = function (data) {
  const newTasks = model.updateTaskState(data);
  taskListView.renderData(newTasks);
  menuNavView.renderData(newTasks);
  taskListView.renderTaskList();
  menuNavView.renderMenuNav();
  taskListView.renderMessage("success added!");
  setTimeout(() => {
    taskListView.removeRenderMessage("");
  }, 2000);
};

const controlDeleteItem = function (id) {
  const data = model.deleteTask(id);
  taskListView.renderData(data);
  taskListView.renderTaskList();
  menuNavView.renderData(data);
  menuNavView.renderMenuNav();
};

const controlCompleteItem = function (id) {
  const data = model.markComplete(id);
  taskListView.renderData(data);
  taskListView.renderTaskList();
  menuNavView.renderData(data);
  menuNavView.renderMenuNav();
};
const controlEditItem = function (data) {
  const newData = model.editTask(data);
  taskListView.renderData(newData);
  taskListView.renderTaskList();
  menuNavView.renderData(newData);
  menuNavView.renderMenuNav();
};
const controlAllTask = function () {
  const data = model.allTask();
  taskListView.renderData(data);
  taskListView.renderTaskList();
};
const controlTodayTask = function () {
  const data = model.todayTask();
  taskListView.renderData(data);
  taskListView.renderTaskList();
};

const controlCompleteTask = function () {
  const data = model.completedTask();
  taskListView.renderData(data);
  taskListView.renderCompleteTrashList();
};

const controlTrashTask = function () {
  const data = model.trashTask();
  taskListView.renderData(data);
  taskListView.renderCompleteTrashList();
};

const controlProjectsTask = function (project) {
  const data = model.projectsTask(project);
  taskListView.renderData(data);
  taskListView.renderTaskList();
};
// INIT
const init = function () {
  addNewTaskView.addHandlerAddTaskData(controlAddNewTaskData);
  taskListView.addHandlerWindowLoad(controlWindowLoad);
  taskListView.addHandlerDeleteTask(controlDeleteItem);
  taskListView.addHandlerEditTask(controlEditItem);
  taskListView.addHandlerCompleteTask(controlCompleteItem);
  menuNavView.addHandlerTodayTask(controlTodayTask);
  menuNavView.addHandlerAllTask(controlAllTask);
  menuNavView.addHandlerCompleted(controlCompleteTask);
  menuNavView.addHandlerTrash(controlTrashTask);
  menuNavView.addHandlerProjectsFilter(controlProjectsTask);
};
init();
