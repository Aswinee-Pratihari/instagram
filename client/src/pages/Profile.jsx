import React from "react";
import { data } from "../config/data";
import Avatar from "../components/Avatar";
import ProfileNavigation from "../components/ProfileNavigation";

const Profile = () => {
  const user = data[0];
  return (
    <main className="border-b border-gray-700 w-full ">
      <section className="flex justify-center items-center space-x-8 mb-10 py-10  ">
        <Avatar width={40} image={user?.userImage} />

        <div className="details flex justify-start gap-5 flex-col">
          <div className="flex justify-between items-center gap-10">
            <h2 className="card-title">{user?.userName}</h2>
            <div className="flex gap-4 items-center">
              <button className="bg-blue-600 rounded-md px-3 py-2 text-base text-white font-semibold">
                Follow
              </button>
              <button className="bg-gray-900 rounded-md px-3 py-2 text-white text-base font-semibold ">
                Messsage
              </button>
            </div>
          </div>

          <div className="flex justify-between item-center gap-10">
            <h5 className="text-base">
              <span className="font-bold">200 </span>
              Posts
            </h5>

            <h5 className="text-base">
              <span className="font-bold">1200 </span>
              Followers
            </h5>

            <h5 className="text-base">
              <span className="font-bold">800 </span>
              Following
            </h5>
          </div>
        </div>
      </section>

      <section>
        <ProfileNavigation />
      </section>
    </main>
  );
};

export default Profile;
