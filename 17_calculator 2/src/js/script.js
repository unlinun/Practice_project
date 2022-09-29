"use strict";

// DOM ELEMENT
const screenOperator = document.querySelector(".screen__operator");
const screenCalculating = document.querySelector(".screen__calculating");
const screenTotal = document.querySelector(".screen__total");
const buttons = document.querySelectorAll(".buttons__button");

// SET DEFAULT DATA
let firstNumber = "";
let secondNumber = "";
let operator = "";
let total = 0;
let calculating = "";
let reset = false;

// ADD EVENT LISTENER
// btn click => check btn type
buttons.forEach((button) => {
  button.addEventListener("click", getOperatorData);
});

// get operator data and set correct function
function getOperatorData(e) {
  const value = e.target.textContent.trim();
  const btnType = e.target.dataset.btn;
  //   if reset = true => reset calculator
  if (reset) resetCalculator();
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
  if (btnType === "total") {
    getTotal();
  }
  if (btnType === "del") {
    getDelNumber(value);
  }
  if (btnType === "reset") {
    resetCalculator();
  }
}

// check number if exist
function getNumValue(value) {
  if (!firstNumber) {
    firstNumber = value;
    screenTotal.textContent = firstNumber;
  } else if (firstNumber !== "" && !operator) {
    if (value === "." && firstNumber.includes(".")) return;
    firstNumber += value;
    screenTotal.textContent = firstNumber;
  } else if (firstNumber !== "" && operator && !secondNumber) {
    secondNumber = value;
    screenTotal.textContent = secondNumber;
  } else if (firstNumber !== "" && operator && secondNumber !== "") {
    if (value === "." && secondNumber.includes(".")) return;
    secondNumber += value;
    screenTotal.textContent = secondNumber;
  }
  if (firstNumber === ".") {
    value = "0.";
    firstNumber += 0;
  } else if (secondNumber === ".") {
    value = "0.";
    secondNumber += 0;
  }
  //   update screen calculating number
  getCalculating(value);
}

function checkOperator() {
  if (operator === "+") {
    total = +firstNumber + +secondNumber;
  }
  if (operator === "-") {
    total = +firstNumber - +secondNumber;
  }
  if (operator === "x") {
    total = +firstNumber * +secondNumber;
    console.log(total);
  }
  if (operator === "/") {
    total = +firstNumber / +secondNumber;
  }
}

function getOperator(value) {
  if (firstNumber !== "" && !operator && secondNumber === "") {
    operator = value;
    screenOperator.textContent = value;
    //   update screen calculating number
    getCalculating(operator);
  }
  if (firstNumber !== "" && operator && secondNumber !== "") {
    // check operator and calculate them
    checkOperator();
    // set data for next loop
    firstNumber = total;
    secondNumber = "";
    operator = value;
    //   update screen calculating number
    getCalculating(operator);
    screenOperator.textContent = operator;
    screenTotal.textContent = total;
  }
}

// del btn click
function getDelNumber() {
  if (firstNumber && firstNumber.length > 1 && !secondNumber) {
    // use slice to remove last number
    const newFirst = firstNumber.slice(0, -1);
    const newCal = calculating.slice(0, -1);
    firstNumber = newFirst;
    calculating = newCal;
    screenCalculating.textContent = calculating;
    screenTotal.textContent = firstNumber;
  } else if (firstNumber && secondNumber && secondNumber.length > 1) {
    const newSecond = secondNumber.slice(0, -1);
    const newCal = calculating.slice(0, -1);
    secondNumber = newSecond;
    calculating = newCal;
    screenCalculating.textContent = calculating;
    screenTotal.textContent = secondNumber;
  }
}
function getTotal() {
  checkOperator();
  calculating += "=";
  calculating += total;
  screenCalculating.textContent = calculating;
  screenTotal.textContent = total;
}
function getCalculating(data) {
  calculating += data;
  screenCalculating.textContent = calculating;
}

function resetCalculator() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  total = 0;
  calculating = "";
  reset = false;
  screenOperator.textContent = operator;
  screenTotal.textContent = total;
  screenCalculating.textContent = calculating;
}
