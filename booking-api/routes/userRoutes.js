import express from "express"
import { createUser, deleteUser, getAllUsers, getOneUser, updateUser } from "../controllers/userController.js"
import { verifyToken, verifyUser } from "../utils/verifyToken.js"
const router = express.Router()

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("Hello user you are logged in")
})

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("You can delete your account")
})
router.post("/", createUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
router.get("/:id", getOneUser)
router.get("/", getAllUsers)

export default router