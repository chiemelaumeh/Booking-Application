import Hotel from "../models/HotelModel.js";
import Room from "../models/RoomModel.js"
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(201).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(201).json("Hotel has been deleted");
  } catch (err) {
    next(err);
  }
};

export const getOneHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    res.status(201).json(hotel);
  } catch (err) {
    next(err);
  }
};


export const getAllHotels = async (req, res, next) => {
  const { min, max, limit, ...others} = req.query

  try {
    const hotels = await Hotel.find({...others , cheapestPrice: { $gt: min || 1, $lt: max || 999999999 }})
    .limit(limit)
    res.status(201).json(hotels);
  } catch (err) {
    next(err);
  }
};
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(201).json(list);
  } catch (err) {
    next(err);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });

    res
      .status(201)
      .json([
        { type: "hotels", count: hotelCount },
        { type: "cabin", count: cabinCount },
        { type: "villas", count: villaCount },
        { type: "resorts", count: resortCount },
        { type: "apartments", count: apartmentCount },
      ]);
  } catch (err) {
    next(err);
  }
};


export const getHotelRooms = async (req, res, next) => {
  try {
    console.log("hit1")
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(hotel.rooms.map(room => {
      return Room.findById(room)
    }))

    res.status(201).json(list);
    console.log("hit2")

  } catch (err) {
    next(err);
  }
};