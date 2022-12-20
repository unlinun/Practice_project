import React, { useContext, useState } from "react";
// import placeholder from "../../assets/images/placeholder.jpg";
// 要執行搜索時，需要 import {collection, query, where}
import {
  collection,
  getDocs,
  getDoc,
  query,
  where,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";

const Search = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [isError, setIsError] = useState(false);
  // 取得當前 user
  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    // 要搜尋使用者，先建立使用者的 reference
    const userRef = collection(db, "users");
    const searchQuery = query(userRef, where("displayName", "==", userName));
    try {
      const querySnapShot = await getDocs(searchQuery);
      querySnapShot.forEach((doc) => {
        setUser(doc.data());
      });
      setUserName("");
    } catch (err) {
      setIsError(true);
    }
  };
  const handleKeyDown = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleUserClick = async () => {
    // check whether the group (chats) is exists, if not create
    const combinedID =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "userChats", combinedID));
      if (!res.exists()) {
        // create a chat in chats collection
        await setDoc(doc(db, "userChats", combinedID), { message: [] });
        //create a userChat per user
        await updateDoc(doc(db, "chats", currentUser.uid), {
          [combinedID + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedID + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "chats", user.uid), {
          [combinedID + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedID + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {
      setIsError(true);
    }
    setUser(null);
    setUserName("");
  };

  return (
    <div className="search">
      <div className="search__form">
        <input
          type="text"
          placeholder="Search Chat"
          value={userName}
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            setUser(null);
            setUserName(e.target.value);
          }}
        />
      </div>
      {isError && <span>User not found</span>}
      {user && (
        <div className="user-chat" onClick={handleUserClick}>
          <img src={user.photoURL} alt="" />
          <div className="info">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
