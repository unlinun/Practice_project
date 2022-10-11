// SHOW ADD TASK FORM
const addNewTaskView = (function () {
  // DOM SELECT
  const addBtn = document.querySelector(".function__btn--add");
  const overlay = document.querySelector(".tasks__overlay");
  const taskForm = document.querySelector(".tasks__form");
  const submitBtn = document.querySelector(".form__button");
  const form = document.querySelector(".form");
  const inputTime = form.querySelector("#input__date");
  const inputTask = form.querySelector("#input__task");
  const inputProject = form.querySelector("#input__project");
  const inputPriority = form.querySelector(".input__priority");

  ////// function //////
  const clearValue = function () {
    inputTime.value = "";
    inputTask.value = "";
    inputProject.value = "";
    inputPriority.value = "";
  };
  const showTaskForm = function () {
    taskForm.classList.remove("hidden");
  };
  const hideTaskForm = function () {
    taskForm.classList.add("hidden");
  };

  //////  ADD HANDLER /////
  addBtn.addEventListener("click", showTaskForm);
  overlay.addEventListener("click", hideTaskForm);

  const addHandlerAddTaskData = function (handler) {
    submitBtn.addEventListener("click", function (e) {
      const time = inputTime.value;
      const task = inputTask.value;
      const project = inputProject.value;
      const priority = inputPriority.value;
      console.log(time, task, priority, project);
      if (!time || !task || !project || !priority) return;
      const data = {
        time,
        task,
        project,
        priority,
      };
      hideTaskForm();
      clearValue();
      handler(data);
    });
  };
  return {
    addHandlerAddTaskData,
  };
})();

export default addNewTaskView;
