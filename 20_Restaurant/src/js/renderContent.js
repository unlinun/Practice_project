import ContentView from "./contentView";

class RenderContent extends ContentView {
  _parentElement = document.querySelector("#container");
  _data;

  // content NEW
  createContentNew = function (item) {
    const contentItem = document.createElement("div");
    const contentTitle = document.createElement("h3");
    const contentImg = document.createElement("div");
    const img = document.createElement("img");
    const mark = item.mark ? this.createMark(item) : "";
    const contentText = document.createElement("ul");
    item.property.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item}`;
      contentText.appendChild(listItem);
    });
    contentItem.classList.add("content__item");
    contentItem.classList.add("content__item--new");
    contentTitle.classList.add("content__title");
    contentImg.classList.add("content__img");
    img.src = item.image;
    contentText.classList.add("content__text");

    contentImg.appendChild(img);
    if (mark) {
      mark.classList.add("content__mark");
      contentImg.appendChild(mark);
    }
    contentItem.appendChild(contentTitle);
    contentItem.appendChild(contentImg);
    contentItem.appendChild(contentText);
    return contentItem;
  };

  // content SPECIAL
  createContentSpecial = function (item) {
    const contentItem = document.createElement("div");
    const contentTitle = document.createElement("h3");
    const contentImg = document.createElement("div");
    const img = document.createElement("img");
    const mark = item.mark ? this.createMark(item) : "";

    contentItem.classList.add("content__item");
    contentItem.classList.add("content__item--special");
    contentTitle.classList.add("content__title");
    contentImg.classList.add("content__img");
    img.src = item.image;
    contentImg.appendChild(img);
    if (mark) {
      mark.classList.add("content__mark");
      contentImg.appendChild(mark);
    }
    contentItem.appendChild(contentTitle);
    contentItem.appendChild(contentImg);
    return contentItem;
  };

  // content FOOD
  createContentFood = function (item) {
    const contentItem = document.createElement("div");
    const contentTitle = document.createElement("h3");
    const contentImgFront = document.createElement("div");
    const contentImgBack = document.createElement("div");
    const img = document.createElement("img");

    contentItem.classList.add("content__item");
    contentItem.classList.add("content__item--food");
    contentTitle.textContent = item.title;
    contentImgFront.classList.add("content__img");
    contentImgFront.classList.add("img__front");
    contentImgBack.classList.add("content__img");
    contentImgBack.classList.add("img__back");
    img.src = item.image;
    contentImgFront.appendChild(img);
    contentImgBack.appendChild(contentTitle);

    contentItem.appendChild(contentImgFront);
    contentItem.appendChild(contentImgBack);
    return contentItem;
  };

  renderNewContent(type) {
    const content = document.createElement("div");
    content.classList.add("content");
    content.classList.add(`content__${type}`);
    this._data[type].forEach((item) => {
      if (type === "new") {
        const items = this.createContentNew(item);
        content.appendChild(items);
        return content;
      }
      if (type === "special") {
        const items = this.createContentSpecial(item);
        content.appendChild(items);
        return content;
      }
      if (type === "food") {
        const items = this.createContentFood(item);
        content.appendChild(items);
        return content;
      }
    });
    this._parentElement.appendChild(content);
  }

  ////// add handler
  addHandlerClickMenu(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const menu = e.target.closest(".nav__item");
      if (!menu) return;
      const type = menu.dataset.type;
      const parent = menu.parentElement.parentElement.parentElement;
      parent.innerHTML = "";
      handler(type);
    });
  }
}

export default new RenderContent();
