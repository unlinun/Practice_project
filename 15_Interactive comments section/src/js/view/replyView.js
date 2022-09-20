import View from "./view.js";

class ReplyView extends View {
  _parentElement;

  _getParent(id) {
    const parentElements = document.querySelectorAll(".comment--main");
    parentElements.forEach((el) => {
      if (+el.dataset.id === id) {
        this._parentElement = el;
      }
    });
  }
  renderReply(data) {
    if (!data) return;
    this._data = data;
    this._generateMarkup();
  }
  _generateMarkup() {
    this._data.comments.forEach((comment) => {
      this._getParent(comment.id);
      const html = comment.replies
        .map((reply) => {
          if (reply.length === 0) return;
          return this._commentMarkup(reply);
        })
        .join("");

      const markup = ` <div class="comment comment--reply data-id="${comment.id}">
         ${html} </div> `;
      this._parentElement.insertAdjacentHTML("beforeend", markup);
    });
  }
  _commentMarkup(data) {
    return `
          <div class="comment__box">
              <div class="comment__user user">
                <img
                  class="user__image image"
                  src="${data.user.image.png}"
                  alt="${data.user.username}"
                />
                <div class="user__name ${
                  data.user.username === this._data.user.username
                    ? "user__name--current"
                    : ""
                }">${data.user.username}</div>
                <div class="user__date">${data.createdAt}</div>
              </div>
              <div class="comment__content">
                <p>
                 ${data.content}
                </p>
                <div class="comment__form form hidden">
                  <form class="form__box form__box--edit">
                    <textarea
                      class="form__content form__content--edit"
                      name="reply"
                      cols="30"
                      rows="6"
                      placeholder="Type something..."
                    >${data.content}</textarea>
                    <button class="form__btn form__btn--update" data-btn ="update">update</button>
                  </form>
                </div>
              </div>
              <div class="comment__likes likes">
                <div class="likes__box">
                  <button class="likes__btn likes__btn--plus"></button>
                  <span class="likes__number">${data.score}</span>
                  <button class="likes__btn likes__btn--minus"></button>
                </div>
              </div>
              <div class="comment__function function">
              ${this._functionMarkup(data)}
              </div>
              <div class="comment comment--reply"></div> 
          </div>
      `;
  }
  _functionMarkup(data) {
    if (data.user.username !== this._data.user.username) {
      return `
        <button class="function__box" data-btn ="reply">
            <div class="function__btn function__btn--reply">
            </div>
            <span class="function__text">Reply</span>
        </button>
        `;
    } else {
      return `
        <button class="function__box" data-btn ="delete">
            <div class="function__btn function__btn--delete"></div>
            <span class="function__text function__text--red">Delete</span>
        </button>
        <button class="function__box" data-btn ="edit">
            <div class="function__btn function__btn--edit"></div>
            <span class="function__text">Edit</span>
        </button>`;
    }
  }

  addEventLoadComment(handler) {
    window.addEventListener("load", handler);
  }
}

export default new ReplyView();
