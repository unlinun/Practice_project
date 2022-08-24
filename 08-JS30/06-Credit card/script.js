"use-strict";

// DOM select

// input
const inputHolder = document.querySelector(".input-holder");
const inputNumber = document.querySelector(".input-number");
const inputMonth = document.querySelector(".input-month");
const inputYear = document.querySelector(".input-year");
const inputCvc = document.querySelector(".input-cvc");

//card container
const frontCard = document.querySelector(".front-card");
const backCard = document.querySelector(".back-card");

const cardNumber = document.querySelector(".card-number");
const cardHolder = document.querySelector(".card-holder");
const cardMonth = document.querySelector(".card-month");
const cardYear = document.querySelector(".card-year");
const cardCvc = document.querySelector(".card-cvc");

// EVENT handler
const inputArray = [inputHolder, inputNumber, inputMonth, inputYear, inputCvc];
const cardArray = [cardHolder, cardNumber, cardMonth, cardYear, cardCvc];

inputArray.forEach((input, i) => {
  input.addEventListener("input", function () {
    if (input.value === "") return;
    cardArray[i].innerText = input.value;
  });
});

// 新增翻轉效果
inputCvc.addEventListener("mouseenter", function (e) {
  e.preventDefault();
  frontCard.style = `transform :perspective(1000px) rotateY(-180deg)`;
  backCard.style = `transform :perspective(1000px) rotateY(0deg)`;
});

inputCvc.addEventListener("mouseleave", function (e) {
  e.preventDefault();
  frontCard.style = `transform :perspective(1000px) rotateY(0deg)`;
  backCard.style = `transform :perspective(1000px) rotateY(180deg)`;
});
