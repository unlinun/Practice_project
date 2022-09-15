"use strict";
import "./scss/style.scss";
import * as model from "./js/model.js";
import sendView from "./js/view/sendView.js";
console.log("hello");

const controlUser = function () {
  model.getUser();
  console.log(model.state.user);
  sendView._render(model.state.user);
  console.log(model.state.user.image.png);
  console.log("bundle successed");
};
const controlSendBtn = function () {
  console.log("hello");
};

const init = function () {
  sendView._addHandlerSendViewInput(controlUser);
};
init();
