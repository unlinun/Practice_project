"use strict";

//------------- SELECT DOM ELEMENT -----------
//content element
const logo = document.querySelector(".logo");
const showDay = document.querySelector(".show-day");
const loginID = document.querySelector(".login-id");
const loginPin = document.querySelector(".login-password");
const inputTextContainer = document.querySelector(".input-text-content");
const inputText = document.querySelector(".todo-text");
const type_life = document.querySelector(".todo-life");
const type_job = document.querySelector(".todo-job");
const todoContainer = document.querySelector(".todo-wrapper");
const todoList = document.querySelector(".todo-list");
const item = document.querySelector(".item");

//btn
const loginBtn = document.querySelector(".login-btn");
const addToDoBtn = document.querySelector(".add-todo-btn");
const submitBtn = document.querySelector(".submit");
const removeBtn = document.querySelector(".remove-todo-btn");
const doneBtn = document.querySelector(".done-todo-btn");

//-------------- SETTING OBJECT ------------
const createUser = function (name, pin, todo) {
  this.fullName = name;
  this.pin = pin;
  this.todoItem = todo;
};

const user1 = new createUser("Ann Huang", 1111, []);
const user2 = new createUser("Emma Lin", 2222, []);
const users = [user1, user2];

console.log(user1);
//------------ SETTING USERNAME----------

const createUserName = function (account) {
  account.forEach((user) => {
    user.ID = user.fullName
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
    console.log(user.ID);
  });
};
createUserName(users);

//---------- SETTING TIMER ----------
const option = {
  year: "numeric",
  month: "2-digit",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};
const displayTime = function () {
  setInterval(() => {
    const now = new Date();
    const time = new Intl.DateTimeFormat("en-US", option).format(now);
    // console.log(time);
    showDay.textContent = time;
  }, 1000);
};
// displayTime();

//---------- LOGIN IN EVENT ----------
let currentUser;
const findCurrentUser = function () {
  currentUser = users.find((user) => user.ID === loginID.value);
};
loginBtn.addEventListener("click", function () {
  findCurrentUser();
  console.log(currentUser);
  if (currentUser?.pin === Number(loginPin.value)) {
    loginID.value = loginPin.value = "";
    todoList.innerHTML = "";
    logo.textContent = `Hello ${currentUser.fullName}`;
    displayTime();
  }
});

//---------- SETTING LIST EVENT ----------

const addToDoList = function (account) {
  account.todoItem.forEach((value, i) => {
    const newHtml = `
        <div class="todo-item">
        <li>${i + 1}  ${value}</li>
        <div class="item-btn">
        <button class="btn remove-todo-btn">✘</button>
        <button class="btn done-todo-btn">✔︎</button>
        </div>
        </div>
        `;
    todoList.insertAdjacentHTML("afterbegin", newHtml);
  });
};

// add todo btn event
addToDoBtn.addEventListener("click", function () {
  inputTextContainer.classList.remove("hidden");
});

submitBtn.addEventListener("click", function () {
  todoList.innerHTML = "";
  currentUser.todoItem.push(inputText.value);
  addToDoList(currentUser);
  inputText.value = "";
  inputTextContainer.classList.add("hidden");
  console.log(currentUser);
});

//-------- SETTING DONE and REMOVE --------
removeBtn.addEventListener("click", function () {
  console.log("hello");
});
