import React from "react";
import { NavLink, Link } from "react-router-dom";
import { RiHomeFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

import logo from "../assets/logo.png";
const notActiveStyle =
  "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize";
const activeStyle =
  "flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize";
const categories = [
  { name: "All" },
  { name: "Planting" },
  { name: "Landscape" },
  { name: "house" },
  { name: "garden" },
  { name: "other" },
];

function Sidebar({ user, setToggleSidebar }) {
  const handleCloseSidebar = () => {
    if (setToggleSidebar) setToggleSidebar(false);
  };
  return (
    <div className="flex flex-col justify-between bg-white h-full">
      <div className="flex flex-col ">
        <Link
          to="/"
          className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
          onClick={handleCloseSidebar}
        >
          <img src={logo} alt="logo" className="w-full" />
        </Link>
        <div className="flex flex-col gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeStyle : notActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <RiHomeFill />
            home
          </NavLink>
          <h3 className="mt-2 px-5 text-base 2xl:text-xl">
            Discover categories
          </h3>
          {categories.slice(0, categories.length - 1).map((category) => {
            return (
              <NavLink
                to={`/category/${category.name}`}
                key={category.name}
                className={({ isActive }) =>
                  isActive ? activeStyle : notActiveStyle
                }
                onClick={handleCloseSidebar}
              >
                {category.name}
              </NavLink>
            );
          })}
        </div>
      </div>
      {user && (
        <Link
          to={`user-profile/${user._id}`}
          className="flex my-5 mb-3 items-center gap-5 p-2 bg-white rounded-lg shadow-lg mx-3"
          onClick={handleCloseSidebar}
        >
          <img src={user.image} alt="user" className="w-10 h-10 rounded-full" />
          <p>{user.userName}</p>
        </Link>
      )}
    </div>
  );
}

export default Sidebar;
