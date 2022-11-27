"use strict";

const startBtn = document.querySelector(".start");
const cells = document.querySelectorAll(".cell");

const humanPlayer = "O";
const computerPlayer = "X";
let gameBoard = undefined;
let gameStart = false;

const winArray = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

startBtn.addEventListener("click", startGame);

function startGame() {
  gameBoard = Array.from(Array(9).fill(""));
  gameStart = !gameStart;
  startBtn.innerText = gameStart ? "RESTART" : "START";
  cells.forEach((cell) => {
    if (!gameStart) {
      cell.style.backgroundColor = "blue";
      cell.innerText = "";
      cell.removeEventListener("click", turnClick);
    } else {
      cell.addEventListener("click", turnClick);
    }
  });
}

function turnClick(e) {
  const id = e.target.dataset.id;
  addMark(id, humanPlayer);
  if (checkWin(gameBoard, humanPlayer)) return;
  addMark(bestSpot(), computerPlayer);
}

function addMark(id, player) {
  if (gameBoard[id] !== "") return;
  gameBoard[id] = player;
  cells[id].innerText = player;
  const gameWin = checkWin(gameBoard, player);
  if (gameWin) {
    console.log(gameWin);
    if (gameWin.win === "win") {
      winArray[gameWin.i].forEach((elem) => {
        cells[elem].style.backgroundColor = "red";
      });
      cells.forEach((cell) => {
        cell.removeEventListener("click", turnClick);
      });
    } else if (gameWin.win === "tie") {
      cells.forEach((cell) => {
        cell.style.backgroundColor = "green";
        cell.removeEventListener("click", turnClick);
      });
    }
  }
}

function checkWin(board, player) {
  const playArr = board.reduce(
    (pre, currElem, index) => (currElem === player ? pre.concat(index) : pre),
    []
  );
  let gameWin = null;
  winArray.forEach((win, i) => {
    if (win.every((elem) => playArr.indexOf(elem) > -1)) {
      gameWin = { i, player, win: "win" };
    } else if (
      board.every((cell) => cell !== "") &&
      !win.every((elem) => playArr.indexOf(elem) > -1)
    ) {
      gameWin = { i, player, win: "tie" };
    }
  });
  return gameWin;
}

function emptyArray(board) {
  const newBoard = board
    .map((elem, i) => {
      if (elem === "") return i;
    })
    .filter((elem) => {
      return elem !== undefined;
    });
  return newBoard;
}

function bestSpot() {
  return minimax(gameBoard, computerPlayer).index;
}

function minimax(board, player) {
  const newBoard = emptyArray(board);
  if (newBoard.length === 0) {
    return { score: 0 };
  } else if (checkWin(board, player)) {
    return { score: 10 };
  } else if (checkWin(board, humanPlayer)) {
    return { score: -10 };
  }

  let moves = [];
  for (let i = 0; i < newBoard.length; i++) {
    const move = {};
    move.index = newBoard[i];
    board[newBoard[i]] = player;
    if (player === computerPlayer) {
      let result = minimax(board, humanPlayer);
      move.score = result.score;
    } else {
      let result = minimax(board, computerPlayer);
      move.score = result.score;
    }
    board[newBoard[i]] = "";
    moves.push(move);
  }

  let bestMove;
  if (player === computerPlayer) {
    let bestScore = -Infinity;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  return moves[bestMove];
}
