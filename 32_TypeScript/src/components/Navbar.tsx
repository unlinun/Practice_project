import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

function Navbar() {
  // 獲取當前的使用者需使用 useAuthStates hook
  const [user] = useAuthState(auth);
  const logOut = async () => {
    await signOut(auth);
  };
  return (
    <div className="header">
      <div className="navbar">
        <NavLink to="/">Main</NavLink>
        {!user ? (
          <NavLink to="/login">Login</NavLink>
        ) : (
          <NavLink to="/createpost">Create Post</NavLink>
        )}
      </div>
      {user && (
        <div className="user">
          <h3> {user?.displayName}</h3>
          <img
            src={user?.photoURL || ""}
            alt={user?.displayName || "userImage"}
          />
          <button onClick={logOut}>Log out</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
