import React from "react";
import PostCard from "./PostCard";
import { data } from "../config/data";

const Posts = () => {
  return (
    <div>
      {data?.map((post, index) => {
        return (
          <PostCard
            key={post._id}
            post={post}
            id={post._id}
            userName={post.userName}
            postImg={post.postImage}
            userImg={post.userImage}
            caption={post?.caption}
          />
        );
      })}
    </div>
  );
};

export default Posts;
