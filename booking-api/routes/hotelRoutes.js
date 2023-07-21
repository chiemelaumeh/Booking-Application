import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getAllHotels, getHotelRooms, getOneHotel, updateHotel } from "../controllers/hotelController.js";
import { verifyAdmin, } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, createHotel);
router.put("/:id", verifyAdmin, updateHotel);
router.delete("/:id", verifyAdmin, deleteHotel);
router.get("/find/:id", getOneHotel);
router.get("/", getAllHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);



export default router;
