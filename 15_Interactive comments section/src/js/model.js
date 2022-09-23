import json from "./config.js";

export const state = {
  user: {},
  comments: [],
};
console.log(json);
// create new data
const createComment = function (data) {
  return {
    id: data.length - 1,
    content: data.content,
    createdAt: data.createdAt,
    replies: data.replies,
    score: data.score,
    user: data.user,
  };
};
export const getCommentData = function () {
  const data = json;
  state.user = data.currentUser;
  state.comments = data.comments;
  return state;
};

// set localStorage data
// const setLocalStorageDate = function (data) {
//   const user = json.user;
//   const comment = [...json.comments];
//   const items = getLocalStorageData();
//   items.push(...comment);
//   console.log(items);

//   localStorage.setItem("comments", JSON.stringify(items));
// };
// const getLocalStorageData = function () {
//   return localStorage.getItem("comments")
//     ? JSON.parse(localStorage.getItem("comments"))
//     : [];
// };

// load localStorage data
