import View from "./view.js";

class SendView extends View {
  _parentElement = document.querySelector(".comment__type--send");
  _generateMarkup() {
    return `
    <div class="comment__box comment__box--single">
      <form class="comment__send send">
        <textarea
          class="send__text"
          name="send"
          cols="30"
          rows="6"
          placeholder="Type something..."
        ></textarea>
        <img src="${this._data.image.png}" alt="${this._data.username}" class="send__image">
        <input
          class="send__btn send__btn--send"
          type="button"
          value="send"
        />
      </form>
     </div>
    `;
  }
  _addHandlerSendView(handler) {
    window.addEventListener("load", function () {
      handler();
    });
  }
}

export default new SendView();
