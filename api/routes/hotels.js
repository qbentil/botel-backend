import express from "express";
import HOTEL from "../modules/hotel.js";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  const newHotel = new HOTEL(req.body);
  try {
    const hotel = await newHotel.save();
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
});
// UPDATE
router.put("/:id", async (req, res) => {
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
});
// DELETE
router.delete("/:id", async (req, res) => {
    try {
        const deletedHotel = await HOTEL.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedHotel);
    } catch (error) {
        next(error);
    }
})

// HOTELS
router.get("/", async (req, res, next) => {
    try {
        const hotels = await HOTEL.find();
        res.status(200).json(hotels);
    } catch (error) {
        next(error)
    }
})
// HOTELS/:ID
router.get("/:id", async (req, res, next) => {
    try {
        const hotel = await HOTEL.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (error) {
        next(error);
    }
})

export default router;
