import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";

export const TokenVerification = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, async (error, payload) => {
      try {
        if (error) {
          console.log(error);
          return res.status(401).json({ error: "Unauthorized!" });
        }

        const user = await User.findOne({ _id: payload._id }).select(
          "-password"
        );

        req.user = user;
        next();
      } catch (error) {
        return res.status(404).json(error);
      }
    });
  } else {
    return res.status(403).json("Unauthorized");
  }
};
