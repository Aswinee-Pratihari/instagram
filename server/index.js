import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./utils/connectDB.js";
import UserRoute from "./routes/UserRoute.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/user", UserRoute);
const port = process.env.PORT;
app.listen(port, () => {
  connectDB();
});
