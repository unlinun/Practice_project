class CommentView {
  _data;
  _parentElement = document.querySelector(".main");
  //   獲取到 model 的 data
  renderData(data) {
    if (!data) return;
    this._data = data;
    this._clearParent();
    // 產生 html
    this._generateMarkup();
  }
  _clearParent() {
    this._parentElement.innerHTML = "";
  }
  //   產生 comment html
  _generateMarkup() {
    const markup = `
        <div class="main__comment comment comment--main">
        ${this._data.comments
          .map((comment) => {
            return this._commentBoxMarkup(comment);
          })
          .join("")}
        </div>
    `;
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  _commentBoxMarkup(data) {
    console.log(this._data);
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

  //   判斷 function 中的 btn
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

  //   event handler
  addHandlerWindowLoad(handler) {
    window.addEventListener("load", function () {
      handler();
    });
  }
}

export default new CommentView();
