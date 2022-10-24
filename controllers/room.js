import HOTEL from "../models/Hotel.js";
import ROOM from "../models/Room.js";

export const createRoom = async (req, res, next) => {
  const { hotelId } = req.params;
  const {name, price, desc, image, maxPeople, roomNumber, status} = req.body;
  try {
    const room = new ROOM({
      name, price, desc, image, maxPeople, roomNumber, status 
    });
    await room.save();
    // push room id to hotel rooms array
    try {
      await HOTEL.findByIdAndUpdate(hotelId, {
        $push: { rooms: room._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(201).json({
      success: true,
      data: room,
      message: "Room created successfully",
    });
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
      res.status(200).json({
        success: true,
        data: updatedroom,
        message: "room updated successfully",
      });
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
      res.status(200).json({
        success: true,
        data: deletedRoom,
        message: "Room deleted successfully",  
              
      });
    } catch (error) {
      next(error);
    }
  };
  
  // get all rooms
  export const getRooms = async (req, res, next) => {
    try {
      const rooms = await ROOM.find();
      res.status(200).json({
        success: true,
        data: rooms,
        message: "Rooms fetch success"
      });
    } catch (error) {
      next(error);
    }
  };
  
  // get room by id
  export const getRoomById = async (req, res, next) => {
    try {
      const room = await ROOM.findById(req.params.id);
      res.status(200).json({
        success: true,
        data: room,
        message: "Room fetch success"
      });
    } catch (error) {
      next(error);
    }
  };
  
