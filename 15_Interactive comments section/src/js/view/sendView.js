import View from "./view.js";

class SendView extends View {
  _parentElement = document.querySelector(".main");

  _generateMarkup() {
    return `
    <div class="main__comment comment comment--send">
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
            src="./assets/avatars/image-juliusomo.png"
            alt="juliusomo"
            />
            <button class="form__btn form__btn--send" data-btn="send">send</button>
        </form>
    </div>
  </div>
    `;
  }
}

export default new SendView();
