import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"
const app = express();
dotenv.config();

const PORT = 8000;
import { connectDatabase } from "./db.js";



app.get("/", (req, res)=> {
  res.send("My request")
})


























mongoose.connection.on("disconnected", ()=> {
  console.log("Mongo disconnected")
})
mongoose.connection.on("connected", ()=> {
  console.log("Mongo connected")
})

app.listen(`${PORT}`, () => {
  connectDatabase();
  console.log(`Listening on port ${PORT}`);
});
