import React from "react";
import "./index.css";

export default function Info({
  gameAlert,
  handleGameAlert,
  handleStart,
  currentScore,
}) {
  function handleClick(e) {
    handleGameAlert();
    handleStart(e);
  }
  return gameAlert ? (
    <div className="info">
      <div className="info__content">
        <button className="info__close" onClick={handleClick}>
          X
        </button>
        <h2>GAME OVER</h2>
        <p>Your Step is</p>
        <p className="info__score">{currentScore}</p>
      </div>
    </div>
  ) : (
    ""
  );
}
