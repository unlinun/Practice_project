import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../util/data";

function Navbar({ products }) {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link className="nav__logo" to="/">
          <img src={icons.logo} alt="logo" />
        </Link>
        <Link className="nav__link" to="/products">
          Products
        </Link>
      </nav>
      <div className="header__icons">
        <button className="icons search">
          <img src={icons.search} alt="search" />{" "}
        </button>
        <Link className="icons" to="/shoppingcart">
          <img className="bag" src={icons.bag} alt="cart" />
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
