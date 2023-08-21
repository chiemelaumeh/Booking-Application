import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getAllHotels, getHotelRooms, getOneHotel, updateHotel } from "../controllers/hotelController.js";
import { verifyAdmin, verifyToken, verifyUser} from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, createHotel);
router.put("/:id", verifyAdmin, updateHotel);
router.delete("/:id", verifyAdmin, () => console.log("rf"));
router.get("/find/:id", verifyAdmin, getOneHotel);
router.get("/", getAllHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);



export default router;
