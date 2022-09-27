import json from "./config.js";

export const state = {
  user: {},
  comments: [],
};
console.log(json);
// create new data
const setTime = function (time) {
  const today = new Date();
  const createdTime = time;
  const createdDate = new Date(createdTime);
  const now = today.getTime();
  const yesterday = today.setDate(today.getDate() - 1);
  const oneDay = 1000 * 60 * 60 * 24;
  const oneHour = 1000 * 60 * 60;
  const oneMin = 1000 * 60;
  if (now - createdTime <= oneMin * 3) {
    return `3 mins ago`;
  } else if (now - createdTime <= oneHour) {
    return `1 hours ago`;
  } else if (now - createdTime <= oneDay) {
    return `1 day ago`;
  } else if (now - createdTime > now - yesterday) {
    return `${createdDate.getMonth()}/${createdDate.getFullYear()}`;
  }
};

const createComment = function (data) {
  return {
    id: state.comments.length + 1,
    content: data.content,
    createdAt: setTime(data.createdAt),
    replies: data.replies,
    score: data.score,
    user: data.user,
  };
};
const createReply = function (comment, data) {
  console.log(data);
  return {
    id: +`${comment.id}0${comment.replies.length + 1}`,
    content: data.content,
    createdAt: setTime(data.createdAt),
    replies: data.replies,
    score: data.score,
    user: data.user,
  };
};

export const getLikeScore = function (data) {
  if (data.type === "plus") {
    state.comments.filter((comment) => {});
  }
  console.log(state);
};

export const getCommentData = function () {
  const data = json;
  state.user = data.currentUser;
  state.comments = data.comments;
  return state;
};
export const createNewComment = function (data) {
  state.comments.push(createComment(data));
  return state;
};

export const createNewReply = function (data) {
  state.comments.forEach((comment) => {
    if (comment.id === data.replyID) {
      comment.replies.push(createReply(comment, data));
    }
  });
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
