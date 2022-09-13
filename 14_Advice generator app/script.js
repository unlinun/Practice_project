"use strict";

// DOM
const adviceTitle = document.querySelector(".advice__title");
const adviceContent = document.querySelector(".advice__content");
const diceBtn = document.querySelector(".card__btn");

// fetch data from API -- https://api.adviceslip.com/advice
const getData = async function () {
  const response = await fetch(`https://api.adviceslip.com/advice`);
  const data = await response.json();
  console.log(data);
  const advices = data.slip;
  renderView(advices);
};
//render view
const renderView = function (data) {
  adviceTitle.textContent = `ADVICE #${data.id}`;
  adviceContent.textContent = `“ ${data.advice} ”`;
};

diceBtn.addEventListener("click", getData);
