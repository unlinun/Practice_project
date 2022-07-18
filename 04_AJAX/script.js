"use strict";

// countries API
// https://restcountries.com/v2/

// const getCountry = function (data) {
//   let html = `
//   <div class="container">
//   <div class="pic">
//     <img src="${data.flag}" alt="${data.name}" width="200" />
//   </div>
//   <div class="information">
//     <span>NAME: ${data.name}</span>
//     <span>👥 : ${data.region}</span>
//     <span>🗣 : ${+data.population / 10000}</span>
//   </div>`;
//   const body = document.querySelector("body");
//   body.insertAdjacentHTML("beforeend", html);
// };

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

// const getPromise = function (url, error = " ") {
//   //注意！要 return 整個 promise !
//   return fetch(url).then((response) => {
//     if (!response.ok) {
//       throw new Error(` OOPS! something when wrong. ${error}`);
//     }
//     return response.json();
//   });
// };

// const getResponse = function (country) {
//   getPromise(
//     `https://restcountries.com/v2/name/${country}`,
//     `country not found!`
//   ).then((data) => {
//     const [country] = data;
//     getCountry(country);
//   });
// };

///////////////////////
//coding challenge using reverse-geocode API !

// const geolocation = function () {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = function (url) {
//   return fetch(url).then((response) => {
//     if (!response.ok) {
//       throw new Error(`can't get coords`);
//     }
//     console.log(response);
//     return response.json();
//   });
// };

// const getData = function () {
//   geolocation()
//     .then((pos) => {
//       const lat = pos.coords.latitude;
//       const lng = pos.coords.longitude;
//       console.log(lat, lng);
//       return whereAmI(
//         `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
//       );
//     })
//     .then((data) => {
//       console.log(data);
//       const where = data;
//       console.log(`You are in ${where.countryName}`);
//       return where.countryName;
//     })
//     .then((data) => getResponse(data))
//     .catch((err) => console.error(`you got an ${err}!`));
// };

// const getBtn = document.querySelector(".get-location");
// getBtn.addEventListener("click", getData);

//////// set new promise

// const lotteryPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve(`You win!👾`);
//     } else {
//       reject(new Error(`You Lose....😭`));
//     }
//   }, 1000);
// });

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(` lose! ${err}`));

// ///////// set timeout wit promise
const wait = function (second) {
  return new Promise((resolve) => setTimeout(resolve, second * 1000));
};

// wait(1).then(() => console.log(`1 sec`));

//////// after 2 sec

// const time = (second) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, second * 1000);
//   });
// };

// time(1)
//   .then(() => {
//     console.log(`I wait 1 sec`);
//     return time(2);
//   })
//   .then(() => {
//     console.log(`I wait 2 sec`);
//     return time(3);
//   })
//   .then(() => console.log(`I wait 3 sec`));

// Promise.resolve(`hello`).then((res) => console.log(`${res} world`));

////////////create img promise challenge
const img = document.querySelector(".img");

const getImgURL = function (url) {
  return new Promise((resolve, reject) => {
    const image = document.createElement("img");
    image.src = url;
    image.addEventListener("load", function () {
      img.style.backgroundImage = `url('${url}')`;
      resolve(img);
    });
    img.addEventListener("error", function () {
      reject(new Error(`can;t get img`));
    });
  });
};

getImgURL("img-04.png")
  .then(() => {
    console.log(`ing 1 22`);
    return wait(3);
  })
  .then(() => {
    img.classList.add("hidden");
    return getImgURL("img-07.png");
  })
  .then(() => {
    img.classList.remove("hidden");
    return wait(3);
  })
  .then(() => {
    img.classList.add("hidden");
  })
  .catch((err) => console.error(err));
