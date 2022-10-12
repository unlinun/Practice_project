import addNewTaskView from "./addTaskView";

const taskListView = (function () {
  const _parentElement = document.querySelector(".task");
  const selectAllBtn = document.querySelector(".function__btn--select");
  const deleteBtn = document.querySelector(".function__btn--delete");
  const infoTitle = document.querySelector(".info__title");

  let _data;
  let edit = false;
  const renderData = function (data) {
    if (!data) return;
    _data = data;
  };
  const renderTaskList = function () {
    if (!_data || _data.length === 0) {
      renderMessage(`NO TASK YET`);
      setTimeout(() => {
        removeRenderMessage("");
      }, 3000);
    } else {
      _parentElement.innerHTML = "";
      _data.forEach((task) => {
        if (task.trash || task.completed) return;
        const box = renderTaskBox(task);
        _parentElement.appendChild(box);
      });
    }
  };
  const renderCompleteTrashList = function () {
    _parentElement.innerHTML = "";
    if (!_data) return;
    _data.forEach((task) => {
      const box = renderTaskBox(task);
      const editBtn = box.querySelector(".task__btn--edit");
      const okBtn = box.querySelector(".task__btn--ok");
      box.classList.add("completed");
      editBtn.classList.add("disable");
      okBtn.classList.add("disable");
      _parentElement.appendChild(box);
    });
  };
  // RENDER TASK BOX
  const renderTaskBox = function (task) {
    const taskBox = document.createElement("div");
    const checkBox = document.createElement("input");
    const taskTime = document.createElement("div");
    const taskDate = document.createElement("input");
    const taskDay = document.createElement("input");
    const taskTitle = document.createElement("input");
    const taskProject = document.createElement("input");
    const taskBtn = document.createElement("div");
    const editBtn = document.createElement("input");
    const okBtn = document.createElement("input");

    taskBox.classList.add("task__box");
    taskBox.classList.add("task__box--read");

    taskBox.setAttribute("data-priority", `${task.priority}`);
    taskBox.setAttribute("data-id", `${task.id}`);

    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("name", "task__check");
    checkBox.setAttribute("id", "task__check");
    taskTime.classList.add("task__time");
    taskDate.classList.add("task__date");
    taskDay.classList.add("task__day");
    taskTitle.classList.add("task__title");
    taskProject.classList.add("task__project");
    taskBtn.classList.add("task__btns");
    editBtn.classList.add("task__btn");
    editBtn.classList.add("task__btn--edit");
    okBtn.classList.add("task__btn");
    okBtn.classList.add("task__btn--ok");
    taskDate.setAttribute("type", "number");
    taskDay.setAttribute("type", "text");
    taskTitle.setAttribute("type", "text");
    taskProject.setAttribute("type", "text");
    editBtn.setAttribute("type", "button");
    okBtn.setAttribute("type", "button");

    taskDate.value = task.time["date"];
    taskDay.value = task.time["day"];
    taskTitle.value = task.task;
    taskProject.value = task.project;
    editBtn.value = `edit`;
    okBtn.value = `ok`;

    taskTime.appendChild(taskDate);
    taskTime.appendChild(taskDay);
    taskBtn.appendChild(editBtn);
    taskBtn.appendChild(okBtn);
    taskBox.appendChild(checkBox);
    taskBox.appendChild(taskTime);
    taskBox.appendChild(taskTitle);
    taskBox.appendChild(taskProject);
    taskBox.appendChild(taskBtn);

    return taskBox;
  };

  const renderMessage = function (message) {
    const alert = document.querySelector(".tasks__message");
    alert.textContent = message;
    alert.style.opacity = 1;
  };
  const removeRenderMessage = function (message) {
    const alert = document.querySelector(".tasks__message");
    alert.textContent = message;
    alert.style.opacity = 0;
  };

  ////// ADD EVENT HANDLER //////
  selectAllBtn.addEventListener("click", function (e) {
    const checkBoxes = _parentElement.querySelectorAll("#task__check");
    checkBoxes.forEach((box) => {
      box.checked = !box.checked;
    });
  });
  //   window load event
  const addHandlerWindowLoad = function (handler) {
    window.addEventListener("load", handler, { once: true });
  };
  //    delete task
  const addHandlerDeleteTask = function (handler) {
    deleteBtn.addEventListener("click", function (e) {
      const checkBoxes = _parentElement.querySelectorAll("#task__check");
      checkBoxes.forEach((box) => {
        if (box.checked) {
          const element = box.closest(".task__box");
          const id = element.dataset.id;
          handler(id);
          renderMessage("success deleted!");
          setTimeout(() => {
            removeRenderMessage("");
          }, 2000);
        }
      });
    });
  };
  //ok btn
  const addHandlerCompleteTask = function (handler) {
    _parentElement.addEventListener("click", function (e) {
      const okBtn = e.target.closest(".task__btn--ok");
      if (!okBtn) return;
      const element = okBtn.closest(".task__box");
      const id = element.dataset.id;
      handler(id);
      renderMessage("completed task!");
      setTimeout(() => {
        removeRenderMessage("");
      }, 2000);
    });
  };
  // edit task
  const addHandlerEditTask = function (handler) {
    _parentElement.addEventListener("click", function (e) {
      const editBtn = e.target.closest(".task__btn--edit");
      if (!editBtn) return;
      edit = !edit;
      //   按第一下 edit 時
      if (edit) {
        const element = editBtn.closest(".task__box");
        editBtn.value = "save";
        element.classList.remove("task__box--read");
        element.classList.add("task__box--edit");
      }
      //  按第二下 edit 時
      if (!edit) {
        const element = editBtn.closest(".task__box");
        editBtn.value = "edit";
        element.classList.remove("task__box--edit");
        element.classList.add("task__box--read");
        addNewTaskView.hideTaskForm();
        // 獲得新的修改 data
        const id = element.dataset.id;
        const date = +element.querySelector(".task__date").value;
        const day = element.querySelector(".task__day").value;
        const title = element.querySelector(".task__title").value;
        const project = element.querySelector(".task__project").value;
        const data = {
          id,
          date,
          day,
          title,
          project,
        };
        handler(data);
        renderMessage("success edit!");
        setTimeout(() => {
          removeRenderMessage("");
        }, 2000);
      }
    });
  };

  return {
    renderData,
    renderTaskList,
    renderCompleteTrashList,
    renderMessage,
    removeRenderMessage,
    addHandlerWindowLoad,
    addHandlerDeleteTask,
    addHandlerEditTask,
    addHandlerCompleteTask,
  };
})();

export default taskListView;
