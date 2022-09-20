"use strict";
import "./scss/style.scss";
import commentView from "./js/view/commentView";
import replyView from "./js/view/replyView";
import sendView from "./js/view/sendView";
import formView from "./js/view/formView";

import * as model from "./js/model.js";

const controlMainComment = function () {
  model.getData();
  //   console.log(model.state);
  commentView.renderData(model.state);
  sendView.renderData(model.state);
  replyView.renderReply(model.state);
};
const controlForm = function () {
  model.getData();
  formView.renderForm(model.state);
};

const init = function () {
  commentView.addEventLoadComment(controlMainComment);
  formView.addEventBtnClick(controlForm);
};

init();
