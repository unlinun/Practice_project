import { async } from "regenerator-runtime";
import { API_URL } from "./config";
import { getJSON } from "./helper";

// 將 state 導出，讓其他地方可以使用
export const state = {
  recipe: {},
  search: {
    query: "",
    searchResult: [],
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
