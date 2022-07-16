"use strict";

// countries API
// https://restcountries.com/v2/

const getCountry = function (data) {
  let html = `
  <div class="container">
  <div class="pic">
    <img src="${data.flag}" alt="${data.name}" width="200" />
  </div>
  <div class="information">
    <span>NAME: ${data.name}</span>
    <span>👥 : ${data.region}</span>
    <span>🗣 : ${+data.population / 10000}</span>
  </div>`;
  const body = document.querySelector("body");
  body.insertAdjacentHTML("beforeend", html);
};

// const loadCountries = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   console.log(request);

//   request.addEventListener("load", function () {
//     console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     getCountry(data);
//     const nei = data.borders?.[0];
//     const request = new XMLHttpRequest();
//     request.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
//     request.send();
//     console.log(request);
//     request.addEventListener("load", function () {
//       const data = JSON.parse(this.responseText);
//       getCountry(data);
//     });
//   });
// };

// loadCountries("usa");

const getPromise = function (url, error = " ") {
  //注意！要 return 整個 promise !
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(` OOPS! something when wrong. ${error}`);
    }
    return response.json();
  });
};

const getResponse = function (country) {
  getPromise(
    `https://restcountries.com/v2/name/${country}`,
    `country not found!`
  ).then((data) => {
    console.log(data);
    const [country] = data;
    getCountry(country);
  });
};
getResponse("usa");
