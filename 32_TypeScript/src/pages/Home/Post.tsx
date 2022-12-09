import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../config/firebase";
import { PostFormat } from "./Home";

interface Props {
  post: PostFormat;
}

interface likeFormat {
  userId: string;
  likeId: string;
}

function Post(props: Props) {
  const { post } = props;
  const [likesList, setLikesList] = useState<likeFormat[] | null>(null);
  const [user] = useAuthState(auth);
  const likesRef = collection(db, "likes");
  const likesDocs = query(likesRef, where("postId", "==", post.id));
  const getLikes = async () => {
    const data = await getDocs(likesDocs);
    setLikesList(
      data.docs.map((doc) => ({ userId: doc.data().userId, likeId: doc.id }))
    );
  };

  const removeLike = async () => {
    try {
      const deleteDocs = query(
        likesRef,
        where("postId", "==", post.id),
        where("userId", "==", user?.uid)
      );

      const getDeleteData = await getDocs(deleteDocs);
      const likeId = getDeleteData.docs[0].id;
      const deleteRef = doc(db, "likes", likeId);
      await deleteDoc(deleteRef);
      if (user) {
        setLikesList(
          (likesList) =>
            likesList &&
            likesList?.filter((like) => {
              return like.likeId !== likeId;
            })
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onLikeBtn = async () => {
    try {
      const newDoc = await addDoc(likesRef, {
        userId: user?.uid,
        postId: post.id,
      });
      if (user) {
        setLikesList((likesList) =>
          likesList
            ? [...likesList, { userId: user?.uid, likeId: newDoc.id }]
            : [{ userId: user?.uid, likeId: newDoc.id }]
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
  const hasUserLike = likesList?.find((like) => like.userId === user?.uid);

  useEffect(() => {
    getLikes();
  }, []);

  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <h6>@{post.userName}</h6>
      <button onClick={!hasUserLike ? onLikeBtn : removeLike}>
        {hasUserLike ? "👎🏻" : "👍🏻"}
      </button>
      {likesList && <h6>likes:{likesList.length}</h6>}
    </div>
  );
}

export default Post;
