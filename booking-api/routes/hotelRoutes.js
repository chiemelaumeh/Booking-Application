import express from "express";
import { countByCity, createHotel, deleteHotel, getAllHotels, getOneHotel, updateHotel } from "../controllers/hotelController.js";
import { verifyAdmin, } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, createHotel);
router.put("/:id", verifyAdmin, updateHotel);
router.delete("/:id", verifyAdmin, deleteHotel);
router.get("/find/:id", getOneHotel);
router.get("/", getAllHotels);
router.get("/countByCity", countByCity);
// router.get("/countByType", getAllHotels);



export default router;
