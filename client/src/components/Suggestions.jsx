import React from "react";
import { data } from "../config/data";

const Suggestions = () => {
  return (
    <div>
      <h5 className="text-sm font-bold text-gray-500">Suggested for you</h5>
      {data.map((user) => (
        <>
          <div className="flex items-center mt-5 justify-between">
            <div className="flex gap-5 items-center">
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user.userImage} />
                </div>
              </div>
              <p className="flex-1 text-base font-bold hover:underline">
                {user?.userName}
              </p>
            </div>

            <button className="text-blue-800 font-bold text-sm">Follow</button>
          </div>
        </>
      ))}
    </div>
  );
};

export default Suggestions;
