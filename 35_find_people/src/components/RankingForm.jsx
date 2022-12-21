import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const RankingForm = ({ player, setGameOver }) => {
  const navigate = useNavigate();
  const score = (player?.endTime - player?.startTime) / 1000;
  const [playerName, setPlayerName] = useState("");
  const handleSendRank = async (e) => {
    try {
      e.preventDefault();
      setGameOver(false);
      const id = uuid();
      const playerInfo = {
        id,
        playerName,
        score,
        ...player,
      };
      await setDoc(doc(db, "ranking", id), playerInfo);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="gameover">
      <div className="gameover__form">
        <h2>Your score: {score} sec</h2>
        <form onSubmit={handleSendRank}>
          <input type="text" onChange={(e) => setPlayerName(e.target.value)} />
          <input type="submit" value="送出" />
        </form>
      </div>
    </div>
  );
};

export default RankingForm;
