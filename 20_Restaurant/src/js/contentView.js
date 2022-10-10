export default class ContentView {
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
}
