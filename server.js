import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"
const app = express();
dotenv.config();

const PORT = 8000;
import { connectDatabase } from "./booking-api/db.js";






























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
