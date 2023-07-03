import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"
const app = express();
dotenv.config();


import userRoutes from "./routes/userRoutes.js "
import auth from "./routes/auth.js"
import hotelRoutes from "./routes/hotelRoutes.js"
import roomRoutes from "./routes/roomRoutes.js"
const PORT = 8000;
import { connectDatabase } from "./db.js";


app.use("/api/auth", auth)
app.use("/api/users", userRoutes)
app.use("/api/hotels", hotelRoutes)
app.use("/api/rooms", roomRoutes)

























mongoose.connection.on("disconnected", ()=> {
  console.log("Mongo disconnected")
})

app.listen(`${PORT}`, () => {
  connectDatabase();
  console.log(`Listening on port ${PORT}`);
});
