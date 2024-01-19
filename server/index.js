import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./utils/connectDB.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT;
app.listen(port, () => {
  connectDB();
});
