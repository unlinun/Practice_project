import React from "react";
import { useNavigate } from "react-router-dom";

const LevelCard = ({
  item,
  setChooseLevel,
  setLevelCharacter,
  setGameOver,
  setPlayer,
}) => {
  const navigate = useNavigate();
  const handleLevelClick = () => {
    setChooseLevel({
      level: item.level,
      imageURL: item.imageURL,
      title: item.title,
    });
    setLevelCharacter(item.characters);
    setGameOver(false);
    setPlayer({
      startTime: new Date().getTime(),
    });
    navigate("/gameboard");
  };
  return (
    <div className="levels__level level" onClick={handleLevelClick}>
      <div className="image">
        <img src={item.imageURL} alt={item.title} className="level__img" />
      </div>
      <p>{item.title}</p>
    </div>
  );
};

export default LevelCard;
