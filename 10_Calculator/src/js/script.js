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
3. 運算否是否為 "equal" 是 跳到第十步， 否 跳到第四步
4. 是否在等待第二個數值？ 是 跳到第五步 否 跳到第六步
5. 輸入第二個數值 (curNum) (preNum = curNum)
6. 輸入第二個運算符 (operate2)
7. 運算是否為 "equal" 是 跳到第十步 否 跳到第八步
10. 顯示總和
 */

let curNum = "";
let preNum = "";
let total = 0;
let waitSec = true;

function getValue(e) {
  const key = e.target.dataset.key;
  if (!key) {
    const num = e.target.textContent;
    setNum(num);
  }
}
function setNum(num) {
  curNum += num;
  countNumber.textContent = curNum;
}
