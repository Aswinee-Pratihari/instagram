import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./utils/connectDB.js";
import UserRoute from "./routes/UserRoute.js";
import PostRoute from "./routes/PostRoute.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/user", UserRoute);
app.use("/api/post", PostRoute);
const port = process.env.PORT;
app.listen(port, () => {
  connectDB();
});
