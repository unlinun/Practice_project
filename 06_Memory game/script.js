"use strict";
const chooseSize = document.querySelector("#choose-size");
const startBtn = document.querySelector(".start-btn");
const cardBox = document.querySelector(".card-box");
const step = document.querySelector(".step");
const point = document.querySelector(".point");

class App {
  #cardArray;
  #isStart = false;
  #isFlip = false;
  #firstCard;
  #secondCard;
  #step = 0;
  #point = 0;
  constructor() {
    startBtn.addEventListener("click", this._getCardSize.bind(this));
  }

  //// * set default
  _setDefault() {
    chooseSize.removeAttribute("disabled");
    this.#cardArray = [];
    this.#point = 0;
    this.#step = 0;
    this.#isStart = !this.#isStart;
    point.textContent = `${this.#point}`;
    step.textContent = `${this.#step}`;
    startBtn.textContent = "START";
    cardBox.innerHTML = "";
    cardBox.style.gridTemplateRows = "";
    chooseSize.value = 0;
    // render card and display: gird
  }

  //// 2. get card gird size and set array
  _getCardSize() {
    if (this.#isStart && chooseSize.value !== 0) {
      chooseSize.setAttribute("disabled", true);
      this.#isStart = false;
      const arr = [];
      const size = chooseSize.value;
      startBtn.textContent = "STOP";
      // setting array by size value
      for (let i = 1; i <= size / 2; i++) {
        arr.push(i);
      }
      // random sort of card array
      this.#cardArray = [...arr, ...arr].sort(() => Math.random() - 0.5);

      // render card and display: gird
      this._renderCard(this.#cardArray);

      // get card DOM and add click handler
      const cards = document.querySelectorAll(".card");
      const frontCard = document.querySelectorAll(".front-card");

      //flip all card
      this._flipAllCard(cards);
      // setting card id
      this._cardId(cards);
      this._frontCard(frontCard);

      // add flip event
      cards.forEach((c) =>
        c.addEventListener("click", this._flipCard.bind(this))
      );
    } else {
      this._setDefault();
    }
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
  // flip all card
  _flipAllCard(card) {
    card.forEach((c) => c.classList.add("flip"));
    if (chooseSize.value <= 12) {
      setTimeout(() => {
        card.forEach((c) => c.classList.remove("flip"));
      }, 2000);
    } else {
      setTimeout(() => {
        card.forEach((c) => c.classList.remove("flip"));
      }, 3000);
    }
  }
  // flip one card
  _flipCard(e) {
    e.target.parentElement.classList.add("flip");
    if (!this.#isFlip) {
      this.#isFlip = true;
      this.#firstCard = e.target.parentElement;
    } else {
      this.#isFlip = false;
      this.#secondCard = e.target.parentElement;
      console.log(this.#firstCard, this.#secondCard);

      //如果翻了第二張卡，比較第一張跟第二張卡片 id 是否一樣
      this._cardCompare(this.#firstCard, this.#secondCard);
    }
    this._isWin();
  }

  ///// 7. compare if first and second has same id
  _cardCompare(first, second) {
    if (first.dataset.id === second.dataset.id) {
      first.removeEventListener("click", this._flipCard.bind(this));
      second.removeEventListener("click", this._flipCard.bind(this));
      this._updatePoint();
      this._updateStep();
    } else {
      this._updateStep();
      setTimeout(() => {
        first.classList.remove("flip");
        second.classList.remove("flip");
      }, 1000);
    }
  }

  ///// 8. update all data
  _updatePoint() {
    this.#point += 1;
    point.textContent =
      this.#point >= 10 ? `${this.#point}` : `0${this.#point}`;
  }
  _updateStep() {
    this.#step += 1;
    step.textContent = this.#step >= 10 ? `${this.#step}` : `0${this.#step}`;
  }

  //// check every card had flip
  _isWin() {
    if (this.#point === chooseSize.value / 2) {
      setTimeout(() => {
        this._setDefault();
        alert("You WIN! !");
      }, 500);
    }
    if (this.#step > 10) {
      setTimeout(() => {
        this._setDefault();
        alert("You LOSE ! Try again !");
      }, 500);
    }
  }
}

const game = new App();
