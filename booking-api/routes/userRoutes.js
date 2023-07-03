import express from "express"
import { createUser, deleteUser, getAllUsers, getOneUser, updateUser } from "../controllers/userController.js"
const router = express.Router()

router.post("/", createUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
router.get("/:id", getOneUser)
router.get("/", getAllUsers)

export default router