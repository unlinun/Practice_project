import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 現在改成使用 ReactDOM.createRoot 在未來將會取消 ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
