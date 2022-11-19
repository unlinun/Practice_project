import React from "react";
import "./index.css";

export default function Form({ handleStart, handleLevel, gameStart, level }) {
  return (
    <form className="panel__form" id="panel__form">
      <select
        name="level"
        className="panel__level"
        id="panel__level"
        onChange={handleLevel}
        value={level ? level : "null"}
        disabled={gameStart ? true : false}
      >
        <option value="null" disabled>
          -
        </option>
        <option value="8">grid * 8</option>
        <option value="12">grid * 12</option>
        <option value="16">grid * 16</option>
      </select>
      <button type="button" className="panel__start" onClick={handleStart}>
        {gameStart ? "restart" : "start"}
      </button>
    </form>
  );
}
