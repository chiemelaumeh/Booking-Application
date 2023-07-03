import User from "../models/UserModel.js"
import bcrypt from "bcryptjs"
import { errorHandler } from "../utils/error.js"
export const register = async(req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)
    const newUser = new User ({
      username: req.body.username,
      email: req.body.email,
      password: hash
    })

    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (err) {
    next(err)
  }

}

export const login = async(req, res, next) => {
  try {
   const user = await User.findOne({username: req.body.username})
   if (!user) return next(errorHandler(404, "user not found"))
   
   const isPasswordCorrect = await bcrypt.compareSync(req.body.password, user.password)
   if(!isPasswordCorrect) return next(errorHandler(400, "Invalid password"))
   
    res.status(201).json(user)
  } catch (err) {
    next(err)
  }

}