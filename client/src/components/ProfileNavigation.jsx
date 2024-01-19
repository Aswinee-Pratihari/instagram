import React from "react";
import { FaBookmark, FaHeart, FaImage } from "react-icons/fa";
const ProfileNavigation = () => {
  return (
    <>
      <div role="tablist" className="tabs tabs-bordered">
        <a role="tab" className="tab flex items-center gap-4">
          <FaImage />
          Posts
        </a>
        <a role="tab" className="tab tab-active flex items-center gap-4">
          <FaBookmark />
          Bookmarked Images
        </a>
        <a role="tab" className="tab flex items-center gap-4">
          <FaHeart />
          Liked Photos
        </a>
      </div>
    </>
  );
};

export default ProfileNavigation;
