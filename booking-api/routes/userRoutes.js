import express from "express"
import {  deleteUser, getAllUsers, getOneUser, updateUser } from "../controllers/userController.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js"
const router = express.Router()

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello user you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("You can delete your account")
// })
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello admin you are logged in and you can delete all accounts")
// })

router.put("/:id", verifyUser, updateUser)
router.delete("/:id", verifyUser, deleteUser)
router.get("/:id", verifyUser, getOneUser)
router.get("/", verifyAdmin, getAllUsers)

export default router