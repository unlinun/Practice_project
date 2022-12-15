import React from "react";
import upload from "../assets/images/upload.png";

const Register = () => {
  return (
    <div className="form__container">
      <div className="form__wrapper">
        <span className="logo">Chat chat</span>
        <span className="title">Register</span>
        <form className="form">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="confirm password" />
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <img src={upload} alt="upload" />
            <span>Upload your avatar</span>
          </label>
          <button type="button">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
