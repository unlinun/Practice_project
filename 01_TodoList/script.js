"use strict";

//------------- select DOM element -----------
//content element
const showDay = document.querySelector(".show-day");
const inputTextContainer = document.querySelector(".input-text-content");
const inputText = document.querySelector(".todo-text");
const type_life = document.querySelector(".todo-life");
const type_job = document.querySelector(".todo-job");
const todoContainer = document.querySelector(".todo-wrapper");

//btn
const addToDo = document.querySelector(".add-todo-btn");
const submitBtn = document.querySelector(".submit");
const removeBtn = document.querySelector(".remove-todo-btn");
const done = document.querySelector(".done-todo-btn");

//-------------- setting object ------------
const createUser = function (user, pin, todo) {
  this.user = user;
  this.pin = pin;
  this.todoItem = todo;
};

const user1 = new createUser("Ann Huang", 1111, []);
const user2 = new createUser("Emma Lin", 2222, []);

//------------ setting Username ----------
