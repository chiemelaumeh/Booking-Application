import User from "../models/UserModel.js";

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(201).json(updatedUser);
  } catch (err) {
    next(err)
  }
}

export const deleteUser = async(req, res, next) => {
 try {
    await User.findByIdAndDelete(req.params.id);
    res.status(201).json("Hotel has been deleted");
  } catch (err) {
    next(err)
  }
}

export const getOneUser = async(req, res, next) => {
  try {
    const user = await User.findById(
      req.params.id,
    );
   
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
}

export const getAllUsers = async(req, res, next) => {
   try {
    const users = await User.find(
    );
   
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
 
}