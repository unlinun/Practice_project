"use strict";
import * as model from "./model.js";
import sendView from "./view/sendView.js";
console.log("hello");

const controlUser = function () {
  model.getUser();
  console.log(model.state.user);
  sendView._render(model.state.user);
  console.log(model.state.user.image.png);
};

const init = function () {
  sendView._addHandlerSendView(controlUser);
};
init();
