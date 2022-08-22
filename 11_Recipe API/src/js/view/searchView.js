class SearchView {
  _parentElement = document.querySelector(".search");

  getQuery() {
    const query = this._parentElement.querySelector(".search__field").value;
    this._clearInput();
    return query;
  }
  _clearInput() {
    this._parentElement.querySelector(".search__field").value = "";
  }
  addHandlerSearch(handlerFunction) {
    // 因為是 form 所以可以使用 submit
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handlerFunction();
    });
  }
}

export default new SearchView();
