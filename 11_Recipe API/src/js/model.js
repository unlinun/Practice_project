import { getJSON } from "./helper";
import { API_URL } from "./config";
import { PAGE_NUM } from "./config";
// model 主要是用來接收 WEB API 的資料，負責 data
// API -- https://forkify-api.herokuapp.com/v2

// 1. 建立一個狀態 => state 存儲資料
export const state = {
  recipe: {},
  searchRecipe: {
    query: "",
    result: [],
    resultsPerPage: PAGE_NUM,
    page: 1,
    totalPage: 1,
  },
  bookmarks: [],
};

// GET API DATA
export const getData = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);
    // 新增一個 recipe 變數
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    //Check if bookmarked
    if (state.bookmarks.some((bookmark) => bookmark.id === id)) {
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    }
    console.log(state.recipe);
  } catch (err) {
    throw err;
  }
};

export const getSearchData = async function (query) {
  try {
    state.searchRecipe.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);
    // 將 search 的 data 儲存在 state 當中
    state.searchRecipe.result = data.data.recipes.map((recipe) => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      };
    });
    state.searchRecipe.page = 1;
  } catch (err) {
    throw err;
  }
};

//get search page number
export const getSearchPage = function (page = state.searchRecipe.page) {
  //get current page
  state.searchRecipe.page = page;
  // get total page
  state.searchRecipe.totalPage = Math.ceil(
    state.searchRecipe.result.length / state.searchRecipe.resultsPerPage
  );
  const start = (page - 1) * state.searchRecipe.resultsPerPage;
  const end = page * state.searchRecipe.resultsPerPage;
  return state.searchRecipe.result.slice(start, end);
};

// change servings
export const getRecipeServings = function (servings) {
  const newServings = servings;
  state.recipe.ingredients.forEach((ing) => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });
  state.recipe.servings = newServings;
};

const storeBookmark = function () {
  localStorage.setItem("bookmark", JSON.stringify(state.bookmarks));
};
// add bookmark
export const addBookmarkResult = function (recipe) {
  state.bookmarks.push(recipe);
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
  storeBookmark();
};

//remove bookmark
export const removeBookmarkResult = function (id) {
  // find index of bookmark
  const index = state.bookmarks.findIndex((bookmark) => {
    return bookmark.id === id;
  });
  state.bookmarks.splice(index, 1);
  state.recipe.bookmarked = false;
  storeBookmark();
};

const init = function () {
  const storage = localStorage.getItem("bookmark");
  if (storage) state.bookmarks = JSON.parse(storage);
};
init();
