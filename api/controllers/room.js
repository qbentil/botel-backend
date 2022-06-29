import HOTEL from "../models/Hotel.js";
import ROOM from "../models/Room.js";

export const createRoom = async (req, res, next) => {
  const { title, price, desc, maxPeople, roomNumbers } = req.body;
  const room = new ROOM({
    title,
    price,
    desc,
    maxPeople,
    roomNumbers,
  });
  try {
    await room.save();
    // push room id to hotel rooms array
    try {
      await HOTEL.findByIdAndUpdate(req.params.hotelId, {
        $push: { rooms: room._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(201).json(room);
  } catch (error) {
    next(error);
  }
};


// Update room
export const updateroom = async (req, res, next) => {
    try {
      const updatedroom = await ROOM.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedroom);
    } catch (error) {
      next(error);
    }
  };
  
  // delete room
  export const deleteRoom = async (req, res, next) => {
    try {
      const deletedRoom = await ROOM.findByIdAndDelete(req.params.id);
        // remove room id to hotel rooms array
      if(deletedRoom) {
        try {
          await HOTEL.findByIdAndUpdate(req.params.hotelId, {
            $pull: { rooms: deletedRoom._id },
          });
        } catch (err) {
          next(err);
        }
      }
      res.status(200).json(deletedRoom);
    } catch (error) {
      next(error);
    }
  };
  
  // get all rooms
  export const getRooms = async (req, res, next) => {
    try {
      const rooms = await ROOM.find();
      res.status(200).json(rooms);
    } catch (error) {
      next(error);
    }
  };
  
  // get room by id
  export const getRoomById = async (req, res, next) => {
    try {
      const room = await ROOM.findById(req.params.id);
      res.status(200).json(room);
    } catch (error) {
      next(error);
    }
  };
  
