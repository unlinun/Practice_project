// get API URL & KEY
const API_KEY = `de78158621cd8a7c439a2a22c04476db`;
const URL = `https://api.openweathermap.org/data/2.5/weather?`;

const rangeHigh = document.querySelector(".range__high");
const formatBtn = document.querySelector("#format__btn");
const inputSearch = document.querySelector("#search");
const searchBtn = document.querySelector("#search__btn");
const weatherCity = document.querySelector(".weather__city");
const currentTime = document.querySelector(".weather__time");
const weatherWeather = document.querySelector(".weather__weather");
const weatherTemp = document.querySelector(".weather__temperature");
const weatherFormat = document.querySelectorAll(".weather__format");
const tempMax = document.querySelector(".range__high");
const tempLow = document.querySelector(".range__low");
const weatherFeel = document.querySelector(".weather__feel");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const press = document.querySelector("#press");

const state = {};
const getData = async function (lat, lon) {
  try {
    const res = await fetch(`${URL}lat=${lat}&lon=${lon}&appid=${API_KEY}`);

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(`No data! Api fail :${err}`);
  }
};

const getSearchData = async function (value) {
  try {
    const res = await fetch(`${URL}q=${value}&appid=${API_KEY}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(`No data! Api fail :${err}`);
  }
};

const getCurrentPosition = function () {
  return navigator.geolocation.getCurrentPosition(success, error);
};

const success = async function (position) {
  try {
    const { latitude, longitude } = position.coords;
    const data = await getData(latitude, longitude);
    if (!data) throw Error(`not data`);
    console.log(data);
    const weatherObj = WeatherObj(data);
    state.weather = weatherObj;
    setUIData(state.weather);

    console.log(state.weather);
  } catch (err) {
    console.log(err);
  }
};
const error = function (err) {
  console.log(`can not get current position : ${err}`);
};

const WeatherObj = function (data) {
  const changTempToC = function (temp) {
    return Math.round(temp - 273.15);
  };

  const time = new Date();
  const currentTime = `${time.getFullYear()}-${
    time.getMonth() + 1
  }-${time.getDate()} ${time.getHours()}:${time.getMinutes()}`;
  const city = data.name;
  const weather = data.weather[0].main;
  const temp = changTempToC(data.main.temp);
  const tempHigh = changTempToC(data.main.temp_max);
  const tempMin = changTempToC(data.main.temp_min);
  const bodyFeel = changTempToC(data.main.feels_like);
  const humidity = data.main.humidity;
  const wind = data.wind.speed;
  const pressure = data.main.pressure;
  const format = formatBtn.value;

  return {
    currentTime,
    city,
    weather,
    temp,
    tempHigh,
    tempMin,
    bodyFeel,
    humidity,
    wind,
    pressure,
    format,
  };
};

const setUIData = function (data) {
  weatherCity.textContent = data.city;
  currentTime.textContent = data.currentTime;
  weatherWeather.textContent = data.weather;
  weatherTemp.firstChild.textContent = data.temp;
  tempMax.firstChild.textContent = data.tempHigh;
  tempLow.firstChild.textContent = data.tempMin;
  weatherFeel.firstChild.textContent = `body feel ${data.bodyFeel}`;
  humidity.textContent = data.humidity;
  wind.textContent = data.wind;
  press.textContent = data.pressure;
  weatherFormat.forEach((format) => {
    format.textContent = `°${data.format}`;
  });
};

const changeToC = function (temp) {
  const tem = Math.round(((temp - 32) * 5) / 9);
  console.log(tem);
  return tem;
};
const changeToF = function (temp) {
  const tem = Math.round(temp * 1.8 + 32);
  console.log(tem);
  return tem;
};

const changeTemp = function (e) {
  console.log(e.target.value === "C");
  if (e.target.value === "C") {
    e.target.value = "F";
    state.weather.format = "F";
    state.weather.temp = changeToF(state.weather.temp);
    state.weather.tempHigh = changeToF(state.weather.tempHigh);
    state.weather.tempMin = changeToF(state.weather.tempMin);
    state.weather.bodyFeel = changeToF(state.weather.bodyFeel);
    setUIData(state.weather);
    console.log(state);
  } else if (e.target.value === "F") {
    e.target.value = "C";
    state.weather.format = "C";
    state.weather.temp = changeToC(state.weather.temp);
    state.weather.tempHigh = changeToC(state.weather.tempHigh);
    state.weather.tempMin = changeToC(state.weather.tempMin);
    state.weather.bodyFeel = changeToC(state.weather.bodyFeel);
    setUIData(state.weather);
    setUIData(state.weather);
    console.log(state);
  }
};

const setSearchUI = async function (e) {
  try {
    const value = inputSearch.value;
    const data = await getSearchData(value);
    const weatherObj = WeatherObj(data);
    console.log(weatherObj);
    state.weather = weatherObj;
    setUIData(state.weather);
    inputSearch.value = "";
  } catch (err) {
    alert(`No data found :${err}`);
  }
};

window.addEventListener("load", getCurrentPosition);
formatBtn.addEventListener("click", changeTemp);
searchBtn.addEventListener("click", setSearchUI);
