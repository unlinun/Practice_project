// VIEW 是產生前端畫面的 HTML ，讓資料可以顯示出來給使用者，負責的就是『畫面』的部分 !!!
import View from "./view.js";
import previewView from "./previewView.js";

class BookmarkView extends View {
  _parentElement = document.querySelector(".bookmarks__list");
  _errMessage = `Add your first markup!`;
  _sucMessage = `Great!`;

  //   GENERATE HTML!!! 因為 this._data 是一個陣列，所以需要使用 map 回傳 html 再將其 join 起來
  _generateMarkup() {
    console.log(this._data);
    return this._data.map((data) => previewView._generateMarkup(data)).join("");
  }
  _addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }
}

export default new BookmarkView();
