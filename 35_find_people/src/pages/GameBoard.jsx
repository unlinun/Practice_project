import React, { useEffect, useState } from "react";
import RankingForm from "../components/RankingForm";
const GameBoard = ({
  chooseLevel,
  levelCharacter,
  setLevelCharacter,
  setPlayerCoords,
  playerCoords,
  gameOver,
  setGameOver,
  player,
  setPlayer,
}) => {
  // show or hide dropDown
  const [showDropDown, setShowDropDown] = useState(false);
  // 點擊圖片時將玩家的座標存入
  const handleClickImg = (e) => {
    const xCoords = Math.round(e.nativeEvent.offsetX / 20);
    const yCoords = Math.round(e.nativeEvent.offsetY / 20);
    setPlayerCoords({
      xCoords,
      yCoords,
    });
    setShowDropDown(true);
  };

  // 點擊圖片時顯示下拉選單，點擊下拉選單時發生的事件：
  // 1. 先將下拉選單隱藏
  // 2. 找到玩家要尋找的角色是誰
  // 3. 將玩家的座標與角色的座標比對，如果是對的角色，則將角色的 found 設為 true
  // 4. 判斷是否遊戲結束，若遊戲結束，則顯示 submit score 的畫面
  const handleDropClick = (character) => {
    setShowDropDown(false);
    const currentCha = levelCharacter.find((cha) => {
      return cha.name === character;
    });
    const foundX = currentCha.xCoords.some(
      (coord) => coord === playerCoords.xCoords
    );
    const foundY = currentCha.yCoords.some(
      (coord) => coord === playerCoords.yCoords
    );
    if (foundX && foundY) {
      setPlayerCoords(null);
      const newCharacter = levelCharacter.map((cha) => {
        if (cha.name === character) {
          return { ...cha, found: true };
        } else {
          return { ...cha };
        }
      });
      setLevelCharacter(newCharacter);
    } else {
      setPlayerCoords(null);
    }
  };

  // 監聽 levelCharacter 的變化，若所有角色都被找到，則顯示 found
  useEffect(() => {
    setGameOver(levelCharacter?.every((cha) => cha.found));
  }, [levelCharacter]);

  useEffect(() => {
    if (gameOver) {
      setPlayer((prev) => {
        return {
          ...prev,
          level: chooseLevel.level,
          endTime: new Date().getTime(),
        };
      });
    }
  }, [gameOver]);
  return (
    <div className="game">
      <div className="game__characters">
        {levelCharacter.map((cha) => {
          return (
            <div
              className={`${
                cha.found ? "character character--found" : "character"
              }`}
              key={cha.imageURL}
            >
              <img src={cha.imageURL} alt={cha.name} />
              <p>{cha.name} </p>
            </div>
          );
        })}
      </div>
      <div className="image">
        <img
          className="game__img"
          onClick={handleClickImg}
          src={chooseLevel.imageURL}
          alt={chooseLevel.title}
        />
        {showDropDown && (
          <div
            className="game__drop"
            style={{
              top: `${playerCoords.yCoords * 20}px`,
              left: `${playerCoords.xCoords * 20}px`,
            }}
          >
            {levelCharacter.map((cha) => {
              return !cha.found ? (
                <div
                  className="item"
                  key={cha.name}
                  onClick={() => handleDropClick(cha.name)}
                >
                  {cha.name}
                </div>
              ) : (
                ""
              );
            })}
          </div>
        )}
      </div>
      {gameOver && <RankingForm player={player} setGameOver={setGameOver} />}
    </div>
  );
};

export default GameBoard;
