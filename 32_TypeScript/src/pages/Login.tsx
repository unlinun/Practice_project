import React from "react";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    // this will return a promise
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    // redirect to home page use "useNavigate"
    navigate("/");
  };
  return (
    <div className="login">
      <div>Sign in with google to continue</div>
      <button onClick={signInWithGoogle}> Sing in with google</button>
    </div>
  );
}

export default Login;
