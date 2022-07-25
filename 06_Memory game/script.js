"use strict";
const chooseSize = document.querySelector("#choose-size");
const startBtn = document.querySelector(".start-btn");
const cardBox = document.querySelector(".card-box");

class App {
  #cardArray;
  #isFlip = false;
  #firstCard;
  #secondCard;
  constructor() {
    startBtn.addEventListener("click", this._getCardSize.bind(this));
  }

  //// 2. get card gird size and set array
  _getCardSize() {
    const arr = [];
    const size = chooseSize.value;
    chooseSize.value = 0;
    startBtn.textContent = "STOP";
    // setting array by size value
    for (let i = 1; i <= size / 2; i++) {
      arr.push(i);
    }
    // random sort of card array
    this.#cardArray = [...arr, ...arr].sort(() => Math.random() - 0.5);
    console.log(this.#cardArray);

    // render card and display: gird
    this._renderCard(this.#cardArray);

    // get card DOM and add click handler
    const cards = document.querySelectorAll(".card");
    const frontCard = document.querySelectorAll(".front-card");
    // setting card id
    this._cardId(cards);
    this._frontCard(frontCard);

    // add flip event
    cards.forEach((c) =>
      c.addEventListener("click", this._flipCard.bind(this))
    );
  }

  //// 3. display card and setting grid template
  _renderCard(array) {
    cardBox.style.gridTemplateRows = `repeat(${array.length / 4},180px)`;
    const html = ` <div class="card">
    <div class="front-card"></div>
    <div class="back-card"></div>
  </div>`;
    for (let i = 0; i < array.length; i++) {
      cardBox.insertAdjacentHTML("beforeend", html);
    }
  }

  //// 4. set card id
  _cardId(card) {
    card.forEach((c, i) => c.setAttribute("data-id", `0${this.#cardArray[i]}`));
  }
  //// 5. set front card img
  _frontCard(front) {
    front.forEach(
      (c, i) =>
        (c.style.backgroundImage = `url('image/img-0${
          this.#cardArray[i]
        }.png')`)
    );
  }
  //// 6. add flip card class
  _flipCard(e) {
    console.log(e.target);
    e.target.parentElement.classList.add("flip");
    if (!this.#isFlip) {
      this.#isFlip = true;
      this.#firstCard = e.target.parentElement;
    } else {
      this.#isFlip = false;
      this.#secondCard = e.target.parentElement;
      console.log(this.#firstCard, this.#secondCard);
      this._cardCompare(this.#firstCard, this.#secondCard);
    }
  }

  ///// 7. compare if first and second has same id
  _cardCompare(first, second) {
    if (first.dataset.id === second.dataset.id) {
      first.removeEventListener("click", this._flipCard.bind(this));
      second.removeEventListener("click", this._flipCard.bind(this));
    } else {
      setTimeout(() => {
        first.classList.remove("flip");
        second.classList.remove("flip");
      }, 1000);
    }
  }
}

const game = new App();
