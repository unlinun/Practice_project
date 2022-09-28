"use strict";

// DOM ELEMENT
const screenOperator = document.querySelector(".screen__operator");
const screenCalculating = document.querySelector(".screen__calculating");
const screenTotal = document.querySelector(".screen__total");
const buttons = document.querySelectorAll(".buttons__button");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let total = "";

console.log("hello");

buttons.forEach((button) => {
  button.addEventListener("click", getOperatorData);
});

function getOperatorData(e) {
  const value = e.target.textContent.trim();
  const btnType = e.target.dataset.btn;
  if (btnType === "number") {
    getNumValue(value);
  }
  if (
    btnType === "+" ||
    btnType === "-" ||
    btnType === "*" ||
    btnType === "/"
  ) {
    getOperator(value);
  }
  if (btnType === "del") {
    getDelNumber();
  }
  if (btnType === "reset") {
    resetCalculator();
  }
  if (btnType === "total") {
    getTotalNumber();
  }
}
function getNumValue(value) {
  if (firstNumber === "") {
    firstNumber = value;
    screenTotal.textContent = firstNumber;
  } else if (firstNumber !== "" && !operator) {
    firstNumber += value;
    screenTotal.textContent = firstNumber;
  } else if (firstNumber !== "" && operator && secondNumber === "") {
    secondNumber = value;
    screenTotal.textContent = secondNumber;
  } else if (firstNumber !== "" && operator && secondNumber !== "") {
    secondNumber += value;
    screenTotal.textContent = secondNumber;
  }
}

function getOperator(value) {
  if (firstNumber !== "" && !operator && secondNumber === "") {
    operator = value;
    screenOperator.textContent = value;
  } else if (firstNumber !== "" && secondNumber !== "") {
    if (operator === "+") {
      total = +firstNumber + +secondNumber;
    }
    if (operator === "-") {
      total = +firstNumber - +secondNumber;
    }
    if (operator === "*") {
      total = +firstNumber * +secondNumber;
      console.log(total);
    }
    if (operator === "/") {
      total = +firstNumber / +secondNumber;
    }
    console.log(firstNumber, operator, secondNumber);
    firstNumber = total;
    secondNumber = "";
    operator = value;
    screenOperator.textContent = operator;
    screenTotal.textContent = total;
    console.log(firstNumber, operator, secondNumber, total);
  }
}

function getDelNumber() {}
function resetCalculator() {}
function getTotalNumber() {}
