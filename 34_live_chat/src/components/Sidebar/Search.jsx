import React, { useState } from "react";
// import placeholder from "../../assets/images/placeholder.jpg";
// 要執行搜索時，需要 import {collection, query, where}
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

const Search = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [isError, setIsError] = useState(false);

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
  return (
    <div className="search">
      <div className="search__form">
        <input
          type="text"
          placeholder="Search Chat"
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            setUser(null);
            setUserName(e.target.value);
          }}
        />
      </div>
      {isError && <span>User not found</span>}
      {user && (
        <div className="user-chat">
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
