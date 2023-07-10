import Room from "../models/RoomModel.js";
import Hotel from "../models/HotelModel.js";
// import { errorHandler } from "../utils/error";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    const updatedHotel = await Hotel.findByIdAndUpdate(hotelId, {$push: {rooms:savedRoom._id}}, {new:true})
    res.status(201).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

export const updateRoom = async(req, res, next) => {

  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {$set: req.body},
      {new: true}
    )
    res.status(201).json(updatedRoom)
  } catch (err) {
    next(err)
  }

}
export const deleteRoom = async(req, res, next) => {

  try {
    await Room.findByIdAndDelete(req.params.id)
    res.status(200).send("This room has been deleted")    
  } catch (err) {
    next(err)
  }

}

export const getOneRoom = async(req, res, next) => {
  try {
    const room = await Room.findById(req.params.id)
    res.status(200).json(room)
  } catch (err) {
    next(err)
  }
}

export const getAllRooms = async(req, res, next) => {
  try {
    const rooms = await Room.find()
    res.status(200).json(rooms)
    
  } catch (err) {
    next(err)
  }

}

// export const deletAll = async (req, res, next) => {
//   try {
//     await Room.deleteMany()
//     res.json("deleted all")
//   } catch (err) {
//     next()
//   }
// }