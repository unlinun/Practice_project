import contentView from "./contentView";

class renderContentNew extends contentView {
  _parentElement = document.querySelector("#container");
  _data;

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
}

export default new renderContentNew();
