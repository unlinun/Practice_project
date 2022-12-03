import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Component/Login";
import Home from "./Container/Home";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default App;
