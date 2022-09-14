import { API_URL } from "./config.js";
import data from "../assets/data/data.json" assert { type: "json" };

export const state = {
  user: {},
  comments: [],
};

const dataObj = data;
export const getUser = function () {
  state.user = dataObj.currentUser;
  console.log(state.user);
};

export const getCommentInfo = function () {
  state.comments = dataObj.comments;
};
