export default class View {
  _data;
  _parentElement;
  _render(data) {
    if (!data) return this._renderError();
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  _renderSpinner() {
    const markup = `
    <div class="spinner"></div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  _clear() {
    this._parentElement.innerHTML = "";
  }
  _renderError() {
    console.log("err");
  }
}
