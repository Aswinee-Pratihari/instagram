import React from "react";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Suggestions from "./Suggestions";

const Feed = () => {
  return (
    <main className=" w-full flex justify-center items-start">
      <section className="w-full flex-[2]">
        <Posts />
      </section>

      <section className="flex-1 hidden md:block py-3 px-4">
        <MiniProfile />
        <Suggestions />
      </section>
    </main>
  );
};

export default Feed;
