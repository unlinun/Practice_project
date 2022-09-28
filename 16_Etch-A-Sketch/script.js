"use strict";

// DOM
const main = document.querySelector(".main");

let colorValue = `#000000`;
let girdNum = 4;
let drawType = "color";

window.addEventListener("load", function () {
  getGridItem();
});

function createControlElement() {
  const mainControl = document.createElement("div");
  mainControl.classList.add("main__control");
  const controlHTML = `
  <div class="control__color">
    <input type="color" name="color" id="input__color" value="#000000" />
    <label class="label__color" for="input__color"
        >Color : #000000</label
    >
    </div>
    <button class="control__btn active" type="button" data-btn="color">color mode</button>
    <button class="control__btn" type="button" data-btn="rainbow">rainbow mode</button>
    <button class="control__btn" type="button" data-btn="eraser">eraser mode</button>
    <button class="control__btn" type="button" data-btn="clear">clear all</button>
    <div class="control__grid">
    <input
        type="range"
        name="grid"
        id="input__grid"
        max="64"
        min="4"
        step="2"
        value="4"
    />
    <label for="input__grid" class="label__grid">4 X 4 PX</label>
  </div>
 `;
  const mainSketch = document.createElement("div");
  mainSketch.classList.add("main__sketch");
  mainControl.insertAdjacentHTML("afterbegin", controlHTML);
  main.appendChild(mainControl);
  main.appendChild(mainSketch);
}

createControlElement();

const buttons = main.querySelectorAll(".control__btn");

// change color control innerText
const colorControl = main.querySelector(".control__color");

// get range value
const girdRange = main.querySelector("#input__grid");
const labelGrid = main.querySelector(".label__grid");
const controlSketch = main.querySelector(".main__sketch");

// EVENT LISTENER
girdRange.addEventListener("change", getGridNum);
buttons.forEach((btn) => {
  btn.addEventListener("click", getBtnActive);
});
colorControl.addEventListener("change", getColorValue);
controlSketch.addEventListener("mouseover", function (e) {
  const grids = controlSketch.querySelectorAll(".sketch__grid");
  console.log(grids);
  const grid = e.target.closest(".sketch__grid");
  if (!grid) return;
  if (drawType === "color") {
    grid.style.backgroundColor = colorValue;
  }
  if (drawType === "rainbow") {
    grid.style.backgroundColor = getRandomColor();
  }
  if (drawType === "eraser") {
    grid.style.backgroundColor = `#fff`;
  }
  if (drawType === "clear") {
    grids.forEach((grid) => {
      grid.style.backgroundColor = `#fff`;
    });
  }
});

// BTN EVENT HANDLER
function getBtnActive(e) {
  // remove all active class
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
  const btn = e.target;
  if (!btn) return;
  //   add active class at current btn
  const type = e.target.dataset.btn;
  drawType = type;
  btn.classList.add("active");
}

// GET GRID NUM
function getGridNum(e) {
  girdNum = e.target.value;
  labelGrid.textContent = `${girdNum} X ${girdNum} PX`;
  getGridItem();
}

// GET GRID ITEM
function getGridItem() {
  controlSketch.style.gridTemplateColumns = `repeat(${girdNum}, 1fr)`;
  controlSketch.style.gridTemplateRows = `repeat(${girdNum}, 1fr)`;
  // get div inside sketch
  const div = `<div class="sketch__grid"></div>`;
  const divNum = girdNum * girdNum;
  for (let i = 1; i <= divNum; i++) {
    controlSketch.insertAdjacentHTML("afterbegin", div);
  }
}

function getColorValue(e) {
  colorValue = e.target.closest("#input__color").value;
  const colorText = colorControl.querySelector(".label__color");
  colorText.textContent = `Color : ${colorValue}`;
}
function getRandomColor() {
  let hel = `#`;
  for (let i = 1; i <= 6; i++) {
    const num = Math.floor(Math.random() * 10);
    hel += num;
  }
  return hel;
}
function eraserMode() {}
function clearAll() {}
