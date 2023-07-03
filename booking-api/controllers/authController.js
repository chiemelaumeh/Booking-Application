import User from "../models/UserModel.js"
export const register = async(req, res, next) => {
  try {
    const newUser = new User ({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })

    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (err) {
    next(err)
  }

}