// SHOW ADD TASK FORM
const addNewTaskView = (() => {
  // DOM SELECT
  const addBtn = document.querySelector('.function__btn--add');
  const overlay = document.querySelector('.tasks__overlay');
  const taskForm = document.querySelector('.tasks__form');
  const submitBtn = document.querySelector('.form__button');
  const form = document.querySelector('.form');
  const inputTime = form.querySelector('#input__date');
  const inputTask = form.querySelector('#input__task');
  const inputProject = form.querySelector('#input__project');
  const inputPriority = form.querySelectorAll('.input__priority');

  // eslint-disable-next-line prefer-const
  let edit = false;
  /// /// function //////
  const clearValue = () => {
    inputTime.value = '';
    inputTask.value = '';
    inputProject.value = '';
    inputPriority.checked = false;
  };
  const showTaskForm = () => {
    taskForm.classList.remove('hidden');
  };
  const hideTaskForm = () => {
    taskForm.classList.add('hidden');
  };

  /// ///  ADD HANDLER /////
  addBtn.addEventListener('click', showTaskForm);
  overlay.addEventListener('click', hideTaskForm);

  const addHandlerAddTaskData = function (handler) {
    submitBtn.addEventListener('click', () => {
      if (edit) return;
      const time = inputTime.value;
      const task = inputTask.value;
      const project = inputProject.value;
      // 10/12 bug , needs to loop over an array to get value(checked === true)!
      const [priorityElement] = Array.from(inputPriority).filter(
        input => input.checked
      );
      const priority = priorityElement.value;
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
    edit,
    showTaskForm,
    hideTaskForm,
    addHandlerAddTaskData,
  };
})();

export default addNewTaskView;
