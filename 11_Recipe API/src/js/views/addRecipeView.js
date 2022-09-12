import View from "./view.js";
import icons from "url:../../img/icons.svg";

// 這個是只有 searchbar
class AddRecipeView extends View {
  _parentElement = document.querySelector(".upload");
  _sucMessage = `Great! You success`;

  _addRecipeWindow = document.querySelector(".add-recipe-window");
  _overlay = document.querySelector(".overlay");
  _btnOpen = document.querySelector(".nav__btn--add-recipe");
  _btnClose = document.querySelector(".btn--close-modal");
  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }
  _renderForm() {
    const markup = `
    <div class="upload__column">
    <h3 class="upload__heading">Recipe data</h3>
    <label>Title</label>
    <input value="TEST123" required name="title" type="text" />
    <label>URL</label>
    <input value="TEST123" required name="sourceUrl" type="text" />
    <label>Image URL</label>
    <input value="TEST123" required name="image" type="text" />
    <label>Publisher</label>
    <input value="TEST123" required name="publisher" type="text" />
    <label>Prep time</label>
    <input value="23" required name="cookingTime" type="number" />
    <label>Servings</label>
    <input value="23" required name="servings" type="number" />
  </div>

  <div class="upload__column">
    <h3 class="upload__heading">Ingredients</h3>
    <label>Ingredient 1</label>
    <input
      value="0.5,kg,Rice"
      type="text"
      required
      name="ingredient-1"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
    <label>Ingredient 2</label>
    <input
      value="1,,Avocado"
      type="text"
      name="ingredient-2"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
    <label>Ingredient 3</label>
    <input
      value=",,salt"
      type="text"
      name="ingredient-3"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
    <label>Ingredient 4</label>
    <input
      type="text"
      name="ingredient-4"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
    <label>Ingredient 5</label>
    <input
      type="text"
      name="ingredient-5"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
    <label>Ingredient 6</label>
    <input
      type="text"
      name="ingredient-6"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
  </div>

  <button class="btn upload__btn">
    <svg>
      <use href="${icons}#icon-upload-cloud"></use>
    </svg>
    <span>Upload</span>
  </button>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  toggleHidden() {
    this._addRecipeWindow.classList.toggle("hidden");
    this._overlay.classList.toggle("hidden");
    console.log("123");
  }
  _addHandlerShowWindow() {
    this._btnOpen.addEventListener("click", this.toggleHidden.bind(this));
  }
  _addHandlerHideWindow() {
    this._btnClose.addEventListener("click", this.toggleHidden.bind(this));
    this._overlay.addEventListener("click", this.toggleHidden.bind(this));
  }
  addHandlerUploadNewRecipe(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      // 傳送一個 data 類型是 form! (new FormData) 會回傳一個無法使用的數據資料，轉換為 array
      // this 會指向 form 所建立的資料型態
      const dataArr = [...new FormData(this)];
      // 使用 Object.fromEntries 將資料型態轉換為物件
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }
}

export default new AddRecipeView();
