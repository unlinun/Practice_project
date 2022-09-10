// 利用 parcel 來導入 icon 的新位置
import icons from "url:../../img/icons.svg";
import View from "./view.js";
import previewView from "./previewView.js";

class ResultView extends View {
  _parentElement = document.querySelector(".results");
  _errMessage = `No recipes found for your query :(`;
  _sucMessage = `Great!`;

  // GENERATE HTML!!!
  _generateMarkup() {
    console.log(this._data);
    return this._data.map((data) => previewView._generateMarkup(data)).join("");
  }
}
export default new ResultView();
