import React, { useState } from "react";
// 表單驗證使用以下 useForm, yup ,@hookform/resolvers
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, storage, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

import upload from "../assets/images/upload.png";

const Register = () => {
  const navigate = useNavigate();
  //1) set error state
  const [isError, setIsError] = useState(false);

  //  使用 yup schema, 設定 validation
  const schema = yup.object().shape({
    userName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().min(6).required(),
    // 使用 confirm password validation
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "passwords must match")
      .required(),
    file: yup.mixed(),
  });

  // 使用 useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const getRegisterInfo = async (data) => {
    const displayName = data.userName;
    const email = data.email;
    const password = data.password;
    const file = data.file[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          // Handle unsuccessful uploads
          setIsError(true);
          console.log(error);
        },
        () => {
          setIsError(false);
          // Handle successful uploads on complete
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            // setDoc(database, collection名稱, unique id)
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            // 設定 chats 的集合
            await setDoc(doc(db, "chats", res.user.uid), {});

            // 導回首頁
            navigate("/");
          });
        }
      );
    } catch (err) {
      setIsError(true);
    }
  };

  return (
    <div className="form__container">
      <div className="form__wrapper">
        <span className="logo">Chat chat</span>
        <span className="title">Register</span>
        {isError && <p className="form__error">Oops! something went wrong!</p>}
        <form className="form" onSubmit={handleSubmit(getRegisterInfo)}>
          <input
            type="text"
            placeholder="Your name"
            {...register("userName")}
          />
          <p className="form__error">{errors?.userName?.message}</p>
          <input type="email" placeholder="Email" {...register("email")} />
          <p className="form__error">{errors?.email?.message}</p>
          <input
            type="password"
            placeholder="password"
            {...register("password")}
          />
          <p className="form__error">{errors?.password?.message}</p>
          <input
            type="password"
            placeholder="confirm password"
            {...register("confirmPassword")}
          />
          <p className="form__error">{errors?.confirmPassword?.message}</p>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            {...register("file")}
          />
          <label htmlFor="file">
            <img src={upload} alt="upload" />
            <span>Upload your avatar</span>
          </label>
          <button type="submit">Sign up</button>
        </form>
        <p>
          You have an account? <Link to="/login">login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

/* 
表單驗證需要下載！
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"; */
