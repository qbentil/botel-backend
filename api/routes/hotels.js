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
    res.status(500).json(error);
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
    res.status(500).json(error);
  }
});
// DELETE

// HOTELS
// HOTELS/:ID

export default router;
