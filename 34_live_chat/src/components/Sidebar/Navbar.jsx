import React from "react";
import placeholder from "../../assets/images/placeholder.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="navbar__logo">Chat chat</span>
      <div className="navbar__user">
        <img src={placeholder} alt="" />
        <span>User</span>
        <button type="button">logout</button>
      </div>
    </div>
  );
};

export default Navbar;
