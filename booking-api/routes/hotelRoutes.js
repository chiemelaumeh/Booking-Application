import express from "express";
import { createHotel, deleteHotel, getAllHotels, getOneHotel, updateHotel } from "../controllers/hotelController.js";

const router = express.Router();

router.post("/", createHotel);
router.put("/:id", updateHotel);
router.delete("/:id", deleteHotel);
router.get("/:id", getOneHotel);
router.get("", getAllHotels);



export default router;
