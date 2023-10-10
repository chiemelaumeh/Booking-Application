import User from "../models/UserModel.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { errorHandler } from "../utils/error.js"
export const register = async(req, res, next) => {
  try {
    const user = await User.findOne({username: req.body.username})
    if (user) return next(errorHandler(400, "username taken"))
    if (req.body.password !== req.body.confirmPassword) return next(errorHandler(400, "Password does not match"))
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)
    const newUser = new User ({
      username: req.body.username,
      email: req.body.email,
      password: hash
    })

    const savedUser = await newUser.save()
    const { password, isAdmin, ...otherDetails} = savedUser._doc
    res.status(201).json({...otherDetails})
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
    
   const token = jwt.sign({ id:user._id, isAdmin: user.isAdmin }, process.env.SECRET_KEY)

   const { password, isAdmin, ...otherDetails} = user._doc
    res.status(200).cookie("access_token", token, {
    httpOnly: true,
    secure: true,
    sameSite: true,


    }).json({...otherDetails})
  } catch (err) {
    next(err)
  }

}


export const logout = (req, res) => {

res.status(200).clearCookie('access_token', {
}).send("logged out")
}