import express from "express";
import { TokenVerification } from "../middleware/TokenVerification.js";
import Post from "../models/PostModel.js";
import User from "../models/UserModel.js";
import mongoose from "mongoose";
import multer from "multer";

const router = express.Router();

//upload images

router.post(
  "/",

  TokenVerification,
  async (req, res) => {
    const { caption, userId = req.user._id } = req.body;
    if (!caption || !userId) {
      return res.status(404).json("Please fill up all fields");
    }
    const post = { caption, userId };
    try {
      const createdPost = await Post.create(post);
      return res.status(200).json(createdPost);
    } catch (error) {
      res.status(503).json(error);
    }
  }
);

router.delete("/:id", TokenVerification, async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json("id not found");
    }
    const post = await Post.findById(id);
    if (post?.userId == req.user._id) {
      await Post.findByIdAndDelete(id);
      return res.status(200).json("deleted successsfully");
    } else {
      return res.status(400).json("Not authorized to delete");
    }
  } catch (error) {
    console.log(error);
    return res.status(502).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    return res.status(200).json(posts);
  } catch (error) {
    res.status(503).json(error);
  }
});

router.get("/singleUserPosts/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const posts = await Post.find({ userId: userId });
    return res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/like/:id", TokenVerification, async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post.likes.includes(req.user._id)) {
      await post.updateOne({ $push: { likes: req.user._id } });
      return res.status(200).json("Post Liked");
    } else {
      await post.updateOne({ $pull: { likes: req.user._id } });
      return res.status(200).json("Post Disliked");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//get timeline post
router.get("/timeline/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const userPosts = await Post.find({ userId: userId });
    const followingPosts = await User.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "posts",
          localField: "following",
          foreignField: "userId",
          as: "followingPosts",
        },
      },
      {
        $project: {
          followingPosts: 1,
          _id: 0,
        },
      },
    ]);
    // res.status(200).json(userPosts);
    res.status(200).json(
      userPosts.concat(...followingPosts[0].followingPosts).sort((a, b) => {
        return b.createdAt - a.createdAt;
      })
    );
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
export default router;
