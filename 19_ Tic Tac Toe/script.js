"use strict";
// DOM SELECT
const panelCell = document.querySelectorAll(".panel__cell");
const gamePanel = document.querySelector(".game__panel");
const overMessage = document.querySelector(".over__message");
const chooseContainer = document.querySelector(".choose");
const chooseTitle = document.querySelector(".choose__title");
const playerNumber = document.querySelector(".players__number");
const playerMark = document.querySelector(".players__mark");
const playerImage = document.querySelector(".players__image");
const playerName = document.querySelector(".players__name");

const restartBtn = document.querySelector(".restart");

const gameStart = (function () {
  const players = [];
  const rows = [];
  const state = {
    players: [],
    step: 0,
    mark: "",
  };

  // CREATE Person
  function Person(name, mark, image, playing = false) {
    return {
      name,
      mark,
      image,
      playing,
    };
  }

  function showChooseForm() {
    let info = {};
    chooseContainer.classList.remove("hidden");
    playerNumber.classList.remove("hidden");
    chooseContainer.addEventListener("click", function (e) {
      const number = e.target.closest(".number");
      const mark = e.target.closest(".mark");
      const image = e.target.closest(".image");
      const startBtn = e.target.closest(".start__btn");
      if (number) {
        info.number = number.dataset.num;
        playerNumber.classList.add("hidden");
        playerMark.classList.remove("hidden");
      }
      if (mark) {
        info.mark = mark.dataset.mark;
        playerMark.classList.add("hidden");
        playerImage.classList.remove("hidden");
      }
      if (image) {
        const url = window.getComputedStyle(image).backgroundImage;
        info.url = url;
        // playArr.push(url);
        playerImage.classList.add("hidden");
        playerName.classList.remove("hidden");
      }
      if (startBtn) {
        const name = playerName.querySelector(".name").value;
        info.name = name;
        chooseContainer.classList.add("hidden");
      }
      if (!info.name || !info.mark || !info.url) return;
      const player = Person(info.name, "o", info.url, true);
      players.push(player);
      if (+info.number === 1) {
        const computer = Person(
          "computer",
          "x",
          "  url(./image/computer-01.svg)",
          false
        );
        players.push(computer);
      }
      startGame();
    });
  }

  function startGame() {
    getUserInfo();
    changeMarker();
    // 使用 {once : true } 讓點擊的事件只能發生一次
    panelCell.forEach((cell) => {
      cell.addEventListener("click", gameStart.addMark, { once: true });
    });
    rows.splice(0, 3, ["", "", ""], ["", "", ""], ["", "", ""]);
    gamePanel.classList.remove("over");
    overMessage.classList.add("hidden");
    overMessage.textContent = "";
    panelCell.forEach((cell) => {
      cell.textContent = "";
      cell.classList.remove("marked");
    });
  }
  // GET USER INFO
  function getUserInfo() {
    const player1 = document.querySelector('.player[data-player="0"]');
    player1.querySelector(".player__name").textContent = players[0].name;
    player1.querySelector(".player__mark").textContent = players[0].mark;
    player1.querySelector(".player__image").style.backgroundImage =
      players[0].image;

    const player2 = document.querySelector('.player[data-player="1"]');
    player2.querySelector(".player__name").textContent = players[1].name;
    player2.querySelector(".player__mark").textContent = players[1].mark;
    player2.querySelector(".player__image").style.backgroundImage =
      players[1].image;
  }
  // ADD MARK
  function addMark(e) {
    const rowID = e.target.closest(".panel__row").dataset.row;
    const cell = e.target;
    const cellID = e.target.dataset.cell;
    cell.textContent = state.mark;
    cell.classList.add("marked");
    rows[rowID][cellID] = state.mark;
    if (checkWin()) {
      renderMessage(false);
    } else if (checkDraw()) {
      renderMessage(true);
    } else {
      changeMarker();
    }
  }
  // CHANGE MARK AND ACTIVE CLASS
  function changeMarker() {
    const currentPlayer = document.querySelectorAll(".player");
    currentPlayer.forEach((player) => {
      player.classList.remove("active");
    });
    players.forEach((player, i) => {
      player.playing = !player.playing;
      if (player.playing) {
        gameStart.state.mark = player.mark;
        const currentPlayer = document.querySelector(
          `.player[data-player="${i}"]`
        );
        currentPlayer.classList.add("active");
      }
    });
  }
  /////////  CHECK IS WIN OR NOT //////////
  function checkWin() {
    // row check
    const rowCheck = rows.some((row) => {
      return row.every((cell) => {
        return cell === state.mark;
      });
    });
    // col check
    const colCheck = rows.some((row, i) => {
      const colArray = rows.map((row) => row[i]);
      return colArray.every((col) => col === state.mark);
    });
    //cross check
    const crossCheck = rows.some((row, i) => {
      const slash = rows.map((row, i) => {
        return row[i];
      });
      const backSlash = rows.map((row, i) => {
        return row[-i * 2 + i + 2];
      });
      return (
        slash.every((cell) => cell === state.mark) ||
        backSlash.every((cell) => cell === state.mark)
      );
    });
    if (rowCheck || colCheck || crossCheck) {
      return true;
    }
  }
  // CHECK IF DRAW
  function checkDraw() {
    return [...panelCell].every((cell) => {
      return cell.classList.contains("marked");
    });
  }
  // RENDER DRAW OR WIN MESSAGE
  function renderMessage(draw) {
    if (draw) {
      gamePanel.classList.add("over");
      overMessage.classList.remove("hidden");
      overMessage.textContent = `IS DRAW!`;
    }
    if (!draw) {
      const player = players.filter((player) => player.mark === state.mark);
      gamePanel.classList.add("over");
      overMessage.classList.remove("hidden");
      overMessage.textContent = `${player[0].name} Wins!`;
    }
  }
  return {
    state,
    rows,
    showChooseForm,
    startGame,
    checkWin,
    changeMarker,
    addMark,
  };
})();

window.addEventListener("load", gameStart.showChooseForm);
restartBtn.addEventListener("click", gameStart.startGame);
