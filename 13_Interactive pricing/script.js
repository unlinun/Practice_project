"use strict";

//DOM select

const cardRange = document.querySelector("#range");
const cardInfo = document.querySelector(".card__info");
const cardPriceBig = document.querySelector(".card__price--big");
const discount = document.querySelector(".payment__discount");
const payment = document.querySelector(".payment__toggle");
const paymentToggle = document.querySelectorAll(`input[type="radio"]`);

let rangeValue = 0;
let pageView = 0;
let isToggle = false;
// 獲得 slider 的 value --
cardRange.addEventListener("input", function (e) {
  rangeValue = +e.target.value;
  pageView = getPageView(rangeValue);
  //   更改背景顏色
  cardRange.style.background = ` linear-gradient(
    to right,
    var(--slider-full-color) 0%,
    var(--slider-bgc-color) ${rangeValue}%,
    var(--slider-empty-color) 0%
  )`;
  //   console.log(rangeValue);
  renderView(rangeValue, pageView);
});

paymentToggle.forEach((toggle) =>
  toggle.addEventListener("click", function (e) {
    const toggle = e.target.id;
    if (toggle === "yearly") {
      isToggle = true;
      //   更改 toggle 的顏色
      payment.style.background = `var(--slider-bgc-color)`;
      renderView(rangeValue, pageView);
    }
    if (toggle === "monthly") {
      isToggle = false;
      //   更改 toggle 的顏色
      payment.style.background = `var(--toggle-bgc-color)`;
      renderView(rangeValue, pageView);
    }
  })
);

// 根據 range 的 value 來取得 pageView 的數字
const getPageView = function (rangeValue) {
  const pageView = (100 / 16) * rangeValue;
  return pageView;
};

// 將數據呈現於畫面
const renderView = function (range, view) {
  cardInfo.textContent = `${view}k Pageviews`;
  cardPriceBig.textContent = `$${isToggle ? range * 0.75 : range}`;
};
