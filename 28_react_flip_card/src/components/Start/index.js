import React from "react";

export default function Start(props) {
  const { gameStart, handleStart, handleLevel } = props;
  return (
    <>
      <select
        name="header__selector"
        disabled={gameStart ? true : false}
        onChange={handleLevel}
      >
        <option value="null">choose level</option>
        <option value="4">Level 1</option>
        <option value="8">Level 2</option>
        <option value="12">Level 3</option>
      </select>
      <button className="header__btn btn--start" onClick={handleStart}>
        {gameStart ? "restart" : "start"}
      </button>
    </>
  );
}
