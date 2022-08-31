import View from "./view";
import icon from "url:../../img/icons.svg";

class ResultView extends View {
  _parentElement = document.querySelector(".results");
  _errorMsg = `No recipes found for your query. Please try again!`;
  _successMsg = ``;

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join("");
  }
  _generateMarkupPreview(result) {
    const id = window.location.hash.slice(1);
    return `
        <li class="preview">
            <a class="preview__link ${
              id === result.id ? "preview__link--active" : " "
            }" href="#${result.id}">
              <figure class="preview__fig">
                <img src="${result.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${result.title}</h4>
                <p class="preview__publisher">${result.publisher}</p>
              </div>
            </a>
          </li>
    `;
  }
}

export default new ResultView();