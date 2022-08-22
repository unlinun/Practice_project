////// 這個資料夾是 render "VIEW"
/* 在這個資料夾中，不會去 import 任何 controller 中的 function，所以你不能在這裡 call controller 中的 function
view 不知道 controller 中的資料（不知情的），所以不能讀取其中的 data，只能由 controller 來取得 view 的 data */

//////// IMPORT
import View from "./view.js";

import icon from "url:../../img/icons.svg";
//數字轉換的 npm
import { Fraction } from "fractional";

// 可以使用 CLASS 來建構，因為之後還會建構一個父層的 VIEW class ，讓子層來繼承

class RecipeView extends View {
  // 建立父層 DOM element
  _parentElement = document.querySelector(".recipe");
  _data;
  _errorMsg = `No recipes found for your query. Please try again!`;
  _successMsg = ``;

  // 建立監聽事件後的執行函式，handlerFunction 作為一個 callback function，是在controller 中的 function
  addHandlerRender(handlerFunction) {
    const active = ["hashchange", "load"];
    active.forEach((ev) => window.addEventListener(ev, handlerFunction));
  }

  // 建立 recipe 的 render
  _generateMarkup() {
    return `
      <figure class="recipe__fig">
            <img src="${this._data.image}" alt="${
      this._data.title
    }" class="recipe__img" />
            <h1 class="recipe__title">
              <span>${this._data.title}</span>
            </h1>
          </figure>
  
          <div class="recipe__details">
            <div class="recipe__info">
              <svg class="recipe__info-icon">
                <use href="${icon}#icon-clock"></use>
              </svg>
              <span class="recipe__info-data recipe__info-data--minutes">${
                this._data.cookingTime
              }</span>
              <span class="recipe__info-text">minutes</span>
            </div>
            <div class="recipe__info">
              <svg class="recipe__info-icon">
                <use href="${icon}#icon-users"></use>
              </svg>
              <span class="recipe__info-data recipe__info-data--people">${
                this._data.servings
              }</span>
              <span class="recipe__info-text">servings</span>
  
              <div class="recipe__info-buttons">
                <button class="btn--tiny btn--increase-servings">
                  <svg>
                    <use href="${icon}#icon-minus-circle"></use>
                  </svg>
                </button>
                <button class="btn--tiny btn--increase-servings">
                  <svg>
                    <use href="${icon}#icon-plus-circle"></use>
                  </svg>
                </button>
              </div>
            </div>
  
            <div class="recipe__user-generated">
            </div>
            <button class="btn--round">
              <svg class="">
                <use href="${icon}#icon-bookmark-fill"></use>
              </svg>
            </button>
          </div>
  
          <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">
            ${this._data.ingredients
              .map((ing) => this._generateMarkupIngredient(ing))
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
              href="${this._data.sourceUrl}"
              target="_blank"
            >
              <span>Directions</span>
              <svg class="search__icon">
                <use href="${icon}#icon-arrow-right"></use>
              </svg>
            </a>
          </div>
    `;
  }

  //建立數字的轉換
  _generateMarkupIngredient(ing) {
    return ` <li class="recipe__ingredient">
    <svg class="recipe__icon">
      <use href="${icon}#icon-check"></use>
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
}

//不要匯出整個 class ，而是匯出一個 default object
export default new RecipeView();
