import ContentView from "./contentView";

class RenderMenu extends ContentView {
  _parentElement = document.querySelector("#container");

  //   create title
  createMenuTitle = function () {
    const menuTitle = document.createElement("div");
    menuTitle.classList.add("title");
    menuTitle.textContent = `GO! GET EATTTTT!`;
    return menuTitle;
  };

  // create navbar
  createMenuNav(title) {
    const navItem = document.createElement("div");
    const navTitle = document.createElement("p");
    navItem.classList.add("nav__item");
    navTitle.classList.add("nav__title");
    navTitle.textContent = `${title}`;
    navItem.setAttribute("data-type", `${title}`);
    navItem.appendChild(navTitle);
    return navItem;
  }
  //create menu
  createMenu(type) {
    const menu = document.createElement("main");
    const menuNav = document.createElement("nav");
    menu.classList.add("menu");
    menuNav.classList.add("menu__nav");
    menuNav.appendChild(this.createMenuNav("new"));
    menuNav.appendChild(this.createMenuNav("special"));
    menuNav.appendChild(this.createMenuNav("food"));
    const activeMenu = menuNav.querySelector(`.nav__item[data-type="${type}"]`);
    activeMenu.classList.add("nav__item--active");
    menu.appendChild(menuNav);
    return menu;
  }

  renderMenu(type) {
    this._parentElement.appendChild(this.createMenuTitle());
    this._parentElement.appendChild(this.createMenu(type));
  }
}

export default new RenderMenu();
