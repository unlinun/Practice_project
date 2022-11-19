import React from "react";
import "./index.css";

export default function Score({ bestScore, currentScore }) {
  return (
    <div className="panel__score">
      <div className="score score--highest">
        <p className="score__title">Best Step</p>
        <h3 className="score__content">{bestScore}</h3>
      </div>
      <div className="score score--current">
        <p className="score__title">Your Step</p>
        <h3 className="score__content">{currentScore}</h3>
      </div>
    </div>
  );
}
