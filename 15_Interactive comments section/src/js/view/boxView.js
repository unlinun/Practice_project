class BoxView {
  _commentBoxMarkup(thisData, data) {
    return `
            <div class="comment__box" data-id="${data.id}">
                <div class="comment__user user">
                    <img
                    class="user__image image"
                    src="${data.user.image.png}"
                    alt="${data.user.username}"
                    />
                    <div class="user__name ${
                      thisData.user.username === data.user.username
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
                        <button type="submit" class="form__btn" data-btn = "update">update</button>
                    </form>
                    </div>
                </div>
                <div class="comment__likes likes">
                    <div class="likes__box">
                    <button class="likes__btn likes__btn--plus" data-btn = "plus"></button>
                    <span class="likes__number">${data.score}</span>
                    <button class="likes__btn likes__btn--minus" data-btn = "minus"></button>
                    </div>
                </div>
                <div class="comment__function function">
                    ${this._commentFunctionMarkup(thisData, data)}
                </div>
            </div>
            
            `;
  }

  //   判斷 function 中的 btn
  _commentFunctionMarkup(thisData, data) {
    if (thisData.user.username === data.user.username) {
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
}

export default new BoxView();
