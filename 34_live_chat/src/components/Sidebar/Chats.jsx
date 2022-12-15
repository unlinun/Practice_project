import React from "react";
import placeholder from "../../assets/images/placeholder.jpg";

const Chats = () => {
  return (
    <div className="chats">
      <div className="user-chat">
        <img src={placeholder} alt="" />
        <div className="info">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="user-chat">
        <img src={placeholder} alt="" />
        <div className="info">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="user-chat">
        <img src={placeholder} alt="" />
        <div className="info">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="user-chat">
        <img src={placeholder} alt="" />
        <div className="info">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
