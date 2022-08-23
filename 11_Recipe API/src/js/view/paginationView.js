import View from "./view.js";
import icon from "url:../../img/icons.svg";

// 子層繼承父層的 CLASS
class PaginationView extends View {
  // 建立父層 DOM element
  _parentElement = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      e.preventDefault();
      const btn = e.target.closest(".btn--inline");
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      console.log(goToPage);
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    // 計算出有幾頁
    const resultPage = Math.ceil(
      this._data.searchResult.length / this._data.resultPerPage
    );
    console.log("一共的頁數 : " + resultPage);

    // 為每一個 btn 添加 data Attribute 以跳轉至該頁面
    // 1. 如果只有一頁
    if (resultPage === 1) {
      return ``;
    }
    // 2. 如果在第一頁，還有其他頁數
    if (curPage === 1 && curPage < resultPage) {
      return `
        <button data-goto="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
                <use href="${icon}#icon-arrow-right"></use>
            </svg>
        </button>
        `;
    }
    // 3. 如果在最後一頁
    if (curPage === resultPage && resultPage > 1) {
      return `
        <button data-goto="${
          curPage - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icon}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
        </button>
        <button data-goto="1" class="btn--inline pagination__btn--next">
            <span>Back 1</span>
            <svg class="search__icon">
                <use href="${icon}#icon-arrow-right"></use>
            </svg>
        </button>
        `;
    }
    // 4. 如果在其他頁，且還有其他頁
    if (curPage > 1 && curPage < resultPage) {
      return `
        <button data-goto="${
          curPage - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icon}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
        </button>
        <button data-goto="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
            <use href="${icon}#icon-arrow-right"></use>
            </svg>
        </button>
        `;
    }
  }
}

export default new PaginationView();
