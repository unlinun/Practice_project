"use strict";

// DOM select
const checkBox = document.querySelectorAll('.todo_item input[type="checkbox"]');
console.log(checkBox);
// window.addEventListener("keydown", selected);

checkBox.forEach((box) => {
  box.addEventListener("click", handleCheck);
});

let lastCheck;
function handleCheck(e) {
  console.log(e);
  let inBetween = false;
  // check if they had shift key down
  // and check they are checking it
  if (e.shiftKey && this.checked) {
    //loop over every checkBox
    checkBox.forEach((box) => {
      console.log(box);
      if (box === this || box === lastCheck) {
        inBetween = !inBetween;
        console.log(`start check`);
      }
      if (inBetween && lastCheck !== undefined) {
        console.log(lastCheck);
        box.checked = true;
      }
    });
  }

  lastCheck = this;
}
