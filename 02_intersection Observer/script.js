"use strict";
const header = document.querySelector("header");
const box = document.querySelectorAll(".box");
console.log(header);
const callBox = function (entry) {
  if (!entry.isIntersecting) {
    box.forEach((b) => b.classList.toggle("box-effect"));
  }
};

const headerObserver = new IntersectionObserver(callBox, {
  root: null,
  threshold: 1,
});

headerObserver.observe(header);
