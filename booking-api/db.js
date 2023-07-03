import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

export const connectDatabase = async() => {
  const connectionString = process.env.DATABASE_URL
  mongoose.set("strictQuery", false)
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology:  true,
    })
   console.log("Connected to Booking DB")
    
  } catch (error) {
    console.error(error.message)
    
  }
}