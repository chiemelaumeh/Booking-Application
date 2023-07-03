import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"
const app = express();
dotenv.config();


import userRoute from "./routes/userRoutes.js "
import auth from "./routes/auth.js"
const PORT = 8000;
import { connectDatabase } from "./db.js";


app.use("/", auth)
app.use("/users", userRoute)
























mongoose.connection.on("disconnected", ()=> {
  console.log("Mongo disconnected")
})

app.listen(`${PORT}`, () => {
  connectDatabase();
  console.log(`Listening on port ${PORT}`);
});
