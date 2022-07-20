"use strict";

//////// DOM selector
const itemName = document.querySelector("#item-name");
const date = document.querySelector("#date");
const amount = document.querySelector("#amount");
const tableBody = document.querySelector(".table-body");
const total = document.querySelector(".total");
const submitBtn = document.querySelector(".submit-btn");

class Tracker {
  now = new Date();
  id = (Date.now() + "").slice(-5);
  constructor(item, date, amount) {
    this.item = item;
    this.date = date;
    this.amount = amount;
  }
}

class App {
  #total = 0;
  #trackers = [];
  constructor() {
    submitBtn.addEventListener("click", this._submit.bind(this));
  }

  /////// add submit
  _submit(e) {
    e.preventDefault();
    //setting value
    const item = itemName.value;
    const dateTime = date.value;
    const amountNum = +amount.value;
    // console.log(amountNum);
    let tracker;
    ////check value
    const checkValue = (...input) => input.every((e) => e != "");
    ///// check is number
    const checkNum = (amount) => isNaN(amount);
    console.log(checkNum(amountNum));
    /////check value and push to class object
    if (checkValue(item, dateTime, amountNum) && !checkNum(amountNum)) {
      console.log("check");
      tracker = new Tracker(item, dateTime, amountNum);
      this.#trackers.push(tracker);
      this.#total += amountNum;
      console.log(this.#total);
      total.textContent = `TOTAL : ${this.#total} $`;
      //   console.log(this.#trackers);
    }
    if (!checkValue(item, dateTime, amountNum)) {
      alert(`please enter value`);
    }
    if (checkNum(amountNum)) {
      alert(`please enter NUMBER!`);
      amount.value = "";
    }
    this._renderInput(tracker);
    this._clearValue();
    /// get delete btn
    const deleteBtn = document.querySelectorAll(".delete-btn");
    deleteBtn.forEach((btn) =>
      btn.addEventListener("click", this._deleteItem.bind(this))
    );
  }

  //////// render amount to table
  _renderInput(tracker) {
    // console.log(tracker);
    const html = `<tr class= "item">
    <td>${tracker.item}</td>
    <td>${tracker.date}</td>
    <td>${tracker.amount} $</td>
    <td><button class="delete-btn">X</button></td>
  </tr>`;
    tableBody.insertAdjacentHTML("beforeend", html);
  }

  _deleteItem(e) {
    const btn = e.target;
    const item = btn.parentElement.parentElement;
    item.remove();
  }
  _clearValue() {
    itemName.value = date.value = amount.value = "";
  }
}

const app = new App();
