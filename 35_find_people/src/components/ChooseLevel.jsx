import React from "react";
import LevelCard from "./LevelCard";

const ChooseLevel = ({
  allLevelData,
  setChooseLevel,
  setLevelCharacter,
  setGameStart,
  setGameOver,
  setPlayer,
}) => {
  return (
    <div className="levels">
      {allLevelData.map((item) => {
        return (
          <LevelCard
            key={item.level}
            item={item}
            setChooseLevel={setChooseLevel}
            setLevelCharacter={setLevelCharacter}
            setGameStart={setGameStart}
            setGameOver={setGameOver}
            setPlayer={setPlayer}
          />
        );
      })}
    </div>
  );
};

export default ChooseLevel;
