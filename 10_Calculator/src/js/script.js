"use strict";

console.log("hello");

// DOM select

const countNumber = document.querySelector(".count__number");
const countKey = document.querySelector(".count__key");
const calcKey = document.querySelectorAll(".calc__key");

calcKey.forEach((key) => key.addEventListener("click", getValue));

// 計算機
/*
1. 輸入第一個數值 (curNum)
2. 輸入第一個運算符 (operate)
3. 運算否是否為 "equal" 
4. 是否在等待第二個數值？
5. 輸入第二個數值 (curNum) (preNum = curNum)
6. 輸入第二個運算符 (key)
7. 運算是否為 "equal"
 */
let curNum = "";
let preNum = "";
let operate = undefined;
let total = 0;

function getValue(e) {
  //  將第一個數值傳入 curNum
  const key = e.target.dataset.key;
  // 如果沒有 key, 則傳入第一個數值
  if (!key) {
    // 如果已經有了小數點，則直接回傳
    if (curNum.includes(".") && e.target.innerText === ".") return;
    // 如果輸入的數字長度小於 22 則可以繼續輸入，否則回傳
    if (curNum.length < 22) {
      curNum += e.target.innerText;
      countNumber.innerText = curNum;
      // console.log(curNum);
    }
  }
  //  設定刪除鍵
  if (key === "del" && curNum.length > 0) {
    curNum = curNum.slice(0, -1);
    countNumber.innerText = curNum;
    console.log(curNum);
  }
  //   如果按鍵不是 del ，且按鍵帶有 key ，且 preNum 還是 空字串的話，則將 curNum 變為 preNum，這裡是作為輸入第一個數值的地方，然後再將 curNum，變為空值，這樣才能新增第二個要做運算的數字
  if (key !== "del" && key && preNum === "") {
    preNum = curNum;
    curNum = "";
    // 將 key 變為運算符
    operate = key;
    countKey.innerText = operate;
  } //   首先判斷是否具有 key 的 data，operate 是否為 true，preNum 是否不為空，key 是否不是 del
  else if (key && operate && preNum !== "" && key !== "del") {
    //   要判斷的是運算符(operate)，而不是key，因為 operate 是第一次輸入的運算符，要用這個來做運算。運算完後，再將新的 key 賦予給 operate
    if (operate === "+") {
      total = +preNum + +curNum;
      preNum = +total;
      curNum = "";
    }
    if (operate === "-") {
      total = +preNum - +curNum;
      preNum = +total;
      curNum = "";
    }
    if (operate === "x") {
      total = +preNum * +curNum;
      preNum = +total;
      curNum = "";
    }
    if (operate === "/") {
      total = +preNum / +curNum;
      preNum = +total;
      curNum = "";
    }
    operate = key;
    countNumber.innerText = total;
    countKey.innerText = operate;
  }

  //   如果 key 是 reset ，則重置
  if (key === "reset") {
    curNum = "";
    preNum = "";
    operate = undefined;
    total = 0;
    countNumber.innerText = 0;
    countKey.innerText = "";
  }
  if (key === "equal") {
    countKey.innerText = "=";
  }
  console.log("curNum : " + curNum);
  console.log("operate : " + operate);
  console.log("preNum : " + preNum);
  console.log("total : " + total);
}

// THEME
// DOM

const html = document.querySelector("html");
const themeToggle = document.querySelectorAll('input[type="radio"]');
console.log(themeToggle);

// setting default theme
let defaultTheme = window.matchMedia(`(prefers-color-scheme: light)`).matches
  ? "light"
  : "dark";
//   when windows load => set default theme
window.addEventListener("load", setDefaultTheme);
themeToggle.forEach((toggle) => toggle.addEventListener("click", setTheme));

// 1. set default theme
function setDefaultTheme() {
  themeToggle.forEach((toggle) => {
    if (toggle.id === defaultTheme) {
      toggle.setAttribute("checked", "");
    }
  });
  html.setAttribute("data-theme", defaultTheme);
}

// 2. if user changed their theme them switch theme color
function setTheme(e) {
  const radio = e.target;
  e.target.setAttribute("checked", "");
  console.log(e.target);
  html.removeAttribute("data-theme");
  html.setAttribute("data-theme", radio.id);
}
