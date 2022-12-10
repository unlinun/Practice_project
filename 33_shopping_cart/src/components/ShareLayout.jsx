import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function ShareLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default ShareLayout;
