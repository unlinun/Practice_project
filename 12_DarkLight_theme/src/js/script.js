"use strict";

// DOM select
const html = document.querySelector("html");
const input = document.querySelectorAll(`input[type="radio"]`);

// btn
const switcher = document.querySelector(".toggle__switcher");
console.log(window.matchMedia(`(prefers-color-scheme: light)`));
// load page set default theme

// default theme ,  !!! USE matches !!!
let defaultTheme = window.matchMedia(`(prefers-color-scheme: light)`).matches
  ? "light"
  : "dark";
console.log(defaultTheme);
// load event
window.addEventListener("load", getTheme);
function getTheme(e) {
  html.setAttribute("data-theme", defaultTheme);
  console.log(html);
}

let newTheme;
input.forEach((i) => i.addEventListener("click", changeTheme));
function changeTheme(e) {
  newTheme = e.target.id;
  console.log(newTheme);
  if (newTheme == "default") {
    html.setAttribute("data-theme", defaultTheme);
  } else {
    html.removeAttribute("data-theme");
    html.setAttribute("data-theme", newTheme);
  }
}
