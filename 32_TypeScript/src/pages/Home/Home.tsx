import React, { useEffect, useState } from "react";
import Post from "./Post";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

export interface PostFormat {
  id: string;
  title: string;
  content: string;
  userId: string;
  userName: string;
}
function Home() {
  const [posts, setPosts] = useState<PostFormat[] | null>(null);
  const postRef = collection(db, "posts");
  const getPosts = async () => {
    const data = await getDocs(postRef);
    setPosts(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as PostFormat[]
    );
  };

  // 會 render 一次，當組件掛載時
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="posts">
      {posts?.map((post, i) => (
        <Post key={i} post={post} />
      ))}
    </div>
  );
}

export default Home;
