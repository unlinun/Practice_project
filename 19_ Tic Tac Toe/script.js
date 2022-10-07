"use strict";

/////////// RENDER VIEW /////////////

const renderView = (function () {
  // DOM SELECT
  const panelCell = document.querySelectorAll(".panel__cell");
  const gamePanel = document.querySelector(".game__panel");
  const overMessage = document.querySelector(".over__message");
  const chooseContainer = document.querySelector(".choose");
  const chooseTitle = document.querySelector(".choose__title");
  const playerMark = document.querySelector(".players__mark");
  const playerImage = document.querySelector(".players__image");
  const playerName = document.querySelector(".players__name");
  const restartBtn = document.querySelector(".restart");
  const changeBtn = document.querySelector(".change");
  const startBtn = document.querySelector(".start__btn");

  let modelData;
  let viewPlayers = [{}, {}];

  // get data form control
  function renderData(data) {
    if (!data) return;
    modelData = data;
  }
  // show choose form
  function showChooseForm() {
    chooseContainer.classList.remove("hidden");
    playerMark.classList.remove("hidden");
    chooseTitle.textContent = `Choose your mark`;
  }
  // get user info
  function getUserInfo() {
    const player1 = document.querySelector('.player[data-player="0"]');
    player1.querySelector(".player__name").textContent =
      modelData.players[0].name;
    player1.querySelector(".player__mark").textContent =
      modelData.players[0].mark;
    player1.querySelector(".player__image").style.backgroundImage =
      modelData.players[0].image;

    const player2 = document.querySelector('.player[data-player="1"]');
    player2.querySelector(".player__name").textContent =
      modelData.players[1].name;
    player2.querySelector(".player__mark").textContent =
      modelData.players[1].mark;
    player2.querySelector(".player__image").style.backgroundImage =
      modelData.players[1].image;
  }
  function startGame(handler) {
    panelCell.forEach((cell) => {
      cell.addEventListener("click", function (e) {
        console.log(modelData.mark);
        const rowID = e.target.closest(".panel__row").dataset.row;
        const cell = e.target;
        const cellID = e.target.dataset.cell;
        if (cell.classList.contains("marked")) return;
        cell.textContent = modelData.mark;
        cell.classList.add("marked");
        handler(rowID, cellID);
      });
    });
  }
  function restartGame() {
    panelCell.forEach((cell) => {
      cell.textContent = "";
      cell.classList.remove("marked");
    });
    gamePanel.classList.remove("over");
    overMessage.classList.add("hidden");
    overMessage.textContent = "";
  }

  function changePlayer() {
    modelData = undefined;
    viewPlayers = [{}, {}];
    showChooseForm();
  }
  // change mark and shoe active class
  function changeMarker() {
    console.log(modelData);
    const currentPlayer = document.querySelectorAll(".player");
    currentPlayer.forEach((player) => {
      player.classList.remove("active");
    });
    modelData.players.forEach((player, i) => {
      console.log(player);
      player.playing = !player.playing;
      if (player.playing) {
        modelData.mark = player.mark;
        const currentPlayer = document.querySelector(
          `.player[data-player="${i}"]`
        );
        currentPlayer.classList.add("active");
      }
    });
  }
  // render draw and win messages
  function renderMessage(draw) {
    if (draw) {
      gamePanel.classList.add("over");
      overMessage.classList.remove("hidden");
      overMessage.textContent = `IS DRAW!`;
    }
    if (!draw) {
      const player = modelData.players.filter(
        (player) => player.mark === modelData.mark
      );
      console.log(modelData);
      gamePanel.classList.add("over");
      overMessage.classList.remove("hidden");
      overMessage.textContent = `${player[0].name} Wins!`;
    }
  }
  ///////// EVENT HANDLER /////////
  // window load event
  function addHandlerWindowLoad() {
    window.addEventListener("load", function () {
      showChooseForm();
      addHandlerChoosePlayers();
    });
  }

  // panel click
  function addHandlerPanelClick(handler) {
    startGame(handler);
  }
  function addHandlerChoosePlayers() {
    chooseContainer.addEventListener("click", function (e) {
      const mark = e.target.closest(".mark");
      const image = e.target.closest(".image");
      if (mark) {
        mark.classList.add("active");
        viewPlayers[0].mark = mark.dataset.mark;
        playerMark.classList.add("hidden");
        playerImage.classList.remove("hidden");
        chooseTitle.textContent = `Choose your image`;
      }
      if (image) {
        viewPlayers[0].image = window.getComputedStyle(image).backgroundImage;
        playerImage.classList.add("hidden");
        playerName.classList.remove("hidden");
        chooseTitle.textContent = `Enter your name`;
      }
    });
  }
  function addHandlerStart(handler) {
    startBtn.addEventListener("click", function (e) {
      viewPlayers[0].name = playerName.querySelector(".name").value;
      playerName.classList.add("hidden");
      playerName.querySelector(".name").value = "";
      chooseContainer.classList.add("hidden");
      viewPlayers[1].mark = viewPlayers[0].mark === "o" ? "x" : "o";
      viewPlayers[1].name = "computer";
      viewPlayers[1].image = "url(./image/computer-01.svg)";
      handler(viewPlayers);
    });
  }
  function addHandlerRestart(handler) {
    restartBtn.addEventListener("click", function (e) {
      restartGame();
      handler();
    });
  }
  function addHandlerChange(handler) {
    changeBtn.addEventListener("click", function () {
      restartGame();
      changePlayer();
      handler();
    });
  }

  return {
    modelData,
    renderData,
    getUserInfo,
    changeMarker,
    renderMessage,
    addHandlerStart,
    addHandlerRestart,
    addHandlerChange,
    addHandlerPanelClick,
    addHandlerWindowLoad,
  };
})();

//////////// GAME START MODULE ///////////
const gameStart = (function () {
  const state = {
    players: [],
    mark: "",
  };

  const rows = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  // CREATE Person
  function Person(name, mark, image, playing = false) {
    return {
      name,
      mark,
      image,
      playing,
    };
  }

  function getNewUser(players) {
    state.players = [];
    const one = players[0];
    const two = players[1];
    const person1 = Person(one.name, one.mark, one.image, false);
    const person2 = Person(two.name, two.mark, two.image, true);
    state.players.push(person1);
    state.players.push(person2);
    state.players.forEach((player) => {
      if (player.playing === true) {
        state.mark = player.mark;
      }
    });
    return state;
  }

  function reStartGame() {
    rows.splice(0, 3, ["", "", ""], ["", "", ""], ["", "", ""]);
  }
  function changePlayer() {
    state.players = [];
    state.mark = "";
  }

  function setRow(row, cell) {
    rows[row][cell] = gameStart.state.mark;
    console.log(rows);
    return state;
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
    return rows.every((row) => {
      return row.every((cell) => {
        return cell !== "";
      });
    });
  }
  return {
    state,
    setRow,
    getNewUser,
    reStartGame,
    changePlayer,
    checkDraw,
    checkWin,
  };
})();

///////// CONTROL //////
function controlPlayingUsers(viewPlayers) {
  const data = gameStart.getNewUser(viewPlayers);
  renderView.renderData(data);
  renderView.getUserInfo();
}
function controlGameStart(row, cell) {
  renderView.renderData(gameStart.state);
  gameStart.setRow(row, cell);
  if (gameStart.checkWin()) {
    renderView.renderMessage(false);
  } else if (gameStart.checkDraw()) {
    renderView.renderMessage(true);
  } else {
    renderView.changeMarker();
  }
}
function controlReStart() {
  gameStart.reStartGame();
}
function controlChangePlayer() {
  gameStart.reStartGame();
  gameStart.changePlayer();
}

function init() {
  renderView.addHandlerWindowLoad();
  renderView.addHandlerStart(controlPlayingUsers);
  renderView.addHandlerPanelClick(controlGameStart);
  renderView.addHandlerRestart(controlReStart);
  renderView.addHandlerChange(controlChangePlayer);
}
init();
