import json from "./config.js";

export const state = {
  user: {},
  comments: [],
};

const createUser = function (data) {
  const { currentUser } = data;
  return (state.user = {
    username: currentUser.username,
    image: currentUser.image,
  });
};

const createComment = function (data) {
  const comments = data.comments;
  return comments.map((comment) => {
    return {
      content: comment.content,
      createdAt: comment.createdAt,
      replies: comment.replies,
      score: comment.score,
      user: comment.user,
    };
  });
};

export const getData = function () {
  const commentsObj = json;
  state.user = createUser(commentsObj);
  state.comments = createComment(commentsObj);
  //   create id
  state.comments.forEach((comment, i) => {
    if (comment.length === 0) return;
    comment.id = i + 1;
    if (comment.replies.length === 0) return;
    comment.replies.forEach((rep, i) => {
      rep.id = `${comment.id}${i + 1}`;
    });
  });
  console.log(state);
  return state;
};
