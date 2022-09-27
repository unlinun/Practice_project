class FormView {
  _data;
  _parentElement = document.querySelector(".main");
  _replyTo;
  _replyID;
  _likesID;
  renderData(data) {
    if (!data) return;
    this._data = data;
  }

  _generateMarkup() {
    return `
    <div class="comment__form form">
        <form class="form__box">
        <textarea
            class="form__content"
            name="reply"
            cols="30"
            rows="6"
            placeholder=""
        >@${this._replyTo} </textarea>
        <img
            class="form__image image"
            src="${this._data.user.image.png}"
            alt="${this._data.user.username}"
        />
        <button type="submit" class="form__btn" data-btn="reply-to">reply</button>
        </form>
    </div>
    `;
  }
  getNewCommentData(parent) {
    const text = parent.querySelector(".form__content").value;
    if (text === "") return;
    const image = parent.querySelector(".form__image").getAttribute("src");
    const user = parent.querySelector(".form__image").getAttribute("alt");
    return {
      createdAt: new Date().getTime(),
      content: text,
      replies: [],
      score: 0,
      user: {
        image: {
          png: image,
        },
        username: user,
      },
    };
  }
  getNewReplyData(parent) {
    const text = parent.querySelector(".form__content").value;
    if (text === "") return;
    const image = parent.querySelector(".form__image").getAttribute("src");
    const user = parent.querySelector(".form__image").getAttribute("alt");
    return {
      createdAt: new Date().getTime(),
      replyID: +this._replyID.slice(0, 1),
      content: text,
      score: 0,
      replyingTo: this._replyTo,
      user: {
        image: {
          png: image,
        },
        username: user,
      },
    };
  }

  getReplyToBtn(btn, type) {
    if (type !== "reply-to") return;
    const parent = btn.closest(".form__box");
    const data = this.getNewReplyData(parent);
    return data;
  }
  getReplyBtn(btn, type) {
    if (type !== "reply") return;
    const parent = btn.closest(".comment__box");
    const form = parent.parentElement.querySelector(".comment__form");
    if (!form) {
      this._replyID = parent.dataset.id;
      this._replyTo = parent
        .querySelector(".user")
        .querySelector(".user__name").textContent;
      const markup = this._generateMarkup();
      parent.insertAdjacentHTML("afterend", markup);
    } else {
      form.parentElement.removeChild(form);
    }
  }
  getSendBtn(btn, type) {
    if (type !== "send") return;
    const parent = btn.closest(".form__box");
    const data = this.getNewCommentData(parent);
    return data;
  }
  getLikeBtn(btn, type) {
    if (type !== "plus" && type !== "minus") return;
    const currentBox = btn.closest(".comment__box");
    this._likesID = currentBox.dataset.id;
    return { id: this._likesID, type };
  }

  addHandlerGetForm(handler) {
    this._parentElement.addEventListener("click", function (e) {
      e.preventDefault();
      const btn = e.target.closest("button");
      if (!btn) return;
      const type = btn.dataset.btn;
      handler(btn, type);
    });
  }
}

export default new FormView();
