// VIEW 是產生前端畫面的 HTML ，讓資料可以顯示出來給使用者，負責的就是『畫面』的部分 !!!
import View from "./view.js";
// 利用 parcel 來導入 icon 的新位置
import icons from "url:../../img/icons.svg";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");
  _errMessage = `Can't find data`;
  _sucMessage = `Great!`;

  //   GENERATE HTML!!!
  _generateMarkup() {
    const curPage = this._data.page;
    const totalPage = this._data.totalPage;
    // 1. current page === 1 and total page ===1
    if (curPage === 1 && totalPage === 1) {
      return "";
    }
    // 2. current page === 1 and total page > 1
    if (curPage === 1 && totalPage > 1) {
      return this._markupPageRight(curPage);
    }
    // 3. current page >1 and total page >1
    if (curPage < totalPage && curPage > 1) {
      return `${this._markupPageLeft(curPage)} ${this._markupPageRight(
        curPage
      )}`;
    }
    // 4. current page >1 and current page === total page
    if (totalPage === curPage) {
      return `${this._markupPageLeft(curPage)}${this._markupPageRight(
        curPage
      )} `;
    }
  }
  _markupPageLeft(page) {
    return `
    <button data-goto="${page - 1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span> Page ${page - 1}</span>
    </button>
    `;
  }
  _markupPageRight(page) {
    return `
    <button data-goto="${
      page + 1 > this._data.totalPage ? 1 : page + 1
    }" class="btn--inline pagination__btn--next">
        <span> Page ${page + 1 > this._data.totalPage ? 1 : page + 1}</span>
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
        </svg>
    </button>
    `;
  }
  _addHandlerPagination(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");
      if (!btn) return;
      const gotoPage = +btn.dataset.goto;
      console.log(gotoPage);
      handler(gotoPage);
    });
  }
}

export default new PaginationView();
