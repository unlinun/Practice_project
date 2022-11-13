import React from "react";

export default function Score(props) {
  const { highScore, yourScore } = props;
  return (
    <div className="header__score">
      <div className="score__box score__box--highest">
        <h3 className="score__title title--medium">highest score</h3>
        <p className="score__number">{highScore}</p>
      </div>
      <div className="score__box score__box--current">
        <h3 className="score__title title--medium">your score</h3>
        <p className="score__number">{yourScore}</p>
      </div>
    </div>
  );
}
