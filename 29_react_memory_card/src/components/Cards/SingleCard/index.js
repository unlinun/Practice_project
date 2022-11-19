import React from "react";
import "./index.css";

export default function SingleCard({ card, handleChoice, flip, cardDisable }) {
  function handleClick() {
    if (cardDisable) return;
    handleChoice(card);
  }
  return (
    <div className="main__card" data-id={card.id}>
      <div className={flip ? "flip" : ""}>
        <img src={card.src} alt="front" className="card card--front" />
        <img
          src="./images/cover.png"
          alt="cover"
          className="card card--back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
