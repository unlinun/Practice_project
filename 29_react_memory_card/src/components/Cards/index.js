import React from "react";
import SingleCard from "./SingleCard";
import "./index.css";

export default function Cards({
  cards,
  handleChoice,
  cardOne,
  cardTwo,
  cardDisable,
}) {
  return (
    <main className="main" id="main">
      <div className="main__cards">
        {cards.map((card) => {
          return (
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flip={card.marked || card === cardOne || card === cardTwo}
              cardDisable={cardDisable}
            />
          );
        })}
      </div>
    </main>
  );
}
