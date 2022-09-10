// VIEW 是產生前端畫面的 HTML ，讓資料可以顯示出來給使用者，負責的就是『畫面』的部分 !!!
import View from "./view.js";
// 利用 parcel 來導入 icon 的新位置
import icons from "url:../../img/icons.svg";
// import fraction(分數)
import { Fraction } from "fractional";

class RecipeView extends View {
  _parentElement = document.querySelector(".recipe");
  _errMessage = `Can't find data`;
  _sucMessage = `Great!`;

  //   GENERATE HTML!!!
  _generateMarkup() {
    return `
    <figure class="recipe__fig">
      <img src="${this._data.image}" alt="${this._data.title}" 
      class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${
          this._data.cookingTime
        }</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${
          this._data.servings
        }</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings" data-servings="${
            this._data.servings - 1
          }">
            <svg>
              <use href="${icons}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings" data-servings="${
            this._data.servings + 1
          }">
            <svg>
              <use href="${icons}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">

      </div>
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${icons}#icon-bookmark${
      this._data.bookmarked ? "-fill" : ""
    }"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      ${this._data.ingredients
        .map((ing) => {
          return this._markupIngredients(ing);
        })
        .join("")}
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${
          this._data.publisher
        }</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
`;
  }
  _markupIngredients(ing) {
    return ` 
    <li class="recipe__ingredient">
        <svg class="recipe__icon">
            <use href="${icons}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${
          ing.quantity ? new Fraction(ing.quantity).toString() : ""
        }</div>
        <div class="recipe__description">
        <span class="recipe__unit">${ing.unit}</span>
        ${ing.description}
        </div>
    </li>`;
  }
  _addHandlerRender(handler) {
    const event = ["hashchange", "load"];
    event.forEach((ev) => window.addEventListener(ev, handler));
  }

  //servings number and ingredient number change
  _addHandlerServings(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--increase-servings");
      if (!btn) return;
      const newServings = +btn.dataset.servings;
      if (newServings > 0 && newServings <= 20) handler(newServings);
    });
  }

  //bookmark view render
  _addHandlerBookmark(handler) {
    this._parentElement.addEventListener("click", function (e) {
      e.preventDefault();
      const btn = e.target.closest(".btn--bookmark");
      if (!btn) return;
      handler();
    });
  }
}

export default new RecipeView();
