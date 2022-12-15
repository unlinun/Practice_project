import React from "react";
import Chat from "../components/Chat.jsx/Chat";
import Sidebar from "../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <main className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </main>
  );
};

export default Home;
