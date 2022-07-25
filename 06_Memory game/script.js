"use strict";

const cardBox = document.querySelector(".card-box");
const point = document.querySelector(".point");
const chance = document.querySelector(".chance");
const chooseSize = document.querySelector("#choose-size");
console.log(chooseSize.value);

const startBtn = document.querySelector(".start-btn");

//// set item
class App {
  #start = false;
  #cardArray = [];
  constructor() {
    startBtn.addEventListener("click", this._getCardSize.bind(this));
  }

  //   default value!
  _defaultValue() {
    startBtn.textContent = "START";
    chooseSize.value = 0;
    this.#cardArray = [];
    cardBox.style.gridTemplateRows = "";
    cardBox.innerHTML = "";
    console.log(cardBox);
  }

  // 1. set card
  _getCardSize() {
    if (chooseSize.value != 0) {
      this.#start = true;
    }
    const size = chooseSize.value;
    console.log(this.#start);
    if (this.#start && chooseSize.value != 0) {
      startBtn.textContent = "STOP";
      const array = [];
      for (let i = 1; i <= size / 2; i++) {
        array.push(i);
      }
      const newArray = [...array, ...array];
      this.#cardArray = newArray.sort(() => Math.random() - 0.5);
      chooseSize.value = 0;
      //// render Card function
      this._renderCard(this.#cardArray);
      this._frontCard();
      this._cardId();
      ////flip
      this._flipCard(this.#cardArray);
    } else {
      this.#start = this.#start;
      this._defaultValue();
    }
  }

  // 2. set right size of card
  _renderCard(card) {
    cardBox.style.gridTemplateRows = `repeat(${card.length / 4}, 180px)`;
    for (let i = 0; i < card.length; i++) {
      const html = ` <div class="card front-card back-card" ></div>`;
      console.log(i);
      cardBox.insertAdjacentHTML("beforeend", html);
    }
    console.log(cardBox);
  }
  // 3. set card data
  _cardId() {
    const card = document.querySelectorAll(".card");
    card.forEach((c, i) => c.setAttribute("data-id", `0${this.#cardArray[i]}`));
  }
  // 4. set frontCard
  _frontCard() {
    const front = document.querySelectorAll(".front-card");
    front.forEach(
      (c) => (c.style.backgroundImage = `url('image/img-bgc.png')`)
    );
    console.log(front);
  }
  // 5.flip card
  _flipCard(card) {
    const cards = document.querySelectorAll(".card");
  }
}
const app = new App();
