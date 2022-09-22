const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const format = document.querySelectorAll(".deadline-format h4");

const futureTime = new Date(2022, 8, 30, 17, 11, 30, 0);
const futureKey = futureTime.getTime();
const future = {
  year: futureTime.getFullYear(),
  months: months[futureTime.getMonth()],
  date: futureTime.getDate(),
  day: weekdays[futureTime.getDay()],
  hour: futureTime.getHours(),
  minute: futureTime.getMinutes(),
};
window.addEventListener("load", function () {
  giveaway.textContent = `giveaway ends on ${future.day} ${future.months} ${future.year} ${future.date} ${future.hour}:${future.minute}pm`;
});

function countTime() {
  // get today
  const currentTime = new Date();
  const currentKey = currentTime.getTime();
  // count future and today's time
  const time = futureKey - currentKey;
  const oneDay = 1000 * 60 * 60 * 24;
  const oneHours = 1000 * 60 * 60;
  const oneMins = 1000 * 60;

  const day = Math.floor(time / oneDay);
  const hours = Math.floor((time % oneDay) / oneHours);
  const minutes = Math.floor((time % oneHours) / oneMins);
  const sec = Math.floor((time % oneMins) / 1000);

  if (time < 0) {
    clearInterval(countdown);
    return [0, 0, 0, 0];
  }

  return [day, hours, minutes, sec];
}

// if time < 10 => format time to 01.02...09
function formatItem(item) {
  if (item < 10) {
    return `0${item}`;
  } else {
    return item;
  }
}

// get time evert 1sec
function getTime() {
  let times = countTime();
  // countDown();
  format.forEach((item, i) => {
    item.textContent = formatItem(times[i]);
  });
}

let countdown = setInterval(getTime, 1000);

getTime();
