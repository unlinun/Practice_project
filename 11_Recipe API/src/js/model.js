import { async } from "regenerator-runtime";
import { API_URL, RES_PER_PAGE } from "./config";
import { getJSON } from "./helper";

// 將 state 導出，讓其他地方可以使用
export const state = {
  recipe: {},
  search: {
    query: "",
    searchResult: [],
    resultPerPage: RES_PER_PAGE,
    page: 1,
  },
};

// 在 model 中建立資訊，再由 controller 交付給 view 來呈現
export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);
    // 建立菜單，並且將菜單更名
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
    console.log(state.recipe);
  } catch (err) {
    throw err;
  }
};

// 創建 search function, 傳入一個 query(請求) => 要搜尋什麼 ?

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);
    state.search.searchResult = data.data.recipes.map((recipe) => {
      //這邊會 return 一個新的物件
      return {
        id: recipe.id,
        title: recipe.title,
        image: recipe.image_url,
        publisher: recipe.publisher,
      };
    });
  } catch (error) {
    throw error;
  }
};

// 創建 search result 的 page 顯示 function

export const loadSearchResultPage = function (page = state.search.page) {
  state.search.page = page;
  //因為 per page 可以是固定的變量，所以將他設定在 config 的資料夾中
  const start = (page - 1) * state.search.resultPerPage; //0
  const end = page * state.search.resultPerPage; //9

  // 使用 slice 的方法，來取得每次 10 筆資料
  return state.search.searchResult.slice(start, end);
};
