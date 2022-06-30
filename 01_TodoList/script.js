"use strict";

//select DOM element
//function
//select DOM elements
const logo = document.querySelector(".logo");
console.log(logo);
const loginID = document.querySelector(".login-id");
const loginPin = document.querySelector(".login-pin");
const addToDo = document.querySelector(".add-todo-text");
const todoItemBox = document.querySelector(".todo-item-box");

//btn elements
const loginBtn = document.querySelector(".login-btn");
const addToDoBtn = document.querySelector(".add-todo-btn");
const removeBtn = document.querySelector(".item-remove-btn");
const finishedBtn = document.querySelector(".item-finished-btn");

//setting login object

const user1 = {
  fullName: "John Smith",
  password: 1111,
};
const user2 = {
  fullName: "Alice Huang",
  password: 2222,
};

const accounts = [user1, user2];

//setting user ID

const userID = function (account) {
  account.forEach((user) => {
    user.ID = user.fullName
      .toLowerCase()
      .split(" ")
      .map((n) => n[0])
      .join("");
  });
};

userID(accounts);
console.log(accounts);

//set current user

let currentUser;
const current = function (account) {
  currentUser = account.find((user) => user.ID === loginID.value);
  console.log(currentUser);
};

loginBtn.addEventListener("click", function (e) {
  current(accounts);
  if (currentUser?.password === Number(loginPin.value)) {
    loginID.value = loginPin.value = "";
    addToDo.attributes.removeNamedItem("disabled");
    addToDoBtn.attributes.removeNamedItem("disabled");
    logo.textContent = `Welcome back ! ${currentUser.fullName}`;
  }
});
