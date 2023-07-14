import express from  "express"
import { createRoom, deleteRoom, getAllRooms, getOneRoom, updateRoom } from "../controllers/roomController.js"
import { verifyAdmin } from "../utils/verifyToken.js"
const router = express.Router()

router.post("/:hotelId", verifyAdmin, createRoom) 
router.put("/:id", verifyAdmin, updateRoom)
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom)
router.get("/:id", getOneRoom)
router.get("/", getAllRooms)





export default router