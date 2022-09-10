import icons from "url:../../img/icons.svg";

export default class View {
  _data;

  //   RENDER DATA
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  //   UPDATE PART OF DATA
  update(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();
    const newDOM = document.createRange().createContextualFragment(markup);
    // 因為使用 querySelectAll 會產生 nodeList 所以需要使用 Array.from 來將其改為 Array
    const newElements = Array.from(newDOM.querySelectorAll("*"));
    const currentElements = Array.from(
      this._parentElement.querySelectorAll("*")
    );

    newElements.forEach((newEl, i) => {
      const currentEl = currentElements[i];
      if (
        !newEl.isEqualNode(currentEl) &&
        // trim?
        newEl.firstChild?.nodeValue.trim() !== ""
      ) {
        currentEl.textContent = newEl.textContent;
      }
      if (!newEl.isEqualNode(currentEl)) {
        const attribute = Array.from(newEl.attributes);
        attribute.forEach((att) => {
          currentEl.setAttribute(att.name, att.value);
        });
      }
    });
  }

  //   CLEAR PARENT ELEMENT
  _clear() {
    this._parentElement.innerHTML = "";
  }

  //   RENDER SPINNER
  renderSpinner() {
    const markup = `
            <div class="spinner">
                  <svg>
                    <use href="${icons}#icon-loader"></use>
                  </svg>
            </div>
            `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  //   RENDER ERROR (default message info)
  renderError(message = this._errMessage) {
    const markup = `
    <div class="error">
        <div>
            <svg>
                <use href="${icons}#icon-alert-triangle"></use>
            </svg>
        </div>
        <p>${message}</p>
    </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  //   RENDER SUCCESS MES (default message info)
  renderSuccess(message = this._sucMessage) {
    const markup = `
        <div class="message">
            <div>
                <svg>
                    <use href="${icons}#icon-smile"></use>
                </svg>
            </div>
            <p>${message}</p>
        </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
