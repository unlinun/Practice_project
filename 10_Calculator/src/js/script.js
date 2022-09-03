"use strict";
console.log("hello");

// DOM select

const countNumber = document.querySelector(".count__number");
const countKey = document.querySelector(".count__key");
const calcKey = document.querySelectorAll(".calc__key");

calcKey.forEach((key) => key.addEventListener("click", getValue));

const numberList = [];
let number = "";
let total = 0;
function getValue(e) {
  const key = e.target.dataset.key;
  if (!key) {
    number += e.target.textContent;
    countNumber.textContent = number;
  }
  if (key === "+" || key === "-" || key === "x" || key === "/" || key === "=") {
    if (key === "+") {
      total += +number;
    }
    if (key === "-") {
      total -= +number;
    }
    numberList.push(+number);
    numberList.push(key);
    number = "";
    countKey.textContent = key;
    countNumber.textContent = total;
  }
  console.log(number, total, numberList);
}
