import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link className="nav__logo" to="/">
          <img src="./images/LOGO.png" alt="logo" />
        </Link>
        <Link className="nav__link" to="/products">
          Products
        </Link>
      </nav>
      <div className="header__icons">
        <button className="icons search">
          <img src="./images/search.png" alt="search" />{" "}
        </button>
        <Link className="icons" to="/shoppingcart">
          <img src="./images/shopping_bag.png" alt="cart" />
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
