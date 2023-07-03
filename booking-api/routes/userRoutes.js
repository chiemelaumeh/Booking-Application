import express from "express"
const router = express.Router()

router.get("/", (req,res) => {
  res.send("This is  users end point")
})

export default router