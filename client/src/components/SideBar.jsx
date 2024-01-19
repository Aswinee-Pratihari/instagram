import React from "react";
import {
  FaFacebookMessenger,
  FaHome,
  FaPlusSquare,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ThemeChange from "../utils/ThemeChange";
const SideBar = () => {
  return (
    <>
      <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
        {/* Sidebar content here */}

        <li className="bg-none">
          {" "}
          <h1 className="logo text-4xl font-semibold mb-5 ">Instagram</h1>
        </li>

        <div className="flex flex-col gap-5 justify-start items-start">
          <Link
            to="/"
            className="flex justify-start space-x-5 items-center hover:bg-gray-300 w-full py-3 px-2 rounded-md"
          >
            <FaHome className="text-xl font-sans" />
            <h3 className="text-xl font-serif ">Home</h3>
          </Link>

          <Link
            to="/"
            className="flex justify-start space-x-5 items-center hover:bg-gray-300 w-full py-3 px-2 rounded-md"
          >
            <FaSearch className="text-xl font-sans" />
            <h3 className="text-xl font-serif ">Search</h3>
          </Link>

          <Link
            to="/"
            className="flex justify-start space-x-5 items-center hover:bg-gray-300 w-full py-3 px-2 rounded-md"
          >
            <FaFacebookMessenger className="text-xl font-sans" />
            <h3 className="text-xl font-serif ">Messages</h3>
          </Link>

          <Link
            to="/"
            className="flex justify-start space-x-5 items-center hover:bg-gray-300 w-full py-3 px-2 rounded-md"
          >
            <FaPlusSquare className="text-xl font-sans" />
            <h3 className="text-xl font-serif ">Create</h3>
          </Link>

          <ThemeChange />
        </div>
      </ul>
    </>
  );
};

export default SideBar;
