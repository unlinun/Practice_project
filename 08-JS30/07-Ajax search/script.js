"use strict";

const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];
const dataSet = fetch(endpoint)
  .then((res) => res.json())
  .then((data) => cities.push(...data));

console.log(cities);

function findMatch(wordToMatch, cities) {
  return cities.filter((place) => {
    // 這邊要尋找輸入的字跟 city 是符合的
    // 使用 regular expression
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function showMatch(e) {
  if (!searchInput.value || searchInput.value === "") return;
  const matchInput = findMatch(e.target.value, cities);

  // highlight 相同的城市名或州名
  const regex = new RegExp(this.value, "gi");

  const html = matchInput
    .map((place) => {
      const cityName = place.city.replace(
        regex,
        `<span class="hl"> ${this.value} </span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl"> ${this.value} </span>`
      );
      return `
    <li>
    <span class=''name>${cityName},${stateName} </span>
    <span class=''name>${place.population} </span>
    </li>
    `;
    })
    .join("");
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector("#search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", showMatch);
searchInput.addEventListener("keyup", showMatch);
