import express from "express";
import Hotel from "../models/HotelModel.js";
const router = express.Router();

router.post("/", async (req, res) => {
  // const { name } = req.body
  const newHotel = new Hotel(req.body);
  try {
     const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    res.status(500).json(error)
  }
});
export default router;
