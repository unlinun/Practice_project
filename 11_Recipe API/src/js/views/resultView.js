// 利用 parcel 來導入 icon 的新位置
import icons from "url:../../img/icons.svg";
import View from "./view.js";

class ResultView extends View {
  _parentElement = document.querySelector(".results");
  _errMessage = `No recipes found for your query :(`;
  _sucMessage = `Great!`;

  // GENERATE HTML!!!
  _generateMarkup() {
    console.log(this._data);
    return this._data.map((data) => this._markupPreview(data)).join("");
  }
  _markupPreview(data) {
    return `
    <li class="preview">
        <a class="preview__link" href="#${data.id}">
            <figure class="preview__fig">
                <img src="${data.image}" alt="${data.title}" />
            </figure>
            <div class="preview__data">
                <h4 class="preview__title">${data.title}</h4>
                 <p class="preview__publisher">${data.publisher}</p>
            </div>
        </a>
    </li>
`;
  }
}
export default new ResultView();
