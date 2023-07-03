import User from "../models/UserModel.js"
export const register = async(req, res, next) => {
  try {
    const newUser = await new User
  } catch (err) {
    next(err)
  }

}