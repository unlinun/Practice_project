import React, { useEffect, useState } from "react";
import Panel from "./components/Panel";
import Header from "./components/Header";
import Cards from "./components/Cards";
import { nanoid } from "nanoid";
import "./App.css";
import Info from "./components/Info";

export default function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [level, setLevel] = useState(null);
  const [gameStart, setGameStart] = useState(false);
  const [gameAlert, setGameAlert] = useState(false);

  const [cards, setCards] = useState([]);
  const [cardOne, setCardOne] = useState(null);
  const [cardTwo, setCardTwo] = useState(null);
  const [cardDisable, setCardDisable] = useState(false);

  function handleStart(e) {
    e.preventDefault();
    if (level) {
      setGameStart((gameStart) => !gameStart);
    }
  }

  function handleLevel(e) {
    if (e.target.value !== "null") {
      setLevel(e.target.value);
    }
  }

  function handleGameAlert() {
    setGameAlert(false);
  }
  function getRandomArr() {
    const array = [];
    do {
      if (level) {
        const random = Math.floor((Math.random() * level) / 2 + 1);
        if (!array.includes(random)) {
          array.push(random);
        }
      }
    } while (array.length < level / 2);
    return array;
  }

  function shuffleCards() {
    const array = getRandomArr();
    const doubleArray = [...array, ...array];
    const shuffleArray = doubleArray
      .sort(() => Math.floor(Math.random() - 0.5))
      .map((item) => {
        return {
          id: nanoid(),
          src: `./images/person-${item}.png`,
          marked: false,
        };
      });
    return shuffleArray;
  }

  useEffect(() => {
    if (gameStart) {
      setCards(shuffleCards());
    }
    if (!gameStart) {
      initGame();
    }
  }, [gameStart]);

  function handleChoice(card) {
    cardOne ? setCardTwo(card) : setCardOne(card);
  }

  function initGame() {
    setGameStart(false);
    setCurrentScore(0);
    setCards([]);
    setLevel(null);
  }

  function resetCard() {
    setCardOne(null);
    setCardTwo(null);
    setCardDisable(false);
  }

  useEffect(() => {
    if (cardOne && cardTwo) {
      setCardDisable(true);
      setCurrentScore((currentScore) => currentScore + 1);
      if (cardOne.src === cardTwo.src) {
        const cardsArr = cards.map((card) => {
          if (card.src === cardOne.src) {
            return { ...card, marked: true };
          } else {
            return card;
          }
        });
        setCards(cardsArr);
        resetCard();
      } else {
        setTimeout(() => {
          resetCard();
        }, 1000);
      }
    }
  }, [cardOne, cardTwo]);

  useEffect(() => {
    if (gameStart) {
      const marked = cards.every((card) => card.marked !== false);
      if (marked) {
        setBestScore((bestScore) =>
          bestScore === 0
            ? currentScore
            : bestScore < currentScore
            ? bestScore
            : currentScore
        );
        setTimeout(() => {
          setGameAlert(true);
        }, 1000);
      }
    }
  }, [cards]);
  return (
    <>
      <Header />
      <Panel
        level={level}
        gameStart={gameStart}
        handleStart={handleStart}
        handleLevel={handleLevel}
        currentScore={currentScore}
        bestScore={bestScore}
      />
      <Cards
        gameStart={gameStart}
        cards={cards}
        handleChoice={handleChoice}
        cardOne={cardOne}
        cardTwo={cardTwo}
        cardDisable={cardDisable}
        currentScore={currentScore}
      />
      <Info
        gameAlert={gameAlert}
        handleStart={handleStart}
        handleGameAlert={handleGameAlert}
        currentScore={currentScore}
      />
    </>
  );
}
