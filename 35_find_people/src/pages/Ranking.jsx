import React from "react";
import { Link, useParams } from "react-router-dom";
import RankingInfo from "../components/RankingInfo";

const Ranking = () => {
  const { id } = useParams();
  return (
    <div className="ranking">
      <div className="ranking__links">
        <Link to="/ranking/1">girl's room</Link>
        <Link to="/ranking/2">pokemon</Link>
        <Link to="/ranking/3">boy's room</Link>
      </div>
      {id && <RankingInfo id={id} />}
    </div>
  );
};

export default Ranking;
