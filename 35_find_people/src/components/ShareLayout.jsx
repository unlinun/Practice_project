import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const ShareLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default ShareLayout;
