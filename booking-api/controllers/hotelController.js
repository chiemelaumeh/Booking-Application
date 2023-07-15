import Hotel from "../models/HotelModel.js";
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
  try {
    console.log("ate");
    const hotels = await Hotel.find();

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
    const hotelCount = await Hotel.countDocuments({ type: "Hotel" });
    const cabinCount = await Hotel.countDocuments({ type: "Cabin" });
    const villaCount = await Hotel.countDocuments({ type: "Villa" });
    const resortCount = await Hotel.countDocuments({ type: "Resort" });
    const apartmentCount = await Hotel.countDocuments({ type: "Apartment" });

    res
      .status(201)
      .json([
        { type: "Hotel", count: hotelCount },
        { type: "Apartment", count: cabinCount },
        { type: "Villa", count: villaCount },
        { type: "ResortCount", count: resortCount },
        { type: "Apartment", apartmentCount },
      ]);
  } catch (err) {
    next(err);
  }
};
