"use strict";

// DOM select
const html = document.querySelector("html");
const input = document.querySelectorAll(`input[type="radio"]`);
const main = document.querySelector(".main");
const section = main.querySelectorAll("section");
console.log(section);

// BTN
const switcher = document.querySelector(".toggle__switcher");

// DATA
const medias = [
  {
    media: "facebook",
    username: "@nathan",
    follower: 1987,
    newer: 20,
  },
  {
    media: "twitter",
    username: "@nathan",
    follower: 1044,
    newer: 99,
  },
  {
    media: "instagram",
    username: "@realnathanf",
    follower: "11k",
    newer: 1099,
  },
  {
    media: "youtube",
    username: "Nathan F.",
    follower: 8239,
    newer: -144,
  },
];
// load page set default theme
// default theme ,  !!! USE matches !!!
let defaultTheme = window.matchMedia(`(prefers-color-scheme: light)`).matches
  ? "light"
  : "dark";

let newTheme;

// add cards div
medias.forEach((m) => {
  console.log(m);
  const upDown = m.newer > 0 ? "up" : "down";
  const html = ` 
    <div class="card card--border" data-media="${m.media}">
        <div class="card__platform">
            <div class="card__icon card__icon--${m.media}"></div>
            <div class="card__username">${m.username}</div>
        </div>
        <div class="card__followers">
            <div class="card__count card__count--big">${m.follower}</div>
            <div class="card__label">Followers</div>
        </div>
        <div class="card__change card__change--${upDown}">
            <img src="assets/images/icon-${upDown}.svg" alt="icon-${upDown}" />
            <p class="card__number">${m.newer} Today</p>
        </div>
    </div>`;
  section[0].insertAdjacentHTML("beforeend", html);
});

// load event
window.addEventListener("load", getTheme);
// click event
input.forEach((i) => i.addEventListener("click", changeTheme));

function getTheme(e) {
  html.setAttribute("data-theme", defaultTheme);
  console.log(html);
}

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
