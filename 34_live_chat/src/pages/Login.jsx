import React from "react";

const Login = () => {
  return (
    <div className="form__container">
      <div className="form__wrapper">
        <span className="logo">Chat chat</span>
        <span className="title">Login</span>
        <form className="form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password" />
          <button type="button">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
