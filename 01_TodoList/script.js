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

// set time
const setTime = function () {
  const options = {
    month: "long",
    day: "numeric",
  };
  const now = new Date();
  const showTime = Intl.DateTimeFormat("en-US", options).format(now);
  return showTime;
};

//loginBtn event handler
loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  //set current user
  current(accounts);
  //if login pin === user's pin
  if (currentUser?.password === Number(loginPin.value)) {
    //set value to empty
    loginID.value = loginPin.value = "";
    // set input box to enable
    addToDo.attributes.removeNamedItem("disabled");
    addToDoBtn.attributes.removeNamedItem("disabled");
    //show user's name
    logo.textContent = `Welcome back ! ${currentUser.fullName}`;
  }
});

// add todo item event handler
addToDoBtn.addEventListener("click", function (e) {
  e.preventDefault();
  newItem();
  addToDo.value = "";
});

//add finished and deleted element

// create new item when click add btn
const newItem = function () {
  //create a new div
  const todoValue = addToDo.value;
  // add adjacentHTML
  const newItem = ` <ul>
  <div class="item"
      <li class="item-list">${setTime()}  ${todoValue}</li>
      <button class="btn item-remove-btn">✘</button>
      <button class="btn item-finished-btn">✔︎</button>
    </div>
  </ul>`;
  todoItemBox.insertAdjacentHTML("afterbegin", newItem);
};
