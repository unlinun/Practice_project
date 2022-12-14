import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function ShareLayout({ products }) {
  return (
    <>
      <Navbar products={products} />
      <Outlet />
    </>
  );
}

export default ShareLayout;
