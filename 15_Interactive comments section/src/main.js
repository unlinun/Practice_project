"use strict";
import "./scss/style.scss";

import * as model from "./js/model.js";
import commentView from "./js/view/commentView";
import sendView from "./js/view/sendView";
import replyView from "./js/view/replyView";

function controlDefaultComment() {
  const data = model.getCommentData();
  console.log(data);
  commentView.renderData(data);
  sendView.renderData(data);
  replyView.renderData(data);
}

function init() {
  commentView.addHandlerWindowLoad(controlDefaultComment);
}

init();
