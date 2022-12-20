import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        LOGO
      </Link>
      <div className="header__nav">
        <Link className="items" to="/ranking">
          Ranking
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
