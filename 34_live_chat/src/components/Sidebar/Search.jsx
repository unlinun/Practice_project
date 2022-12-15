import React from "react";
import placeholder from "../../assets/images/placeholder.jpg";

const Search = () => {
  return (
    <div className="search">
      <div className="search__form">
        <input type="text" placeholder="Search Chat" />
      </div>
      <div className="user-chat">
        <img src={placeholder} alt="" />
        <div className="info">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
