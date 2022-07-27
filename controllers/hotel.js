import HOTEL from "../models/hotel.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new HOTEL(req.body);
  try {
    const hotel = await newHotel.save();
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

// Update hotel
export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await HOTEL.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};

// delete hotel
export const deleteHotel = async (req, res, next) => {
  try {
    const deletedHotel = await HOTEL.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedHotel);
  } catch (error) {
    next(error);
  }
};

// get all hotels
export const getHotels = async (req, res, next) => {
  try {
    const hotels = await HOTEL.find();
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};

// get hotel by id
export const getHotelById = async (req, res, next) => {
  try {
    const hotel = await HOTEL.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

// get hotels count by city
export const getHotelsByCity = async (req, res, next) => {
  const city = req.query.city
  try {
    // find hotel by city case insensitive
    const hotels = await HOTEL.find({ city: { $regex: city, $options: "i" } });
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
}

//  count hotels by city
export const coutHotelsByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    // find hotel by city case insensitive
    const countList = await HOTEL.aggregate([
      // make city case insensitive
      { $match: { city: { $in: cities } } },
      // group by city
      { $group: { _id: "$city", count: { $sum: 1 } } },
      // sort by count
      { $sort: { count: -1 } }
      
    ]);
    res.status(200).json({
      success: true,
      count: countList
    });
  } catch (error) {
    next(error);
  }
}