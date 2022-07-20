"use strict";

const text = document.querySelector(".text");
const item = document.querySelector(".note-item");
const submitBtn = document.querySelector(".submit");

class Note {
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
  }
  ///// renderNote
  _renderNotes(note) {
    const html = `<div class="item">
    <h3 class="title">${note.title}</h3>
      <span class="note-text"
        >${note.text}</span
      >
    <button class="load">Load more</button>
  </div>
    `;
    item.insertAdjacentHTML("beforeend", html);

    //////load btn
    // const load = document.querySelector(".load");
    // load.addEventListener("click", this._popup.bind(this, note));
  }
  //////clear value
  _clearValue() {
    text.value = "";
  }

  /////// window pop-up
  //   _popup(note) {
  //     const html = `<section class="pop-up-box">
  //     <div class="item pop-up-item">
  //       <h3 class="title">${note.title}</h3>
  //         <span class="note-text"
  //           >${note.text}</span
  //         >
  //       <button class="close">x</button>
  //     </div>
  //   </section>
  //     `;
  //     item.insertAdjacentHTML("afterend", html);
  //     //////close
  //     const close = document.querySelector(".close");
  //     close.addEventListener("click", function (e) {
  //       const item = e.target;
  //       const itemBox = item.parentElement.parentElement;
  //       itemBox.remove();
  //     });
  //   }
}

const app = new App();
