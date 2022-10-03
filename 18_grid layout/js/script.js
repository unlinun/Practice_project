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

let library = [];
const Book = function (title, author, pages, read, id) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

//////////// EVENT HANDLER
addNewBtn.addEventListener("click", showForm);
closeForm.addEventListener("click", hideForm);
overlay.addEventListener("click", hideForm);
// add new book submit click!
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let title = addForm.querySelector(".input__title").value;
  let author = addForm.querySelector(".input__author").value;
  let pages = addForm.querySelector(".input__pages").value;
  let read = addForm.querySelector(".input__read").checked;
  let id = library.length + 1;
  console.log(id);
  if (!title || !author || !pages) return;
  const book = new Book(title, author, pages, read, id);
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

// show form container and hide form container
function showForm() {
  addContainer.classList.add("show");
}
function hideForm() {
  addContainer.classList.remove("show");
}
