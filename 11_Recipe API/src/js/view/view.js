import icon from "url:../../img/icons.svg";

export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  // 清除父層中的 html
  _clear() {
    this._parentElement.innerHTML = "";
  }

  //建立 loading 的轉圈效果
  renderSpinner() {
    const html = ` 
      <div class="spinner">
        <svg>
          <use href="${icon}#icon-loader"></use>
        </svg>
      </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", html);
  }

  // 建立 Success message, 傳入一個 message 參數
  renderError(message = this._successMsg) {
    const html = `
        <div class="message">
            <div>
              <svg>
                <use href="${icon}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
        </div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", html);
  }

  // 建立 Error catcher, 傳入一個 message 參數
  renderError(errorMsg = this._errorMsg) {
    const html = `
        <div class="error">
            <div>
              <svg>
                <use href="${icon}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${errorMsg}</p>
        </div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", html);
  }
}
