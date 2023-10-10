 import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"
import userRoutes from "./routes/userRoutes.js "
import authRoute from "./routes/authRoute.js"
import hotelRoutes from "./routes/hotelRoutes.js"
import roomRoutes from "./routes/roomRoutes.js"
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express();
dotenv.config();



const PORT = process.env.port || 8000;
import { connectDatabase } from "./db.js";


app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use("/api/auth", authRoute)
app.use("/api/users", userRoutes)
app.use("/api/hotels", hotelRoutes)
app.use("/api/rooms", roomRoutes)



app.use((err, req, res, next)=> {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong"
  return res.status(errorStatus).json({
    successful: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  })
})


app.get("/", (req, res) => {
  res.send('<h1> Booking API is running s it should. Goto <a href="https://chiemela-booking-application.netlify.app/">Booking web App</a></h1>\n');
});

mongoose.connection.on("disconnected", ()=> {
  console.log("Mongo disconnected")
})

app.listen(PORT, () => {
  connectDatabase();
  console.log(`Listening on port ${PORT}...`);
});
