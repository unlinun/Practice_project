"use strict";

const text = document.querySelector(".text");
const item = document.querySelector(".note-item");
const submitBtn = document.querySelector(".submit");
const closeBtn = document.querySelector(".close");
const popupBox = document.querySelector(".pop-up-box");
const popupText = document.querySelector(".popup-text");
const popupTitle = document.querySelector(".popup-title");

class Note {
  now = new Date();
  id = (Date.now() + "").slice(-5);
  constructor(text) {
    this.text = text;
    this.title = text.slice(0, 5);
  }
}

class App {
  #notes = [];
  constructor() {
    submitBtn.addEventListener("click", this._createNote.bind(this));
  }
  /////createNote
  _createNote() {
    let note;
    const textInput = text.value;
    if (text.value != "") {
      note = new Note(textInput);
      this.#notes.push(note);
      console.log(note);
    }

    ////renderNote
    this._renderNotes(note);
    this._clearValue();

    ////////popup
    const load = document.querySelectorAll(".load");
    load.forEach((btn) =>
      btn.addEventListener("click", this._popup.bind(this))
    );

    ////close popup
    closeBtn.addEventListener("click", this._closePopup.bind(this));
  }
  ///// renderNote
  _renderNotes(note) {
    const html = `<div class="item" data-id="${note.id}">
    <h3 class="title">${note.title}</h3>
      <span class="note-text"
        >${note.text}</span
      >
    <button class="load">Load more</button>
  </div>
    `;
    item.insertAdjacentHTML("beforeend", html);
  }
  //////clear value
  _clearValue() {
    text.value = "";
  }

  /////// window pop-up
  _popup(e) {
    e.preventDefault();
    const item = e.target.parentElement;
    const popupItem = this.#notes.find((n) => n.id === item.dataset.id);
    popupBox.classList.remove("hidden");
    popupTitle.textContent = `${popupItem.title}`;
    popupText.textContent = `${popupItem.text}`;
  }

  _closePopup() {
    popupBox.classList.add("hidden");
  }
}

const app = new App();
