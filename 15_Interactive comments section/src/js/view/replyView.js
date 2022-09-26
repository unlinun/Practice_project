import boxView from "./boxView";

class ReplyView {
  _data;
  _parentElement = document.querySelector(".main");
  reply = false;
  constructor() {}
  renderData(data) {
    if (!data) return;
    this._data = data;
    // 產生 html
    this._generateMarkup();
  }

  _generateMarkup() {
    const commentBox = this._parentElement.querySelectorAll(".comment__box");
    commentBox.forEach((box, i) => {
      const markup = `
      <div class="comment comment--reply">
      ${this._data.comments[i].replies
        .map((reply) => {
          return boxView._commentBoxMarkup(this._data, reply);
        })
        .join("")}
        </div>`;
      box.insertAdjacentHTML("afterend", markup);
    });
  }

  // ADD EVENT HANDLER
  addHandlerWindowLoad(handler) {
    window.addEventListener("load", handler);
  }
}
export default new ReplyView();
