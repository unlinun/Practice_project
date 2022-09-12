// VIEW 是產生前端畫面的 HTML ，讓資料可以顯示出來給使用者，負責的就是『畫面』的部分 !!!
import View from "./view.js";
import icons from "url:../../img/icons.svg";

class PreviewView extends View {
  _parentElement = "";

  //   GENERATE HTML!!! 因為 this._data 是一個陣列，所以需要使用 map 回傳 html 再將其 join 起來
  _generateMarkup(data) {
    const id = window.location.hash.slice(1);
    return `
    <li class="preview">
        <a class="preview__link ${
          data.id === id ? "preview__link--active" : ""
        }" href="#${data.id}">
            <figure class="preview__fig">
                <img src="${data.image}" alt="${data.title}" />
            </figure>
            <div class="preview__data">
                <h4 class="preview__title">${data.title}</h4>
                 <p class="preview__publisher">${data.publisher}</p>
                 <div class="preview__user-generated ${
                   data.key ? "" : "hidden"
                 }">
                  <svg>
                    <use href="${icons}#icon-user"></use>
                  </svg>
                </div>
            </div>
        </a>
    </li>
`;
  }
}

export default new PreviewView();
