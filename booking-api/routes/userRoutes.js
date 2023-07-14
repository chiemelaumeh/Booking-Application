import express from "express"
import {  deleteUser, getAllUsers, getOneUser, updateUser } from "../controllers/userController.js"
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js"
const router = express.Router()


router.put("/:id", verifyUser, updateUser)
router.delete("/:id", verifyUser, deleteUser)
router.get("/:id", verifyUser, getOneUser)
router.get("/", verifyAdmin, getAllUsers)

export default router