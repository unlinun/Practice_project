import React from "react";
import paperclip from "../../assets/images/paperclip.svg";
import image from "../../assets/images/image.svg";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="input__send">
        <img src={image} alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={paperclip} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
