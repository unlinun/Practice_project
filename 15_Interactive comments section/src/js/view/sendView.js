class SendView {
  _data;
  _parentElement = document.querySelector(".main");
  renderData(data) {
    if (!data) return;
    this._data = data;
    // 產生 html
    this._generateMarkup();
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
            <button type="submit" class="form__btn">send</button>
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
