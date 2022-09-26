class SendView {
  _data;
  _parentElement = document.querySelector(".main");
  constructor() {}
  renderData(data) {
    if (!data) return;
    this._data = data;
    // 產生 html
    this._generateMarkup();
  }
  getData(e) {
    e.preventDefault();
    const btn = e.target.closest("button");
    if (!btn) return;
    if (btn.dataset.btn === "send") {
      const parent = btn.closest(".form");
      const textBox = parent.querySelector(".form__content");
      return {
        content: textBox,
        createdAt: new Date().getDate(),
        user: {
          image: this._data.user.image,
          username: this._data.user.username,
        },
      };
    }
  }
  _generateMarkup() {
    const markup = `
    <div class="main__comment comment comment--send">
        ${this._formMarkup(this._data)}
    </div>
    `;
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }
  _formMarkup(data) {
    return `
    <div class="comment__form form">
        <form class="form__box">
            <textarea
                class="form__content"
                name="reply"
                cols="30"
                rows="6"
                placeholder="Type something..."
            ></textarea>
            <img
                class="form__image image"
                src="${data.user.image.png}"
                alt="${data.user.username}"
            />
            <button type="submit" class="form__btn" data-btn="send">send</button>
        </form>
     </div>
    `;
  }
  addHandlerSendForm(handler) {
    window.addEventListener("load", function () {
      handler();
    });
  }
}

export default new SendView();
