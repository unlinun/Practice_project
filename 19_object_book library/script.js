"use strict";

// DOM SELECT
// btn
const addBtn = document.querySelector(".btn__add");
const submitBtn = document.querySelector(".submit");

// input
const form = document.querySelector(".form");
const addForm = document.querySelector(".add__form");
const bookList = document.querySelector(".book__list");
const overlay = document.querySelector(".overlay");
const input = form.querySelectorAll("input");
console.log(input);

const library = [];

function Book(title, author, pageNum, isRead) {
  this.title = title;
  this.author = author;
  this.pageNum = pageNum;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  library.push(book);
}

window.addEventListener("load", getLocalStorage);

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  addForm.classList.remove("hidden");
});
overlay.addEventListener("click", function (e) {
  addForm.classList.add("hidden");
});
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const form = e.target.closest(".form");
  const title = form.querySelector(".book__title").value;
  const author = form.querySelector(".book__author").value;
  const pages = form.querySelector(".book__page").value;
  if (!title || !author || !pages) return;
  const isRead = false;
  const book = new Book(title, author, pages, isRead);
  addBookToLibrary(book);
  addForm.classList.add("hidden");
  bookList.innerHTML = "";
  renderBook(library);
  input.forEach((input) => (input.value = ""));
  const readBtn = bookList.querySelectorAll(".btn__read");
  readBtn.forEach((btn, i) => {
    btn.addEventListener("click", function () {
      console.log(btn);
      btn.classList.toggle("btn__read--true");
      if (btn.classList.contains("btn__read--true")) {
        library[i].isRead = true;
      } else {
        library[i].isRead = false;
      }
    });
  });
  setLocalStorage(book);
});

function renderBook(library) {
  console.log(library);
  library.forEach((book) => {
    const html = `
        <div class="list__box">
            <h3 class="title">Title : ${book.title}</h3>
            <div class="author">Author : ${book.author}</div>
            <div class="page">Pages : ${book.pageNum} pages</div>
            <button class="btn__read">finished</button>
        </div>
        `;
    bookList.insertAdjacentHTML("afterbegin", html);
  });
}

function setLocalStorage(book) {
  if (!localStorage.getItem("books")) {
    const item = [];
    item.push(book);
    localStorage.setItem("books", JSON.stringify(item));
  } else {
    const item = JSON.parse(localStorage.getItem("books"));
    console.log(item);
    item.push(book);
    localStorage.setItem("books", JSON.stringify(item));
  }
}

function getLocalStorage() {
  if (!localStorage.getItem("books")) return;
  const books = JSON.parse(localStorage.getItem("books"));
  library.push(...books);
  bookList.innerHTML = "";
  renderBook(library);

  const readBtn = bookList.querySelectorAll(".btn__read");
  readBtn.forEach((btn, i) => {
    btn.addEventListener("click", function () {
      console.log(btn);
      btn.classList.toggle("btn__read--true");
      if (btn.classList.contains("btn__read--true")) {
        library[i].isRead = true;
      } else {
        library[i].isRead = false;
      }
    });
  });
}
