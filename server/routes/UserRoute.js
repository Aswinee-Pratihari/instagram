import express from "express";
import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import { TokenVerification } from "../middleware/TokenVerification.js";
import jwt from "jsonwebtoken";
const router = express.Router();

router.post("/register", async (req, res) => {
  const { userName, fullName, password, email } = req.body;
  if (!fullName || !email || !password || !userName)
    return res
      .status(406)
      .json({ error: `Please enter all the required field.` });

  try {
    const user = await User.findOne({ $or: [{ email }, { userName }] });

    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "password must be atleast 6 characters long" });
    }

    if (user) {
      return res.status(404).json({
        error: `user  already exists .`,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      userName,
      fullName,
    });

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    newUser.password = undefined;
    res.status(200).json({ user: newUser, token: token });
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  const { email, userName, password } = req.body;
  try {
    const userExist = await User.findOne({ $or: [{ email }, { userName }] });

    if (!userExist) {
      return res.status(406).json("Invalid credentials");
    }

    const passwordMatch = await bcrypt.compare(password, userExist?.password);
    if (!passwordMatch) {
      return res.status(400).json("Invalid credentials");
    }

    const payload = { _id: userExist._id };

    const token = jwt.sign(payload, process.env.JWT_SECRET);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    const user = { ...userExist._doc, password: undefined };

    res.status(200).json({ user, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (user) {
      const { password, ...userDetails } = user._doc;
      return res.status(200).json(userDetails);
    }
    return res.status(404).json("No user present");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", TokenVerification, async (req, res) => {
  const { id } = req.params;
  const { currentId, password } = req.body;
  if (currentId == id) {
    try {
      const user = await User.findByIdAndUpdate(id, req.body, { new: true });

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
});

router.delete("/:id", TokenVerification, async (req, res) => {
  try {
    const { id } = req.params;
    const { currentUserId } = req.body;
    if (currentUserId == id) {
      const user = await User.findByIdAndDelete(id);
      return res.status(200).json("User deleted successfully");
    } else {
      return res.status(400).json("Not authorized to delete user");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/follow/:id", async (req, res) => {
  const { id } = req.params;
  const { currentUserId } = req.body;
  if (currentUserId == id) {
    res.status(403).json("You Cannot follow Yourself");
  } else {
    try {
      const followUser = await User.findById(id);
      const followingUser = await User.findById(currentUserId);

      if (!followUser?.followers?.includes(currentUserId)) {
        await followUser.updateOne({ $push: { followers: currentUserId } });
        await followingUser.updateOne({ $push: { following: id } });

        res.status(200).json("user followed");
      } else {
        await followUser.updateOne({ $pull: { followers: currentUserId } });
        await followingUser.updateOne({ $pull: { following: id } });

        res.status(200).json("user unfollowed");
      }
    } catch (error) {
      console.log(error);
      res.status(505).json(error);
    }
  }
});
router.get("/checkUser", TokenVerification, async (req, res) => {
  res.status(200).json(req.user);
});
export default router;
