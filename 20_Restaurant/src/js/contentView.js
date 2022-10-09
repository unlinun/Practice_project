export default class contentView {
  _data;

  renderData = function (data) {
    if (!data) return;
    this._data = data;
  };

  createMark = function (item) {
    const mark = document.createElement("p");
    mark.classList.add("content__mark");
    mark.textContent = `${item.mark}`;
    return mark;
  };

  renderNewContent(type) {
    const content = document.createElement("div");
    content.classList.add("content");
    this._data[type].forEach((item) => {
      console.log(item);
      const items = this.createContentNew(item);
      console.log(items);
      content.appendChild(items);
    });
    this._parentElement.appendChild(content);
  }
}
