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
  fullName: "Lin Yuen",
  password: 1111,
};
const user2 = {
  fullName: "Arens Huang",
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
    month: "numeric",
    day: "2-digit",
  };
  const now = new Date();
  const showTime = Intl.DateTimeFormat("en-US", options).format(now);
  return showTime;
};

//set default value
const defaultUI = function () {
  loginBtn.textContent = `Login`;
  loginID.value = loginPin.value = "";
  //set addToDo element attribute to disable
  addToDo.setAttribute("disabled", "");
  addToDoBtn.setAttribute("disabled", "");
  //remove login attribute disable
  loginID.attributes.removeNamedItem("disabled");
  loginPin.attributes.removeNamedItem("disabled");
  addToDo.placeholder = "please Login";
  logo.textContent = `Welcome To-Do`;
  todoItemBox.innerHTML = "";
};

//loginBtn event handler
let log;
loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  //set current user
  current(accounts);
  console.log(log);
  //if login pin === user's pin
  if (currentUser?.password === Number(loginPin.value)) {
    log = !log;
    //set value to empty
    loginBtn.textContent = `Log out`;
    loginID.value = loginPin.value = "";
    //set login value to disable
    loginID.setAttribute("disabled", "");
    loginPin.setAttribute("disabled", "");
    // set input box to enable and change placeholder value
    addToDo.placeholder = "Add your todo ";
    addToDo.attributes.removeNamedItem("disabled");
    addToDoBtn.attributes.removeNamedItem("disabled");
    //show user's name
    logo.textContent = `Welcome back ! ${currentUser.fullName}`;
  } else if (currentUser?.password != Number(loginPin.value) || log === false) {
    defaultUI();
  }
});

// add todo item event handler
addToDoBtn.addEventListener("click", function (e) {
  e.preventDefault();
  //if text length != empty
  if (addToDo.value != "") {
    newItem();
  }
  addToDo.value = "";
});

// create new item when click add btn
const newItem = function () {
  //create a new div
  const todoValue = addToDo.value;
  // add adjacentHTML
  const ul = document.createElement("ul");
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("item");
  todoDiv.innerHTML = `<li class="item-list">${setTime()}  ${todoValue}</li>
  <button class="btn item-remove-btn">✘</button>
  <button class="btn item-finished-btn">✔︎</button>`;
  ul.appendChild(todoDiv);
  todoItemBox.appendChild(todoDiv);
  //setting remove btn
};

//add finished and deleted element

todoItemBox.addEventListener("click", function (e) {
  const current = e.target;
  console.log(current);
  if (current.classList.contains("item-finished-btn")) {
    const item = current.parentElement;
    item.classList.add("finished");
  } else if (current.classList.contains("item-remove-btn")) {
    const item = current.parentElement;
    item.remove();
  }
});
