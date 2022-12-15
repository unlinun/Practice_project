import React from "react";
import phone from "../../assets/images/phone.svg";
import video from "../../assets/images/video.svg";
import more from "../../assets/images/more.svg";
import Messages from "./Messages";
import Input from "./Input";
const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__info">
        <span>User</span>
        <div className="chat__icons">
          <img src={phone} alt="" />
          <img src={video} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
