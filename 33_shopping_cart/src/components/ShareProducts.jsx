import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function ShareProducts() {
  return (
    <div className="products__container">
      <Sidebar />
      <Outlet />
    </div>
  );
}
