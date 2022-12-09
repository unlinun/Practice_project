import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function PostFrom() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  interface FormData {
    title: string;
    content: string;
  }
  const schema = yup.object().shape({
    title: yup.string().required(),
    content: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const postRef = collection(db, "posts");

  const loginUser = async (data: FormData) => {
    await addDoc(postRef, {
      ...data,
      userId: user?.uid,
      userName: user?.displayName,
    });
    navigate("/");
  };
  return (
    <form className="form" onSubmit={handleSubmit(loginUser)}>
      <input type="text" placeholder="Title ..." {...register("title")} />
      <p className="error">{errors?.title?.message}</p>
      <textarea
        maxLength={200}
        placeholder="Your Content ..."
        {...register("content")}
      ></textarea>
      <p className="error">{errors?.content?.message}</p>
      <input type="submit" value="submit" />
    </form>
  );
}

export default PostFrom;
