import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <NavLink to="/products/flowers">Flowers</NavLink>
      <NavLink to="/products/planting">Planting</NavLink>
      <NavLink to="/products/sale" className="item__sale">
        Sale
      </NavLink>
    </aside>
  );
}

export default Sidebar;
