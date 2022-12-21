import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
const RankingInfo = ({ id }) => {
  const [ranking, setRanking] = useState([]);
  useEffect(() => {
    const getRank = async () => {
      const q = query(
        collection(db, "ranking"),
        where("level", "==", Number(id))
      );
      const querySnapshot = await getDocs(q);
      const result = [];
      querySnapshot.forEach((doc) => {
        result.push(doc.data());
      });
      result
        .sort((a, b) => a.score - b.score)
        .filter((item) => item.level === +id);
      setRanking(result);
    };
    getRank();
  }, [id]);

  return (
    <>
      <div className="ranking__title">
        <div className="position">position</div>
        <div className="player">player</div>
        <div className="score">score</div>
      </div>
      {ranking.map((data, i) => {
        return (
          <div className="ranking__item" key={data.startTime}>
            <div className="position">{i + 1}</div>
            <div className="player">{data.playerName}</div>
            <div className="score">{data.score} sec</div>
          </div>
        );
      })}
    </>
  );
};

export default RankingInfo;
