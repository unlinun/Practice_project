import View from "./view.js";

// 這個是只有 searchbar
class SearchView extends View {
  _parentElement = document.querySelector(".search");
  getQuery() {
    const query = this._parentElement.querySelector(".search__field").value;
    this.clearInput();
    return query;
  }
  clearInput() {
    this._parentElement.querySelector(".search__field").value = "";
  }
  _addHandlerSearch(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
