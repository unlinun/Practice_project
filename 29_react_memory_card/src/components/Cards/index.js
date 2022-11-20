import React from "react";
import SingleCard from "./SingleCard";
import "./index.css";

export default function Cards({
  cards,
  gameStart,
  handleChoice,
  currentScore,
  cardOne,
  cardTwo,
  cardDisable,
}) {
  return (
    <main className="main" id="main">
      <div className="main__cards">
        {gameStart ? (
          cards.map((card) => {
            return (
              <SingleCard
                key={card.id}
                card={card}
                handleChoice={handleChoice}
                flip={card.marked || card === cardOne || card === cardTwo}
                cardDisable={cardDisable}
              />
            );
          })
        ) : (
          <div className="main__alert">Choose level to start game</div>
        )}
      </div>
    </main>
  );
}
