// import model and view
import * as model from "./model.js";

//因為 recipeView中，是 export default，所以可以自己命名
import recipeView from "./view/recipeView.js";
import searchView from "./view/searchView.js";
import resultView from "./view/resultView.js";
import paginationView from "./view/paginationView.js";

//import data using parcel
import "core-js/stable";
import "regenerator-runtime/runtime";

if (module.hot) {
  module.hot.accept();
}

// const recipeContainer = document.querySelector(".recipe");
// // https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipe = async function () {
  // 使用 try catch 語句，來捕捉 async await 的 error
  try {
    // 當點擊菜單時，會根據該 id 來去抓取遠端 API 資料，或是當網頁開啟時具有該 id，則直接開啟其菜單頁面
    // 使用slice(1) 來取得 # 之後的 id
    const id = window.location.hash.slice(1);
    if (!id) return;

    //在按下菜單後，會加入一個 active 的 class
    resultView.update(model.loadSearchResultPage());
    //在獲取到資料之前，會先出現 "loading icon"，轉圈圈之類的 icon，來表達正在 loading
    recipeView.renderSpinner();
    // 1) Render recipe
    // 因為 model.loadRecipe 不會回傳任何的資訊，所以不需要將他存在變數當中，但他是一個 promise，所以需要使用 await
    await model.loadRecipe(id);
    // 2) 建立菜單的 html , render Recipe
    // 創建一個 method 叫做 render 來自 recipeView
    // 在 module 中，是會因為狀態改變看連動變化的，所以 state.recipe 也會因為 function 的關係而有資訊產生
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

// 增加 search 的controller
const controlSearchResults = async function () {
  try {
    resultView.renderSpinner();
    // 1) get search query
    const query = searchView.getQuery();
    if (!query) return;
    // 2) 顯示取得的 search 資料
    await model.loadSearchResults(query);
    // console.log(model.state.search.searchResult);
    // 3) render result 將搜尋結果回傳，並且分成一頁一頁
    // 這裡會改變 model.state.search 裡面的 page 參數
    resultView.render(model.loadSearchResultPage());
    // 4) render pagination 呈現分頁按鈕
    paginationView.render(model.state.search);
  } catch (error) {
    recipeView.renderError();
  }
};

// 如果使用者改變食譜的數量，則整體數量（model.state.recipe.ingredients）一起變更
const controlServings = function (newServing) {
  // 在 model 當中，修改新的 servings 數量
  model.loadNewServing(newServing);
  //重新渲染菜單 => 但是！使用 update，而不是使用 render
  recipeView.update(model.state.recipe);
};

const controlPagination = function (goto) {
  // 這邊需要新的資訊頁面 render NEW searchResult
  // 1) render result NEW 新的頁面
  // 這裡會改變 model.state.search 裡面的 page 參數
  resultView.render(model.loadSearchResultPage(goto));
  // 2) render NEW pagination 呈現新的分頁按鈕
  paginationView.render(model.state.search);
};

// 在 controller 當中，增加 event 的監聽
const initEvent = function () {
  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandlerServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
initEvent();
