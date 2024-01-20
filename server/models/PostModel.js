import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    caption: { type: String, required: true },
    likes: [{ type: String }],
    postImage: { type: String },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);
export default Post;
