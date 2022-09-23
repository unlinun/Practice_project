class ReplyView {
  _data;
  _parentElement = document.querySelector(".main");
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
          return this._commentBoxMarkup(reply);
        })
        .join("")}
        </div>`;
      box.insertAdjacentHTML("afterend", markup);
    });
  }
  _commentBoxMarkup(data) {
    return `
        <div class="comment__box" data-id="${data.id}">
            <div class="comment__user user">
                <img
                class="user__image image"
                src="${data.user.image.png}"
                alt="${data.user.username}"
                />
                <div class="user__name ${
                  this._data.user.username === data.user.username
                    ? "user__name--current"
                    : ""
                }">${data.user.username}</div>
                <div class="user__date">${data.createdAt}</div>
            </div>
            <div class="comment__content">
                <p>
                ${data.content}
                </p>
                <div class="content__form form hidden">
                <form class="form__box form__box--edit">
                    <textarea
                    class="form__content form__content--edit"
                    name="reply"
                    cols="30"
                    rows="6"
                    placeholder="Type something..."
                    ></textarea>
                    <button type="submit" class="form__btn">update</button>
                </form>
                </div>
            </div>
            <div class="comment__likes likes">
                <div class="likes__box">
                <button class="likes__btn likes__btn--plus"></button>
                <span class="likes__number">12</span>
                <button class="likes__btn likes__btn--minus"></button>
                </div>
            </div>
            <div class="comment__function function">
                ${this._commentFunctionMarkup(data)}
            </div>
        </div>
        `;
  }
  _commentFunctionMarkup(data) {
    if (this._data.user.username === data.user.username) {
      return `
        <button class="function__btn" data-btn="delete">
            <div class="function__icon function__icon--delete"></div>
            <span class="function__text function__text--red">Delete</span>
        </button>
        <button class="function__btn" data-btn="edit">
            <div class="function__icon function__icon--edit"></div>
            <span class="function__text">Edit</span>
        </button>
        `;
    } else {
      return `
        <button class="function__btn" data-btn="reply">
            <div class="function__icon function__icon--reply"></div>
            <span class="function__text">reply</span>
        </button>
        `;
    }
  }
  addHandlerWindowLoad(handler) {
    window.addEventListener("load", handler);
  }
}
export default new ReplyView();
