import View from "./view.js";

class CommentView extends View {
  _parentElement = document.querySelector(".comment__type--main");
  _generateMarkup() {
    return `
    <div class="comment__box">
        <div class="comment__info info">
            <img class="info__image info__image--user" src="" alt=""/>
            <div class="info__name info__name--user">juliusono</div>
            <div class="info__date">1 month ago</div>
        </div>
        <div class="comment__content content">
        <p class="content__text">
        </p>
        </div>
        <div class="comment__likes likes">
            <div class="likes__box">
                <button class="likes__btn likes__btn--plus"></button>
                <span class="likes__number">12</span>
                <button class="likes__btn likes__btn--minus"></button>
            </div>
        </div>
        <div class="comment__function function">
            <button class="function__btn function__btn--alert">
                <div class="function__icon function__icon--delete"></div>
                Delete
            </button>
            <button class="function__btn">
                <div class="function__icon function__icon--edit"></div>
                Edit
            </button>
        </div>
     </div>
      `;
  }
  _addHandlerCommentView(handler) {
    window.addEventListener("load", function () {
      handler();
    });
  }
}

export default new CommentView();
