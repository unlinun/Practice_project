import config from "../js/config.js";

export const state = {
  user: {},
  comments: [],
};

const dataObj = config;
export const getUser = function () {
  state.user = dataObj.currentUser;
  console.log(state.user);
};

export const getCommentInfo = function () {
  state.comments = dataObj.comments;
};
