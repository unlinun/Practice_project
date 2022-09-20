import View from "./view.js";

class FormView extends View {
  _parentElement = "";

  renderForm(data) {
    if (!data) return;
    this._data = data;
    this._generateMarkup();
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
                placeholder="Type something..."
             ></textarea>
            <img
                class="form__image image"
                src="${this._data.user.image.png}"
                alt="${this._data.user.username}"
             />
             <button class="form__btn form__btn--${this._btnEvent}" data-btn="${
      this._btnEvent
    }">${this._btnEvent === "edit" ? "UPDATE" : this._btnEvent}
             </button>
            </form>
        </div>
    `;
  }

  addEventBtnClick(handler) {
    window.addEventListener("click", function (e) {
      e.preventDefault();
      const btn = e.target.closest("button");
      if (!btn) return;
      this._parentElement = btn.closest(".comment");
      console.log(this._parentElement);
      const btnEvent = btn.dataset.btn;
      this._btnEvent = btnEvent;

      handler();
    });
  }
}

export default new FormView();
