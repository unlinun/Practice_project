"use strict";

// DOM SELECT
// BTN
const addNewBtn = document.querySelector(`.btn[data-btn="add"]`);
const closeForm = document.querySelector(`.btn[data-btn="close"]`);
const submitBtn = document.querySelector(".submit");

const addContainer = document.querySelector(".add__container");
const overlay = document.querySelector(".add__overlay");
const addForm = document.querySelector(".add__form");
const inputs = addForm.querySelectorAll("input");
const booksContainer = document.querySelector(".books");

const inputTitle = addForm.querySelector(".input__title");
const inputAuthor = addForm.querySelector(".input__author");
const inputPages = addForm.querySelector(".input__pages");
const inputRead = addForm.querySelector(".input__read");
const inputMsg = addForm.querySelectorAll(".input__message");

let library = [];

class Book {
  constructor(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
  }
}

//////////// EVENT HANDLER
addNewBtn.addEventListener("click", showForm);
closeForm.addEventListener("click", hideForm);
overlay.addEventListener("click", hideForm);
// add new book submit click!
submitBtn.addEventListener("click", function (e) {
  console.log("click");
  e.preventDefault();
  let title = inputTitle.value;
  let author = inputAuthor.value;
  let pages = inputPages.value;
  let read = inputRead.checked;
  let id = library.length + 1;
  console.log(checkValue(title, author, pages));
  if (!checkValue(title, author, pages)) return;

  const book = new Book(title, author, pages, read, id);
  console.log(book);
  library.push(book);
  addNewBook(book);
  const bookReadBtn = booksContainer.querySelectorAll(
    `.icon[data-btn="check"]`
  );
  const bookDeleteBtn = booksContainer.querySelectorAll(
    `.icon[data-btn="delete"]`
  );
  bookReadBtn.forEach((btn) => {
    btn.addEventListener("click", setReadBook);
  });
  bookDeleteBtn.forEach((btn) => {
    btn.addEventListener("click", setDeleteItem);
  });
  inputs.forEach((input) => {
    return (input.value = "");
  });
  hideForm();
  clearInputMessage();
});

function addNewBook() {
  const bookCards = library.map((item) => {
    return createBookCard(item);
  });
  console.log(bookCards);
  booksContainer.innerHTML = "";
  bookCards.forEach((book) => {
    booksContainer.appendChild(book);
  });
}

function setReadBook(e) {
  const readBtn = e.target;
  if (!readBtn) return;
  const bookBox = readBtn.closest(".books__box");
  const id = +bookBox.dataset.id;
  const currentBook = library.findIndex((book) => {
    if (book.id === id) return book;
  });
  readBtn.classList.toggle("icon--checked");
  bookBox.classList.toggle("books__box--read");
  library[currentBook].read = !library[currentBook].read;
}

function setDeleteItem(e) {
  const deleteBtn = e.target;
  if (!deleteBtn) return;
  const bookBox = deleteBtn.closest(".books__box");
  const id = +bookBox.dataset.id;
  const currentBook = library.findIndex((book) => {
    if (book.id === id) return book;
  });
  library.splice(currentBook, 1);
  addNewBook();
}

function clearInputMessage() {
  inputMsg.forEach((input) => {
    input.textContent = "";
  });
}
function checkValue(title, author, pages) {
  if (!title) {
    inputTitle.classList.add("input--error");
    inputTitle.parentElement.querySelector(
      ".input__message"
    ).textContent = `error! please type something!`;
  } else {
    inputTitle.classList.remove("input--error");
    inputTitle.parentElement.querySelector(".input__message").textContent = ``;
  }
  if (!author) {
    inputAuthor.classList.add("input--error");
    inputAuthor.parentElement.querySelector(
      ".input__message"
    ).textContent = `error! please type something!`;
  } else {
    inputAuthor.classList.remove("input--error");
    inputAuthor.parentElement.querySelector(".input__message").textContent = ``;
  }
  if (!pages || +pages !== "number") {
    inputPages.classList.add("input--error");
    inputPages.parentElement.querySelector(
      ".input__message"
    ).textContent = `error! please type something!`;
  } else {
    inputPages.classList.remove("input--error");
    inputPages.parentElement.querySelector(".input__message").textContent = ``;
  }
  if (title && author && pages) {
    return true;
  }
}

function createBookCard(book) {
  const bookBox = document.createElement("div");
  const bookTitle = document.createElement("p");
  const bookAuthor = document.createElement("p");
  const bookPages = document.createElement("p");
  const bookBoxIcons = document.createElement("div");
  const iconCheck = document.createElement("div");
  const iconDelete = document.createElement("div");

  bookBox.classList.add("books__box");
  bookBox.setAttribute("data-id", `${book.id}`);
  bookTitle.classList.add("books__title");
  bookAuthor.classList.add("books__author");
  bookPages.classList.add("books__pages");
  bookBoxIcons.classList.add("books__icons");
  iconCheck.classList.add("icon");
  iconCheck.classList.add("icon--check");
  iconCheck.setAttribute("data-btn", "check");
  iconDelete.classList.add("icon");
  iconDelete.classList.add("icon--delete");
  iconDelete.setAttribute("data-btn", "delete");

  //   add text content
  bookTitle.textContent = `Title : ${book.title}`;
  bookAuthor.textContent = `Written by : ${book.author}`;
  bookPages.textContent = `Total pages : ${book.pages}`;

  bookBoxIcons.appendChild(iconCheck);
  bookBoxIcons.appendChild(iconDelete);
  bookBox.appendChild(bookTitle);
  bookBox.appendChild(bookAuthor);
  bookBox.appendChild(bookPages);
  bookBox.appendChild(bookBoxIcons);
  console.log(bookBox);

  return bookBox;
}

// show form container and hide form container
function showForm() {
  addContainer.classList.add("show");
}
function hideForm() {
  addContainer.classList.remove("show");
  clearInputMessage();
}
