const menuNavView = (() => {
  const _parentElement = document.querySelector('.nav__list--projects');
  const allTask = document.querySelector('.nav__item[data-nav="all"]');
  const todayTask = document.querySelector('.nav__item[data-nav="today"]');
  const completedTask = document.querySelector(
    '.nav__item[data-nav="completed"]'
  );
  const trashTask = document.querySelector('.nav__item[data-nav="trash"]');
  const infoTitle = document.querySelector('.info__title');

  let _data;
  const renderData = function (data) {
    if (!data) return;
    _data = data;
  };

  const renderMenuNav = function () {
    if (!_data) return;
    const projects = _data.map(task => task.project);
    // use Set ! don't want to repeat data!!
    const newProject = new Set(projects);
    _parentElement.innerHTML = '';
    newProject.forEach(project => {
      // eslint-disable-next-line no-use-before-define
      const item = renderMenuProject(project);
      _parentElement.appendChild(item);
    });
  };

  const renderMenuProject = function (data) {
    const navItem = document.createElement('li');
    navItem.classList.add('nav__item');
    navItem.classList.add('nav__item--projects');
    navItem.setAttribute('data-project', `${data}`);
    navItem.textContent = data;
    return navItem;
  };

  /// /// ADD HANDLER ////
  const addHandlerProjectsFilter = handler => {
    _parentElement.addEventListener('click', e => {
      const { project } = e.target.dataset;
      handler(project);
    });
  };

  const addHandlerAllTask = handler => {
    allTask.addEventListener('click', () => {
      infoTitle.textContent = `All Tasks`;
      handler();
    });
  };
  const addHandlerTodayTask = handler => {
    todayTask.addEventListener('click', () => {
      infoTitle.textContent = `Today Tasks`;
      handler();
    });
  };
  const addHandlerCompleted = handler => {
    completedTask.addEventListener('click', () => {
      infoTitle.textContent = `Completed Tasks`;
      handler();
    });
  };
  const addHandlerTrash = handler => {
    trashTask.addEventListener('click', () => {
      infoTitle.textContent = `Deleted Tasks`;
      handler();
    });
  };
  return {
    renderData,
    renderMenuNav,
    addHandlerProjectsFilter,
    addHandlerTodayTask,
    addHandlerAllTask,
    addHandlerCompleted,
    addHandlerTrash,
  };
})();

export default menuNavView;
