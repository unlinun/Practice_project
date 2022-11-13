import React from "react";
import "./index.css";
export default function Card(props) {
  const { cardList, handleCardClick } = props;
  return (
    <main className="main">
      {cardList
        ? cardList.map((card) => {
            return (
              <div
                className="card__item"
                key={card.id}
                onClick={() => handleCardClick(card.id)}
              >
                <img src={card.img} alt={card.id} />
              </div>
            );
          })
        : ""}
    </main>
  );
}
