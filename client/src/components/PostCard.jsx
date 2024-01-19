import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  FaHeart as LikedHeart,
  FaRegHeart as DislikedHeart,
  FaBookmark,
  FaShare,
} from "react-icons/fa";
const PostCard = ({ id, userName, postImg, userImg, caption }) => {
  return (
    <div className="mb-6 bg-white border rounded-md py-4 px-3">
      <div className="flex items-center gap-4 mb-3">
        <div className="avatar">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={userImg} />
          </div>
        </div>
        <Link
          to={`/${id}`}
          className="flex-1 text-base font-bold text-black cursor-pointer"
        >
          {userName}
        </Link>

        <BsThreeDots />
      </div>

      <img
        src={postImg}
        alt=""
        className="w-full object-cover rounded-md shadow-md"
      />

      <div className="flex justify-between items-center mt-4 px-6">
        <div className="flex justify-center-items-center gap-5">
          <LikedHeart className="text-rose-600 text-xl hover:opacity-70 cursor-pointer " />
          <FaShare className="text-xl hover:opacity-70 cursor-pointer" />
        </div>
        <FaBookmark className="text-xl hover:opacity-70 cursor-pointer " />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-3">{userName}</span>
        {caption}
      </p>

      <form className="flex space-x-3 items-center">
        <input
          type="text"
          placeholder="Add your caption"
          className="input input-bordered w-full "
        />
        <button className="text-base font-bold text-blue-600">Post</button>
      </form>
    </div>
  );
};

export default PostCard;
