import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const getLoginInfo = async (data) => {
    const { email, password } = data;
    try {
      setIsError(false);
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res);
      navigate("/");
    } catch (err) {
      setIsError(true);
    }
  };

  return (
    <div className="form__container">
      <div className="form__wrapper">
        <span className="logo">Chat chat</span>
        <span className="title">Login</span>
        {isError && <p className="form__error">Oops! something went wrong!</p>}
        <form className="form" onSubmit={handleSubmit(getLoginInfo)}>
          <input type="email" placeholder="Email" {...register("email")} />
          <p className="form__error">{errors?.email?.message}</p>
          <input
            type="password"
            placeholder="password"
            {...register("password")}
          />
          <p className="form__error">{errors?.password?.message}</p>

          <button type="submit">Sign in</button>
        </form>
        <p>
          You don't have an account? <Link to="/register">register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
