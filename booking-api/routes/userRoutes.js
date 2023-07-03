import express from "express"
const router = express.Router()

router.get("/", (req,res) => {
  res.send("Ayooooo")
})

export default router