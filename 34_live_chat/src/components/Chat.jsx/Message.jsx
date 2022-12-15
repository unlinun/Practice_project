import React from "react";
import placeholder from "../../assets/images/placeholder.jpg";

const Message = () => {
  return (
    <div className="message message--owner">
      <div className="message__info">
        <img src={placeholder} alt="" />
        <span>just now</span>
      </div>
      <div className="message__content">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          laborum et consequuntur doloribus ut rerum tenetur animi, enim eaque
          quos nihil error neque quisquam repellendus. Harum ex temporibus saepe
          accusantium!
        </p>
      </div>
    </div>
  );
};

export default Message;
