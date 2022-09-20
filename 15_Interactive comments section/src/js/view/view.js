export default class View {
  _parentElement;
  _data;
  renderData(data) {
    if (!data) return;
    this._data = data;
    const markup = this._generateMarkup();
    this._clearParentElement();
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }
  _clearParentElement() {
    this._parentElement.innerHtml = "";
  }
}
