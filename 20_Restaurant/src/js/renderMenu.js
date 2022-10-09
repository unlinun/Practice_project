const parentElement = document.querySelector("#container");

const createMenuTitle = function () {
  const menuTitle = document.createElement("div");
  menuTitle.classList.add("title");
  menuTitle.textContent = `GO! GET EATTTTT!`;
  return menuTitle;
};

const createMenu = function () {
  const menu = document.createElement("main");
  const menuNav = document.createElement("nav");
  menu.classList.add("menu");
  menuNav.classList.add("menu__nav");
  menuNav.appendChild(createMenuNav("NEW"));
  menuNav.appendChild(createMenuNav("SPECIAL"));
  menuNav.appendChild(createMenuNav("FOOD"));
  const first = menuNav.querySelector(".nav__item:first-child");
  first.classList.add("nav__item--active");
  menu.appendChild(menuNav);
  return menu;
};

const createMenuNav = function (title) {
  const navItem = document.createElement("div");
  const navTitle = document.createElement("p");
  navItem.classList.add("nav__item");
  navTitle.classList.add("nav__title");
  navTitle.textContent = `${title}`;
  navItem.appendChild(navTitle);
  return navItem;
};

const renderMenu = function () {
  parentElement.appendChild(createMenuTitle());
  parentElement.appendChild(createMenu());
};

export { renderMenu };
