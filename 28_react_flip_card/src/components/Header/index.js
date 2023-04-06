import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Card from "../Card";
import Score from "../Score";
import Start from "../Start";
import "./index.css";

export default function Header() {
  // 1. 當程式載入時，顯示最高分: 0, 當前得分: 0, 遊戲開始: false, 遊戲結束: true, level: null, 卡片列表: [], 選擇的卡片數: 0, 當前選擇的卡片: ""
  const [highScore, setHighest] = useState(0);
  const [yourScore, setYours] = useState(0);
  const [gameStart, setStart] = useState(false);
  const [level, setLevel] = useState();
  const [cardList, setCardList] = useState([]);
  const [clickedCard, setClickedCard] = useState([]);
  const [clickNum, setClickNum] = useState(0);

  // 2. 當玩家選擇 selector 中的 level (onChange) ，並按下 start 按鈕時，會觸發 onClick 的事件
  function handleStart() {
    // 如果玩家沒有選擇 level 則 gameStart 為 true
    setStart(!level ? false : !gameStart);
    setCardList(() => {
      if (level) return randomCardList(level);
      else return [];
    });
    setYours(0);
    setLevel();
  }
  function handleLevel(e) {
    setLevel(+e.target.value);
  }

  function getRandomIndex(length) {
    return Math.floor(Math.random() * length + 1);
  }
  function randomCardList(num) {
    const cardArr = [];
    do {
      // Generating random number
      const randomNumber = getRandomIndex(52);
      // Pushing into the array only
      // if the array does not contain it
      if (!cardArr.includes(randomNumber)) {
        cardArr.push({
          id: nanoid(),
          img: `./images/card-${
            randomNumber >= 10 ? randomNumber : `0${randomNumber}`
          }.png`,
        });
      }
    } while (cardArr.length < num);
    return cardArr;
  }

  function newRenderCardLIst(preCardList) {
    const preArr = [...preCardList];
    let newArr = [];
    for (let i = 0; i < preCardList.length; i++) {
      const random = getRandomIndex(preArr.length) - 1;
      newArr.push(preArr[random]);
      preArr.splice(random, 1);
    }
    return newArr;
  }

  function handleCardClick(id) {
    // 如果沒點擊過則將點擊次數加一
    setClickNum((clickNum) => clickNum + 1);
    // 確認點擊過的卡片列表中是否包含 id
    const isSameId = clickedCard.includes(id);
    // const isSameLength = clickNum === cardList.length ? true : false;
    if (!isSameId && clickNum <= cardList.length) {
      setGameContinue(id);
    } else if (isSameId || clickNum === cardList.length) {
      alert("over");
      setGameOver();
    }
  }

  function setGameContinue(id) {
    console.log(yourScore);
    // 如果沒有點擊過則加一分
    setYours((yourScore) => yourScore + 1);
    //將點擊的卡片與以選擇卡片做比較，如果有，則存在選擇卡片列表中
    setClickedCard((clickedCard) => {
      const arr = [...clickedCard];
      arr.push(id);
      return arr;
    });
    //隨機產生新的卡片列表
    setCardList((cardList) => {
      return newRenderCardLIst(cardList);
    });
  }

  function setGameOver() {
    console.log(yourScore);
    // 遊戲結束返回預設
    setStart(false);
    setClickNum(1);
    setHighest((highScore) => {
      if (yourScore > highScore) return yourScore;
      else return highScore;
    });
    setYours(0);
    setClickedCard([]);
    setCardList([]);
  }

  return (
    <>
      <header className="header">
        <div className="header__title title--big">Memory Card</div>
        <Score highScore={highScore} yourScore={yourScore} />
        <Start
          gameStart={gameStart}
          handleStart={handleStart}
          handleLevel={handleLevel}
        />
      </header>
      <Card cardList={cardList} handleCardClick={handleCardClick} />
    </>
  );
}
