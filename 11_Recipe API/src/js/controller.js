// import

import * as model from "../js/model.js";
import { MES_TIMEOUT } from "./config.js";
import recipeView from "../js/views/recipeView.js";
import searchView from "../js/views/searchView.js";
import resultView from "../js/views/resultView.js";
import paginationView from "../js/views/paginationView.js";
import bookmarkView from "../js/views/bookmarkView.js";
import addRecipeView from "../js/views/addRecipeView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";
import bookmarkView from "./views/bookmarkView.js";
import { async } from "regenerator-runtime";

// if (module.hot) {
//   module.hot.accept();
// }

// 首先呼叫 API，使用 async await
const controlRecipe = async function () {
  try {
    // 獲得網址的 id
    const id = window.location.hash.slice(1);
    if (!id) return;
    // 利用 API load recipe
    //  在 load 之前，會先呈現 spinner
    recipeView.renderSpinner();

    // 呈現已經選擇到的菜單(在最初的時候先 render，包含 bookmark 中的)
    resultView.update(model.getSearchPage());
    bookmarkView.update(model.state.bookmarks);
    // get recipe data
    await model.getData(id);
    // render recipe view
    recipeView.render(model.state.recipe);

    // 將 recipe 呈現在畫面
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchRecipe = async function () {
  try {
    // get search query
    const query = searchView.getQuery();
    if (!query) return;
    resultView.renderSpinner();
    // load search result
    await model.getSearchData(query);
    resultView.render(model.getSearchPage());
    // render Pagination
    paginationView.render(model.state.searchRecipe);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (gotoPage) {
  // RERENDER
  //  render NEW result
  resultView.render(model.getSearchPage(gotoPage));
  // render Pagination
  paginationView.render(model.state.searchRecipe);
};

const controlServings = function (servings) {
  model.getRecipeServings(servings);
  recipeView.update(model.state.recipe);
};

const controlBookmark = function () {
  if (!model.state.recipe.bookmarked) {
    model.addBookmarkResult(model.state.recipe);
  } else {
    model.removeBookmarkResult(model.state.recipe.id);
  }
  recipeView.update(model.state.recipe);
  bookmarkView.render(model.state.bookmarks);
};

const controlBookmarkDefault = function () {
  bookmarkView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // show loading spinner
    addRecipeView.renderSpinner();

    await model.addNewRecipe(newRecipe);
    // render recipe
    recipeView.render(model.state.recipe);
    //render success message
    addRecipeView.renderSuccess();
    // render bookmark view (use render)
    bookmarkView.render(model.state.bookmarks);
    // change id in the URL
    // 改變網頁的網址，而不重新 load page，輸入三個參數
    window.history.pushState(null, "", `#${model.state.recipe.id}`);
    //close form window
    setTimeout(function () {
      addRecipeView._renderForm();
      addRecipeView.toggleHidden();
    }, MES_TIMEOUT * 1000);
  } catch (err) {
    console.log(err);
    addRecipeView.renderError(err);
  }
};

// ADD handler function
const init = function () {
  bookmarkView._addHandlerRender(controlBookmarkDefault);
  recipeView._addHandlerRender(controlRecipe);
  recipeView._addHandlerBookmark(controlBookmark);
  recipeView._addHandlerServings(controlServings);
  searchView._addHandlerSearch(controlSearchRecipe);
  paginationView._addHandlerPagination(controlPagination);
  addRecipeView.addHandlerUploadNewRecipe(controlAddRecipe);
};

init();
