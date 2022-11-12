import React from "react";
import "./index.css";

export default function Header() {
  // 遊戲階級（卡片數量）
  // 最高分
  // 現在分數
  // 重新開始
  return (
    <header className="header">
      <div className="header__title title--big">Memory Card</div>
      <div className="header__score">
        <div className="score__box score__box--highest">
          <h3 className="score__title title--medium">highest score</h3>
          <p className="score__number">0</p>
        </div>
        <div className="score__box score__box--current">
          <h3 className="score__title title--medium">your score</h3>
          <p className="score__number">0</p>
        </div>
      </div>
      <select name="header__selector">
        <option value="8">Level 1</option>
        <option value="16">Level 2</option>
        <option value="24">Level 3</option>
      </select>
      <button className="header__btn btn--start">start</button>
    </header>
  );
}
