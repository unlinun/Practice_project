import icon from "url:../../img/icons.svg";

export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    console.log(data);
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  //只要 update 一小部分的頁面
  update(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError(`Search something 😄`);

    this._data = data;
    const newMarkup = this._generateMarkup();
    // createRange()/createContextualFragment(碎片)，取得 node 的上下文範圍 list
    const newDOM = document.createRange().createContextualFragment(newMarkup); //產生一個 document-fragment
    // 選取全部 DOM 中的 elements，記得轉成 array 才能使用 forEach()
    const newElements = Array.from(newDOM.querySelectorAll("*"));
    // oldElement 就是 parent element 的 DOM elements
    const oldElements = Array.from(this._parentElement.querySelectorAll("*"));

    newElements.forEach((newEl, i) => {
      // 找回原有的 elements
      const oldEl = oldElements[i];
      // 使用 isEqualNode 來做 node list 的比較
      // nodeValue 如果遇到 text 屬性，就會回傳 Content of the text node，確認他是否不是 空白
      if (
        !newEl.isEqualNode(oldEl) &&
        newEl.firstChild.nodeValue.trim() !== ""
      ) {
        oldEl.textContent = newEl.textContent;
      }
      // 設定新的 data value
      if (!newEl.isEqualNode(oldEl)) {
        // log 出 node list 中的 attribute
        const attributes = Array.from(newEl.attributes);
        attributes.forEach((attr) => {
          // 將原有的 attribute 設定成 新的 attribute
          oldEl.setAttribute(attr.name, attr.value);
        });
      }
    });
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
