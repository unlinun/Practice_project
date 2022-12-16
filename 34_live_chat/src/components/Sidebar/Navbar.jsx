import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
// import placeholder from "../../assets/images/placeholder.jpg";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="navbar__logo">Chat chat</span>
      <div className="navbar__user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button type="button" onClick={() => signOut(auth)}>
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
