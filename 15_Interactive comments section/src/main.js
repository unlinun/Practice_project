"use strict";
import "./scss/style.scss";

import * as model from "./js/model.js";
import commentView from "./js/view/commentView";
import sendView from "./js/view/sendView";
import replyView from "./js/view/replyView";
import formView from "./js/view/formView";

function controlDefaultComment() {
  const data = model.getCommentData();
  console.log(data);
  commentView.renderData(data);
  sendView.renderData(data);
  replyView.renderData(data);
}
function controlNewComment(btn, type) {
  formView.renderData(model.state);
  const newComment = formView.getSendBtn(btn, type);
  if (!newComment) return;
  const data = model.createNewComment(newComment);
  console.log(data);
  commentView.renderData(data);
  sendView.renderData(data);
  replyView.renderData(data);
}

function controlNewReply(btn, type) {
  formView.renderData(model.state);
  const newReplyForm = formView.getReplyBtn(btn, type);
  const newReply = formView.getReplyToBtn(btn, type);
  if (!newReplyForm && !newReply) return;
  const data = model.createNewReply(newReply);
  commentView.renderData(data);
  sendView.renderData(data);
  replyView.renderData(data);
}
function controlLikes(btn, type) {
  formView.renderData(model.state);
  const id = formView.getLikeBtn(btn, type);
  if (!id) return;
  const data = model.getLikeScore(id);
  // console.log(data);
}
function init() {
  commentView.addHandlerWindowLoad(controlDefaultComment);
  formView.addHandlerGetForm(controlNewComment);
  formView.addHandlerGetForm(controlNewReply);
  formView.addHandlerGetForm(controlLikes);
}

init();
