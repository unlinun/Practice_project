import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mainPage } from "../util/data";

function Home() {
  const [activeInfo, setActiveInfo] = useState(0);
  const handleActive = (active) => {
    if (active === "left") {
      setActiveInfo((prev) => {
        return prev <= 0 ? mainPage.length - 1 : prev - 1;
      });
    } else if (active === "right") {
      setActiveInfo((prev) => {
        return prev >= mainPage.length - 1 ? 0 : prev + 1;
      });
    }
  };
  return (
    <main>
      <div className="show__info" key={mainPage[activeInfo].id}>
        <img
          className="info__image"
          src={mainPage[activeInfo].image}
          alt={mainPage[activeInfo].id}
        />
        <div className="info__content">
          <h2 className="content__title"> {mainPage[activeInfo].title}</h2>
          <p className="content__text">{mainPage[activeInfo].description}</p>
          <button className="content__button">
            <Link to={`products/${mainPage[activeInfo].page}`}>了解更多</Link>
          </button>
        </div>
        <div className="dots">
          {mainPage.map((info, i) => {
            return (
              <div
                key={i}
                className={activeInfo === i ? "dot active-dot" : "dot"}
              ></div>
            );
          })}
        </div>
        <button className="btn btn--left " onClick={() => handleActive("left")}>
          ←
        </button>
        <button
          className="btn btn--right"
          onClick={() => handleActive("right")}
        >
          {" "}
          →
        </button>
      </div>
    </main>
  );
}

export default Home;
