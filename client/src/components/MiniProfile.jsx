import React from "react";
import { data } from "../config/data";

const MiniProfile = () => {
  const user = data[0];
  return (
    <div className="flex items-center gap-4 mb-3 ">
      <div className="avatar">
        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={user.userImage} />
        </div>
      </div>
      <p className="flex-1 text-base font-bold hover:underline">
        {user?.userName}
      </p>
    </div>
  );
};

export default MiniProfile;
