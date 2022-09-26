import boxView from "./boxView";

class CommentView {
  _data;
  _parentElement = document.querySelector(".main");
  constructor() {}
  //   獲取到 model 的 data
  renderData(data) {
    if (!data) return;
    this._data = data;
    this._clearParent();
    this._generateMarkup();
  }
  _clearParent() {
    this._parentElement.innerHTML = "";
  }
  //   產生 comment html
  _generateMarkup() {
    const markup = this._data.comments
      .map((comment) => {
        return ` <div class="main__comment comment comment--main">
      ${boxView._commentBoxMarkup(this._data, comment)}
      </div>`;
      })
      .join("");
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  //   event handler
  // window load
  addHandlerWindowLoad(handler) {
    window.addEventListener("load", function () {
      handler();
    });
  }
}

export default new CommentView();
